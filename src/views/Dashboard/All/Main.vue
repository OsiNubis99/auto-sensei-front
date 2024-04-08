<template>
    <template v-if="loading">
        <Basic />
    </template>

    <template v-else>
        <HeaderOptionesSeller :storeAutions="storeAutions" :data="data" />
        <div v-if="data?.length > 0"
            class="relative max-w-[100rem] bg-[#BDBDBF66] md:bg-white mx-auto z-50 md:top-[60px] ">
            <div class="flex justify-between md:mt-5 gap-4 mt-2">
                <div class="hidden md:w-[29%] lg:block">
                    <CreateAution class="hidden lg:block" :data="storeUser.userData" :autions="storeAutions" />
                </div>
                <CardAutionMobile class="block lg:hidden" :data="storeUser.userData" :autions="storeAutions" />
                <div class="w-full lg:w-[70%] ">
                    <div class="flex items-center justify-between px-2 pt-4 lg:p-0  mb-4">
                        <p class=" font-semibold ">{{ data?.length }} Vehicles</p>
                        <!--  <SorBy :key="counter" :changeLayouts="changeLayouts" :changeGridTemplate="changeGridTemplate" /> -->
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
                                        <div @click="setSorBy('Auction Status & Date')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Auction Status & Date
                                        </div>
                                        <div @click="setSorBy('Auction Title')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Auction
                                            Title
                                        </div>
                                        <div @click="setSorBy('Auction Start')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Auction
                                            Start</div>

                                    </div>
                                </div>
                                <div class="shadow-md lg:flex rounded-md hidden bg-white">
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
                        :class="changeLayouts ? 'grid grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up  animate-ease-in-out animate-delay-200'">
                        <div v-for="(auction, index) in sortedData" :key="index"
                            class="bg-white flex  md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">

                            <CardAutionAll :key="counter" :auction="auction" :changeLayouts="changeLayouts"
                                :decline="declineAution" />
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
    </template>
    <div v-if="openDecline"
        class="fixed inset-0 flex items-end md:items-center z-50 justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-md overflow-auto  bg-white rounded-lg shadow-xl animation-fade-modal">
            <div class="p-2 md:p-4  rounded-t-lg  bg-blue-dark flex items-center justify-between">
                <p class=" text-sm md:text-xl text-white">Cancel Auction</p>
                <svg @click="openDecline = false" xmlns="http://www.w3.org/2000/svg"
                    class=" w-6 h-8 md:w-8   md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="p-4 border border-b-[#E0E0E0] flex gap-3 flex-col  ">
                <div class="flex gap-3 items-start ">
                    <div class="w-[80px] md:w-[120px] md:h-[90px]">
                        <img v-if="autionModal?.photos" class="w-full h-full rounded-lg object-cover"
                            :src="bucket + autionModal?.photos[0].url" alt="">
                        <img v-else class="w-full h-full rounded-lg object-cover" src="@/assets/img/jpg/image.jpg"
                            alt="">
                    </div>
                    <div>
                        <p class="font-semibold capitalize md:text-base text-sm ">{{ autionModal?.vehicleDetails?.year
                            }} {{
        autionModal?.vehicleDetails?.make }} {{
        autionModal?.vehicleDetails?.model }}</p>
                        <p class="capitalize text-sm md:text-base ">Final Bid</p>
                        <div class="flex gap-1">
                            <p v-if="autionModal?.bids[0]?.amount"
                                class="font-medium text-sm text-base-black md:text-2xl">
                                ${{
        autionModal?.bids[0].amount }} </p>
                            <p v-else-if="autionModal?.vehicleDetails?.basePrice" class="font-medium text-base-black 
 text-xs md:text-2xl ">${{ auction?.vehicleDetails?.basePrice }}
                            </p>
                            <p v-else class="font-medium text-base-black text-xs md:text-2xl ">$0 </p>
                            <p class="text-[#666666] mt-1 text-xs md:text-base "> /{{ autionModal?.bids?.length }} Bids
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:py-10 p-2 md:px-4 pb-2">
                <p class="text-xs md:text-base">Are you sure you want to cancel the auction for the <span
                        class="font-medium">{{
        autionModal?.vehicleDetails?.model }}</span>?</p>
                <div class="w-full flex gap-2 mt-4 items-center">
                    <button @click="openDecline = false"
                        class="btn w-full border-[#E0E0E0] border rounded-lg ">No</button>
                    <button @click="cancelAution" class="btn w-full bg-primary rounded-lg ">Yes</button>
                </div>
            </div>
        </div>
    </div>

    <ModalAcceptAutionVue v-if="statusModal?.isActive" :acceptAution="acceptAution" />
    <ModalReviewVue v-if="statusModalR?.isActive" :index="index" />
    <ModalViewDetailsVue v-if="statusModalView?.isActive" />
</template>

<script>
import { ref, onMounted, computed, watchEffect } from "vue";
import { toast } from "vue3-toastify";
import { useRoute, useRouter } from 'vue-router'
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import ModalAcceptAutionVue from "../../../components/Modals/ModalAcceptAution/ModalAcceptAution.vue";
import { ModalAcceptAution } from "@/stores/modalAcceptAution";
import { ModalReview } from "@/stores/modalReview";
import { ModalViewDetails } from "@/stores/modalViewDetails";
import ModalReviewVue from '@/components/Modals/ModalReview/ModalReview.vue'
import ModalViewDetailsVue from '../../../components/Modals/ModalViewDetails/ModalViewDetails.vue'
import CreateAution from '../../../components/Cards/CreateAution.vue'
import Basic from '../../../components/Loading/Basic.vue'
import CardAutionAll from '../../../components/Cards/CardAutionAll.vue'
import CardAutionMobile from '../../../components/Cards/CardAutionMobile.vue'
import HeaderOptionesSeller from '../../../components/Header/HeaderOptionesSeller.vue'
import ScreenCreateAution from '../../../components/Screen/ScreenCreateAution.vue'
import SorBy from '../../../components/Filters/SorBy.vue'
import ScrrenNoSorbySeller from '../../../components/Screen/ScrrenNoSorbySeller.vue'
import { arrayPhotos } from '../../../utils/packPhotos'
export default {

    components: {
        ModalAcceptAutionVue,
        ModalViewDetailsVue,
        ModalReviewVue,
        CreateAution,
        CardAutionMobile,
        Basic,
        CardAutionAll,
        HeaderOptionesSeller,
        ScreenCreateAution,
        SorBy,
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
        const statusModal = ModalAcceptAution()
        const path = ref(computed(() => route.name))
        const statusModalR = ModalReview()
        const openDecline = ref(false)
        const autionModal = ref(null)
        const counter = ref(0)
        const data = ref([])
        const sortBy = ref('Auction Status & Date')
        const statusModalView = ModalViewDetails()
        const changeGridTemplate = () => {
            changeLayouts.value = !changeLayouts.value
            counter.value++
        }
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const cancelAution = async () => {
            switch (autionModal.value.option) {
                case "cancelled":
                    loading.value = true
                    try {
                        let res = await storeAutions.autionsCancel(autionModal.value._id)
                        if (res) {
                            autionModal.value = null
                            openDecline.value = false
                            toast('Successfully cancel the auction', {
                                theme: "colored",
                                type: "success",
                                position: "top-center",
                            });
                            index()
                        }
                    } catch (error) {
                        toast(error?.response?.data?.message || 'error al cargar', {
                            type: "error",
                            position: "top-center",
                        });
                        loading.value = false
                    }
                    break;
                case "decline":
                    loading.value = true
                    try {
                        let res = await storeAutions.autionsDecline(autionModal.value._id)
                        if (res) {
                            autionModal.value = null
                            openDecline.value = false
                            toast('Successfully declined the final bids. The vehicle has been moved to the "Parked"', {
                                theme: "colored",
                                type: "success",
                                position: "top-center",
                            });
                            index()
                        }
                    } catch (error) {
                        toast(error?.response?.data?.message || 'error al cargar', {
                            type: "error",
                            position: "top-center",
                        });
                        loading.value = false
                    }
                    break;
                default:
                    break;
            }


        }
        const index = async () => {
            loading.value = true
            try {
                let res = await storeAutions.index()
                data.value = res.data.filter((item) => item.status !== "draft")
                data.value.map((autions, index) => {
                    autions.title = `${autions.vehicleDetails.year} ${autions.vehicleDetails.make} ${autions.vehicleDetails.model}`
                    const formatter = new Intl.NumberFormat();
                    autions.vehicleDetails.odometer = formatter?.format(autions.vehicleDetails.odometer)
                    let photos = null;
                    photos = arrayPhotos(autions.vehicleDetails)
                    if (photos.length > 0) {
                        autions.photos = photos
                    } else {
                        photos = null
                    }
                })
                loading.value = false
            } catch (error) {
                loading.value = false

            }
        }
        const declineAution = (auction, option) => {
            openDecline.value = true
            autionModal.value = auction
            autionModal.value.option = option
        }
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
        }

        function timeToStart(startDate) {
            if (!startDate) return 0;
            return new Date(startDate) - Date.now();
        }
        const acceptAution = (url) => {
            console.log('REVISAR SI LLEGA', url)
            /* loading.value = true
            try {
                let res = storeAutions.acceptAutions(statusModal.dataAutiont._id, url)
                if (res) {
                    return '200'
                }
            } catch (error) {

            } finally {
                index()
            } */

        }

        const setSorBy = (sort) => {
            isOpen.value = false
            sortBy.value = sort

        }

        const statusOrder = [
            'bids completed',
            'live',
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
                case 'Auction Status & Date':
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
                case 'Auction Title':
                    return data.value.filter(p => true).sort((a, b) => {
                        console.log(a.title, b.title, a.title === b.title, a.title > b.title, a.title < b.title)
                        if (a.title === b.title) return 0
                        if (a.title > b.title) return 1
                        if (a.title < b.title) return -1
                    })
                case 'Auction Start':
                    return data.value.filter(p => true).sort((a, b) => timeToEnd(a.startDate, a.duration) - timeToEnd(b.startDate, b.duration))
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
            declineAution,
            autionModal,
            openDecline,
            statusModalR,
            statusModalView,
            timeToEnd,
            timeToStart,
            acceptAution,
            cancelAution,
            index,
            counter,
            setSorBy,
            sortedData,
            sortBy

        };
    },
};
</script>