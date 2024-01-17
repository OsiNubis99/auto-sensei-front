<template>
    <div class="mx-auto bg-[#F0F0F0]">
        <div class="relative max-w-[100rem] mx-auto z-50 top-[60px] pb-10 ">
            <div v-if="route.meta.adminAuth" class="flex gap-2 items-center">
                <div class="flex items-center gap-2">
                    <p v-if="router.options.history.state.back == '/action-list'" class="text-[#858585]">Auctions List</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path
                            d="M8.78145 8.49999L5.48145 5.19999L6.42411 4.25732L10.6668 8.49999L6.42411 12.7427L5.48145 11.8L8.78145 8.49999Z"
                            fill="#858585" />
                    </svg>
                </div>
                <div class="flex items-center gap-2">
                    <p class="text-[#858585] ">Details</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path
                            d="M8.78145 8.49999L5.48145 5.19999L6.42411 4.25732L10.6668 8.49999L6.42411 12.7427L5.48145 11.8L8.78145 8.49999Z"
                            fill="#858585" />
                    </svg>
                </div>
                <div>
                    <p class="font-semibold">2016 Mazda MX-5 Miata Club</p>
                </div>
            </div>
            <div v-else class="flex gap-2 items-center">
                <div class="flex items-center gap-2">
                    <p class="text-[#858585]">Dealer Bidding</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path
                            d="M8.78145 8.49999L5.48145 5.19999L6.42411 4.25732L10.6668 8.49999L6.42411 12.7427L5.48145 11.8L8.78145 8.49999Z"
                            fill="#858585" />
                    </svg>
                </div>
                <div class="flex items-center gap-2">
                    <p class="text-[#858585] ">Upcoming</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path
                            d="M8.78145 8.49999L5.48145 5.19999L6.42411 4.25732L10.6668 8.49999L6.42411 12.7427L5.48145 11.8L8.78145 8.49999Z"
                            fill="#858585" />
                    </svg>
                </div>
                <div>
                    <p class="font-semibold">2016 Mazda MX-5 Miata Club</p>
                </div>
            </div>
            <div class="flex flex-col mt-7 gap-5">
                <div class="flex gap-5">
                    <swiper :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }" :spaceBetween="10" :navigation="true" :slidesPerView="1" :thumbs="{ swiper: thumbsSwiper }"
                        :modules="modules" class="myCrousel2">
                        <swiper-slide v-if="dataDetails?.photos?.length > 0" v-for="(photo, index) in dataDetails?.photos"
                            :key="index">
                            <img :src="bucket + photo" alt="">

                        </swiper-slide>
                        <swiper-slide v-else v-for="(img, indexx) in 6" :key="indexx">
                            <img class="w-full h-full object-cover" src="../../../assets/img/jpg/image.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                    <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="6" :freeMode="true"
                        :watchSlidesProgress="true" :modules="modules" class="myCrousel">
                        <swiper-slide v-if="dataDetails?.photos?.length > 0"
                            v-for="(photo, index) in dataDetails?.photos.slice(1, 7)" :key="index">
                            <div v-if="index == 5" class="relative flex justify-center items-center cursor-pointer">
                                <img :src="bucket + photo" alt="">
                                <div class="bg-[#000000a3] absolute w-full h-full top-0 z-50 "></div>
                                <p class="text-white absolute  z-50 "> All Photos ({{ dataDetails?.photos?.length }})</p>
                            </div>
                            <img v-else :src="bucket + photo" alt="">
                        </swiper-slide>
                        <swiper-slide v-else v-for="(img, indexx) in 6" :key="indexx">
                            <img class="w-full h-full object-cover" src="../../../assets/img/jpg/image.jpg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
                <div>
                    <p class="text-2xl  font-semibold ">2016 Mazda MX-5 Miata Club</p>
                    <p>St. John, Newfoundland & Labrador</p>
                </div>
                <div class="flex gap-4 ">
                    <div class=" w-[65%]   ">
                        <div class="bg-white border p-4  border-[#E0E0E0]">
                            <div class="flex gap-3 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M15.8332 16.6667H4.1665V17.5C4.1665 17.7211 4.07871 17.933 3.92243 18.0893C3.76615 18.2456 3.55418 18.3334 3.33317 18.3334H2.49984C2.27882 18.3334 2.06686 18.2456 1.91058 18.0893C1.7543 17.933 1.6665 17.7211 1.6665 17.5V10L3.76067 4.41504C3.87978 4.09728 4.09305 3.82346 4.37197 3.63017C4.65088 3.43688 4.98216 3.33333 5.3215 3.33337H14.6782C15.0175 3.33333 15.3488 3.43688 15.6277 3.63017C15.9066 3.82346 16.1199 4.09728 16.239 4.41504L18.3332 10V17.5C18.3332 17.7211 18.2454 17.933 18.0891 18.0893C17.9328 18.2456 17.7209 18.3334 17.4998 18.3334H16.6665C16.4455 18.3334 16.2335 18.2456 16.0772 18.0893C15.921 17.933 15.8332 17.7211 15.8332 17.5V16.6667ZM3.4465 10H16.5532L14.6782 5.00004H5.3215L3.4465 10ZM5.4165 14.1667C5.74802 14.1667 6.06597 14.035 6.30039 13.8006C6.53481 13.5662 6.6665 13.2482 6.6665 12.9167C6.6665 12.5852 6.53481 12.2672 6.30039 12.0328C6.06597 11.7984 5.74802 11.6667 5.4165 11.6667C5.08498 11.6667 4.76704 11.7984 4.53262 12.0328C4.2982 12.2672 4.1665 12.5852 4.1665 12.9167C4.1665 13.2482 4.2982 13.5662 4.53262 13.8006C4.76704 14.035 5.08498 14.1667 5.4165 14.1667ZM14.5832 14.1667C14.9147 14.1667 15.2326 14.035 15.4671 13.8006C15.7015 13.5662 15.8332 13.2482 15.8332 12.9167C15.8332 12.5852 15.7015 12.2672 15.4671 12.0328C15.2326 11.7984 14.9147 11.6667 14.5832 11.6667C14.2517 11.6667 13.9337 11.7984 13.6993 12.0328C13.4649 12.2672 13.3332 12.5852 13.3332 12.9167C13.3332 13.2482 13.4649 13.5662 13.6993 13.8006C13.9337 14.035 14.2517 14.1667 14.5832 14.1667Z"
                                        fill="#0B1107" />
                                </svg>
                                <p>Vehicle Information</p>
                            </div>

                            <div class="border-t-[1px] py-2  flex justify-between items-start  border-[#E0E0E0]">
                                <div class="flex gap-4 flex-col p-4 w-full border-r-[1px] border-[#E0E0E0] ">
                                    <div v-if="dataDetails?.vehicleDetails?.vin" class="grid grid-cols-4 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">VIN</p>
                                        <p>{{ dataDetails?.vehicleDetails?.vin }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.make"
                                        class="grid grid-cols-4 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Make</p>
                                        <p>{{ dataDetails?.vehicleDetails?.make }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.model"
                                        class="grid grid-cols-4 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Model</p>
                                        <p>{{ dataDetails?.vehicleDetails?.model }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.vin" class="grid grid-cols-4 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Trim</p>
                                        <p>{{ dataDetails?.vehicleDetails?.vin }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.bodyType"
                                        class="grid grid-cols-4 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Body Type</p>
                                        <p>{{ dataDetails?.vehicleDetails?.bodyType }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.cylinder"
                                        class="grid grid-cols-4 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Cylinder</p>
                                        <p>{{ dataDetails?.vehicleDetails?.cylinder }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.transmission"
                                        class="grid grid-cols-4 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Transmission</p>
                                        <p>{{ dataDetails?.vehicleDetails?.transmission }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.driveTrain"
                                        class="grid grid-cols-4 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Drive Train</p>
                                        <p>{{ dataDetails?.vehicleDetails?.driveTrain }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.doors"
                                        class="grid grid-cols-4 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Doors</p>
                                        <p>{{ dataDetails?.vehicleDetails?.doors }}</p>
                                    </div>
                                </div>
                                <div class="flex gap-4 flex-col p-4 w-full">
                                    <div v-if="dataDetails?.vehicleDetails?.color" class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Exterior Color</p>
                                        <p class="col-span-4">{{ dataDetails?.vehicleDetails?.color }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.odometer" class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Odometer</p>
                                        <p class="col-span-4">{{ dataDetails?.vehicleDetails?.odometer }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.tireCondition" class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Tire Condition</p>
                                        <p class="col-span-4">{{ dataDetails?.vehicleDetails?.tireCondition }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.brakeCondition" class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Brake Condition</p>
                                        <p class="col-span-4">{{ dataDetails?.vehicleDetails?.brakeCondition }}</p>
                                    </div>
                                    <div v-if="dataDetails?.vehicleDetails?.status" class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Vehicle is Currently</p>
                                        <p class="col-span-4">{{ dataDetails?.vehicleStatus?.status }}</p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Bank/Institute</p>
                                        <p v-if="dataDetails?.vehicleStatus?.financingCompany" class="col-span-4">{{
                                            dataDetails?.vehicleStatus?.financingCompany }}</p>
                                        <p v-else class="col-span-4">The seller didn't provide information</p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Remaining Payments</p>
                                        <p v-if="dataDetails?.vehicleStatus?.remainingPayments">
                                            {{ dataDetails?.vehicleStatus?.remainingPayments }}</p>
                                        <p v-else class="col-span-4">The seller didn't provide information</p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Buyout Amount</p>
                                        <p v-if="dataDetails?.buyout">
                                            {{ dataDetails?.buyout }}</p>
                                        <p v-else class="col-span-4">The seller didn't provide information</p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Vehicle Reports</p>
                                        <div>
                                            <img src="" alt="">
                                            <img src="" alt="">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white border p-4 mt-6 space-y-3 border-[#E0E0E0]">
                            <div class="flex border-b-2 border-[#E0E0E0] gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M9.1665 9.16663V5.83329H10.8332V9.16663H14.1665V10.8333H10.8332V14.1666H9.1665V10.8333H5.83317V9.16663H9.1665ZM9.99984 18.3333C5.39734 18.3333 1.6665 14.6025 1.6665 9.99996C1.6665 5.39746 5.39734 1.66663 9.99984 1.66663C14.6023 1.66663 18.3332 5.39746 18.3332 9.99996C18.3332 14.6025 14.6023 18.3333 9.99984 18.3333ZM9.99984 16.6666C11.7679 16.6666 13.4636 15.9642 14.7139 14.714C15.9641 13.4638 16.6665 11.7681 16.6665 9.99996C16.6665 8.23185 15.9641 6.53616 14.7139 5.28591C13.4636 4.03567 11.7679 3.33329 9.99984 3.33329C8.23173 3.33329 6.53604 4.03567 5.28579 5.28591C4.03555 6.53616 3.33317 8.23185 3.33317 9.99996C3.33317 11.7681 4.03555 13.4638 5.28579 14.714C6.53604 15.9642 8.23173 16.6666 9.99984 16.6666Z"
                                        fill="#0B1107" />
                                </svg>
                                <p class="text-lg font-semibold ">Additional Package</p>
                            </div>
                            <div>
                                <p class="text-[#858585] ">The seller did not include additional package information</p>
                            </div>


                        </div>
                    </div>
                    <div class="p-2 w-[35%] border border-[#E0E0E0] bg-white h-fit ">
                        <div class="flex gap-3 p-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M4.47734 3.7583C5.99959 2.40778 7.96486 1.66343 9.99984 1.66664C14.6023 1.66664 18.3332 5.39747 18.3332 9.99997C18.3359 11.7032 17.8142 13.366 16.839 14.7625L14.5832 9.99997H16.6665C16.6665 8.67443 16.2714 7.37898 15.5316 6.2791C14.7918 5.17921 13.7409 4.32483 12.5132 3.8251C11.2855 3.32537 9.93663 3.20297 8.63901 3.47355C7.34138 3.74412 6.15387 4.39538 5.22817 5.34414L4.47817 3.75914L4.47734 3.7583ZM15.5223 16.2416C14.0001 17.5922 12.0348 18.3365 9.99984 18.3333C5.39734 18.3333 1.6665 14.6025 1.6665 9.99997C1.6665 8.22914 2.219 6.58747 3.16067 5.23747L5.4165 9.99997H3.33317C3.33315 11.3255 3.72827 12.621 4.46807 13.7208C5.20787 14.8207 6.25875 15.6751 7.48648 16.1748C8.71421 16.6746 10.063 16.797 11.3607 16.5264C12.6583 16.2558 13.8458 15.6046 14.7715 14.6558L15.5215 16.2408L15.5223 16.2416ZM7.08317 11.6666H11.6665C11.777 11.6666 11.883 11.6227 11.9611 11.5446C12.0393 11.4665 12.0832 11.3605 12.0832 11.25C12.0832 11.1395 12.0393 11.0335 11.9611 10.9553C11.883 10.8772 11.777 10.8333 11.6665 10.8333H8.33317C7.78064 10.8333 7.25073 10.6138 6.86003 10.2231C6.46933 9.83241 6.24984 9.3025 6.24984 8.74997C6.24984 8.19743 6.46933 7.66753 6.86003 7.27683C7.25073 6.88613 7.78064 6.66664 8.33317 6.66664H9.1665V5.8333H10.8332V6.66664H12.9165V8.3333H8.33317C8.22266 8.3333 8.11668 8.3772 8.03854 8.45534C7.9604 8.53348 7.9165 8.63946 7.9165 8.74997C7.9165 8.86048 7.9604 8.96646 8.03854 9.0446C8.11668 9.12274 8.22266 9.16664 8.33317 9.16664H11.6665C12.219 9.16664 12.7489 9.38613 13.1396 9.77683C13.5303 10.1675 13.7498 10.6974 13.7498 11.25C13.7498 11.8025 13.5303 12.3324 13.1396 12.7231C12.7489 13.1138 12.219 13.3333 11.6665 13.3333H10.8332V14.1666H9.1665V13.3333H7.08317V11.6666Z"
                                    fill="#0B1107" />
                            </svg>
                            <p>Bid Information</p>
                        </div>
                        <div class="border-t-[1px] p-4 flex-col items-center border-[#E0E0E0]">
                            <div class="flex gap-3 justify-between items-start ">
                                <div class="flex flex-col  w-full ">
                                    <div class="flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                        <p class="text-sm">Auction Status</p>
                                        <div class="flex gap-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M17.5 8.38583V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H15.8333C14.1845 4.14887 11.0856 5.07273 9.16667 5.51068V14.4893C11.0856 14.9272 14.1845 15.8512 15.8333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V11.6142C18.2188 11.4292 18.75 10.7766 18.75 10C18.75 9.22342 18.2188 8.57083 17.5 8.38583ZM4.16667 5.83333C3.24619 5.83333 2.5 6.57952 2.5 7.5V12.5C2.5 13.4205 3.24619 14.1667 4.16667 14.1667H5L5.83333 18.3333H7.5V5.83333H4.16667Z"
                                                    fill="black" />
                                            </svg>
                                            <p class=" capitalize ">{{ dataDetails?.status }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col  w-full">
                                    <div class="flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                        <p class="text-sm">Starts Date & Time</p>
                                        <div class="flex gap-2">
                                            <p v-if="dataDetails?.startDate">{{ dataDetails?.startDate }}</p>
                                            <p v-else>There is no start date</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                class="btn w-full mt-4 border border-[#E0E0E0] flex gap-3 items-center text-base-black font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18"
                                    fill="none">
                                    <path
                                        d="M14.4397 15H3.50017C3.43053 15 3.36226 14.9807 3.30302 14.944C3.24378 14.9074 3.19591 14.855 3.16476 14.7928C3.13362 14.7305 3.12043 14.6607 3.12669 14.5914C3.13294 14.522 3.15839 14.4558 3.20017 14.4001L3.50017 14.0003V7.50005C3.50017 6.50255 3.74317 5.56205 4.17442 4.7348L1.54492 2.10605L2.60617 1.0448L17.4554 15.8948L16.3942 16.9553L14.4397 15ZM15.5002 11.8396L6.16942 2.5088C7.07298 1.90576 8.12331 1.55934 9.20833 1.5065C10.2934 1.45367 11.3724 1.69639 12.3303 2.20878C13.2881 2.72118 14.0889 3.48401 14.6472 4.41589C15.2055 5.34777 15.5003 6.41374 15.5002 7.50005V11.8396ZM7.62517 15.75H11.3752C11.3752 16.2473 11.1776 16.7242 10.826 17.0759C10.4744 17.4275 9.99745 17.625 9.50017 17.625C9.00289 17.625 8.52598 17.4275 8.17435 17.0759C7.82272 16.7242 7.62517 16.2473 7.62517 15.75Z"
                                        fill="#0B1107" />
                                </svg>
                                <p>Cancel Reminder</p>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import moment from 'moment';
export default {

    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const router = useRouter()
        const route = useRoute();
        const thumbsSwiper = ref(null);
        const dataDetails = ref(null)
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };
        onMounted(() => {
            console.log('From', router.options.history.state.back.replace('/', ''))
            console.log('Curren', router)
            console.log('params', route)
            console.log('query', JSON.parse(route.query.data))
            dataDetails.value = JSON.parse(route.query.data)
            if (dataDetails.value.startDate) {
                dataDetails.value.startDate = moment(dataDetails.value.startDate).format('LLL')
            }

            let photos = []
            if (dataDetails.value?.vehicleDetails?.additionalDocuments,
                dataDetails.value?.vehicleDetails?.exteriorPhotos,
                dataDetails.value?.vehicleDetails?.interiorPhotos,
                dataDetails.value?.vehicleDetails?.vehicleDamage) {
                var d = photos.concat(
                    dataDetails.value?.vehicleDetails?.additionalDocuments,
                    dataDetails.value?.vehicleDetails?.exteriorPhotos,
                    dataDetails.value?.vehicleDetails?.interiorPhotos,
                    dataDetails.value?.vehicleDetails?.vehicleDamage
                );
                dataDetails.value.photos = d
            } else {
                dataDetails.value.photos = null
            }

            console.log('dataDetails.value', dataDetails.value)


        })
        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [FreeMode, Navigation, Thumbs],
            dataDetails,
            bucket,
            route,
            router
        };
    },
};
</script>




  