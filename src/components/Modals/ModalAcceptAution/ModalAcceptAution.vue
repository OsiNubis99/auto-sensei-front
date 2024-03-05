<template>
    <div v-show="statusModal.isActive"
        class="fixed inset-0 flex items-end md:items-center z-50 justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-md overflow-auto  bg-white rounded-lg shadow-xl animation-fade-modal">
            <div class=" p-2 md:p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p v-if="steps.step1" class=" text-sm md:text-xl text-white">Accept Auction</p>
                <p v-if="steps.step2" class=" text-sm md:text-xl text-white">Acceptance</p>
                <svg @click="close" xmlns="http://www.w3.org/2000/svg" class=" w-6 h-8 md:w-8   md:h-8  cursor-pointer"
                    fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div v-if="steps.step1" class=" p-2 md:p-4 flex md:gap-3 flex-col  ">
                <div class="flex justify-start items-center gap-2">
                    <div class="flex gap-3 items-start ">
                        <div class=" w-[80px] md:w-[120px]   md:h-[90px]">
                            <img v-if="statusModal.dataAutiont?.photos"
                                class="w-full h-full shadow-xl rounded-lg object-cover"
                                :src="bucket + statusModal.dataAutiont?.photos[0].url" alt="">
                            <img class=" shadow-xl w-full rounded-lg object-cover " v-else
                                src="@/assets/img/jpg/image.jpg" alt="">
                        </div>
                        <div class="flex justify-between flex-col h-full">
                            <p class=" font-semibold capitalize md:text-base text-sm  ">{{
        statusModal.dataAutiont?.vehicleDetails?.year }} {{
        statusModal.dataAutiont?.vehicleDetails?.make }} {{
        statusModal.dataAutiont?.vehicleDetails?.model }}</p>
                            <p class="capitalize text-sm md:text-base ">Final Bid</p>
                            <p class="font-medium text-sm text-base-black md:text-2xl">${{
        statusModal.dataAutiont?.bids[0]?.amount }}/<span
                                    class="text-[#666666] mt-1 text-xs md:text-base ">{{
        statusModal.dataAutiont?.bids?.length }} Bids</span> </p>
                        </div>
                    </div>
                </div>
                <div class="mt-2 border-[#E0E0E0] border-t-[1px]">
                    <div class="pt-4 ">
                        <p class="text-xs md:text-base">Are you sure you want to accept the final bid for the <strong>
                                {{ statusModal.dataAutiont?.vehicleDetails?.model }} </strong>?</p>
                        <div class="flex pt-4 gap-2 items-center justify-between">
                            <button @click="close" class="btn w-full border border-[#E0E0E0] ">No</button>
                            <button @click="next" class="btn w-full bg-primary rounded-md ">Yes</button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="p-4 flex justify-center items-center flex-col gap-3" v-if="steps.step2">
                <p class=" font-semibold capitalize md:text-xl">Final Bid Approved!</p>
                <p class="capitalize text-xs md:text-base ">Download the Actual Sheet Below and Hand It to the Buyer During the Vehicle
                    Drop-Off
                    Process.</p>
                <div class="w-full">
                    <iframe src="https://www.africau.edu/images/default/sample.pdf" class="w-full h-[40vh]" 
                        frameborder="0"></iframe>
                </div>

                <button class="btn w-full bg-primary rounded-md">
                    Download PDF
                </button>

            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { ModalAcceptAution } from '@/stores/modalAcceptAution';
export default {
    props: {
        form: {
            type: Object,
        },
        acceptAution: {
            type: Function
        },
        index: {
            type: Function
        }

    },
    setup(props) {
        const formData = ref(props.form)
        const statusModal = ModalAcceptAution()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const steps = ref({
            step1: true,
            step2: false
        })
        const next = async () => {
            let res = await props.acceptAution()
            if (res == '200') {
                steps.value.step1 = false
                steps.value.step2 = true
            }
        }
        const close = () => {
            statusModal.closeModal(false)
            if (steps.value.step2) {
                props.index()
            }

        }

        return {
            formData,
            statusModal,
            bucket,
            steps,
            next,
            close
        };
    },
};
</script>