<template>
    <template v-if="loading">
        <Basic />
    </template>

    <template v-else>
        <HeaderOptionsDealer :storeAutions="storeAutions" :key="counter" :data="data" />

        <div class="relative max-w-[100rem] mx-auto z-50 md:top-[60px] ">
            <template v-if="data.length == 0">
                <ScreenNoDataDealer />
            </template>
            <div v-else class="flex justify-between md:mt-5 gap-4 mt-2">
                <div class=" hidden md:w-[29%] md:block">
                    <FilterBig />
                </div>
                <div class="w-full md:w-[70%] ">
                    <div class="flex items-center px-3 justify-between mb-4">
                        <p class=" text-xs font-semibold md:text-base " v-if="data.length > 0">{{ data.length }}
                            Vehicles</p>
                        <div class="flex items-center gap-2 ">
                            <p class="p-2 text-xs md:text-[16px] pb-1">Sort by:</p>
                            <!--   <div class="flex items-center gap-5">
                                <div class="navbar-right relative">
                                    <button @click="isOpen = !isOpen"
                                        class="flex gap-2 rounded-md  shadow-md px-2 bg-white items-center">
                                        <p class="p-2 pb-1">Auction Posted</p>
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
                                        <div @click="setSorBy('auction-posted')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Auction Posted
                                        </div>
                                        <div @click="setSorBy('odometer')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Odometer
                                        </div>
                                        <div @click="setSorBy('year')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Year
                                        </div>
                                    </div>
                                </div>
                                <div class="shadow-md  rounded-md flex bg-white">
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
                            </div> -->
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
                                        <div @click="setSorBy('Auction Posted')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Auction Posted
                                        </div>
                                        <div @click="setSorBy('Odometer')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Odometer
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
                    <!-- <div class="flex gap-2 justify-center mt-48 items-center flex-col">
                    <div>
                        <img class="object-cover " src="../../../assets/svg/noresultsdealer.svg" alt="">
                    </div>
                    <h3 class="text-center text-lg"><strong>No Results Found</strong></h3>
                    <p class="text-center">You can check your preference car in live bidding <br> or adjust your search
                        criteria</p>
                    <div class="flex gap-2 items-center">
                        <button class="btn border border-[#E0E0E0] ">Reset Filter</button>
                        <button class="btn bg-primary text-base-black ">Search Live Bidding</button>
                    </div>
                </div> -->
                    <div class="p-2"
                        :class="changeLayouts ? 'grid grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up  animate-ease-in-out animate-delay-200'">
                        <div v-for="(auction, index) in data" :key="index"
                            class="bg-white flex  md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full  "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <CardLiveDealer :key="counter" :auction="auction" :changeLayouts="changeLayouts"
                                :auth="auth" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed md:hidden flex justify-center items-center bottom-2 w-full z-50">
            <div class="flex items-center py-2 rounded-lg px-3 gap-2 bg-base-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path
                        d="M7.33317 7.83333V11.8333L4.6665 13.1667V7.83333L0.666504 1.83333V0.5H11.3332V1.83333L7.33317 7.83333ZM2.26917 1.83333L5.99984 7.42933L9.7305 1.83333H2.26917Z"
                        fill="white" />
                </svg>
                <p class="text-white text-xs">Filter</p>
            </div>

        </div>
        <ModalBidNow v-if="statusModal.isActive" :form="formData" />
    </template>
</template>

<script>
import { ref, onMounted, computed, watch, watchEffect } from "vue";
import { toast } from "vue3-toastify";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import { ModalBids } from '@/stores/modalBids';
import { useRoute, useRouter } from 'vue-router'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ModalBidNow from "../../../components/Modals/ModalBidNow/ModalBidNow.vue";
import HeaderOptionsDealer from '../../../components/Header/HeaderOptionsDealer.vue'
import ScreenNoDataDealer from '../../../components/Screen/ScreenNoDataDealer.vue'
import CardLiveDealer from '../../../components/Cards/CardLiveDealer.vue'
import Basic from '../../../components/Loading/Basic.vue'
import FilterBig from "../../../components/Filters/FilterBig.vue";
export default {

    components: {
        Swiper,
        SwiperSlide,
        ModalBidNow,
        HeaderOptionsDealer,
        ScreenNoDataDealer,
        CardLiveDealer,
        Basic,
        FilterBig
    },
    setup() {
        const isOpen = ref(false)
        const loading = ref(false)
        const changeLayouts = ref(false)
        const changeGridTemplate = () => {
            changeLayouts.value = !changeLayouts.value
        }
        const formData = ref({
            placeyourbid: 0,
            cardNumber: undefined,
            nameOnCard: undefined,
            expiryDate: undefined,
            cvv: undefined,
            saveCard: undefined,
            termsConditions: undefined,
            notify: undefined,
            creditCard: undefined
        })
        const statusModal = ModalBids()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const data = ref([])
        const storeAutions = useAuctionStore()
        const path = ref(computed(() => route.name))
        const counter = ref(0)
        const route = useRoute();
        const auth = useAuthStore()
        const autionUpdate = ref(computed(() => auth.aution))
        const sortBy = ref('Auction Posted')
        watch(autionUpdate, async (newQuestion, oldQuestion) => {
            const i = data.value.findIndex(x => x._id === newQuestion._id)
            data.value[i] = newQuestion
           
            if (autionUpdate.value.status == 'live') {
                const i = data.value.findIndex(x => x._id === newQuestion._id)
                data.value[i] = newQuestion
                let photos = []
                counter.value++
                if (data.value[i]?.vehicleDetails?.additionalDocuments,
                    data.value[i]?.vehicleDetails?.exteriorPhotos,
                    data.value[i]?.vehicleDetails?.interiorPhotos,
                    data.value[i]?.vehicleDetails?.driverLicense) {
                    var d = photos.concat(
                        data.value[i]?.vehicleDetails?.additionalDocuments,
                        data.value[i]?.vehicleDetails?.exteriorPhotos,
                        data.value[i]?.vehicleDetails?.interiorPhotos,
                        data.value[i]?.vehicleDetails?.vehicleDamage,
                        data.value[i]?.vehicleDetails?.driverLicense,
                        data.value[i]?.vehicleDetails?.originalDocument,
                    );
                    let resD = d.map((item, i) => {
                        let name = item.split("/")
                        let newObjet = {
                            name: name[2],
                            url: item
                        }
                        return newObjet
                    })
                    return data.value[i].photos = resD
                } else {
                    return data.value[i].photos = null
                }
            } else {
                let result = null;
                result = data.value.filter((remove) => remove._id !== newQuestion._id)
                data.value = result

            }
            counter.value++
        })
        const index = async () => {
            loading.value = true
            try {
                await storeAutions.indexCurrentBids()
                let res = await storeAutions.index()

                data.value = storeAutions?.live
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

            } catch (error) {


            } finally {
                loading.value = false
            }
        }
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
        }
        watch(statusModal, async (newQuestion, oldQuestion) => {
            if (newQuestion.finally == 'finally') {
                index()
                formData.value.placeyourbid = 0
                formData.value.cardNumber = undefined
                formData.value.nameOnCard = undefined
                formData.value.expiryDate = undefined
                formData.value.cvv = undefined
                formData.value.saveCard = undefined
                formData.value.termsConditions = undefined
                statusModal.finally = null
            }
        })
        const setSorBy = (sort) => {
            sortBy.value = sort
            isOpen.value = false

        }

        const sortedData = computed(() => {
            switch (sortBy.value) {
                case 'Auction Posted':
                    return data.value.filter(p => true).sort((a, b) => timeToEnd(b.startDate, b.duration) - timeToEnd(a.startDate, a.duration))
                case 'Odometer':
                    return data.value.sort((a, b) => parseFloat(b.vehicleDetails.odometer) - parseFloat(a.vehicleDetails.odometer));
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
            index()
        })
        return {
            loading,
            isOpen,
            changeLayouts,
            changeGridTemplate,
            modules: [Navigation, Pagination, Scrollbar, A11y],
            data,
            bucket,
            formData,
            statusModal,
            path,
            storeAutions,
            timeToEnd,
            auth,
            setSorBy,
            sortedData,
            counter,
            sortBy

        };
    },
};
</script>
