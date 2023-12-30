<template>
    <header>
        <div v-show="store?.userData?.type == 0">
            <nav class="flex bg-base-black relative shadow-lg px-3 py-2 justify-between flex-row-reverse">
                <div class=" flex items-center">
                    <div class="flex gap-5 ">
                        <IconSearch />
                        <IconNotifications />
                        <div class="relative ">
                            <IconUser @click="toggleAccount" class="cursor-pointer" />
                            <ul :class="openAccount ? 'block' : 'hidden'"
                                class="absolute z-[1000] top-[30px] -left-[60px] m-0 w-full  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block">
                                <li>
                                    <button @click="logout"
                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div name="menu" @click="toggle()" class="text-[30px] cursor-pointer md:hidden">menu</div>
                </div>
                <div class="flex items-center gap-3">
                    <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2">
                        <LogoIcon class="w-full" />
                    </RouterLink>
                    <div :class="open ? ' left-[0%]' : 'left-[-100%]'"
                        class="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh]  flex md:items-center gap-[1.5vw] top-[100%]  px-5 md:py-0 py-5 ">
                        <ul class="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">

                            <RouterLink to="/inicio" :class="path == 'inicio' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Dashboard</p>
                            </RouterLink>
                            <RouterLink to="/action-list"
                                :class="path == 'action-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Auctions List</p>
                            </RouterLink>
                            <RouterLink to="/dealer-list"
                                :class="path == 'dealer-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Dealer List</p>
                            </RouterLink>
                            <RouterLink to="/seller-list"
                                :class="path == 'seller-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Seller List</p>
                            </RouterLink>
                            <RouterLink to="/settings"
                                :class="path == 'config-setting' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Settings</p>
                            </RouterLink>
                            <RouterLink to="/faqs" :class="path == 'faqs' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Faq</p>
                            </RouterLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div v-if="store.userData.type == 1">
            <nav class="flex bg-base-black relative shadow-lg px-3 py-2 justify-between flex-row-reverse">
                <div class=" flex items-center">
                    <div class="flex gap-8 justify-between items-center ">
                        <div class="relative">
                            <svg class="w-6 h-6 text-gray-700 absolute top-3 left-2" fill="none" stroke="white"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <input type="search" placeholder="Search for vehicles by make, model, VIN, etc."
                                class="border-[1px] rounded-[8px] text-white w-full bg-transparent border-[#d3d3d361] py-3 pl-10 pr-3  ">
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"
                                fill="white" />
                        </svg>
                        <IconNotifications />
                        <div class="relative ">
                            <div @click="toggleAccount" class="w-8 h-8 cursor-pointer">
                                <img v-if="store?.userData?.seller?.picture"
                                    class="w-full shadow-md border border-[#e5e5e5]  rounded-full h-full object-contain"
                                    :src="bucket + store?.userData?.seller?.picture" alt="">
                                <img v-else class="w-full shadow-md  rounded-full h-full object-cover"
                                    src="https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA="
                                    alt="">
                            </div>
                            <ul :class="openAccount ? 'block' : 'hidden'"
                                class="absolute z-[1000] top-[30px] -left-[60px] m-0 w-full  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block">
                                <li>
                                    <button @click="logout"
                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">Logout</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div name="menu" @click="toggle()" class="text-[30px] cursor-pointer md:hidden">menu</div>
                </div>
                <div class="flex items-center gap-3">
                    <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2">
                        <LogoIcon class="w-full" />
                    </RouterLink>
                    <div :class="open ? ' left-[0%]' : 'left-[-100%]'"
                        class="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh]  flex md:items-center gap-[1.5vw] top-[100%]  px-5 md:py-0 py-5 ">
                        <ul class="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                            <RouterLink to="/all" :class="path == 'all' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Sell a Car</p>
                            </RouterLink>
                            <RouterLink to="#" :class="path == 'auto-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Sold Auction</p>
                            </RouterLink>
                            <RouterLink to="#" :class="path == 'dealer-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>FAQs</p>
                            </RouterLink>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav v-if="!route?.meta?.hideNavbar" class="bg-[#22282F] flex items-center gap-6 p-5 ">
                <RouterLink to="/all" :class="path == 'all' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                    class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M2.5 9.16667H17.5V10.8333H2.5V9.16667ZM15 15V17.5H13.3333V15H10.8333L14.1667 11.6667L17.5 15H15ZM6.66667 15V17.5H5V15H2.5L5.83333 11.6667L9.16667 15H6.66667ZM15 5H17.5L14.1667 8.33333L10.8333 5H13.3333V2.5H15V5ZM6.66667 5H9.16667L5.83333 8.33333L2.5 5H5V2.5H6.66667V5Z"
                            :fill="path == 'all' ? '#09121F' : '#C2C2C2'" />
                    </svg>
                    <p>All (0)</p>
                </RouterLink>
                <RouterLink to="/upcoming-auctions"
                    :class="path == 'upcoming-auctions' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                    class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M7.5 14.1667C7.5 14.1667 13.3333 15 15.8333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V11.6142C18.2188 11.4292 18.75 10.7766 18.75 10C18.75 9.22342 18.2188 8.57083 17.5 8.38583V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H15.8333C13.3333 5 7.5 5.83333 7.5 5.83333H4.16667C3.24619 5.83333 2.5 6.57952 2.5 7.5V12.5C2.5 13.4205 3.24619 14.1667 4.16667 14.1667H5L5.83333 18.3333H7.5V14.1667ZM9.16667 7.21767C9.73608 7.0955 10.4396 6.92661 11.1994 6.70311C12.5979 6.29178 14.375 5.64385 15.8333 4.64548V15.3545C14.375 14.3562 12.5979 13.7083 11.1994 13.2969C10.4396 13.0734 9.73608 12.9045 9.16667 12.7823V7.21767ZM4.16667 7.5H7.5V12.5H4.16667V7.5Z"
                            :fill="path == 'upcoming-auctions' ? '#09121F' : '#C2C2C2'" />
                    </svg>
                    <p>Upcoming Auctions (0)</p>

                </RouterLink>
                <RouterLink to="/live" :class="path == 'live' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                    class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M15.304 15.3037C18.2329 12.3747 18.2329 7.626 15.304 4.69706L16.4825 3.51855C20.0622 7.09836 20.0622 12.9024 16.4825 16.4822L15.304 15.3037ZM4.69735 4.69706C1.76842 7.626 1.76842 12.3747 4.69735 15.3037L3.51884 16.4822C-0.060968 12.9024 -0.060968 7.09836 3.51884 3.51855L4.69735 4.69706ZM12.9469 12.9466C14.5741 11.3194 14.5741 8.68115 12.9469 7.05399L14.1254 5.87548C16.4035 8.15354 16.4035 11.847 14.1254 14.1251L12.9469 12.9466ZM7.05438 7.05399C5.42718 8.68115 5.42718 11.3194 7.05438 12.9466L5.87586 14.1251C3.5978 11.847 3.5978 8.15354 5.87586 5.87548L7.05438 7.05399ZM10.0007 11.667C10.9211 11.667 11.6673 10.9208 11.6673 10.0003C11.6673 9.07982 10.9211 8.33366 10.0007 8.33366C9.08015 8.33366 8.33398 9.07982 8.33398 10.0003C8.33398 10.9208 9.08015 11.667 10.0007 11.667Z"
                            :fill="path == 'all' ? '#09121F' : '#C2C2C2'" />
                    </svg>
                    <p>Live (0)</p>
                </RouterLink>
                <RouterLink to="/completed" :class="path == 'completed' ? 'bg-primary' : 'bg-[#464B50] text-white'"
                    class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto  ease-linear duration-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M4.55149 3.6932C6.01232 2.43008 7.9166 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39697 18.3327 9.99935C18.3327 11.7794 17.7745 13.4292 16.8237 14.7832L14.166 9.99935H16.666C16.666 6.31745 13.6813 3.33268 9.99935 3.33268C8.20753 3.33268 6.58082 4.03957 5.38287 5.1897L4.55149 3.6932ZM15.4472 16.3055C13.9863 17.5686 12.0821 18.3327 9.99935 18.3327C5.39697 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 8.21923 2.22417 6.56948 3.17502 5.21555L5.83268 9.99935H3.33268C3.33268 13.6813 6.31745 16.666 9.99935 16.666C11.7912 16.666 13.4179 15.9591 14.6159 14.809L15.4472 16.3055Z"
                            :fill="path == 'all' ? '#09121F' : '#C2C2C2'" />
                    </svg>
                    <p>Completed (0)</p>
                </RouterLink>
            </nav>
        </div>
        <div v-if="store.userData.type == 2">
            <nav class="flex bg-base-black relative shadow-lg px-3 py-2 justify-between flex-row-reverse">
                <div class=" flex items-center">
                    <div class="flex gap-5 justify-between items-center ">
                        <div class="relative">
                            <svg class="w-6 h-6 text-gray-700 absolute top-3 left-2" fill="none" stroke="white"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <input type="search" placeholder="Search for vehicles by make, model, VIN, etc."
                                class="border-[1px] rounded-[8px] w-full bg-transparent border-[#d3d3d361] py-3 px-10">
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"
                                fill="white" />
                        </svg>
                        <IconNotifications />
                        <div class="relative ">
                            <div @click="toggleAccount" class="w-8 h-8 cursor-pointer">
                                <img v-if="store?.userData?.dealer?.picture"
                                    class="w-full shadow-md   rounded-full h-full object-cover"
                                    :src=" bucket +  store?.userData?.dealer?.picture" alt="">
                                <img v-else class="w-full shadow-md  rounded-full h-full object-cover"
                                    src="https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA="
                                    alt="">
                            </div>
                            <ul :class="openAccount ? 'block' : 'hidden'"
                                class="absolute z-[1000] top-[30px] -left-[60px] m-0 w-full  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block">
                                <li>
                                    <button @click="logout"
                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div name="menu" @click="toggle()" class="text-[30px] cursor-pointer md:hidden">menu</div>
                </div>
                <div class="flex items-center gap-3">
                    <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2">
                        <LogoIcon class="w-full" />
                    </RouterLink>
                    <div :class="open ? ' left-[0%]' : 'left-[-100%]'"
                        class="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh]  flex md:items-center gap-[1.5vw] top-[100%]  px-5 md:py-0 py-5 ">
                        <ul class="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">

                            <RouterLink to="#" :class="path == 'upcoming' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Dealer Bidding</p>
                            </RouterLink>
                            <RouterLink to="#" :class="path == 'auto-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Sold Auction</p>
                            </RouterLink>
                            <RouterLink to="#" :class="path == 'dealer-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>FAQs</p>
                            </RouterLink>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav v-if="!route?.meta?.hideNavbar" class="bg-[#22282F] flex items-center gap-6 p-5 ">
                <div class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M7.5 14.1667C7.5 14.1667 13.3333 15 15.8333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V11.6142C18.2188 11.4292 18.75 10.7766 18.75 10C18.75 9.22342 18.2188 8.57083 17.5 8.38583V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H15.8333C13.3333 5 7.5 5.83333 7.5 5.83333H4.16667C3.24619 5.83333 2.5 6.57952 2.5 7.5V12.5C2.5 13.4205 3.24619 14.1667 4.16667 14.1667H5L5.83333 18.3333H7.5V14.1667ZM9.16667 7.21767C9.73608 7.0955 10.4396 6.92661 11.1994 6.70311C12.5979 6.29178 14.375 5.64385 15.8333 4.64548V15.3545C14.375 14.3562 12.5979 13.7083 11.1994 13.2969C10.4396 13.0734 9.73608 12.9045 9.16667 12.7823V7.21767ZM4.16667 7.5H7.5V12.5H4.16667V7.5Z"
                            fill="#0B1107" />
                    </svg>
                    <p>Upcoming (0)</p>

                </div>
                <div class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto bg-[#464B50] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M15.304 15.3027C18.2329 12.3738 18.2329 7.62502 15.304 4.69609L16.4825 3.51758C20.0622 7.09739 20.0622 12.9014 16.4825 16.4812L15.304 15.3027ZM4.69735 4.69609C1.76842 7.62502 1.76842 12.3738 4.69735 15.3027L3.51884 16.4812C-0.060968 12.9014 -0.060968 7.09739 3.51884 3.51758L4.69735 4.69609ZM12.9469 12.9456C14.5741 11.3184 14.5741 8.68018 12.9469 7.05301L14.1254 5.8745C16.4035 8.15256 16.4035 11.846 14.1254 14.1241L12.9469 12.9456ZM7.05438 7.05301C5.42718 8.68018 5.42718 11.3184 7.05438 12.9456L5.87586 14.1241C3.5978 11.846 3.5978 8.15256 5.87586 5.8745L7.05438 7.05301ZM10.0007 11.666C10.9212 11.666 11.6673 10.9198 11.6673 9.99934C11.6673 9.07884 10.9212 8.33269 10.0007 8.33269C9.08015 8.33269 8.33398 9.07884 8.33398 9.99934C8.33398 10.9198 9.08015 11.666 10.0007 11.666Z"
                            fill="#C2C2C2" />
                    </svg>
                    <p>Live (102)</p>

                </div>
                <div class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto bg-[#464B50] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M4.55149 3.6932C6.01232 2.43008 7.9166 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39697 18.3327 9.99935C18.3327 11.7794 17.7745 13.4292 16.8237 14.7832L14.166 9.99935H16.666C16.666 6.31745 13.6813 3.33268 9.99935 3.33268C8.20753 3.33268 6.58082 4.03957 5.38287 5.1897L4.55149 3.6932ZM15.4472 16.3055C13.9863 17.5686 12.0821 18.3327 9.99935 18.3327C5.39697 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 8.21923 2.22417 6.56948 3.17502 5.21555L5.83268 9.99935H3.33268C3.33268 13.6813 6.31745 16.666 9.99935 16.666C11.7912 16.666 13.4179 15.9591 14.6159 14.809L15.4472 16.3055Z"
                            fill="#C2C2C2" />
                    </svg>
                    <p>Current Bids (102)</p>
                </div>
                <div class="flex gap-3 h-5 rounded-[8px]  items-center p-5  w-auto bg-[#464B50] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M4.55149 3.6932C6.01232 2.43008 7.9166 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39697 18.3327 9.99935C18.3327 11.7794 17.7745 13.4292 16.8237 14.7832L14.166 9.99935H16.666C16.666 6.31745 13.6813 3.33268 9.99935 3.33268C8.20753 3.33268 6.58082 4.03957 5.38287 5.1897L4.55149 3.6932ZM15.4472 16.3055C13.9863 17.5686 12.0821 18.3327 9.99935 18.3327C5.39697 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 8.21923 2.22417 6.56948 3.17502 5.21555L5.83268 9.99935H3.33268C3.33268 13.6813 6.31745 16.666 9.99935 16.666C11.7912 16.666 13.4179 15.9591 14.6159 14.809L15.4472 16.3055Z"
                            fill="#C2C2C2" />
                    </svg>
                    <p>Completed (102)</p>
                </div>
            </nav>
        </div>

    </header>
</template>
<script >
import { ref, computed, watch, onMounted } from "vue";
import LogoIcon from '@/assets/svg/logo.vue'
import { useRoute, useRouter } from 'vue-router'
import IconSearch from "../icons/iconSearch.vue";
import IconNotifications from "../icons/iconNotifications.vue";
import IconUser from "../icons/iconUser.vue";
import { useAuthStore } from "@/stores/auth";
export default {
    components: {
        LogoIcon,
        IconUser,
        IconNotifications,
        IconSearch
    },
    setup() {
        let open = ref(false)
        let openAccount = ref(false)
        const store = useAuthStore()
        const route = useRoute();
        const router = useRouter();
        const path = ref(computed(() => route.name))
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const toggle = () => {
            open.value = !open.value
        }
        const toggleAccount = () => {
            openAccount.value = !openAccount.value
        }
        const logout = async () => {
            localStorage.clear()
            await router.push({ name: 'home' })
            router.go()

        }
        onMounted(() => {
            console.log('store', store.userData)
        })
        return {
            toggle,
            open,
            LogoIcon,
            path,
            IconUser,
            IconNotifications,
            IconSearch,
            toggleAccount,
            openAccount,
            logout,
            store,
            router,
            route,
            bucket

        };
    },
};
</script>
