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
            (scrollPosition > 100 ? 'bg-blue-dark z-[500] ease-linear duration-300 transition-all' : 'ease-linear duration-300 transition-all'), (path == 'contact-us' && 'shadow-md')]"
                class="flex p-4  top-0 z-50 items-center w-full justify-between flex-wrap bg-teal md:px-20 md:py-6">
                <div class="flex items-center cursor-pointer flex-no-shrink text-white mr-6">
                    <LogoBlack class="w-[80%]" v-if="path == 'contact-us' && scrollPosition < 110" />
                    <LogoIcon v-else :class="path == 'login' || path == 'signup' ? 'w-[50%] md:w-[30%]' : ''" />
                    <p v-if="path == 'login' || path == 'signup'"
                        class="text-primary pl-2  flex items-center md:text-2xl font-normal">
                        <span v-if="route.params.rol == 'sellers'">For Sellers</span>
                        <span v-if="route.params.rol == 'dealers'">For Dealer</span>
                    </p>
                </div>
                <div :class="path == 'login' || path == 'signup' ? ' hidden ' : ''" class="block  lg:hidden">
                    <button @click="toggle"
                        class="flex items-center px-3 py-2 text-white  rounded text-teal-lighter  hover:text-white hover:border-white">
                        <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div :class="[(open ? 'block fixed top-0 left-0 h-screen !w-[80%] md:w-auto bg-base-black  flex-col ' : 'hidden'), (path == 'login' || path == 'signup' ? 'justify-end' : '')]"
                    class="w-full flex-grow lg:flex sm:items-center sm:w-auto">
                    <div :class="[(path === 'login' || path === 'signup' ? 'hidden' : 'flex'), (open && 'flex-col p-5')]"
                        class="text-sm gap-6 sm:flex-grow text-white">
                        <p v-if="open" @click="open = false"
                            class="text-2xl absolute right-4 top-2 font-extrabold text-white">X</p>
                        <RouterLink
                            :class="[((path == 'contact-us' && scrollPosition < 110) && 'text-base-black'), (path == 'home' && '!text-primary')]"
                            class="font-medium text-sm" to="/">Home</RouterLink>
                        <RouterLink
                            :class="[((path == 'contact-us' && scrollPosition < 110) && 'text-base-black'), (path == 'sold-auctions' && '!text-primary')]"
                            class="font-medium text-sm" to="/sold-auctions">Sold Auctions</RouterLink>
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
                    <div class="flex gap-4 items-center pr-7">
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

                        <RouterLink v-if="store?.userData?._id" :to="store?.userData?.type == 0 && '/inicio' ||
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
                                :class="path == 'signup' ? 'bg-primary text-black' : 'bg-blue-dark text-white'" class="btn">
                                <span v-if="path == 'signup'">Sign In</span>
                                <span v-else>Login</span>
                            </RouterLink>
                            <RouterLink v-if="path !== 'signup'" :to="path == 'home' ||
                                    path == 'about' ||
                                    path == 'sold-auctions' ||
                                    path == 'how-it-works' ||
                                    path == 'contact-us'

                                    ? `/signup/sellers` : `/signup/${route.params.rol}`"
                                class="btn bg-primary text-base-black">
                                Sign Up
                            </RouterLink>
                        </template>

                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
  
<script >
import { ref, computed, watch, onMounted } from "vue";
import LogoIcon from '@/assets/svg/logo.vue'
import { useRoute, useRouter } from 'vue-router'
import IconArrow from "../icons/iconArrow.vue";
import { stepsSignUp } from "@/stores/stepsSignUp";
import { useAuthStore } from "@/stores/auth";
import i18n from '../../config/i18n'
import LogoBlack from '../../assets/svg/logoBlack.vue'
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
        const form = storeData.formData
        let open = ref(false)

        watch(open, async (newQuestion, oldQuestion) => {
            if (newQuestion) {
                document.documentElement.style.overflow = "hidden";
            } else {
                document.documentElement.style.overflow = "initial";
            }
        })
        watch(scrollPosition, async (newQuestion, oldQuestion) => {

            console.log('newQuestion', newQuestion)
        })

        const handleChangeLang = (e) => {
            console.log(' this.$i18n', i18n)
            if (!e) {
                i18n.global.locale = "en";
            } else {
                i18n.global.locale = "es";
            }
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
            console.log('store', store.userData)
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
            LogoBlack
        };
    },
};
</script>

  
  
  