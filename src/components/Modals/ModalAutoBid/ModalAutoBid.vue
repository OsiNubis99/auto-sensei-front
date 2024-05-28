<template>
    <div v-show="statusModal.isActive"
        class="fixed z-[100] inset-0 flex items-end md:items-center justify-center bg-base-black  bg-opacity-50">
        <div class=" w-full md:w-auto md:max-w-xl overflow-auto  bg-white rounded-lg shadow-xl animation-fade-modal">
            <div class=" p-2 md:p-4 rounded-t-lg  bg-base-black flex items-center justify-between">
                <p class=" text-md md:text-xl text-white">Auto Bid</p>
                <svg @click="closet" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8  cursor-pointer" fill="none"
                    viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div v-if="steps.step1 || (steps.step2 && state == 'edit')">
                <div class="flex gap-3 items-start border-b border-[#E0E0E0] p-2 pb-0 md:p-5">
                    <div class=" w-[40%] h-[100px]  md:w-[160px]  md:h-[125px] ">
                        <img v-if="statusModal.data?.photos" class="w-full h-full shadow-xl rounded-lg object-cover"
                            :src="bucket + statusModal.data?.photos[0].url" alt="">
                        <img class=" shadow-xl w-full rounded-lg object-cover " v-else src="@/assets/img/jpg/image.jpg"
                            alt="">
                    </div>
                    <div class="h-[100px] mb-2 flex md:justify-between flex-col">
                        <p class=" font-semibold capitalize md:text-base text-sm">
                            {{ statusModal.data?.vehicleDetails?.year }} {{ statusModal.data?.vehicleDetails?.make }}
                            {{ statusModal.data?.vehicleDetails?.model }}</p>
                        <div>
                            <p class="capitalize text-sm md:text-base mt-8">Current Bid</p>
                            <p class="font-medium text-sm text-base-black md:text-2xl">
                                ${{ statusModal.data?.bids[0]?.amount }}</p>
                        </div>
                    </div>
                </div>
                <template v-if="steps.step1">
                    <div class="md:m-5 p-2 m-2 md:p-4 border rounded-lg border-[#E0E0E0]">
                        <p class=" text-sm md:text-base font-semibold">Bid Information</p>
                        <div class="flex gap-2 md:gap-3 mt-4 flex-col">
                            <div class="flex gap-2 items-center justify-between">
                                <div class="flex gap-2 items-center">
                                    <svg class="md:h-[22px] h-[15px] w-[15px] md:w-[22px]"
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                        fill="none">
                                        <path
                                            d="M2.74967 3.25H19.2497C19.4928 3.25 19.7259 3.34658 19.8979 3.51849C20.0698 3.69039 20.1663 3.92355 20.1663 4.16667V18.8333C20.1663 19.0764 20.0698 19.3096 19.8979 19.4815C19.7259 19.6534 19.4928 19.75 19.2497 19.75H2.74967C2.50656 19.75 2.2734 19.6534 2.10149 19.4815C1.92958 19.3096 1.83301 19.0764 1.83301 18.8333V4.16667C1.83301 3.92355 1.92958 3.69039 2.10149 3.51849C2.2734 3.34658 2.50656 3.25 2.74967 3.25ZM3.66634 5.08333V17.9167H18.333V5.08333H3.66634ZM7.79134 13.3333H12.833C12.9546 13.3333 13.0711 13.285 13.1571 13.1991C13.2431 13.1131 13.2913 12.9966 13.2913 12.875C13.2913 12.7534 13.2431 12.6369 13.1571 12.5509C13.0711 12.465 12.9546 12.4167 12.833 12.4167H9.16634C8.55855 12.4167 7.97566 12.1752 7.54589 11.7455C7.11612 11.3157 6.87467 10.7328 6.87467 10.125C6.87467 9.51721 7.11612 8.93432 7.54589 8.50455C7.97566 8.07478 8.55855 7.83333 9.16634 7.83333H10.083V6H11.9163V7.83333H14.208V9.66667H9.16634C9.04478 9.66667 8.9282 9.71495 8.84225 9.80091C8.7563 9.88686 8.70801 10.0034 8.70801 10.125C8.70801 10.2466 8.7563 10.3631 8.84225 10.4491C8.9282 10.535 9.04478 10.5833 9.16634 10.5833H12.833C13.4408 10.5833 14.0237 10.8248 14.4535 11.2545C14.8832 11.6843 15.1247 12.2672 15.1247 12.875C15.1247 13.4828 14.8832 14.0657 14.4535 14.4955C14.0237 14.9252 13.4408 15.1667 12.833 15.1667H11.9163V17H10.083V15.1667H7.79134V13.3333Z"
                                            fill="#0A0A0A" />
                                    </svg>
                                    <p class=" text-xs font-medium md:text-base">Maximum Bid Amount</p>
                                </div>
                                <p class="font-medium text-xs md:text-base">${{ statusModal.data?.bids[0]?.biddingLimit
                                    }}</p>
                            </div>
                            <div class="flex gap-2 items-center justify-between">
                                <div class="flex gap-2 items-center">
                                    <svg class="md:h-[22px] h-[15px] w-[15px] md:w-[22px]"
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                        fill="none">
                                        <path
                                            d="M2.74967 3.25H19.2497C19.4928 3.25 19.7259 3.34658 19.8979 3.51849C20.0698 3.69039 20.1663 3.92355 20.1663 4.16667V18.8333C20.1663 19.0764 20.0698 19.3096 19.8979 19.4815C19.7259 19.6534 19.4928 19.75 19.2497 19.75H2.74967C2.50656 19.75 2.2734 19.6534 2.10149 19.4815C1.92958 19.3096 1.83301 19.0764 1.83301 18.8333V4.16667C1.83301 3.92355 1.92958 3.69039 2.10149 3.51849C2.2734 3.34658 2.50656 3.25 2.74967 3.25ZM18.333 10.5833H3.66634V17.9167H18.333V10.5833ZM18.333 8.75V5.08333H3.66634V8.75H18.333ZM12.833 14.25H16.4997V16.0833H12.833V14.25Z"
                                            fill="#0A0A0A" />
                                    </svg>
                                    <p class=" text-xs font-medium md:text-base">Credit Card Name</p>
                                </div>
                                <p class="font-medium text-xs md:text-base">{{
        statusModal.data?.bids[0]?.paymentMethod?.billingDetails?.name }}</p>
                            </div>
                            <div class="flex gap-2 items-center justify-between">
                                <div class="flex gap-2 items-center">
                                    <!--    <svg class="invisible " xmlns="http://www.w3.org/2000/svg" width="22" height="23"
                                        viewBox="0 0 22 23" fill="none">
                                        <path
                                            d="M2.74967 3.25H19.2497C19.4928 3.25 19.7259 3.34658 19.8979 3.51849C20.0698 3.69039 20.1663 3.92355 20.1663 4.16667V18.8333C20.1663 19.0764 20.0698 19.3096 19.8979 19.4815C19.7259 19.6534 19.4928 19.75 19.2497 19.75H2.74967C2.50656 19.75 2.2734 19.6534 2.10149 19.4815C1.92958 19.3096 1.83301 19.0764 1.83301 18.8333V4.16667C1.83301 3.92355 1.92958 3.69039 2.10149 3.51849C2.2734 3.34658 2.50656 3.25 2.74967 3.25ZM18.333 10.5833H3.66634V17.9167H18.333V10.5833ZM18.333 8.75V5.08333H3.66634V8.75H18.333ZM12.833 14.25H16.4997V16.0833H12.833V14.25Z"
                                            fill="#0A0A0A" />
                                    </svg> -->
                                    <p class=" text-xs whitespace-pre font-medium md:text-base">Credit Card Number</p>
                                </div>
                                <p class="font-medium text-xs whitespace-pre md:text-base">**** **** **** {{
        statusModal.data?.bids[0]?.paymentMethod?.card?.last4 }}</p>
                            </div>
                        </div>

                    </div>
                    <div class="flex w-full gap-4 p-2 md:p-5 pt-0 items-center">
                        <button @click="candelAutobid(1, 'cancel')"
                            class="btn w-full border rounded-lg border-[#E0E0E0] whitespace-pre text-error ">Cancel Auto
                            Bid</button>
                        <button @click="editAutobid(1, 'edit')" class="btn w-full bg-primary text-blue-dark ">Edit Auto
                            Bid</button>
                    </div>
                </template>

            </div>
            <div v-if="steps.step2">

                <template v-if="state == 'edit'">
                    <div class="p-5">
                        <div class="flex gap-1 flex-col justify-start">
                            <p class="font-semibold text-sm md:text-base">Maximum Bid Amount</p>
                            <p class="text-xs md:text-base">Please enter a price higher than the current bid</p>
                        </div>
                        <!-- <CurrencyInput :key="counterKey" v-model="formData.placeyourbid"
                            :error='invalid?.placeyourbid ? true : false' :options="{ currency: 'USD' }"
                            :placeHolder="`$ Min ${statusModal?.data?.vehicleDetails?.basePrice}`" /> -->



                        <input :key="counterKey" class="p-2 w-full rounded-lg border border-[#C2C2C2] uppercase"
                            v-model="formData.placeyourbid"
                            :class="invalid?.placeyourbid && 'bg-[#F6E9E9] border border-[#FF333E] text-[#0A0A0A]'"
                            ref="inputRef" type="text"
                            :placeHolder="`$ Min ${statusModal.data?.bids[0]?.amount ? statusModal.data?.bids[0]?.amount : statusModal?.data?.vehicleDetails?.basePrice}`" />
                        <p class="text-[#858585] mt-2"> {{ invalid?.placeyourbid }} </p>
                        <div class="form-group mt-4">
                            <input type="checkbox" v-model="formData.notify" id="html">
                            <label for="html" class="text-xs md:text-base">Notify me when the current bid approaches my
                                maximum bid amount</label>
                        </div>
                        <button @click="updateAmounBit"
                            :class="sizeObjet == 0 ? 'bg-primary' : 'bg-base-gray text-white'"
                            :disabled="sizeObjet == 0 ? false : true" class="btn w-full  text-blue-dark ">Update Auto
                            Bid</button>
                    </div>
                </template>

                <template v-if="state == 'cancel'">
                    <div class="p-5 flex flex-col items-center gap-4">
                        <img src="@/assets/svg/canceledAuto.svg" alt="">
                        <p class="font-semibold text-xl">Let’s keep your bids winning</p>
                        <p class="text-center">Give your best bid amount reducing the time spent watching the bid with
                            our
                            auto
                            bid feature. Are you
                            sure want to cancel?</p>
                    </div>
                    <div class="flex w-full gap-4 p-5 pt-0 items-center">
                        <button @click="editAutobid(2, 'cancel')" class="btn w-full bg-primary text-blue-dark ">Keep
                            Auto
                            Bid</button>
                        <button @click="candelAutobid(2, 'cancel')"
                            class="btn w-full border rounded-lg border-[#E0E0E0] text-error ">Cancel Auto Bid</button>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import CurrencyInput from "../../Inputs/CurrencyInput.vue";
import { validationsAutoBids } from "../../../validations/validationsDealerBidding";
import { ModalAutoBid } from '@/stores/modalAutoBid';
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import { useCurrencyInput } from 'vue-currency-input'
import { toast } from "vue3-toastify";
export default {
    props: {
        form: {
            type: Object,
        },
        index: {
            type: Function,
        },
    },
    setup(props) {
        const { inputRef } = useCurrencyInput({ currency: 'USD' })
        const isOpen = ref(true);
        const value = ref('')
        const formData = ref(props.form);
        const statusModal = ModalAutoBid()
        const counterKey = ref(0)
        const invalid = ref(null)
        const sizeObjet = ref(null)
        const loading = ref(false)
        const autionsStore = useAuctionStore()
        const authStore = useAuthStore()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const addAmount = () => {
            counterKey.value += 1
            statusModal.data.vehicleDetails.basePrice += 100



            invalid.value = validationsAutoBids(formData.value, steps.value, statusModal.data.vehicleDetails.basePrice, statusModal.from);
            sizeObjet.value = Object.entries(invalid.value).length
        }
        const steps = ref({
            step1: true,
            step2: false,
            step3: false,
        });
        const state = ref('')
        const formatCardNumber = (event) => {
            let value = event.target.value;
            if (!value) return
            formData.value.cardNumber = value.replaceAll(" ", "")
                .split("")
                .map((v, index) => {
                    if (index > 0 && index % 4 == 0) {
                        return " " + v
                    } else {
                        return v
                    }
                }).join("")
        }
        const closet = () => {
            statusModal.closeModal(false)
            formData.value.placeyourbid = 0
            formData.value.cardNumber = undefined
            formData.value.nameOnCard = undefined
            formData.value.expiryDate = undefined
            formData.value.cvv = undefined
            formData.value.saveCard = undefined
            formData.value.termsConditions = undefined
            formData.value.notify = undefined
            formData.value.creditCard = undefined
        }
        const editAutobid = (paso, estado) => {
            state.value = estado
            switch (paso) {
                case 1:
                    steps.value.step1 = false
                    steps.value.step2 = true
                    break;
                case 2:
                    if (estado == 'edit') {
                        steps.value.step1 = false
                        steps.value.step2 = true
                    } else {
                        statusModal.closeModal(false)
                        /*   props.index() */
                    }
                    break;

                default:
                    break;
            }
        }
        const candelAutobid = async (paso, estado) => {
            state.value = estado
            switch (paso) {
                case 1:
                    steps.value.step1 = false
                    steps.value.step2 = true
                    break;
                case 2:
                    let payload = {
                        amount: null,
                        biddingLimit: null,
                    }
                    loading.value = true
                    try {
                        await autionsStore.autionsBit({ uuid: statusModal.data._id, payload })
                    } catch (error) {
                        toast(error?.response?.data?.message || "An error has occurred", {
                            type: "error",
                        });
                        loading.value = false
                    } finally {

                        loading.value = false
                        statusModal.closeModal(false)
                        toast('Successfully cancelled your auto bid', { type: "success", position: "top-center", theme: "colored", });
                        /*  props.index() */

                    }
                    break;

                default:
                    break;
            }

        }
        const updateAmounBit = async () => {
            let payload = {
                biddingLimit: formData.value.placeyourbid,
            }

            loading.value = true
            try {
                await autionsStore.autionsBitUpdate({ uuid: statusModal.data._id, payload })
            } catch (error) {
                toast(error?.response?.data?.message || "An error has occurred", {
                    type: "error",
                });
                loading.value = false
            } finally {
                toast('Successfully cancelled your auto bid', { type: "success", position: "top-center", theme: "colored", });
                loading.value = false
                statusModal.closeModal(false)
                /*  props.index() */
            }
        }
        watch(formData.value, async (newQuestion, oldQuestion) => {
            invalid.value = validationsAutoBids(formData.value, steps.value, statusModal.data.vehicleDetails.basePrice, statusModal.from, authStore.userData);
            sizeObjet.value = Object.entries(invalid.value).length
            if (newQuestion.placeyourbid > statusModal?.data?.vehicleDetails?.basePrice) {
                counterKey.value += 1
            }
        })
        onMounted(() => {
            if (statusModal.data.bids[0]) {
                console.log('statusModal.data', statusModal.data)
                statusModal.data.vehicleDetails.basePrice = statusModal.data.bids[0].amount
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });
                statusModal.data.amountBid = formatter?.format(statusModal.data.amountBid)
            }
        })

        return {
            isOpen,
            formData,
            value,
            addAmount,
            counterKey,
            sizeObjet,
            invalid,
            steps,
            formatCardNumber,
            statusModal,
            authStore,
            closet,
            candelAutobid,
            editAutobid,
            state,
            updateAmounBit,
            bucket,
            inputRef
        };
    },
    components: { CurrencyInput }
};
</script>