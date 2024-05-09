<template>
    <div class="w-full flex   sm:p-0 relative" :class="changeLayouts ? 'flex-col' : 'flex-col md:flex-row'">
        <p
            class="md:font-semibold font-medium text-xs md:text-base absolute top-0 left-0 z-50 bg-[#fff] rounded-lg ml-2 mt-2 px-4 py-1">
            Launching Soon</p>
        <swiper pagination :modules="modules" :slides-per-view="1" class="swiper-autions"
            :class="changeLayouts ? 'w-full' : 'w-full md:w-[40%]'">
            <swiper-slide v-for="(img, index) in auction?.photos" :key="index">
                <img class="w-full rounded-s-lg h-full object-cover" :src="bucket + img.url" alt="">
            </swiper-slide>
            <div v-if="!auction?.photos" class=" absolute w-full h-full top-0 ">
                <img class="w-full rounded-s-lg h-full object-cover" src="@/assets/img/jpg/image.jpg" alt="">
            </div>
        </swiper>
        <div class="w-full flex  justify-between gap-3 " :class="changeLayouts ? 'flex-col' : 'flex-col md:flex-row'">
            <div class="flex p-4 pb-0 md:p-5 relative flex-col gap-3">
                <div>
                    <div class="font-bold md:text-xl">{{ auction?.vehicleDetails?.year }} {{
        auction?.vehicleDetails?.make }} {{ auction?.vehicleDetails?.model }}</div>
                    <p class="text-xs capitalize font-semibold md:text-base">
                        {{ auction?.city }}, {{ auction?.province }}
                    </p>
                </div>
                <div class="hidden md:grid grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                    <div v-if="auction?.vehicleDetails?.vin" class="flex gap-2 items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z"
                                fill="#858585" />
                        </svg>
                        <p class="uppercase">{{ auction?.vehicleDetails?.vin }}</p>
                    </div>
                    <div v-if="auction?.vehicleDetails?.odometer" class="flex gap-2 items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z"
                                fill="#858585" />
                        </svg>
                        <p class="capitalize">{{ auction?.vehicleDetails?.odometer }} Kilometers
                        </p>
                    </div>
                </div>
                <div class="hidden md:grid grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                    <div v-if="auction?.vehicleDetails?.color" class="flex gap-2 items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z"
                                fill="#858585" />
                        </svg>
                        <p class="capitalize">{{ auction?.vehicleDetails?.color }}</p>
                    </div>
                    <div v-if="auction?.vehicleDetails?.driveTrain" class="flex gap-2 items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                fill="#0B1107" />
                        </svg>
                        <p class="text-md font-semibold capitalize ">{{ auction?.vehicleDetails?.tireCondition }}</p>
                    </div>
                    <div v-if="auction?.vehicleDetails?.brakeCondition"
                        class="bg-[#F0F0F0] flex px-1  w-fit md:px-2 py-1 gap-1 md:gap-3  rounded-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                fill="#0B1107" />
                        </svg>
                        <p class="text-md font-semibold capitalize ">{{ auction?.vehicleDetails?.brakeCondition }}</p>
                    </div>
                </div>
                <div v-show="auction?.status == 'unapproved'"
                    class="flex gap-2 absolute bottom-3 left-0 w-auto items-center">
                    <img class="h-10 w-10" src="@/assets/svg/Spin.svg" alt="">
                    <p class=" text-[12px] md:text-base">Waiting for verification, can take up to <span
                            class="font-bold"> 90
                            mins</span></p>
                </div>
            </div>
            <div :class="changeLayouts ? 'w-full' : 'md:w-[40%] flex flex-col justify-between h-full '"
                class="border-l-2  border-[#E0E0E0]">
                <div class="flex md:p-5  pl-4 ga justify-between " :class="changeLayouts ? 'flex-row' : 'flex-col '">
                    <div v-if="auction?.startDate" class="space-y-1"
                        :class="changeLayouts ? 'flex flex-col justify-between items-start' : ''">
                        <p class="text-xs md:text-base">Starts in: </p>
                        <div class="flex gap-2 items-center ">
                            <vue-countdown :time="timeAution"
                                class="flex text-base-black  md:text-2xl gap-3 items-center"
                                v-slot="{ days, hours, minutes, seconds }">
                                <p class="font-medium" v-if="days > 0">{{ days }}D</p>
                                <p class="font-medium" v-if="hours > 0">{{ hours }}H</p>
                                <p class="font-medium" v-if="minutes > 0">{{ minutes }}M</p>
                                <p class="font-medium" v-if="seconds > 0">{{ seconds }}S</p>
                                <p class="font-medium" v-else>0S</p>
                            </vue-countdown>
                        </div>
                    </div>
                </div>
                <div class=" p-2 md:p-5 w-full">
                    <button @click="declineAution(auction)"
                        class="btn w-full bg-white border border-[#E0E0E0] text-error">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ModalAcceptAution } from "@/stores/modalAcceptAution";
import { ModalViewDetails } from "@/stores/modalViewDetails";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        auction: {
            type: Object
        },
        changeLayouts: {
            type: Boolean
        },
        decline: {
            type: Function
        },
    },
    setup(props) {
        const auction = ref(props.auction);
        const changeLayouts = ref(props.changeLayouts);
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const statusModalView = ModalViewDetails()
        const timeAution = ref(null)
        const statusModal = ModalAcceptAution()
        function timeToStart(startDate) {
            if (!startDate) return 0;
            return new Date(startDate) - Date.now();
        }
        const declineAution = (auction, option) => {
            console.log('auction', auction)
            console.log('option', option)
            props.decline(auction, option)
        }
        onMounted(() => {
            if (auction.startDate) {
                timeAution.value = timeToStart(auction.startDate)
                console.log(' timeAution.value', timeAution.value)
            }

        })
        return {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            auction,
            bucket,
            changeLayouts,
            declineAution,
            timeToStart,
            statusModal,
            statusModalView,
            timeAution
        };
    },
};
</script>