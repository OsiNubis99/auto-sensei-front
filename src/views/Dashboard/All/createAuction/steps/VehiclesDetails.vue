<template>
    <div class="bg-white flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
        <div class="flex gap-6">
            <img src="../../../../../assets/svg/vehiculoDetails.svg" alt="">
            <div class="flex flex-col ">
                <p class=" font-semibold    text-xl  ">Vehicle Details</p>
                <p>Related to your vehicle to help get the right bids !</p>
            </div>
        </div>
        <div class="w-full">
            <label class="font-medium text-base " for="">Vehicle Identification Number (VIN)</label>
            <input class="p-2 w-full mt-3 uppercase bg-[#F0F0F0] border rounded-lg" v-model="form.numberVin"
                :class="invalid?.numberVin ? 'border-error' : 'border-none'" disabled placeholder="1HGCM82633A123456"
                type="text">
        </div>
        <div class="flex w-full justify-between items-center gap-5">
            <div class="w-full">
                <label class="font-medium text-base " for="">Year</label>
                <input v-model="form.year" :class="invalid?.year ? 'border-error' : 'border-none'"
                    class="p-2 w-full mt-3 border bg-[#F0F0F0] rounded-lg" placeholder="2013" disabled type="text">
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Make</label>
                    <select disabled v-model="form.make" :class="invalid?.make ? 'border-error' : 'border-none'"
                        class=" border bg-[#F0F0F0] text-[#858585] p-3  text-gray-900 text-sm rounded-lg  w-full ">
                        <option value="make">make</option>
                    </select>
                </div>
            </div>

        </div>
        <div class="flex w-full justify-between items-center gap-5">
            <div class="w-full">
                <label class="font-medium text-base " for="">Model</label>
                <input disabled :class="invalid?.model ? 'border-error' : 'border-none'" v-model="form.model"
                    class="p-2 w-full border mt-3 bg-[#F0F0F0] rounded-lg" placeholder="Forester" type="text">
            </div>
            <div class="w-full">
                <label class="font-medium text-base " for="">Series</label>
                <input disabled :class="invalid?.series ? 'border-error' : 'border-none'" v-model="form.series"
                    class="p-2 w-full border mt-3 bg-[#F0F0F0] rounded-lg" placeholder="Premium Plus" type="text">
            </div>
        </div>
        <div class="flex w-full justify-between items-center gap-5">
            <div class="w-full">
                <label class="font-medium text-base " for="">Body Type</label>
                <input disabled :class="invalid?.bodyType ? 'border-error' : 'border-none'" v-model="form.bodyType"
                    class="p-2 w-full mt-3 bg-[#F0F0F0] border rounded-lg" placeholder="SUV" type="text">
            </div>
            <div class="w-full">
                <label class="font-medium text-base " for="">Cylinder</label>
                <input disabled :class="invalid?.cylinder ? 'border-error' : 'border-none'" v-model="form.cylinder"
                    class="p-2 w-full mt-3 bg-[#F0F0F0] border rounded-lg" placeholder="4" type="text">
            </div>
        </div>
        <div class="flex w-full justify-between items-center gap-5">
            <div class="w-full">
                <label class="font-medium text-base " for="">Transmission</label>
                <input disabled :class="invalid?.transmission ? 'border-error' : 'border-none'" v-model="form.transmission"
                    class="p-2 w-full mt-3 bg-[#F0F0F0] border rounded-lg" placeholder="SUV" type="text">
            </div>
            <div class="w-full">
                <label class="font-medium text-base " for="">Odometer</label>
                <input :class="invalid?.odometer ? 'border-error' : ''" v-model="form.odometer"
                    class="p-2 w-full mt-3 border border-[#E0E0E0]  rounded-lg" placeholder="4" type="text">
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Doors</label>
                    <select :class="invalid?.doors ? 'border-error' : 'border-[#E0E0E0]'" v-model="form.doors"
                        class=" border  text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>2 Doors</option>
                        <option value="US">4 Doors</option>
                    </select>
                </div>
            </div>
        </div>
        <p class="font-medium text-base">Exterior Color</p>
        <div class="flex flex-wrap gap-4">
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" class="input-radio on-black" value="black" name="color-redio"> Black
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-white" value="white" name="color-redio">
                White
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-silver" value="silver" name="color-redio">
                Silver
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-grey" value="grey" name="color-redio"> Grey
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-greendark" value="greenDark"
                    name="color-redio"> Green Dark
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-brown" value="brown" name="color-redio">
                Brown
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-red" value="red" name="color-redio"> Red
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-yellow" value="yellow" name="color-redio">
                Yellow
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-green" value="green" name="color-redio">
                Green
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-blue" value="blue" name="color-redio"> Blue
            </label>
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-medium text-base">Drive Train</p>
            <div class="grid grid-cols-2 place-items-baseline  place-content-center gap-4">
                <label class="label-radio">
                    <input type="radio" :class="invalid?.driveTrain ? 'error-driveTrain' : ''" v-model="form.driveTrain"
                        class="input-radio on" value="front-wheel" name="drive-train"> FWD (Front-Wheel Drive)
                </label>
                <label class="label-radio">
                    <input type="radio" :class="invalid?.driveTrain ? 'error-driveTrain' : ''" v-model="form.driveTrain"
                        class="input-radio on" value="all-wheel" name="drive-train"> AWD (All-Wheel Drive)
                </label>
                <label class="label-radio">
                    <input type="radio" :class="invalid?.driveTrain ? 'error-driveTrain' : ''" v-model="form.driveTrain"
                        class="input-radio on" value="rear-wheel" name="drive-train"> RWD (Rear-Wheel Drive)
                </label>
                <label class="label-radio">
                    <input type="radio" :class="invalid?.driveTrain ? 'error-driveTrain' : ''" v-model="form.driveTrain"
                        class="input-radio on" value="four-wheel" name="drive-train"> 4WD (Four-Wheel Drive)
                </label>
            </div>

        </div>
        <div class="w-full">
            <label class="font-medium text-base " for="">Additional Packages</label>
            <input v-model="form.additionalPackages"
                :class="invalid?.additionalPackages ? 'border-error' : 'border-[#E0E0E0]'"
                class="p-2 w-full mt-3 border  rounded-lg" placeholder="Input the additional packages if applicable"
                type="text">
            <p class="text-sm mt-3 text-[#858585] ">Such as Sports Package, Remote Starter, etc.</p>
        </div>
        <div class="grid w-full gap-4 grid-cols-2">
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Tire Condition</label>
                    <select v-model="form.tireCondition"
                        :class="invalid?.tireCondition ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Condition</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Last Replacement</label>
                    <select v-model="form.lastReplacement"
                        :class="invalid?.lastReplacement ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Year</option>
                        <option value="US">United States</option>
                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Brake Pads</label>
                    <select v-model="form.brakePads" :class="invalid?.brakePads ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Condition</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Last Replacement</label>
                    <select v-model="form.lastReplacement2"
                        :class="invalid?.lastReplacement2 ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Year</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Rotor Condition</label>
                    <select v-model="form.rotorCondition"
                        :class="invalid?.rotorCondition ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Condition</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col gap-2">
                    <label class="font-medium text-base " for="">Last Replacement</label>
                    <select v-model="form.lastReplacement3"
                        :class="invalid?.lastReplacement3 ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Year</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
        </div>
        <button v-if="!save" @click="next"
            class=" btn flex justify-center bg-[#303E18] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Continue
        </button>
    </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { toast } from "vue3-toastify";
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
        form: {
            type: Object,
        },
        launch: {
            type: Boolean,
        },
        nextVehiclesDetails: {
            type: Function
        },
        invalid: {
            type: Object
        },

    },
    components: {
    },
    setup(props) {
        const date = ref(new Date());
        const form = ref(props.form)
        const save = ref(props.launch)
        const invalid = ref(props.invalid);
        const next = () => {
            props.nextVehiclesDetails()
        }

        return {
            date,
            next,
            invalid,
            form,
            save
        };
    },
};
</script>





  