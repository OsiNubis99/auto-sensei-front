<template>
    <div class="bg-white flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
        <div class="flex gap-6">
            <img src="../../../../assets/svg/vehiculoDetails.svg" alt="">
            <div class="flex flex-col ">
                <p class=" font-semibold    text-xl  ">Vehicle Details</p>
                <p>Related to your vehicle to help get the right bids !</p>
            </div>
        </div>
        <div class="w-full">
            <label class="font-medium text-base " for="">Vehicle Identification Number (VIN)</label>
            <input class="p-2 w-full mt-3 bg-[#F0F0F0] rounded-lg" placeholder="1HGCM82633A123456" type="text">
        </div>
        <div class="flex w-full justify-between items-center gap-5">
            <div class="w-full">
                <label class="font-medium text-base " for="">Year</label>
                <input class="p-2 w-full mt-3 bg-[#F0F0F0] rounded-lg" placeholder="2013" type="text">
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Make</label>
                    <select id="countries"
                        class=" border bg-[#F0F0F0] text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Subaru</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>

        </div>
        <div class="flex w-full justify-between items-center gap-5">
            <div class="w-full">
                <label class="font-medium text-base " for="">Model</label>
                <input class="p-2 w-full mt-3 bg-[#F0F0F0] rounded-lg" placeholder="Forester" type="text">
            </div>
            <div class="w-full">
                <label class="font-medium text-base " for="">Series</label>
                <input class="p-2 w-full mt-3 bg-[#F0F0F0] rounded-lg" placeholder="Premium Plus" type="text">
            </div>
        </div>
        <div class="flex w-full justify-between items-center gap-5">
            <div class="w-full">
                <label class="font-medium text-base " for="">Body Type</label>
                <input class="p-2 w-full mt-3 bg-[#F0F0F0] rounded-lg" placeholder="SUV" type="text">
            </div>
            <div class="w-full">
                <label class="font-medium text-base " for="">Cylinder</label>
                <input class="p-2 w-full mt-3 bg-[#F0F0F0] rounded-lg" placeholder="4" type="text">
            </div>
        </div>
        <div class="flex w-full justify-between items-center gap-5">
            <div class="w-full">
                <label class="font-medium text-base " for="">Transmission</label>
                <input class="p-2 w-full mt-3 bg-[#F0F0F0] rounded-lg" placeholder="SUV" type="text">
            </div>
            <div class="w-full">
                <label class="font-medium text-base " for="">Odometer</label>
                <input class="p-2 w-full mt-3 border border-[#E0E0E0]  rounded-lg" placeholder="4" type="text">
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Doors</label>
                    <select id="countries"
                        class=" border  text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Subaru</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap gap-4">
            <label class="label-colors">
                <input type="radio" class="input-radio on-black" checked name="color-redio"> Black
            </label>
            <label class="label-colors">
                <input type="radio" class="input-radio on-white" checked name="color-redio"> White
            </label>
            <label class="label-colors">
                <input type="radio" class="input-radio on-silver" checked name="color-redio"> Silver
            </label>
            <label class="label-colors">
                <input type="radio" class="input-radio on-grey" checked name="color-redio"> Grey
            </label>
            <label class="label-colors">
                <input type="radio" class="input-radio on-greendark" checked name="color-redio"> Green Dark
            </label>
            <label class="label-colors">
                <input type="radio" class="input-radio on-brown" checked name="color-redio"> Brown
            </label>
            <label class="label-colors">
                <input type="radio" class="input-radio on-red" checked name="color-redio"> Red
            </label>
            <label class="label-colors">
                <input type="radio" class="input-radio on-yellow" checked name="color-redio"> Yellow
            </label>
            <label class="label-colors">
                <input type="radio" class="input-radio on-green" checked name="color-redio"> Green
            </label>
            <label class="label-colors">
                <input type="radio" class="input-radio on-blue" checked name="color-redio"> Blue
            </label>
            
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-medium text-base">Drive Train</p>
            <div class="grid grid-cols-2 place-items-baseline  place-content-center gap-4">
                <label class="label-radio">
                    <input type="radio" class="input-radio on" checked name="drive-train"> FWD (Front-Wheel Drive)
                </label>
                <label class="label-radio">
                    <input type="radio" class="input-radio on" checked name="drive-train"> AWD (All-Wheel Drive)
                </label>
                <label class="label-radio">
                    <input type="radio" class="input-radio on" checked name="drive-train"> RWD (Rear-Wheel Drive)
                </label>
                <label class="label-radio">
                    <input type="radio" class="input-radio on" checked name="drive-train"> 4WD (Four-Wheel Drive)
                </label>
            </div>

        </div>
        <div class="w-full">
            <label class="font-medium text-base " for="">Additional Packages</label>
            <input class="p-2 w-full mt-3 border border-[#E0E0E0] rounded-lg"
                placeholder="Input the additional packages if applicable" type="text">
            <p class="text-sm mt-3 text-[#858585] ">Such as Sports Package, Remote Starter, etc.</p>
        </div>
        <div class="grid w-full gap-4 grid-cols-2">
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Tire Condition</label>
                    <select id="countries"
                        class=" border  text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Condition</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Last Replacement</label>
                    <select id="countries"
                        class=" border  text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Year</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Brake Pads</label>
                    <select id="countries"
                        class=" border  text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Condition</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Last Replacement</label>
                    <select id="countries"
                        class=" border  text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Year</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Rotor Condition</label>
                    <select id="countries"
                        class=" border  text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Condition</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Last Replacement</label>
                    <select id="countries"
                        class=" border  text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Year</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
        </div>
        <button  @click="next"
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
            props.op.step2 = false
            props.op.step3 = true
            props.checkStep.step1 = true
            props.checkStep.step2 = true
            props.checkStep.step3 = false
        }
        return {
            date,
            next
        };
    },
};
</script>





  