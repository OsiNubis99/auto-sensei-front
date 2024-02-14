
<template>
    <div class="w-full pt-10 relative -z-10 h-[70vh] bg-blue-dark ">
        <div class="w-full h-full flex flex-col justify-center items-center">
            <h1 class="text-4xl md:text-6xl  font-bold mb-7 text-center text-white">There is always an easy way <br> to sell
                your car
            </h1>
            <p class="text-base-white p-5">Our mission is to streamline and simplify the process of selling your car.</p>
        </div>
        <img class="absolute object-cover left-0 w-full h-full -z-10 top-0" src="@/assets/img/png/howitworks.png" alt="">
    </div>
    <div class="container mx-auto w-full h-full">
        <div class="flex w-full flex-col justify-center items-center p-20">
            <Heanding :type="'h3'" color="#000" :msg="'Let the biddings begin!'" />
            <p>Buy a car in little as 24 hours!</p>
        </div>
        <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-[4px] absolute border-opacity-20 border-[#D9D9D9] h-[95%] " style="left: 50%"></div>
            <!-- right timeline -->
            <div class="mb-8 flex justify-between items-center w-full right-timeline relative">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Find Your Ideal Car</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Start by browsing through
                        our extensive listings of available cars. You can filter your search based on your preferences, such
                        as make, model, year, and more.</p>
                </div>
                <div
                    class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl   w-10 h-10 absolute top-0 left-[713px] rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div class="order-1  drop-shadow-xl rounded-lg shadow-xl w-5/12">
                    <img class="w-full h-full" src="@/assets/img/png/timeline-1.png" alt="">
                </div>
            </div>

            <!-- left timeline -->
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full relative left-timeline">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Place Your Bid</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">AutoSensei is equipped with
                        an exclusive AutoBid Feature so you don't need to worry about watching your bids, or you can bid
                        manually if you'd like. Enter the maximim amount you're willing to pay for the car, and our system
                        will automatically place incremental bids on your behalf, ensuring you stay competitive and don't
                        need to spend your full amount unless necessary.</p>
                </div>
                <div
                    class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-0 left-[713px] w-10 h-10 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                </div>
                <div class="order-1 bg-gray-900 shadow-xl drop-shadow-xl rounded-lg  w-5/12 px-6 py-4">
                    <img class="w-full h-full" src="@/assets/img/png/timeline-2.png" alt="">
                </div>
            </div>

            <!-- right timeline -->
            <div class="mb-8 flex justify-between items-center w-full right-timeline relative">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Track Your Bids & Stay Informed</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">AutoSensei real-time
                        updates will keep you informed about the current bid status and whether you are the leading bidder.
                        Receive notifications when other users place higher bids. You can choose to increase your bid if you
                        want to remain in the lead.</p>
                </div>
                <div
                    class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-0 left-[713px] w-10 h-10 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                </div>
                <div class="order-1 bg-gray-100 shadow-xl drop-shadow-xl rounded-lg  w-5/12 px-6 py-4">
                    <img class="w-full h-full" src="@/assets/img/png/timeline-3.png" alt="">

                </div>
            </div>

            <!-- left timeline -->
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full relative left-timeline">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Winning & Negotiate Bids</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">If your bid remains the
                        highest when the auction ends, the seller will choose to either accept your bid or decline it. If
                        they accept it, congratulations, you've won the car! Discuss the terms with the seller, ask for any
                        specific requirements, and finalize the deal.</p>
                </div>
                <div
                    class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-0 left-[713px] w-10 h-10 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
                </div>
                <div class="order-1 bg-gray-900 shadow-xl drop-shadow-xl rounded-lg  w-5/12 px-6 py-4">
                    <img class="w-full h-full" src="@/assets/img/png/timeline-4.png" alt="">

                </div>
            </div>
            <!-- right timeline -->
            <div class="mb-8 flex justify-between items-center w-full right-timeline relative">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Arrange Drop-off and Payment</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">After the seller accepts
                        the bid, it's time to work out the logistics. Use AutoSensei's secure environment to arrange the
                        drop off, and make payment arrangements with the seller once you verify the vehicle is as disclosed.
                        This ensures a smooth and hassle free process.</p>
                </div>
                <div
                    class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-0 left-[713px] w-10 h-10 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
                </div>
                <div class="order-1 bg-gray-100 shadow-xl drop-shadow-xl rounded-lg  w-5/12 px-6 py-4">
                    <img class="w-full h-full" src="@/assets/img/png/timeline-5.png" alt="">

                </div>
            </div>

            <!-- left timeline -->
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full relative left-timeline">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Time to Sell!</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Once the payment is
                        complete, the car is officially yours!
                        Time to sell your vehicle to potential buyers.</p>
                </div>
                <div
                    class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-0 left-[713px] w-10 h-10 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg">6</h1>
                </div>
                <div class="order-1 bg-gray-900 shadow-xl drop-shadow-xl rounded-lg  w-5/12 px-6 py-4">
                    <img class="w-full h-full" src="@/assets/img/png/timeline-6.png" alt="">

                </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full relative left-timeline">
                <div
                    class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-[-20px] left-[725px] w-4 h-4 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg"></h1>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script >
import iconArrow from '@/components/icons/iconArrow.vue'
import Heanding from '@/components/Headings/Heanding.vue'
import { useRouter, useRoute } from 'vue-router'

export default {
    components: {
        iconArrow,
        Heanding,
    },
    setup() {
        const route = useRouter();
        const redirectLogin = (redirect) => {
             
            route.push({ name: 'signup', params: { rol: redirect } })
        }
        return {
            iconArrow,
            Heanding,
            redirectLogin,
        };
    },
};
</script>
  
    
  