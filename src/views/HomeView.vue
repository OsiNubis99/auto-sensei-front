<template>
  <div class="w-full pt-10 relative z-10 h-screen bg-blue-dark ">
    <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 p-5 md:pt-20 lg:p-28 !pb-0 h-full">
      <div class="flex flex-col items-start gap-4 md:gap-10">
        <p class="text-primary text-[10px] md:text-base uppercase"> {{ $t("home.pre_title") }}</p>
        <h1 class="text-3xl md:text-6xl xl:text-8xl font-bold text-white"> {{ $t("home.title") }}</h1>
        <p class="text-base-white text-xs md:text-base">{{ $t("home.subt_title") }}</p>
        <button @click="goToHome()" id="sellCar" class="btn w-full md:w-auto bg-primary text-base-black">{{ $t("sell_your_car")
          }}</button>
      </div>
      <div class="w-full h-full relative">
        
        <img class="absolute w-full h-full lg:h-[inherit] bottom-0" :src="bucket + 'public/svg/carji.svg'" alt="">
      </div>
    </div>
    <img class="absolute -z-10 bottom-0 w-full" :src="bucket + 'public/svg/vehiculo.svg'" alt="">
    <img class="absolute hidden md:block -z-10 top-0 right-0" :src="bucket + 'public/svg/lines/lineHome.svg'" alt="">
  </div>
  <div class="py-14 ">
    <Heanding :type="'h2'" :color="'text-base-black'" :msg="$t('home.how_it_works')" />
    <p class=" text-xs md:text-lg text-center text-[#666666]">Discover the seamless process of selling your car with
      AutoSensei</p>
    <div class="grid lg:grid-cols-2 gap-10 md:gap-20 p-5 md:pt-20 lg:px-20 lg:pb-0 h-full">
      <div class="flex w-full flex-col items-start gap-10">
        <div class="bg-[#E6FCC0] rounded-lg p-5">
          <p class="text-md md:text-lg font-semibold  ">
            Revolutionize Your Car Selling Experience with AutoSensei
          </p>
          <p class=" text-xs md:text-sm  ">AutoSensei is a groundbreaking platform that redefines the way you sell your
            car,
            offering
            a swift and
            hassle-free experience to sell your vehicle, all while ensuring you receive the optimal value for your
            vehicle
            through competitive bids from local dealerships.</p>
        </div>
        <div>
          <p class=" text-md md:text-lg font-semibold  ">
            Effortlessly Begin Your Car Sale with AutoSensei's Guide
          </p>
          <p class=" text-xs md:text-sm  ">Getting started is a breeze. Just follow our user-friendly guide to post your
            car,
            providing essential vehicle details and the photos that dealerships are eager to see. Keep your driver's
            license and ownership documents ready for a quick and easy upload.</p>
        </div>
        <div>
          <p class=" text-md md:text-lg font-semibold  ">
            Store, Start, and Secure Bids with Ease!
          </p>
          <p class=" text-xs md:text-sm  ">Once you enter your vehicle's details, they'll be stored in the 'Upcoming
            Auction'
            section
            ready for you to launch. You can kickstart your auction at your convenience, and just relax as the bids roll
            in. When you're happy with a bid, accept it, and arrange drop-off and payment as agreed.</p>
        </div>

      </div>
      <div class="w-full bg-yellow-light h-full  md:h-[450px] p-6 rounded-2xl relative">
        <img class="w-full object-cover h-full" :src="bucket + 'public/img/png/Frame.png'" alt="">
      </div>
    </div>
  </div>
  <div class="bg-blue-dark px-3 relative py-14">
    <img class="absolute w-full top-0 left-0 object-cover h-full" :src="bucket + 'public/svg/lines/lineHomeWhy.svg'"
      alt="">
    <div class="relative">
      <Heanding :type="'h2'" :msg="'Why AutoSensei?'" />
      <p class=" text-xs md:text-lg font-normal text-base-gray text-center">Auction your car to dealers right from your
        home, for
        the
        best price.
      </p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 p-4 gap-10 md:gap-20 relative lg:px-20 h-full">
      <div v-for="(  item, index  ) in   WhyAutoSensei  " :key="index" class="flex flex-col items-center gap-5">
        <component :is="item.icon"></component>
        <h5 class=" text-2xl text-center font-semibold text-white"> {{ item.title }} </h5>
        <p class=" text-xs md:text-sm text-center text-base-gray font-normal"> {{ item.pre_title }}</p>
      </div>
    </div>
    <div class="w-full justify-center flex-col gap-5 items-center relative flex ">
      <p class="text-white text-xs md:text-base">Want to know more?</p>
      <button id="getStarted" @click="goToHome()" class="btn bg-primary text-base-black">Get Started</button>
    </div>
  </div>
  <!--  <div class="relative w-full">
    <IconPlay v-if="!isPlaying" @click="play"
      class="absolute w-[50px] md:w-auto z-50 cursor-pointer top-[35%] left-[45%] md:top-1/2 md:left-1/2" />
    <video @click="isPlaying ? paused : play" ref="videoPlayer" :controls="isPlaying ? true : false"
      class="w-full object-cover h-full">
      <source src="../assets/video/cards.mp4" type="video/mp4" />
    </video>
  </div> -->
  <!--  <div class="bg-base-gray-light py-14">
    <div class="relative p-4">
      <Heanding :type="'h2'" :color="'text-base-black'" :msg="'Sold Auction Vehicles'" />
      <p class="text-lg font-normal text-blue-dark text-center">Auction your car to dealers right from your home, for the
        best price.
      </p>
    </div>
    <div class="contents sm:grid md:grid-cols-2 lg:grid-cols-4 md:p-5 lg:p-14 gap-4 ">
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
    </div>
    <div class="w-full justify-center flex-col gap-5 items-center relative flex ">
      <p class="text-base-black">Continue exploring new cars</p>
      <button class="btn bg-base-black text-primary ">View Sold Auctions</button>
    </div>
  </div> -->
  <div class="bg-primary relative md:h-screen pt-14">
    <div class="relative flex flex-col items-center">
      <Heanding :type="'h2'" :color="'text-base-black '" :msg="'Sell Your Vehicle'" />
      <p class=" text-xs md:text-lg font-normal text-blue-dark text-center">Our platform strives to create a change that
        supports
        customers in a market of inflation.
      </p>
      <button id="sellToday" @click="goToHome()" class="btn mt-10 bg-base-black text-primary ">Sell Your Car Today</button>
    </div>
    <img class="relative mt-6 md:absolute w-full bottom-0 " :src="bucket + 'public/svg/bannerpeople.svg'" alt="">
  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from "vue";
import IconCardFree from '../components/icons/home/IconCardFree.vue'
import IconPlay from '../components/icons/home/iconPlay.vue'
import iconCheckbox from '../components/icons/home/iconCheckbox.vue'
import { useRoute, useRouter } from 'vue-router'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useAuthStore } from "@/stores/auth";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { WhyAutoSensei } from "../Json/Home";
import Heanding from "../components/Headings/Heanding.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    IconCardFree,
    IconPlay,
    iconCheckbox,
    Heanding
  },
  setup() {
    let videoPlayer = ref()
    let isPlaying = ref(false)
    const route = useRoute();
    const router = useRouter();
    const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
    const authStore = useAuthStore()
    const goToHome = async () => {
      console.log('authStore.userData', authStore.userData)
      if (authStore.userData._id) {
        switch (authStore.userData.type) {
          case 0:
            await router.push({ path: '/inicio' })

            break;
          case 1:
            await router.push({ path: '/all' })

            break;
          case 2:
            await router.push({ path: '/upcoming' })

            break;

          default:
            break;
        }
      } else {
        await router.push({ path: '/login/sellers' })

      }
    }
    const play = () => {
      videoPlayer.value.play();
      isPlaying.value = true
    }
    const paused = () => {
      videoPlayer.value.pause();
      isPlaying.value = false
    }
    onMounted(() => {
      console.log('route', route)
      console.log('router', router)
    })

    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      modules: [Navigation, Pagination, Scrollbar, A11y],
      IconCardFree,
      IconPlay,
      iconCheckbox,
      play,
      paused,
      isPlaying,
      WhyAutoSensei,
      videoPlayer,
      Heanding,
      authStore,
      goToHome,
      bucket
    };
  },
};
</script>
