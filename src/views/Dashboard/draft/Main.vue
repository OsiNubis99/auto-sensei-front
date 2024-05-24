<template>
    <template v-if="loading">
        <div class=" left-0 top-0 absolute w-full h-full flex justify-center items-center">
            <div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
                <div class="absolute -left-[30px] z-10  h-[80px] w-[80px] ">
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
    </template>
    <template v-else>
        <HeaderOptionesSeller :storeAutions="storeAutions" :data="data" />
        <div v-if="data?.length > 0" class="relative max-w-[120rem] mx-auto z-50 md:top-[60px] ">
            <div class="flex justify-between md:mt-5 md:px-5 gap-4 mt-2">
                <div class="hidden md:w-[24%] lg:block">
                    <CreateAution class="hidden lg:block" :data="storeUser.userData" :autions="storeAutions" />
                </div>
                <CardAutionMobile class="block lg:hidden" :data="storeUser.userData" :autions="storeAutions" />
                <div class="w-full lg:w-[70%]">
                    <div class="flex items-center justify-between px-2 pt-4 md:p-0  mb-4">
                        <p class=" font-semibold ">{{ data?.length }} Vehicles</p>
                        <div class="flex items-center gap-2 ">
                            <p class="mt-2 hidden md:block">Sort by:</p>
                            <div class="flex items-center gap-5">
                                <div class="navbar-right relative">
                                    <button @click="isOpen = !isOpen"
                                        class="flex gap-2 rounded-md  shadow-md px-2 bg-white items-center">
                                        <p class="p-2 text-xs md:text-[16px] pb-1">Uncompleted</p>
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
                                        <div @click="isOpen = false"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Uncompleted
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
                    <div
                        :class="changeLayouts ? 'grid grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up p-2 animate-ease-in-out animate-delay-200'">
                        <div v-for="(auction, index) in data" :key="index"
                            class="bg-white flex  md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full  "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <div class="w-full flex  flex-col md:flex-row  sm:p-0 relative"
                                :class="changeLayouts ? 'flex-col' : ''">
                                <p v-if="auction.status == 'completed'"
                                    class="font-semibold fixed left-0 z-50 text-white bg-[#05A54B] rounded-lg ml-2 mt-2 px-4 py-1">
                                    Complete
                                </p>
                                <p
                                    class="font-semibold text-xs px-4  md:text-base fixed left-2 md:left-0 z-50  bg-[#FFFFFF] rounded-lg ml-2 mt-2 md:px-4 md:py-1">
                                    Draft
                                </p>
                                <swiper pagination :modules="modules" :slides-per-view="1" class="swiper-autions"
                                    :class="changeLayouts ? 'w-full' : 'w-full md:w-[40%] md:h-[250px]  '">
                                    <swiper-slide v-for="(img, index) in auction?.photos" :key="index">
                                        <img class="w-full rounded-s-lg  h-full object-cover" :src="bucket + img.url"
                                            alt="">
                                    </swiper-slide>
                                    <div v-if="!auction?.photos" class=" md:absolute w-full h-[250px] top-0 ">
                                        <img class="w-full rounded-s-lg h-full object-cover"
                                            src="@/assets/img/jpg/image.jpg" alt="">
                                    </div>
                                </swiper>
                                <div class="w-full flex flex-col md:flex-row justify-between gap-3 "
                                    :class="changeLayouts ? 'flex-col' : ''">
                                    <div @click="(auction.status == 'live' || auction.status == 'bids completed' || auction.status == 'completed') && statusModalView.openModal({ isActive: true, data: auction })"
                                        :class="auction.status == 'live' || auction.status == 'bids completed' || auction.status == 'completed' ? 'cursor-pointer hover:shadow-xl' : ''"
                                        class="flex p-2 md:p-5  flex-col gap-3">
                                        <div>
                                            <div class="font-bold md:text-xl">{{ auction?.vehicleDetails?.year }} {{
        auction?.vehicleDetails?.make }} {{ auction?.vehicleDetails?.model }}
                                            </div>
                                            <p class="text-xs md:text-base">
                                                {{ auction?.city }}, {{ auction?.province }}
                                            </p>
                                        </div>
                                        <div class=" hidden md:grid grid-cols-2 gap-1"
                                            :class="changeLayouts ? 'flex-col' : ''">
                                            <div v-if="auction?.vehicleDetails?.vin" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="uppercase">{{ auction?.vehicleDetails?.vin }}</p>
                                            </div>
                                            <div v-if="auction?.vehicleDetails?.odometer" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ auction?.vehicleDetails?.odometer }} Kilometers
                                                </p>
                                            </div>
                                        </div>
                                        <div class="hidden md:grid grid-cols-2 gap-1"
                                            :class="changeLayouts ? 'flex-col' : ''">
                                            <div v-if="auction?.vehicleDetails?.color" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ auction?.vehicleDetails?.color }}</p>
                                            </div>
                                            <div v-if="auction?.vehicleDetails?.driveTrain" class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p
                                                    class=" text-[10px] lg:text-xs lg:text-md font-semibold capitalize  ">
                                                    {{
        auction?.vehicleDetails?.tireCondition }}</p>
                                            </div>
                                            <div v-if="auction?.vehicleDetails?.brakeCondition"
                                                class="bg-[#F0F0F0] flex px-1  w-fit md:px-2 py-1 gap-1 md:gap-3  rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p
                                                    class=" text-[10px] lg:text-xs lg:text-md font-semibold capitalize  ">
                                                    {{
        auction?.vehicleDetails?.brakeCondition }}</p>
                                            </div>
                                        </div>
                                        <div v-show="auction?.status == 'unapproved'" class="flex gap-2 items-center">
                                            <img class="h-10 w-10" src="@/assets/svg/Spin.svg" alt="">
                                            <p>Waiting for verification, can take up to <span> 90 mins</span></p>
                                        </div>
                                    </div>
                                    <div :class="changeLayouts ? 'w-full' : 'md:w-[40%] flex flex-col h-full justify-between'"
                                        class="border-l-2 p-2 md:p-5 border-[#E0E0E0]">
                                        <div class="flex flex-col gap-2 md:gap-4">
                                            <div class="bg-[#E0E0E0] w-full h-[8px]  rounded-md">
                                                <div :style="[auction.percentage ? { 'width': `${auction.percentage}% !important` } : { 'width': '0px' }]"
                                                    class="  custom-progress rounded-md h-full"></div>
                                            </div>
                                            <div class="flex gap-2 items-center">
                                                <svg class=" w-5 h-5 md:w-[23px] md:h-[23px]"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M7.99967 14.6663C4.31767 14.6663 1.33301 11.6817 1.33301 7.99967C1.33301 4.31767 4.31767 1.33301 7.99967 1.33301C11.6817 1.33301 14.6663 4.31767 14.6663 7.99967C14.6663 11.6817 11.6817 14.6663 7.99967 14.6663ZM7.33501 10.6663L12.0483 5.95234L11.1057 5.00967L7.33501 8.78101L5.44901 6.89501L4.50634 7.83767L7.33501 10.6663Z"
                                                        fill="#05A54B" />
                                                </svg>
                                                <p class=" text-xs md:text-lg pt-[2px]">{{ auction.percentage }} %
                                                    completed</p>
                                            </div>
                                        </div>
                                        <div class="flex w-full justify-between mt-2 gap-2 md:gap-4 items-center">
                                            <RouterLink
                                                :to="{ name: 'edit-draft', query: { id: auction._id,progress: auction.percentage} }"
                                                class="btn bg-primary w-full ">Continue to edit</RouterLink>
                                            <button
                                                class=" bg-transparent border p-2 md:p-3 rounded-md md:rounded-xl border-[#E0E0E0] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                    viewBox="0 0 15 15" fill="none">
                                                    <path
                                                        d="M10.833 2.16634H14.1663V3.49967H12.833V13.4997C12.833 13.6765 12.7628 13.8461 12.6377 13.9711C12.5127 14.0961 12.3432 14.1663 12.1663 14.1663H2.83301C2.6562 14.1663 2.48663 14.0961 2.3616 13.9711C2.23658 13.8461 2.16634 13.6765 2.16634 13.4997V3.49967H0.833008V2.16634H4.16634V0.833008H10.833V2.16634ZM5.49967 5.49967V10.833H6.83301V5.49967H5.49967ZM8.16634 5.49967V10.833H9.49967V5.49967H8.16634Z"
                                                        fill="#FF333E" />
                                                </svg>
                                            </button>
                                        </div>
                                        <!--  <div v-if="index == 4" class="flex w-full justify-between gap-4 items-center">
                                            <button class="btn bg-primary w-full ">Launch</button>
                                            <button
                                                class=" w-full bg-transparent border p-3 font-medium rounded-xl border-[#E0E0E0] ">
                                                Edit
                                            </button>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="flex w-full flex-col justify-center gap-6 items-center custom-header-all ">
            <div class="flex gap-20 items-end ">
                <div class="flex gap-8 flex-col">
                    <div class="flex w-full justify-start">
                        <img class="object-cover" :src="bucket + 'public/svg/vehiculoAll.svg'" alt="">
                    </div>
                    <div>
                        <h1 class="text-5xl font-semibold text-blue-dark ">
                            Get the best value <br>
                            for your car with <br> AutoSensei !
                        </h1>
                        <p>Let the bids begin, post your auction, sell your car quick as 48 hours.</p>
                    </div>
                    <RouterLink to="/all/create"
                        class="w-full btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create My Auction
                    </RouterLink>
                </div>
                <div>
                    <h4 class="!font-bold ">Benefits of selling your car on AutoSensei:</h4>
                    <div class="flex flex-col gap-8 pt-6">
                        <div class="flex items-center gap-3">
                            <div class="border p-1 rounded-full flex justify-center items-center border-[#05A54B]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"
                                    fill="none">
                                    <path
                                        d="M10.8898 11.9446H3.11198V12.5001C3.11198 12.6475 3.05345 12.7888 2.94926 12.8929C2.84507 12.9971 2.70377 13.0557 2.55642 13.0557H2.00087C1.85353 13.0557 1.71222 12.9971 1.60803 12.8929C1.50384 12.7888 1.44531 12.6475 1.44531 12.5001V7.50011L2.84142 3.77678C2.92083 3.56494 3.06301 3.38239 3.24895 3.25353C3.4349 3.12467 3.65575 3.05564 3.88198 3.05566H10.1198C10.346 3.05564 10.5668 3.12467 10.7528 3.25353C10.9387 3.38239 11.0809 3.56494 11.1603 3.77678L12.5564 7.50011V12.5001C12.5564 12.6475 12.4979 12.7888 12.3937 12.8929C12.2895 12.9971 12.1482 13.0557 12.0009 13.0557H11.4453C11.298 13.0557 11.1567 12.9971 11.0525 12.8929C10.9483 12.7888 10.8898 12.6475 10.8898 12.5001V11.9446ZM2.63198 7.50011H11.3698L10.1198 4.16678H3.88198L2.63198 7.50011ZM3.94531 10.2779C4.16633 10.2779 4.37829 10.1901 4.53457 10.0338C4.69085 9.87753 4.77865 9.66557 4.77865 9.44455C4.77865 9.22354 4.69085 9.01158 4.53457 8.8553C4.37829 8.69902 4.16633 8.61122 3.94531 8.61122C3.7243 8.61122 3.51234 8.69902 3.35606 8.8553C3.19978 9.01158 3.11198 9.22354 3.11198 9.44455C3.11198 9.66557 3.19978 9.87753 3.35606 10.0338C3.51234 10.1901 3.7243 10.2779 3.94531 10.2779ZM10.0564 10.2779C10.2774 10.2779 10.4894 10.1901 10.6457 10.0338C10.802 9.87753 10.8898 9.66557 10.8898 9.44455C10.8898 9.22354 10.802 9.01158 10.6457 8.8553C10.4894 8.69902 10.2774 8.61122 10.0564 8.61122C9.83541 8.61122 9.62345 8.69902 9.46717 8.8553C9.31089 9.01158 9.22309 9.22354 9.22309 9.44455C9.22309 9.66557 9.31089 9.87753 9.46717 10.0338C9.62345 10.1901 9.83541 10.2779 10.0564 10.2779Z"
                                        fill="#05A54B" />
                                </svg>
                            </div>
                            <p>Sell your car without any cost or fees</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="border p-1 rounded-full flex justify-center items-center border-[#05A54B]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"
                                    fill="none">
                                    <path
                                        d="M7.28017 13.0564C4.21183 13.0564 1.72461 10.5692 1.72461 7.50087C1.72461 4.43253 4.21183 1.94531 7.28017 1.94531C10.3485 1.94531 12.8357 4.43253 12.8357 7.50087C12.8357 10.5692 10.3485 13.0564 7.28017 13.0564ZM10.8107 9.69642V9.63809C10.8107 9.12587 10.8107 8.89198 10.4485 8.68476C10.3321 8.61875 10.2125 8.5585 10.0902 8.5042C9.88628 8.41142 9.75128 8.35087 9.56905 8.0842C9.5473 8.05254 9.52582 8.02068 9.50461 7.98865C9.31294 7.69698 9.17461 7.48698 8.64794 7.57031C7.61183 7.73476 7.53517 7.91698 7.48961 8.22476L7.48239 8.27531C7.41517 8.72531 7.40294 8.87642 7.59072 9.07365C8.2935 9.81087 8.71461 10.3425 8.84239 10.6536C8.90461 10.8053 9.06461 11.2648 8.95461 11.7192C9.62896 11.4506 10.2292 11.0245 10.7052 10.4764C10.7663 10.2686 10.8107 10.0098 10.8107 9.69642ZM7.28017 2.96365C5.99294 2.96365 4.83017 3.50031 4.00461 4.36142C4.10294 4.42976 4.1885 4.52587 4.24739 4.65809C4.36072 4.91198 4.36072 5.17365 4.36072 5.40531C4.36072 5.58753 4.36072 5.76087 4.41905 5.88587C4.49905 6.05698 4.84461 6.13031 5.14961 6.19365C5.25905 6.21698 5.37128 6.24031 5.4735 6.26865C5.75461 6.34642 5.97239 6.5992 6.14628 6.80198C6.2185 6.88587 6.32572 7.00976 6.37961 7.04087C6.40739 7.02087 6.49683 6.92365 6.54072 6.7642C6.57516 6.64198 6.56517 6.5342 6.51572 6.47531C6.20461 6.10865 6.22183 5.40309 6.31794 5.14253C6.46905 4.73198 6.94128 4.76253 7.28683 4.78476C7.41572 4.79309 7.53683 4.80142 7.62794 4.78976C7.9735 4.74642 8.08016 4.22031 8.15517 4.11753C8.31739 3.89531 8.81405 3.56031 9.12183 3.35365C8.54211 3.09586 7.91462 2.96298 7.28017 2.96365Z"
                                        fill="#05A54B" />
                                </svg>
                            </div>
                            <p>Skip the hassle of visiting multiple dealers</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="border p-1 rounded-full flex justify-center items-center border-[#05A54B]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"
                                    fill="none">
                                    <path
                                        d="M3.54588 4.14672C4.4313 3.43731 5.53244 3.05158 6.66699 3.05339C7.84755 3.05339 8.93255 3.46227 9.78811 4.14672L10.5953 3.3395L11.3809 4.12505L10.5737 4.93227C11.1613 5.66791 11.5292 6.55451 11.6352 7.49005C11.7412 8.42558 11.5809 9.37202 11.1727 10.2205C10.7645 11.0689 10.1251 11.7849 9.328 12.2859C8.5309 12.787 7.60851 13.0528 6.66699 13.0528C5.72548 13.0528 4.80309 12.787 4.00599 12.2859C3.20888 11.7849 2.56945 11.0689 2.16128 10.2205C1.75311 9.37202 1.59279 8.42558 1.69877 7.49005C1.80475 6.55451 2.17271 5.66791 2.76033 4.93227L1.95311 4.12561L2.73866 3.34005L3.54588 4.14727V4.14672ZM7.22255 7.49783V4.99505L4.44477 8.60894H6.11144V11.1089L8.88922 7.49783H7.22255ZM4.44477 1.38672H8.88922V2.49783H4.44477V1.38672Z"
                                        fill="#05A54B" />
                                </svg>
                            </div>
                            <p>Sell from your home within just 48 hours</p>
                        </div>

                        <div class="flex items-center gap-3">
                            <div class="border p-1 rounded-full flex justify-center items-center border-[#05A54B]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"
                                    fill="none">
                                    <path
                                        d="M8.111 11.9448V13.056H1.44434V11.9448H8.111ZM8.43656 1.21484L12.7577 5.53595L11.9721 6.32262L11.3832 6.12595L10.0071 7.5004L13.1499 10.6432L12.3643 11.4287L9.22211 8.28595L7.88656 9.62151L8.04378 10.2504L7.25767 11.036L2.93656 6.71484L3.72267 5.92929L4.35045 6.08596L7.84711 2.58984L7.651 2.00095L8.43656 1.21484Z"
                                        fill="#05A54B" />
                                </svg>
                            </div>

                            <p>No more haggling with disinterested buyers</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </template>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import { toast } from "vue3-toastify";
import { useRoute, useRouter } from 'vue-router'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ModalAcceptAution } from "@/stores/modalAcceptAution";
import { ModalReview } from "@/stores/modalReview";
import { ModalViewDetails } from "@/stores/modalViewDetails";
import HeaderOptionesSeller from "../../../components/Header/HeaderOptionesSeller.vue";
import CreateAution from "../../../components/Cards/CreateAution.vue";
import CardAutionMobile from "../../../components/Cards/CardAutionMobile.vue";
import { arrayPhotos } from '../../../utils/packPhotos'
export default {

    components: {
        Swiper,
        SwiperSlide,
        HeaderOptionesSeller,
        CreateAution,
        CardAutionMobile
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const isOpen = ref(false)
        const loading = ref(false)
        const changeLayouts = ref(false)
        const storeAutions = useAuctionStore()
        const storeUser = useAuthStore()
        const statusModal = ModalAcceptAution()
        const path = ref(computed(() => route.name))
        const statusModalR = ModalReview()
        const openDecline = ref(false)
        const autionModal = ref(null)
        const data = ref([])
        const statusModalView = ModalViewDetails()
        const changeGridTemplate = () => {
            changeLayouts.value = !changeLayouts.value
            counter.value++
        }
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const index = async () => {
            loading.value = true
            try {
                let res = await storeAutions.index()
                data.value = storeAutions.draft
                data.value.map((autions, index) => {
                    console.log('autions', autions)
                    let counter = 0;
                    let progress = 0;
                    progress = autions.city && counter++
                    progress = autions.dropOffDate && counter++
                    progress = autions.keysNumber && counter++
                    progress = autions.province && counter++
                    progress = autions.vin && counter++
                    progress = autions.vehicleStatus.status && counter++
                    progress = autions.vehicleDetails?.bodyType && counter++
                    progress = autions.vehicleDetails?.brakeCondition && counter++
                    progress = autions.vehicleDetails?.brakeReplacement && counter++
                    progress = autions.vehicleDetails?.color && counter++
                    progress = autions.vehicleDetails?.cylinder && counter++
                    progress = autions.vehicleDetails?.doors && counter++
                    progress = autions.vehicleDetails?.driveTrain && counter++
                    progress = autions.vehicleDetails?.driverLicense && counter++
                    progress = autions.vehicleDetails?.make && counter++
                    progress = autions.vehicleDetails?.model && counter++
                    progress = autions.vehicleDetails?.odometer && counter++
                    progress = autions.vehicleDetails?.originalDocument && counter++
                    progress = autions.vehicleDetails?.suggestedPrice && counter++
                    progress = autions.vehicleDetails?.tireCondition && counter++
                    progress = autions.vehicleDetails?.tireReplacement && counter++
                    progress = autions.vehicleDetails?.transmission && counter++
                    progress = autions.vehicleDetails?.year && counter++
                    if (autions.vehicleDetails.exteriorPhotos.length > 0) {
                        progress = autions.vehicleDetails.exteriorPhotos.length > 0 && counter + 6
                    }
                    if (autions.vehicleDetails.interiorPhotos.length > 0) {
                        progress = autions.vehicleDetails.interiorPhotos.length > 0 && counter + 6
                    }
                    let currentValue = progress;
                    let percentage = (currentValue / 32) * 100
                    autions.percentage = percentage ? Number(percentage.toFixed(0)) : 25
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
                console.log('data.value', data.value)
                loading.value = false
            } catch (error) {
                loading.value = false

            }
        }
        const declineAution = (auction, option) => {
            openDecline.value = true
            autionModal.value = auction
            autionModal.value.option = option
        }
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
        }
        function timeToStart(startDate) {
            if (!startDate) return 0;
            return new Date(startDate) - Date.now();
        }
        const acceptAution = () => {
            loading.value = true
            try {
                let res = storeAutions.acceptAutions(statusModal.dataAutiont._id)
                if (res) {
                    return '200'
                }
            } catch (error) {

            } finally {
                index()
            }

        }
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
            declineAution,
            autionModal,
            openDecline,
            statusModalR,
            statusModalView,
            timeToEnd,
            timeToStart,
            acceptAution,
            index

        };
    },
};
</script>