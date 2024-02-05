<template>
    <div>
        <nav class="bg-[#22282F] flex items-center gap-6 p-5 ">
            <RouterLink to="/upcoming" :class="path == 'upcoming' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path
                        d="M5.5 12.1667C5.5 12.1667 11.3333 13 13.8333 15.5H14.6667C15.1269 15.5 15.5 15.1269 15.5 14.6667V9.61417C16.2188 9.42917 16.75 8.77658 16.75 8C16.75 7.22342 16.2188 6.57083 15.5 6.38583V1.33333C15.5 0.8731 15.1269 0.5 14.6667 0.5H13.8333C11.3333 3 5.5 3.83333 5.5 3.83333H2.16667C1.24619 3.83333 0.5 4.57952 0.5 5.5V10.5C0.5 11.4205 1.24619 12.1667 2.16667 12.1667H3L3.83333 16.3333H5.5V12.1667ZM7.16667 5.21767C7.73608 5.0955 8.43958 4.92661 9.19942 4.70311C10.5979 4.29178 12.375 3.64385 13.8333 2.64548V13.3545C12.375 12.3562 10.5979 11.7083 9.19942 11.2969C8.43958 11.0734 7.73608 10.9045 7.16667 10.7823V5.21767ZM2.16667 5.5H5.5V10.5H2.16667V5.5Z"
                        :fill="path == 'upcoming' ? '#09121F' : '#C2C2C2'" />
                </svg>
                <p>Upcoming ({{ storeAutions?.upcoming?.length }})</p>
            </RouterLink>
            <RouterLink to="/liveDealer" :class="path == 'liveDealer' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M15.304 15.3037C18.2329 12.3747 18.2329 7.626 15.304 4.69706L16.4825 3.51855C20.0622 7.09836 20.0622 12.9024 16.4825 16.4822L15.304 15.3037ZM4.69735 4.69706C1.76842 7.626 1.76842 12.3747 4.69735 15.3037L3.51884 16.4822C-0.060968 12.9024 -0.060968 7.09836 3.51884 3.51855L4.69735 4.69706ZM12.9469 12.9466C14.5741 11.3194 14.5741 8.68115 12.9469 7.05399L14.1254 5.87548C16.4035 8.15354 16.4035 11.847 14.1254 14.1251L12.9469 12.9466ZM7.05438 7.05399C5.42718 8.68115 5.42718 11.3194 7.05438 12.9466L5.87586 14.1251C3.5978 11.847 3.5978 8.15354 5.87586 5.87548L7.05438 7.05399ZM10.0007 11.667C10.9211 11.667 11.6673 10.9208 11.6673 10.0003C11.6673 9.07982 10.9211 8.33366 10.0007 8.33366C9.08015 8.33366 8.33398 9.07982 8.33398 10.0003C8.33398 10.9208 9.08015 11.667 10.0007 11.667Z"
                        :fill="path == 'liveDealer' ? '#09121F' : '#C2C2C2'" />
                </svg>
                <p>Live ({{ storeAutions?.live?.length }})</p>
            </RouterLink>
            <RouterLink to="/current-bits" :class="path == 'current-bits' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M4.55149 3.6932C6.01232 2.43008 7.9166 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39697 18.3327 9.99935C18.3327 11.7794 17.7745 13.4292 16.8237 14.7832L14.166 9.99935H16.666C16.666 6.31745 13.6813 3.33268 9.99935 3.33268C8.20753 3.33268 6.58082 4.03957 5.38287 5.1897L4.55149 3.6932ZM15.4472 16.3055C13.9863 17.5686 12.0821 18.3327 9.99935 18.3327C5.39697 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 8.21923 2.22417 6.56948 3.17502 5.21555L5.83268 9.99935H3.33268C3.33268 13.6813 6.31745 16.666 9.99935 16.666C11.7912 16.666 13.4179 15.9591 14.6159 14.809L15.4472 16.3055Z"
                        :fill="path == 'current-bits' ? '#09121F' : '#C2C2C2'" />
                </svg>
                <p>Current Bids ({{ storeAutions?.currentBids?.length }})</p>

            </RouterLink>

            <RouterLink to="/completed-buyer" :class="path == 'completed-buyer' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M8.33876 1.75273C7.17079 1.37464 5.9011 1.90056 5.34256 2.99381L4.67107 4.30812C4.59129 4.46428 4.46428 4.59129 4.30812 4.67107L2.99381 5.34256C1.90056 5.9011 1.37464 7.17079 1.75273 8.33876L2.20728 9.74292C2.26128 9.90976 2.26128 10.0894 2.20728 10.2563L1.75273 11.6604C1.37464 12.8284 1.90056 14.0981 2.99381 14.6567L4.30812 15.3281C4.46428 15.4079 4.59129 15.5349 4.67107 15.6911L5.34256 17.0054C5.9011 18.0987 7.17079 18.6246 8.33876 18.2465L9.74292 17.7919C9.90976 17.7379 10.0894 17.7379 10.2563 17.7919L11.6604 18.2465C12.8284 18.6246 14.0981 18.0987 14.6567 17.0054L15.3281 15.6911C15.4079 15.5349 15.5349 15.4079 15.6911 15.3281L17.0054 14.6567C18.0987 14.0981 18.6246 12.8284 18.2465 11.6604L17.7919 10.2563C17.7379 10.0894 17.7379 9.90976 17.7919 9.74292L18.2465 8.33876C18.6246 7.17079 18.0987 5.9011 17.0054 5.34256L15.6911 4.67107C15.5349 4.59129 15.4079 4.46428 15.3281 4.30812L14.6567 2.99381C14.0981 1.90056 12.8284 1.37464 11.6604 1.75273L10.2563 2.20728C10.0894 2.26128 9.90976 2.26129 9.74292 2.20728L8.33876 1.75273ZM6.82674 3.75208C7.01292 3.38767 7.43616 3.21236 7.82548 3.33839L9.22967 3.79293C9.73018 3.95496 10.269 3.95496 10.7695 3.79293L12.1738 3.33839C12.563 3.21236 12.9863 3.38767 13.1724 3.75207L13.8439 5.06639C14.0833 5.53487 14.4643 5.91591 14.9328 6.15526L16.2471 6.82674C16.6115 7.01292 16.7868 7.43616 16.6608 7.82548L16.2063 9.22967C16.0443 9.73018 16.0443 10.269 16.2063 10.7695L16.6608 12.1738C16.7868 12.563 16.6115 12.9863 16.2471 13.1724L14.9328 13.8439C14.4643 14.0833 14.0833 14.4643 13.8439 14.9328L13.1724 16.2471C12.9863 16.6115 12.563 16.7868 12.1738 16.6608L10.7695 16.2063C10.269 16.0443 9.73018 16.0443 9.22967 16.2063L7.82548 16.6608C7.43616 16.7868 7.01292 16.6115 6.82674 16.2471L6.15526 14.9328C5.91591 14.4643 5.53487 14.0833 5.06639 13.8439L3.75208 13.1724C3.38767 12.9863 3.21236 12.563 3.33839 12.1738L3.79293 10.7695C3.95496 10.269 3.95496 9.73018 3.79293 9.22967L3.33839 7.82548C3.21236 7.43616 3.38767 7.01292 3.75208 6.82674L5.06639 6.15526C5.53487 5.91591 5.91591 5.53487 6.15526 5.06639L6.82674 3.75208ZM5.63259 9.79742L9.16809 13.3329L15.0607 7.4404L13.8822 6.26189L9.16809 10.9759L6.81111 8.61884L5.63259 9.79742Z"
                        :fill="path == 'completed-buyer' ? '#09121F' : '#C2C2C2'" />
                </svg>
                <p>Completed ({{ storeAutions?.completed?.length }})</p>
            </RouterLink>
        </nav>
        <div v-if="loading" class=" left-0 top-0 absolute w-full h-full flex justify-center items-center">
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
        <div v-else class="relative max-w-[100rem] mx-auto z-50 top-[60px] ">
            <div v-if="data.length == 0" class="flex w-full justify-center gap-6 items-center custom-header-all">
                <div class="flex gap-2 justify-center items-center flex-col">
                    <div>
                        <img class="object-cover " src="../../../assets/svg/upcoming.svg" alt="">
                    </div>
                    <h3 class="text-center text-lg"><strong>No current bits vehicles</strong></h3>
                    <p class="text-center">Check back later for new vehicles that will be coming up for auction soon</p>
                </div>
            </div>
            <div v-else class="flex justify-between mt-5 gap-4">
                <div class="w-[29%]">
                    <div class="bg-white p-5 shadow-steps">
                        <p class=" text-2xl font-semibold  ">Filter Auction</p>
                        <div class="mt-4 flex flex-col gap-4">
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Reminder Status</label>
                                <select
                                    class=" border border-[#E0E0E0] text-[#858585] p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>All</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Make</label>
                                <select
                                    class=" border border-[#E0E0E0] text-[#858585] p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>Select make</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Model</label>
                                <select
                                    class=" border-none text-[#858585] p-3 bg-[#F0F0F0]  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>Select model</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Trim</label>
                                <select
                                    class=" border-none text-[#858585] p-3 bg-[#F0F0F0]  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>Select trim</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Year</label>
                                <div class="flex justify-center gap-6 items-center ">
                                    <VueDatePicker year-picker :min-date="new Date()" class="custom-picker">
                                        <template #calendar-header="{ index, day }">
                                            <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                                                {{ day }}
                                            </div>
                                        </template>
                                    </VueDatePicker>
                                    <p> - </p>
                                    <VueDatePicker year-picker :min-date="new Date()" class="custom-picker">
                                        <template #calendar-header="{ index, day }">
                                            <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                                                {{ day }}
                                            </div>
                                        </template>
                                    </VueDatePicker>
                                </div>

                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Body Type</label>
                                <select
                                    class=" border border-[#E0E0E0] text-[#858585] p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>Select body type</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Cylinder</label>
                                <select
                                    class=" border border-[#E0E0E0] text-[#858585] p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>Select cylinder</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Transmission</label>
                                <select
                                    class=" border border-[#E0E0E0] text-[#858585] p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>Select transmission</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Doors</label>
                                <select
                                    class=" border border-[#E0E0E0] text-[#858585] p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>Select doors</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Drivetrain</label>
                                <select
                                    class=" border border-[#E0E0E0] text-[#858585] p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>Select doors</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Vehicle Condition</label>
                                <select
                                    class=" border border-[#E0E0E0] text-[#858585] p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>Select condition</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Exterior Color</label>
                                <div class="grid grid-cols-3  place-items-start gap-4">
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-black" value="black" name="color-redio">
                                        Black
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-white" value="white" name="color-redio">
                                        White
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-silver" value="silver"
                                            name="color-redio">
                                        Silver
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-grey" value="grey" name="color-redio">
                                        Grey
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-greendark" value="greenDark"
                                            name="color-redio"> Green
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-brown" value="brown" name="color-redio">
                                        Brown
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-red" value="red" name="color-redio"> Red
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-yellow" value="yellow"
                                            name="color-redio">
                                        Yellow
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-green" value="green" name="color-redio">
                                        Green
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-blue" value="blue" name="color-redio">
                                        Blue
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">

                                        Other
                                    </label>
                                </div>
                            </div>
                            <div class="w-full">
                                <label class="font-medium text-base " for="">Kilometers</label>
                                <div class="flex justify-between items-center gap-6 ">
                                    <input
                                        class="p-2 w-full mt-3 uppercase  border border-[#E0E0E0] text-[#858585] rounded-lg"
                                        placeholder="0                                 Kms" type="number">
                                    <p>-</p>
                                    <input type="number"
                                        class="p-2 w-full mt-3 uppercase  border border-[#E0E0E0] text-[#858585] rounded-lg"
                                        placeholder="0                                 Kms">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[70%]">
                    <div class="flex items-center justify-between mb-4">
                        <p class=" font-semibold " v-if="data.length > 0">{{ data.length }} Vehicles</p>
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
                                            class="text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">Account
                                            Settings</a>
                                        <a href=""
                                            class="text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">Support</a>
                                        <a
                                            class="text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">Sign
                                            Out</a>
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
                        <div v-for="(aution, index) in data" :key="index"
                            class="bg-white flex hover:shadow-lg  duration-200 transition-all ease-in  mb-7 gap-5 items-start shadow-steps  w-full "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <div class="w-full flex   p-5 sm:p-0 relative" :class="changeLayouts ? 'flex-col' : ''">
                                <swiper pagination :modules="modules" :slides-per-view="1" class="swiper-autions"
                                    :class="changeLayouts ? 'w-full' : 'w-[40%]'">
                                    <swiper-slide v-for="(img, indexPhoto) in aution.photos" :key="indexPhoto">
                                        <!--  <p class="font-semibold fixed left-0 bg-[#FBDB17] rounded-lg ml-2 mt-2 px-4 py-1">
                                        Bids
                                        Complete</p> -->
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
                                        <div class="flex gap-4 mt-5 " :class="changeLayouts ? 'flex-col' : ''">
                                            <RouterLink :to="{ name: 'inbox', params: { id: aution._id } }"
                                                class=" w-fit flex gap-3 cursor-pointer rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z"
                                                        fill="#0A0A0A" />
                                                </svg>
                                                <p class="capitalize  ">{{ aution.owner.seller.firstName }} {{
                                                    aution.owner.seller.lastName }}</p>
                                            </RouterLink>
                                        </div>
                                    </RouterLink>
                                    <div :class="changeLayouts ? 'w-full' : 'w-[40%] flex flex-col'"
                                        class="border-l-2  border-[#E0E0E0]">
                                        <div class="flex  p-4 pt-1  justify-between "
                                            :class="changeLayouts ? 'flex-row' : 'flex-col h-full '">
                                            <div class=" flex w-full  justify-between items-center">
                                                <div class="flex gap-3 items-center justify-center flex-col">
                                                    <p>Expected drop off date</p>
                                                    <p class="text-xl font-medium">{{
                                                        moment(aution.dropOffDate).format('MMMM DD, YYYY') }}</p>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="flex justify-between items-center w-full p-5">
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

                                        <div class="flex gap-4 p-2 justify-between w-full">
                                            <button class="btn w-full bg-primary flex gap-2 items-center text-base-black">
                                                Vehicle Received
                                            </button>
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
</template>
<script>
import { ref, onMounted, computed, watch } from "vue";
import { toast } from "vue3-toastify";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import { useRoute, useRouter } from 'vue-router'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import moment from "moment";
export default {

    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const isOpen = ref(false)
        const loading = ref(false)
        const changeLayouts = ref(false)
        const changeGridTemplate = () => {
            changeLayouts.value = !changeLayouts.value
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
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const data = ref([])
        const storeAutions = useAuctionStore()
        const path = ref(computed(() => route.name))
        const route = useRoute();
        const index = async () => {
            loading.value = true
            try {
                await storeAutions.index()
                let res = await storeAutions.indexCurrentBids()
                console.log('res', res)
                data.value = storeAutions?.completed
                data.value.map((autions, index) => {
                    const formatter = new Intl.NumberFormat();
                    autions.vehicleDetails.odometer = formatter.format(autions.vehicleDetails.odometer)
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
                console.log('Data Seller', data.value)
            } catch (error) {
                console.log('error', error)

            } finally {
                loading.value = false
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
            modules: [Navigation, Pagination, Scrollbar, A11y],
            data,
            bucket,
            formData,
            path,
            storeAutions,
            authStore,
            index,
            moment

        };
    },
};
</script>

