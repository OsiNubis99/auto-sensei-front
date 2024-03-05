<template>
    <div class="bg-white p-5 shadow-steps">
        <p class=" text-2xl font-semibold  ">Filter Auction</p>
        <div class="mt-4 flex flex-col gap-4">
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Reminder Status</label>
                <select class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                    <option selected>All</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Make</label>
                <select class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                    <option selected>Select make</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Model</label>
                <select class=" border-none text-[#858585] md:p-3 bg-[#F0F0F0]  text-gray-900 text-sm rounded-lg   w-full ">
                    <option selected>Select model</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Trim</label>
                <select class=" border-none text-[#858585] md:p-3 bg-[#F0F0F0]  text-gray-900 text-sm rounded-lg   w-full ">
                    <option selected>Select trim</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Year</label>
                <div class="flex justify-center gap-6 items-center ">
                    <VueDatePicker year-picker :min-date="new Date()" class="custom-picker">
                        <template #calendar-header="{ index, day }">
                            <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                                {{ day }}
                            </div>
                        </template>
                    </VueDatePicker>
                    <p> - </p>
                    <VueDatePicker year-picker :min-date="new Date()" class="custom-picker">
                        <template #calendar-header="{ index, day }">
                            <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                                {{ day }}
                            </div>
                        </template>
                    </VueDatePicker>
                </div>

            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Body Type</label>
                <select class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                    <option selected>Select body type</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Cylinder</label>
                <select class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                    <option selected>Select cylinder</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Transmission</label>
                <select class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                    <option selected>Select transmission</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Doors</label>
                <select class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                    <option selected>Select doors</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Drivetrain</label>
                <select class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                    <option selected>Select doors</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Vehicle Condition</label>
                <select class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                    <option selected>Select condition</option>
                </select>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-medium text-sm " for="">Exterior Color</label>
                <div class="grid grid-cols-3  place-items-start gap-4">
                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                        <input type="radio" class="input-radio  on-black" value="black" name="color-redio">
                        Black
                    </label>
                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                        <input type="radio" class="input-radio  on-white" value="white" name="color-redio">
                        White
                    </label>
                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                        <input type="radio" class="input-radio  on-silver" value="silver" name="color-redio">
                        Silver
                    </label>
                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                        <input type="radio" class="input-radio  on-grey" value="grey" name="color-redio">
                        Grey
                    </label>
                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                        <input type="radio" class="input-radio  on-greendark" value="greenDark" name="color-redio"> Green
                    </label>
                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                        <input type="radio" class="input-radio  on-brown" value="brown" name="color-redio">
                        Brown
                    </label>
                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                        <input type="radio" class="input-radio  on-red" value="red" name="color-redio"> Red
                    </label>
                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                        <input type="radio" class="input-radio  on-yellow" value="yellow" name="color-redio">
                        Yellow
                    </label>
                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                        <input type="radio" class="input-radio  on-green" value="green" name="color-redio">
                        Green
                    </label>
                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                        <input type="radio" class="input-radio  on-blue" value="blue" name="color-redio">
                        Blue
                    </label>
                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">

                        Other
                    </label>
                </div>
            </div>
            <div class="w-full">
                <label class="font-medium text-base " for="">Kilometers</label>
                <div class="flex justify-between items-center gap-6 ">
                    <input class="p-2 w-full mt-3 uppercase  border border-[#E0E0E0] text-[#858585] rounded-lg"
                        placeholder="0                                 Kms" type="number">
                    <p>-</p>
                    <input type="number"
                        class="p-2 w-full mt-3 uppercase  border border-[#E0E0E0] text-[#858585] rounded-lg"
                        placeholder="0                                 Kms">
                </div>
            </div>
        </div>
    </div>
</template>