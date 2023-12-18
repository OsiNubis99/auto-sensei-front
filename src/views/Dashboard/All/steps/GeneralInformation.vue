<template>
    <div class="bg-white flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
        <div class="flex gap-6">
            <img src="../../../../assets/svg/imgGenerals.svg" alt="">
            <div class="flex flex-col ">
                <p class=" font-semibold    text-xl  ">General Information</p>
                <p>Related to your vehicle to help get the right bids !</p>
            </div>
        </div>
        <div class="grid grid-cols-2 place-items-center place-content-center gap-4">
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-base " for="">Vehicle Identification Number (VIN)</label>
                <input class="p-2 rounded-lg border border-[#E0E0E0] " placeholder="Input your VIN number" type="number">
                <p class="text-sm text-[#858585] ">Provide the exact VIN number in order to decode your vehicle accurately.
                </p>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-base " for="">Vehicle Drop Off Agreement</label>
                <VueDatePicker class="p-2 rounded-lg" v-model="date">
                    <template #calendar-header="{ index, day }">
                        <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                            {{ day }}
                        </div>
                    </template>
                </VueDatePicker>
                <p class="text-sm text-[#858585] ">If you accept a bid, the vehicle must be dropped off within 14 days from
                    the acceptance date.
                </p>
            </div>
        </div>
        <div class="grid w-full grid-cols-3 gap-5">
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-base " for="">Province</label>
                <select id="countries"
                    class=" border text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-base " for="">City</label>
                <select id="countries"
                    class=" border text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-base " for="">How many keys?</label>
                <select id="countries"
                    class=" border text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>

        </div>
        <div class="flex flex-col gap-2">
            <p class="text-sm font-semibold ">Is your vehicle currently?</p>
            <div class="flex gap-4 items-center">
                <label class="label-radio">
                    <input type="radio" class="input-radio on" checked name="pilih"> Paid Off
                </label>
                <label class="label-radio">
                    <input type="radio" class="input-radio on" checked name="pilih"> Financed
                </label>
                <label class="label-radio">
                    <input type="radio" class="input-radio on" checked name="pilih"> Leased
                </label>
            </div>

        </div>
        <hr class="border w-full border-[#E0E0E0]">
        <div class="flex flex-col gap-4">
            <p class="text-sm text-[#666666] ">Do you know the buyout for your vehicle? (Optional)</p>
            <div class="flex gap-4 items-center">
                <label class="label-radio">
                    <input type="radio" class="input-radio on" checked name="pilih-1"> Yes
                </label>
                <label class="label-radio">
                    <input type="radio" class="input-radio on" checked name="pilih-1"> No
                </label>
            </div>

        </div>
        <div class="flex flex-col gap-4">
            <p class="text-sm text-[#666666] ">Are you currently in the market to buy a new vehicle? (Optional)</p>
            <div class="flex gap-4 items-center">
                <label class="label-radio">
                    <input type="radio" class="input-radio on" checked name="pilih-2"> Yes
                </label>
                <label class="label-radio">
                    <input type="radio" class="input-radio on" checked name="pilih-2"> No
                </label>
            </div>

        </div>
        <button @click="next"
            class=" btn flex justify-center bg-[#303E18] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Continue
        </button>
    </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
    props: {
        op: {
            type: Object,
        },
        checkStep: {
            type: Object,
        },
        back: {
            type: Function,
        },

    },
    components: {
    },
    setup(props) {
        const date = ref(new Date());
        const next = () => {
            props.op.step1 = false
            props.op.step2 = true
            props.op.step3 = false
            props.checkStep.step1 = true
            props.checkStep.step2 = false
            props.checkStep.step3 = false
        }
        return {
            date,
            next
        };
    },
};
</script>





  