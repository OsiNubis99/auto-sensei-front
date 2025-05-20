<template>
    <div class="mx-auto bg-[#F0F0F0] z-[100] relative">
        <div v-if="loading" class=" w-full h-screen fixed z-[1000]   flex justify-center overflow-hidden items-center">
            <div class="text-indigo-700">
                <div class="h-12 w-12 md:h-[80px] md:w-[80px] ">
                    <div class="animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff"
                            stroke-width="0" viewBox="0 0 16 16">
                            <path
                                d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                            </path>
                        </svg>
                    </div>
                    <p class=" text-base-gray font-medium pl-2 ">Loading...</p>
                </div>
            </div>
        </div>
        <div v-else class="relative max-w-[60rem] mx-auto z-50 lg:pt-[60px] ">
            <div class="bg-white flex flex-col md:mb-7 gap-5 items-start shadow-steps p-5 w-full">
                <div class="flex gap-6">
                    <img :src="bucket + 'public/svg/imgGenerals.svg'" alt="">
                    <div class="flex flex-col ">
                        <p class=" font-semibold md:text-xl">General Information</p>
                        <p class=" text-xs md:text-base">Related to your vehicle to help get the right bids !</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row justify-between items-center md:gap-4">
                    <div class="w-full flex flex-col gap-2">
                        <label class=" text-sm md:text-base " for="">Vehicle Identification Number (VIN)</label>
                        <input v-model="form.numberVinGenerals"
                            :class="invalid?.numberVinGenerals ? 'border-error' : 'border-[#E0E0E0]'"
                            class="p-2 rounded-lg border uppercase" placeholder="Input your VIN number" type="text">
                        <p class="text-xs md:text-sm text-[#858585] ">Provide the exact VIN number in order to decode
                            your
                            vehicle accurately.
                        </p>
                    </div>
                    <div class="flex gap-2 items-center justify-between">
                        <div class="w-full mt-5 flex flex-col gap-2">
                            <label class=" text-sm md:text-base " for="">Vehicle Drop Off Agreement</label>
                            <VueDatePicker :enable-time-picker="false"
                                :min-date="new Date(new Date().getTime() + 2 * 86400 * 1000)" class="custom-picker"
                                :class="invalid?.date && 'error-picker'" v-model="form.date">
                                <template #calendar-header="{ index, day }">
                                    <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                                        {{ day }}
                                    </div>
                                </template>
                            </VueDatePicker>
                            <p class="text-xs md:text-sm text-[#858585] ">If you accept a bid, the vehicle must be
                                dropped
                                off
                                within 14 days
                                from
                                the acceptance date.
                            </p>
                        </div>
                    </div>

                </div>
                <div class="flex flex-col md:grid w-full md:grid-cols-3 gap-5">
                    <div class="w-full flex flex-col gap-2 relative">
                        <label class=" text-sm md:text-base " for="">Province</label>
                        <input v-model="form.province" :class="invalid?.province ? 'border-error' : 'border-[#E0E0E0]'"
                            placeholder="Province" class="p-2 rounded-lg border " type="text">
                    </div>
                    <div class="w-full flex flex-col gap-2 relative">
                        <label class=" text-sm md:text-base " for="">City</label>
                        <input v-model="form.city" placeholder="City"
                            :class="invalid?.city ? 'border-error' : 'border-[#E0E0E0]'" class="p-2 rounded-lg border "
                            type="text">
                    </div>
                    <div class="w-full flex flex-col gap-2">
                        <label class=" text-sm md:text-base " for="">How many keys?</label>
                        <select v-model="form.keys" :class="invalid?.keys ? 'border-error' : 'border-[#E0E0E0]'"
                            class=" border text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                            <option selected>Select number of keys</option>
                            <option value="1 keys">1 keys</option>
                            <option value="2 keys">2 keys</option>
                            <option value="3 keys">3 keys</option>
                            <option value="4 keys">4 keys</option>
                        </select>
                    </div>

                </div>
                <div class="flex flex-col gap-2 w-full">

                    <p class="text-sm font-semibold ">Is your vehicle currently?</p>
                    <div class="flex gap-4 items-center">
                        <label class="label-radio">
                            <input :class="invalid?.currently ? 'error-currently' : ''" type="radio" value="Paid OFF"
                                v-model="form.currently" class="input-radio on" name="pilih"> Paid
                            Off
                        </label>
                        <label class="label-radio">
                            <input :class="invalid?.currently ? 'error-currently' : ''" type="radio"
                                v-model="form.currently" value="Financed" class="input-radio on" name="pilih">
                            Financed
                        </label>
                        <label class="label-radio">
                            <input :class="invalid?.currently ? 'error-currently' : ''" type="radio"
                                v-model="form.currently" value="Leased" class="input-radio on" name="pilih"> Leased
                        </label>
                    </div>
                    <div class="mt-4" v-if="form.currently == 'Financed' || form.currently == 'Leased'">
                        <div class="flex flex-col gap-4">
                            <div class="w-full flex flex-col gap-2">
                                <label class=" text-sm md:text-base " for="">Leasing or Financing Company</label>
                                <input v-model="form.financingCompany"
                                    :class="invalid?.financingCompany ? 'border-error' : 'border-[#E0E0E0]'"
                                    class="p-2 rounded-lg border "
                                    placeholder="Enter the bank/institution your vehicle is currently being financed or leased with">
                            </div>
                            <div class="flex w-fill flex-col md:flex-row justify-between">
                                <div class="flex flex-col w-full gap-4">
                                    <p class="text-xs md:text-sm text-[#666666]  ">Do you know how many payments are
                                        left? (to
                                        be
                                        verified by
                                        the
                                        dealer)</p>
                                    <div class="w-full items-center flex gap-4">
                                        <label class="label-radio">
                                            <input :class="invalid?.manyPayments ? 'error-currently' : ''" type="radio"
                                                v-model="form.manyPayments" value="Yes" class="input-radio on"
                                                name="pilih-10">
                                            Yes
                                        </label>
                                        <label class="label-radio">
                                            <input :class="invalid?.manyPayments ? 'error-currently' : ''" type="radio"
                                                v-model="form.manyPayments" value="No" class="input-radio on"
                                                name="pilih-10">
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div v-if="form.manyPayments == 'Yes'" class="w-full flex flex-col gap-2">
                                    <label class=" text-sm md:text-base " for="">Remaining payments</label>
                                    <CurrencyInput v-model="form.remainingPayments" :error='invalid?.remainingPayments'
                                        :options="{ currency: 'USD' }"
                                        :placeHolder="`Enter Number of payments left $`" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="border w-full border-[#E0E0E0]">
                <div v-if="form.currently == 'Financed' || form.currently == 'Leased'"
                    class="flex w-full flex-col gap-4">
                    <p class="text-xs md:text-sm text-[#666666] ">Do you know the buyout for your vehicle? (Optional)
                    </p>
                    <div class="flex w-full justify-between gap-4 items-center">
                        <div class="w-full items-center flex gap-4">
                            <label class="label-radio">
                                <input type="radio" v-model="form.buyoutVehicle" value="Yes" class="input-radio on"
                                    name="pilih-1">
                                Yes
                            </label>
                            <label class="label-radio">
                                <input type="radio" v-model="form.buyoutVehicle" value="No" class="input-radio on"
                                    name="pilih-1">
                                No
                            </label>
                        </div>
                        <div v-if="form.buyoutVehicle == 'Yes'" class="w-full flex flex-col gap-2">
                            <label class=" text-sm md:text-base " for="">Amount</label>
                            <CurrencyInput v-model="form.yourVehicleAmount" :error='invalid?.yourVehicleAmount'
                                :options="{ currency: 'USD' }" :placeHolder="`Enter Number of payments left $`" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <p class="text-xs md:text-sm text-[#666666] ">Are you currently in the market to buy a new vehicle?
                        (Optional)</p>
                    <div class="flex flex-col gap-4">
                        <div class="flex gap-4 items-center">
                            <label class="label-radio">
                                <input type="radio" v-model="form.newVehicle" value="Yes" class="input-radio on"
                                    name="pilih-2">
                                Yes
                            </label>
                            <label class="label-radio">
                                <input type="radio" v-model="form.newVehicle" value="No" class="input-radio on"
                                    name="pilih-2">
                                No
                            </label>
                        </div>
                        <div v-if="form?.newVehicle == 'Yes'" class="flex flex-col gap-4">
                            <div class="flex gap-2 flex-col">
                                <p>Vehicle Preferences</p>
                                <p class="text-xs md:text-sm text-[#666666] ">If you are looking to buy a vehicle in the
                                    future,
                                    let us
                                    know,
                                    we will connect dealers that have what you want in stock to bid, and get you tax
                                    savings on
                                    your
                                    trade.</p>
                            </div>
                            <div class="flex gap-4  flex-col">
                                <p class="text-xs md:text-sm text-[#666666] ">Open to any vehicle?</p>
                                <div class="flex gap-4 items-center">
                                    <label class="label-radio">
                                        <input :class="invalid?.anyVehicle ? 'error-currently' : ''"
                                            v-model="form.anyVehicle" type="radio" value="Yes" class="input-radio on"
                                            name="pilih-3"> Yes
                                    </label>
                                    <label class="label-radio">
                                        <input :class="invalid?.anyVehicle ? 'error-currently' : ''"
                                            v-model="form.anyVehicle" type="radio" value="No" class="input-radio on"
                                            name="pilih-3"> No
                                    </label>
                                </div>
                            </div>
                            <div class="flex flex-col lg:flex-row gap-4">
                                <div class="w-full flex flex-col gap-2">
                                    <label class=" text-sm md:text-base " for="">Make</label>
                                    <input v-model="form.makePreferences"
                                        :class="invalid?.makePreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                        class="p-2 rounded-lg border " type="text" placeholder="Make">
                                </div>
                                <div class="w-full flex flex-col gap-2">
                                    <label class=" text-sm md:text-base " for="">Model</label>
                                    <input v-model="form.modelPreferences"
                                        :class="invalid?.modelPreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                        class="p-2 rounded-lg border " type="text" placeholder="Model">
                                </div>

                            </div>
                            <div class="w-full flex items-center  flex-col md:flex-row justify-between gap-4 ">
                                <div class="w-full flex flex-col gap-2">
                                    <label class=" text-sm md:text-base " for="">Mileage</label>
                                    <input v-model="form.modelFromPreferences"
                                        :class="invalid?.modelFromPreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                        class="p-2 rounded-lg border uppercase" placeholder="Mileage From"
                                        type="number">
                                </div>
                                <div class="w-full flex flex-col gap-2">

                                    <input v-model="form.modelToPreferences"
                                        :class="invalid?.modelToPreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                        class="p-2 md:mt-8 rounded-lg border uppercase" placeholder="Mileage To"
                                        type="number">
                                </div>
                            </div>
                            <div class="flex flex-col lg:flex-row  gap-4 items-center ">
                                <div class="w-full flex flex-col gap-2">
                                    <label class=" text-sm md:text-base " for="">Year</label>
                                    <input v-model="form.yearFromPreferences"
                                        :class="invalid?.yearFromPreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                        class="p-2  rounded-lg border uppercase" placeholder="From 1996" type="number">
                                </div>
                                <div class="w-full flex flex-col gap-2">
                                    <input v-model="form.yearToPreferences"
                                        :class="invalid?.yearToPreferences ? 'border-error' : 'border-[#E0E0E0]'"
                                        class="p-2 lg:mt-8 rounded-lg border uppercase" placeholder="From 1996"
                                        type="number">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--   <div class="flex gap-6">
                    <img :src="bucket + 'public/svg/vehiculoDetails.svg'" alt="">
                    <div class="flex flex-col ">
                        <p class=" font-semibold    md:text-xl  ">Vehicle Details</p>
                        <p class="md:font-medium text-[#4D4D4D] text-xs md:text-base ">Related to your vehicle to help
                            get the
                            right bids !</p>
                    </div>
                </div> -->
                <!--  <div class="w-full">
                    <label class="font-medium text-xs md:text-base " for="">Vehicle Identification Number (VIN)</label>
                    <input class="p-2 w-full mt-3 uppercase  border rounded-lg" v-model="form.numberVin"
                        :class="invalid?.numberVin ? 'border-error' : 'border-[#E0E0E0]'"
                        placeholder="1HGCM82633A123456" type="text">
                </div> -->
                <div class="flex w-full justify-between items-center gap-5">
                    <div class="w-full">
                        <label class="font-medium text-xs md:text-base " for="">Year</label>
                        <input v-model="form.year" :class="invalid?.year ? 'border-error' : 'border-[#E0E0E0]'"
                            class="p-2 w-full md:mt-3 border  rounded-lg" placeholder="2013" type="text">
                    </div>
                    <div class="w-full">
                        <div class="w-full flex flex-col md:gap-2">
                            <label class="font-medium text-xs md:text-base " for="">Make </label>
                            <input :class="invalid?.make ? 'border-error' : 'border-[#E0E0E0]'" v-model="form.make"
                                class="p-2 w-full border  md:mt-3  rounded-lg" placeholder="Forester" type="text">
                        </div>
                    </div>

                </div>
                <div class="flex w-full justify-between items-center flex-row gap-5">
                    <div class="w-full">
                        <label class="font-medium text-xs md:text-base " for="">Model</label>
                        <input :class="invalid?.model ? 'border-error' : 'border-[#E0E0E0]'" v-model="form.model"
                            class="p-2 w-full border  md:mt-3  rounded-lg" placeholder="Forester" type="text">
                    </div>
                    <div class="w-full">
                        <label class="font-medium text-xs md:text-base " for="">Trim</label>
                        <input :class="invalid?.trim ? 'border-error' : 'border-[#E0E0E0]'" v-model="form.trim"
                            class="p-2 w-full border  md:mt-3  rounded-lg" placeholder="Premium Plus" type="text">
                    </div>
                </div>
                <div class="flex w-full justify-between items-center gap-5">
                    <div class="w-full">
                        <label class="font-medium text-xs md:text-base " for="">Body Type</label>
                        <input :class="invalid?.bodyType ? 'border-error' : 'border-[#E0E0E0]'" v-model="form.bodyType"
                            class="p-2 w-full  md:mt-3  border rounded-lg" placeholder="SUV" type="text">
                    </div>
                    <div class="w-full">
                        <label class="font-medium text-xs md:text-base " for="">Cylinder</label>
                        <input :class="invalid?.cylinder ? 'border-error' : 'border-[#E0E0E0]'" v-model="form.cylinder"
                            class="p-2 w-full  md:mt-3  border rounded-lg" placeholder="4" type="text">
                    </div>
                </div>
                <div class="flex w-full justify-between items-center flex-col md:flex-row gap-5">
                    <div class="w-full">
                        <label class="font-medium text-xs md:text-base " for="">Transmission</label>
                        <input v-model="form.transmission"
                            :class="invalid?.transmission ? 'border-error' : 'border-[#E0E0E0]'"
                            class="p-2 w-full  md:mt-3 border  rounded-lg" placeholder="SUV" type="text">
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
                            <select :class="[invalid?.doors ? 'border-error' : 'border-[#E0E0E0]']" v-model="form.doors"
                                placeholder="Number of Doors"
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
                        <input type="radio" v-model="form.color" class="input-radio on-black" value="black"
                            name="color-redio">
                        Black
                    </label>
                    <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                        <input type="radio" v-model="form.color" class="input-radio on-white" value="white"
                            name="color-redio">
                        White
                    </label>
                    <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                        <input type="radio" v-model="form.color" class="input-radio on-silver" value="silver"
                            name="color-redio">
                        Silver
                    </label>
                    <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                        <input type="radio" v-model="form.color" class="input-radio on-grey" value="grey"
                            name="color-redio">
                        Grey
                    </label>
                    <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                        <input type="radio" v-model="form.color" class="input-radio on-greendark" value="greenDark"
                            name="color-redio">
                        Green Dark
                    </label>
                    <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                        <input type="radio" v-model="form.color" class="input-radio on-brown" value="brown"
                            name="color-redio">
                        Brown
                    </label>
                    <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                        <input type="radio" v-model="form.color" class="input-radio on-red" value="red"
                            name="color-redio">
                        Red
                    </label>
                    <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                        <input type="radio" v-model="form.color" class="input-radio on-yellow" value="yellow"
                            name="color-redio">
                        Yellow
                    </label>
                    <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                        <input type="radio" v-model="form.color" class="input-radio on-green" value="green"
                            name="color-redio">
                        Green
                    </label>
                    <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                        <input type="radio" v-model="form.color" class="input-radio on-blue" value="blue"
                            name="color-redio">
                        Blue
                    </label>
                    <label class="label-colors" :class="invalid?.color ? 'label-colors-error' : 'border-none'">
                        <input type="radio" v-model="form.color" class="input-radio on-other" value="other"
                            name="color-redio">
                        Other
                    </label>
                    <div v-if="form.color == 'other'" class="w-full flex items-start flex-col">
                        <label class="font-medium text-xs md:text-base " for="">Custom color</label>
                        <input :class="invalid?.customColor ? 'border-error' : 'border-none'" v-model="form.customColor"
                            class="p-2  border  md:mt-3 bg-[#F0F0F0] rounded-lg" placeholder="Pink" type="text">
                    </div>

                </div>
                <div class="flex flex-col gap-4">
                    <p class="font-medium text-xs md:text-base">Drive Train</p>
                    <div class="flex flex-col md:grid md:grid-cols-2 place-items-baseline  place-content-center gap-4">
                        <label class="label-radio">
                            <input type="radio" :class="invalid?.driveTrain ? 'error-driveTrain' : ''"
                                v-model="form.driveTrain" class="input-radio on" value="FWD" name="drive-train"> FWD
                            (Front-Wheel Drive)
                        </label>
                        <label class="label-radio">
                            <input type="radio" :class="invalid?.driveTrain ? 'error-driveTrain' : ''"
                                v-model="form.driveTrain" class="input-radio on" value="AWD" name="drive-train"> AWD
                            (All-Wheel Drive)
                        </label>
                        <label class="label-radio">
                            <input type="radio" :class="invalid?.driveTrain ? 'error-driveTrain' : ''"
                                v-model="form.driveTrain" class="input-radio on" value="RWD" name="drive-train"> RWD
                            (Rear-Wheel Drive)
                        </label>
                        <label class="label-radio">
                            <input type="radio" :class="invalid?.driveTrain ? 'error-driveTrain' : ''"
                                v-model="form.driveTrain" class="input-radio on" value="4WD" name="drive-train"> 4WD
                            (Four-Wheel Drive)
                        </label>
                    </div>

                </div>
                <div class="w-full">
                    <label class="font-medium text-xs md:text-base " for="">Additional Packages</label>
                    <input v-model="form.additionalPackages"
                        :class="invalid?.additionalPackages ? 'border-error' : 'border-[#E0E0E0]'"
                        class="p-2 w-full mt-3 border  rounded-lg"
                        placeholder="Input the additional packages if applicable" type="text">
                    <p class=" text-xs md:text-sm mt-3  text-[#858585] ">Such as Sports Package, Remote Starter, etc.
                    </p>
                </div>
                <div class="w-full">
                    <label class="font-medium text-xs md:text-base " for="">Any repairs required for the vehicle ? Any
                        damages
                        that need to be mentioned? Please disclose any information that will affect the value of your
                        vehicle
                        either positively or negatively.</label>
                    <textarea v-model="form.repairs" :class="invalid?.repairs ? 'border-error' : 'border-[#E0E0E0]'"
                        class="p-2 w-full mt-3 lg:h-[200px] border  rounded-lg" placeholder="Add information"
                        name="textarea" rows="10" cols="20"></textarea>
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
                                <option value="2025">2025</option>
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
                            <select v-model="form.brakePads"
                                :class="invalid?.brakePads ? 'border-error' : 'border-[#E0E0E0]'"
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
                                <option value="2025">2025</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>

                            </select>
                        </div>
                    </div>
                </div>

                <button @click="nextGeneralInformation" id="step1-edit-admin"
                    class=" btn flex justify-center bg-[#303E18] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Update
                </button>

            </div>


        </div>
    </div>


</template>
<script>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute, useRouter } from 'vue-router'
import CurrencyInput from "../../../components/Inputs/CurrencyInput.vue";
import { useAuctionStore } from "@/stores/auctions";
import { usePayments } from "@/stores/payments";
import { validateData } from "../../../validations/validationCreateAutions";
import { toast } from "vue3-toastify";
export default {


    setup(props) {
        const router = useRouter()
        const route = useRoute();
        const dataDetails = ref(null)
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const loading = ref(false)
        const invalid = ref();
        const storeIdAution = useAuctionStore()
        const id_aution = ref('')
        const form = ref({
            numberVinGenerals: undefined,
            make: undefined,
            model: undefined,
            trim: undefined,
            year: undefined,
            bodyType: undefined,
            cylinder: undefined,
            transmission: undefined,
            odometer: undefined,
            doors: undefined,
            driveTrain: undefined,
            province: undefined,
            additionalPackages: undefined,
            city: undefined,
            keys: undefined,
            color: undefined,
            repairs: undefined,
            currently: undefined,
            lastReplacement2: undefined,
            tireCondition: undefined,
            brakePads: undefined,
            lastReplacement: undefined,
            manyPayments: undefined,
            newVehicle: undefined,
            anyVehicle: undefined,
            remainingPayments: undefined,
            buyoutVehicle: undefined,
            yourVehicleAmount: undefined,
            makePreferences: undefined,
            modelPreferences: undefined,
            modelFromPreferences: undefined,
            modelToPreferences: undefined,
            financingCompany: undefined,
            yearFromPreferences: undefined,
            yearToPreferences: undefined,
            date: undefined,
        })
        const getDataAution = async (id) => {
            loading.value = true
            try {
                let res = await storeIdAution.getAutionById({ uuid: id })
                if (res) {
                    dataDetails.value = res.data
                    form.value.numberVinGenerals = res.data?.vehicleDetails?.vin;
                    form.value.year = res.data.vehicleDetails?.year;
                    form.value.make = res.data.vehicleDetails?.make;
                    form.value.model = res.data.vehicleDetails?.model;
                    form.value.trim = res.data.vehicleDetails?.trim;
                    form.value.bodyType = res.data.vehicleDetails?.bodyType;
                    form.value.cylinder = res.data.vehicleDetails?.cylinder;
                    form.value.transmission = res.data.vehicleDetails?.transmission;
                    form.value.odometer = res.data.vehicleDetails?.odometer;
                    form.value.doors = res.data.vehicleDetails?.doors;
                    form.value.repairs = res.data.vehicleDetails?.repairs;
                    form.value.color = res.data.vehicleDetails?.color;
                    form.value.additionalPackages = res.data.vehicleDetails?.aditionals;
                    form.value.driveTrain = res.data.vehicleDetails?.driveTrain;
                    form.value.province = res.data?.province;
                    form.value.city = res.data?.city;
                    form.value.keys = res.data?.keysNumber;
                    form.value.tireCondition = res.data?.vehicleDetails?.tireCondition;
                    form.value.lastReplacement = res.data?.vehicleDetails?.tireReplacement;
                    form.value.lastReplacement2 = res.data?.vehicleDetails?.brakeReplacement;
                    form.value.brakePads = res.data?.vehicleDetails?.brakeCondition;
                    form.value.currently = res.data?.vehicleStatus?.status
                    form.value.manyPayments = res.data.vehicleStatus.financingCompany ? 'Yes' : undefined;
                    form.value.financingCompany = res.data.vehicleStatus.financingCompany ? res.data.vehicleStatus.financingCompany : undefined;
                    form.value.newVehicle = res.data.buyNew.anyVehicle ? 'Yes' : undefined;
                    form.value.anyVehicle = res.data.buyNew.anyVehicle ? 'Yes' : undefined;
                    form.value.remainingPayments = res.data.vehicleStatus.remainingPayments ? res.data.vehicleStatus.remainingPayments : undefined;
                    form.value.buyoutVehicle = res.data.buyout ? 'Yes' : undefined;
                    form.value.yourVehicleAmount = res.data.buyout ? res.data.buyout : undefined;
                    form.value.date = res.data.dropOffDate;
                    form.value.makePreferences = res.data.buyNew.make ? res.data.buyNew.make : undefined;
                    form.value.modelPreferences = res.data.buyNew.model ? res.data.buyNew.model : undefined;
                    form.value.modelFromPreferences = res.data.buyNew.mileageStart ? res.data.buyNew.mileageStart : undefined;
                    form.value.modelToPreferences = res.data.buyNew.mileageEnd ? res.data.buyNew.mileageEnd : undefined;
                    form.value.yearFromPreferences = res.data.buyNew.yearStart ? res.data.buyNew.yearStart : undefined;
                    form.value.yearToPreferences = res.data.buyNew.yearEnd ? res.data.buyNew.yearEnd : undefined;
                }
            } catch (error) {
                loading.value = false
            } finally {
                loading.value = false
            }

        }

        const nextGeneralInformation = async () => {

            invalid.value = validateData(form.value, 'edit-admin');
            if (Object.entries(invalid.value).length > 0) {
                toast(
                    invalid?.value?.numberVinGenerals ||
                    invalid?.value?.date ||
                    invalid?.value?.province ||
                    invalid?.value?.city ||
                    invalid?.value?.keys ||
                    invalid?.value?.currently ||
                    invalid?.value?.numberVin ||
                    invalid?.value?.year ||
                    invalid?.value?.make ||
                    invalid?.value?.model ||
                    invalid?.value?.trim ||
                    invalid?.value?.bodyType ||
                    invalid?.value?.cylinder ||
                    invalid?.value?.transmission ||
                    invalid?.value?.odometer ||
                    invalid?.value?.odometer ||
                    invalid?.value?.doors ||
                    invalid?.value?.color ||
                    invalid?.value?.customColor ||
                    invalid?.value?.driveTrain ||
                    invalid?.value?.additionalPackages ||
                    invalid?.value?.tireCondition ||
                    invalid?.value?.lastReplacement ||
                    invalid?.value?.brakePads ||
                    invalid?.value?.lastReplacement2 ||
                    invalid?.value?.rotorCondition ||
                    invalid?.value?.lastReplacement3
                    , { type: "error" });
                return
            }
            if (Object.entries(invalid.value).length === 0) {
                let dataPost = {
                    dropOffDate: form.value.date,
                    city: form.value.city,
                    province: form.value.province,
                    keysNumber: form.value.keys,
                    vehicleStatus: {
                        status: form.value.currently,
                        financingCompany: form.value.financingCompany,
                        remainingPayments: form.value.remainingPayments,
                    },
                    buyout: form.value.yourVehicleAmount,
                    vehicleDetails: {
                        vin: form.value.numberVinGenerals,
                        year: form.value.year,
                        make: form.value.make,
                        model: form.value.model,
                        cylinder: form.value.cylinder,
                        transmission: form.value.transmission,
                        odometer: form.value.odometer,
                        color: form.value.color,
                        aditionals: form.value.additionalPackages,
                        tireCondition: form.value.tireCondition,
                        tireReplacement: form.value.lastReplacement,
                        brakeCondition: form.value.brakePads,
                        brakeReplacement: form.value.lastReplacement2,
                        repairs: form.value.repairs,
                        trim: form.value.trim,
                        bodyType: form.value.bodyType,
                        driveTrain: form.value.driveTrain,
                        doors: form.value.doors,

                    },
                    buyNew: {
                        anyVehicle: form.value.anyVehicle == 'Yes' ? true : false,
                        make: form.value.makePreferences,
                        model: form.value.modelPreferences,
                        mileageStart: form.value.modelFromPreferences,
                        mileageEnd: form.value.modelToPreferences,
                        yearStart: form.value.yearFromPreferences,
                        yearEnd: form.value.yearToPreferences
                    }
                }
                loading.value = true
                if (dataPost) {
                    try {
                        let res = await storeIdAution.update({ uuid: id_aution.value, payload: dataPost })
                        if (res) {
                            loading.value = false
                            /*  await router.push({ path: '/draft' }) */
                        }
                    } catch (error) {
                        loading.value = false
                        toast(error?.response?.data?.message || 'An error has occurred try again', { type: "error" });

                    }
                }
            }

        }
        onMounted(() => {
            if (route.params.id) {
                id_aution.value = route.params.id
                getDataAution(route.params.id)
            }


        })
        return {
            bucket,
            dataDetails,
            loading,
            form,
            invalid,
            nextGeneralInformation
        };
    },
    components: { CurrencyInput }
};
</script>