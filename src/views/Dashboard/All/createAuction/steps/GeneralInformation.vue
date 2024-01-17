<template>
    <div class="bg-white flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
        <div class="flex gap-6">
            <img src="../../../../../assets/svg/imgGenerals.svg" alt="">
            <div class="flex flex-col ">
                <p class=" font-semibold    text-xl  ">General Information</p>
                <p>Related to your vehicle to help get the right bids !</p>
            </div>
        </div>
        <div class="flex justify-between items-center gap-4">
            <div class="w-full flex flex-col gap-2">
                <label class=" text-base " for="">Vehicle Identification Number (VIN)</label>
                <input v-model="form.numberVinGenerals"
                    :class="invalid?.numberVinGenerals ? 'border-error' : 'border-[#E0E0E0]'"
                    class="p-2 rounded-lg border uppercase" placeholder="Input your VIN number" type="text">
                <p class="text-sm text-[#858585] ">Provide the exact VIN number in order to decode your vehicle accurately.
                </p>
            </div>
            <div class="flex gap-2 items-center justify-between">
                <!-- <div class="w-full flex mt-5 flex-col gap-2">
                    <label class=" text-base " for="">Start Date Vehicle</label>
                    <VueDatePicker class="custom-picker" :class="invalid?.startDate && 'error-picker'"
                        v-model="form.startDate">
                        <template #calendar-header="{ index, day }">
                            <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                                {{ day }}
                            </div>
                        </template>
                    </VueDatePicker>
                    <p class="text-sm text-[#858585] ">If you accept a bid, the vehicle must be dropped off within 14 days
                        from
                        the acceptance date.
                    </p>
                </div> -->
                <div class="w-full mt-5 flex flex-col gap-2">
                    <label class=" text-base " for="">Vehicle Drop Off Agreement</label>
                    <VueDatePicker  :enable-time-picker="false" class="custom-picker" :class="invalid?.date && 'error-picker'" v-model="form.date">
                        <template #calendar-header="{ index, day }">
                            <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                                {{ day }}
                            </div>
                        </template>
                    </VueDatePicker>
                    <p class="text-sm text-[#858585] ">If you accept a bid, the vehicle must be dropped off within 14 days
                        from
                        the acceptance date.
                    </p>
                </div>
            </div>

        </div>
        <div class="grid w-full grid-cols-3 gap-5">
            <div class="w-full flex flex-col gap-2">
                <label class=" text-base " for="">Province</label>
                <select v-model="form.province" :class="invalid?.province ? 'border-error' : 'border-[#E0E0E0]'"
                    class=" border text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                    <option selected>Select province</option>
                    <option value="Alberta">Alberta</option>
                    <option value="Brunswick Baru">Brunswick Baru</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="Ontario">Ontario</option>
                    <option value="Ontario">Saskatchewan</option>
                    <option value="Ontario">Ottawa</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class=" text-base " for="">City</label>
                <select v-model="form.city" :class="invalid?.city ? 'border-error' : 'border-[#E0E0E0]'"
                    class=" border text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                    <option selected>Select city </option>
                    <option value="London">London</option>
                    <option value="Montreal">Montreal</option>
                    <option value="Toronto">Toronto </option>
                    <option value="Winnipeg">Winnipeg</option>
                    <option value="Abbotsford">Abbotsford</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class=" text-base " for="">How many keys?</label>
                <select v-model="form.keys" :class="invalid?.keys ? 'border-error' : 'border-[#E0E0E0]'"
                    class=" border text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                    <option selected>Select number of keys</option>
                    <option value="1 keys">1 keys</option>
                    <option value="2 keys">2 keys</option>
                    <option value="3 keys">3 keys</option>
                    <option value="4 keys">4 keys</option>
                </select>
            </div>

        </div>
        <div class="flex flex-col gap-2">

            <p class="text-sm font-semibold ">Is your vehicle currently?</p>
            <div class="flex gap-4 items-center">
                <label class="label-radio">
                    <input :class="invalid?.currently ? 'error-currently' : ''" type="radio" value="Paid OFF"
                        v-model="form.currently" class="input-radio on" name="pilih"> Paid
                    Off
                </label>
                <label class="label-radio">
                    <input :class="invalid?.currently ? 'error-currently' : ''" type="radio" v-model="form.currently"
                        value="Financed" class="input-radio on" name="pilih">
                    Financed
                </label>
                <label class="label-radio">
                    <input :class="invalid?.currently ? 'error-currently' : ''" type="radio" v-model="form.currently"
                        value="Leased" class="input-radio on" name="pilih"> Leased
                </label>
            </div>
            <div class="mt-4" v-if="form.currently == 'Financed' || form.currently == 'Leased'">
                <div class="flex flex-col gap-4">
                    <div class="w-full flex flex-col gap-2">
                        <label class=" text-base " for="">Leasing or Financing Company</label>
                        <input v-model="form.financingCompany"
                            :class="invalid?.financingCompany ? 'border-error' : 'border-[#E0E0E0]'"
                            class="p-2 rounded-lg border "
                            placeholder="Enter the bank/institution your vehicle is currently being financed or leased with">
                    </div>
                    <div class="flex w-fill justify-between">
                        <div class="flex flex-col w-full gap-4">
                            <p class="text-sm text-[#666666]  ">Do you know how many payments are left? (to be verified by
                                the
                                dealer)</p>
                            <div class="w-full items-center flex gap-4">
                                <label class="label-radio">
                                    <input :class="invalid?.manyPayments ? 'error-currently' : ''" type="radio"
                                        v-model="form.manyPayments" value="Yes" class="input-radio on" name="pilih-10">
                                    Yes
                                </label>
                                <label class="label-radio">
                                    <input :class="invalid?.manyPayments ? 'error-currently' : ''" type="radio"
                                        v-model="form.manyPayments" value="No" class="input-radio on" name="pilih-10">
                                    No
                                </label>
                            </div>
                        </div>
                        <div v-if="form.manyPayments == 'Yes'" class="w-full flex flex-col gap-2">
                            <label class=" text-base " for="">Remaining payments</label>
                            <input :class="invalid?.remainingPayments ? 'border-error' : 'border-[#E0E0E0]'"
                                v-model="form.remainingPayments" class="p-2 rounded-lg border "
                                placeholder="Enter the number of payments left" type="number">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border w-full border-[#E0E0E0]">
        <div class="flex w-full flex-col gap-4">
            <p class="text-sm text-[#666666] ">Do you know the buyout for your vehicle? (Optional)</p>
            <div class="flex w-full justify-between gap-4 items-center">
                <div class="w-full items-center flex gap-4">
                    <label class="label-radio">
                        <input type="radio" v-model="form.buyoutVehicle" value="Yes" class="input-radio on" name="pilih-1">
                        Yes
                    </label>
                    <label class="label-radio">
                        <input type="radio" v-model="form.buyoutVehicle" value="No" class="input-radio on" name="pilih-1">
                        No
                    </label>
                </div>
                <div v-if="form.buyoutVehicle == 'Yes'" class="w-full flex flex-col gap-2">
                    <label class=" text-base " for="">Amount</label>
                    <input v-model="form.yourVehicleAmount"
                        :class="invalid?.yourVehicleAmount ? 'border-error' : 'border-[#E0E0E0]'"
                        class="p-2 rounded-lg border =" placeholder="Enter Number of payments left" type="number">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <p class="text-sm text-[#666666] ">Are you currently in the market to buy a new vehicle? (Optional)</p>
            <div class="flex flex-col gap-4">
                <div class="flex gap-4 items-center">
                    <label class="label-radio">
                        <input type="radio" v-model="form.newVehicle" value="Yes" class="input-radio on" name="pilih-2"> Yes
                    </label>
                    <label class="label-radio">
                        <input type="radio" v-model="form.newVehicle" value="No" class="input-radio on" name="pilih-2"> No
                    </label>
                </div>
                <div v-if="form.newVehicle == 'Yes'" class="flex flex-col gap-4">
                    <div class="flex gap-2 flex-col">
                        <p>Vehicle Preferences</p>
                        <p class="text-sm text-[#666666] ">If you are looking to buy a vehicle in the future, let us know,
                            we will connect dealers that have what you want in stock to bid, and get you tax savings on your
                            trade.</p>
                    </div>
                    <div class="flex gap-4  flex-col">
                        <p class="text-sm text-[#666666] ">Open to any vehicle?</p>
                        <div class="flex gap-4 items-center">
                            <label class="label-radio">
                                <input :class="invalid?.anyVehicle ? 'error-currently' : ''" v-model="form.anyVehicle"
                                    type="radio" value="Yes" class="input-radio on" name="pilih-3"> Yes
                            </label>
                            <label class="label-radio">
                                <input :class="invalid?.anyVehicle ? 'error-currently' : ''" v-model="form.anyVehicle"
                                    type="radio" value="No" class="input-radio on" name="pilih-3"> No
                            </label>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="w-full flex flex-col gap-2">
                            <label class=" text-base " for="">Make</label>
                            <select v-model="form.makePreferences"
                                :class="invalid?.makePreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                class=" border text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                               
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                        </div>
                        <div class="w-full flex flex-col gap-2">
                            <label class=" text-base " for="">Model</label>
                            <select v-model="form.modelPreferences"
                                :class="invalid?.modelPreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                class=" border text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                              
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                        </div>
                    </div>
                    <div class="w-full flex items-center  justify-between gap-4 ">
                        <div class="w-full flex flex-col gap-2">
                            <label class=" text-base " for="">Mileage</label>
                            <input v-model="form.modelFromPreferences"
                                :class="invalid?.modelFromPreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                class="p-2 rounded-lg border uppercase" placeholder="Mileage From" type="number">
                        </div>
                        <div class="w-full flex flex-col gap-2">

                            <input v-model="form.modelToPreferences"
                                :class="invalid?.modelToPreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                class="p-2 mt-8 rounded-lg border uppercase" placeholder="Mileage To" type="number">
                        </div>
                    </div>
                    <div class="flex gap-4 items-center ">
                        <div class="w-full flex flex-col gap-2">
                            <label class=" text-base " for="">Year</label>
                            <select v-model="form.yearFromPreferences"
                                :class="invalid?.yearFromPreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                class=" border text-[#858585] p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                                <option selected>From 1996</option>
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                        </div>
                        <div class="w-full flex flex-col gap-2">

                            <select v-model="form.yearToPreferences"
                                :class="invalid?.yearToPreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                class=" border text-[#858585] p-3 mt-8  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                                <option selected>To 2020</option>
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                        </div>
                    </div>
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
import { ref, onMounted, watch } from "vue";
export default {
    props: {
        op: {
            type: Object,
        },
        checkStep: {
            type: Object,
        },
        form: {
            type: Object,
        },
        back: {
            type: Function,
        },
        launch: {
            type: Boolean,
        },
        nextGeneralInformation: {
            type: Function
        },
        invalid: {
            type: Object
        },
    },
    setup(props) {
        const date = ref(new Date());
        const form = ref(props.form)
        const save = ref(props.launch)
        const invalid = ref(props.invalid)
        const next = () => {
            props.nextGeneralInformation()
        }
        return {
            date,
            next,
            form,
            invalid,
            save
        };
    },
};
</script>





  