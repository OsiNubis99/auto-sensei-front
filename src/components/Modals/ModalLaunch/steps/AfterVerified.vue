<template>
    <div v-if="steps.step1" class="w-full flex mt-4 flex-col gap-4">
        <label class=" text-base " for="">Auction Durations</label>
        <select v-model="formData.auctionDuration" :class="invalid?.auctionDuration ? 'border-error' : 'border-[#E0E0E0]'"
            class=" border text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
            <option value="45">45 Minutes</option>
            <option value="50">50 Minutes</option>
            <option value="60">60 Minutes</option>
            <option value="65">65 Minutes</option>
        </select>
    </div>
    <template v-if="steps.step2">
        <div class="m-2 p-4 rounded-lg border-[#E0E0E0] border-[1px]">
            <p class="font-semibold">Launch Information</p>
            <div class="flex justify-between gap-2">
                <p>Launch Options</p>
                <p class="font-semibold">Launch now after verified</p>
            </div>
            <div class="flex justify-between gap-2">
                <p>Auction Durations</p>
                <p class="font-semibold">{{ formData.auctionDuration }} Minutes</p>
            </div>
        </div>
        <p class="px-4 pt-4 border-[#E0E0E0] border-t-[1px]">Are you sure you want to
            launch auction with this option? You
            can't cancel
            after it's been launched
        </p>
    </template>
    <div v-if="steps.step1" class="pt-4" @click="next(1)">
        <button class="w-full h-[41px] text-blue-100 bg-primary rounded">
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
import { ref, onMounted } from "vue";
import { toast } from "vue3-toastify";
import { validateData } from "../../../../validations/validationCreateAutions";
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
    components: {
    },
    setup(props) {
        const formData = ref(props.form)
        const steps = ref(props.steps)
        const invalid = ref();
        const back = (back) => {
            steps.value.step1 = true
            steps.value.step2 = false
        }
        const next = (paso) => {
            invalid.value = validateData(formData.value, 'Launch Auction', 'after verified');
            switch (paso) {
                case 1:
                    if (Object.entries(invalid.value).length === 0) {
                        steps.value.step1 = false
                        steps.value.step2 = true
                    }
                    break;
                case 2:
                    props.save()
                    break;

                default:
                    break;
            }
        }
        return {
            formData,
            next,
            back,
            steps,
            invalid
        };
    },
};
</script>