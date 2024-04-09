<template>
    <template v-if="loading">
        <Basic />
    </template>

    <template v-else>
        <HeaderOptionesSeller :storeAutions="storeAutions" :data="data" />
        <div v-if="data?.length > 0" class="relative max-w-[100rem] mx-auto z-50 md:top-[60px] ">
            <div class="flex justify-between md:mt-5 gap-4 mt-2">
                <div class="hidden md:w-[29%] lg:block">
                    <CreateAution class="hidden lg:block" :data="storeUser.userData" :autions="storeAutions" />
                </div>
                <CardAutionMobile class="block lg:hidden" :data="storeUser.userData" :autions="storeAutions" />
                <div class="w-full lg:w-[70%] ">
                    <div class="flex items-center px-3 justify-between mb-4">
                        <p class=" text-xs font-semibold md:text-base " v-if="data.length > 0">{{ sortedData.length }}
                            Vehicles
                        </p>
                        <!-- <SorBy :key="counter" :changeLayouts="changeLayouts" :changeGridTemplate="changeGridTemplate" /> -->
                        <div class="flex items-center gap-2 ">
                            <p class="mt-2 hidden md:block">Filter by:</p>
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
                                        <div @click="setSorBy('All Status')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            All Status
                                        </div>
                                        <div @click="setSorBy('Needs Approval')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Needs Approval
                                        </div>
                                        <div @click="setSorBy('Accepted')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Accepted
                                        </div>
                                        <div @click="setSorBy('Dropped Off')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Dropped Off
                                        </div>
                                        <div @click="setSorBy('Reviewed')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Reviewed
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
                    <div class="p-2" v-if="sortedData.length > 0"
                        :class="changeLayouts ? 'grid grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up  animate-ease-in-out animate-delay-200'">
                        <div v-for="(auction, index) in sortedData" :key="index"
                            class="bg-white flex mb-2 md:mb-7 gap-5 items-start shadow-steps w-full  "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <CardCompleteSeller :key="counter" :auction="auction" :changeLayouts="changeLayouts"
                                :decline="declineAution" />
                            <!--  <div class="w-full flex   p-5 sm:p-0 relative" :class="changeLayouts ? 'flex-col' : ''">
                                <p v-if="auction.status == 'completed'"
                                    class="font-semibold fixed z-50 left-0 bg-[#05A54B] text-white rounded-lg ml-2 mt-2 px-4 py-1">
                                    Complete
                                </p>
                                <p v-if="auction.status == 'bids completed'"
                                    class="font-semibold fixed z-50 left-0 bg-[#FBDB17]  rounded-lg ml-2 mt-2 px-4 py-1">
                                    Bids
                                    Complete
                                </p>
                                <p v-if="auction.status == 'reviewed'"
                                    class="font-semibold fixed z-50 left-0 bg-[#0B1107] text-white rounded-lg ml-2 mt-2 px-4 py-1">
                                    Reviewed
                                </p>
                                <p v-if="auction.status == 'drop off'"
                                    class="font-semibold fixed z-50 left-0 bg-[#0B1107] text-white rounded-lg ml-2 mt-2 px-4 py-1">
                                    Dropped Off
                                </p>
                                <swiper pagination :modules="modules" :slides-per-view="1" class="swiper-autions"
                                    :class="changeLayouts ? 'w-full' : 'w-[40%]'">
                                    <swiper-slide v-for="(img, index) in auction?.photos" :key="index">

                                        <img class="w-full rounded-s-lg h-full object-cover" :src="bucket + img.url" alt="">
                                    </swiper-slide>
                                    <div v-if="!auction?.photos" class=" absolute w-full h-full top-0 ">
                                        <img class="w-full rounded-s-lg h-full object-cover"
                                            src="../../../assets/img/jpg/image.jpg" alt="">
                                    </div>
                                </swiper>
                                <div class="w-full flex justify-between gap-3 " :class="changeLayouts ? 'flex-col' : ''">
                                    <div :class="auction.status == 'bids completed' || auction.status == 'completed' ? 'cursor-pointer' : ''"
                                        @click="(auction.status == 'bids completed' || auction.status == 'completed') && statusModalView.openModal({ isActive: true, data: auction })"
                                        class="flex p-5  flex-col gap-3">
                                        <div class="">
                                            <div class="font-bold text-xl">{{ auction?.vehicleDetails?.year }} {{
                                                auction?.vehicleDetails?.make }} {{ auction?.vehicleDetails?.model }}</div>
                                            <p class="text-base capitalize">
                                                {{ auction?.city }}, {{ auction?.province }}
                                            </p>
                                        </div>
                                        <div class="grid grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                                            <div v-if="auction.vehicleDetails.vin" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class=" uppercase ">{{ auction.vehicleDetails.vin }}</p>
                                            </div>
                                            <div v-if="auction.vehicleDetails.odometer" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class=" capitalize ">{{ auction?.vehicleDetails?.odometer }} Kilometers
                                                </p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                                            <div v-if="auction.vehicleDetails.color" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class=" capitalize ">{{ auction?.vehicleDetails?.color }}</p>
                                            </div>
                                            <div v-if="auction.vehicleDetails.driveTrain" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.6673 13.3327H3.33398V13.9993C3.33398 14.3675 3.0355 14.666 2.66732 14.666H2.00065C1.63246 14.666 1.33398 14.3675 1.33398 13.9993V7.99935L3.00954 3.53118C3.2047 3.01078 3.70219 2.66602 4.25798 2.66602H11.7433C12.2991 2.66602 12.7966 3.01078 12.9918 3.53118L14.6673 7.99935V13.9993C14.6673 14.3675 14.3689 14.666 14.0007 14.666H13.334C12.9658 14.666 12.6673 14.3675 12.6673 13.9993V13.3327ZM2.75798 7.99935H13.2433L11.7433 3.99935H4.25798L2.75798 7.99935ZM4.33398 11.3327C4.88627 11.3327 5.33398 10.8849 5.33398 10.3327C5.33398 9.78042 4.88627 9.33268 4.33398 9.33268C3.7817 9.33268 3.33398 9.78042 3.33398 10.3327C3.33398 10.8849 3.7817 11.3327 4.33398 11.3327ZM11.6673 11.3327C12.2196 11.3327 12.6673 10.8849 12.6673 10.3327C12.6673 9.78042 12.2196 9.33268 11.6673 9.33268C11.1151 9.33268 10.6673 9.78042 10.6673 10.3327C10.6673 10.8849 11.1151 11.3327 11.6673 11.3327Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class=" capitalize ">{{ auction?.vehicleDetails?.driveTrain }}</p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-1 "
                                            :class="changeLayouts ? ' p-5 whitespace-nowrap  gap-5 overflow-x-auto overflow-y-hidden ' : ''">
                                            <div v-if="auction?.vehicleDetails?.tireCondition"
                                                class="bg-[#F0F0F0] flex px-5 py-1 gap-3 rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p>{{ auction?.vehicleDetails?.tireCondition }}</p>
                                            </div>
                                            <div v-if="auction?.vehicleDetails?.rotorCondition"
                                                class="bg-[#F0F0F0] flex  px-5 py-1  gap-3 rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p>{{ auction?.vehicleDetails?.rotorCondition }}</p>
                                            </div>
                                        </div>

                                        <RouterLink v-if="auction.status == 'bids completed'"
                                            :to="{ name: 'inbox-seller', query: { id: auction._id + '-' + auction?.bids[0]?.participant?._id } }"
                                            class="flex gap-4" :class="changeLayouts ? 'flex-col' : ''">
                                            <div class="bg-[#F0F0F0] flex gap-3 py-1 px-2  rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z"
                                                        fill="#0A0A0A" />
                                                </svg>
                                                <p>Contact Buyer</p>
                                            </div>
                                        </RouterLink>
                                    </div>
                                    <div :class="changeLayouts ? 'w-full' : 'w-[40%] h-full flex justify-between flex-col'"
                                        class="border-l-2  border-[#E0E0E0]">
                                        <div class="flex p-5  pl-4 ga justify-between "
                                            :class="changeLayouts ? 'flex-row' : 'flex-col '">
                                            <div v-if="auction.status == 'reviewed' || auction.status == 'drop off'"
                                                class="space-y-1"
                                                :class="changeLayouts ? 'flex flex-col justify-between items-start' : ''">
                                                <p>Dropped off date</p>
                                                <p class=" font-medium text-base-black  ">{{ auction.dropOffDateForma }}</p>
                                            </div>
                                            <div v-if="auction.status == 'reviewed' || auction.status == 'completed' || auction.status == 'bids completed' || auction.status == 'drop off'"
                                                class="space-y-1"
                                                :class="changeLayouts ? 'flex flex-col justify-between items-start' : ''">
                                                <p>Final Bids</p>
                                                <div class="flex gap-1">
                                                    <p class="font-medium text-base-black 
 text-xs md:text-2xl ">
                                                        <span v-if="auction.bids[0]?.amount">
                                                            ${{ auction.bids[0]?.amount }}
                                                        </span>
                                                        <span v-else>
                                                            ${{ auction?.vehicleDetails?.basePrice }}
                                                        </span>
                                                    </p>
                                                    <p class="text-[#666666] mt-1 "> /{{ auction.bids.length }} Bids</p>
                                                </div>
                                            </div>
                                            <div v-if="auction.status == 'bids completed'"
                                                :class="changeLayouts ? 'flex justify-between items-start flex-col' : 'space-y-2 flex items-center gap-2'">
                                                <p>Approval period ends in</p>
                                                <p class="text-[#FF9A02] font-medium !m-0">48 Hours
                                                </p>
                                            </div>
                                        </div>
                                        <div v-if="auction.status == 'completed'"
                                            class="flex gap-4 p-5 justify-between w-full">
                                            <RouterLink
                                                :to="{ name: 'inbox-seller', query: { id: auction._id + '-' + auction?.bids[0]?.participant._id } }"
                                                class="btn w-full bg-primary text-base-black">Contact Buyer</RouterLink>
                                        </div>
                                        <div v-if="auction.status == 'bids completed'"
                                            class="flex gap-4 p-5  justify-between w-full">
                                            <button @click="statusModal.openModal({ isActive: true, data: auction })"
                                                class="btn w-full bg-primary text-base-black">Accept</button>
                                            <button @click="declineAution(auction)"
                                                class="btn w-full bg-white border border-[#E0E0E0] text-error">Decline</button>
                                        </div>
                                        <div v-if="auction.status == 'drop off'"
                                            class="flex gap-4 p-5  justify-between w-full">
                                            <button @click="statusModalR.openModal({ isActive: true, data: auction })"
                                                class="btn w-full bg-white border border-[#E0E0E0]  ">Input Review</button>
                                        </div>
                                        <div v-if="auction.status == 'reviewed'"
                                            class="flex gap-4 p-5  justify-between w-full">
                                            <button disabled
                                                class="btn w-full bg-white border border-[#E0E0E0] text-[#A3A3A3] ">Reviewed</button>
                                        </div>
                                    </div>
                                </div>
                            
                            
                            
                            </div> -->
                        </div>
                    </div>
                    <div v-else>
                        <ScrrenNoSorbySeller />
                    </div>
                </div>
            </div>
        </div>
        <template v-else>
            <ScreenCreateAution />
        </template>
        <div v-if="openDecline"
            class="fixed inset-0 flex items-end md:items-center z-50 justify-center bg-base-black  bg-opacity-50">
            <div class="max-w-md overflow-auto  bg-white rounded-lg shadow-xl animation-fade-modal">
                <div class="p-2 md:p-4  rounded-t-lg  bg-blue-dark flex items-center justify-between">
                    <p class=" text-sm md:text-xl text-white">Cancel Auction</p>
                    <svg @click="openDecline = false" xmlns="http://www.w3.org/2000/svg"
                        class=" w-6 h-8 md:w-8   md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="p-4 border border-b-[#E0E0E0] flex gap-3 flex-col  ">
                    <div class="flex gap-3 items-start ">
                        <div class="w-[80px] md:w-[120px] md:h-[90px]">
                            <img v-if="autionModal?.photos" class="w-full h-full rounded-lg object-cover"
                                :src="bucket + autionModal?.photos[0].url" alt="">
                            <img v-else class="w-full h-full rounded-lg object-cover" src="@/assets/img/jpg/image.jpg"
                                alt="">
                        </div>
                        <div>
                            <p class="font-semibold capitalize md:text-base text-sm ">{{
        autionModal?.vehicleDetails?.year
    }} {{
            autionModal?.vehicleDetails?.make }} {{
        autionModal?.vehicleDetails?.model }}</p>
                            <p class="capitalize text-sm md:text-base ">Final Bid</p>
                            <div class="flex gap-1">
                                <p v-if="autionModal?.bids[0]?.amount"
                                    class="font-medium text-sm text-base-black md:text-2xl">
                                    ${{
        autionModal?.bids[0].amount }} </p>
                                <p v-else-if="autionModal?.vehicleDetails?.basePrice" class="font-medium text-base-black 
 text-xs md:text-2xl ">${{ auction?.vehicleDetails?.basePrice
                                    }}
                                </p>
                                <p v-else class="font-medium text-base-black text-xs md:text-2xl ">$0 </p>
                                <p class="text-[#666666] mt-1 text-xs md:text-base "> /{{ autionModal?.bids?.length }}
                                    Bids
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:py-10 p-2 md:px-4 pb-2">
                    <p class="text-xs md:text-base">Are you sure you want to cancel the auction for the <span
                            class="font-medium">{{
        autionModal?.vehicleDetails?.model }}</span>?</p>
                    <div class="w-full flex gap-2 mt-4 items-center">
                        <button @click="openDecline = false"
                            class="btn w-full border-[#E0E0E0] border rounded-lg ">No</button>
                        <button @click="cancelAution(autionModal._id)"
                            class="btn w-full bg-primary rounded-lg ">Yes</button>
                    </div>
                </div>
            </div>
        </div>
        <ModalAcceptAutionVue v-if="statusModal?.isActive" :form="form" :acceptAution="acceptAution" :index="index" />
        <ModalReviewVue v-if="statusModalR.isActive" :index="index" />
        <ModalViewDetailsVue v-if="statusModalView.isActive" />
    </template>
</template>

<script>
import { ref, onMounted, computed, watchEffect, watch } from "vue";
import { toast } from "vue3-toastify";
import { useRoute, useRouter } from 'vue-router'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import ModalAcceptAutionVue from "../../../components/Modals/ModalAcceptAution/ModalAcceptAution.vue";
import { ModalAcceptAution } from "@/stores/modalAcceptAution";
import { ModalReview } from "@/stores/modalReview";
import { ModalViewDetails } from "@/stores/modalViewDetails";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ModalReviewVue from '@/components/Modals/ModalReview/ModalReview.vue'
import ModalViewDetailsVue from '@/components/Modals/ModalViewDetails/ModalViewDetails.vue'
import Basic from '../../../components/Loading/Basic.vue'
import HeaderOptionesSeller from '../../../components/Header/HeaderOptionesSeller.vue'
import CreateAution from '../../../components/Cards/CreateAution.vue'
import CardCompleteSeller from '../../../components/Cards/CardCompleteSeller.vue'
import CardAutionMobile from '../../../components/Cards/CardAutionMobile.vue'
import ScreenCreateAution from '../../../components/Screen/ScreenCreateAution.vue'
import ScrrenNoSorbySeller from '../../../components/Screen/ScrrenNoSorbySeller.vue'
import SorBy from '../../../components/Filters/SorBy.vue'
import { arrayPhotos } from "../../../utils/packPhotos";

export default {

    components: {
        Swiper,
        SwiperSlide,
        ModalAcceptAutionVue,
        ModalReviewVue,
        ModalViewDetailsVue,
        HeaderOptionesSeller,
        CreateAution,
        CardCompleteSeller,
        CardAutionMobile,
        Basic,
        ScreenCreateAution,
        ScrrenNoSorbySeller,
        SorBy
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const isOpen = ref(false)
        const loading = ref(false)
        const changeLayouts = ref(false)
        const storeAutions = useAuctionStore()
        const storeUser = useAuthStore()
        const autionUpdate = ref(computed(() => storeUser.aution))
        const path = ref(computed(() => route.name))
        const statusModal = ModalAcceptAution()
        const data = ref([])
        const statusModalR = ModalReview()
        const openDecline = ref(false)
        const autionModal = ref(null)
        const counter = ref(0)
        const statusModalView = ModalViewDetails()
        const sortBy = ref('All Status')

        const changeGridTemplate = () => {
            changeLayouts.value = !changeLayouts.value
            counter.value++
        }
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))

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
        const index = async () => {
            loading.value = true
            try {
                let res = await storeAutions.index()
                if (res) {
                    data.value = storeAutions.completed
                    data.value.map((autions, index) => {
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
                }

            } catch (error) {

            } finally {
                loading.value = false
            }
        }
        const declineAution = (auction) => {
            openDecline.value = true
            autionModal.value = auction
        }
        const acceptAution = (url) => {
            loading.value = true
            console.log('REVISAR SI LLEGAaaaaaaaaaaaaa', url)
            try {
                let res = storeAutions.acceptAutions(statusModal.dataAutiont._id,url)
                if (res) {
                    return '200'
                }
            } catch (error) {
                loading.value = true

            } finally {
                /*  index() */
                loading.value = false
            }

        }
        const setSorBy = (sort) => {
            sortBy.value = sort
            isOpen.value = false

        }

        const sortedData = computed(() => {
            switch (sortBy.value) {
                case 'All Status':
                    return data.value
                case 'Needs Approval':
                    return data.value.filter((aution) => aution.status == 'bids completed')
                case 'Accepted':
                    return data.value.filter((aution) => aution.status == 'completed')
                case 'Dropped Off':
                    return data.value.filter((aution) => aution.status == 'drop off')
                case 'Reviewed':
                    return data.value.filter((aution) => aution.status == 'reviewed')
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
        watch(autionUpdate, async (newQuestion, oldQuestion) => {
            const i = data.value.findIndex(x => x._id === newQuestion._id)
            data.value[i] = newQuestion
            if (autionUpdate.value.status == 'completed') {
                const i = data.value.findIndex(x => x._id === newQuestion._id)
                data.value[i] = newQuestion
                let photos = []
                if (data.value[i]?.vehicleDetails?.additionalDocuments,
                    data.value[i]?.vehicleDetails?.exteriorPhotos,
                    data.value[i]?.vehicleDetails?.interiorPhotos,
                    data.value[i]?.vehicleDetails?.driverLicense) {
                    var d = photos.concat(
                        data.value[i]?.vehicleDetails?.additionalDocuments,
                        data.value[i]?.vehicleDetails?.exteriorPhotos,
                        data.value[i]?.vehicleDetails?.interiorPhotos,
                        data.value[i]?.vehicleDetails?.vehicleDamage,
                        data.value[i]?.vehicleDetails?.driverLicense,
                        data.value[i]?.vehicleDetails?.originalDocument,
                    );
                    let resD = d.map((item, i) => {
                        let name = item.split("/")
                        let newObjet = {
                            name: name[2],
                            url: item
                        }
                        return newObjet
                    })
                    return data.value[i].photos = resD
                } else {
                    return data.value[i].photos = null
                }
            } else {
                let result = null;
                result = data.value.filter((remove) => remove._id !== newQuestion._id)
                data.value = result

            }
            counter.value++
        })
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
            statusModalR,
            openDecline,
            declineAution,
            autionModal,
            acceptAution,
            statusModalView,
            cancelAution,
            index,
            sortedData,
            setSorBy,
            counter,
            sortBy

        };
    },
};
</script>