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
        <nav class="bg-[#22282F] flex items-center gap-6 p-5 ">
            <RouterLink to="/all" :class="path == 'all' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M2.5 9.16667H17.5V10.8333H2.5V9.16667ZM15 15V17.5H13.3333V15H10.8333L14.1667 11.6667L17.5 15H15ZM6.66667 15V17.5H5V15H2.5L5.83333 11.6667L9.16667 15H6.66667ZM15 5H17.5L14.1667 8.33333L10.8333 5H13.3333V2.5H15V5ZM6.66667 5H9.16667L5.83333 8.33333L2.5 5H5V2.5H6.66667V5Z"
                        :fill="path == 'all' ? '#09121F' : '#C2C2C2'" />
                </svg>
                <p>All ({{ storeAutions.data.length - storeAutions.draft.length }})</p>
            </RouterLink>
            <RouterLink to="/upcoming-auctions"
                :class="path == 'upcoming-auctions' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M7.5 14.1667C7.5 14.1667 13.3333 15 15.8333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V11.6142C18.2188 11.4292 18.75 10.7766 18.75 10C18.75 9.22342 18.2188 8.57083 17.5 8.38583V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H15.8333C13.3333 5 7.5 5.83333 7.5 5.83333H4.16667C3.24619 5.83333 2.5 6.57952 2.5 7.5V12.5C2.5 13.4205 3.24619 14.1667 4.16667 14.1667H5L5.83333 18.3333H7.5V14.1667ZM9.16667 7.21767C9.73608 7.0955 10.4396 6.92661 11.1994 6.70311C12.5979 6.29178 14.375 5.64385 15.8333 4.64548V15.3545C14.375 14.3562 12.5979 13.7083 11.1994 13.2969C10.4396 13.0734 9.73608 12.9045 9.16667 12.7823V7.21767ZM4.16667 7.5H7.5V12.5H4.16667V7.5Z"
                        :fill="path == 'upcoming-auctions' ? '#09121F' : '#C2C2C2'" />
                </svg>
                <p>Upcoming Auctions ({{ storeAutions.upcoming.length }})</p>

            </RouterLink>
            <RouterLink to="/live" :class="path == 'live' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M15.304 15.3037C18.2329 12.3747 18.2329 7.626 15.304 4.69706L16.4825 3.51855C20.0622 7.09836 20.0622 12.9024 16.4825 16.4822L15.304 15.3037ZM4.69735 4.69706C1.76842 7.626 1.76842 12.3747 4.69735 15.3037L3.51884 16.4822C-0.060968 12.9024 -0.060968 7.09836 3.51884 3.51855L4.69735 4.69706ZM12.9469 12.9466C14.5741 11.3194 14.5741 8.68115 12.9469 7.05399L14.1254 5.87548C16.4035 8.15354 16.4035 11.847 14.1254 14.1251L12.9469 12.9466ZM7.05438 7.05399C5.42718 8.68115 5.42718 11.3194 7.05438 12.9466L5.87586 14.1251C3.5978 11.847 3.5978 8.15354 5.87586 5.87548L7.05438 7.05399ZM10.0007 11.667C10.9211 11.667 11.6673 10.9208 11.6673 10.0003C11.6673 9.07982 10.9211 8.33366 10.0007 8.33366C9.08015 8.33366 8.33398 9.07982 8.33398 10.0003C8.33398 10.9208 9.08015 11.667 10.0007 11.667Z"
                        :fill="path == 'live' ? '#09121F' : '#C2C2C2'" />
                </svg>
                <p>Live ({{ data.length }})</p>
            </RouterLink>
            <RouterLink to="/completed" :class="path == 'completed' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M4.55149 3.6932C6.01232 2.43008 7.9166 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39697 18.3327 9.99935C18.3327 11.7794 17.7745 13.4292 16.8237 14.7832L14.166 9.99935H16.666C16.666 6.31745 13.6813 3.33268 9.99935 3.33268C8.20753 3.33268 6.58082 4.03957 5.38287 5.1897L4.55149 3.6932ZM15.4472 16.3055C13.9863 17.5686 12.0821 18.3327 9.99935 18.3327C5.39697 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 8.21923 2.22417 6.56948 3.17502 5.21555L5.83268 9.99935H3.33268C3.33268 13.6813 6.31745 16.666 9.99935 16.666C11.7912 16.666 13.4179 15.9591 14.6159 14.809L15.4472 16.3055Z"
                        :fill="path == 'all' ? '#09121F' : '#C2C2C2'" />
                </svg>
                <p>Completed ({{ storeAutions.completed.length }})</p>
            </RouterLink>
        </nav>
        <div v-if="data?.length > 0" class="relative max-w-[100rem] mx-auto z-50 top-[60px] ">
            <div class="flex justify-between mt-5 gap-4">
                <div class="w-[29%]">
                    <div class="bg-white p-5 shadow-steps">
                        <div class="flex items-center gap-6 mb-4  relative cursor-pointer">
                            <RouterLink to="/account">
                                <img v-if="storeUser.userData?.seller?.picture" class="w-14 h-14 object-cover rounded-full"
                                    :src="bucket + storeUser.userData.seller.picture" alt="">
                                <img v-else class="w-14 h-14 rounded-full" src="@/assets/img/jpg/image.jpg" alt="">
                            </RouterLink>
                            <div>
                                <p class=" font-semibold capitalize ">
                                    <span v-if="storeUser.userData.seller?.firstName"> {{
                                        storeUser.userData.seller?.firstName }}</span> <span
                                        v-if="storeUser.userData.seller?.lastName"> {{ storeUser.userData.seller?.lastName
                                        }}</span>
                                </p>
                                <!--  <p class="text-[#666] text-sm uppercase ">Ottawa, Ontario</p> -->
                            </div>
                            <svg class=" absolute right-0 top-1 " xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                viewBox="0 0 20 21" fill="none">
                                <path
                                    d="M10.9766 10.5006L6.85156 6.3756L8.0299 5.19727L13.3332 10.5006L8.0299 15.8039L6.85156 14.6256L10.9766 10.5006Z"
                                    fill="#858585" />
                            </svg>
                        </div>
                        <hr class="border-[#cfcfcf] border-1 ">
                        <div class="flex pt-5 cursor-pointer justify-between">
                            <p class="font-medium">Draft <span class="text-[#858585]">{{ storeAutions?.draft?.length
                            }}</span></p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 21" fill="none">
                                <path
                                    d="M10.9766 10.5006L6.85156 6.3756L8.0299 5.19727L13.3332 10.5006L8.0299 15.8039L6.85156 14.6256L10.9766 10.5006Z"
                                    fill="#858585" />
                            </svg>
                        </div>
                        <RouterLink to="/all/create"
                            class="btn w-full bg-base-black mt-7 flex gap-2 justify-center items-center text-primary ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 17" fill="none">
                                <path
                                    d="M7.83398 7.83398V3.83398H9.16732V7.83398H13.1673V9.16732H9.16732V13.1673H7.83398V9.16732H3.83398V7.83398H7.83398Z"
                                    fill="#C1F861" />
                            </svg>
                            <p class="text-primary pt-1">Create Auction</p>
                        </RouterLink>
                    </div>
                </div>
                <div class="w-[70%]">
                    <div class="flex items-center justify-between mb-4">
                        <p class=" font-semibold ">{{ data?.length }} Vehicles</p>
                        <div class="flex items-center gap-2 ">
                            <p class="mt-2">Sort by:</p>
                            <div class="flex items-center gap-5">
                                <div class="navbar-right relative">
                                    <button @click="isOpen = !isOpen"
                                        class="flex gap-2 rounded-md  shadow-md px-2 bg-white items-center">
                                        <p class="p-2 pb-1">Auction Status & Date</p>
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
                                        <a href=""
                                            class="text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">Auction
                                            Title
                                        </a>
                                        <a href=""
                                            class="text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">Auction
                                            Start</a>

                                    </div>
                                </div>
                                <div class="shadow-md  rounded-md flex bg-white">
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
                        </div>
                    </div>
                    <div
                        :class="changeLayouts ? 'grid grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up  animate-ease-in-out animate-delay-200'">
                        <div v-for="(auction, index) in  data " :key="index"
                            class="bg-white flex  mb-7 gap-5 items-start shadow-steps  w-full "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <div class="w-full flex   p-5 sm:p-0 relative" :class="changeLayouts ? 'flex-col' : ''">
                                <p
                                    class="font-semibold text-white z-50 fixed left-0 bg-[#1F94F0] rounded-lg ml-2 mt-2 px-4 py-1">
                                    Live</p>
                                <swiper pagination :modules="modules" :slides-per-view="1" class="swiper-autions"
                                    :class="changeLayouts ? 'w-full' : 'w-[40%]'">
                                    <swiper-slide v-for="(img, index) in auction?.photos" :key="index">

                                        <img class="w-full h-full object-cover" :src="bucket + img" alt="">
                                    </swiper-slide>
                                    <div v-if="!auction?.photos" class=" absolute w-full h-full top-0 ">
                                        <img class="w-full h-full object-cover" src="../../../assets/img/jpg/image.jpg"
                                            alt="">
                                    </div>
                                </swiper>
                                <div class="w-full flex justify-between gap-3 " :class="changeLayouts ? 'flex-col' : ''">
                                    <div @click="statusModal.openModal({ isActive: true, data: auction })"
                                        class="flex p-5 cursor-pointer flex-col gap-3">
                                        <div class="">
                                            <div class="font-bold text-xl">{{ auction?.vehicleDetails?.model }}</div>
                                            <p class=" text-base">
                                                {{ auction?.city }}, {{ auction?.province }}
                                            </p>
                                        </div>
                                        <div class="flex gap-4" :class="changeLayouts ? 'flex-col' : ''">
                                            <div class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p>{{ auction.vehicleDetails.vin }}</p>
                                            </div>
                                            <div class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p>{{ auction?.vehicleDetails?.odometer }} Kilometers</p>
                                            </div>
                                        </div>
                                        <div class="flex gap-4" :class="changeLayouts ? 'flex-col' : ''">
                                            <div class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p>{{ auction?.vehicleDetails?.color }}</p>
                                            </div>
                                            <div class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.6673 13.3327H3.33398V13.9993C3.33398 14.3675 3.0355 14.666 2.66732 14.666H2.00065C1.63246 14.666 1.33398 14.3675 1.33398 13.9993V7.99935L3.00954 3.53118C3.2047 3.01078 3.70219 2.66602 4.25798 2.66602H11.7433C12.2991 2.66602 12.7966 3.01078 12.9918 3.53118L14.6673 7.99935V13.9993C14.6673 14.3675 14.3689 14.666 14.0007 14.666H13.334C12.9658 14.666 12.6673 14.3675 12.6673 13.9993V13.3327ZM2.75798 7.99935H13.2433L11.7433 3.99935H4.25798L2.75798 7.99935ZM4.33398 11.3327C4.88627 11.3327 5.33398 10.8849 5.33398 10.3327C5.33398 9.78042 4.88627 9.33268 4.33398 9.33268C3.7817 9.33268 3.33398 9.78042 3.33398 10.3327C3.33398 10.8849 3.7817 11.3327 4.33398 11.3327ZM11.6673 11.3327C12.2196 11.3327 12.6673 10.8849 12.6673 10.3327C12.6673 9.78042 12.2196 9.33268 11.6673 9.33268C11.1151 9.33268 10.6673 9.78042 10.6673 10.3327C10.6673 10.8849 11.1151 11.3327 11.6673 11.3327Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p>{{ auction?.vehicleDetails?.driveTrain }}</p>
                                            </div>
                                        </div>
                                        <div class="flex gap-4 "
                                            :class="changeLayouts ? ' p-5 whitespace-nowrap  gap-5 overflow-x-auto overflow-y-hidden ' : ''">
                                            <div class="bg-[#F0F0F0] flex px-5 py-1 gap-3 rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p>{{ auction?.vehicleDetails?.tireCondition }}</p>
                                            </div>
                                            <div class="bg-[#F0F0F0] flex  px-5 py-1  gap-3 rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p>{{ auction?.vehicleDetails?.rotorCondition }}</p>
                                            </div>
                                        </div>

                                        <RouterLink to="#" class="flex gap-4" :class="changeLayouts ? 'flex-col' : ''">
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
                                    <div :class="changeLayouts ? 'w-full' : 'w-[40%] grid place-content-between'"
                                        class="border-l-2  border-[#E0E0E0]">
                                        <div class="flex p-5  pl-4 ga justify-between "
                                            :class="changeLayouts ? 'flex-row' : 'flex-col '">
                                            <div class="space-y-1"
                                                :class="changeLayouts ? 'flex flex-col justify-between items-start' : ''">
                                                <p>Current bid</p>
                                                <p class=" font-medium text-base-black  ">$8000 <span
                                                        class="text-[#666666] mt-2">/24
                                                        Bids
                                                    </span>
                                                </p>
                                            </div>
                                            <div
                                                :class="changeLayouts ? 'flex justify-between items-start flex-col' : 'space-y-2 flex items-center gap-2'">
                                                <p>Auction ends in </p>
                                                <p class="text-[#FF9A02] font-medium !m-0">
                                                    <vue-countdown :time="timeToEnd(auction.startDate, auction.duration)"
                                                        v-slot="{ days, hours, minutes, seconds }">
                                                        <div class="flex items-center gap-1">
                                                            <!--   <p v-if="days > 0" class="flex gap-1 items-center">{{ days }} </p> -->
                                                            <p v-if="hours > 0" class="flex gap-1 items-center">{{ hours }}
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
                        <img class="object-cover" src="../../../assets/svg/vehiculoAll.svg" alt="">
                    </div>
                    <div>
                        <h1 class="text-5xl font-semibold text-blue-dark ">
                            Get the best value <br>
                            for your car with <br> AutoSensei !
                        </h1>
                        <p>Let the bids begin, post your auction, sell your car quick as 48 hours.</p>
                    </div>
                    <RouterLink to="/all/create" @click="onSteps"
                        class="w-full btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create My Auction
                    </RouterLink>
                </div>
                <div>
                    <h1 class="font-bold ">Benefits of selling your car on AutoSensei:</h1>
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
        <ModalViewDetailsVue v-if="statusModal.isActive" />

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
import { ModalViewDetails } from "@/stores/modalViewDetails";
import { enumState } from "@/utils/auction-status.enum";
import ModalViewDetailsVue from '../../../components/Modals/ModalViewDetails/ModalViewDetails.vue'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {

    components: {
        Swiper,
        SwiperSlide,
        ModalViewDetailsVue
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const isOpen = ref(false)
        const loading = ref(false)
        const changeLayouts = ref(false)
        const storeAutions = useAuctionStore()
        const storeUser = useAuthStore()
        const path = ref(computed(() => route.name))
        const statusModal = ModalViewDetails()

        const data = ref([])
        const changeGridTemplate = () => {
            changeLayouts.value = !changeLayouts.value
        }
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const index = async () => {
            loading.value = true
            try {
                let res = await storeAutions.index()
                console.log('res', res)
                if (res) {
                    data.value = storeAutions.live
                    data.value.map((autions, index) => {
                        let photos = []
                        if (autions?.vehicleDetails?.additionalDocuments,
                            autions?.vehicleDetails?.exteriorPhotos,
                            autions?.vehicleDetails?.interiorPhotos,
                            autions?.vehicleDetails?.vehicleDamage) {
                            var d = photos.concat(
                                autions?.vehicleDetails?.additionalDocuments,
                                autions?.vehicleDetails?.exteriorPhotos,
                                autions?.vehicleDetails?.interiorPhotos,
                                autions?.vehicleDetails?.vehicleDamage
                            );
                            return autions.photos = d
                        } else {
                            return autions.photos = null
                        }

                    })
                    console.log('Data Seller', data.value)
                    console.log('storeAutions.draft', storeAutions.live)
                }

            } catch (error) {
                console.log('error', error)

            } finally {
                loading.value = false
            }
        }
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
        }
        function timeConvert(n) {
            var num = n;
            var hours = (num / 60);
            var rhours = Math.floor(hours);
            var minutes = (hours - rhours) * 60;
            var rminutes = Math.round(minutes);
            return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
        }
        onMounted(() => {
            let resTime = timeConvert(45000000)
            console.log('resTime', resTime)
            index()
            console.log('bucket.value', bucket.value)

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
            timeToEnd

        };
    },
};
</script>





  