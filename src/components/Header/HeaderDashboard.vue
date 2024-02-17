<template>
    <header class="relative">
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
                            <RouterLink :to="{ name: 'action-list', query: { state: 'drafts' } }"
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
                        <RouterLink :to="{ name: 'inbox-seller' }" class="flex items-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"
                                    fill="white" />
                            </svg>
                        </RouterLink>
                        <IconNotifications />
                        <div class="navbar-right  relative">
                            <button class="relative z-50 block  overflow-hidden   leading-loose   rounded cursor-pointer "
                                @click="isOpen = !isOpen">
                                <div class="w-8 h-8 ">
                                    <img v-if="store?.userData?.dealer?.picture"
                                        class="w-full shadow-md   rounded-full h-full object-cover"
                                        :src="bucket + store?.userData?.dealer?.picture" alt="">
                                    <img v-else class="w-full shadow-md  rounded-full h-full object-cover"
                                        src="https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA="
                                        alt="">
                                </div>

                            </button>
                            <button v-if="isOpen" @click="isOpen = false" tabindex="-1"
                                class="fixed top-0 inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
                            <div v-if="isOpen"
                                class="absolute top-auto right-[-100%] w-48 py-2 mt-2 mr-10 rounded-lg border-gray-900 bg-white shadow-xl">
                                <div @click="goAccount"
                                    class="text-sm text-gray-900 hover:bg-base-black hover:text-primary block px-4 py-2 cursor-pointer">
                                    Account
                                    Settings
                                </div>
                                <div @click="logout"
                                    class="text-sm text-gray-900 hover:bg-base-black hover:text-primary block px-4 py-2 cursor-pointer">
                                    Sign
                                    Out
                                </div>
                            </div>
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
                            <RouterLink to="/all"
                                :class="path == 'all' || path == 'upcoming-auctions' || path == 'live' || path == 'completed' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Sell a Car</p>
                            </RouterLink>
                            <RouterLink to="#" :class="path == 'auto-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Sold Auction</p>
                            </RouterLink>
                            <RouterLink to="/faqs-seller"
                                :class="path == 'dealer-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>FAQs</p>
                            </RouterLink>
                        </ul>
                    </div>
                </div>
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
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                                </path>
                            </svg>
                            <input type="search" placeholder="Search for vehicles by make, model, VIN, etc."
                                class="border-[1px] rounded-[8px] w-full bg-transparent border-[#d3d3d361] py-3 px-10">
                        </div>

                        <RouterLink :to="{ name: 'inbox-dealer' }" class="flex items-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"
                                    fill="white" />
                            </svg>
                        </RouterLink>

                        <IconNotifications />
                        <div class="navbar-right  relative">
                            <button class="relative z-50 block  overflow-hidden   leading-loose   rounded cursor-pointer "
                                @click="isOpen = !isOpen">
                                <div class="w-8 h-8 ">
                                    <img v-if="store?.userData?.dealer?.picture"
                                        class="w-full shadow-md   rounded-full h-full object-cover"
                                        :src="bucket + store?.userData?.dealer?.picture" alt="">
                                    <img v-else class="w-full shadow-md  rounded-full h-full object-cover"
                                        src="https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA="
                                        alt="">
                                </div>

                            </button>
                            <button v-if="isOpen" @click="isOpen = false" tabindex="-1"
                                class="fixed top-0 inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
                            <div v-if="isOpen"
                                class="absolute top-auto right-[-100%] w-48 py-2 mt-2 mr-10 rounded-lg border-gray-900 bg-white shadow-xl">
                                <div @click="goAccount"
                                    class="text-sm text-gray-900 hover:bg-base-black hover:text-primary block px-4 py-2 cursor-pointer">
                                    Account
                                    Settings
                                </div>
                                <div @click="logout"
                                    class="text-sm text-gray-900 hover:bg-base-black hover:text-primary block px-4 py-2 cursor-pointer">
                                    Sign
                                    Out
                                </div>
                            </div>
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
                            <RouterLink to="/upcoming"
                                :class="path == 'upcoming' || path == 'liveDealer' || path == 'current-bits' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Dealer Bidding</p>
                            </RouterLink>
                            <RouterLink to="#" :class="path == 'auto-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>Sold Auction</p>
                            </RouterLink>
                            <RouterLink to="/faqs-dealers"
                                :class="path == 'faqs-dealers' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>FAQs</p>
                            </RouterLink>
                            <RouterLink to="/how-it-works-dealer"
                                :class="path == 'how-it-works-dealer' ? 'bg-[#303E18] text-primary' : ' text-white'"
                                class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                                <p>How It Works?</p>
                            </RouterLink>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
       <!--  <div class="fixed z-[1000] right-0 top-0  shadow-xl   w-1/4 flex flex-col rounded-lg bg-white">
            <div v-for="(item, index) in 8" :key="index"
                :class="` border-b px-2 py-3 border-[#cfcfcf] pb-3 hover:bg-[#d6d6d6] transition-all cursor-pointer ease-linear duration-200 animate-fade-down animate-once animate-duration-2000 animate-delay-600 animate-ease-in-out`">
                <div class="flex gap-2">
                    <div class="w-[40%]">
                        <img class=" rounded-lg shadow-lg w-full h-full object-cover"
                            src="https://s3-alpha-sig.figma.com/img/2f96/a19f/432d1f5ab1b4ab8858a78eff9d520d88?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EyPWohxpVTLFfBWvtuaMoQyx4lFXTbPn1eVb1M7BmBaFaLCW-Wu9p8QJGtmSndUZsO~3XmP7Jy2ZEFp5ow0cUGDgkslQQH-Q23AtfUln~J1VRnMOen8JEtjLrW3sH4Aazvj50hBW9~VFYgsTEA-gzlaXoxLw0jg2T7KyPKTDJ35PDqlRJcWLghqp0uvZJzg9O0O1IIJIOgVHdyQT5iop6FQB-AWksI3eOdb1InLpUgwHbmGH43gi-W8ddW8nOr8AZmOnV8JLSOcd-Cde0JaxbV6YIZ~CJ3lqdN9WalGCewaFFaBNRVvrtyGVkgShlD3brWij7Jv-PQVVHQyWQcrAjA__"
                            alt="">
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 17" fill="none">
                                <path
                                    d="M8.00016 15.1668C4.31816 15.1668 1.3335 12.1822 1.3335 8.50016C1.3335 4.81816 4.31816 1.8335 8.00016 1.8335C11.6822 1.8335 14.6668 4.81816 14.6668 8.50016C14.6668 12.1822 11.6822 15.1668 8.00016 15.1668ZM7.3335 10.5002V11.8335H8.66683V10.5002H7.3335ZM7.3335 5.16683V9.16683H8.66683V5.16683H7.3335Z"
                                    fill="#FF333E" />
                            </svg>
                            <p class="text-error text-lg">Outbid Alert!</p>
                        </div>
                        <p class="text-sm">Your bid for the <span class="font-bold"> 2006 Mercedes-Benz C280 4Matic</span>
                            has
                            been outbid, keep
                            bidding to win!</p>
                    </div>
                </div>
            </div>
            <p class="p-4 animate-fade-down animate-once animate-duration-2000 font-medium text-center">See All Outbid</p>
        </div> -->

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
        const isOpen = ref(false)
        const path = ref(computed(() => route.name))
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const socket = store.socketNotification
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
        const goAccount = async () => {
            if (store.userData.dealer) {
                await router.push('/account-dealer')
                router.go()
            } else {
                await router.push('/account-seller')
                router.go()
            }

        }
        onMounted(() => {
            store.authProfile().then(async (res) => {
                if (res.data) {
                    console.log('socket', socket)
                    socket.on("auctionUpdate", (response) => {
                        console.log('auctionUpdate', response)

                    });
                    socket.on("subscribedAuctionStarted", (response) => {
                        console.log('subscribedAuctionStarted', response)

                    });
                    socket.on("bidExeeded", (response) => {
                        console.log('bidExeeded', response)

                    });
                    socket.on("bidsFiniched", (response) => {
                        console.log('bidsFiniched', response)

                    });
                }
            }).catch((error) => {
            });

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
            bucket,
            isOpen,
            goAccount

        };
    },
};
</script>
