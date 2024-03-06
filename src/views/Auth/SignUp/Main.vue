<template>
    <div class="main-login  md:flex  md:flex-row-reverse">
        <swiper @swiper="getRef" :pagination="{ type: 'bullets' }" :simulateTouch="false" :modules="modules"
            class="stepsSwiper w-full  lg:w-2/4 ">
            <swiper-slide v-if="!loading">
                <CreateAccount v-if="stepsCurrent == 0" :back="back" :next="next" :rol="rol" />
            </swiper-slide>
            <swiper-slide v-if="!loading">
                <CheckYourEmail v-if="stepsCurrent == 1" :back="back" :next="next" :gobackError="gobackError"
                    :rol="rol" />
            </swiper-slide>
            <swiper-slide v-if="!loading">
                <InfoAccount v-if="stepsCurrent == 2" :back="back" :next="next"
                    :backEmailToken="backEmailToken" :rol="rol" />
            </swiper-slide>
            <swiper-slide v-if="!loading">
                <VerificationCode v-if="stepsCurrent == 3" :back="back" :next="next"
                    :backEmailToken="backEmailToken" :rol="rol" />
            </swiper-slide>
        </swiper>
        <div :class="rol == 'dealers' ? 'bg-yellow-light' : 'bg-primary'" class=" lg:block md:w-1/2 relative ">
            <div v-if="rol == 'dealers'" class="h-full flex justify-start items-start flex-col gap-5 md:px-16 md:py-12">
                <h1 class="p-5 pb-0 !md:p-0  text-4xl md:text-5xl text-blue-dark font-bold ">Boost Your Inventory <br>
                    Organically</h1>
                <p class="p-5 pt-0 !md:p-0 md:w-[70%]">Dealers are able to increase their inventory without having to go
                    to
                    their local
                    auctions, or online
                    auctions
                    bidding on vehicles that dealers don’t want to sell themselves. Get the best vehicles with a simple
                    application.</p>
                <img class="h-[50vh] block md:hidden w-full object-cover" src="../../../assets/svg/vehiculosLogin.svg"
                    alt="" />
            </div>
            <div v-else class="h-full flex justify-start items-start flex-col gap-5 md:px-16 md:py-12">
                <h1 class="p-5 pb-0 !md:p-0  text-4xl  md:text-5xl text-blue-dark font-bold ">Elevate Your Car Selling
                    Journey with AutoSensei</h1>
                <p class="p-5 pt-0 !md:p-0 md:w-[70%]">AutoSensei revolutionizes the way you sell your vehicle, offering
                    a
                    seamless and
                    efficient process. Maximize the value of your car by inviting competitive bids from local
                    dealerships.
                </p>
                <img class="h-[50vh] block md:hidden w-full object-cover" src="../../../assets/svg/vehiculosLogin.svg"
                    alt="" />
            </div>
            <img class="h-auto hidden md:block absolute bottom-0 w-full object-cover"
                src="../../../assets/svg/vehiculosLogin.svg" alt="" />
        </div>
        <template v-if="loading">
            <div class="w-1/2 absolute top-0 right-0  h-full flex justify-center items-center">
                <div class="text-indigo-700 mt-32">
                    <div class="h-[80px] w-[80px] ">
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

    </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter, useRoute } from 'vue-router'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CreateAccount from './Steps/CreateAccount.vue';
import CheckYourEmail from './Steps/CheckYourEmail.vue';
import InfoAccount from './Steps/InfoAccount.vue';
import VerificationCode from './Steps/VerificationCode.vue';
import { useAuthStore } from "@/stores/auth";
import { toast } from "vue3-toastify";
export default {
    components: {
        Swiper,
        SwiperSlide,
        CreateAccount,
        CheckYourEmail,
        InfoAccount,
        VerificationCode
    },
    setup(props) {
        const swiper = ref(null)
        const route = useRoute();
        const router = useRouter()
        const store = useAuthStore();
        const loading = ref(false)
        let rol = ref()
        let stepsCurrent = ref(0)
        function getRef(swiperInstance) {
            swiper.value = swiperInstance
        }
        function next() {
            swiper.value.slideNext() // should work
            stepsCurrent.value = swiper.value.activeIndex
        }
        function back() {
            swiper.value.slidePrev() // should work
            stepsCurrent.value = swiper.value.activeIndex
        }
        const getAuth = async (token) => {
            loading.value = true
            try {

                let res = await store.authProfile(token)
                if (res.status == 200) {
                    console.log('entro bien')
                    stepsCurrent.value = 1
                    swiper.value?.slideTo(1)
                    toast("Your email has been verified successfully", {
                        type: "success",
                        autoClose: 3000,
                    });
                    localStorage.setItem('updateUser', route.query.token)
                    router.replace({ query: '' })
                    setTimeout(() => {
                        stepsCurrent.value = 2
                        swiper.value?.slideTo(2)
                        loading.value = false
                    }, 3000);

                }
            } catch (error) {
                console.log('entro ene l error')
                if (error.response.data.message == "Unauthorized") {
                    toast('Your email verification token has expired', {
                        type: "error",
                        autoClose: 2000,
                    });
                    loading.value = false
                    stepsCurrent.value = 1
                    swiper.value.slideTo(1)
                    router.replace({ query: { error: 'expired' } })

                }
            }
        }
        const gobackError = () => {
            stepsCurrent.value = 0
            swiper.value?.slideTo(0)
            router.replace({ query: '' })
        }
        const backEmailToken = () => {
            stepsCurrent.value = 1
            swiper.value.slideTo(1)
            router.replace({ query: { error: 'expired' } })
        }
        onMounted(() => {
            swiper.value.allowTouchMove = false
            console.log(' swiper.value', swiper.value)
            rol.value = route.params.rol
            if (route.query.token) {
                getAuth(route.query)
            } else {
                stepsCurrent.value = 0
                swiper.value?.slideTo(0)
                router.replace({ query: '' })
            }

        })
        return {
            getRef,
            next,
            back,
            Pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return '<div class="' + className + '">' + (index + 1) + '</div>';
                },
            },
            modules: [Navigation, Pagination, Scrollbar, A11y],
            rol,
            stepsCurrent,
            loading,
            gobackError,
            backEmailToken,
        };
    },
};
</script>