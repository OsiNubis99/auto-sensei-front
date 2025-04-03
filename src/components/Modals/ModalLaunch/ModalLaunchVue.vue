<template>
    <div v-show="statusModal.isActive"
        class="fixed inset-0 flex items-end md:items-center md:justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-md overflow-auto  bg-white rounded-lg shadow-xl  animation-fade-modal">
            <div class="md:p-4 p-2 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p class="text-sm md:text-xl text-white">Launch Auction</p>
                <svg @click="statusModal.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class=" p-2 pb-0 md:p-4 flex gap-3 flex-col  ">
                <div class="flex justify-start items-center gap-2">
                    <p class=" text-xs md:text-base">Options</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M8.78145 8.00048L5.48145 4.70048L6.42411 3.75781L10.6668 8.00048L6.42411 12.2431L5.48145 11.3005L8.78145 8.00048Z"
                            fill="#858585" />
                    </svg>
                    <p class="text-[#858585] text-xs md:text-base">Summary</p>
                </div>
                <div class="flex gap-3 items-start ">
                    <div v-if="formData?.images?.length > 0" class=" w-[90px] h-[70px] md:w-[120px] md:h-[90px]">
                        <img class="w-full h-full rounded-lg object-cover"
                            :src="formData?.images[0].bucket ? bucket + formData?.images[0]?.preview : formData?.images[0]?.preview"
                            alt="">
                    </div>
                    <div>
                        <p class="font-semibold text-xs md:text-base ">{{ formData?.year }} {{ formData?.make }} {{
                            formData?.model }}</p>
                        <p class="text-[10px] md:text-base">{{ formData?.saveCity?.name }}, {{
                            formData?.saveProvince?.name }}</p>
                    </div>
                </div>
            </div>
            <div class="mt-2 border-[#E0E0E0] border-t-[1px] ">
                <div class=" p-2  md:p-4">
                    <template v-if="(stepsVerifiqued.step1 && formData.launchOptions == 'none') ||
                        (stepsVerifiqued.step1 && formData.launchOptions == 'Launch now after verified') ||
                        (stepsDateTime.step1 && formData.launchOptions == 'Choose the date & time') ||
                        (stepsDateWeekeng.step1 && formData.launchOptions == 'Choose after hours (weekend)' ||
                            formData.launchOptions == null)">
                        <p class="md:font-semibold text-xs md:text-base ">Launch Options</p>
                        <p class=" text-[#858585] text-[10px] md:text-base">After you launch the auction we will review
                            & approve your auction. Your auction will be listed the next day from 9 am to 5pm.
                        </p>
                        <!--  <div class="w-full flex-col items-start mt-4 flex gap-2">
                            <label class="label-radio text-[12px] md:text-base !justify-start">
                                <input v-model="formData.launchOptions" type="radio" value="none" class="input-radio on"
                                    name="launch-option">
                                Next Day
                            </label>
                            <label class="label-radio text-[12px] md:text-base !justify-start">
                                <input v-model="formData.launchOptions" type="radio" value="Launch now after verified"
                                    class="input-radio on" name="launch-option">
                                Launch now after verified
                            </label>
                            <label class="label-radio text-[12px] md:text-base !justify-start">
                                <input v-model="formData.launchOptions" type="radio" value="Choose the date & time"
                                    class="input-radio on" name="launch-option">
                                Choose the date & time
                            </label>
                            <label class="label-radio text-[12px] md:text-base !justify-start">
                                <input v-model="formData.launchOptions" type="radio"
                                    value="Choose after hours (weekend)" class="input-radio on" name="launch-option">
                                Choose after hours (weekend)
                            </label>
                        </div> -->
                    </template>
                    <NextDay :steps="stepsVerifiqued" :form="formData" :save="save" />
                    <!--   <AfterVerified v-if="formData.launchOptions == 'Launch now after verified'" :steps="stepsVerifiqued"
                        :form="formData" :save="save" />
                    <DateAndTime v-if="formData.launchOptions == 'Choose the date & time'" :steps="stepsDateTime"
                        :form="formData" :save="save" />
                    <HoursWeekeng v-if="formData.launchOptions == 'Choose after hours (weekend)'"
                        :steps="stepsDateWeekeng" :form="formData" :save="save" /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import DateAndTime from "./steps/DateAndTime.vue";
import HoursWeekeng from "./steps/HoursWeekeng.vue";
import AfterVerified from "./steps/AfterVerified.vue";
import NextDay from "./steps/NextDay.vue";
import { ModalLaunch } from '@/stores/modalLaunch';
export default {
    props: {
        form: {
            type: Object,
        },
        launch: {
            type: Boolean,
        },
        invalid: {
            type: Object
        },
        modalLaunch: {
            type: Function,
        },
        isActive: {
            type: Boolean,
        },

    },
    components: {
        DateAndTime,
        HoursWeekeng,
        AfterVerified,
        NextDay
    },
    setup(props) {
        const isOpen = ref(props.isActive)
        const formData = ref(props.form)
        const statusModal = ModalLaunch()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const stepsVerifiqued = ref({
            step1: true,
            step2: false,
        })
        const stepsDateTime = ref({
            step1: true,
            step2: false,
        })
        const stepsDateWeekeng = ref({
            step1: true,
            step2: false,
        })
        watch(formData.value, async (newQuestion, oldQuestion) => {
            if (newQuestion) {
                switch (newQuestion.launchOptions) {
                    case 'Launch now after verified':
                        formData.value.auctionDate = ''
                        formData.value.auctionTime = ''
                        formData.value.dayMonday = 'Select time'
                        break;
                    case 'Choose the date & time':
                        formData.value.dayMonday = 'Select time'
                        break;
                    case 'Choose after hours (weekend)':
                        formData.value.auctionDate = ''
                        formData.value.auctionTime = ''
                        break;
                    default:
                        break;
                }

            }
        })

        const newtDayDate = () => {
            let resDay = dateTomorrow(9)


        }
        const save = () => {
            props.modalLaunch()
        }
        return {
            isOpen,
            formData,
            save,
            stepsVerifiqued,
            stepsDateTime,
            stepsDateWeekeng,
            statusModal,
            newtDayDate,
            bucket
        };
    },
};
</script>