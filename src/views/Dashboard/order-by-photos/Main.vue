<template>
    <template v-if="loading">
        <Basic />
    </template>
    <div v-else class=" max-w-full m-auto bg-[#efefef] ">
        <div v-for="category in categories" :key="category.id" @drop="onDrop($event, category.id)" class="droppable"
            @dragover.prevent @dragenter.prevent>
            <h4
                class=" !text-[#3b3737] animate-fade-up  animate-ease-in-out animate-delay-200 font-semibold font-Nohemi">
                {{ category.title }}</h4>
            <div v-if="category.id == 0" class="w-full">
                <div v-if="categories[0].children.length === 0" :key="index">
                    <div
                        class="w-full h-[190px] flex justify-center items-center  bg-[#e4e4e4] rounded-lg animate-fade-up  animate-ease-in-out animate-delay-100 ">
                        <div :class="showAnimation > -1 ? 'contend-drag' : ''" @dragover.prevent
                            class="  border-dashed border-2  flex-col gap-4 h-full rounded-lg  w-full flex justify-center items-center  bg-[#6d53b01c] border-[#6d53b0b6]">
                            <div class="effecto-camera animate-fade-up  animate-ease-in-out animate-delay-300">
                                <img class="!w-[80px] !h-[80px]" src="@/assets/img/png/photo-camera.png" alt="">
                                <img class="!w-[80px] !h-[80px]" src="@/assets/img/png/photo-camera.png" alt="">
                                <img class="!w-[80px] !h-[80px]" src="@/assets/img/png/photo-camera.png" alt="">
                            </div>
                            <p
                                class=" animate-fade-up  animate-ease-in-out animate-delay-400 font-semibold text-lg  text-[#6d53b0] capitalize ">
                                Drag with mouse to sort images
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="category.children.length > 0" class="child"
                :class="[category.id == 0 ? 'child-0' : 'child-1', categories[1].children.length === 0 && 'child-1']">
                <div v-lazy-container="{ selector: 'img' }"
                    v-for="(item, index) in category.children.filter((x) => x.categoryId === category.id)"
                    :key="item.id" :class="`animate-delay-${index}00 animate-duration-${(index) + 1}000`"
                    @dragend="dragEnd" @dragstart="onDragStart($event, item, index)"
                    class="draggable animate-ease-in-out animate-fade-up " draggable="true">
                    <!--    <img class="draggable-img" :src="bucket + item.img" alt=""> -->
                    <img @click="viewPhoto(item.img)"
                        class="draggable-img hover:-translate-y-6 cursor-pointer transition-all duration-700 ease-out"
                        :data-src="bucket + item.img">
                </div>
            </div>
            <div v-show="categories[1].children.length === 0 && category.id == 1"
                class="w-full child  h-[250px] gap-4 flex-col flex justify-end items-end">
                <div :class="showAnimation > -1 ? 'contend-drag' : ''" @dragover.prevent
                    class="  border-dashed border-2  flex-col gap-4 h-full rounded-lg  w-full flex justify-center items-center  bg-[#6d53b01c] border-[#6d53b0b6]">
                    <div class="effecto-camera">
                        <img class="!w-[80px] !h-[80px]" src="@/assets/img/png/photo-camera.png" alt="">
                        <img class="!w-[80px] !h-[80px]" src="@/assets/img/png/photo-camera.png" alt="">
                        <img class="!w-[80px] !h-[80px]" src="@/assets/img/png/photo-camera.png" alt="">
                    </div>

                    <p class=" font-semibold text-lg  text-[#6d53b0] capitalize ">Drag with mouse to sort images
                    </p>
                </div>
                <button @click="updatePhotos"
                    class=" btn rounded-lg bg-[#6d53b0] text-white  flex justify-center items-center">
                    Update Photos
                </button>
            </div>

        </div>
        <ModalViewImageVue v-if="statusModalViewImage?.isActive" />
    </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { useAuctionStore } from "@/stores/auctions";
import { toast } from "vue3-toastify";
import { ModalViewImage } from '@/stores/modalViewImage';
import Basic from '@/components/Loading/Basic.vue';
import ModalViewImageVue from "@/components/Modals/ModalViewImage/ModalViewImage.vue";
import loadimage from '@/assets/img/jpg/loading.gif'
export default {
    components: {
        ModalViewImageVue,
        loadimage,
        Basic
    },
    setup() {
        const loading = ref(false)
        const store = useAuctionStore()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const route = useRoute();
        const router = useRouter();
        const id_aution = ref()
        const statusModalViewImage = ModalViewImage()
        const categories = ref([
            {
                id: 0,
                title: "Update Order",
                children: [],
            },
            {
                id: 1,
                title: "Current Order",
                children: [],
            },
        ])
        const showAnimation = ref(-1)
        const onDrop = (e, categoryId) => {
            const itemId = parseInt(e.dataTransfer.getData("itemId"));
            const id = categoryId === 0 ? 1 : 0
            const child = categories.value[id].children.find(c => c.id === itemId)
            child.categoryId = categoryId;
            removeFromList(id, itemId)
            addToList(categoryId, child)
        }
        const addToList = (categoryId, child) => {
            categories.value[categoryId].children = [...categories.value[categoryId].children, child];
        }
        const dragEnd = (ev) => {
            showAnimation.value = -1
        }
        const addClass = (e) => {
            console.log('e', e)
            showAnimation.value = e.target.textContent

        }
        const removeFromList = (id, itemId) => {
            categories.value[id].children = categories.value[id].children.filter(c => c.id !== itemId);
        }
        const onDragStart = (e, item, index) => {
            console.log('hola')
            e.dataTransfer.dropEffect = "move";
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("itemId", item.id.toString());
            showAnimation.value = index
        }
        const getDataAution = async (id) => {
            loading.value = true
            try {
                let res = await store.getAutionById({ uuid: id })
                if (res) {
                    let newArray = [];
                    newArray = res.data.vehicleDetails.exteriorPhotos.map((img, index) => {
                        let newObjet = {
                            id: index,
                            img,
                            categoryId: 1
                        }
                        return newObjet
                    })
                    if (newArray.length > 0) {
                        categories.value[1].children = newArray
                        loading.value = false
                    }
                }
            } catch (error) {
                loading.value = false
                console.log('error', error)
            }

        }
        const updatePhotos = async () => {
            loading.value = true
            let arrayNewOrder = [];
            let arrayUpdate = []
            arrayNewOrder = categories.value[0].children
            for (let index = 0; index < arrayNewOrder.length; index++) {
                const element = arrayNewOrder[index];
                arrayUpdate.push(element.img)
            }
            let dataPost = {
                vehicleDetails: {
                    exteriorPhotos: arrayUpdate,
                }
            }
            try {
                let res = await store.update({ uuid: id_aution.value, payload: dataPost })
                if (res) {
                    toast('Successfully order photos', { type: "success", position: "top-center", theme: "colored", });
                    categories.value = [
                        {
                            id: 0,
                            title: "Update Order",
                            children: [],
                        },
                        {
                            id: 1,
                            title: "Current Order",
                            children: [],
                        },
                    ]
                    getDataAution(id_aution.value)
                }
            } catch (error) {
                loading.value = false
            }

        }
        const viewPhoto = (photo) => {
            console.log('photo', photo)
            statusModalViewImage.openModal({
                active: true,
                img: {
                    bucket: true,
                    preview: photo
                }
            })
        }
        onMounted(() => {
            if (route.params.id) {
                id_aution.value = route.params.id
                getDataAution(route.params.id)
            }
        })
        return {
            bucket,
            dragEnd,
            onDrop,
            addClass,
            onDragStart,
            updatePhotos,
            categories,
            showAnimation,
            viewPhoto,
            statusModalViewImage
        };
    },
};
</script>