<template>
    <div class="mx-auto bg-[#F0F0F0] relative">
        <div v-if="loading"
            class=" w-full h-screen fixed z-[1000] bg-[#00000078]  flex justify-center overflow-hidden items-center">
            <div class="text-indigo-700">
                <div class=" h-[80px] w-[80px] ">
                    <div class="animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff"
                            stroke-width="0" viewBox="0 0 16 16">
                            <path
                                d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                            </path>
                        </svg>
                    </div>
                    <p class=" text-base-gray font-medium pl-2 ">Loading...</p>
                </div>
            </div>
        </div>
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
                    <swiper v-if="dataDetails?.photos?.length > 0" :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }" :spaceBetween="10" :navigation="true" :slidesPerView="1" :thumbs="{ swiper: thumbsSwiper }"
                        :modules="modules" class="myCrousel2">
                        <swiper-slide v-if="dataDetails?.photos?.length > 0" v-for="(photo, index) in dataDetails?.photos"
                            :key="index">
                            <img :src="bucket + photo.url" alt="">

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
                                <img :src="bucket + photo.url" alt="">
                                <div class="bg-[#000000a3] absolute w-full h-full top-0 z-50 "></div>
                                <p class="text-white absolute  z-50 "> All Photos ({{ dataDetails?.photos?.length }})</p>
                            </div>
                            <img v-else :src="bucket + photo.url" alt="">
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
                                    <div class="grid grid-cols-6 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">VIN</p>
                                        <p v-if="dataDetails?.vehicleDetails?.vin">{{ dataDetails?.vehicleDetails?.vin }}
                                        </p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Make</p>
                                        <p v-if="dataDetails?.vehicleDetails?.make">{{ dataDetails?.vehicleDetails?.make }}
                                        </p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Model</p>
                                        <p v-if="dataDetails?.vehicleDetails?.model">{{ dataDetails?.vehicleDetails?.model
                                        }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Trim</p>
                                        <p v-if="dataDetails?.vehicleDetails?.vin">{{ dataDetails?.vehicleDetails?.vin }}
                                        </p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Body Type</p>
                                        <p v-if="dataDetails?.vehicleDetails?.bodyType">{{
                                            dataDetails?.vehicleDetails?.bodyType }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Cylinder</p>
                                        <p v-if="dataDetails?.vehicleDetails?.cylinder">{{
                                            dataDetails?.vehicleDetails?.cylinder }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Transmission</p>
                                        <p v-if="dataDetails?.vehicleDetails?.transmission">{{
                                            dataDetails?.vehicleDetails?.transmission }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Drive Train</p>
                                        <p v-if="dataDetails?.vehicleDetails?.driveTrain">{{
                                            dataDetails?.vehicleDetails?.driveTrain }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6 capitalize ">
                                        <p class=" font-semibold col-span-2">Doors</p>
                                        <p v-if="dataDetails?.vehicleDetails?.doors">{{ dataDetails?.vehicleDetails?.doors
                                        }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                </div>
                                <div class="flex gap-4 flex-col p-4 w-full">
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Exterior Color</p>
                                        <p v-if="dataDetails?.vehicleDetails?.color" class="col-span-4 capitalize ">{{
                                            dataDetails?.vehicleDetails?.color
                                        }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Odometer</p>
                                        <p v-if="dataDetails?.vehicleDetails?.odometer" class="col-span-4 capitalize  ">{{
                                            dataDetails?.vehicleDetails?.odometer }}
                                        </p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Tire Condition</p>
                                        <p v-if="dataDetails?.vehicleDetails?.tireCondition" class="col-span-4 capitalize ">
                                            {{
                                                dataDetails?.vehicleDetails?.tireCondition
                                            }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Brake Condition</p>
                                        <p v-if="dataDetails?.vehicleDetails?.brakeCondition"
                                            class="col-span-4 capitalize ">{{
                                                dataDetails?.vehicleDetails?.brakeCondition
                                            }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Vehicle is Currently</p>
                                        <p v-if="dataDetails?.vehicleStatus?.status" class="col-span-4 capitalize  ">{{
                                            dataDetails?.vehicleStatus?.status
                                        }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Bank/Institute</p>
                                        <p v-if="dataDetails?.vehicleStatus?.financingCompany" class="col-span-4">{{
                                            dataDetails?.vehicleStatus?.financingCompany }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Remaining Payments</p>
                                        <p v-if="dataDetails?.vehicleStatus?.remainingPayments">
                                            {{ dataDetails?.vehicleStatus?.remainingPayments }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Buyout Amount</p>
                                        <p v-if="dataDetails?.buyout">
                                            {{ dataDetails?.buyout }}</p>
                                        <p v-else class="col-span-4 capitalize text-[#A3A3A3] ">The seller didn't provide
                                            information
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <p class=" font-semibold col-span-2 ">Vehicle Reports</p>
                                        <div class="flex w-full col-span-3 justify-between">
                                            <img src="@/assets/svg/carfax.svg" alt="">
                                            <p class="text-[#7EC600] text-lg font-medium ">View History</p>

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
                        <div class="flex gap-3 p-2 items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M4.47734 3.7583C5.99959 2.40778 7.96486 1.66343 9.99984 1.66664C14.6023 1.66664 18.3332 5.39747 18.3332 9.99997C18.3359 11.7032 17.8142 13.366 16.839 14.7625L14.5832 9.99997H16.6665C16.6665 8.67443 16.2714 7.37898 15.5316 6.2791C14.7918 5.17921 13.7409 4.32483 12.5132 3.8251C11.2855 3.32537 9.93663 3.20297 8.63901 3.47355C7.34138 3.74412 6.15387 4.39538 5.22817 5.34414L4.47817 3.75914L4.47734 3.7583ZM15.5223 16.2416C14.0001 17.5922 12.0348 18.3365 9.99984 18.3333C5.39734 18.3333 1.6665 14.6025 1.6665 9.99997C1.6665 8.22914 2.219 6.58747 3.16067 5.23747L5.4165 9.99997H3.33317C3.33315 11.3255 3.72827 12.621 4.46807 13.7208C5.20787 14.8207 6.25875 15.6751 7.48648 16.1748C8.71421 16.6746 10.063 16.797 11.3607 16.5264C12.6583 16.2558 13.8458 15.6046 14.7715 14.6558L15.5215 16.2408L15.5223 16.2416ZM7.08317 11.6666H11.6665C11.777 11.6666 11.883 11.6227 11.9611 11.5446C12.0393 11.4665 12.0832 11.3605 12.0832 11.25C12.0832 11.1395 12.0393 11.0335 11.9611 10.9553C11.883 10.8772 11.777 10.8333 11.6665 10.8333H8.33317C7.78064 10.8333 7.25073 10.6138 6.86003 10.2231C6.46933 9.83241 6.24984 9.3025 6.24984 8.74997C6.24984 8.19743 6.46933 7.66753 6.86003 7.27683C7.25073 6.88613 7.78064 6.66664 8.33317 6.66664H9.1665V5.8333H10.8332V6.66664H12.9165V8.3333H8.33317C8.22266 8.3333 8.11668 8.3772 8.03854 8.45534C7.9604 8.53348 7.9165 8.63946 7.9165 8.74997C7.9165 8.86048 7.9604 8.96646 8.03854 9.0446C8.11668 9.12274 8.22266 9.16664 8.33317 9.16664H11.6665C12.219 9.16664 12.7489 9.38613 13.1396 9.77683C13.5303 10.1675 13.7498 10.6974 13.7498 11.25C13.7498 11.8025 13.5303 12.3324 13.1396 12.7231C12.7489 13.1138 12.219 13.3333 11.6665 13.3333H10.8332V14.1666H9.1665V13.3333H7.08317V11.6666Z"
                                    fill="#0B1107" />
                            </svg>
                            <p class="text-lg font-semibold">Bid Information</p>
                        </div>
                        <div v-if="dataDetails?.status == 'upcoming'"
                            class="border-t-[1px] p-4 flex-col items-center border-[#E0E0E0]">
                            <div class="flex gap-3 justify-between items-start pb-2 ">
                                <div class="flex flex-col  w-full ">
                                    <div class="flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                        <p class="text-sm">Auction Status</p>
                                        <div class="flex items-center gap-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M17.5 8.38583V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H15.8333C14.1845 4.14887 11.0856 5.07273 9.16667 5.51068V14.4893C11.0856 14.9272 14.1845 15.8512 15.8333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V11.6142C18.2188 11.4292 18.75 10.7766 18.75 10C18.75 9.22342 18.2188 8.57083 17.5 8.38583ZM4.16667 5.83333C3.24619 5.83333 2.5 6.57952 2.5 7.5V12.5C2.5 13.4205 3.24619 14.1667 4.16667 14.1667H5L5.83333 18.3333H7.5V5.83333H4.16667Z"
                                                    fill="black" />
                                            </svg>
                                            <p class=" capitalize text-xl font-medium ">Live Now</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col  w-full">
                                    <div class="flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                        <p class="text-sm">Starts Date & Time</p>
                                        <div class="flex gap-2">
                                            <p class="capitalize text-lg font-medium ">{{
                                                moment(dataDetails.startDate).format('MMMM DD, h: mm: a') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 mt-4">

                                <button v-if="dataDetails.remind" @click="remindCancel()"
                                    class="btn w-full bg-transparent border border-[#E0E0E0] flex gap-2 items-center text-base-black">
                                    <div v-if="loadingButton" class="w-8 h-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#0B1107"
                                            stroke="#fff" stroke-width="0" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                                            </path>
                                        </svg>
                                    </div>
                                    <template v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                            fill="none">
                                            <path
                                                d="M12.8907 13.8324H3.16671C3.10481 13.8324 3.04413 13.8152 2.99147 13.7826C2.93881 13.7501 2.89625 13.7035 2.86857 13.6481C2.84088 13.5928 2.82916 13.5308 2.83472 13.4691C2.84028 13.4075 2.8629 13.3486 2.90004 13.2991L3.16671 12.9437V7.16573C3.16671 6.27907 3.38271 5.44307 3.76604 4.70773L1.42871 2.37107L2.37204 1.42773L15.5714 14.6277L14.628 15.5704L12.8907 13.8324ZM13.8334 11.0231L5.53938 2.72907C6.34254 2.19303 7.27616 1.8851 8.24063 1.83814C9.2051 1.79117 10.1642 2.00693 11.0157 2.46239C11.8671 2.91785 12.5789 3.59592 13.0752 4.42426C13.5714 5.2526 13.8335 6.20012 13.8334 7.16573V11.0231ZM6.83338 14.4991H10.1667C10.1667 14.9411 9.99112 15.365 9.67856 15.6776C9.36599 15.9901 8.94207 16.1657 8.50004 16.1657C8.05802 16.1657 7.63409 15.9901 7.32153 15.6776C7.00897 15.365 6.83338 14.9411 6.83338 14.4991Z"
                                                fill="#0B1107" />
                                        </svg>
                                        Cancel Reminder
                                    </template>
                                </button>
                                <button v-else @click="remind()"
                                    class="btn w-full bg-primary flex gap-2 items-center text-base-black">
                                    <div v-if="loadingButton" class="w-8 h-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#0B1107"
                                            stroke="#fff" stroke-width="0" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                                            </path>
                                        </svg>
                                    </div>
                                    <template v-else>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"
                                            fill="none">
                                            <path
                                                d="M11.3333 11.9447L11.5999 12.3C11.6371 12.3496 11.6597 12.4085 11.6652 12.4701C11.6708 12.5318 11.6591 12.5937 11.6314 12.6491C11.6037 12.7045 11.5612 12.751 11.5085 12.7836C11.4558 12.8161 11.3952 12.8334 11.3333 12.8334H0.666585C0.604681 12.8334 0.544 12.8161 0.491342 12.7836C0.438683 12.751 0.396127 12.7045 0.368443 12.6491C0.340759 12.5937 0.32904 12.5318 0.334599 12.4701C0.340158 12.4085 0.362776 12.3496 0.399919 12.3L0.666585 11.9447V6.16671C0.666585 4.75222 1.22849 3.39567 2.22868 2.39547C3.22888 1.39528 4.58543 0.833374 5.99992 0.833374C7.41441 0.833374 8.77096 1.39528 9.77115 2.39547C10.7713 3.39567 11.3333 4.75222 11.3333 6.16671V11.9447ZM4.33325 13.5H7.66658C7.66658 13.9421 7.49099 14.366 7.17843 14.6786C6.86587 14.9911 6.44195 15.1667 5.99992 15.1667C5.55789 15.1667 5.13397 14.9911 4.82141 14.6786C4.50885 14.366 4.33325 13.9421 4.33325 13.5Z"
                                                fill="#0B1107" />
                                        </svg>
                                        Remind Me
                                    </template>
                                </button>
                            </div>
                        </div>
                        <div v-if="dataDetails?.status == 'live'"
                            class="border-t-[1px] p-4 flex-col items-center border-[#E0E0E0]">
                            <div class="flex gap-3 justify-between items-start pb-2 ">
                                <div class="flex flex-col  w-full ">
                                    <div class="flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                        <p class="text-sm">Auction Status</p>
                                        <div class="flex items-center gap-2 ">
                                            <div class="w-4 h-4 rounded-full bg-error "></div>
                                            <p class=" capitalize text-xl font-medium ">Live Now</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col  w-full">
                                    <div class="flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                        <p class="text-sm">Bid Status</p>
                                        <div class="flex gap-2">
                                            <template v-if="dataDetails.participate">
                                                <p v-if="dataDetails?.bids[0].participant._id == auth.userData._id"
                                                    class="py-2 px-4 border rounded-full text-[#05A54B] border-[#05A54B] flex justify-center items-center text-left">
                                                    Leading
                                                </p>
                                                <p v-else
                                                    class="py-2 px-4 border rounded-full text-[#FF333E] border-[#FF333E] flex justify-center items-center text-left">
                                                    Outbid
                                                </p>
                                            </template>
                                            <template v-else>
                                                <p class="py-1 px-2 border text-sm border-[#C2C2C2] rounded-full ">You
                                                    haven’t
                                                    bid yet</p>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-3 justify-between items-start  ">
                                <div class="flex flex-col  w-full ">
                                    <div class="flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                        <p class="text-sm">Current bid</p>
                                        <div class="flex items-center gap-2 ">
                                            <p v-if="dataDetails?.bids[0]?.amount" class="capitalize text-xl font-medium">
                                                ${{ dataDetails?.bids[0]?.amount }}</p>
                                            <p v-else-if="dataDetails?.vehicleDetails?.basePrice">{{
                                                dataDetails?.vehicleDetails?.basePrice }}</p>
                                            <p v-else>$0</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col  w-full">
                                    <div class="flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                        <p class="text-sm">Total Bids</p>
                                        <div class="flex gap-2">
                                            <p class="text-xl font-medium">{{ dataDetails?.bids?.length }} Bids</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 mt-4">
                                <button class="btn w-full bg-base-black flex gap-2 items-center text-primary ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                        fill="none">
                                        <path
                                            d="M9.16699 7.16666H13.8337L7.83366 15.8333V9.83332H3.16699L9.16699 1.16666V7.16666Z"
                                            fill="#C1F861" />
                                    </svg>
                                    Auto Bid
                                </button>
                                <button class="btn w-full bg-primary flex gap-2 items-center text-base-black">
                                    Bid Now
                                </button>
                                <div class="flex items-center gap-2 mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                        fill="none">
                                        <path
                                            d="M9.99984 18.8332C5.39734 18.8332 1.6665 15.1023 1.6665 10.4998C1.6665 5.89734 5.39734 2.1665 9.99984 2.1665C14.6023 2.1665 18.3332 5.89734 18.3332 10.4998C18.3332 15.1023 14.6023 18.8332 9.99984 18.8332ZM9.99984 17.1665C11.7679 17.1665 13.4636 16.4641 14.7139 15.2139C15.9641 13.9636 16.6665 12.2679 16.6665 10.4998C16.6665 8.73173 15.9641 7.03604 14.7139 5.78579C13.4636 4.53555 11.7679 3.83317 9.99984 3.83317C8.23173 3.83317 6.53604 4.53555 5.28579 5.78579C4.03555 7.03604 3.33317 8.73173 3.33317 10.4998C3.33317 12.2679 4.03555 13.9636 5.28579 15.2139C6.53604 16.4641 8.23173 17.1665 9.99984 17.1665ZM9.1665 12.9998H10.8332V14.6665H9.1665V12.9998ZM9.1665 6.33317H10.8332V11.3332H9.1665V6.33317Z"
                                            fill="#0B1107" />
                                    </svg>
                                    <p>All bids are binding and all sales are final</p>
                                </div>

                            </div>



                        </div>
                        <div v-if="dataDetails?.status == 'completed' || dataDetails?.status == 'bids completed' || dataDetails?.status == 'drop off'"
                            class="border-t-[1px] p-4 flex-col items-center border-[#E0E0E0]">
                            <div class="flex gap-3 justify-between items-start pb-2 ">
                                <div class="flex flex-col  w-full ">
                                    <div class="flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                        <p class="text-sm">Auction Status</p>
                                        <div class="flex items-center gap-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M8.33925 1.75273C7.17128 1.37464 5.90159 1.90056 5.34305 2.99381L4.67156 4.30812C4.59178 4.46428 4.46477 4.59129 4.3086 4.67107L2.9943 5.34256C1.90105 5.9011 1.37513 7.17079 1.75322 8.33876L2.20777 9.74292C2.26178 9.90976 2.26178 10.0894 2.20777 10.2563L1.75322 11.6604C1.37513 12.8284 1.90105 14.0981 2.9943 14.6567L4.3086 15.3281C4.46477 15.4079 4.59178 15.5349 4.67156 15.6911L5.34305 17.0054C5.90159 18.0987 7.17128 18.6246 8.33925 18.2465L9.74341 17.7919C9.91025 17.7379 10.0899 17.7379 10.2567 17.7919L11.6609 18.2465C12.8289 18.6246 14.0986 18.0987 14.6572 17.0054L15.3286 15.6911C15.4084 15.5349 15.5354 15.4079 15.6916 15.3281L17.0059 14.6567C18.0992 14.0981 18.6251 12.8284 18.247 11.6604L17.7924 10.2563C17.7384 10.0894 17.7384 9.90976 17.7924 9.74292L18.247 8.33876C18.6251 7.17079 18.0992 5.9011 17.0059 5.34256L15.6916 4.67107C15.5354 4.59129 15.4084 4.46428 15.3286 4.30812L14.6572 2.99381C14.0986 1.90056 12.8289 1.37464 11.6609 1.75273L10.2567 2.20728C10.0899 2.26128 9.91025 2.26129 9.74341 2.20728L8.33925 1.75273ZM5.63322 9.79734L6.81174 8.61876L9.16875 10.9758L13.8828 6.2618L15.0613 7.44031L9.16875 13.3328L5.63322 9.79734Z"
                                                    fill="#05A54B" />
                                            </svg>
                                            <p class=" capitalize text-xl font-medium ">Completed</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col  w-full ">
                                    <div class="flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                        <p class="text-sm">Final Bid</p>
                                        <div class="flex items-center gap-2 ">
                                            <p v-if="dataDetails?.bids[0]?.amount" class="capitalize text-xl font-medium">
                                                ${{ dataDetails?.bids[0]?.amount }}</p>
                                            <p v-else-if="dataDetails?.vehicleDetails?.basePrice">{{
                                                dataDetails?.vehicleDetails?.basePrice }}</p>
                                            <p v-else>$0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-3 justify-between items-start  ">

                                <div class="flex flex-col  w-full">
                                    <div class="flex flex-col gap-2 bg-[#F7F7F7] p-4 rounded-lg ">
                                        <p class="text-sm">Expected drop off date</p>
                                        <div class="flex gap-2">
                                            <p class="text-xl font-medium">{{
                                                moment(dataDetails.vehicleDetails.dropOffDate).format('MMMM DD, YYYY') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="dataDetails?.status == 'completed' || dataDetails?.status == 'bids completed'"
                                class="flex flex-col gap-2 mt-4">
                                <button :disabled="loadingButton ? true : false" @click="confirmVehicle(dataDetails._id)" class="btn w-full bg-primary flex gap-2 items-center text-base-black">
                                    <div v-if="loadingButton" class="w-8 h-8">
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
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
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
        const loadingButton = ref(false)
        const dataDetails = ref(null)
        const loading = ref(false)
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const storeIdAution = useAuctionStore()
        const auth = useAuthStore()
        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };
        const remind = async (aution) => {

            loadingButton.value = true
            try {
                let res = await storeIdAution.autionsAddRemindMe({ uuid: route.params.id })
            } catch (error) {

                loadingButton.value = false
            } finally {
                getDataAution(route.params.id)
                loadingButton.value = false
            }
        }
        const remindCancel = async (aution) => {

            loadingButton.value = true
            try {
                let res = await storeIdAution.autionsCancelRemindMe({ uuid: route.params.id })
            } catch (error) {

                loadingButton.value = false
            } finally {
                getDataAution(route.params.id)
                loadingButton.value = false
            }
        }
        const getDataAution = async (id) => {
            /* loading.value = true */
            try {
                let res = await storeIdAution.getAutionById({ uuid: id })
                if (res) {
                    dataDetails.value = res.data
                    dataDetails.value.bids.map((bit) => {
                        if (bit.participant._id == auth.userData._id) {
                            return dataDetails.value.participate = bit.participant._id == auth.userData._id
                        }
                    })

                    const formatter = new Intl.NumberFormat();
                    dataDetails.value.vehicleDetails.odometer = formatter.format(dataDetails.value.vehicleDetails.odometer)
                    let photos = []
                    if (dataDetails.value?.vehicleDetails?.additionalDocuments,
                        dataDetails.value?.vehicleDetails?.exteriorPhotos,
                        dataDetails.value?.vehicleDetails?.interiorPhotos,
                        dataDetails.value?.vehicleDetails?.driverLicense) {
                        var d = photos.concat(
                            dataDetails.value?.vehicleDetails?.additionalDocuments,
                            dataDetails.value?.vehicleDetails?.exteriorPhotos,
                            dataDetails.value?.vehicleDetails?.interiorPhotos,
                            dataDetails.value?.vehicleDetails?.vehicleDamage,
                            dataDetails.value?.vehicleDetails?.driverLicense,
                            dataDetails.value?.vehicleDetails?.originalDocument,
                        );
                        let resD = d.map((item, i) => {
                            let name = item.split("/")
                            let newObjet = {
                                name: name[2],
                                url: item
                            }
                            return newObjet
                        })

                        dataDetails.value.photos = resD
                        dataDetails.value.remindList.map((remind, index) => {
                            if (auth.userData._id == remind._id) {
                                dataDetails.value.remind = true
                            }
                        })
                        console.log('dataDetails', dataDetails.value)

                    } else {
                        dataDetails.photos = null
                    }
                }
            } catch (error) {
                loading.value = false
            } finally {
                loading.value = false
            }

        }
        const confirmVehicle = async (id) => {
            loadingButton.value = true
            try {
                await storeIdAution.vehicleReceived({ uuid: id })
            } catch (error) {
                toast(error.response.data.message, {
                    type: "error",
                });
            } finally {
                loadingButton.value = false
                getDataAution(route.params.id)
            }
        }
        onMounted(() => {
            getDataAution(route.params.id)

        })
        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [FreeMode, Navigation, Thumbs],
            dataDetails,
            bucket,
            route,
            router,
            loading,
            auth,
            moment,
            remind,
            remindCancel,
            loadingButton,
            confirmVehicle
        };
    },
};
</script>




  