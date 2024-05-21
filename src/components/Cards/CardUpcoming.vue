<template>
    <div class="w-full flex   sm:p-0 relative" :class="changeLayouts ? 'flex-col' : 'flex-col md:flex-row'">
        <div>
            <template v-if="aution?.remind">
                <div @click="remindCancel(aution)"
                    class="bg-blue-dark p-2 rounded-lg md:hidden z-50 top-2 flex absolute right-2 justify-center item-center ">

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M16.6665 15.5559L16.9998 16.0001C17.0463 16.062 17.0745 16.1356 17.0815 16.2127C17.0884 16.2897 17.0738 16.3672 17.0392 16.4364C17.0046 16.5056 16.9514 16.5638 16.8856 16.6045C16.8197 16.6452 16.7439 16.6667 16.6665 16.6667H3.33317C3.25579 16.6667 3.17994 16.6452 3.11412 16.6045C3.04829 16.5638 2.9951 16.5056 2.96049 16.4364C2.92589 16.3672 2.91124 16.2897 2.91819 16.2127C2.92514 16.1356 2.95341 16.062 2.99984 16.0001L3.33317 15.5559V8.33342C3.33317 6.5653 4.03555 4.86961 5.28579 3.61937C6.53604 2.36913 8.23173 1.66675 9.99984 1.66675C11.7679 1.66675 13.4636 2.36913 14.7139 3.61937C15.9641 4.86961 16.6665 6.5653 16.6665 8.33342V15.5559ZM7.9165 17.5001H12.0832C12.0832 18.0526 11.8637 18.5825 11.473 18.9732C11.0823 19.3639 10.5524 19.5834 9.99984 19.5834C9.4473 19.5834 8.9174 19.3639 8.5267 18.9732C8.136 18.5825 7.9165 18.0526 7.9165 17.5001Z"
                            fill="white" />
                    </svg>
                </div>
            </template>

            <template v-else>
                <div @click="remind(aution)"
                    class="bg-blue-dark p-2 rounded-lg md:hidden z-50 top-2 flex absolute right-2 justify-center item-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M14.9998 8.33317C14.9998 7.00709 14.4731 5.73532 13.5354 4.79764C12.5977 3.85996 11.3259 3.33317 9.99984 3.33317C8.67376 3.33317 7.40199 3.85996 6.4643 4.79764C5.52662 5.73532 4.99984 7.00709 4.99984 8.33317V14.9998H14.9998V8.33317ZM16.6665 15.5557L16.9998 15.9998C17.0463 16.0617 17.0745 16.1354 17.0815 16.2124C17.0884 16.2895 17.0738 16.367 17.0392 16.4362C17.0046 16.5054 16.9514 16.5636 16.8856 16.6043C16.8197 16.645 16.7439 16.6665 16.6665 16.6665H3.33317C3.25579 16.6665 3.17994 16.645 3.11412 16.6043C3.04829 16.5636 2.9951 16.5054 2.96049 16.4362C2.92589 16.367 2.91124 16.2895 2.91819 16.2124C2.92514 16.1354 2.95341 16.0617 2.99984 15.9998L3.33317 15.5557V8.33317C3.33317 6.56506 4.03555 4.86937 5.28579 3.61913C6.53604 2.36888 8.23173 1.6665 9.99984 1.6665C11.7679 1.6665 13.4636 2.36888 14.7139 3.61913C15.9641 4.86937 16.6665 6.56506 16.6665 8.33317V15.5557ZM7.9165 17.4998H12.0832C12.0832 18.0524 11.8637 18.5823 11.473 18.973C11.0823 19.3637 10.5524 19.5832 9.99984 19.5832C9.4473 19.5832 8.9174 19.3637 8.5267 18.973C8.136 18.5823 7.9165 18.0524 7.9165 17.4998Z"
                            fill="white" />
                    </svg>
                </div>
            </template>
        </div>
        <swiper pagination :modules="modules" :slides-per-view="1" class="swiper-autions"
            :class="changeLayouts ? 'w-full' : 'w-full md:w-[40%]'">
            <swiper-slide v-for="(img, indexPhoto) in aution?.photos" :key="indexPhoto">
                <img class="w-full rounded-s-lg h-full object-cover" :src="bucket + img.url" alt="">
            </swiper-slide>
            <div v-if="!aution?.photos" class=" absolute w-full h-full top-0 ">
                <img class="w-full rounded-s-lg h-full object-cover" src="@/assets/img/jpg/image.jpg" alt="">
            </div>
        </swiper>
        <div class="w-full flex  justify-between gap-3 " :class="changeLayouts ? 'flex-col' : 'flex-col md:flex-row'">
            <RouterLink :to="{ name: 'action-details-dealer', params: { id: aution?._id } }"
                class="flex p-4 md:p-5  flex-col gap-3">
                <div class="">
                    <div class="font-bold md:text-xl">{{ aution?.vehicleDetails?.year }} {{ aution?.vehicleDetails?.make
                        }} {{ aution?.vehicleDetails?.model }}
                    </div>
                    <p class="text-xs md:text-base">
                        {{ aution?.city }}, {{ aution?.province }}
                    </p>
                </div>
                <div class="hidden md:grid 2xl:grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                    <div class="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z"
                                fill="#858585" />
                        </svg>
                        <p class="capitalize">{{ aution?.vin }}</p>
                    </div>
                    <div class="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z"
                                fill="#858585" />
                        </svg>
                        <p class="capitalize">{{ aution?.vehicleDetails?.odometer }} Kilometers
                        </p>
                    </div>
                </div>
                <div class="hidden md:grid 2xl:grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                    <div class="flex gap-2 items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z"
                                fill="#858585" />
                        </svg>
                        <p class="capitalize">{{ aution?.vehicleDetails?.color }}</p>
                    </div>
                    <div class="flex gap-2 items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.6673 13.3327H3.33398V13.9993C3.33398 14.3675 3.0355 14.666 2.66732 14.666H2.00065C1.63246 14.666 1.33398 14.3675 1.33398 13.9993V7.99935L3.00954 3.53118C3.2047 3.01078 3.70219 2.66602 4.25798 2.66602H11.7433C12.2991 2.66602 12.7966 3.01078 12.9918 3.53118L14.6673 7.99935V13.9993C14.6673 14.3675 14.3689 14.666 14.0007 14.666H13.334C12.9658 14.666 12.6673 14.3675 12.6673 13.9993V13.3327ZM2.75798 7.99935H13.2433L11.7433 3.99935H4.25798L2.75798 7.99935ZM4.33398 11.3327C4.88627 11.3327 5.33398 10.8849 5.33398 10.3327C5.33398 9.78042 4.88627 9.33268 4.33398 9.33268C3.7817 9.33268 3.33398 9.78042 3.33398 10.3327C3.33398 10.8849 3.7817 11.3327 4.33398 11.3327ZM11.6673 11.3327C12.2196 11.3327 12.6673 10.8849 12.6673 10.3327C12.6673 9.78042 12.2196 9.33268 11.6673 9.33268C11.1151 9.33268 10.6673 9.78042 10.6673 10.3327C10.6673 10.8849 11.1151 11.3327 11.6673 11.3327Z"
                                fill="#858585" />
                        </svg>
                        <p class="capitalize">{{ aution?.vehicleDetails?.driveTrain }}</p>
                    </div>
                </div>
                <div class=" flex items-center gap-4 "
                    :class="changeLayouts ? ' p-5 whitespace-nowrap  gap-5 overflow-x-auto overflow-y-hidden ' : ''">
                    <div v-if="aution?.vehicleDetails?.tireCondition"
                        class="bg-[#F0F0F0] flex px-1  w-fit md:px-2 py-1 gap-1 md:gap-3  rounded-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                fill="#0B1107" />
                        </svg>
                        <p class=" text-[10px] lg:text-xs lg:text-md font-semibold capitalize  ">{{
        aution?.vehicleDetails?.tireCondition
    }}</p>
                    </div>
                    <div v-if="aution?.vehicleDetails?.brakeCondition"
                        class="bg-[#F0F0F0] flex px-1  w-fit md:px-2 py-1 gap-1 md:gap-3  rounded-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                fill="#0B1107" />
                        </svg>
                        <p class=" text-[10px] lg:text-xs lg:text-md font-semibold capitalize  ">{{
        aution?.vehicleDetails?.brakeCondition }}</p>
                    </div>
                </div>
            </RouterLink>
            <div :class="changeLayouts ? 'w-full' : 'md:w-[40%] hidden md:flex flex-col justify-between h-full'"
                class="border-l-2  border-[#E0E0E0]">
                <div class="flex  p-4 pt-1  justify-between " :class="changeLayouts ? 'flex-row' : 'flex-col h-full '">
                    <div class="space-y-1 flex w-full  flex-col justify-between items-start">
                        <p class=" text-md md:text-base">Starts in:</p>
                        <p class=" font-medium md:text-2xl ">
                            {{ moment(aution?.startDate).format('MMMM DD, h:mm: A') }}</p>
                    </div>
                </div>
                <div v-if="aution?.remind" class="flex gap-4 p-5 flex-col justify-between w-full">
                    <p class="text-[#858585] text-sm ">We will notify you when the auction is
                        going
                        to start via text & email as well</p>
                    <button @click="remindCancels(aution)"
                        class="btn w-full bg-transparent border border-[#E0E0E0] flex gap-2 items-center text-base-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path
                                d="M12.8907 13.8324H3.16671C3.10481 13.8324 3.04413 13.8152 2.99147 13.7826C2.93881 13.7501 2.89625 13.7035 2.86857 13.6481C2.84088 13.5928 2.82916 13.5308 2.83472 13.4691C2.84028 13.4075 2.8629 13.3486 2.90004 13.2991L3.16671 12.9437V7.16573C3.16671 6.27907 3.38271 5.44307 3.76604 4.70773L1.42871 2.37107L2.37204 1.42773L15.5714 14.6277L14.628 15.5704L12.8907 13.8324ZM13.8334 11.0231L5.53938 2.72907C6.34254 2.19303 7.27616 1.8851 8.24063 1.83814C9.2051 1.79117 10.1642 2.00693 11.0157 2.46239C11.8671 2.91785 12.5789 3.59592 13.0752 4.42426C13.5714 5.2526 13.8335 6.20012 13.8334 7.16573V11.0231ZM6.83338 14.4991H10.1667C10.1667 14.9411 9.99112 15.365 9.67856 15.6776C9.36599 15.9901 8.94207 16.1657 8.50004 16.1657C8.05802 16.1657 7.63409 15.9901 7.32153 15.6776C7.00897 15.365 6.83338 14.9411 6.83338 14.4991Z"
                                fill="#0B1107" />
                        </svg>
                        Cancel Reminder
                    </button>
                </div>
                <div v-else class="flex gap-4 p-5 justify-between w-full">
                    <button @click="reminds(aution)"
                        class="btn w-full bg-primary flex gap-2 items-center text-base-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                            <path
                                d="M11.3333 11.9447L11.5999 12.3C11.6371 12.3496 11.6597 12.4085 11.6652 12.4701C11.6708 12.5318 11.6591 12.5937 11.6314 12.6491C11.6037 12.7045 11.5612 12.751 11.5085 12.7836C11.4558 12.8161 11.3952 12.8334 11.3333 12.8334H0.666585C0.604681 12.8334 0.544 12.8161 0.491342 12.7836C0.438683 12.751 0.396127 12.7045 0.368443 12.6491C0.340759 12.5937 0.32904 12.5318 0.334599 12.4701C0.340158 12.4085 0.362776 12.3496 0.399919 12.3L0.666585 11.9447V6.16671C0.666585 4.75222 1.22849 3.39567 2.22868 2.39547C3.22888 1.39528 4.58543 0.833374 5.99992 0.833374C7.41441 0.833374 8.77096 1.39528 9.77115 2.39547C10.7713 3.39567 11.3333 4.75222 11.3333 6.16671V11.9447ZM4.33325 13.5H7.66658C7.66658 13.9421 7.49099 14.366 7.17843 14.6786C6.86587 14.9911 6.44195 15.1667 5.99992 15.1667C5.55789 15.1667 5.13397 14.9911 4.82141 14.6786C4.50885 14.366 4.33325 13.9421 4.33325 13.5Z"
                                fill="#0B1107" />
                        </svg>
                        Remind Me
                    </button>
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
import moment from "moment";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        aution: {
            type: Object
        },
        changeLayouts: {
            type: Boolean
        },
        remindCancel: {
            type: Function
        },
        remind: {
            type: Function
        },
    },
    setup(props) {
        const aution = ref(props.aution);
        const changeLayouts = ref(props.changeLayouts);
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const statusModalView = ModalViewDetails()
        const statusModal = ModalAcceptAution()
        function timeToStart(startDate) {
            if (!startDate) return 0;
            return new Date(startDate) - Date.now();
        }
        const remindCancels = (auction) => {
            props.remindCancel(auction)
        }
        const reminds = (auction) => {
            props.remind(auction)
        }
        return {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            aution,
            bucket,
            changeLayouts,
            timeToStart,
            statusModal,
            statusModalView,
            remindCancels,
            reminds,
            moment
        };
    },
};
</script>