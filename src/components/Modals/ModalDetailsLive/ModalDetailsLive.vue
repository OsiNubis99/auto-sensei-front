<template>
    <div v-show="statusModal.isActive"
        class="fixed inset-0 flex items-end md:items-center z-50 justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-6xl overflow-auto   rounded-lg shadow-xl animation-fade-modal bg-[#F9F9F9]">
            <div class="p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p class="text-sm md:text-xl text-white">View Details</p>
                <svg @click="statusModal.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="p-5">
                <div class="bg-[#F9F9F9]">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-2xl font-bold">{{ statusModal?.data?.vehicleDetails?.year }} {{
                                statusModal?.data?.vehicleDetails?.make }} {{ statusModal?.data?.vehicleDetails?.model }}
                            </p>
                            <div class="flex gap-3 ">
                                <p> {{ statusModal?.data?.city }}, {{ statusModal?.data?.province }}</p>
                                <p>|</p>
                                <p>Drop off aggrement: {{ statusModal?.data?.dropOffDateForma }}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <button class="btn border border-[#E0E0E0]">See Auction Buyer Side</button>
                            <button @click="cancel" class="btn border border-error text-error ">Cancel Auction</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="grid gap-4  w-full mx-auto mt-8">
                        <div>
                            <details @click="openColapse(1)" class="group border rounded-lg shadow-lg border-[#E0E0E0] ">
                                <summary
                                    class="flex   p-5  justify-between items-center font-medium cursor-pointer list-none">
                                    <div class="flex gap-2 items-center">
                                        <div
                                            class="h-10 w-10 rounded-full p-1 flex justify-center items-center bg-[#E9E8D9]">
                                            <img class="h-8 w-8" src="@/assets/svg/login/verifiqueCard.svg" alt="">
                                        </div>

                                        <p class="font-semibold text-xl">VIN</p>
                                        <P class="px-3 py-1  text-sm rounded-full bg-[#E9E8D9] uppercase">
                                            {{
                                                statusModal?.data?.vin }}
                                        </P>
                                    </div>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div v-if="colapse.vin" class="p-5 pt-0 border border-[#E0E0E0] group-open:animate-fadeIn">
                                    <div class="p-5 flex gap-5 justify-between">
                                        <div class="w-full flex flex-col gap-3 border-r border-[#E0E0E0]">
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Make</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.make }}</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Model</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.model }}</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Trim</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.trim }}</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Year</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.year }}</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Body Type</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.bodyType }}
                                                </p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Cylinder</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.cylinder }}
                                                </p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Transmission</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.transmission
                                                }}</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Drive Train</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.driveTrain }}
                                                </p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Doors</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.doors }}</p>
                                            </div>
                                        </div>
                                        <div class="w-full flex flex-col gap-3">
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Exterior Color</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.color }}</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Odometer</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.odometer }}
                                                </p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Tire Condition</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.tireCondition
                                                }}</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Brake Condition</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleDetails?.brakeCondition
                                                }}</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Number of Keys</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.keysNumber }}</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Vehicle is Currently</p>
                                                <p class=" capitalize ">{{ statusModal?.data?.vehicleStatus?.status }}</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Bank/Institute</p>
                                                <p v-if="statusModal?.data?.vehicleStatus?.financingCompany"
                                                    class=" capitalize ">{{
                                                        statusModal?.data?.vehicleStatus?.financingCompany }}</p>
                                                <p v-else class=" capitalize ">TD Bank</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Remaining Payment</p>
                                                <p v-if="statusModal?.data?.vehicleStatus?.remainingPayments"
                                                    class=" capitalize ">{{
                                                        statusModal?.data?.vehicleStatus?.remainingPayments }}</p>
                                                <p v-else class=" capitalize ">You didn't provide information</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <p class="font-semibold">Buyout Payment</p>
                                                <p class=" capitalize ">The seller didn't provide information</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border rounded-lg border-[#E0E0E0] ">
                                        <div class="flex gap-2 border-b border-[#E0E0E0] items-center p-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M9.16699 9.16663V5.83329H10.8337V9.16663H14.167V10.8333H10.8337V14.1666H9.16699V10.8333H5.83366V9.16663H9.16699ZM10.0003 18.3333C5.39783 18.3333 1.66699 14.6025 1.66699 9.99996C1.66699 5.39746 5.39783 1.66663 10.0003 1.66663C14.6028 1.66663 18.3337 5.39746 18.3337 9.99996C18.3337 14.6025 14.6028 18.3333 10.0003 18.3333ZM10.0003 16.6666C11.7684 16.6666 13.4641 15.9642 14.7144 14.714C15.9646 13.4638 16.667 11.7681 16.667 9.99996C16.667 8.23185 15.9646 6.53616 14.7144 5.28591C13.4641 4.03567 11.7684 3.33329 10.0003 3.33329C8.23222 3.33329 6.53652 4.03567 5.28628 5.28591C4.03604 6.53616 3.33366 8.23185 3.33366 9.99996C3.33366 11.7681 4.03604 13.4638 5.28628 14.714C6.53652 15.9642 8.23222 16.6666 10.0003 16.6666Z"
                                                    fill="#0B1107" />
                                            </svg>
                                            <p class="font-semibold">Additional Package</p>
                                        </div>
                                        <div class="p-5">

                                            <p v-if="statusModal?.data?.vehicleDetails?.aditionals">{{
                                                statusModal?.data?.vehicleDetails?.aditionals }}</p>
                                            <p v-else class="text-[#858585] ">You did not include additional package
                                                information
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div>
                            <details @click="openColapse(2)" class="group border rounded-lg shadow-lg border-[#E0E0E0] ">
                                <summary
                                    class="flex  p-5  justify-between items-center font-medium cursor-pointer list-none">
                                    <div class="flex gap-2 items-center">
                                        <div
                                            class="h-10 w-10 rounded-full p-1 flex justify-center items-center bg-[#E9E8D9]">
                                            <img class="h-8 w-8" src="@/assets/svg/login/verifiqueCard.svg" alt="">
                                        </div>

                                        <p class="font-semibold text-xl">Vehicle Gallery</p>

                                    </div>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div v-if="colapse.photos" class=" border border-[#E0E0E0] group-open:animate-fadeIn">
                                    <div class="p-5 flex gap-5 justify-between">
                                        <div class="grid grid-cols-5 gap-4 overflow-y-auto h-[500px] ">
                                            <div v-for="(img, i) in statusModal?.data?.photos" :key="i"
                                                class="relative  rounded-lg p-2 shadow-sm bg-[#E0E0E0]">
                                                <img class="w-[200px] object-cover h-[170px]" :src="bucket + img?.url"
                                                    alt="">
                                                <p
                                                    class="absolute text-[13px] bottom-2 py-1 px-3 left-0 rounded-r-full bg-white">
                                                    {{ img?.name }}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </details>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { ModalDetailsLive } from '@/stores/modalDetailsLive';
import moment from "moment";
export default {
    props: {
        cancelAution: {
            type: Function,
        },
    },
    setup(props) {
        const statusModal = ModalDetailsLive()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const cancel = () => {
            props.cancelAution(statusModal.data._id)
            statusModal.closeModal()
        }
        const colapse = ref({
            vin: false,
            photos: false
        })
        const openColapse = (op) => {
            switch (op) {
                case 1:
                    colapse.value.vin = true
                    colapse.value.photos = false
                    break;
                case 2:
                    colapse.value.vin = false
                    colapse.value.photos = true
                    break;
                default:
                    break;
            }
        }

        return {
            statusModal,
            cancel,
            bucket,
            moment,
            colapse,
            openColapse
        };
    },
};
</script>