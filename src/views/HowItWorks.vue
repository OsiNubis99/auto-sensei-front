
<template>
    <div class="w-full pt-10 relative z-10 h-[70vh] bg-blue-dark ">
        <div class="w-full h-full flex flex-col justify-center items-center">
            <h1 class="text-4xl md:text-6xl  font-bold mb-7 text-center text-white">There is always an easy way <br> to sell
                your car
            </h1>
            <p class="text-base-white p-5">Our mission is to streamline and simplify the process of selling your car.</p>
        </div>
        <img class="absolute object-cover left-0 w-full h-full -z-10 top-0" src="../assets/img/png/howitworks.png" alt="">
    </div>
    <div class="container mx-auto w-full h-full">
        <div class="flex w-full flex-col justify-center items-center p-20">
            <Heanding :type="'h3'" color="#000" :msg="'Sell a Car Every Time Everywhere'" />
            <p>Post your car in less than 15 minutes</p>
        </div>
        <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-[4px] absolute border-opacity-20 border-[#D9D9D9] h-[95%] " style="left: 50%"></div>
            <!-- right timeline -->
            <div class="mb-8 flex justify-between items-center w-full right-timeline relative">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Create Your Auction</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Begin by creating your
                        vehicle auction on AutoSensei. Provide essential details about your vehicle, add high-quality
                        photos, and set a reserve price to ensure you receive the value you desire.</p>
                </div>
                <div
                    class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl   w-10 h-10 absolute top-0 left-[713px] rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div class="order-1  drop-shadow-xl rounded-lg shadow-xl w-5/12">
                    <img class="w-full h-full" src="../assets/img/png/timeline-1.png" alt="">
                </div>
            </div>

            <!-- left timeline -->
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full relative left-timeline">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Set Your Auction Live</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">When your auction is fully
                        prepared and you're ready to go, set it live on AutoSensei. You can choose the auction time and
                        duration to suit your preferences. Sit back and relax as potential buyers browse your listing and
                        place their bids.</p>
                </div>
                <div class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-0 left-[713px] w-10 h-10 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                </div>
                <div class="order-1 bg-gray-900 shadow-xl drop-shadow-xl rounded-lg  w-5/12 px-6 py-4">
                    <img class="w-full h-full" src="../assets/img/png/timeline-2.png" alt="">
                </div>
            </div>

            <!-- right timeline -->
            <div class="mb-8 flex justify-between items-center w-full right-timeline relative">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Communicate with Buyers</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">AutoSensei offers a
                        built-in chat feature that allows you to engage with potential buyers. Answer their questions,
                        provide additional information, and negotiate deals directly within the platform. The chat ensures
                        clear and efficient communication.</p>
                </div>
                <div class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-0 left-[713px] w-10 h-10 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                </div>
                <div class="order-1 bg-gray-100 shadow-xl drop-shadow-xl rounded-lg  w-5/12 px-6 py-4">
                    <img class="w-full h-full" src="../assets/img/png/timeline-3.png" alt="">

                </div>
            </div>

            <!-- left timeline -->
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full relative left-timeline">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Negotiate and Accept Bids</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">When you receive a bid that
                        aligns with your expectations, use the platform to negotiate with the buyer. Discuss the terms, ask
                        for any specific requirements, and finalize the deal. Once both parties are satisfied, accept the
                        bid and move forward.</p>
                </div>
                <div class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-0 left-[713px] w-10 h-10 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
                </div>
                <div class="order-1 bg-gray-900 shadow-xl drop-shadow-xl rounded-lg  w-5/12 px-6 py-4">
                    <img class="w-full h-full" src="../assets/img/png/timeline-4.png" alt="">

                </div>
            </div>
            <!-- right timeline -->
            <div class="mb-8 flex justify-between items-center w-full right-timeline relative">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Arrange Drop-off and Payment</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">After accepting the bid,
                        it's time to work out the logistics. Use AutoSensei's secure and user-friendly environment to
                        arrange the drop-off and payment details with the buyer. This ensures a smooth and hassle-free
                        experience.</p>
                </div>
                <div class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-0 left-[713px] w-10 h-10 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
                </div>
                <div class="order-1 bg-gray-100 shadow-xl drop-shadow-xl rounded-lg  w-5/12 px-6 py-4">
                    <img class="w-full h-full" src="../assets/img/png/timeline-5.png" alt="">

                </div>
            </div>

            <!-- left timeline -->
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full relative left-timeline">
                <div class="order-1 w-5/12">
                    <h3 class="mb-3 font-bold text-gray-800 text-xl">Close the Deal</h3>
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">The final step involves
                        completing the transaction. Ensure all necessary documentation is in order, and seal the deal. When
                        you're satisfied with the outcome, mark the transaction as completed. AutoSensei will handle the
                        rest, including payment processing and paperwork.</p>
                </div>
                <div class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-0 left-[713px] w-10 h-10 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg">6</h1>
                </div>
                <div class="order-1 bg-gray-900 shadow-xl drop-shadow-xl rounded-lg  w-5/12 px-6 py-4">
                    <img class="w-full h-full" src="../assets/img/png/timeline-6.png" alt="">

                </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full relative left-timeline">
                <div class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-[-20px] left-[725px] w-4 h-4 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg"></h1>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script >
import iconArrow from '../components/icons/iconArrow.vue'
import Heanding from '../components/Headings/Heanding.vue'
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
  
    
  