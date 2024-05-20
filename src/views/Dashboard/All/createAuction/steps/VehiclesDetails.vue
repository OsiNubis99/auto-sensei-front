<template>
    <div class="bg-white flex flex-col md:mb-7 gap-3 md:gap-5 items-start shadow-steps p-5 w-full">
        <div class="flex gap-6">
            <img :src="bucket + 'public/svg/vehiculoDetails.svg'" alt="">
            <div class="flex flex-col ">
                <p class=" font-semibold    md:text-xl  ">Vehicle Details</p>
                <p class="md:font-medium text-[#4D4D4D] text-xs md:text-base ">Related to your vehicle to help get the
                    right bids !</p>
            </div>
        </div>
        <div class="w-full">
            <label class="font-medium text-xs md:text-base " for="">Vehicle Identification Number (VIN)</label>
            <input class="p-2 w-full mt-3 uppercase  border rounded-lg" disabled v-model="form.numberVin"
                :class="invalid?.numberVin ? 'border-error' : 'border-[#E0E0E0]'" placeholder="1HGCM82633A123456"
                type="text">
        </div>
        <div class="flex w-full justify-between items-center gap-5">
            <div class="w-full">
                <label class="font-medium text-xs md:text-base " for="">Year</label>
                <input v-model="form.year" :disabled="formDisable.year ? true : false"
                    :class="invalid?.year ? 'border-error' : 'border-[#E0E0E0]'"
                    class="p-2 w-full md:mt-3 border  rounded-lg" placeholder="2013" type="text">
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col md:gap-2">
                    <label class="font-medium text-xs md:text-base " for="">Make </label>
                    <input :class="invalid?.make ? 'border-error' : 'border-[#E0E0E0]'" v-model="form.make"
                        :disabled="formDisable.make ? true : false" class="p-2 w-full border  md:mt-3  rounded-lg"
                        placeholder="Forester" type="text">
                </div>
            </div>

        </div>
        <div class="flex w-full justify-between items-center flex-row gap-5">
            <div class="w-full">
                <label class="font-medium text-xs md:text-base " for="">Model</label>
                <input :class="invalid?.model ? 'border-error' : 'border-[#E0E0E0]'" v-model="form.model"
                    :disabled="formDisable.model ? true : false" class="p-2 w-full border  md:mt-3  rounded-lg"
                    placeholder="Forester" type="text">
            </div>
            <div class="w-full">
                <label class="font-medium text-xs md:text-base " for="">Trim</label>
                <input :class="invalid?.trim ? 'border-error' : 'border-[#E0E0E0]'" v-model="form.trim"
                    :disabled="formDisable.trim ? true : false" class="p-2 w-full border  md:mt-3  rounded-lg"
                    placeholder="Premium Plus" type="text">
            </div>
        </div>
        <div class="flex w-full justify-between items-center gap-5">
            <div class="w-full">
                <label class="font-medium text-xs md:text-base " for="">Body Type</label>
                <input :class="invalid?.bodyType ? 'border-error' : 'border-[#E0E0E0]'" v-model="form.bodyType"
                    :disabled="formDisable.bodyType ? true : false" class="p-2 w-full  md:mt-3  border rounded-lg"
                    placeholder="SUV" type="text">
            </div>
            <div class="w-full">
                <label class="font-medium text-xs md:text-base " for="">Cylinder</label>
                <input :class="invalid?.cylinder ? 'border-error' : 'border-[#E0E0E0]'" v-model="form.cylinder"
                    :disabled="formDisable.cylinder ? true : false" class="p-2 w-full  md:mt-3  border rounded-lg"
                    placeholder="4" type="text">
            </div>
        </div>
        <div class="flex w-full justify-between items-center flex-col md:flex-row gap-5">
            <div class="w-full">
                <label class="font-medium text-xs md:text-base " for="">Transmission</label>
                <input v-model="form.transmission" :class="invalid?.transmission ? 'border-error' : 'border-[#E0E0E0]'"
                    :disabled="formDisable.transmission ? true : false" class="p-2 w-full  md:mt-3 border  rounded-lg"
                    placeholder="SUV" type="text">
            </div>
            <div class="w-full">
                <label class="font-medium text-xs md:text-base " for="">Odometer</label>
                <input step="0.01" :class="invalid?.odometer ? 'border-error' : ''" v-model="form.odometer"
                    class="p-2 w-full md:mt-3 border border-[#E0E0E0]  rounded-lg" placeholder="Enter odometer"
                    type="number">
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col md:gap-2">
                    <label class="font-medium text-xs md:text-base " for="">Doors</label>
                    <select :disabled="formDisable.doors ? true : false"
                        :class="[invalid?.doors ? 'border-error' : 'border-[#E0E0E0]', formDisable.doors ? 'bg-[#fafafa]' : '']"
                        v-model="form.doors" placeholder="Number of Doors"
                        class=" border  text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">

                        <option selected hidden>Select Doors </option>
                        <option value="2 Doors">2 Doors</option>
                        <option value="3 Doors">3 Doors</option>
                        <option value="4 Doors">4 Doors</option>
                        <option value="5 Doors">5 Doors</option>


                    </select>
                </div>
            </div>
        </div>
        <p class="font-medium text-xs md:text-base">Exterior Color</p>
        <div class=" grid grid-cols-3 gap-[8px]  md:flex md:flex-wrap md:gap-4">
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-black" value="black" name="color-redio">
                Black
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-white" value="white" name="color-redio">
                White
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-silver" value="silver"
                    name="color-redio">
                Silver
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-grey" value="grey" name="color-redio">
                Grey
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
                <input type="radio" v-model="form.color" class="input-radio on-yellow" value="yellow"
                    name="color-redio">
                Yellow
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-green" value="green" name="color-redio">
                Green
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-blue" value="blue" name="color-redio">
                Blue
            </label>
            <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                <input type="radio" v-model="form.color" class="input-radio on-other" value="other" name="color-redio">
                Other
            </label>
            <div v-if="form.color == 'other'" class="w-full flex items-start flex-col">
                <label class="font-medium text-xs md:text-base " for="">Custom color</label>
                <input :disabled="formDisable.color ? true : false"
                    :class="invalid?.customColor ? 'border-error' : 'border-none'" v-model="form.customColor"
                    class="p-2  border  md:mt-3 bg-[#F0F0F0] rounded-lg" placeholder="Pink" type="text">
            </div>

        </div>
        <div class="flex flex-col gap-4">
            <p class="font-medium text-xs md:text-base">Drive Train</p>
            <div class="flex flex-col md:grid md:grid-cols-2 place-items-baseline  place-content-center gap-4">
                <label class="label-radio">
                    <input :disabled="formDisable.driveTrain ? true : false" type="radio"
                        :class="invalid?.driveTrain ? 'error-driveTrain' : ''" v-model="form.driveTrain"
                        class="input-radio on" value="FWD" name="drive-train"> FWD (Front-Wheel Drive)
                </label>
                <label class="label-radio">
                    <input :disabled="formDisable.driveTrain ? true : false" type="radio"
                        :class="invalid?.driveTrain ? 'error-driveTrain' : ''" v-model="form.driveTrain"
                        class="input-radio on" value="AWD" name="drive-train"> AWD (All-Wheel Drive)
                </label>
                <label class="label-radio">
                    <input :disabled="formDisable.driveTrain ? true : false" type="radio"
                        :class="invalid?.driveTrain ? 'error-driveTrain' : ''" v-model="form.driveTrain"
                        class="input-radio on" value="RWD" name="drive-train"> RWD (Rear-Wheel Drive)
                </label>
                <label class="label-radio">
                    <input :disabled="formDisable.driveTrain ? true : false" type="radio"
                        :class="invalid?.driveTrain ? 'error-driveTrain' : ''" v-model="form.driveTrain"
                        class="input-radio on" value="4WD" name="drive-train"> 4WD (Four-Wheel Drive)
                </label>
            </div>

        </div>
        <div class="w-full">
            <label class="font-medium text-xs md:text-base " for="">Additional Packages</label>
            <input v-model="form.additionalPackages"
                :class="invalid?.additionalPackages ? 'border-error' : 'border-[#E0E0E0]'"
                class="p-2 w-full mt-3 border  rounded-lg" placeholder="Input the additional packages if applicable"
                type="text">
            <p class=" text-xs md:text-sm mt-3  text-[#858585] ">Such as Sports Package, Remote Starter, etc.</p>
        </div>
        <div class="w-full">
            <label class="font-medium text-xs md:text-base " for="">Any repairs required for the vehicle ? Any damages
                that need to be mentioned? Please disclose any information that will affect the value of your vehicle
                either positively or negatively.</label>
            <textarea v-model="form.repairs" :class="invalid?.repairs ? 'border-error' : 'border-[#E0E0E0]'"
                class="p-2 w-full mt-3 lg:h-[200px] border  rounded-lg" placeholder="Add information" name="textarea"
                rows="10" cols="20"></textarea>
            <!--   <p class=" text-xs md:text-sm mt-3  text-[#858585] ">Any damages that need to be mentioned? Please disclose any information that will affect the value of your vehicle either positively or negatively.</p> -->
        </div>
        <div class=" flex flex-col md:grid w-full gap-2 md:gap-4 md:grid-cols-2">
            <div class="w-full">
                <div class="w-full flex flex-col md:gap-2">
                    <label class="font-medium text-xs md:text-base " for="">Tire Condition</label>
                    <select v-model="form.tireCondition"
                        :class="invalid?.tireCondition ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected hidden>Choose Condition</option>
                        <option value="Need Replacement">Need Replacement</option>
                        <option value="Good">Good</option>
                        <option value="Brand New">Brand New</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col md:gap-2">
                    <label class="font-medium text-xs md:text-base " for="">Last Replacement</label>
                    <select v-model="form.lastReplacement"
                        :class="invalid?.lastReplacement ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected hidden>Choose Year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col md:gap-2">
                    <label class="font-medium text-xs md:text-base " for="">Brake Pads</label>
                    <select v-model="form.brakePads" :class="invalid?.brakePads ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected hidden>Choose Condition</option>
                        <option value="Rotors & Pads are good">Rotors & Pads are good</option>
                        <option value="Rotors & Pads need Replacement">Rotors & Pads need Replacement</option>
                        <option value="Brand New">Brand New</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col md:gap-2">
                    <label class="font-medium text-xs md:text-base " for="">Last Replacement</label>
                    <select v-model="form.lastReplacement2"
                        :class="invalid?.lastReplacement2 ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] md:p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected hidden>Choose Year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>

                    </select>
                </div>
            </div>
            <!-- <div class="w-full">
                <div class="w-full flex flex-col md:gap-2">
                    <label class="font-medium text-xs md:text-base " for="">Rotor Condition</label>
                    <select v-model="form.rotorCondition"
                        :class="invalid?.rotorCondition ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] md:p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Condition</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div>
            <div class="w-full">
                <div class="w-full flex flex-col md:gap-2">
                    <label class="font-medium text-xs md:text-base " for="">Last Replacement</label>
                    <select v-model="form.lastReplacement3"
                        :class="invalid?.lastReplacement3 ? 'border-error' : 'border-[#E0E0E0]'"
                        class=" border  text-[#858585] md:p-3 border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <option selected>Choose Year</option>
                        <option value="US">United States</option>

                    </select>
                </div>
            </div> -->
        </div>
        <button v-if="!save" @click="next" id="step2"
            class=" btn flex justify-center bg-[#303E18] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Continue
        </button>
        <p class="text-xs md:text-sm text-[#666666]">If you leave the create auction process, this listing will be saved
            in your
            drafts for your convenience to continue later.</p>
    </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
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
        const formDisable = ref({
            year: false,
            make: false,
            model: false,
            trim: false,
            bodyType: false,
            cylinder: false,
            transmission: false,
            odometer: false,
            doors: false,
            color: false,
            driveTrain: false,

        })
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const date = ref(new Date());
        const form = ref(props.form)
        const save = ref(props.launch)
        const invalid = ref(props.invalid);
        const next = () => {
            props.nextVehiclesDetails()
        }
        onMounted(() => {
            console.log('form', form.value)
            form.value.year ? formDisable.value.year = true : formDisable.value.year = false;
            form.value.make ? formDisable.value.make = true : formDisable.value.make = false;
            form.value.model ? formDisable.value.model = true : formDisable.value.model = false;
            form.value.trim ? formDisable.value.trim = true : formDisable.value.trim = false;
            form.value.bodyType ? formDisable.value.bodyType = true : formDisable.value.bodyType = false;
            form.value.cylinder ? formDisable.value.cylinder = true : formDisable.value.cylinder = false;
            form.value.transmission ? formDisable.value.transmission = true : formDisable.value.transmission = false;
            form.value.odometer ? formDisable.value.odometer = true : formDisable.value.odometer = false;
            form.value.doors ? formDisable.value.doors = true : formDisable.value.doors = false;
            form.value.color ? formDisable.value.color = true : formDisable.value.color = false;
            form.value.driveTrain ? formDisable.value.driveTrain = true : formDisable.value.driveTrain = false;
        })
        return {
            date,
            next,
            invalid,
            form,
            save,
            formDisable,
            bucket
        };
    },
};
</script>