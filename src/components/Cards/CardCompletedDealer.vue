<template>
    <div class="w-full flex flex-col md:flex-row sm:p-0 relative" :class="changeLayouts ? 'flex-col' : ''">
        <swiper pagination :modules="modules" :slides-per-view="1" class="swiper-autions"
            :class="changeLayouts ? 'w-full' : 'w-full md:w-[40%]'">
            <swiper-slide v-for="(img, index) in aution?.photos" :key="index">
                <img class="w-full rounded-s-lg h-full object-cover" :src="bucket + img.url" alt="">
            </swiper-slide>
            <div v-if="!aution?.photos" class=" absolute w-full h-full top-0 ">
                <img class="w-full rounded-s-lg h-full object-cover" src="@/assets/img/jpg/image.jpg" alt="">
            </div>
        </swiper>
        <div class="w-full flex flex-col md:flex-row justify-between md:gap-3" :class="changeLayouts ? 'flex-col' : ''">
            <RouterLink :to="{ name: 'action-details-dealer', params: { id: aution?._id } }"
                class="flex p-5  flex-col gap-3">
                <div class="">
                    <div class="font-bold md:text-xl">{{ aution?.vehicleDetails?.year }} {{
        aution?.vehicleDetails?.make }} {{ aution?.vehicleDetails?.model }}</div>
                    <p class="text-xs md:text-base">
                        {{ aution?.city }}, {{ aution?.province }}
                    </p>
                </div>
                <div class="hidden md:grid grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                    <div v-if="aution?.vehicleDetails?.vin" class="  flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z"
                                fill="#858585" />
                        </svg>
                        <p class="uppercase">{{ aution?.vehicleDetails?.vin }}</p>
                    </div>
                    <div v-if="aution?.vehicleDetails?.odometer" class="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z"
                                fill="#858585" />
                        </svg>
                        <p class="capitalize">{{ aution?.vehicleDetails?.odometer }} Kilometers
                        </p>
                    </div>
                </div>
                <div class="hidden md:grid grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                    <div v-if="aution?.vehicleDetails?.color" class="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z"
                                fill="#858585" />
                        </svg>
                        <p class="capitalize">{{ aution?.vehicleDetails?.color }}</p>
                    </div>
                    <div v-if="aution?.vehicleDetails?.driveTrain" class="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.6673 13.3327H3.33398V13.9993C3.33398 14.3675 3.0355 14.666 2.66732 14.666H2.00065C1.63246 14.666 1.33398 14.3675 1.33398 13.9993V7.99935L3.00954 3.53118C3.2047 3.01078 3.70219 2.66602 4.25798 2.66602H11.7433C12.2991 2.66602 12.7966 3.01078 12.9918 3.53118L14.6673 7.99935V13.9993C14.6673 14.3675 14.3689 14.666 14.0007 14.666H13.334C12.9658 14.666 12.6673 14.3675 12.6673 13.9993V13.3327ZM2.75798 7.99935H13.2433L11.7433 3.99935H4.25798L2.75798 7.99935ZM4.33398 11.3327C4.88627 11.3327 5.33398 10.8849 5.33398 10.3327C5.33398 9.78042 4.88627 9.33268 4.33398 9.33268C3.7817 9.33268 3.33398 9.78042 3.33398 10.3327C3.33398 10.8849 3.7817 11.3327 4.33398 11.3327ZM11.6673 11.3327C12.2196 11.3327 12.6673 10.8849 12.6673 10.3327C12.6673 9.78042 12.2196 9.33268 11.6673 9.33268C11.1151 9.33268 10.6673 9.78042 10.6673 10.3327C10.6673 10.8849 11.1151 11.3327 11.6673 11.3327Z"
                                fill="#858585" />
                        </svg>
                        <p class="capitalize">{{ aution?.vehicleDetails?.driveTrain }}</p>
                    </div>
                </div>
                <div class=" flex  items-center md:grid md:grid-cols-2  gap-1 "
                    :class="changeLayouts ? ' p-5 whitespace-nowrap  gap-5 overflow-x-auto overflow-y-hidden ' : ''">
                    <div v-if="aution?.vehicleDetails?.tireCondition"
                        class="bg-[#F0F0F0] flex px-1 md:px-5 py-1 gap-1 md:gap-3  rounded-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                fill="#0B1107" />
                        </svg>
                        <p class=" text-[10px] capitalize">{{ aution?.vehicleDetails?.tireCondition }}</p>
                    </div>
                    <div v-if="aution?.vehicleDetails?.brakeCondition"
                        class="bg-[#F0F0F0] flex px-1  md:px-5 py-1  gap-1 md:gap-3 rounded-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                fill="#0B1107" />
                        </svg>
                        <p class=" text-[10px] capitalize">{{ aution?.vehicleDetails?.brakeCondition }}</p>
                    </div>
                </div>
                <div v-if="aution?.bids[0].participant._id == auth?.userData?._id" class="md:flex hidden gap-4 mt-5 "
                    :class="changeLayouts ? 'flex-col' : ''">
                    <RouterLink :to="{ name: 'inbox-dealer', query: { id: aution._id + '-' + auth?.userData?._id } }"
                        class=" w-fit flex gap-3 cursor-pointer rounded-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z"
                                fill="#0A0A0A" />
                        </svg>
                        <p class="capitalize  ">{{ aution.owner.seller.firstName }} {{
        aution.owner.seller.lastName }}</p>
                    </RouterLink>
                </div>
            </RouterLink>
            <div :class="changeLayouts ? 'w-full hidden md:block' : 'w-[40%] hidden md:flex flex-col'"
                class="border-l-2  border-[#E0E0E0]">
                <div class="flex  p-4 pt-1  justify-start " :class="changeLayouts ? 'flex-row' : 'flex-col h-full '">
                    <div class=" flex w-full  justify-start items-center">
                        <div class="flex gap-6 items-start justify-start flex-col">
                            <p>Expected drop off date</p>
                            <p class="text-xl font-medium">{{ moment(aution.dropOffDate).format('MMMM DD, YYYY') }}</p>
                        </div>
                    </div>
                    <template v-if="aution?.bids[0].participant._id == auth?.userData?._id">
                        <div v-if="aution.status == 'completed' || aution.status == 'bids completed'" class="pb-5 flex mt-4 flex-col gap-4">
                            <p>Final bid</p>
                            <p class="text-2xl font-semibold">${{ aution.bids[0].amount }}</p>
                        </div>
                    </template>

                </div>
                <div v-if="aution.status == 'drop off'" class="flex justify-between items-center w-full p-5">
                    <div>
                        <p>Final bid</p>
                        <p class="text-2xl font-semibold">${{ aution.bids[0].amount }}</p>
                    </div>
                    <div>
                        <p>Status</p>
                        <p
                            class="py-1 px-4 border rounded-full text-sm text-white bg-[#05A54B] flex justify-center items-center text-left">
                            Received
                        </p>
                    </div>
                </div>
                <template v-if="aution?.bids[0].participant._id == auth?.userData?._id">
                    <div v-if="aution.status == 'completed' || aution.status == 'bids completed'" class="p-2">

                        <button :disabled="loadingButton ? true : false" @click="confirmVehicleAution(aution._id)"
                            class="btn w-full bg-primary flex gap-2 items-center text-base-black">
                            <div v-if="loadingButton && indexShowLoading == aution._id" class="w-8 h-8">
                                <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#0B1107"
                                    stroke="#fff" stroke-width="0" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                                    </path>
                                </svg>
                            </div>
                            <span v-else> Vehicle Received</span>
                        </button>
                    </div>
                </template>

            </div>
            <div class="flex flex-col md:hidden">
                <div class="flex  p-4 pt-1  justify-between " :class="changeLayouts ? 'flex-row' : 'flex-col h-full '">
                    <div class=" flex w-full  justify-between items-center">
                        <div class="flex  items-start gap-1 justify-center flex-col">
                            <p class="text-xs">Expected drop off date</p>
                            <p class="text-md font-medium">{{
        moment(aution.dropOffDate).format('MMMM DD, YYYY') }}</p>
                        </div>
                    </div>
                </div>
                <div v-if="aution.status == 'drop off'" class="flex justify-between items-center w-full pt-0 p-5">
                    <div>
                        <p class="text-sm">Final bid</p>
                        <p class="text-lg font-semibold">${{ aution.bids[0].amount }}</p>
                    </div>
                    <div>
                        <p class="text-sm">Status</p>
                        <p
                            class="py-1 px-2 border rounded-full text-xs text-white bg-[#05A54B] flex justify-center items-center text-left">
                            Received
                        </p>
                    </div>
                </div>
                <div v-if="aution?.bids[0].participant._id == auth?.userData?._id && aution?.status == 'drop off'"
                    class="flex gap-4 mt-5 px-2 justify-center">
                    <RouterLink :to="{ name: 'inbox-dealer', query: { id: aution._id + '-' + auth?.userData?._id } }"
                        class=" w-full flex gap-3 justify-center py-2 border border-[#e5e5e5] cursor-pointer rounded-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z"
                                fill="#0A0A0A" />
                        </svg>
                        <p class="capitalize text-xs">Contact Seller</p>
                    </RouterLink>
                </div>
                <template v-if="aution?.bids[0].participant._id == auth?.userData?._id">
                    <div class="flex w-full items-center gap-2 pb-2 px-2">
                        <div v-if="aution.status == 'completed' || aution.status == 'bids completed'" class="w-full">
                            <button :disabled="loadingButton ? true : false" @click="confirmVehicleAution(aution._id)"
                                class="btn !py-2 w-full bg-primary flex gap-2 items-center text-base-black">
                                <div v-if="loadingButton && indexShowLoading == aution._id" class="w-8 h-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#0B1107"
                                        stroke="#fff" stroke-width="0" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                                        </path>
                                    </svg>
                                </div>
                                <span class="text-xs" v-else> Vehicle Received</span>
                            </button>
                        </div>
                        <div v-if="aution.status == 'completed' || aution.status == 'bids completed'">
                            <RouterLink
                                :to="{ name: 'inbox-dealer', query: { id: aution?._id + '-' + auth?.userData._id } }"
                                class="border rounded-lg flex justify-center items-center p-2 border-[#C2C2C2]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z"
                                        fill="#0A0A0A" />
                                </svg>
                            </RouterLink>
                        </div>
                    </div>

                </template>

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
import moment from "moment";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ModalBids } from '@/stores/modalBids';
import { ModalAutoBid } from '@/stores/modalAutoBid';
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
        auth: {
            type: Object
        },
        confirmVehicle: {
            Type: Function
        }
    },
    setup(props) {
        const aution = ref(props.aution);
        const changeLayouts = ref(props.changeLayouts);
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const statusModal = ModalBids()
        const statusModalAuto = ModalAutoBid()
        const auth = ref(props.auth)
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
        }
        const confirmVehicleAution = (id) => {
            props.confirmVehicle(id)
        }
        return {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            aution,
            bucket,
            changeLayouts,
            statusModal,
            auth,
            timeToEnd,
            statusModalAuto,
            moment,
            confirmVehicleAution
        };
    },
};
</script>