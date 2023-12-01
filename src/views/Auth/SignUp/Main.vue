<template>
    <div class="main-login  flex">
        <div :class="rol == 'dealers' ? 'bg-yellow-light' : 'bg-primary'" class="hidden lg:block w-1/2 relative ">
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
        <swiper @swiper="getRef" :pagination="{ type: 'bullets' }" :simulateTouch="false" :modules="modules"
            class="stepsSwiper lg:w-2/4 ">
            <swiper-slide>
                <CreateAccount v-if="stepsCurrent == 0" :back="back" :next="next" :rol="rol" />
            </swiper-slide>
            <swiper-slide>
                <CheckYourEmail v-if="stepsCurrent == 1" :back="back" :next="next" :rol="rol" />
            </swiper-slide>
            <swiper-slide>
                <InfoAccount v-if="stepsCurrent == 2" :back="back" :next="next" :rol="rol" />
            </swiper-slide>
            <swiper-slide>
                <VerificationCode v-if="stepsCurrent == 3" :back="back" :next="next" :rol="rol" />
            </swiper-slide>
        </swiper>
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
export default {
    components: {
        Swiper,
        SwiperSlide,
        CreateAccount,
        CheckYourEmail,
        InfoAccount,
        VerificationCode
    },
    setup() {
        const swiper = ref(null)
        const route = useRoute();
        let rol = ref()
        let stepsCurrent = ref(0)
        function getRef(swiperInstance) {
            console.log('swiperInstance', swiperInstance)
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


        onMounted(() => {
            rol.value = route.params.rol
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
            stepsCurrent
        };
    },
};
</script>