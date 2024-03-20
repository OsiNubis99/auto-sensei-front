<template>
    <div v-show="statusModal.isActive"
        class="fixed inset-0 overflow-auto flex items-center z-50 justify-center bg-base-black  bg-opacity-50">
        <div class=" w-full md:w-fit h-full md:h-fit bg-white rounded-lg shadow-xl animation-fade-modal">
            <div class=" p-2 md:p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p class="md:text-xl text-xs text-white">View Details</p>
                <svg @click="statusModal.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                    class=" w-6 h-6 md:w-8 md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="md:p-5 h-modal-review  ">
                <div class="md:border-b pb-2 flex justify-between items-center border-b-[#F0F0F0]">
                    <div class="hidden md:block">
                        <p class="text-2xl font-semibold capitalize">{{ statusModal.dataAutiont?.vehicleDetails?.year }}
                            {{
        statusModal.dataAutiont?.vehicleDetails?.make }} {{
        statusModal.dataAutiont?.vehicleDetails?.model }}</p>
                        <div class="flex gap-1 items-center">
                            <p>{{ statusModal.dataAutiont?.city }}, {{ statusModal.dataAutiont?.province }}</p>
                            <p>|</p>
                            <p>Drop off aggrement: <strong> {{ statusModal.dataAutiont?.dropOffDate }}</strong> </p>
                        </div>
                    </div>
                    <div v-if="statusModal.dataAutiont?.status == 'bids completed'"
                        class="hidden md:flex gap-2 items-center">
                        <button @click="modal = true" class="btn w-full bg-primary rounded-lg">Accept</button>
                        <button class="btn w-full bg-white border border-error text-error rounded-lg">Decline</button>
                    </div>
                    <div v-if="statusModal.dataAutiont?.status == 'bids completed'"
                        class=" md:hidden p-2 fixed bottom-0 w-full flex bg-white gap-2 items-center">
                        <button @click="modal = true" class="btn w-full bg-primary rounded-lg">Accept</button>
                        <button class="btn w-full bg-white border border-error text-error rounded-lg">Decline</button>
                    </div>
                </div>
                <div class="border-r flex-col md:flex-row flex pt-0 border-r-[#F0F0F0]">
                    <div class=" w-full md:w-[70%] border border-[#E0E0E0] md:border-none p-2 md:p-4">
                        <div>
                            <div class="flex justify-between gap-2 md:hidden">
                                <div class="w-[60%]">
                                    <img v-if="statusModal.dataAutiont?.photos"
                                        class="md:h-[400px] w-full  h-[80px] shadow-xl md:w-full rounded-lg object-cover  "
                                        :src="bucket + statusModal.dataAutiont?.photos[0]?.url" alt="">
                                    <img v-else
                                        class="md:h-[400px] w-full  h-[80px] shadow-xl md:w-full rounded-lg object-cover "
                                        src="@/assets/img/jpg/image.jpg" alt="">
                                </div>
                                <div class="w-full flex flex-col gap-2">
                                    <p class="text-xs font-medium">2016 Chevrolet Traverse L</p>
                                    <p class="text-xs">Ottawa, Ontario</p>
                                    <p class="text-xs">Approval ends in <span class="text-[#FF9A02]"> 48 Hours </span>
                                    </p>
                                </div>
                            </div>
                            <img v-if="statusModal.dataAutiont?.photos"
                                class="md:h-[400px] w-[30%] h-[80px] shadow-xl hidden md:block md:w-full rounded-lg object-cover  "
                                :src="bucket + statusModal.dataAutiont?.photos[0]?.url" alt="">
                            <img v-else
                                class="md:h-[400px] w-[30%] h-[80px] shadow-xl hidden md:block md:w-full rounded-lg object-cover "
                                src="@/assets/img/jpg/image.jpg" alt="">
                            <div class="flex flex-col gap-1">
                                <div class="grid grid-cols-2 gap-2 pt-4">
                                    <div v-if="statusModal.dataAutiont?.vin" class="flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12"
                                            viewBox="0 0 14 12" fill="none">
                                            <path
                                                d="M0.332031 0.662267C0.332031 0.296507 0.635571 0 0.993231 0H13.0042C13.3694 0 13.6654 0.296633 13.6654 0.662267V11.3377C13.6654 11.7035 13.3618 12 13.0042 12H0.993231C0.628065 12 0.332031 11.7034 0.332031 11.3377V0.662267ZM2.9987 8V9.33333H10.9987V8H2.9987ZM2.9987 2.66667V6.66667H6.9987V2.66667H2.9987ZM8.33203 2.66667V4H10.9987V2.66667H8.33203ZM8.33203 5.33333V6.66667H10.9987V5.33333H8.33203ZM4.33203 4H5.66536V5.33333H4.33203V4Z"
                                                fill="#858585" />
                                        </svg>
                                        <p class="text-[10px] md:text-base  uppercase ">{{ statusModal.dataAutiont?.vin
                                            }}</p>
                                    </div>
                                    <div class="flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M13.332 8.66667C13.332 10.1394 12.7351 11.4727 11.77 12.4379L12.7128 13.3807C13.9192 12.1743 14.6654 10.5076 14.6654 8.66667C14.6654 4.98477 11.6806 2 7.9987 2C4.3168 2 1.33203 4.98477 1.33203 8.66667C1.33203 10.5076 2.07822 12.1743 3.28465 13.3807L4.22746 12.4379C3.26232 11.4727 2.66536 10.1394 2.66536 8.66667C2.66536 5.72115 5.05318 3.33333 7.9987 3.33333C10.9442 3.33333 13.332 5.72115 13.332 8.66667ZM10.194 5.52865L6.9987 8.33333L8.33203 9.66667L11.1368 6.47145L10.194 5.52865Z"
                                                fill="#858585" />
                                        </svg>
                                        <p class="text-[10px] md:text-base  capitalize ">{{
        statusModal.dataAutiont?.vehicleDetails.odometer }}
                                            Kilometers</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-2 pb-4">
                                    <div class="flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M12.8204 12.4871L13.999 11.3086L15.1774 12.4871C15.8283 13.138 15.8283 14.1933 15.1774 14.8442C14.5266 15.495 13.4713 15.495 12.8204 14.8442C12.1696 14.1933 12.1696 13.138 12.8204 12.4871ZM5.92103 0.71875L13.4635 8.26122C13.7238 8.52156 13.7238 8.94369 13.4635 9.20402L7.80662 14.8609C7.54629 15.1212 7.12415 15.1212 6.86382 14.8609L1.20698 9.20402C0.946632 8.94369 0.946632 8.52156 1.20698 8.26122L6.39243 3.07577L4.97822 1.66156L5.92103 0.71875ZM7.33522 4.01858L2.62119 8.73262H12.0493L7.33522 4.01858Z"
                                                fill="#858585" />
                                        </svg>
                                        <p class="text-[10px] md:text-base capitalize">{{
        statusModal.dataAutiont?.vehicleDetails.color }}</p>
                                    </div>
                                    <div class="flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M12.6654 13.3327H3.33203V13.9993C3.33203 14.3675 3.03355 14.666 2.66536 14.666H1.9987C1.63051 14.666 1.33203 14.3675 1.33203 13.9993V7.99935L3.00759 3.53118C3.20274 3.01078 3.70024 2.66602 4.25603 2.66602H11.7414C12.2972 2.66602 12.7946 3.01078 12.9898 3.53118L14.6654 7.99935V13.9993C14.6654 14.3675 14.3669 14.666 13.9987 14.666H13.332C12.9638 14.666 12.6654 14.3675 12.6654 13.9993V13.3327ZM2.75603 7.99935H13.2414L11.7414 3.99935H4.25603L2.75603 7.99935ZM4.33203 11.3327C4.88432 11.3327 5.33203 10.8849 5.33203 10.3327C5.33203 9.78042 4.88432 9.33268 4.33203 9.33268C3.77974 9.33268 3.33203 9.78042 3.33203 10.3327C3.33203 10.8849 3.77974 11.3327 4.33203 11.3327ZM11.6654 11.3327C12.2176 11.3327 12.6654 10.8849 12.6654 10.3327C12.6654 9.78042 12.2176 9.33268 11.6654 9.33268C11.1131 9.33268 10.6654 9.78042 10.6654 10.3327C10.6654 10.8849 11.1131 11.3327 11.6654 11.3327Z"
                                                fill="#858585" />
                                        </svg>
                                        <p class="text-[10px] md:text-base capitalize">{{
        statusModal.dataAutiont?.vehicleDetails.driveTrain }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-2 items-center mb-4">
                                <div class="bg-[#F0F0F0] flex px-2 md:px-5 py-1 gap-1 md:gap-3 rounded-lg items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <path
                                            d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                            fill="#0B1107" />
                                    </svg>
                                    <p class=" text-[10px] md:text-base capitalize">{{
        statusModal.dataAutiont?.vehicleDetails.tireCondition }}</p>
                                </div>
                                <div class="bg-[#F0F0F0] flex px-2 md:px-5 py-1 gap-1 md:gap-3 rounded-lg items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                        fill="none">
                                        <path
                                            d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                            fill="#0B1107" />
                                    </svg>
                                    <p class=" text-[10px] md:text-base capitalize">{{
        statusModal.dataAutiont?.vehicleDetails.brakeCondition }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-4 w-full ">
                            <div class=" w-full flex flex-col md:gap-2 bg-[#F7F7F7] h-max p-2 md:p-4 rounded-lg ">
                                <p class=" text-xs md:text-sm">Auction Status</p>
                                <div class="flex gap-2 items-center ">
                                    <div v-if="statusModal.dataAutiont?.status == 'completed'"
                                        class=" w-3 h-3 md:w-4 md:h-4 bg-[#05A54B] rounded-full"></div>
                                    <div v-if="statusModal.dataAutiont?.status == 'bids completed'"
                                        class=" w-3 h-3 md:w-4 md:h-4 bg-[#05A54B] rounded-full"></div>
                                    <div v-if="statusModal.dataAutiont?.status == 'live'"
                                        class=" w-3 h-3 md:w-4 md:h-4 bg-[#1F94F0] rounded-full"></div>

                                    <p v-if="statusModal.dataAutiont?.status == 'bids completed'"
                                        class="text-sm md:text-lg font-medium capitalize ">Completed</p>
                                    <p v-else class="text-sm md:text-lg font-medium capitalize ">{{
        statusModal.dataAutiont?.status }}
                                    </p>
                                </div>
                            </div>
                            <div v-if="statusModal.dataAutiont?.status == 'bids completed'"
                                class=" w-full flex flex-col md:gap-2 bg-[#F7F7F7]  h-max p-2 md:p-4 rounded-lg ">
                                <p class=" text-xs md:text-sm">Total Bid</p>
                                <div class="flex gap-2 items-center ">
                                    <p class=" text-sm md:text-lg font-medium capitalize ">{{
        statusModal.dataAutiont?.bids.length }}
                                        Bids</p>
                                </div>
                            </div>
                            <div v-if="statusModal.dataAutiont?.status == 'completed'"
                                class=" w-full flex flex-col md:gap-2 bg-[#F7F7F7] p-2 md:p-4 rounded-lg ">
                                <p class=" text-xs md:text-sm">Final Bids</p>
                                <div class="flex gap-2 items-center ">
                                    <p class="  text-sm md:text-lg font-medium capitalize ">${{
        statusModal.dataAutiont?.bids[0]?.amount }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="statusModal.dataAutiont?.status === 'completed'"
                        class=" w-full md:p-4 border-l  border-[#F0F0F0] custom-seccion-scrren">
                        <div class="flex p-2 items-center gap-4">
                            <img class="w-10 h-10 md:w-16 md:h-16 shadow-lg rounded-lg  object-cover"
                                :src="bucket + statusModal.dataAutiont?.bids[0]?.participant?.dealer?.picture" alt="">
                            <div>
                                <p class="text-sm font-semibold md:text-base">{{
        statusModal.dataAutiont?.bids[0]?.participant?.dealer?.name }}</p>
                                <p class="text-[10px]  text-[#858585]  md:text-base">Oct 20, 2023 at 2:41 AM</p>
                            </div>
                        </div>
                        <div class="flex p-2 md:pb-4 ">
                            <div class="flex w-[60%] md:w-full flex-col md:gap-3">
                                <p class="text-xs font-medium md:font-semibold  md:text-base">User Profile</p>
                                <p class="text-[10px] w-4/5 md:w-full md:text-base">This will not be displayed on the
                                    seller's page</p>
                            </div>
                            <div class="md:w-full flex flex-col">
                                <div
                                    class="flex flex-col md:flex-row md:py-4 border-b border-[#F0F0F0] justify-between items-start md:items-center">
                                    <p class=" md:font-semibold text-xs md:text-base ">Full Name</p>
                                    <p class="text-[#858585] md:font-semibold text-xs md:text-base">{{
        statusModal.dataAutiont?.bids[0]?.participant?.dealer?.name }}</p>
                                </div>
                                <div class="flex flex-col md:flex-row py-4 justify-between items-start md:items-center">
                                    <p class=" md:font-semibold text-xs md:text-base ">Email Address</p>
                                    <p class="text-[#858585] md:font-semibold text-xs md:text-base ">{{
        statusModal.dataAutiont?.bids[0]?.participant?.email }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex p-2 border-t  border-[#F0F0F0]">
                            <div class="flex w-[60%] flex-col gap-1">
                                <p class="text-xs font-medium md:font-semibold  md:text-base">Dealer Company</p>
                                <p class="text-[10px] w-4/5 md:w-full md:text-base">This will be displayed on the
                                    seller's page</p>
                            </div>
                            <div class="md:w-full flex flex-col">
                                <div
                                    class="flex flex-col md:flex-row py-2 md:py-4 border-b border-[#F0F0F0] justify-between items-start md:items-center">
                                    <p class=" md:font-semibold text-xs md:text-base  ">Dealer Name</p>
                                    <p class="text-[#858585] md:font-semibold text-xs md:text-base">Alex Tuner</p>
                                </div>
                                <div class="flex flex-col md:flex-row py-4 justify-between items-start md:items-center">
                                    <p class=" md:font-semibold text-xs md:text-base  ">OMVIC Registration Number</p>
                                    <p class="text-[#858585] md:font-semibold text-xs md:text-base">{{
        statusModal.dataAutiont?.bids[0]?.participant?.dealer?.omvic }}</p>
                                </div>
                                <div class="flex flex-col md:flex-row py-4 justify-between items-start md:items-center">
                                    <p class=" md:font-semibold text-xs md:text-base  ">Address</p>
                                    <p class="text-[#858585] md:font-semibold text-xs md:text-base">{{
        statusModal.dataAutiont?.bids[0]?.participant?.dealer?.address }}</p>
                                </div>
                                <div class="flex flex-col md:flex-row py-4 justify-between items-start md:items-center">
                                    <p class=" md:font-semibold text-xs md:text-base  ">Phone Number</p>
                                    <p class="text-[#858585] md:font-semibold text-xs md:text-base">{{
        statusModal.dataAutiont?.bids[0]?.participant?.dealer?.phone }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-if="statusModal.dataAutiont?.status == 'completed'"
                            class=" block md:hidden fixed bottom-2 p-2  w-full">
                            <RouterLink
                                :to="{ name: 'inbox-seller', query: { id: statusModal.dataAutiont?._id + '-' + statusModal.dataAutiont?.bids[0].participant._id } }"
                                class="btn w-full bg-primary text-base-black">Contact Buyer</RouterLink>
                        </div>
                    </div>
                    <div v-else class=" w-full p-2 md:p-4 border-l border-[#F0F0F0]">
                        <p class=" text-md md:font-semibold md:text-xl ">Dealer Bids</p>
                        <div class=" h-[50vh] md:p-4 overflow-x-hidden overflow-y-auto ">
                            <template v-if="statusModal.dataAutiont?.bids.length > 0"
                                v-for="(dealerBit, index) in statusModal.dataAutiont?.bids" :key="index">
                                <div
                                    :class="index == 0 && statusModal.dataAutiont?.status == 'bids completed' ? 'border-[2px] p-2 border-[#05A54B] rounded-lg' : 'border-[#F0F0F0]  border-b'">
                                    <div class="flex md:pr-4  md:py-3 pb-0 justify-between ">
                                        <div class="flex ">
                                            <div class=" w-12  h-12 md:h-[60px] md:w-[60px]">
                                                <img v-if="dealerBit.participant.dealer.picture"
                                                    class="w-full shadow-lg rounded-lg h-full object-cover"
                                                    :src="bucket + dealerBit.participant.dealer.picture" alt="">
                                                <img class=" shadow-xl w-full rounded-lg object-cover " v-else
                                                    src="@/assets/img/jpg/image.jpg" alt="">
                                            </div>
                                            <div class="flex gap-1 p-2 flex-col items-start">
                                                <template
                                                    v-if="index == 0 && statusModal.dataAutiont?.status == 'bids completed'"
                                                    clas capitalize s="">
                                                    <div class="flex gap-2 items-center">
                                                        <p
                                                            class=" text-xs md:text-base md:font-semibold capitalize w-[70px] md:w-auto truncate ">
                                                            {{
        dealerBit.participant.dealer.name }}</p>
                                                        <svg class=" w-4 h-4 md:w-6 md:h-6"
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                            fill="none">
                                                            <path
                                                                d="M8.66699 11.292V12.6667H12.0003V14H4.00033V12.6667H7.33366V11.292C6.04479 11.1295 4.85954 10.5022 4.00033 9.52783C3.14112 8.55349 2.66701 7.29907 2.66699 6V2H13.3337V6C13.3336 7.29907 12.8595 8.55349 12.0003 9.52783C11.1411 10.5022 9.95586 11.1295 8.66699 11.292ZM0.666992 3.33333H2.00033V6H0.666992V3.33333ZM14.0003 3.33333H15.3337V6H14.0003V3.33333Z"
                                                                fill="#05A54B" />
                                                        </svg>
                                                        <p
                                                            class="md:px-4 md:py-1 py-1 px-2 rounded-full text-[10px] md:text-base  bg-[#05A54B] text-white">
                                                            Winner</p>
                                                    </div>

                                                    <p class="text-[10px] md:text-lg whitespace-pre">Oct 20, 2023 at
                                                        2:41 AM</p>
                                                </template>
                                                <template v-else>
                                                    <p class=" truncate w-[150px] md:w-fit font-semibold">{{
        dealerBit.participant.dealer.name }}</p>
                                                    <!--  <p class="text-[10px] md:text-lg whitespace-pre">
                                                        {{ moment(dealerBit?.participant?.updatedAt).format('MMMM DD YYYY, h: mm: ss a') }}</p> -->
                                                </template>

                                            </div>
                                        </div>
                                        <p class="font-semibold text-sm mt-7 md:mt-0 md:text-[1.5rem]">${{
        dealerBit.amount }}</p>
                                    </div>
                                    <RouterLink v-if="index == 0 && statusModal.dataAutiont?.status == 'bids completed'"
                                        :to="{ name: 'inbox-seller', query: { id: statusModal.dataAutiont?._id + '-' + statusModal.dataAutiont?.bids[0].participant._id } }"
                                        class="w-full btn border hover:bg-primary transition-all ease-in duration-300  hover:text-white py-2 rounded-lg md:mt-4 border-[#F0F0F0] ">
                                        Contact
                                        Buyer</RouterLink>
                                </div>

                            </template>
                            <template v-else>
                                <div class="flex w-full h-full justify-center items-center">
                                    <p>There are no bids in this auction</p>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>

            </div>
            <div v-show="modal"
                class="fixed inset-0 flex items-end md:items-center z-50 md:justify-center bg-base-black  bg-opacity-50">

                <div class="max-w-md overflow-auto relative bg-white rounded-lg shadow-xl animation-fade-modal">

                    <div class=" p-2 md:p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                        <p v-if="steps.step1" class=" text-sm md:text-xl text-white">Accept Auction</p>
                        <p v-if="steps.step2" class=" text-sm md:text-xl text-white">Acceptance</p>
                        <svg @click="modal = false" xmlns="http://www.w3.org/2000/svg"
                            class=" w-6 h-8 md:w-8   md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24"
                            stroke="#fff">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div v-if="loading" class=" w-[400px] h-[400px]">
                        <Basic />
                    </div>
                    <template v-else>
                        <div v-if="steps.step1" class=" p-2 md:p-4 flex md:gap-3 flex-col  ">
                            <div class="flex justify-start items-center gap-2">
                                <div class="flex gap-3 items-start ">
                                    <div class=" w-[80px] md:w-[120px]   md:h-[90px]">
                                        <img v-if="statusModal.dataAutiont?.photos"
                                            class="w-full h-full shadow-xl rounded-lg object-cover"
                                            :src="bucket + statusModal.dataAutiont?.photos[0].url" alt="">
                                        <img class=" shadow-xl w-full rounded-lg object-cover " v-else
                                            src="@/assets/img/jpg/image.jpg" alt="">
                                    </div>
                                    <div class="flex justify-between flex-col h-full">
                                        <p class=" font-semibold capitalize md:text-base text-sm  ">{{
                                            statusModal.dataAutiont?.vehicleDetails?.year }} {{
                                            statusModal.dataAutiont?.vehicleDetails?.make }} {{
                                            statusModal.dataAutiont?.vehicleDetails?.model }}</p>
                                        <p class="capitalize text-sm md:text-base ">Final Bid</p>
                                        <p class="font-medium text-sm text-base-black md:text-2xl">${{
                                            statusModal.dataAutiont?.bids[0]?.amount }}/<span
                                                class="text-[#666666] mt-1 text-xs md:text-base ">{{
                                                statusModal.dataAutiont?.bids?.length }} Bids</span> </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 border-[#E0E0E0] border-t-[1px]">
                                <div class="pt-4 ">
                                    <p class="text-xs md:text-base">Are you sure you want to accept the final bid for
                                        the
                                        <strong>
                                            {{ statusModal.dataAutiont?.vehicleDetails?.model }} </strong>?
                                    </p>
                                    <div class="flex pt-4 gap-2 items-center justify-between">
                                        <button @click="close" class="btn w-full border border-[#E0E0E0] ">No</button>
                                        <button @click="acceptAution"
                                            class="btn w-full bg-primary rounded-md ">Yes</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="p-4 flex justify-center items-center flex-col gap-3" v-if="steps.step2">
                            <p class=" font-semibold capitalize md:text-xl">Final Bid Approved!</p>
                            <p class="capitalize text-xs md:text-base ">Download the Actual Sheet Below and Hand It to
                                the
                                Buyer During
                                the Vehicle
                                Drop-Off
                                Process.</p>
                            <div class="w-full">
                                <iframe src="https://www.africau.edu/images/default/sample.pdf" class="w-full h-[40vh]"
                                    frameborder="0"></iframe>
                            </div>

                            <button class="btn w-full bg-primary rounded-md">
                                Download PDF
                            </button>

                        </div>
                    </template>


                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { ModalBids } from '@/stores/modalBids';
import { toast } from "vue3-toastify";
import { ModalViewDetails } from '@/stores/modalViewDetails';
import moment from "moment";
import { useAuctionStore } from "@/stores/auctions";
import Basic from '@/components/Loading/Basic.vue'
export default {
    components: {
        Basic
    },
    setup(props) {
        const statusModal = ModalViewDetails()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const modal = ref(false)
        const loading = ref(false)
        const storeAutions = useAuctionStore()
        const steps = ref({
            step1: true,
            step2: false
        })
        const acceptAution = () => {
            loading.value = true
            try {
                let res = storeAutions.acceptAutions(statusModal.dataAutiont._id)
                if (res) {
                    steps.value.step1 = false
                    steps.value.step2 = true
                }
            } catch (error) {
                loading.value = true

            } finally {
                loading.value = false
            }

        }
        const cancelAution = async () => {
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
        }
        const close = () => {
            modal.value = false
            if (steps.value.step2) {
            }

        }
        onMounted(() => {
            if (statusModal.dataAutiont) {
                console.log('statusModal.dataAutiont', statusModal.dataAutiont)
                statusModal.dataAutiont.dropOffDate = moment(statusModal.dataAutiont.dropOffDate).format("DD MMMM YYYY");
            }
        })
        return {
            steps,
            statusModal,
            acceptAution,
            cancelAution,
            moment,
            bucket,
            close,
            modal,
            loading
        };
    },
};
</script>