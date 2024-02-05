<template>
    <div v-show="storeModal.isActive"
        class="fixed z-[100] inset-0 flex items-center justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-md overflow-auto  bg-white rounded-lg shadow-xl">
            <div class="p-4 rounded-t-lg  bg-base-black flex items-center justify-between">
                <p class="text-xl text-white">Add Credit Card</p>
                <svg @click="storeModal.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div>
                <div class="flex p-4 flex-col gap-3">
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col gap-2">
                            <label class=" text-base font-medium " for="">Card Number</label>
                            <input class="p-2 w-full rounded-lg border border-[#C2C2C2] capitalize "
                                placeholder="Input card number" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}"
                                maxlength="19">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class=" text-base font-medium " for="">Name on Card</label>
                            <input class="p-2 w-full rounded-lg border border-[#C2C2C2] capitalize" placeholder="Input name"
                                type="text">
                        </div>
                    </div>
                    <div class="flex justify-between items-center gap-3">
                        <div class=" flex flex-col gap-2">
                            <label class=" text-base font-medium " for="">Expiry Date</label>
                            <input class="p-2 w-full rounded-lg border border-[#C2C2C2] capitalize"
                                placeholder="Input expired date" type="number">
                        </div>

                        <div class=" flex flex-col gap-2">
                            <label class=" text-base font-medium " for="">CVV/CVC</label>
                            <input class="p-2 w-full rounded-lg border border-[#C2C2C2] capitalize" placeholder="Input cvv"
                                pattern="[0-9\s]{13,19}" maxlength="4" type="password">
                        </div>
                    </div>
                </div>
                <div class="m-4">
                    <button
                        class="w-full p-2 items-center  bg-base-gray text-white  border rounded-md flex justify-center gap-3 border-[#C2C2C2] ">
                        <p>Add Credit Card</p>
                    </button>
                </div>
            </div>
        </div>
        <div v-if="loading" class="bg-[#000000a1;] left-0 top-0 absolute w-full h-full flex justify-center items-center">
            <div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
                <div class="absolute -left-[30px] z-10  h-[80px] w-[80px] ">
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
    </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import CurrencyInput from "../../Inputs/CurrencyInput.vue";
import { validationsDealerBidding } from "../../../validations/validationsDealerBidding";
import { ModalCrediCard } from '@/stores/modalCrediCard';
export default {
    components: { CurrencyInput },
    props: {
        form: {
            type: Object,
        },
    },
    setup(props) {
        const storeModal = ModalCrediCard()
        const loading = ref(false)
        return {
            storeModal,
            loading
        };
    },
};
</script>