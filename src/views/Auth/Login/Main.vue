<template>
    <div class="main-login  flex  flex-col md:flex-row-reverse">
        <div
            class="flex-1 flex flex-col lg:w-1/2 relative justify-between py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div v-if="isLoadingLogin"
                class="h-screen-login-loading  left-0 top-0  w-full h-full flex justify-center items-center">
                <div>
                    <div class=" h-12 w-12 md:h-[80px] md:w-[80px] ">
                        <div class="animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff"
                                stroke-width="0" viewBox="0 0 16 16">
                                <path
                                    d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                                </path>
                            </svg>
                        </div>
                        <p class=" text-base-gray text-xs md:text-base mt-3 font-medium md:pl-2 ">Loading...</p>
                    </div>
                </div>
            </div>
            <div v-else
                class="flex-1 flex flex-col justify-center pt-0 md:py-12 sm:px-6 h-full lg:flex-none md:px-10 xl:px-20 xl:px-24">
                <div class="mx-auto w-full ">
                    <div>
                        <h2 class="md:mt-6 text-3xl md:text-4xl font-bold text-base-black text-center mb-5 ">Welcome to
                            AutoSensei</h2>

                        <p class=" text-sm font-normal text-[#666] text-center  ">Auction your car to dealers right from
                            your home.</p>
                    </div>
                    <div class="mt-8">
                        <div class="mt-6">
                            <div class="space-y-7">
                                <div>
                                    <label htmlFor="email" class="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div class="mt-1">
                                        <input id="email" v-model="payloadData.email" name="email" type="email"
                                            autoComplete="email" placeholder="your@email.com"
                                            class="appearance-none block w-full px-3 py-2 border border-[#E0E0E0] rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div class="space-y-1">
                                    <label htmlFor="password" class="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div class="mt-1">
                                        <input id="password" v-model="payloadData.password" name="password"
                                            type="password" placeholder="*********" autoComplete="password"
                                            class="appearance-none block w-full px-3 py-2 border border-[#E0E0E0] rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <button @click="getLogin"
                                        class="w-full btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Login
                                    </button>
                                    <p class="mt-4 uppercase text-error text-md font-semibold">{{ messageError }}</p>
                                </div>
                                <div class="text-sm md:mt-6 !mb-5 text-center">
                                    <RouterLink to="/recover-password"
                                        class="font-medium underline text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div v-if="!isLoadingLogin" class="text-center">
                <p class=" text-[10px] md:text-xs font-normal text-[#666]">
                    By clicking “Log In”, you acknowledge that you have
                    read & agreed to AutoSensei User's
                    <RouterLink to="/terms-conditions" target="_blank"
                        class="font-medium underline text-base-black hover:text-indigo-500">
                        Terms & Conditions.
                    </RouterLink>
                </p>
            </div>
        </div>
        <div :class="rol == 'dealers' ? 'bg-yellow-light' : 'bg-primary'" class=" hidden lg:block md:w-1/2 relative ">
            <div v-if="rol == 'dealers'"
                class="h-full  flex justify-start items-start flex-col gap-5 md:px-16 md:py-12">
                <h1 class="p-5 pb-0 !md:p-0  text-4xl md:text-5xl text-blue-dark font-bold ">Boost Your Inventory <br>
                    Organically
                </h1>
                <p class="p-5 pt-0 !md:p-0 md:w-[70%]">Dealers are able to increase their inventory without having to go
                    to
                    their local
                    auctions, or online
                    auctions
                    bidding on vehicles that dealers don’t want to sell themselves. Get the best vehicles with a simple
                    application.</p>
                <img class="h-[60vh] block lg:hidden  w-full object-cover  "
                    :src="bucket + 'public/svg/vehiculosLogin.svg'" alt="" />
            </div>
            <div v-else class="h-full  flex justify-start lg:p-5 items-start flex-col gap-5 md:px-16 md:py-12">
                <h1 class="p-5 pb-0 !md:p-0  text-4xl md:text-5xl text-blue-dark font-bold ">Elevate Your Car Selling
                    <br> Journey with AutoSensei
                </h1>
                <p class="p-5 pt-0 !md:p-0 md:w-[70%] text-sm ">AutoSensei revolutionizes the way you sell your vehicle,
                    offering a seamless and
                    efficient process. Maximize the value of your car by inviting competitive bids from local
                    dealerships.
                </p>
                <img class="h-[60vh] block lg:hidden  w-full object-cover  "
                    :src="bucket + 'public/svg/vehiculosLogin.svg'" alt="" />
            </div>
            <img class="h-auto hidden lg:block absolute bottom-0 w-full object-cover"
                :src="bucket + 'public/svg/vehiculosLogin.svg'" alt="" />
        </div>

    </div>
</template>

<script>
import { ref, watch, computed, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from "@/stores/auth";
import { toast } from "vue3-toastify";
import { regexEmail } from "../../../utils/Regex";
import Basic from '../../../components/Loading/Basic.vue'
export default {
    components: {
        Basic
    },
    setup() {
        const route = useRoute();
        const router = useRouter()
        let rol = ref()
        const store = useAuthStore();
        const messageError = ref('')
        const isLoadingLogin = ref(false)
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const payloadData = ref({
            email: "",
            password: ""
        });
        const getLogin = async () => {
            console.log('hola')
            if (payloadData.value.email == "" || payloadData.value.password == "") {
                toast("Campos Requerido", {
                    type: "error",
                });
                return;
            } else if (!regexEmail.test(payloadData.value.email.trim())) {
                toast("Invalid email", {
                    type: "error",
                });
                return;
            }
            isLoadingLogin.value = true;
            try {
                let res = await store.login(payloadData.value);
                console.log('res login', res)
                if (res.data.access_token) {
                    let resProfile = await store.authProfile()
                    console.log('resProfile', resProfile)
                    if (resProfile.statusText = "OK") {
                        localStorage.setItem('rol', resProfile.data.type)
                        console.log('rol.value', rol.value)

                        switch (resProfile.data.type) {
                            case 0:
                                await router.push({ path: '/inicio' })
                                 
                                break;
                            case 1:
                                if (rol.value == 'sellers') {
                                    await router.push({ path: '/all' })
                                     
                                } else {
                                    localStorage.clear()
                                    isLoadingLogin.value = false;
                                    toast("You must be a seller to login.", {
                                        type: "error",
                                    });
                                }

                                break;
                            case 2:

                                if (rol.value == 'dealers') {
                                    await router.push({ path: '/upcoming' })
                                     
                                } else {
                                    localStorage.clear()
                                    isLoadingLogin.value = false;
                                    toast("You must be a dealers to login.", {
                                        type: "error",
                                    });
                                }

                                break;
                            default:
                                await router.push({ name: 'home' })
                                 
                                break;
                        }


                    }
                }
            } catch (error) {
                console.log('hola error', error)
                messageError.value = error?.response?.data?.message
                isLoadingLogin.value = false;
            }
        };
        onMounted(() => {
            console.log('router', router)
            console.log('route', route)
            rol.value = route.params.rol

            console.log('rol.value', rol.value)
        })
        return {
            rol,
            getLogin,
            payloadData,
            isLoadingLogin,
            messageError,
            bucket
        };
    },
};
</script>