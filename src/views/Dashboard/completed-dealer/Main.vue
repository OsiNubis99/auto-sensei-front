<template>
    <template v-if="loading">
        <Basic />
    </template>
    <template v-else>
        <HeaderOptionsDealer :storeAutions="storeAutions" :data="data" />
        <div class="relative max-w-[120rem] mx-auto z-50 md:top-[60px] ">
            <template v-if="data.length == 0">
                <ScreenNoDataDealer />
            </template>
            <div v-else class="flex justify-between md:mt-5 md:px-5 gap-4 mt-2">
                <div :class="showFilter ? ' top-0 z-50 visible  w-full h-screen overflow-y-auto overflow-x-hidden shadow-xl animation-fade-modal' : ' invisible lg:visible '"
                    class="fixed  lg:relative  lg:w-[29%] lg:block">
                    <div class="bg-white p-5 shadow-steps">
                        <div class="flex w-full justify-between items-center">
                            <p class=" lg:text-2xl font-semibold">Filter Auction</p>
                            <div class="flex  items-center gap-2 justify-end">
                                <p @click="resetFilterValue"
                                    class="cursor-pointer text-xs lg:text-[15px] text-error font-semibold">
                                    Reset
                                    Filter</p>
                                <svg @click="showFilter = false" xmlns="http://www.w3.org/2000/svg"
                                    class=" w-6 h-8 md:w-8 lg:hidden block  md:h-8  cursor-pointer" fill="none"
                                    viewBox="0 0 24 24" stroke="#ff4545">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                        </div>
                        <div class="mt-4 flex flex-col gap-4">
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Reminder Status</label>
                                <select
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option>all</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Make</label>
                                <option selected hidden>Select make</option>
                                <select @change="applyFilter($event, 'make')" v-model="formFilter.make"
                                    class="border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select make</option>
                                    <template v-for="(make, index) in filterValues('make')" :key="index">
                                        <option :value="make">{{ make }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Model</label>
                                <select @change="applyFilter($event, 'model')" v-model="formFilter.model"
                                    class=" border-none text-[#858585] md:p-3 bg-[#F0F0F0]  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select model</option>
                                    <template v-for="(model, index) in filterValues('model')" :key="index">
                                        <option :value="model">{{ model }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Trim</label>

                                <select @change="applyFilter($event, 'trim')"
                                    class=" border-none text-[#858585] md:p-3 bg-[#F0F0F0]  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select trim</option>
                                    <option selected>Select trim</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="make">Year</label>
                                <div class="flex justify-center gap-6 items-center ">
                                    <select @change="applyPairFilters($event, 'start', label.year)"
                                        class="border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                        <option selected hidden id="make">Select make</option>
                                        <template v-for="(year, index) in filterValues('year')" :key="index">
                                            <option :value="year">{{ year }}</option>
                                        </template>
                                    </select>
                                    <!--  <VueDatePicker v-model="filterValues('year')" range
                                        @update:model-value="applyPairFilters(event, 'start')" year-picker
                                        class="custom-picker">
                                        <template #calendar-header="{ index, day }">
                                            <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                                                {{ day }}
                                            </div>
                                        </template>
                                    </VueDatePicker> -->
                                    <p> - </p>
                                    <select @change="applyPairFilters($event, 'end', label.year)"
                                        class="border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                        <option selected hidden>Select make</option>
                                        <template v-for="(year, index) in filterValues('year')" :key="index">
                                            <option :value="year">{{ year }}</option>
                                        </template>
                                    </select>
                                    <!--   <VueDatePicker v-model="formPair.dateEnd"
                                        @update:model-value="applyPairFilters(event, 'end')" year-picker
                                        class="custom-picker">
                                        <template #calendar-header="{ index, day }">
                                            <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                                                {{ day }}
                                            </div>
                                        </template>
                                    </VueDatePicker> -->
                                </div>

                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Body Type</label>
                                <select @change="applyFilter($event, 'bodyType')" v-model="formFilter.bodyType"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select body type</option>
                                    <template v-for="(typeCar, index) in filterValues('bodyType')" :key="index">
                                        <option :value="typeCar">{{ typeCar }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Cylinder</label>
                                <select @change="applyFilter($event, 'cylinder')" v-model="formFilter.cilynder"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select cylinder</option>
                                    <template v-for="(cilynder, index) in filterValues('cylinder')" :key="index">
                                        <option :value="cilynder">{{ cilynder }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Transmission</label>
                                <select @change="applyFilter($event, 'transmission')" v-model="formFilter.transmission"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select transmission</option>
                                    <template v-for="(transmission, index) in filterValues('transmission')"
                                        :key="index">
                                        <option v-if="transmission" :value="transmission">{{ transmission }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Doors</label>
                                <select @change="applyFilter($event, 'doors')" v-model="formFilter.doors"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">\
                                    <option selected hidden>Select doors</option>
                                    <template v-for="(doors, index) in filterValues('doors')" :key="index">
                                        <option :value="doors">{{ doors }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Drivetrain</label>
                                <select @change="applyFilter($event, 'driveTrain')" v-model="formFilter.driver"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select drivetrain</option>
                                    <template v-for="(driver, index) in filterValues('driveTrain')" :key="index">
                                        <option :value="driver">{{ driver }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Vehicle Condition</label>
                                <select @change="applyFilter($event, 'vehicle-condition')"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>Select condition</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Exterior Color</label>
                                <div class="grid grid-cols-3  place-items-start gap-4">
                                    <label v-for="(color, index) in filterValues('color')" :key="index"
                                        class="label-colors !p-2 !h-[40px] !capitalize whitespace-pre w-full">
                                        <input @change="applyFilter($event, 'color')" :value="color" type="radio"
                                            class="input-radio" :class="[
                                                color == 'silver' && 'on-silver',
                                                color == 'white' && 'on-white',
                                                color == 'grey' && 'on-grey',
                                                color == 'greenDark' && 'on-greenDark',
                                                color == 'red' && 'on-red',
                                                color == 'yellow' && 'on-yellow',
                                                color == 'blue' && 'on-blue',
                                                color == 'white' && 'on-white',
                                                color == 'white' && 'on-white',
                                            ]" name="color-redio">
                                        {{ color }}
                                    </label>
                                </div>
                            </div>
                            <div class="w-full">
                                <label class="font-medium text-base " for="">Kilometers</label>
                                <div class="flex justify-between items-center gap-6 ">
                                    <input @change="applyPairFilters($event, 'start', label.klmtr)"
                                        class="p-2 w-full mt-3 uppercase  border border-[#E0E0E0] text-[#858585] rounded-lg"
                                        placeholder="0                                 Kms" type="number">
                                    <p>-</p>
                                    <input @change="applyPairFilters($event, 'end')" type="number"
                                        class="p-2 w-full mt-3 uppercase  border border-[#E0E0E0] text-[#858585] rounded-lg"
                                        placeholder="0                                 Kms">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-[70%]">
                    <div class="flex items-center px-3 justify-between mb-4">
                        <p class="text-xs font-semibold md:text-base " v-if="sortedData.length > 0">{{ sortedData.length
                            }}
                            Vehicles
                        </p>
                        <p class="text-xs font-semibold md:text-base " v-else>0 Vehicles
                        </p>
                        <!--   <SorBy :key="counter" :changeLayouts="changeLayouts" :changeGridTemplate="changeGridTemplate" /> -->
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
                                    <div @click="setSorBy('Drop off Date')"
                                        class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                        Drop off Date
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
                                <div @click="changeGridTemplate" :class="changeLayouts ? 'bg-white' : 'bg-[#EFF8E0]'"
                                    class="p-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M19 11V5H5V11H19ZM19 13H5V19H19V13ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z"
                                            :fill="changeLayouts ? '#09121F' : '#7EC600'" />
                                    </svg>
                                </div>
                                <div @click="changeGridTemplate" :class="changeLayouts ? 'bg-[#EFF8E0]' : 'bg-white'"
                                    class=" p-2 flex item-center justify-center cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z"
                                            :fill="changeLayouts ? '#7EC600' : '#09121F'" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="p-2"
                        :class="changeLayouts ? 'grid grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up  animate-ease-in-out animate-delay-200'">

                        <div v-for="(aution, index) in sortedData" :key="index"
                            class="bg-white flex  md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full  "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <CardCompletedDealer :key="counter" :aution="aution" :data="data" :auth="authStore"
                                :confirmVehicle="confirmVehicle" :changeLayouts="changeLayouts" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!showFilter && data.length > 0" @click="showFilter = true"
            class="fixed lg:hidden flex justify-center items-center bottom-2 w-full z-50">
            <div class="flex items-center py-2 rounded-lg px-3 gap-2 bg-base-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path
                        d="M7.33317 7.83333V11.8333L4.6665 13.1667V7.83333L0.666504 1.83333V0.5H11.3332V1.83333L7.33317 7.83333ZM2.26917 1.83333L5.99984 7.42933L9.7305 1.83333H2.26917Z"
                        fill="white" />
                </svg>
                <p class="text-white text-xs">Filter</p>
            </div>

        </div>
        <div v-if="openPdf"
            class="fixed inset-0 flex items-end md:items-center z-50 justify-center bg-base-black  bg-opacity-50">
            <div class="max-w-xl w-full overflow-auto  bg-white rounded-lg shadow-xl animation-fade-modal">
                <div class="p-2 md:p-4  rounded-t-lg  bg-blue-dark flex items-center justify-between">
                    <p class=" text-sm md:text-xl text-white">Contract Auction</p>
                    <svg @click="closetModalPdf()" xmlns="http://www.w3.org/2000/svg"
                        class=" w-6 h-8 md:w-8   md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <template v-if="loadingPdf">
                    <div class="w-full h-[30vh]">
                        <div class=" w-full h-full flex justify-center items-center">
                            <div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
                                <div class="absolute -left-[30px] z-10  h-[80px] w-[80px] ">
                                    <div class="animate-bounce">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861"
                                            stroke="#fff" stroke-width="0" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class=" text-base-gray font-medium pl-2 ">Loading...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </template>
                <template v-else>
                    <div v-if="steps.step1" class="w-full p-5 flex flex-col justify-center items-center">
                        <div class="flex justify-center items-center flex-col gap-3">
                            <img :src="bucket + 'public/img/png/icon-signature.png'" alt="">
                            <p class=" text-center md:text-lg p-5 font-medium ">Thank you for completing the process!
                                Enjoy
                                your new vehicle and continue bidding with us!</p>
                        </div>

                        <div class="flex gap-3 items-center w-full mt-4 justify-center">
                            <button
                                class="bg-white border-error text-error text-xs md:text-base hover:bg-error transition-all ease-out duration-200 hover:text-white py-2 shadow-lg rounded-lg w-full"
                                @click="closetModalPdf">No</button>
                            <button class="bg-primary text-xs md:text-base py-2 shadow-lg rounded-lg w-full"
                                @click="nextContract">Yes</button>
                        </div>

                    </div>
                    <!--  <div class="custom-pdf" v-show="steps.step2" id="pspdfkit" style="width: 100%; height: 90vh;"></div> -->
                    <div v-if="steps.step3" class="p-4 flex justify-center items-center flex-col gap-3">
                        <p class=" font-semibold capitalize md:text-xl">Final Bid Approved!</p>
                        <p class="capitalize text-xs md:text-base ">Download the Actual Sheet Below and Hand It to the
                            Buyer
                            During the Vehicle
                            Drop-Off
                            Process.</p>
                        <div class="w-full">
                            <iframe class="w-full h-[60vh]" :src="showPdf" frameborder="0"></iframe>
                        </div>

                        <button @click="pdfDonwload" class="btn w-full bg-primary rounded-md">
                            Download PDF
                        </button>

                    </div>
                </template>

            </div>
        </div>
    </template>
</template>

<script>
import { ref, onMounted, computed, watchEffect, watch } from "vue";
import { toast } from "vue3-toastify";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import { useRoute, useRouter } from 'vue-router'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeaderOptionsDealer from '../../../components/Header/HeaderOptionsDealer.vue'
import ScreenNoDataDealer from '../../../components/Screen/ScreenNoDataDealer.vue'
import moment from "moment";
import Basic from '../../../components/Loading/Basic.vue'
import ScreenCreateAution from '../../../components/Screen/ScreenCreateAution.vue'
import FilterBig from "../../../components/Filters/FilterBig.vue";
import CardCompletedDealer from "../../../components/Cards/CardCompletedDealer.vue";
import SorBy from '../../../components/Filters/SorBy.vue'
import PSPDFKit from 'pspdfkit';
import axios from "@/axios";
import { arrayPhotos } from "../../../utils/packPhotos";
export default {

    components: {
        Swiper,
        SwiperSlide,
        HeaderOptionsDealer,
        ScreenNoDataDealer,
        Basic,
        ScreenCreateAution,
        FilterBig,
        SorBy,
        CardCompletedDealer
    },
    setup() {
        const isOpen = ref(false)
        const loading = ref(false)
        const loadingPdf = ref(false)
        const openPdf = ref(false)
        const autionPdf = ref(null)
        const changeLayouts = ref(false)
        const counter = ref(0)
        const showPdf = ref('')
        const changeGridTemplate = () => {
            changeLayouts.value = !changeLayouts.value
            counter.value++
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
        const authStore = useAuthStore()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const autionUpdate = ref(computed(() => authStore.aution))
        const data = ref([])
        const storeAutions = useAuctionStore()
        const path = ref(computed(() => route.name))
        const route = useRoute();
        const indexShowLoading = ref(false)
        const loadingButton = ref(false)
        const sortBy = ref('Drop off Date')
        const steps = ref({
            step1: true,
            step2: false,
            step3: false
        })
        const filteredItems = ref([])
        const showFilter = ref(false)
        const formFilter = ref({
            make: 'Select make',
            model: 'Select model',
            year: 'Select make',
            bodyType: 'Select body type',
            cilynder: 'Select cylinder',
            transmission: 'Select transmission',
            doors: 'Select doors',
            driver: 'Select drivetrain',
            color: 'Select color',


        })
        const dataBuffer = ref(null)
        watch(autionUpdate, async (newQuestion, oldQuestion) => {
            const i = data.value.findIndex(x => x._id === newQuestion._id)
            data.value[i] = newQuestion
            if (autionUpdate.value.status == 'completed' || autionUpdate.value.status == 'drop off') {
                const i = data.value.findIndex(x => x._id === newQuestion._id)
                data.value[i] = newQuestion
                let photos = null;
                photos = arrayPhotos(data.value[i].vehicleDetails)
                if (photos.length > 0) {
                    data.value[i].photos = photos
                } else {
                    photos = null
                }
            } else {
                let result = null;
                result = data.value.filter((remove) => remove._id !== newQuestion._id)
                data.value = result

            }
            counter.value++
        })
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
        }
        const index = async () => {
            loading.value = true
            try {
                let newArray = []
                await storeAutions.index()
                let res = await storeAutions.indexCurrentBids()
                data.value = storeAutions?.completed
                data.value.map((autions, index) => {
                    let photos = null;
                    photos = arrayPhotos(autions.vehicleDetails)
                    if (photos.length > 0) {
                        autions.photos = photos
                    } else {
                        photos = null
                    }
                })
                resetFilters()
            } catch (error) {
                toast(error.response.data.message, {
                    type: "error",
                });
            } finally {
                loading.value = false
            }
        }
        const sutmibPDF = async (pdf) => {
            loadingPdf.value = true
            try {
                const blob = new Blob([pdf], { type: 'application/pdf' }, { name: Date.now() + '.' + pdf.extension });
                const formData = new FormData();
                formData.append("file", blob);
                formData.append("location", 'test/pdf');
                const options = {
                    url: "/uploader/create",
                    method: 'POST',
                    headers: { 'content-type': 'multipart/form-data' },
                    data: formData
                };
                let result = await axios(options);
                if (result.data) {

                    try {
                        let res = await storeAutions.vehicleReceived(autionPdf.value._id, result.data)
                        if (res) {
                            showPdf.value = 'https://apidev.autosensei.ca/files/' + result.data
                            steps.value.step1 = false
                            steps.value.step2 = false
                            steps.value.step3 = true
                        }
                    } catch (error) {
                        loadingPdf.value = false
                        toast(error.response.data.message, {
                            type: "error",
                        });
                    } finally {
                        loadingPdf.value = false
                        index()
                    }



                }

            } catch (e) {
                loading.value = false
                console.error("error", e);
            } finally {
                loading.value = false
            }
        }
        const pdfDonwload = () => {
            const link = document.createElement('a');
            link.href = showPdf.value;
            link.target = '_blank';
            link.download = 'contect-file.pdf';

            // Simulate a click on the element <a>
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        }
        const nextContract = async () => {
            steps.value.step1 = false
            steps.value.step2 = true
            if (steps.value.step2) {
                loadingPdf.value = true
                try {
                    let res = await storeAutions.vehicleReceived(autionPdf.value._id, autionPdf.value.contractSeallerSing)
                    if (res) {
                        showPdf.value = 'https://apidev.autosensei.ca/files/' + res.data.contractSeallerSing

                        steps.value.step1 = false
                        steps.value.step2 = false
                        steps.value.step3 = true
                        loadingPdf.value = false

                    }
                    /*   showPdf.value = 'https://apidev.autosensei.ca/files/' + autionPdf.value.contractSeallerSing
                      const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;
                      PSPDFKit.load({
                          baseUrl,
                          licenseKey: 'HO2dV-bDcn32RCF6j2nDeKYNGqP1EOSnmSLLmbDrrdWJGwDq5yWsJs8pr31-EOKWXetRmJoBjUgv4AoEicoPgQw6Htu9foJBCUCWNZ2n7EvLcpMfoNLqokulJv87rHwmB9jnVIBTKGCZ7RKjGpERaDOl-JXfBFqdP6tSA07KKrsGh0k22IcAfwlevAAZNBOe72mr8i6D5tjXisarqg3a4vsSFuWyrmidugVCVPQsARlTZ5phlM3p4WSi032q6k3C7Zkt2UwLkGu6xfMy0u8wTOYLpjE8AMl5p4PC7j2I0WTVtrjYHLVyTJ-H0-bUUh1M_5pDIsK3YwHZNA5o5I0pnL70uk4nRPsvKL5hAxzI5e_PSWj8Oek73s6pf-htNu4PrL8YMfaX2KOo4tv3Q7Xsu6fhHOmkdvRn-UyCqQz8aJam2BZFpzXYndnfTToNV3v2PZ8ixUAzk03lKFvcThJg6wGTv1lo_AQ1zOx96eqaU069ZXuduPThRxd_i0zhEkGDfVKFaZWd03UaD0ZCDPWk5lSl0AuZJWFEKVyLQBLX2SDAf6z4m699tJ4jggOZoiQjD6rceOZUGAMCYAIMi4Z_6spoyIaAM4reyti70sY_K-Ccji1VNQKFlm0ne381Pyy298BJH2xQZnEPAWEtnFp1Xw==',
                          container: "#pspdfkit",
                          document: showPdf.value,
                      }).then(async function (instance) {
                          loadingPdf.value = false
                          const items = instance.toolbarItems;
                          instance.setToolbarItems(items.filter((item) =>
                              item.type !== "export-pdf" &&
                              item.type !== "search" &&
                              item.type !== "annotate" &&
                              item.type !== "multi-annotations-selection" &&
                              item.type !== "signature" &&
                              item.type !== "debug" &&
                              item.type !== "document-crop" &&
                              item.type !== "document-editor" &&
                              item.type !== "print" &&
                              item.type !== "polyline" &&
                              item.type !== "cloudy-polygon" &&
                              item.type !== "polygon" &&
                              item.type !== "ellipse" &&
                              item.type !== "arrow" &&
                              item.type !== "link" &&
                              item.type !== "line" &&
                              item.type !== "callout" &&
                              item.type !== "note" &&
                              item.type !== "rectangle" &&
                              item.type !== "stamp" &&
                              item.type !== "image" &&
                              item.type !== "ink-eraser" &&
                              item.type !== "text-highlighter" &&
                              item.type !== "text" &&
                              item.type !== "highlighter" &&
                              item.type !== "ink" &&
                              item.type !== "pan" &&
                              item.type !== "pager" &&
                              item.type !== "sidebar-layers" &&
                              item.type !== "sidebar-thumbnails" &&
                              item.type !== "sidebar-document-outline" &&
                              item.type !== "sidebar-bookmarks" &&
                              item.type !== "sidebar-signatures" &&
                              item.type !== "sidebar-annotations"
  
                          ));
                          const widget2 = new PSPDFKit.Annotations.WidgetAnnotation({
                              id: PSPDFKit.generateInstantId(),
                              pageIndex: 0,
                              boundingBox: new PSPDFKit.Geometry.Rect({
                                  left: 116,
                                  top: 785,
                                  width: 100,
                                  height: 20
                              }),
                              formFieldName: "my signature form field"
                          })
                          const formField = new PSPDFKit.FormFields.SignatureFormField({
                              name: "my signature form field",
                              annotationIds: new PSPDFKit.Immutable.List([widget2.id])
                          });
                          await instance.create([widget2, formField]);
                           instance.addEventListener("storedSignatures.create", async (e) => {
                               const buffer = await instance.exportPDF({ flatten: true });
                               dataBuffer.value = buffer
                               sutmibPDF(buffer)
                           });
                      }) */

                } catch (error) {
                    loadingPdf.value = false
                    toast(error.response.data.message, {
                        type: "error",
                    });
                } finally {
                    loadingPdf.value = false
                    /*  index() */
                }

            }

        }
        const confirmVehicle = async (aution) => {
            console.log('maldito', aution)
            autionPdf.value = aution
            openPdf.value = true
        }
        const setSorBy = (sort) => {
            sortBy.value = sort
            isOpen.value = false

        }
        const closetModalPdf = () => {
            steps.value.step1 = true
            steps.value.step2 = false
            steps.value.step3 = false
            dataBuffer.value = null
            autionPdf.value = null
            showPdf.value = null
            loadingPdf.value = false
            openPdf.value = false
        }
        const removeDuplicate = (array) => {
            return [...new Set(array)]
        }
        const filterValues = (key) => {
            return removeDuplicate(filteredItems.value.map(item => item.vehicleDetails[key])).sort()
        }
        const applyPairFilters = (event, type, filter) => {
            filteredItems.value = filteredItems.value.filter((item) => {
                if (type === 'start') {
                    return item.vehicleDetails[filter] >= event.target.value
                }
                if (type === 'end') {
                    return item.vehicleDetails[filter] <= event.target.value
                }

            })

            counter.value++
        }
        const applyFilter = (event, filter) => {
            filteredItems.value = filteredItems.value.filter((item) => {
                return item.vehicleDetails[filter] == event.target.value
            })
            counter.value++
        }
        const resetFilters = () => {
            filteredItems.value = data.value
        }
        const resetFilterValue = () => {
            formFilter.value.make = 'Select make',
                formFilter.value.model = 'Select model',
                formFilter.value.year = 'Select make',
                formFilter.value.bodyType = 'Select body type',
                formFilter.value.cilynder = 'Select cylinder',
                formFilter.value.transmission = 'Select transmission',
                formFilter.value.doors = 'Select doors',
                formFilter.value.driver = 'Select drivetrain',
                formFilter.value.color = 'Select color',
                resetFilters()
        }
        const sortedData = computed(() => {
            switch (sortBy.value) {
                case 'Drop off Date':
                    return filteredItems.value.filter(p => true).sort((a, b) => timeToEnd(b.startDate, b.duration) - timeToEnd(a.startDate, a.duration))
                case 'Odometer':
                    return filteredItems.value.sort((a, b) => parseFloat(b.vehicleDetails.odometer) - parseFloat(a.vehicleDetails.odometer));
                case 'Year':
                    return filteredItems.value.sort((a, b) => parseFloat(b.vehicleDetails.year) - parseFloat(a.vehicleDetails.year));
                default:
                    return filteredItems.value
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
            path,
            storeAutions,
            authStore,
            index,
            moment,
            confirmVehicle,
            loadingButton,
            indexShowLoading,
            counter,
            sortedData,
            setSorBy,
            sortBy,
            openPdf,
            autionPdf,
            loadingPdf,
            steps,
            nextContract,
            showPdf,
            pdfDonwload,
            closetModalPdf,
            filterValues,
            applyPairFilters,
            applyFilter,
            resetFilterValue,
            removeDuplicate,
            filteredItems,
            showFilter,
            formFilter
        };
    },
};
</script>
