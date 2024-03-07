<template>
    <div>
        <HeaderOptionsDealer :storeAutions="storeAutions" :data="data" />
        <template v-if="loading">
            <Basic />
        </template>
        <div v-else class="relative max-w-[100rem] mx-auto z-50 md:top-[60px] ">

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
                            Vehicles
                        </p>
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
                                    <div @click="setSorBy('Current Bid')"
                                        class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                        Current Bid
                                    </div>
                                    <div @click="setSorBy('Odometer')"
                                        class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                        Odometer
                                    </div>
                                    <div @click="setSorBy('Year')"
                                        class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                        Year</div>

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
                        <!--  <SorBy :key="counter" :changeLayouts="changeLayouts" :changeGridTemplate="changeGridTemplate" /> -->
                    </div>
                    <div class="p-2"
                        :class="changeLayouts ? 'grid grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up  animate-ease-in-out animate-delay-200'">

                        <div v-for="(aution, index) in sortedData" :key="index"
                            class="bg-white flex  md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full  "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <CardsCurrentBits :key="counter" :aution="aution" :changeLayouts="changeLayouts"
                                :auth="authStore" />
                            <!--  <div class="w-full flex   p-5 sm:p-0 relative" :class="changeLayouts ? 'flex-col' : ''">
                                <swiper pagination :modules="modules" :slides-per-view="1" class="swiper-autions"
                                    :class="changeLayouts ? 'w-full' : 'w-[40%]'">
                                    <swiper-slide v-for="(img, indexPhoto) in aution.photos" :key="indexPhoto">
                                        <img class="w-full rounded-s-lg h-full object-cover" :src="bucket + img.url" alt="">
                                    </swiper-slide>
                                    <div v-if="!aution.photos" class=" absolute w-full h-full top-0 ">
                                        <img class="w-full rounded-s-lg h-full object-cover"
                                            src="../../../assets/img/jpg/image.jpg" alt="">
                                    </div>
                                </swiper>
                                <div class="w-full flex justify-between gap-3 " :class="changeLayouts ? 'flex-col' : ''">
                                    <RouterLink :to="{ name: 'action-details-dealer', params: { id: aution?._id } }"
                                        class="flex p-5  flex-col gap-3">
                                        <div class="">
                                            <div class="font-bold text-xl">{{ aution?.vehicleDetails?.year }} {{
                                                aution?.vehicleDetails?.make }} {{ aution?.vehicleDetails?.model }}</div>
                                            <p class=" text-base">
                                                {{ aution.city }}, {{ aution.province }}
                                            </p>
                                        </div>
                                        <div class="grid grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                                            <div class="flex gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ aution.vin }}</p>
                                            </div>
                                            <div class="flex gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ aution.vehicleDetails.odometer }} Kilometers</p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                                            <div class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ aution.vehicleDetails.color }}</p>
                                            </div>
                                            <div class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.6673 13.3327H3.33398V13.9993C3.33398 14.3675 3.0355 14.666 2.66732 14.666H2.00065C1.63246 14.666 1.33398 14.3675 1.33398 13.9993V7.99935L3.00954 3.53118C3.2047 3.01078 3.70219 2.66602 4.25798 2.66602H11.7433C12.2991 2.66602 12.7966 3.01078 12.9918 3.53118L14.6673 7.99935V13.9993C14.6673 14.3675 14.3689 14.666 14.0007 14.666H13.334C12.9658 14.666 12.6673 14.3675 12.6673 13.9993V13.3327ZM2.75798 7.99935H13.2433L11.7433 3.99935H4.25798L2.75798 7.99935ZM4.33398 11.3327C4.88627 11.3327 5.33398 10.8849 5.33398 10.3327C5.33398 9.78042 4.88627 9.33268 4.33398 9.33268C3.7817 9.33268 3.33398 9.78042 3.33398 10.3327C3.33398 10.8849 3.7817 11.3327 4.33398 11.3327ZM11.6673 11.3327C12.2196 11.3327 12.6673 10.8849 12.6673 10.3327C12.6673 9.78042 12.2196 9.33268 11.6673 9.33268C11.1151 9.33268 10.6673 9.78042 10.6673 10.3327C10.6673 10.8849 11.1151 11.3327 11.6673 11.3327Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ aution.vehicleDetails.driveTrain }}</p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-1 "
                                            :class="changeLayouts ? ' p-5 whitespace-nowrap  gap-5 overflow-x-auto overflow-y-hidden ' : ''">
                                            <div v-if="aution?.vehicleDetails?.tireCondition"
                                                class="bg-[#F0F0F0] flex px-5 py-1 gap-3 rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p class=" capitalize ">{{ aution?.vehicleDetails?.tireCondition }}</p>
                                            </div>
                                            <div v-if="aution?.vehicleDetails?.rotorCondition"
                                                class="bg-[#F0F0F0] flex  px-5 py-1  gap-3 rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p class=" capitalize ">{{ aution?.vehicleDetails?.rotorCondition }}</p>
                                            </div>
                                        </div>
                                        <div v-if="aution.status === 'live'" class="flex gap-4 "
                                            :class="changeLayouts ? 'flex-col' : ''">
                                            <RouterLink
                                                :to="{ name: 'inbox-dealer', query: { id: aution._id + '-' + authStore.userData._id } }"
                                                class=" w-fit flex gap-3 cursor-pointer rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z"
                                                        fill="#0A0A0A" />
                                                </svg>
                                                <p>Contact Seller</p>
                                            </RouterLink>
                                        </div>
                                    </RouterLink>
                                    <div :class="changeLayouts ? 'w-full' : 'w-[40%] flex flex-col'"
                                        class="border-l-2  border-[#E0E0E0]">
                                        <div class="flex  p-4 pt-1  justify-between "
                                            :class="changeLayouts ? 'flex-row' : 'flex-col h-full '">
                                            <div class=" flex w-full  justify-between items-center">

                                                <div class="flex gap-3 items-start justify-center flex-col">
                                                    <p v-if="aution.status === 'live'">Current bid</p>
                                                    <p v-else>Final Bid</p>
                                                    <p v-if="aution?.bids[0]"
                                                        class=" font-medium text-2xl text-base-black  ">
                                                        ${{ aution?.bids[0]?.amount }}</p>
                                                    <p v-else class=" font-medium text-2xl text-base-black  ">
                                                        ${{ aution?.amountBid }}</p>
                                                </div>
                                                <div class="flex gap-3 items-start justify-center flex-col">
                                                    <p>Status</p>
                                                    <p v-if="(aution?.bids[0].participant._id == authStore.userData._id) && aution.status === 'live'"
                                                        class="py-2 px-4 border rounded-full text-[#05A54B] border-[#05A54B] flex justify-center items-center text-left">
                                                        Leading
                                                    </p>
                                                    <p v-else-if="(aution?.bids[0].participant._id !== authStore.userData._id)"
                                                        class="py-2 px-4 border rounded-full text-[#FF333E] border-[#FF333E] flex justify-center items-center text-left">
                                                        Outbid
                                                    </p>

                                                    <p v-if="aution?.bids[0].participant._id == authStore.userData._id && aution.status == 'bids completed'"
                                                        class="py-2 px-4  rounded-full text-white bg-[#05A54B] flex justify-center items-center text-left">
                                                        Won
                                                    </p>
                                                </div>
                                            </div>

                                            <div v-if="aution.status === 'live'" class="flex gap-2">
                                                <p>Auction ends in </p>
                                                <p class="text-[#FF9A02] font-medium !m-0">
                                                    <vue-countdown :time="timeToEnd(aution?.startDate, aution?.duration)"
                                                        v-slot="{ days, hours, minutes, seconds }">
                                                        <div class="flex items-center gap-1">
                                                            <p v-if="hours > 0" class="flex gap-1 items-center">{{ hours
                                                            }}
                                                                Hours</p>
                                                            <p v-if="minutes > 0"
                                                                :class="hours == 0 && minutes > 0 ? '!text-error' : ''"
                                                                class="flex gap-1 items-center">{{ minutes }}m</p>
                                                            <p v-if="seconds > 0"
                                                                :class="hours == 0 && minutes > 0 ? '!text-error' : ''"
                                                                class="flex gap-1 items-center">{{ seconds }}s</p>
                                                        </div>
                                                    </vue-countdown>
                                                </p>
                                            </div>
                                        </div>
                                        <template v-if="aution.status === 'live'">
                                            <div v-if="aution?.bids[0].participant._id == authStore.userData._id && aution?.bids[0].biddingLimit"
                                                class="flex gap-4 px-2 justify-between w-full">
                                                <button @click="statusModalAuto.openModal({ active: true, data: aution })"
                                                    class="btn w-full flex gap-2 items-center  border border-[#E0E0E0]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17"
                                                        viewBox="0 0 16 17" fill="none">
                                                        <path
                                                            d="M2.522 2.38402L8 1.16669L13.478 2.38402C13.626 2.41693 13.7584 2.49933 13.8533 2.61762C13.9482 2.73592 14 2.88303 14 3.03469V9.69269C14 10.3512 13.8373 10.9995 13.5266 11.58C13.2158 12.1606 12.7666 12.6554 12.2187 13.0207L8 15.8334L3.78133 13.0207C3.23352 12.6555 2.78431 12.1608 2.47357 11.5803C2.16282 10.9999 2.00016 10.3517 2 9.69335V3.03469C2.00003 2.88303 2.05176 2.73592 2.14666 2.61762C2.24156 2.49933 2.37396 2.41693 2.522 2.38402ZM8.66667 7.16669V3.83335L5.33333 8.50002H7.33333V11.8334L10.6667 7.16669H8.66667Z"
                                                            fill="#0B1107" />
                                                    </svg>
                                                    Auto Bid Active
                                                </button>
                                            </div>
                                            <div v-else
                                                @click="statusModal.openModal({ active: true, data: aution, from: 'autoBid' })"
                                                class="flex gap-4 px-2 justify-between w-full">
                                                <button
                                                    class="btn w-full bg-base-black flex gap-2 items-center text-primary ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                                        viewBox="0 0 17 17" fill="none">
                                                        <path
                                                            d="M9.16699 7.16666H13.8337L7.83366 15.8333V9.83332H3.16699L9.16699 1.16666V7.16666Z"
                                                            fill="#C1F861" />
                                                    </svg>
                                                    Auto Bid
                                                </button>
                                            </div>
                                            <div @click="statusModal.openModal({ active: true, data: aution, from: 'bidNow' })"
                                                class="flex gap-4 p-2 justify-between w-full">
                                                <button
                                                    class="btn w-full bg-primary flex gap-2 items-center text-base-black">
                                                    Bid Again
                                                </button>
                                            </div>
                                        </template>
                                        <div v-if="aution.status === 'bids completed' && aution?.bids[0].participant._id == authStore.userData._id"
                                            class="p-4">
                                            <p class="text-[#858585] text-left mb-2">Waiting for Seller's Approval. <br>
                                                Contact if needed</p>
                                            <RouterLink
                                                :to="{ name: 'inbox-dealer', query: { id: aution._id + '-' + authStore.userData._id } }"
                                                class="btn w-full bg-primary flex gap-2 items-center text-base-black">
                                                Contact Seller
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
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
        <ModalAutoBidVue v-if="statusModalAuto.isActive" :form="formData" :index="index" />
    </div>
</template>

<script>
import { ref, onMounted, computed, watch, watchEffect } from "vue";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useAuctionStore } from "@/stores/auctions";
import { ModalBids } from '@/stores/modalBids';
import { ModalAutoBid } from '@/stores/modalAutoBid';
import { useAuthStore } from "@/stores/auth";
import { useRoute, useRouter } from 'vue-router'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ModalBidNow from "../../../components/Modals/ModalBidNow/ModalBidNow.vue";
import ModalAutoBidVue from "../../../components/Modals/ModalAutoBid/ModalAutoBid.vue";
import HeaderOptionsDealer from '../../../components/Header/HeaderOptionsDealer.vue'
import ScreenNoDataDealer from '../../../components/Screen/ScreenNoDataDealer.vue'
import CardsCurrentBits from '../../../components/Cards/CardsCurrentBits.vue'
import Basic from '../../../components/Loading/Basic.vue'
import FilterBig from "../../../components/Filters/FilterBig.vue";
import SorBy from '../../../components/Filters/SorBy.vue'
export default {

    components: {
        Swiper,
        SwiperSlide,
        ModalBidNow,
        ModalAutoBidVue,
        HeaderOptionsDealer,
        ScreenNoDataDealer,
        CardsCurrentBits,
        Basic,
        FilterBig,
        SorBy
    },
    setup() {
        const isOpen = ref(false)
        const loading = ref(false)
        const changeLayouts = ref(false)
        const counter = ref(0)
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
        const statusModal = ModalBids()
        const statusModalAuto = ModalAutoBid()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const data = ref([])
        const storeAutions = useAuctionStore()
        const path = ref(computed(() => route.name))
        const route = useRoute();
        const sortBy = ref('Current Bid')
        const autionUpdate = ref(computed(() => authStore.aution))
        const index = async () => {
            loading.value = true
            try {
                await storeAutions.index()
                let res = await storeAutions.indexCurrentBids()
                data.value = storeAutions?.currentBids
                console.log('data.value', data.value)
                data.value.map((autions, index) => {
                    /*  const formatter = new Intl.NumberFormat();
                     autions.vehicleDetails.odometer = formatter.format(autions.vehicleDetails.odometer) */
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
                /*  authStore.socketNotification.on("connect", () => {
                     authStore.bindEvents()
                 }); */
                loading.value = false
            }
        }
        watch(statusModal, async (newQuestion, oldQuestion) => {
            if (newQuestion.finally == 'finally') {
                /*   index() */
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
        watch(autionUpdate, async (newQuestion, oldQuestion) => {
            if (autionUpdate.value.status == 'live') {
                const i = data.value.findIndex(x => x._id === newQuestion._id)
                data.value[i] = newQuestion
            } else {
                let result = null;
                result = data.value.filter((remove) => remove._id !== newQuestion._id)
                data.value = result

            }
        })
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
        }
        const setSorBy = (sort) => {
            sortBy.value = sort
            isOpen.value = false

        }
        const statusOrder = [
            'bids completed',
            'live',
        ]

        const sortedData = computed(() => {
            switch (sortBy.value) {
                case 'Current Bid':
                    console.log('current-bid')
                    let sortStatus = {}
                    data.value.forEach(auction => {
                        if (!sortStatus[auction.status]) sortStatus[auction.status] = []
                        sortStatus[auction.status].push(auction)
                    })
                    const sortedItems = []
                    for (let key of statusOrder) {
                        if (sortStatus[key])
                            sortedItems.push(sortStatus[key].sort((a, b) => timeToEnd(a.startDate, a.duration) - timeToEnd(b.startDate, b.duration)))
                    }
                    return sortedItems.reverse().flat()
                case 'Odometer':
                    console.log('odometer')
                    return data.value.sort((a, b) => parseFloat(b.vehicleDetails.odometer) - parseFloat(a.vehicleDetails.odometer));
                case 'year':
                    console.log('Year')
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
            authStore,
            statusModalAuto,
            index,
            timeToEnd,
            setSorBy,
            sortedData,
            counter,
            sortBy
        };
    },
};
</script>
