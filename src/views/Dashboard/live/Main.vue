<template>
    <template v-if="loading">
        <Basic />
    </template>

    <template v-else>
        <HeaderOptionesSeller />
        <div v-if="data?.length > 0" class="relative max-w-[100rem] mx-auto z-50 md:top-[60px] ">
            <div class="flex justify-between md:mt-5 gap-4 mt-2">
                <div class="hidden md:w-[29%] lg:block">
                    <CreateAution class="hidden lg:block" :data="storeUser.userData" :autions="storeAutions" />
                </div>
                <CardAutionMobile class="block lg:hidden" :data="storeUser.userData" :autions="storeAutions" />
                <div class="w-full lg:w-[70%] ">
                    <div class="flex items-center px-3 justify-between mb-4">
                        <p class=" text-xs font-semibold md:text-base  ">{{ sortedData?.length }} Vehicles</p>
                        <div class="flex items-center gap-2 ">
                            <p class="mt-2 hidden md:block">Sort by:</p>
                            <div class="flex items-center gap-5">
                                <div class="navbar-right relative">
                                    <button @click="isOpen = !isOpen"
                                        class="flex gap-2 rounded-md  shadow-md px-2 bg-white items-center">
                                        <p class="p-2 text-xs md:text-[16px] pb-1">{{ sortBy }}</p>
                                        <div class=" p-2 border-l-2 pr-0 border-[#efefef] ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
                                                <path
                                                    d="M15 3V12H17.25L14.25 15.75L11.25 12H13.5V3H15ZM9 13.5V15H2.25V13.5H9ZM10.5 8.25V9.75H2.25V8.25H10.5ZM10.5 3V4.5H2.25V3H10.5Z"
                                                    fill="#858585" />
                                            </svg>
                                        </div>
                                    </button>
                                    <div v-if="isOpen"
                                        class="absolute  z-10 top-auto left-0 w-full py-2 mt-2 rounded-lg border-gray-900 bg-white shadow-xl">
                                        <div @click="setSorBy('Current Bid')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Current Bid
                                        </div>
                                        <div @click="setSorBy('Time Remaining')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Time Remaining
                                        </div>
                                        <div @click="setSorBy('Year')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Year
                                        </div>

                                    </div>
                                </div>
                                <div class="shadow-md md:flex rounded-md hidden bg-white">
                                    <div @click="changeGridTemplate"
                                        :class="changeLayouts ? 'bg-white' : 'bg-[#EFF8E0]'" class="p-2 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M19 11V5H5V11H19ZM19 13H5V19H19V13ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z"
                                                :fill="changeLayouts ? '#09121F' : '#7EC600'" />
                                        </svg>
                                    </div>
                                    <div @click="changeGridTemplate"
                                        :class="changeLayouts ? 'bg-[#EFF8E0]' : 'bg-white'"
                                        class=" p-2 flex item-center justify-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z"
                                                :fill="changeLayouts ? '#7EC600' : '#09121F'" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="p-2" v-if="sortedData.length > 0"
                        :class="changeLayouts ? 'grid md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up  animate-ease-in-out animate-delay-200'">
                        <div v-for="(auction, index) in sortedData" :key="index"
                            class="bg-white flex  md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full  "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <CardLiveSeller :key="counter" :auction="auction" :changeLayouts="changeLayouts" />
                        </div>
                    </div>
                    <div v-else>
                        <ScrrenNoSorbySeller />
                    </div>
                </div>
            </div>
        </div>
        <template v-else>
            <ScreenCreateAution />
        </template>
        <ModalViewDetailsVue v-if="statusModal.isActive" />

    </template>
</template>

<script>
import { ref, onMounted, computed, watch, watchEffect } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import { ModalViewDetails } from "@/stores/modalViewDetails";
import HeaderOptionesSeller from '../../../components/Header/HeaderOptionesSeller.vue'
import ModalViewDetailsVue from '../../../components/Modals/ModalViewDetails/ModalViewDetails.vue'
import CreateAution from '../../../components/Cards/CreateAution.vue'
import CardAutionMobile from '../../../components/Cards/CardAutionMobile.vue'
import CardLiveSeller from '../../../components/Cards/CardLiveSeller.vue'
import Basic from '../../../components/Loading/Basic.vue'
import ScreenCreateAution from '../../../components/Screen/ScreenCreateAution.vue'
import ScrrenNoSorbySeller from '../../../components/Screen/ScrrenNoSorbySeller.vue'
import { arrayPhotos } from "../../../utils/packPhotos";
export default {

    components: {
        ModalViewDetailsVue,
        HeaderOptionesSeller,
        CreateAution,
        CardAutionMobile,
        CardLiveSeller,
        Basic,
        ScreenCreateAution,
        ScrrenNoSorbySeller
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const isOpen = ref(false)
        const loading = ref(false)
        const changeLayouts = ref(false)
        const storeAutions = useAuctionStore()
        const storeUser = useAuthStore()
        const path = ref(computed(() => route.name))
        const statusModal = ModalViewDetails()
        const autionUpdate = ref(computed(() => storeUser.aution))
        const data = ref([])
        const sortBy = ref('year')
        const counter = ref(0)
        const changeGridTemplate = () => {

            changeLayouts.value = !changeLayouts.value
            counter.value++
        }
        watch(autionUpdate, async (newQuestion, oldQuestion) => {

            if (autionUpdate.value.status == 'live') {
                data.value.push(newQuestion)
                console.log('data.value antes', data.value.length)
                const i = data.value.findIndex(x => x._id === newQuestion._id)
                data.value[i] = newQuestion
                console.log('data.value antes', data.value.length)
                let photos = null;
                photos = arrayPhotos(data.value[i].vehicleDetails)
                if (photos.length > 0) {
                    data.value[i].photos = photos
                } else {
                    photos = null
                }
            }
            if (autionUpdate.value?.status == 'completed') {
                console.log('ENTRO EN EL WACTH completed')
                let result = null;
                result = data.value.filter((remove) => remove._id !== autionUpdate.value._id)
                console.log('result', result)
                console.log(' data.value', data.value)
                data.value = []
                data.value = result
            }

            if (autionUpdate.value?.status == 'bids completed') {
                console.log('ENTRO EN EL WACTH bids completed')
                let result = null;
                result = data.value.filter((remove) => remove._id !== autionUpdate.value._id)
                console.log('result', result)
                console.log(' data.value', data.value)
                data.value = []
                data.value = result

            }
            counter.value++
        })
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const index = async () => {
            loading.value = true
            try {
                let res = await storeAutions.index()

                if (res) {
                    data.value = storeAutions.live
                    data.value.map((autions, index) => {
                        const formatter = new Intl.NumberFormat();
                        autions.vehicleDetails.odometer = formatter?.format(autions.vehicleDetails.odometer)
                        let photos = []
                        if (autions?.vehicleDetails?.additionalDocuments,
                            autions?.vehicleDetails?.exteriorPhotos,
                            autions?.vehicleDetails?.interiorPhotos,
                            autions?.vehicleDetails?.driverLicense) {
                            var d = photos.concat(
                                autions?.vehicleDetails?.additionalDocuments,
                                autions?.vehicleDetails?.exteriorPhotos,
                                autions?.vehicleDetails?.interiorPhotos,
                                autions?.vehicleDetails?.vehicleDamage,
                                autions?.vehicleDetails?.driverLicense,
                                autions?.vehicleDetails?.originalDocument,
                            );
                            let resD = d.map((item, i) => {
                                let name = item.split("/")
                                let newObjet = {
                                    name: name[2],
                                    url: item
                                }
                                return newObjet
                            })
                            return autions.photos = resD
                        } else {
                            return autions.photos = null
                        }
                    })
                }

            } catch (error) { } finally {
                loading.value = false
            }
        }
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
        }
        function timeConvert(n) {
            var num = n;
            var hours = (num / 60);
            var rhours = Math.floor(hours);
            var minutes = (hours - rhours) * 60;
            var rminutes = Math.round(minutes);
            return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
        }
        const setSorBy = (sort) => {
            sortBy.value = sort
            isOpen.value = false

        }

        const statusOrder = [
            'live',
            'bids completed',
            'upcoming',
            'drop off',
            'completed',
            'unapproved',
            'cancelled',
            'draft',
            'reviewed'
        ]

        const sortedData = computed(() => {
            switch (sortBy.value) {
                case 'Current Bid':
                    let sortStatus = {}
                    data.value.forEach(auction => {
                        if (!sortStatus[auction.status]) sortStatus[auction.status] = []
                        sortStatus[auction.status].push(auction)
                    })
                    const sortedItems = []
                    for (let key of statusOrder) {
                        if (sortStatus[key])
                            sortedItems.push(sortStatus[key].sort((a, b) => timeToEnd(a.startDate, a.duration) - timeToEnd(b.startDate, b.duration)))
                    }
                    return sortedItems.flat()
                case 'Time Remaining':
                    return data.value.filter(p => true).sort((a, b) => timeToEnd(b.startDate, b.duration) - timeToEnd(a.startDate, a.duration))
                case 'Year':
                    return data.value.sort((a, b) => parseFloat(b.vehicleDetails.year) - parseFloat(a.vehicleDetails.year));
                default:
                    return data.value
            }
        })
        watchEffect(() => {
            if (sortBy.value) {
                counter.value++
            }
            else {
                counter.value++
            }
        })
        onMounted(() => {
            let resTime = timeConvert(45000000)
            index()

        })

        return {
            loading,
            isOpen,
            changeLayouts,
            changeGridTemplate,
            bucket,
            data,
            storeUser,
            storeAutions,
            path,
            statusModal,
            timeToEnd,
            sortedData,
            setSorBy,
            counter,
            sortBy

        };
    },
};
</script>