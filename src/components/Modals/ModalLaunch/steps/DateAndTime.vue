<template>
    <div v-if="steps.step1" class="w-full flex flex-col gap-2">
        <label class=" text-base " for="">Auction Date</label>
        <VueDatePicker :enable-time-picker="false" v-model="formData.auctionDate" class="custom-picker"
            :class="invalid?.auctionDate && 'error-picker'">
            <template #calendar-header="{ index, day }">
                <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                    {{ day }}
                </div>
            </template>
        </VueDatePicker>
        <div class="w-full flex flex-col mt-4 gap-2">
            <div class="flex justify-center gap-6 items-center ">
                <div class="w-full flex  flex-col gap-2">
                    <label class=" text-base " for="">Auction Time</label>
                    <select v-model="formData.auctionTime"
                        :class="invalid?.auctionTime ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option value="00">00.00 AM</option>
                        <option value="01">01.00 AM</option>
                        <option value="02">02.00 AM</option>
                        <option value="03">03.00 AM</option>
                        <option value="04">04.00 AM</option>
                        <option value="05">05.00 AM</option>
                        <option value="06">06.00 AM</option>
                        <option value="07">07.00 AM</option>
                        <option value="08">08.00 AM</option>
                        <option value="09">09.00 AM</option>
                        <option value="10">10.00 AM</option>
                        <option value="11">11.00 AM</option>
                        <option value="12">12.00 PM</option>
                        <option value="13">13.00 PM</option>
                        <option value="14">14.00 PM</option>
                        <option value="15">15.00 PM</option>
                        <option value="16">16.00 PM</option>
                        <option value="17">17.00 PM</option>
                        <option value="18">18.00 PM</option>
                        <option value="19">19.00 PM</option>
                        <option value="20">20.00 PM</option>
                        <option value="21">21.00 PM</option>
                        <option value="22">22.00 PM</option>
                        <option value="23">23.00 PM</option>
                        <option value="24">24.00 PM</option>
                    </select>
                </div>
                <p class="mt-7"> - </p>
                <div class="w-full flex  flex-col gap-2">
                    <label class=" text-base " for="">Auction Duration</label>
                    <select v-model="formData.auctionDuration"
                        :class="invalid?.auctionDuration ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option value="45">45 Minutes</option>
                        <option value="50">50 Minutes</option>
                        <option value="60">60 Minutes</option>
                        <option value="65">65 Minutes</option>
                    </select>
                </div>
            </div>

        </div>
    </div>
    <template v-if="steps.step2">
        <div class="m-4 p-4 rounded-lg border-[#E0E0E0] border-[1px]">
            <p class="font-semibold">Launch Information</p>
            <div class="flex justify-between gap-2">
                <p>Launch Option</p>
                <p class="font-semibold">Choose the date & time</p>
            </div>
            <div class="flex justify-between gap-2">
                <p>Auction Date</p>
                <p class="font-semibold">{{ newDate }}</p>
            </div>
            <div class="flex justify-between gap-2">
                <p>Auction Time</p>
                <p class="font-semibold">{{ formData.auctionTime }}</p>
            </div>
            <div class="flex justify-between gap-2">
                <p>Auction Duration</p>
                <p class="font-semibold">{{ formData.auctionDuration }} Minutes</p>
            </div>
        </div>
        <p class="px-4 pt-4 border-[#E0E0E0] border-t-[1px]">Are you sure you want to
            launch auction with this option?</p>
    </template>
    <div v-if="steps.step1" class="pt-4" @click="next(1)">
        <button :disabled="sizeObjet == 0 ? false : true" :class="sizeObjet == 0 ? 'bg-primary' : 'bg-base-gray text-white'"
            class="w-full h-[41px] text-blue-100  rounded">
            Next
        </button>
    </div>
    <div v-if="steps.step2" class="pt-4 flex gap-4">
        <button @click="back" class="w-full h-[41px] text-blue-100 border-[#E0E0E0] border-[1px]  rounded">
            No
        </button>
        <button @click="next(2)" class="w-full h-[41px] text-blue-100 bg-primary rounded">
            Yes
        </button>
    </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { toast } from "vue3-toastify";
import { validateData } from "../../../../validations/validationCreateAutions";
import moment from 'moment';
export default {
    props: {
        form: {
            type: Object,
        },
        steps: {
            type: Object,
        },
        save: {
            type: Function,
        },

    },
    setup(props) {
        const formData = ref(props.form)
        const steps = ref(props.steps)
        const sizeObjet = ref(null)
        const invalid = ref();
        const newDate = ref()
        const back = (back) => {
            console.log('back')
            steps.value.step1 = true
            steps.value.step2 = false
        }
        const next = (paso) => {
            switch (paso) {
                case 1:
                    if (Object.entries(invalid.value).length === 0) {
                        steps.value.step1 = false
                        steps.value.step2 = true
                    }
                    break;
                case 2:
                    console.log('invalid.value', invalid.value)
                    console.log('formData.value', formData.value)
                    props.save()
                    break;

                default:
                    break;
            }
        }
        watch(formData.value, async (newQuestion, oldQuestion) => {
            if (newQuestion) {
                invalid.value = validateData(formData.value, 'Launch Auction', 'date and time');
                sizeObjet.value = Object.entries(invalid.value).length
                newDate.value = null
                newDate.value = moment(formData.value.auctionDate).format('LL')
            }
        })
        return {
            formData,
            next,
            steps,
            invalid,
            sizeObjet,
            back,
            newDate
        };
    },
};
</script>