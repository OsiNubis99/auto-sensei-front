<template>
    <template v-if="loading">
        <div class=" left-0 top-0 absolute w-full h-full flex justify-center items-center">
            <div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
                <div class="absolute -left-[30px] z-10  h-[80px] w-[80px] ">
                    <div class="animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff"
                            stroke-width="0" viewBox="0 0 16 16">
                            <path
                                d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                            </path>
                        </svg>
                    </div>
                    <p class=" text-base-gray font-medium pl-2 ">Loading...</p>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <HeaderOptionesSeller :storeAutions="storeAutionsSeller" :data="data" />
        <div v-if="data?.length > 0" class="relative max-w-[120rem] mx-auto z-50 md:top-[60px] ">
            <div class="flex justify-between md:mt-5 md:px-5 gap-4 mt-2">
                <div class="hidden md:w-[24%] lg:block">
                    <CreateAution class="hidden lg:block" :data="storeUser.userData" :autions="storeAutionsSeller" />
                </div>
                <CardAutionMobile class="block lg:hidden" :data="storeUser.userData" :autions="storeAutionsSeller" />
                <div class="w-full lg:w-[70%]">
                    <div class="flex items-center justify-between px-2 pt-4 md:p-0  mb-4">
                        <p class=" font-semibold ">{{ data?.length }} Vehicles</p>
                        <div class="flex items-center gap-2 ">
                            <p class="mt-2 hidden md:block">Sort by:</p>
                            <div class="flex items-center gap-5">
                                <div class="navbar-right relative">
                                    <button @click="isOpen = !isOpen"
                                        class="flex gap-2 rounded-md  shadow-md px-2 bg-white items-center">
                                        <p class="p-2 text-xs md:text-[16px] pb-1">Uncompleted</p>
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
                                        <div @click="isOpen = false"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Uncompleted
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
                    <div
                        :class="changeLayouts ? 'grid grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up p-2 animate-ease-in-out animate-delay-200'">
                        <div v-for="(auction, index) in data" :key="index"
                            class="bg-white flex  md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full  "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <div class="w-full flex  flex-col md:flex-row  sm:p-0 relative"
                                :class="changeLayouts ? 'flex-col' : ''">
                                <p v-if="auction.status == 'completed'"
                                    class="font-semibold fixed left-0 z-50 text-white bg-[#05A54B] rounded-lg ml-2 mt-2 px-4 py-1">
                                    Complete
                                </p>
                                <p
                                    class="font-semibold text-xs px-4  md:text-base fixed left-2 md:left-0 z-50  bg-[#FFFFFF] rounded-lg ml-2 mt-2 md:px-4 md:py-1">
                                    Draft
                                </p>
                                <swiper pagination :modules="modules" :slides-per-view="1" class="swiper-autions"
                                    :class="changeLayouts ? 'w-full' : 'w-full md:w-[40%] md:h-[250px]  '">
                                    <swiper-slide v-for="(img, index) in auction?.photos" :key="index">
                                        <img class="w-full rounded-s-lg  h-full object-cover" :src="bucket + img.url"
                                            alt="">
                                    </swiper-slide>
                                    <div v-if="!auction?.photos" class=" md:absolute w-full h-[250px] top-0 ">
                                        <img class="w-full rounded-s-lg h-full object-cover"
                                            src="@/assets/img/jpg/image.jpg" alt="">
                                    </div>
                                </swiper>
                                <div class="w-full flex flex-col md:flex-row justify-between gap-3 "
                                    :class="changeLayouts ? 'flex-col' : ''">
                                    <div @click="(auction.status == 'live' || auction.status == 'bids completed' || auction.status == 'completed') && statusModalView.openModal({ isActive: true, data: auction })"
                                        :class="auction.status == 'live' || auction.status == 'bids completed' || auction.status == 'completed' ? 'cursor-pointer hover:shadow-xl' : ''"
                                        class="flex p-2 md:p-5  flex-col gap-3">
                                        <div>
                                            <div class="font-bold md:text-xl">{{ auction?.vehicleDetails?.year }} {{
                                                auction?.vehicleDetails?.make }} {{ auction?.vehicleDetails?.model }}
                                            </div>
                                            <p class="text-xs md:text-base">
                                                {{ auction?.city }}, {{ auction?.province }}
                                            </p>
                                        </div>
                                        <div class=" hidden md:grid grid-cols-2 gap-1"
                                            :class="changeLayouts ? 'flex-col' : ''">
                                            <div v-if="auction?.vehicleDetails?.vin" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="uppercase">{{ auction?.vehicleDetails?.vin }}</p>
                                            </div>
                                            <div v-if="auction?.vehicleDetails?.odometer" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ auction?.vehicleDetails?.odometer }} Kilometers
                                                </p>
                                            </div>
                                        </div>
                                        <div class="hidden md:grid grid-cols-2 gap-1"
                                            :class="changeLayouts ? 'flex-col' : ''">
                                            <div v-if="auction?.vehicleDetails?.color" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ auction?.vehicleDetails?.color }}</p>
                                            </div>
                                            <div v-if="auction?.vehicleDetails?.driveTrain" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.6673 13.3327H3.33398V13.9993C3.33398 14.3675 3.0355 14.666 2.66732 14.666H2.00065C1.63246 14.666 1.33398 14.3675 1.33398 13.9993V7.99935L3.00954 3.53118C3.2047 3.01078 3.70219 2.66602 4.25798 2.66602H11.7433C12.2991 2.66602 12.7966 3.01078 12.9918 3.53118L14.6673 7.99935V13.9993C14.6673 14.3675 14.3689 14.666 14.0007 14.666H13.334C12.9658 14.666 12.6673 14.3675 12.6673 13.9993V13.3327ZM2.75798 7.99935H13.2433L11.7433 3.99935H4.25798L2.75798 7.99935ZM4.33398 11.3327C4.88627 11.3327 5.33398 10.8849 5.33398 10.3327C5.33398 9.78042 4.88627 9.33268 4.33398 9.33268C3.7817 9.33268 3.33398 9.78042 3.33398 10.3327C3.33398 10.8849 3.7817 11.3327 4.33398 11.3327ZM11.6673 11.3327C12.2196 11.3327 12.6673 10.8849 12.6673 10.3327C12.6673 9.78042 12.2196 9.33268 11.6673 9.33268C11.1151 9.33268 10.6673 9.78042 10.6673 10.3327C10.6673 10.8849 11.1151 11.3327 11.6673 11.3327Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ auction?.vehicleDetails?.driveTrain }}</p>
                                            </div>
                                        </div>
                                        <div class=" flex items-center gap-4 "
                                            :class="changeLayouts ? ' p-5 whitespace-nowrap  gap-5 overflow-x-auto overflow-y-hidden ' : ''">
                                            <div v-if="auction?.vehicleDetails?.tireCondition"
                                                class="bg-[#F0F0F0] flex px-1  w-fit md:px-2 py-1 gap-1 md:gap-3  rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p
                                                    class=" text-[10px] lg:text-xs lg:text-md font-semibold capitalize  ">
                                                    {{
                                                        auction?.vehicleDetails?.tireCondition }}</p>
                                            </div>
                                            <div v-if="auction?.vehicleDetails?.brakeCondition"
                                                class="bg-[#F0F0F0] flex px-1  w-fit md:px-2 py-1 gap-1 md:gap-3  rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p
                                                    class=" text-[10px] lg:text-xs lg:text-md font-semibold capitalize  ">
                                                    {{
                                                        auction?.vehicleDetails?.brakeCondition }}</p>
                                            </div>
                                        </div>
                                        <div v-show="auction?.status == 'unapproved'" class="flex gap-2 items-center">
                                            <img class="h-10 w-10" src="@/assets/svg/Spin.svg" alt="">
                                            <p>Waiting for verification, can take up to <span> 90 mins</span></p>
                                        </div>
                                    </div>
                                    <div :class="changeLayouts ? 'w-full' : 'md:w-[40%] flex flex-col h-full justify-between'"
                                        class="border-l-2 p-2 md:p-5 border-[#E0E0E0]">
                                        <div class="flex flex-col gap-2 md:gap-4">
                                            <div class="bg-[#E0E0E0] w-full h-[8px]  rounded-md">
                                                <div :style="[auction.percentage ? { 'width': `${auction.percentage}% !important` } : { 'width': '0px' }]"
                                                    class="  custom-progress rounded-md h-full"></div>
                                            </div>
                                            <div class="flex gap-2 items-center">
                                                <svg class=" w-5 h-5 md:w-[23px] md:h-[23px]"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M7.99967 14.6663C4.31767 14.6663 1.33301 11.6817 1.33301 7.99967C1.33301 4.31767 4.31767 1.33301 7.99967 1.33301C11.6817 1.33301 14.6663 4.31767 14.6663 7.99967C14.6663 11.6817 11.6817 14.6663 7.99967 14.6663ZM7.33501 10.6663L12.0483 5.95234L11.1057 5.00967L7.33501 8.78101L5.44901 6.89501L4.50634 7.83767L7.33501 10.6663Z"
                                                        fill="#05A54B" />
                                                </svg>
                                                <p class=" text-xs md:text-lg pt-[2px]">{{ auction.percentage }} %
                                                    completed</p>
                                            </div>
                                        </div>
                                        <div class="flex w-full justify-between mt-2 gap-2 md:gap-4 items-center">
                                            <RouterLink
                                                :to="{ name: 'edit-draft', query: { id: auction._id, progress: auction.percentage } }"
                                                class="btn bg-primary w-full ">Continue to edit</RouterLink>
                                            <button @click="deleteAution(auction)"
                                                class=" bg-transparent border p-2 md:p-3 rounded-md md:rounded-xl border-[#E0E0E0] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                    viewBox="0 0 15 15" fill="none">
                                                    <path
                                                        d="M10.833 2.16634H14.1663V3.49967H12.833V13.4997C12.833 13.6765 12.7628 13.8461 12.6377 13.9711C12.5127 14.0961 12.3432 14.1663 12.1663 14.1663H2.83301C2.6562 14.1663 2.48663 14.0961 2.3616 13.9711C2.23658 13.8461 2.16634 13.6765 2.16634 13.4997V3.49967H0.833008V2.16634H4.16634V0.833008H10.833V2.16634ZM5.49967 5.49967V10.833H6.83301V5.49967H5.49967ZM8.16634 5.49967V10.833H9.49967V5.49967H8.16634Z"
                                                        fill="#FF333E" />
                                                </svg>
                                            </button>
                                        </div>
                                        <!--  <div v-if="index == 4" class="flex w-full justify-between gap-4 items-center">
                                            <button class="btn bg-primary w-full ">Launch</button>
                                            <button
                                                class=" w-full bg-transparent border p-3 font-medium rounded-xl border-[#E0E0E0] ">
                                                Edit
                                            </button>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="flex w-full flex-col justify-center gap-6 items-center custom-header-all ">
            <ScreenCreateAution />
        </div>

    </template>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import { toast } from "vue3-toastify";
import { useRoute, useRouter } from 'vue-router'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ModalAcceptAution } from "@/stores/modalAcceptAution";
import { ModalReview } from "@/stores/modalReview";
import { ModalViewDetails } from "@/stores/modalViewDetails";
import HeaderOptionesSeller from "../../../components/Header/HeaderOptionesSeller.vue";
import CreateAution from "../../../components/Cards/CreateAution.vue";
import CardAutionMobile from "../../../components/Cards/CardAutionMobile.vue";
import { arrayPhotos } from '../../../utils/packPhotos'
import ScreenCreateAution from "../../../components/Screen/ScreenCreateAution.vue";
import { useAuctionSellerStore } from "../../../stores/aution-seller";
export default {

    components: {
        Swiper,
        SwiperSlide,
        HeaderOptionesSeller,
        CreateAution,
        CardAutionMobile,
        ScreenCreateAution
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const isOpen = ref(false)
        const loading = ref(false)
        const changeLayouts = ref(false)
        const storeAutions = useAuctionStore()
        const storeAutionsSeller = useAuctionSellerStore();
        const storeUser = useAuthStore()
        const statusModal = ModalAcceptAution()
        const path = ref(computed(() => route.name))
        const statusModalR = ModalReview()
        const openDecline = ref(false)
        const autionModal = ref(null)
        const data = ref([])
        const statusModalView = ModalViewDetails()
        const changeGridTemplate = () => {
            changeLayouts.value = !changeLayouts.value
            counter.value++
        }
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const index = async () => {
            loading.value = true
            try {
                let res = await storeAutionsSeller.indexSeller()
                data.value = storeAutionsSeller.draft
                data.value.map((autions, index) => {
                    let counter = 0;
                    let progress = 0;
                    progress = autions.city && counter++
                    progress = autions.dropOffDate && counter++
                    progress = autions.keysNumber && counter++
                    progress = autions.province && counter++
                    progress = autions.vin && counter++
                    progress = autions.vehicleStatus.status && counter++
                    progress = autions.vehicleDetails?.bodyType && counter++
                    progress = autions.vehicleDetails?.brakeCondition && counter++
                    progress = autions.vehicleDetails?.brakeReplacement && counter++
                    progress = autions.vehicleDetails?.color && counter++
                    progress = autions.vehicleDetails?.cylinder && counter++
                    progress = autions.vehicleDetails?.doors && counter++
                    progress = autions.vehicleDetails?.driveTrain && counter++
                    progress = autions.vehicleDetails?.driverLicense && counter++
                    progress = autions.vehicleDetails?.make && counter++
                    progress = autions.vehicleDetails?.model && counter++
                    progress = autions.vehicleDetails?.odometer && counter++
                    progress = autions.vehicleDetails?.originalDocument && counter++
                    progress = autions.vehicleDetails?.suggestedPrice && counter++
                    progress = autions.vehicleDetails?.tireCondition && counter++
                    progress = autions.vehicleDetails?.tireReplacement && counter++
                    progress = autions.vehicleDetails?.transmission && counter++
                    progress = autions.vehicleDetails?.year && counter++
                    if (autions.vehicleDetails.exteriorPhotos.length > 0) {
                        progress = autions.vehicleDetails.exteriorPhotos.length > 0 && counter + 6
                    }
                    if (autions.vehicleDetails.interiorPhotos.length > 0) {
                        progress = autions.vehicleDetails.interiorPhotos.length > 0 && counter + 6
                    }
                    let currentValue = progress;
                    let percentage = (currentValue / 32) * 100
                    autions.percentage = percentage ? Number(percentage.toFixed(0)) : 25
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
        const acceptAution = () => {
            loading.value = true
            try {
                let res = storeAutions.acceptAutions(statusModal.dataAutiont._id)
                if (res) {
                    return '200'
                }
            } catch (error) {

            } finally {
                index()
            }

        }
        const deleteAution = async (aution) => {
            loading.value = true
            try {
                let res = await storeAutions.delete(aution._id)
                if (res.data) {
                    index()
                    toast('Has been successfully removed',
                        {
                            type: "success",
                            position: "top-center",
                            theme: "colored",
                        });
                }

            } catch (error) {
                loading.value = false
                toast(error?.response?.data?.message || "An error has occurred", {
                    type: "error",
                });
            }

        }
        onMounted(() => {
            index()
        })

        return {
            loading,
            isOpen,
            changeLayouts,
            changeGridTemplate,
            bucket,
            modules: [Navigation, Pagination, Scrollbar, A11y],
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
            index,
            deleteAution,
            storeAutionsSeller

        };
    },
};
</script>