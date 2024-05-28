<template>
    <div v-show="statusModalView.isActive"
        class="fixed inset-0 flex items-end md:items-center md:justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-xl w-full h-[70vh] overflow-hidden  bg-white rounded-lg shadow-xl animation-fade-modal">
            <div class="h-full">
                <div class="md:p-4 p-2 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                    <p class=" text-md md:text-xl text-white">Details Bits</p>
                    <svg @click="statusModalView.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                        class=" w-5 md:w-8 md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="w-full p-2 h-full">
                    <p class=" text-md md:font-semibold md:text-xl ">Dealer Bids</p>
                    <div class="h-full md:pb-24 md:p-4 overflow-x-hidden flex gap-3 flex-col px-2 overflow-y-auto ">
                        <template v-for="(dealerBit, index) in statusModalView.aution?.bids" :key="index">
                            <div
                                :class="index == 0 && statusModalView.aution?.status == 'bids completed' ? 'border-[2px] p-2 border-[#05A54B] rounded-lg' : 'border-[#F0F0F0]  border-b'">
                                <div class="flex md:pr-4  md:py-3 pb-0 justify-between ">
                                    <div class="flex ">
                                        <div class=" w-[50px] h-[40px]  md:h-[60px] md:w-[60px]">
                                            <img v-if="dealerBit?.participant?.dealer?.picture"
                                                class="w-full shadow-lg rounded-lg h-full object-cover"
                                                :src="bucket + dealerBit?.participant?.dealer?.picture" alt="">
                                            <img class=" shadow-xl w-full h-full rounded-lg object-cover " v-else
                                                src="@/assets/img/jpg/image.jpg" alt="">
                                        </div>
                                        <div class="flex  p-2 flex-col items-start">
                                            <template v-if="statusModalView.aution?.status == 'bids completed'">
                                                <div class="flex gap-2 items-center">
                                                    <p v-if="dealerBit?.participant?.dealer?.name"
                                                        class=" text-xs md:text-base md:font-semibold capitalize w-[70px] md:w-auto truncate ">
                                                        {{ dealerBit?.participant?.dealer?.name }}
                                                    </p>
                                                    <p v-else
                                                        class=" text-xs md:text-base md:font-semibold capitalize w-[70px] md:w-auto truncate ">
                                                        Did not provide information
                                                    </p>

                                                    <svg class=" w-4 h-4 md:w-6 md:h-6"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                        fill="none">
                                                        <path
                                                            d="M8.66699 11.292V12.6667H12.0003V14H4.00033V12.6667H7.33366V11.292C6.04479 11.1295 4.85954 10.5022 4.00033 9.52783C3.14112 8.55349 2.66701 7.29907 2.66699 6V2H13.3337V6C13.3336 7.29907 12.8595 8.55349 12.0003 9.52783C11.1411 10.5022 9.95586 11.1295 8.66699 11.292ZM0.666992 3.33333H2.00033V6H0.666992V3.33333ZM14.0003 3.33333H15.3337V6H14.0003V3.33333Z"
                                                            fill="#05A54B" />
                                                    </svg>
                                                    <p
                                                        class="md:px-4 md:py-1 py-1 px-2 rounded-full text-[10px] md:text-base  bg-[#05A54B] text-white">
                                                        Winner</p>
                                                </div>

                                                <p class="text-[10px] md:text-lg whitespace-pre">{{
        moment(dealerBit?.updatedAt).format('MMMM DD YYYY, h: mm: ss a')
    }}</p>
                                            </template>
                                            <template v-else>
                                                <p v-if="dealerBit?.participant?.dealer?.name"
                                                    class=" text-xs md:text-base md:font-semibold capitalize w-[70px] md:w-auto truncate ">
                                                    {{ dealerBit?.participant?.dealer?.name }}
                                                </p>
                                                <p v-else
                                                    class=" text-xs md:text-base md:font-semibold capitalize w-[70px] md:w-auto truncate ">
                                                    Did not provide information
                                                </p>
                                                <p class="text-[10px] md:text-lg whitespace-pre">
                                                    {{ moment(dealerBit?.updatedAt).format('MMMM DD YYYY, h: mm: ssa')
                                                    }}</p>
                                            </template>

                                        </div>
                                    </div>
                                    <p class="font-semibold text-sm mt-7 md:mt-0 md:text-[1.5rem]">${{
        dealerBit.amount }}</p>
                                </div>
                                <RouterLink v-if="index == 0 && statusModalView.aution?.status == 'bids completed'"
                                    :to="{ name: 'inbox-seller', query: { id: statusModalView.aution?._id + '-' + statusModalView.aution?.bids[0].participant._id } }"
                                    class="w-full btn border hover:bg-primary transition-all ease-in duration-300  hover:text-white py-2 rounded-lg md:mt-4 border-[#F0F0F0] ">
                                    Contact
                                    Buyer</RouterLink>
                            </div>

                        </template>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { ModalDetailsBits } from '@/stores/modalDetailsBits';
import moment from "moment";
export default {
    setup(props) {
        const statusModalView = ModalDetailsBits()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        onMounted(() => {
            console.log('statusModalView', statusModalView.aution)
        })
        return {
            statusModalView,
            moment,
            bucket
        };
    },
    components: {
    }
};
</script>
