<template>
  <div class="w-full pt-10 relative z-10 h-screen bg-blue-dark ">
    <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 p-5 pt-20 lg:p-28 !pb-0 h-full">
      <div class="flex flex-col items-start gap-10">
        <p class="text-primary uppercase"> {{ $t("home.pre_title") }}</p>
        <h1 class="text-4xl mg:text-6xl xl:text-8xl font-bold text-white"> {{ $t("home.title") }}</h1>
        <p class="text-base-white">{{ $t("home.subt_title") }}</p>
        <button class="btn bg-primary text-base-black">{{ $t("sell_your_car") }}</button>
      </div>
      <div class="w-full h-full relative">
        <img class="absolute w-full h-full lg:h-[inherit] bottom-0" src="../assets/svg/carji.svg" alt="">
      </div>
    </div>
    <img class="absolute -z-10 bottom-0 w-full" src="../assets/svg/vehiculo.svg" alt="">
    <img class="absolute -z-10 top-0 right-0" src="../assets/svg/lines/lineHome.svg" alt="">
  </div>
  <div class="py-14 ">
    <Heanding :type="'h2'" :color="'text-base-black'" :msg="$t('home.how_it_works')" />
    <div class="grid lg:grid-cols-2 gap-10 md:gap-20 p-5 md:pt-20 lg:px-20 lg:pb-0 h-full">
      <div class="flex w-full flex-col items-start gap-10">

        <Heanding :type="'h3'" :color="'text-base-black'" :msg="$t('home.revolutionize')" />
        <p class="text-lg font-normal ">
          AutoSensei is a groundbreaking platform that redefines the way you sell your car, offering a swift and
          hassle-free experience to sell your vehicle, all while ensuring you receive the optimal value for your vehicle
          through competitive bids from local dealerships.
        </p>
      </div>
      <div class="w-full bg-yellow-light h-full  md:h-[450px] p-6 rounded-2xl relative">
        <img class="w-full object-cover h-full" src="../assets/img//png/Frame.png" alt="">
      </div>
    </div>
    <div class="grid lg:grid-cols-2 gap-10 md:gap-20 p-5 md:pt-20 lg:px-20 lg:pb-0 h-full">
      <div class="w-full bg-yellow-light h-full md:h-[450px]  p-6 rounded-2xl relative">
        <img class="w-full object-cover h-full" src="../assets/img//png/Frame2.png" alt="">
      </div>
      <div class="flex w-full flex-col items-start gap-10">
        <Heanding :type="'h3'" :color="'text-base-black'"
          :msg="`Effortlessly Begin Your Car Sale with AutoSensei's Guide`" />
        <p class="text-lg font-normal ">
          Getting started is a breeze. Just follow our user-friendly guide to post your car, providing essential vehicle
          details and the photos that dealerships are eager to see. Keep your driver's license and ownership documents
          ready for a quick and easy upload.
        </p>
      </div>

    </div>
    <div class="grid lg:grid-cols-2 gap-10 md:gap-20 p-5 md:pt-20 lg:px-20 lg:pb-0 h-full">
      <div class="flex w-full flex-col items-start gap-10">
        <Heanding :type="'h3'" :color="'text-base-black'" :msg="`Store, Start, and Secure Bids with Ease!`" />
        <p class="text-lg font-normal ">
          Once you enter your vehicle's details, they'll be stored in the 'Parked' section. You can kickstart your auction
          at your convenience, and just relax as the bids roll in. When you're happy with a bid, accept it, and arrange
          drop-off and payment as agreed.
        </p>
      </div>
      <div class="w-full bg-yellow-light h-full  md:h-[450px] p-6 rounded-2xl relative">
        <img class="w-full object-cover h-full" src="../assets/img//png/Frame3.png" alt="">
      </div>
    </div>
  </div>
  <div class="bg-blue-dark relative py-14">
    <img class="absolute w-full top-0  object-cover h-full" src="../assets/svg/lines/lineHomeWhy.svg" alt="">
    <div class="relative">
      <Heanding :type="'h2'" :msg="'Why AutoSensei?'" />
      <p class="text-lg font-normal text-base-gray text-center">Auction your car to dealers right from your home, for the
        best price.
      </p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 p-20 gap-20 relative lg:px-20 h-full">
      <div v-for="(  item, index  ) in   WhyAutoSensei  " :key="index" class="flex flex-col items-center gap-5">
        <component :is="item.icon"></component>
        <h5 class=" text-2xl text-center font-semibold text-white"> {{ item.title }} </h5>
        <p class=" text-sm text-center text-base-gray font-normal"> {{ item.pre_title }}</p>
      </div>
    </div>
    <div class="w-full justify-center flex-col gap-5 items-center relative flex ">
      <p class="text-white">Want to know more?</p>
      <button class="btn bg-primary text-base-black">Get Started</button>
    </div>
  </div>
  <div class="relative w-full">
    <IconPlay v-if="!isPlaying" @click="play"
      class="absolute w-[50px] md:w-auto z-50 cursor-pointer top-[35%] left-[45%] md:top-1/2 md:left-1/2" />
    <video @click="isPlaying ? paused : play" ref="videoPlayer" :controls="isPlaying ? true : false"
      class="w-full object-cover h-full">
      <source src="../assets/video/cards.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="bg-base-gray-light py-14">
    <div class="relative">
      <Heanding :type="'h2'" :color="'text-base-black'" :msg="'Sold Auction Vehicles'" />
      <p class="text-lg font-normal text-blue-dark text-center">Auction your car to dealers right from your home, for the
        best price.
      </p>
    </div>
    <div class="contents sm:grid md:grid-cols-2 lg:grid-cols-4 md:p-5 lg:p-14 gap-4 ">
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t39.30808-6/402650390_10230594910592586_3320395203635743553_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HLjJnWHTH3cAX_i0w80&_nc_ht=scontent.fccs9-1.fna&oh=00_AfCtYSvCA0hYdzIpabpOaTJq2yUrkS7p39XfHYvJvu-cTw&oe=656022B2"
              alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t39.30808-6/402657261_10230594864791441_5305654713800610995_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7ywy2Mk3GCwAX_SMZJR&_nc_ht=scontent.fccs9-1.fna&oh=00_AfBQ6kay7jTNwpaZGISVivV9YVtz6Axfj2cJQ6t4D6mFww&oe=65601D55"
              alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t39.30808-6/402631808_10230594865231452_512220745337807809_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9LrqfTejTrQAX9QJFH6&_nc_ht=scontent.fccs9-1.fna&oh=00_AfDgYMIfGWS3KxpiMDlQ31sqMGUs8mUmy_SlOvgVDG_Xvw&oe=6560398C"
              alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t39.30808-6/402652031_10230594863831417_3355837870493857108_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GW_PuflxKPwAX-MrVDt&_nc_ht=scontent.fccs9-1.fna&oh=00_AfD3ROSkl14u5lFw9OBVcpdagIGPjycF3W7ViZzI5_M_mA&oe=655F21B4"
              alt="">
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
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t45.5328-4/351724424_6486728198122919_6963491804068492186_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=VYhk0-BIxD4AX-LOuG7&_nc_ht=scontent.fccs9-1.fna&oh=00_AfABKLZzAwFwZSLaLhIiSzsG2EJ_uPNGRLkDFmYVyX0Iag&oe=655F884E"
              alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t45.5328-4/365500063_24327088653545075_6390645693964396919_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=vvA-Y656QpsAX-AFFp_&_nc_ht=scontent.fccs9-1.fna&oh=00_AfBXyDlZw4nY-h4w0guJgWjg6EwKw7fL78qXYpIaX1574w&oe=65606C4E"
              alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t45.5328-4/366034318_6946749978679045_3715556629228025059_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=qxrBIKQcFN0AX-pePEt&_nc_ht=scontent.fccs9-1.fna&oh=00_AfA_NPRxYgW2Eqk5-4B00oHziFcxxAzSOD5Jbh7l9BiUuQ&oe=655FBC78"
              alt="">
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
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t39.30808-6/402117332_10162134017184162_3595495281193056070_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L4vtAU1aWPIAX8Tgb47&_nc_ht=scontent.fccs9-1.fna&oh=00_AfA3vVref8hQnJvhfP6tfpv_VXK4s9RoIEO8BtGeZBwp8w&oe=655FE844"
              alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t39.30808-6/402858605_10162134013839162_8583008530928023253_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yoG7N0ycLSMAX8xLywa&_nc_ht=scontent.fccs9-1.fna&oh=00_AfD49WbKG5nGQgc2nIjlRFsbfKBeI7-iKHW8GIFds9XFLg&oe=655F4643"
              alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t39.30808-6/402059321_10162134013999162_1720359447289382942_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nddIwKrAFz4AX8g99pY&_nc_ht=scontent.fccs9-1.fna&oh=00_AfCFbixEibjQ799OKnnAdgkFEG9tvfE9ZmWBVyDtCIgW6w&oe=65608BAB"
              alt="">
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
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t45.5328-4/397967047_5136415619815617_3592523180470798098_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=701lxfu3eisAX-EDNK5&_nc_ht=scontent.fccs9-1.fna&oh=00_AfAPxKk9OXmbWZ-Ci5hFfm0G6rfom5vXQUfINnd0puxATQ&oe=655FE47B"
              alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t45.5328-4/398939038_6942608635828738_1367229765502955313_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=6QJxSHAYgxsAX_TOq8P&_nc_ht=scontent.fccs9-1.fna&oh=00_AfBS7CiKdzEPE2BS9VOjP667Th6ZMnM9irSFqsJsqea-CA&oe=655FA9C8"
              alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full"
              src="https://scontent.fccs9-1.fna.fbcdn.net/v/t45.5328-4/399047659_6587055898070002_4687430094196525477_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=lASbwMGKifIAX_q755T&_nc_ht=scontent.fccs9-1.fna&oh=00_AfCFD9FrE5QgZ3jMD_u2gXwTeCsaO97evUgcijRiehzeLw&oe=65607A05"
              alt="">
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
  </div>
  <div class="bg-primary relative md:h-screen pt-14">
    <div class="relative flex flex-col items-center">
      <Heanding :type="'h2'" :color="'text-base-black'" :msg="'Sell Your Vehicle'" />
      <p class="text-lg font-normal text-blue-dark text-center">Our platform strives to create a change that supports
        customers in a market of inflation.
      </p>
      <button class="btn mt-10 bg-base-black text-primary ">Sell Your Car Today</button>
    </div>
    <img class="relative mt-6 md:absolute w-full bottom-0 " src="../assets/svg/bannerpeople.svg" alt="">
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import IconCardFree from '../components/icons/home/IconCardFree.vue'
import IconPlay from '../components/icons/home/IconPlay.vue'
import iconCheckbox from '../components/icons/home/iconCheckbox.vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
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
    const play = () => {
      videoPlayer.value.play();
      isPlaying.value = true
    }
    const paused = () => {
      videoPlayer.value.pause();
      isPlaying.value = false
    }

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
    };
  },
};
</script>
