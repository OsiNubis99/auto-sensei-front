<template>
    <header>
        <div v-if="path == 'login' || path == 'signup'" class="h-10 p-6 flex justify-start  items-center bg-base-black">
            <div class="flex items-center gap-5 cursor-pointer" @click="back">
                <IconArrow class="rotate-90" />
                <p class="text-sm text-white font-medium">Back to Home</p>
            </div>
        </div>
        <div class="font-sans antialiased" id="app">
            <nav :class="[(path == 'login' || path == 'signup' ? 'relative bg-blue-dark grid  md:grid-cols-2' : 'fixed'), (path == 'recover-password' || path == 'recover-password-auth' ? 'bg-blue-dark ' : ''),
        (scrollPosition > 100 ? '!bg-blue-dark  z-[500] ease-linear duration-300 transition-all' : 'ease-linear duration-300 transition-all'), (path == 'contact-us' && 'shadow-md')]"
                class="flex py-2 px-1 md:p-4   top-0 z-50 items-center w-full justify-between md:flex-wrap bg-teal md:px-20 md:py-6">
                <div class="flex items-center cursor-pointer flex-no-shrink text-white mr-6">
                    <LogoBlack class="md:w-[80%]" v-if="path == 'contact-us' && scrollPosition < 110" />
                    <LogoIcon v-else
                        :class="path == 'login' || path == 'signup' ? 'w-[50%] md:w-[30%]' : 'w-[90%] md:w-fit'" />
                    <p v-if="path == 'login' || path == 'signup'"
                        class="text-primary pl-2  flex items-center md:text-2xl font-normal">
                        <span v-if="route.params.rol == 'sellers'">For Sellers</span>
                        <span v-if="route.params.rol == 'dealers'">For Dealer</span>
                    </p>
                </div>
                <div v-if="storeUser?.userData?._id" class="block  lg:hidden">
                    <div class="flex justify-center gap-2 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div class="relative">
                            <div class="bg-primary absolute right-0 rounded-full h-2 w-2 bord"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <button @click="toggle"
                            class="flex items-center px-3 py-2 text-white  rounded text-teal-lighter  hover:text-white hover:border-white">
                            <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div v-else class="flex md:hidden">
                    <RouterLink to="/login/sellers"
                        class=" text-xs px-4 py-2 rounded-md bg-transparent text-white border border-[#e5e5e5]">
                        Login
                    </RouterLink>
                    <button @click="toggle"
                        class="flex items-center px-3 py-2 text-white  rounded text-teal-lighter  hover:text-white hover:border-white">
                        <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div :class="(path == 'login' || path == 'signup' ? 'justify-end' : '')"
                    class="w-full flex-grow hidden  md:flex sm:items-center sm:w-auto">
                    <div :class="[(path === 'login' || path === 'signup' ? 'hidden' : 'flex'), (open && 'flex-col p-5')]"
                        class="text-sm gap-6 sm:flex-grow text-white">
                        <p v-if="open" @click="open = false"
                            class="text-2xl absolute right-4 top-2 font-extrabold text-white">X</p>
                        <RouterLink
                            :class="[((path == 'contact-us' && scrollPosition < 110) && 'text-base-black'), (path == 'home' && '!text-primary')]"
                            class="font-medium text-sm" to="/">Home</RouterLink>
                       <!--  <RouterLink
                            :class="[((path == 'contact-us' && scrollPosition < 110) && 'text-base-black'), (path == 'sold-auctions' && '!text-primary')]"
                            class="font-medium text-sm" to="/sold-auctions">Sold Auctions</RouterLink> -->
                        <RouterLink
                            :class="[((path == 'contact-us' && scrollPosition < 110) && 'text-base-black'), (path == 'how-it-works' && '!text-primary')]"
                            class="font-medium text-sm" to="/how-it-works">How It Works?</RouterLink>
                        <RouterLink
                            :class="[((path == 'contact-us' && scrollPosition < 110) && 'text-base-black'), (path == 'about' && '!text-primary')]"
                            class="font-medium text-sm" to="/about">About</RouterLink>
                        <RouterLink
                            :class="[((path == 'contact-us' && scrollPosition < 110) && 'text-base-black'), (path == 'contact-us' && '!text-primary')]"
                            class="font-medium text-sm" to="/contact-us">Contact Us</RouterLink>
                        <RouterLink v-if="!store?.userData?._id"
                            :class="[((path == 'contact-us' && scrollPosition < 1) && 'text-base-black')]"
                            class="font-medium text-sm" to="/login/dealers">Dealer Page</RouterLink>
                    </div>
                    <div class="flex mt-4 justify-center gap-4 items-center md:pr-7">
                        <!-- <div class="switch">
                            <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox"
                                @change="(event) => {
                                    handleChangeLang(event.target.checked);
                                }
                                    " />
                            <label for="language-toggle"></label>
                            <span class="on">EN</span>
                            <span class="off">ES</span>
                        </div> -->

                        <RouterLink v-if="store?.rol" :to="store?.userData?.type == 0 && '/inicio' ||
            store?.userData?.type == 1 && '/all' ||
            store?.userData?.type == 2 && '/upcoming'" class="btn bg-primary text-base-black">
                            Dashboard
                        </RouterLink>
                        <template v-else>
                            <RouterLink
                                :to="[path == 'login' ? `/signup/${route.params.rol}` : `/login/${route.params.rol}`]">
                                <p class="text-white text-sm font-medium">
                                    <span v-if="path == 'login'">Don’t have an account?</span>
                                    <span v-if="path == 'signup'"> Already have an account?</span>
                                </p>
                            </RouterLink>
                            <RouterLink v-if="path !== 'login'" :to="path == 'home' || path == 'about' || path == 'sold-auctions' ||
            path == 'how-it-works' ||
            path == 'contact-us' ? `/login/sellers` : `/login/${route.params.rol}`"
                                :class="path == 'signup' ? 'bg-primary text-black' : 'bg-blue-dark text-white'"
                                class="px-5 py-2 md:pt-[9px] md:px-[22px] md:pb-[11px] flex justify-center items-center rounded-[8px] font-[600] text-base capitalize ">
                                <span v-if="path == 'signup'">Sign In</span>
                                <span v-else>Login</span>
                            </RouterLink>
                            <RouterLink v-if="path !== 'signup'" :to="path == 'home' ||
            path == 'about' ||
            path == 'sold-auctions' ||
            path == 'how-it-works' ||
            path == 'contact-us'
            ? `/signup/sellers` : `/signup/${route.params.rol}`"
                                class="px-5 bg-primary py-2 md:pt-[9px] md:px-[22px] md:pb-[11px] flex justify-center items-center rounded-[8px] font-[600] text-base capitalize">
                                Sign Up
                            </RouterLink>
                        </template>

                    </div>
                </div>
            </nav>

            <template v-if="storeUser?.userData?._id">
                <div v-show="open"
                    class="fixed bg-[#0b1107b5] left-0 animation-menu-modal top-0 h-screen w-full z-[580]">
                </div>
                <nav v-show="open" class="fixed animation-menu-modal top-0 md:hidden z-[600] bg-[#141f0d] w-full  p-5">
                    <div class=" flex gap-3 justify-between items-center">
                        <div class=" flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21"
                                fill="none">
                                <path
                                    d="M15.5849 6.57865C15.8313 6.64133 15.9613 6.60303 15.9921 6.55428C15.6419 6.05059 14.6254 6.0622 14.3322 6.64597C14.3163 6.76319 14.3745 6.81889 14.4486 6.80148C14.7258 6.43938 15.4103 6.4359 15.5849 6.57865Z"
                                    fill="#C1F861" />
                                <path
                                    d="M14.9989 7.16585C14.8962 7.26798 15.2579 7.25173 15.4872 7.24825C15.7165 7.24477 15.7678 7.28191 15.8762 7.33994C15.9846 7.39797 16.126 7.28191 16.069 7.19835C15.8853 6.93257 15.2715 6.8966 14.9989 7.16469V7.16585Z"
                                    fill="#C1F861" />
                                <path
                                    d="M16.4033 3.10306C10.0753 -0.613112 3.06612 -0.314843 0.747996 3.77039C-1.57013 7.85562 1.68004 14.1796 8.00698 17.8969C14.3351 21.6131 21.3442 21.3148 23.6623 17.2296C25.9804 13.1444 22.7303 6.82039 16.4033 3.10306ZM12.9376 16.3476C9.18087 15.1533 10.6981 10.8859 11.1088 10.1814C11.1088 10.1814 10.5419 9.43053 10.7552 8.81078C10.8499 9.35277 11.3427 10.1849 11.8641 10.4959C11.9154 10.5261 12.1025 10.6097 12.1641 10.4251C11.734 10.1698 11.0632 9.24251 11.0461 8.59375C11.029 7.94499 11.7363 7.58057 12.374 8.58447C13.0117 9.58837 12.5463 10.0491 12.5736 11.2178C12.601 12.3877 13.6814 13.6933 14.7697 14.0125C14.5883 13.8616 14.343 13.2825 14.3453 13.0144C14.4799 13.25 15.1735 13.6829 15.3219 14.7761C15.5181 16.2234 14.2655 16.77 12.9364 16.3476H12.9376ZM21.707 14.4059C21.0978 15.4795 20.0665 16.2118 18.7774 16.5971C17.5829 16.9534 16.3315 16.2431 15.9778 15.0292C15.9151 14.8144 15.8489 14.6021 15.777 14.3943C16.6954 14.9351 17.81 15.209 18.7363 15.1998C17.5168 13.0283 18.1807 10.9741 18.2389 10.1745C18.2971 9.37366 17.6868 9.11601 17.2635 9.45374C16.9509 8.82587 16.2402 9.14038 15.931 9.61274C15.4918 10.2812 15.0629 10.677 14.2928 10.7106C14.6704 10.5714 15.2158 10.2441 15.3846 9.94698C13.1098 8.82122 13.014 7.06643 13.7008 6.29581C13.1532 5.92906 12.6421 5.04006 13.4121 4.86597C14.2689 4.67216 15.1427 5.36502 15.8489 5.18862C16.3543 5.73293 17.3331 7.52486 16.5334 7.23471C16.7205 7.6061 17.3388 8.38601 17.5088 8.84328C17.4848 8.89898 17.2658 9.03709 17.0547 9.05798C17.5213 9.26921 17.8955 9.13226 17.8316 8.87809C17.7643 8.61232 17.4152 8.07265 17.0251 7.49584C17.3525 7.36006 16.8471 5.72132 15.9299 4.98552C15.7873 2.63883 12.2554 2.29994 9.95662 5.34994C9.95662 5.34994 10.2316 4.60601 10.7997 4.06634C6.73041 1.35407 6.66082 7.02349 5.26104 7.03858C7.19358 9.06611 8.15186 5.92442 9.36568 6.02539C8.39485 8.11443 9.27556 9.30286 9.80033 10.3764C10.7906 12.4062 8.41767 14.2678 6.8867 12.8136C3.97877 10.0514 2.73985 6.53605 4.13164 4.08491C5.91016 0.951347 11.2868 0.721552 16.141 3.57309C20.9951 6.42463 23.4878 11.2758 21.7092 14.4094L21.707 14.4059ZM16.7057 10.3242C17.065 10.0874 17.332 10.1629 17.4586 10.5342C17.146 10.3915 16.9395 10.3311 16.7057 10.3242Z"
                                    fill="#C1F861" />
                            </svg>
                            <p class="text-white">Menu</p>
                        </div>
                        <svg @click="open = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12.0002 10.5867L16.9502 5.63672L18.3642 7.05072L13.4142 12.0007L18.3642 16.9507L16.9502 18.3647L12.0002 13.4147L7.05023 18.3647L5.63623 16.9507L10.5862 12.0007L5.63623 7.05072L7.05023 5.63672L12.0002 10.5867Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div v-if="store.userData.type == 2" class="flex flex-col gap-4 mt-4">
                        <ul class="flex flex-col gap-3">
                            <RouterLink to="/upcoming"
                                :class="path == 'upcoming' || path == 'liveDealer' || path == 'current-bits' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit text-sm  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p class="font-bold">Dealer Bidding</p>
                            </RouterLink>
                         <!--    <RouterLink to="#"
                                :class="path == 'auto-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit text-sm  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p class="font-bold">Sold Auction</p>
                            </RouterLink> -->
                            <RouterLink to="/faqs-dealers"
                                :class="path == 'faqs-dealers' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit text-sm  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p class="font-bold">FAQs</p>
                            </RouterLink>
                            <RouterLink to="/how-it-works-dealer"
                                :class="path == 'how-it-works-dealer' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit text-sm  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p class="font-bold">How It Works?</p>
                            </RouterLink>
                        </ul>
                        <div class="px-2 flex flex-col pt-4 gap-5 border-t border-[#333333]">
                            <div @click="goAccount" class="flex items-center gap-2"
                                v-if="storeUser?.userData?.type == 1">
                                <img class="h-10 rounded-full w-10 object-cover"
                                    :src="bucket + storeUser?.userData?.seller?.picture" alt="">
                                <p class="text-white text-sm font-semibold truncate  w-[150px]">
                                    {{ storeUser.userData.seller.name }}
                                </p>
                            </div>
                            <div @click="goAccount" v-else class="flex items-center gap-2">
                                <img class="h-10 rounded-full w-10 object-cover"
                                    :src="bucket + storeUser?.userData?.dealer?.picture" alt="">
                                <p class="text-white text-sm font-semibold truncate  w-[150px]">
                                    {{ storeUser.userData.dealer.name }}
                                </p>
                            </div>
                            <div @click="logout" class="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M5 22C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V6H18V4H6V20H18V18H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"
                                        fill="white" />
                                </svg>
                                <p class="text-white font-semibold">Logout</p>
                            </div>

                        </div>
                    </div>
                    <div v-else class="flex flex-col gap-4 mt-4">
                        <ul class="flex flex-col gap-3">
                            <RouterLink @click="open = false" to="/all"
                                :class="path == 'all' || path == 'upcoming-auctions' || path == 'live' || path == 'completed' ? ' text-primary' : ' text-white'"
                                class="relative  max-w-fit  rounded-[8px]  hover:text-primary ease-linear duration-500  ">
                                <p>Sell a Car</p>
                            </RouterLink>
                           <!--  <RouterLink @click="open = false" to="#"
                                :class="path == 'auto-list' ? ' text-primary' : ' text-white'"
                                class="relative  max-w-fit  rounded-[8px]  hover:text-primary ease-linear duration-500  ">
                                <p>Sold Auction</p>
                            </RouterLink> -->
                            <RouterLink @click="open = false" to="/faqs-seller"
                                :class="path == 'dealer-list' ? ' text-primary' : ' text-white'"
                                class="relative  max-w-fit  rounded-[8px]  hover:text-primary ease-linear duration-500  ">
                                <p>FAQs</p>
                            </RouterLink>
                        </ul>
                        <div class="px-2 flex flex-col pt-4 gap-5 border-t border-[#333333]">
                            <div @click="goAccount" class="flex items-center gap-2" v-if="store?.userData?.type == 1">
                                <img class="h-10 rounded-full w-10 object-cover"
                                    :src="bucket + store?.userData?.seller?.picture" alt="">
                                <p class="text-white text-sm font-semibold truncate  w-[150px]">
                                    {{ store.userData.seller.firstName }} {{ store.userData.seller.lastName }}
                                </p>
                            </div>
                            <div @click="goAccount" v-else class="flex items-center gap-2">
                                <img class="h-10 rounded-full w-10 object-cover"
                                    :src="bucket + store?.userData?.dealer?.picture" alt="">
                                <p class="text-white text-sm font-semibold truncate  w-[150px]">
                                    {{ store.userData.dealer.name }}
                                </p>
                            </div>
                            <div @click="logout" class="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M5 22C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V6H18V4H6V20H18V18H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"
                                        fill="white" />
                                </svg>
                                <p class="text-white font-semibold">Logout</p>
                            </div>

                        </div>
                    </div>
                </nav>
            </template>

            <template v-else>
                <nav v-show="open"
                    class="fixed animation-menu-modal top-0 md:hidden z-[600] bg-[#141f0d] w-full h-full p-5">
                    <div class=" flex gap-3 justify-between items-center">
                        <div class=" flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21"
                                fill="none">
                                <path
                                    d="M15.5849 6.57865C15.8313 6.64133 15.9613 6.60303 15.9921 6.55428C15.6419 6.05059 14.6254 6.0622 14.3322 6.64597C14.3163 6.76319 14.3745 6.81889 14.4486 6.80148C14.7258 6.43938 15.4103 6.4359 15.5849 6.57865Z"
                                    fill="#C1F861" />
                                <path
                                    d="M14.9989 7.16585C14.8962 7.26798 15.2579 7.25173 15.4872 7.24825C15.7165 7.24477 15.7678 7.28191 15.8762 7.33994C15.9846 7.39797 16.126 7.28191 16.069 7.19835C15.8853 6.93257 15.2715 6.8966 14.9989 7.16469V7.16585Z"
                                    fill="#C1F861" />
                                <path
                                    d="M16.4033 3.10306C10.0753 -0.613112 3.06612 -0.314843 0.747996 3.77039C-1.57013 7.85562 1.68004 14.1796 8.00698 17.8969C14.3351 21.6131 21.3442 21.3148 23.6623 17.2296C25.9804 13.1444 22.7303 6.82039 16.4033 3.10306ZM12.9376 16.3476C9.18087 15.1533 10.6981 10.8859 11.1088 10.1814C11.1088 10.1814 10.5419 9.43053 10.7552 8.81078C10.8499 9.35277 11.3427 10.1849 11.8641 10.4959C11.9154 10.5261 12.1025 10.6097 12.1641 10.4251C11.734 10.1698 11.0632 9.24251 11.0461 8.59375C11.029 7.94499 11.7363 7.58057 12.374 8.58447C13.0117 9.58837 12.5463 10.0491 12.5736 11.2178C12.601 12.3877 13.6814 13.6933 14.7697 14.0125C14.5883 13.8616 14.343 13.2825 14.3453 13.0144C14.4799 13.25 15.1735 13.6829 15.3219 14.7761C15.5181 16.2234 14.2655 16.77 12.9364 16.3476H12.9376ZM21.707 14.4059C21.0978 15.4795 20.0665 16.2118 18.7774 16.5971C17.5829 16.9534 16.3315 16.2431 15.9778 15.0292C15.9151 14.8144 15.8489 14.6021 15.777 14.3943C16.6954 14.9351 17.81 15.209 18.7363 15.1998C17.5168 13.0283 18.1807 10.9741 18.2389 10.1745C18.2971 9.37366 17.6868 9.11601 17.2635 9.45374C16.9509 8.82587 16.2402 9.14038 15.931 9.61274C15.4918 10.2812 15.0629 10.677 14.2928 10.7106C14.6704 10.5714 15.2158 10.2441 15.3846 9.94698C13.1098 8.82122 13.014 7.06643 13.7008 6.29581C13.1532 5.92906 12.6421 5.04006 13.4121 4.86597C14.2689 4.67216 15.1427 5.36502 15.8489 5.18862C16.3543 5.73293 17.3331 7.52486 16.5334 7.23471C16.7205 7.6061 17.3388 8.38601 17.5088 8.84328C17.4848 8.89898 17.2658 9.03709 17.0547 9.05798C17.5213 9.26921 17.8955 9.13226 17.8316 8.87809C17.7643 8.61232 17.4152 8.07265 17.0251 7.49584C17.3525 7.36006 16.8471 5.72132 15.9299 4.98552C15.7873 2.63883 12.2554 2.29994 9.95662 5.34994C9.95662 5.34994 10.2316 4.60601 10.7997 4.06634C6.73041 1.35407 6.66082 7.02349 5.26104 7.03858C7.19358 9.06611 8.15186 5.92442 9.36568 6.02539C8.39485 8.11443 9.27556 9.30286 9.80033 10.3764C10.7906 12.4062 8.41767 14.2678 6.8867 12.8136C3.97877 10.0514 2.73985 6.53605 4.13164 4.08491C5.91016 0.951347 11.2868 0.721552 16.141 3.57309C20.9951 6.42463 23.4878 11.2758 21.7092 14.4094L21.707 14.4059ZM16.7057 10.3242C17.065 10.0874 17.332 10.1629 17.4586 10.5342C17.146 10.3915 16.9395 10.3311 16.7057 10.3242Z"
                                    fill="#C1F861" />
                            </svg>
                            <p class="text-white">Menu</p>
                        </div>
                        <svg @click="open = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12.0002 10.5867L16.9502 5.63672L18.3642 7.05072L13.4142 12.0007L18.3642 16.9507L16.9502 18.3647L12.0002 13.4147L7.05023 18.3647L5.63623 16.9507L10.5862 12.0007L5.63623 7.05072L7.05023 5.63672L12.0002 10.5867Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div class="flex flex-col items-center justify-center gap-4 mt-4">
                        <RouterLink @click="open = false" :class="[(path == 'home' ? '!text-primary' : 'text-white')]"
                            class="font-medium text-xs" to="/">Home
                        </RouterLink>
                      <!--   <RouterLink @click="open = false"
                            :class="[(path == 'sold-auctions' ? '!text-primary' : 'text-white')]"
                            class="font-medium text-xs" to="/sold-auctions">Sold Auctions</RouterLink> -->
                        <RouterLink @click="open = false"
                            :class="[(path == 'how-it-works' ? '!text-primary' : 'text-white')]"
                            class="font-medium text-xs" to="/how-it-works">How It Works?</RouterLink>
                        <RouterLink @click="open = false" :class="[(path == 'about' ? '!text-primary' : 'text-white')]"
                            class="font-medium text-xs" to="/about">About</RouterLink>
                        <RouterLink @click="open = false"
                            :class="[(path == 'contact-us' ? '!text-primary' : 'text-white')]"
                            class="font-medium text-xs" to="/contact-us">Contact Us</RouterLink>
                        <RouterLink @click="open = false" v-if="!store?.userData?._id"
                            :class="[(path == `login` ? '!text-primary' : 'text-white')]" class="font-medium text-sm"
                            to="/login/dealers">Dealer Page</RouterLink>
                        <RouterLink @click="open = false" to="/login/sellers"
                            class=" font-bold text-xs text-center  w-full px-4 py-2 rounded-md bg-[#22282F] text-white border border-[#e5e5e521]">
                            Login
                        </RouterLink>
                        <RouterLink @click="open = false" to="/login/sellers"
                            class="w-full text-center font-bold text-xs px-4 py-2 rounded-md bg-primary text-blue-dark ">
                            Sign Up
                        </RouterLink>

                    </div>
                </nav>
            </template>

        </div>
    </header>
</template>

<script>
import { ref, computed, watch, onMounted } from "vue";
import LogoIcon from '@/assets/svg/logo.vue'
import { useRoute, useRouter } from 'vue-router'
import IconArrow from "../icons/iconArrow.vue";
import { stepsSignUp } from "@/stores/stepsSignUp";
import i18n from '../../config/i18n'
import LogoBlack from '../../assets/svg/logoBlack.vue'
import { useAuthStore } from "@/stores/auth";
export default {
    components: {
        LogoIcon,
        IconArrow,
        LogoBlack
    },
    setup() {
        const route = useRoute();
        const path = ref(computed(() => route.name))
        const scrollPosition = ref(0)
        const router = useRouter()
        const storeData = stepsSignUp()
        const store = useAuthStore()
        const storeUser = useAuthStore()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const form = storeData.formData
        let open = ref(false)
        watch(open, async (newQuestion, oldQuestion) => {
            if (newQuestion) {
                document.documentElement.style.overflow = "hidden";
            } else {
                document.documentElement.style.overflow = "initial";
            }
        })
        const handleChangeLang = (e) => {
            if (!e) {
                i18n.global.locale = "en";
            } else {
                i18n.global.locale = "es";
            }
        }
        const goAccount = async () => {
            if (storeUser.userData.dealer) {
                await router.push('/account-dealer')
                router.go()
            } else {
                await router.push('/account-seller')
                router.go()
            }

        }
        const logout = async () => {
            localStorage.clear()
            await router.push({ name: 'home' })
            router.go()

        }
        const back = async () => {
            storeData.formData.name = ''
            storeData.formData.lastName = ''
            storeData.formData.email = ''
            storeData.formData.password = ''
            storeData.formData.confirmPassword = ''
            storeData.formData.img = ''
            storeData.formAccount.dealerName = ''
            storeData.formAccount.registrationNumber = ''
            storeData.formAccount.address = ''
            storeData.formAccount.phoneNumber = ''
            storeData.formAccount.preview = ''
            await router.push('/')
            router.go()
        }
        const toggle = () => {
            open.value = !open.value
        }
        const updateScroll = () => {
            scrollPosition.value = window.scrollY
        }
        onMounted(() => {
            window.addEventListener('scroll', updateScroll);

        })
        return {
            LogoIcon,
            toggle,
            handleChangeLang,
            back,
            path,
            open,
            route,
            IconArrow,
            scrollPosition,
            store,
            LogoBlack,
            storeUser,
            bucket,
            goAccount,
            logout
        };
    },
};
</script>