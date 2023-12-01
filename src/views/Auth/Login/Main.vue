<template>
    <div class="main-login  flex">
        <div :class="rol == 'dealers' ? 'bg-yellow-light' : 'bg-primary'" class="hidden  lg:block w-1/2 relative ">
            <div v-if="rol == 'dealers'" class="h-full flex justify-start items-start flex-col gap-5 px-16 py-12">
                <h1 class=" text-5xl text-blue-dark font-bold ">Boost Your Inventory <br> Organically</h1>
                <p class="w-[70%]">Dealers are able to increase their inventory without having to go to their local
                    auctions, or online
                    auctions
                    bidding on vehicles that dealers don’t want to sell themselves. Get the best vehicles with a simple
                    application.</p>
            </div>
            <div v-else class="h-full flex justify-start items-start flex-col gap-5 px-16 py-12">
                <h1 class=" text-5xl text-blue-dark font-bold ">Elevate Your Car Selling <br> Journey with AutoSensei</h1>
                <p class="w-[70%]">AutoSensei revolutionizes the way you sell your vehicle, offering a seamless and <br>
                    efficient process. Maximize the value of your car by inviting competitive bids from <br> local
                    dealerships.
                </p>
            </div>
            <img class="h-auto absolute bottom-0 w-full object-cover" src="../../../assets/svg/vehiculosLogin.svg" alt="" />
        </div>
        <div class="flex-1 flex flex-col lg:w-1/2 justify-between py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 h-full lg:flex-none lg:px-20 xl:px-24">
                <div class="mx-auto w-full ">
                    <div>
                        <h2 class="mt-6 text-xl md:text-4xl font-bold text-base-black text-center mb-5 ">Welcome to AutoSensei</h2>

                        <p class=" text-sm font-normal text-[#666] text-center  ">Auction your car to dealers right from
                            your home.</p>
                    </div>
                    <div class="mt-8">
                        <div class="mt-6">
                            <form action="#" method="POST" class="space-y-7">
                                <div>
                                    <label htmlFor="email" class="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div class="mt-1">
                                        <input id="email" name="email" type="email" autoComplete="email"
                                            placeholder="your@email.com"
                                            class="appearance-none block w-full px-3 py-2 border border-[#E0E0E0] rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div class="space-y-1">
                                    <label htmlFor="password" class="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div class="mt-1">
                                        <input id="password" name="password" type="password" placeholder="*********"
                                            autoComplete="current-password" required
                                            class="appearance-none block w-full px-3 py-2 border border-[#E0E0E0] rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"
                                        class="w-full btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Login
                                    </button>
                                </div>
                                <div class="text-sm mt-6 text-center">
                                    <RouterLink to="#" class="font-medium underline text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </RouterLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div class="text-center">
                <p class=" text-xs font-normal text-[#666]">
                    By clicking “Log In”, you acknowledge that you have <br>
                    read & agreed to AutoSensei User's
                    <RouterLink to="#" class="font-medium underline text-base-black hover:text-indigo-500">
                        Terms & Conditions.
                    </RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch, computed, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'
export default {
    components: {
    },
    setup() {
        const route = useRoute();
        let rol = ref()
        onMounted(() => {
            rol.value = route.params.rol
        })
        return {
            rol,
        };
    },
};
</script>