<template>

    <template v-if="steps.step2">
        <div class="m-4 p-4 rounded-lg border-[#E0E0E0] border-[1px]">
            <p class="font-semibold text-xs md:text-base">Launch Information</p>
            <div class="flex justify-between py-1 md:gap-2">
                <p class=" text-xs md:text-base">Launch Option</p>
                <p class="text-xs md:text-base">Next Day</p>
            </div>
            <div class="flex justify-between py-1 md:gap-2">
                <p class=" text-xs md:text-base">Auction Date</p>
                <p class="font-semibold text-xs md:text-base">{{ newDate }}</p>
            </div>
            <div class="flex justify-between py-1 md:gap-2">
                <p class=" text-xs md:text-base">Auction Duration</p>
                <p class="font-semibold text-xs md:text-base">480 Minutes</p>
            </div>
        </div>
        <p class="px-4 pt-4 text-xs md:text-base border-[#E0E0E0] border-t-[1px]">Are you sure you want to
            launch auction with this option?</p>
    </template>
    <div v-if="steps.step1" class="pt-4" @click="next(1)">
        <button class="w-full md:h-[41px] h-[35px] text-blue-100 text-xs font-semibold bg-primary rounded">
            Next
        </button>
    </div>
    <div v-if="steps.step2" class="pt-4 flex gap-4">
        <button @click="back"
            class="w-full text-xs md:text-base h-[30px] md:h-[41px] text-blue-100 border-[#E0E0E0] border-[1px]  rounded">
            No
        </button>
        <button @click="next(2)"
            class="w-full text-xs md:text-base h-[30px] md:h-[41px] text-blue-100 bg-primary rounded">
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
            steps.value.step1 = true
            steps.value.step2 = false
        }
        function dateTomorrow(startHour, startMin = 0) {
            let date = new Date()
            if (!startHour) return date
            let day = 24 * 60 * 60 * 1000
            date.setHours(startHour, startMin, 0, 0)
            date.setTime(date.getTime() + day)
            return date
        }
        const next = (paso) => {
            switch (paso) {
                case 1:
                    newDate.value = moment(dateTomorrow(9)).format('MMMM DD, h:mm: A')
                    steps.value.step1 = false
                    steps.value.step2 = true
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
            steps,
            invalid,
            sizeObjet,
            back,
            newDate
        };
    },
};
</script>