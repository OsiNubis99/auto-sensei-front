
<template>
    <div class=" bg-[#0B1107]   h-full min-h-screen ">
        <header>
            <nav class="bg-[#22282F] flex justify-between items-center p-6">
                <ul class="flex gap-6 ">
                    <li @click="changeOptions('all-photos')" :class="options.allPhoto ? 'text-primary' : 'text-white'"
                        class=" cursor-pointer">All Photos (13)
                    </li>
                    <li @click="changeOptions('exterior')" :class="options.exterior ? 'text-primary' : 'text-white'"
                        class="cursor-pointer">Exterior</li>
                    <li @click="changeOptions('interior')" :class="options.interior ? 'text-primary' : 'text-white'"
                        class="cursor-pointer">Interior</li>
                    <li @click="changeOptions('document')" :class="options.document ? 'text-primary' : 'text-white'"
                        class="cursor-pointer">Documents </li>
                </ul>
                <div v-if="!fullScreen">
                    <svg @click="router.go(-1)" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 10.5867L16.95 5.63672L18.364 7.05072L13.414 12.0007L18.364 16.9507L16.95 18.3647L12 13.4147L7.04999 18.3647L5.63599 16.9507L10.586 12.0007L5.63599 7.05072L7.04999 5.63672L12 10.5867Z"
                            fill="white" />
                    </svg>
                </div>
                <div v-else class="flex gap-4 items-center pr-4 text-white text-md">
                    <p>{{ activeIndex }}</p>
                    <p>of</p>
                    <p>13</p>
                    <svg @click="activeFullScreen(index, 'closetFull')" class="cursor-pointer  "
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 10.5867L16.95 5.63672L18.364 7.05072L13.414 12.0007L18.364 16.9507L16.95 18.3647L12 13.4147L7.04999 18.3647L5.63599 16.9507L10.586 12.0007L5.63599 7.05072L7.04999 5.63672L12 10.5867Z"
                            fill="white" />
                    </svg>

                </div>
            </nav>
        </header>
        <div v-if="!fullScreen" class="grid grid-cols-4 gap-6 py-10 px-40">
            <div v-if="data?.photos" v-for="(item, index) in data?.photos" :key="index">
                <img @click="activeFullScreen(index, 'openFull')"
                    :class="`animate-fade-up w-full  object-cover animate-ease-in-out animate-delay-${index * 10}`" :src="bucket + item.url" alt="">
            </div>
        </div>
        <div v-else class="w-full flex justify-center items-center h-screen  p-5 sm:p-0">
            <div class="!w-[90%] relative mt-[15%] !h-full">
                <swiper @slideChange="onSlideChange" @swiper="getRef" :modules="modules" navigation :slides-per-view="1"
                    class="mySwiperHome-full !h-[60vh] relative ">
                    <swiper-slide class="!h-full !flex !justify-center !items-center">
                        <img class="!w-[70%] h-[100%]  object-cover"
                            src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
                    </swiper-slide>
                    <swiper-slide class="!h-full !flex !justify-center !items-center">
                        <img class="!w-[70%] h-[100%]  object-cover"
                            src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
                    </swiper-slide>
                    <swiper-slide class="!h-full !flex !justify-center !items-center">
                        <img class="!w-[70%] h-[100%]  object-cover"
                            src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
  
<script >
import { ref, onMounted, computed } from "vue";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRoute, useRouter } from 'vue-router'
import { useAuctionStore } from "@/stores/auctions";
import moment from "moment";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const options = ref({
            allPhoto: true,
            exterior: false,
            interior: false,
            document: false,
        })
        const dataPhoto = ref()

        const swiper = ref(null)
        const fullScreen = ref(false)
        const activeIndex = ref(1)
        const route = useRoute();
        const loading = ref(false)
        const storeAutions = useAuctionStore()
        const router = useRouter();
        const data = ref()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const activeFullScreen = (index, option) => {
            switch (option) {
                case 'openFull':
                    fullScreen.value = true
                    break;
                case 'closetFull':
                    fullScreen.value = false
                    break;
                default:
                    break;
            }
        }

        const changeOptions = (op) => {
            let exterior = [];
            let interior = []
            let document = []
            let all = []
            switch (op) {
                case 'all-photos':
                    options.value.allPhoto = true
                    options.value.exterior = false
                    options.value.interior = false
                    options.value.document = false
                    data.value.photos = dataPhoto.value
                    break;
                case 'exterior':
                    options.value.allPhoto = false
                    options.value.exterior = true
                    options.value.interior = false
                    options.value.document = false
                    data.value.photos = data.value.exteriorPhotos
                     
                    break;
                case 'interior':
                    options.value.allPhoto = false
                    options.value.exterior = false
                    options.value.interior = true
                    options.value.document = false
                    data.value.photos = data.value.interiorPhotos
                     
                    break;
                case 'document':
                    options.value.allPhoto = false
                    options.value.exterior = false
                    options.value.interior = false
                    options.value.document = true
                    data.value.photos = data.value.photosDoc
                    break;
                default:
                    break;
            }
        }
        function getRef(swiperInstance) {
            swiper.value = swiperInstance
        }
        const onSlideChange = (e) => {
            activeIndex.value = e.activeIndex + 1
        }
        const index = async (id) => {
            loading.value = true
            try {
                let res = await storeAutions?.getAutionById({ uuid: id })
                 
                if (res) {
                    data.value = storeAutions?.autionById
                    if (data.value.startDate) {
                        data.value.startDate = moment(data.value.startDate).format('MMM DD, h: mm: A')
                    }

                    let photos = []
                    let exterior = []
                    let interior = []
                    if (data.value?.vehicleDetails?.additionalDocuments,
                        data.value?.vehicleDetails?.exteriorPhotos,
                        data.value?.vehicleDetails?.interiorPhotos,
                        data.value?.vehicleDetails?.vehicleDamage) {
                        var d = photos.concat(
                            data.value?.vehicleDetails?.additionalDocuments,
                            data.value?.vehicleDetails?.exteriorPhotos,
                            data.value?.vehicleDetails?.interiorPhotos,
                            data.value?.vehicleDetails?.vehicleDamage
                        );
                        let resD = d.map((item, i) => {
                            let name = item.split("/")
                            let newObjet = {
                                name: name[2],
                                url: item
                            }
                            return newObjet
                        })
                        var e = exterior.concat(
                            data.value?.vehicleDetails?.exteriorPhotos,
                        );
                        let resE = e.map((item, i) => {
                            let name = item.split("/")
                            let newObjet = {
                                name: name[2],
                                url: item
                            }
                            return newObjet
                        })
                        var i = interior.concat(
                            data.value?.vehicleDetails?.interiorPhotos,
                        );
                        let resI = i.map((item, i) => {
                            let name = item.split("/")
                            let newObjet = {
                                name: name[2],
                                url: item
                            }
                            return newObjet
                        })
                        var doc = photos.concat(
                            data.value?.vehicleDetails?.driverLicense,
                            data.value?.vehicleDetails?.originalDocument,
                        );
                        let resDoc = doc.map((item, i) => {
                            let name = item.split("/")
                            let newObjet = {
                                name: name[2],
                                url: item
                            }
                            return newObjet
                        })
                        dataPhoto.value = resD
                        data.value.photos = resD
                        data.value.photosDoc = resDoc
                        data.value.exteriorPhotos = resE
                        data.value.interiorPhotos = resI

                    } else {
                        return data.value.photos = null
                    }
                }
            } catch (error) {
                 

            } finally {
                loading.value = false
            }
        }
        onMounted(() => {
            if (route.params.id) {
                index(route.params.id)
            }



        })
        return {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            options,
            changeOptions,
            fullScreen,
            activeFullScreen,
            getRef,
            onSlideChange,
            activeIndex,
            router,
            route,
            data,
            bucket
        };
    },
};
</script>
  
    
  