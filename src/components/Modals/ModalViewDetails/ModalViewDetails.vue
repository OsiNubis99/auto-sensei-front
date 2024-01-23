<template>
    <div v-show="statusModal.isActive"
        class="fixed inset-0 flex items-center z-50 justify-center bg-base-black  bg-opacity-50">
        <div class="w-[60%] overflow-auto  bg-white rounded-lg shadow-xl">
            <div class="p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p class="text-xl text-white">View Details</p>
                <svg @click="statusModal.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="p-5">
                <div class="border-b pb-2 flex justify-between items-center border-b-[#F0F0F0]">
                    <div clas capitalize s="">
                        <p class="text-2xl font-semibold capitalize">2016 Chevrolet Traverse L</p>
                        <div class="flex gap-1 items-center">
                            <p>St. John, Newfoundland & Labrador</p>
                            <p>|</p>
                            <p>Drop off aggrement: <strong> {{ statusModal.dataAutiont.dropOffDate }}</strong> </p>
                        </div>
                    </div>
                    {{ statusModal.dataAutiont.status }}
                    <div v-if="statusModal.dataAutiont.status == 'bids completed'" class="flex gap-2 items-center">
                        <button class="btn w-full bg-primary rounded-lg">Accept</button>
                        <button class="btn w-full bg-white border border-error text-error rounded-lg">Decline</button>
                    </div>


                </div>
                <div class="border-r flex pt-0 border-r-[#F0F0F0]">
                    <div class="w-[70%] p-4">
                        <div>
                            <img class=" rounded-lg  "
                                src="https://s3-alpha-sig.figma.com/img/f3c6/f5f9/bf182aa401606be7faa24c81b42c36a2?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M1J7YjNQ4ocGtev8MPb0ddVDC3d6UXnEiiTRvRX4WgdS6a8w5n1T7SEszk0O7RuaRoUklWYvekOEcVu17e3XiUleYOvrzFS7G2UJQkLAg9OGgWvjadseYiqeNnaF~MYk8lskQ7A8oi5I-Xc~pFm2uwH2B8jLHEjupCYgR9n8UZ3oh3-I7xzkoA9NiBZ1uuG0f-OhBjq4OJHtSo8OHP8~ivbIf97Wc8SkkQwT-y2rDUDnZj4by0iWVpaiTQ1kfJMDXa0TYirJ2Jc3fz~PbZO9GpRtV4NWeIinwBsuXoPYz6PuyB0~3-rvY0z4s6PeKGxmBYU1MUPcvKIM1WCaT67nrQ__"
                                alt="">
                            <div class="flex flex-col gap-1">
                                <div class="grid grid-cols-2 gap-2 pt-4">
                                    <div v-if="statusModal.dataAutiont.vin" class="flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12"
                                            fill="none">
                                            <path
                                                d="M0.332031 0.662267C0.332031 0.296507 0.635571 0 0.993231 0H13.0042C13.3694 0 13.6654 0.296633 13.6654 0.662267V11.3377C13.6654 11.7035 13.3618 12 13.0042 12H0.993231C0.628065 12 0.332031 11.7034 0.332031 11.3377V0.662267ZM2.9987 8V9.33333H10.9987V8H2.9987ZM2.9987 2.66667V6.66667H6.9987V2.66667H2.9987ZM8.33203 2.66667V4H10.9987V2.66667H8.33203ZM8.33203 5.33333V6.66667H10.9987V5.33333H8.33203ZM4.33203 4H5.66536V5.33333H4.33203V4Z"
                                                fill="#858585" />
                                        </svg>
                                        <p class=" uppercase ">{{ statusModal.dataAutiont.vin }}</p>
                                    </div>
                                    <div class="flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none">
                                            <path
                                                d="M13.332 8.66667C13.332 10.1394 12.7351 11.4727 11.77 12.4379L12.7128 13.3807C13.9192 12.1743 14.6654 10.5076 14.6654 8.66667C14.6654 4.98477 11.6806 2 7.9987 2C4.3168 2 1.33203 4.98477 1.33203 8.66667C1.33203 10.5076 2.07822 12.1743 3.28465 13.3807L4.22746 12.4379C3.26232 11.4727 2.66536 10.1394 2.66536 8.66667C2.66536 5.72115 5.05318 3.33333 7.9987 3.33333C10.9442 3.33333 13.332 5.72115 13.332 8.66667ZM10.194 5.52865L6.9987 8.33333L8.33203 9.66667L11.1368 6.47145L10.194 5.52865Z"
                                                fill="#858585" />
                                        </svg>
                                        <p class=" capitalize ">{{ statusModal.dataAutiont.vehicleDetails.odometer }}
                                            Kilometers</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-2 pb-4">
                                    <div class="flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none">
                                            <path
                                                d="M12.8204 12.4871L13.999 11.3086L15.1774 12.4871C15.8283 13.138 15.8283 14.1933 15.1774 14.8442C14.5266 15.495 13.4713 15.495 12.8204 14.8442C12.1696 14.1933 12.1696 13.138 12.8204 12.4871ZM5.92103 0.71875L13.4635 8.26122C13.7238 8.52156 13.7238 8.94369 13.4635 9.20402L7.80662 14.8609C7.54629 15.1212 7.12415 15.1212 6.86382 14.8609L1.20698 9.20402C0.946632 8.94369 0.946632 8.52156 1.20698 8.26122L6.39243 3.07577L4.97822 1.66156L5.92103 0.71875ZM7.33522 4.01858L2.62119 8.73262H12.0493L7.33522 4.01858Z"
                                                fill="#858585" />
                                        </svg>
                                        <p class="capitalize"> {{ statusModal.dataAutiont.vehicleDetails.color }}</p>
                                    </div>
                                    <div class="flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none">
                                            <path
                                                d="M12.6654 13.3327H3.33203V13.9993C3.33203 14.3675 3.03355 14.666 2.66536 14.666H1.9987C1.63051 14.666 1.33203 14.3675 1.33203 13.9993V7.99935L3.00759 3.53118C3.20274 3.01078 3.70024 2.66602 4.25603 2.66602H11.7414C12.2972 2.66602 12.7946 3.01078 12.9898 3.53118L14.6654 7.99935V13.9993C14.6654 14.3675 14.3669 14.666 13.9987 14.666H13.332C12.9638 14.666 12.6654 14.3675 12.6654 13.9993V13.3327ZM2.75603 7.99935H13.2414L11.7414 3.99935H4.25603L2.75603 7.99935ZM4.33203 11.3327C4.88432 11.3327 5.33203 10.8849 5.33203 10.3327C5.33203 9.78042 4.88432 9.33268 4.33203 9.33268C3.77974 9.33268 3.33203 9.78042 3.33203 10.3327C3.33203 10.8849 3.77974 11.3327 4.33203 11.3327ZM11.6654 11.3327C12.2176 11.3327 12.6654 10.8849 12.6654 10.3327C12.6654 9.78042 12.2176 9.33268 11.6654 9.33268C11.1131 9.33268 10.6654 9.78042 10.6654 10.3327C10.6654 10.8849 11.1131 11.3327 11.6654 11.3327Z"
                                                fill="#858585" />
                                        </svg>
                                        <p class="capitalize">{{ statusModal.dataAutiont.vehicleDetails.driveTrain }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-2 items-center mb-4">
                                <div class="bg-[#F0F0F0] flex px-5 py-1 gap-3 rounded-lg items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <path
                                            d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                            fill="#0B1107" />
                                    </svg>
                                    <p class="capitalize">{{ statusModal.dataAutiont.vehicleDetails.tireCondition }}</p>
                                </div>
                                <div class="bg-[#F0F0F0] flex px-5 py-1 gap-3 rounded-lg items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <path
                                            d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                            fill="#0B1107" />
                                    </svg>
                                    <p class="capitalize">Rotors & Pads are Good</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-4 w-full ">
                            <div class=" w-full flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                <p class="text-sm">Auction Status</p>
                                <div class="flex gap-2 items-center ">
                                    <div v-if="statusModal.dataAutiont.status == 'completed'"
                                        class="w-4 h-4 bg-[#05A54B] rounded-full"></div>
                                    <div v-if="statusModal.dataAutiont.status == 'bids completed'"
                                        class="w-4 h-4 bg-[#05A54B] rounded-full"></div>
                                    <div v-if="statusModal.dataAutiont.status == 'live'"
                                        class="w-4 h-4 bg-[#1F94F0] rounded-full"></div>

                                    <p v-if="statusModal.dataAutiont.status == 'bids completed'"
                                        class=" text-lg font-medium capitalize ">Completed</p>
                                    <p v-else class=" text-lg font-medium capitalize ">{{ statusModal.dataAutiont.status }}
                                    </p>
                                </div>
                            </div>
                            <div class=" w-full flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                <p class="text-sm">Total Bid</p>
                                <div class="flex gap-2 items-center ">
                                    <p class=" text-lg font-medium capitalize ">{{ statusModal.dataAutiont.bids.length }}
                                        Bids</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="statusModal.dataAutiont.status === 'completed'"
                        class=" w-full p-4 border-l border-[#F0F0F0]">
                        <div class="flex items-center gap-4">
                            <img class="w-16 h-16 rounded-lg object-cover"
                                src="https://s3-alpha-sig.figma.com/img/f257/e88b/52d32b07e44843bb10d69f7ac7a91630?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KWO2AqkgEIPD1l94dZMLIiAy-RD0AQTbazhj88F2v8KMJeXr9Jbsr6CzPVorz75qLYEQZoH6wzlGxq2XUKda438g9tO5IQJlkCTbHI~WvxkthKJ8z7x7k~us-MgCFu2Griy7a7AxFxHTcrPAHj7hAq6-j64jwvMKfLJAX6R7oeMAez6Rcka5F5zlr8w8g0sLn4~NNNRvjAlTDVr~Y4to-HjK3WQnpm9Rl6e9TqsW8Gzno8gC0xfobrRUNmKgJSiz7IppEfHhX6t9XvsFOad39rUg76l4rTRdrEdokKOIvtjA78hxwHlYVKjefo4085ORwRnPzcsQVTmf-~PGv3Lx-Q__"
                                alt="">
                            <div>
                                <p>Maple Auto Sales</p>
                                <p>Oct 20, 2023 at 2:41 AM</p>
                            </div>
                        </div>
                        <div class="flex pb-4">
                            <div class="flex flex-col gap-3">
                                <p>User Profile</p>
                                <p>This will not be displayed on the seller's page</p>
                            </div>
                            <div class="w-full flex flex-col">
                                <div class="flex py-4 border-b border-[#F0F0F0] justify-between items-center">
                                    <p class=" font-semibold ">Full Name</p>
                                    <p class="text-[#858585]">Alex Tuner</p>
                                </div>
                                <div class="flex py-4 justify-between items-center">
                                    <p class=" font-semibold ">Email Address</p>
                                    <p class="text-[#858585]">alexturner@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex border-t pt-4 border-[#F0F0F0]">
                            <div class="flex flex-col gap-1">
                                <p>Dealer Company</p>
                                <p>This will be displayed on the seller's page</p>
                            </div>
                            <div class="w-full flex flex-col">
                                <div class="flex py-4 border-b border-[#F0F0F0] justify-between items-center">
                                    <p class=" font-semibold ">Dealer Name</p>
                                    <p class="text-[#858585]">Alex Tuner</p>
                                </div>
                                <div class="flex py-4 justify-between items-center">
                                    <p class=" font-semibold ">OMVIC Registration Number</p>
                                    <p class="text-[#858585]">alexturner@gmail.com</p>
                                </div>
                                <div class="flex py-4 justify-between items-center">
                                    <p class=" font-semibold ">Address</p>
                                    <p class="text-[#858585]">alexturner@gmail.com</p>
                                </div>
                                <div class="flex py-4 justify-between items-center">
                                    <p class=" font-semibold ">Phone Number</p>
                                    <p class="text-[#858585]">alexturner@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class=" w-full p-4 border-l border-[#F0F0F0]">
                        <p class="font-semibold text-xl ">Dealer Bids</p>
                        <div class=" h-[50vh] p-4 overflow-x-hidden overflow-y-auto ">
                            <template v-for="(dealerBit, index) in statusModal.dataAutiont.bids" :key="index">
                                <div
                                    :class="index == 0 && statusModal.dataAutiont.status == 'bids completed' ? 'border-[2px] p-2 border-[#05A54B] rounded-lg' : 'border-[#F0F0F0]  border-b'">
                                    <div class="flex pr-4  py-3 pb-0 justify-between ">
                                        <div class="flex ">
                                            <div class="h-[60px] w-[60px]">
                                                <img class="w-full rounded-lg h-full object-cover"
                                                    src="https://s3-alpha-sig.figma.com/img/f3c6/f5f9/bf182aa401606be7faa24c81b42c36a2?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M1J7YjNQ4ocGtev8MPb0ddVDC3d6UXnEiiTRvRX4WgdS6a8w5n1T7SEszk0O7RuaRoUklWYvekOEcVu17e3XiUleYOvrzFS7G2UJQkLAg9OGgWvjadseYiqeNnaF~MYk8lskQ7A8oi5I-Xc~pFm2uwH2B8jLHEjupCYgR9n8UZ3oh3-I7xzkoA9NiBZ1uuG0f-OhBjq4OJHtSo8OHP8~ivbIf97Wc8SkkQwT-y2rDUDnZj4by0iWVpaiTQ1kfJMDXa0TYirJ2Jc3fz~PbZO9GpRtV4NWeIinwBsuXoPYz6PuyB0~3-rvY0z4s6PeKGxmBYU1MUPcvKIM1WCaT67nrQ__"
                                                    alt="">
                                            </div>
                                            <div class="flex gap-1 p-2 flex-col items-start">
                                                <template
                                                    v-if="index == 0 && statusModal.dataAutiont.status == 'bids completed'"
                                                    clas capitalize s="">
                                                    <div class="flex gap-2 items-center">
                                                        <p class="font-semibold capitalize ">{{
                                                            dealerBit.participant.dealer.name }}</p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            viewBox="0 0 16 16" fill="none">
                                                            <path
                                                                d="M8.66699 11.292V12.6667H12.0003V14H4.00033V12.6667H7.33366V11.292C6.04479 11.1295 4.85954 10.5022 4.00033 9.52783C3.14112 8.55349 2.66701 7.29907 2.66699 6V2H13.3337V6C13.3336 7.29907 12.8595 8.55349 12.0003 9.52783C11.1411 10.5022 9.95586 11.1295 8.66699 11.292ZM0.666992 3.33333H2.00033V6H0.666992V3.33333ZM14.0003 3.33333H15.3337V6H14.0003V3.33333Z"
                                                                fill="#05A54B" />
                                                        </svg>
                                                        <p class="px-4 py-1 rounded-full bg-[#05A54B] text-white">Winner</p>
                                                    </div>

                                                    <p>Oct 20, 2023 at 2:41 AM</p>
                                                </template>
                                                <template v-else>
                                                    <p class="font-semibold">{{ dealerBit.participant.dealer.name }}</p>
                                                    <p>
                                                        {{ moment(dealerBit.participant.updatedAt).format('MMMM DD YYYY, h:mm:ss a') }}</p>
                                                </template>

                                            </div>
                                        </div>
                                        <p class="font-semibold text-[1.5rem]">${{ dealerBit.amount }}</p>
                                    </div>
                                    <button v-if="index == 0 && statusModal.dataAutiont.status == 'bids completed'"
                                        class="w-full border hover:bg-primary transition-all ease-in duration-300  hover:text-white py-2 rounded-lg mt-4 border-[#F0F0F0] ">Contact
                                        Buyer</button>
                                </div>

                            </template>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { ModalBids } from '@/stores/modalBids';
import { toast } from "vue3-toastify";
import { ModalViewDetails } from '@/stores/modalViewDetails';
import moment from "moment";
export default {
    setup(props) {
        const statusModal = ModalViewDetails()
        onMounted(() => {
            if (statusModal.dataAutiont) {
                statusModal.dataAutiont.dropOffDate = moment(statusModal.dataAutiont.dropOffDate).format("DD MMMM YYYY");


            }
            console.log('statusModal.data', statusModal.dataAutiont)
        })
        return {
            statusModal,
            moment
        };
    },
};
</script>