<template>
    <template v-if="loading">
        <Basic />
    </template>

    <template v-else>
        <HeaderOptionsDealer :storeAutions="storeAutions" :data="data" />
        <div class="relative max-w-[100rem] mx-auto z-50 md:top-[60px] ">
            <template v-if="data.length == 0">
                <ScreenNoDataDealer />
            </template>
            <div v-else class="flex justify-between md:mt-5 gap-4 mt-2">
                <div class=" hidden md:w-[29%] md:block">
                    <div class="bg-white p-5 shadow-steps">
                        <div class="flex w-full justify-between items-center">
                            <p class=" text-2xl font-semibold">Filter Auction</p>
                            <p @click="resetFilterValue" class="cursor-pointer text-md text-error font-semibold">Reset
                                Filter</p>
                        </div>

                        <div class="mt-4 flex flex-col gap-4">
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Reminder Status</label>
                                <select
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option>all</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Make</label>
                                <option selected hidden>Select make</option>
                                <select @change="applyFilter($event, 'make')" v-model="formFilter.make"
                                    class="border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select make</option>
                                    <template v-for="(make, index) in filterValues('make')" :key="index">
                                        <option :value="make">{{ make }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Model</label>
                                <select @change="applyFilter($event, 'model')" v-model="formFilter.model"
                                    class=" border-none text-[#858585] md:p-3 bg-[#F0F0F0]  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select model</option>
                                    <template v-for="(model, index) in filterValues('model')" :key="index">
                                        <option :value="model">{{ model }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Trim</label>

                                <select @change="applyFilter($event, 'trim')"
                                    class=" border-none text-[#858585] md:p-3 bg-[#F0F0F0]  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select trim</option>
                                    <option selected>Select trim</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="make">Year</label>
                                <div class="flex justify-center gap-6 items-center ">
                                    <select @change="applyPairFilters($event, 'start', label.year)"
                                        class="border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                        <option selected hidden id="make">Select make</option>
                                        <template v-for="(year, index) in filterValues('year')" :key="index">
                                            <option :value="year">{{ year }}</option>
                                        </template>
                                    </select>
                                    <!--  <VueDatePicker v-model="filterValues('year')" range
                                        @update:model-value="applyPairFilters(event, 'start')" year-picker
                                        class="custom-picker">
                                        <template #calendar-header="{ index, day }">
                                            <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                                                {{ day }}
                                            </div>
                                        </template>
                                    </VueDatePicker> -->
                                    <p> - </p>
                                    <select @change="applyPairFilters($event, 'end', label.year)"
                                        class="border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                        <option selected hidden>Select make</option>
                                        <template v-for="(year, index) in filterValues('year')" :key="index">
                                            <option :value="year">{{ year }}</option>
                                        </template>
                                    </select>
                                    <!--   <VueDatePicker v-model="formPair.dateEnd"
                                        @update:model-value="applyPairFilters(event, 'end')" year-picker
                                        class="custom-picker">
                                        <template #calendar-header="{ index, day }">
                                            <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                                                {{ day }}
                                            </div>
                                        </template>
                                    </VueDatePicker> -->
                                </div>

                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Body Type</label>
                                <select @change="applyFilter($event, 'bodyType')" v-model="formFilter.bodyType"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select body type</option>
                                    <template v-for="(typeCar, index) in filterValues('bodyType')" :key="index">
                                        <option :value="typeCar">{{ typeCar }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Cylinder</label>
                                <select @change="applyFilter($event, 'cylinder')" v-model="formFilter.cilynder"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select cylinder</option>
                                    <template v-for="(cilynder, index) in filterValues('cylinder')" :key="index">
                                        <option :value="cilynder">{{ cilynder }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Transmission</label>
                                <select @change="applyFilter($event, 'transmission')" v-model="formFilter.transmission"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select transmission</option>
                                    <template v-for="(transmission, index) in filterValues('transmission')"
                                        :key="index">
                                        <option v-if="transmission" :value="transmission">{{ transmission }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Doors</label>
                                <select @change="applyFilter($event, 'doors')" v-model="formFilter.doors"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">\
                                    <option selected hidden>Select doors</option>
                                    <template v-for="(doors, index) in filterValues('doors')" :key="index">
                                        <option :value="doors">{{ doors }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Drivetrain</label>
                                <select @change="applyFilter($event, 'driveTrain')" v-model="formFilter.driver"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected hidden>Select drivetrain</option>
                                    <template v-for="(driver, index) in filterValues('driveTrain')" :key="index">
                                        <option :value="driver">{{ driver }}</option>
                                    </template>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Vehicle Condition</label>
                                <select @change="applyFilter($event, 'vehicle-condition')"
                                    class=" border border-[#E0E0E0] text-[#858585] md:p-3  text-gray-900 text-sm rounded-lg   w-full ">
                                    <option selected>Select condition</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <label class="font-medium text-sm " for="">Exterior Color</label>
                                <div class="grid grid-cols-3  place-items-start gap-4">
                                    <label v-for="(color, index) in filterValues('color')" :key="index"
                                        class="label-colors !p-2 !h-[40px] !capitalize whitespace-pre w-full">
                                        <input @change="applyFilter($event, 'color')" :value="color" type="radio"
                                            class="input-radio" :class="[
        color == 'silver' && 'on-silver',
        color == 'white' && 'on-white',
        color == 'grey' && 'on-grey',
        color == 'greenDark' && 'on-greenDark',
        color == 'red' && 'on-red',
        color == 'yellow' && 'on-yellow',
        color == 'blue' && 'on-blue',
        color == 'white' && 'on-white',
        color == 'white' && 'on-white',
    ]" name="color-redio">
                                        {{ color }}
                                    </label>
                                    <!--  <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-white" value="white"
                                            name="color-redio">
                                        White
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-silver" value="silver"
                                            name="color-redio">
                                        Silver
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-grey" value="grey"
                                            name="color-redio">
                                        Grey
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-greendark" value="greenDark"
                                            name="color-redio">
                                        Green
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-brown" value="brown"
                                            name="color-redio">
                                        Brown
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-red" value="red" name="color-redio">
                                        Red
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-yellow" value="yellow"
                                            name="color-redio">
                                        Yellow
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-green" value="green"
                                            name="color-redio">
                                        Green
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">
                                        <input type="radio" class="input-radio  on-blue" value="blue"
                                            name="color-redio">
                                        Blue
                                    </label>
                                    <label class="label-colors !p-2 !h-[40px] whitespace-pre w-full">

                                        Other
                                    </label> -->
                                </div>
                            </div>
                            <div class="w-full">
                                <label class="font-medium text-base " for="">Kilometers</label>
                                <div class="flex justify-between items-center gap-6 ">
                                    <input @change="applyPairFilters($event, 'start', label.klmtr)"
                                        class="p-2 w-full mt-3 uppercase  border border-[#E0E0E0] text-[#858585] rounded-lg"
                                        placeholder="0                                 Kms" type="number">
                                    <p>-</p>
                                    <input @change="applyPairFilters($event, 'end')" type="number"
                                        class="p-2 w-full mt-3 uppercase  border border-[#E0E0E0] text-[#858585] rounded-lg"
                                        placeholder="0                                 Kms">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-[70%]">
                    <div class="flex items-center px-3 justify-between mb-4">
                        <p class="text-xs font-semibold md:text-base " v-if="data.length > 0">{{ data.length }} Vehicles
                        </p>
                        <div class="flex items-center gap-5">
                            <div class="navbar-right relative">
                                <button @click="isOpen = !isOpen"
                                    class="flex gap-2 rounded-md  shadow-md px-2 bg-white items-center">
                                    <p class="p-2 text-xs md:text-[16px] pb-1">{{ sortBy }}</p>
                                    <div class=" p-2 border-l-2 pr-0 border-[#efefef] ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                            viewBox="0 0 18 18" fill="none">
                                            <path
                                                d="M15 3V12H17.25L14.25 15.75L11.25 12H13.5V3H15ZM9 13.5V15H2.25V13.5H9ZM10.5 8.25V9.75H2.25V8.25H10.5ZM10.5 3V4.5H2.25V3H10.5Z"
                                                fill="#858585" />
                                        </svg>
                                    </div>
                                </button>
                                <div v-if="isOpen"
                                    class="absolute  z-10 top-auto left-0 w-full py-2 mt-2 rounded-lg border-gray-900 bg-white shadow-xl">
                                    <div @click="setSorBy('Auction Date')"
                                        class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                        Auction Date
                                    </div>
                                    <div @click="setSorBy('Odometer')"
                                        class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                        Odometer
                                    </div>
                                    <div @click="setSorBy('Year')"
                                        class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                        Year
                                    </div>

                                </div>
                            </div>
                            <div class="shadow-md md:flex rounded-md hidden bg-white">
                                <div @click="changeGridTemplate" :class="changeLayouts ? 'bg-white' : 'bg-[#EFF8E0]'"
                                    class="p-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M19 11V5H5V11H19ZM19 13H5V19H19V13ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z"
                                            :fill="changeLayouts ? '#09121F' : '#7EC600'" />
                                    </svg>
                                </div>
                                <div @click="changeGridTemplate" :class="changeLayouts ? 'bg-[#EFF8E0]' : 'bg-white'"
                                    class=" p-2 flex item-center justify-center cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z"
                                            :fill="changeLayouts ? '#7EC600' : '#09121F'" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="p-2" v-if="sortedData.length > 0"
                        :class="changeLayouts ? 'grid grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up  animate-ease-in-out animate-delay-200'">
                        <div v-for="(auction, index) in sortedData" :key="index"
                            class="bg-white flex  md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full  "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <CardUpcoming :key="counter" :remind="remind" :aution="auction"
                                :remindCancel="remindCancel" />
                            <!--   <div class="w-full flex   p-5 sm:p-0 relative" :class="changeLayouts ? 'flex-col' : ''">
                                <swiper pagination :modules="modules" :slides-per-view="1" class="swiper-autions"
                                    :class="changeLayouts ? 'w-full' : 'w-[40%]'">
                                    <swiper-slide v-for="(img, indexPhoto) in aution.photos" :key="indexPhoto">
                                        <img class="w-full rounded-s-lg h-full object-cover" :src="bucket + img.url"
                                            alt="">
                                    </swiper-slide>
                                    <div v-if="!aution.photos" class=" absolute w-full h-full top-0 ">
                                        <img class="w-full rounded-s-lg h-full object-cover"
                                            src="../../../assets/img/jpg/image.jpg" alt="">
                                    </div>
                                </swiper>
                                <div class="w-full flex justify-between gap-3 "
                                    :class="changeLayouts ? 'flex-col' : ''">
                                    <RouterLink :to="{ name: 'action-details-dealer', params: { id: aution?._id } }"
                                        class="flex p-5  flex-col gap-3">
                                        <div class="">
                                            <div class="font-bold text-xl">{{ aution?.vehicleDetails?.year }} {{
            aution?.vehicleDetails?.make }} {{ aution?.vehicleDetails?.model }}
                                            </div>
                                            <p class=" text-base">
                                                {{ aution.city }}, {{ aution.province }}
                                            </p>
                                        </div>
                                        <div class="grid grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                                            <div class="flex gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M1.33398 2.66227C1.33398 2.29651 1.63752 2 1.99518 2H14.0061C14.3713 2 14.6673 2.29663 14.6673 2.66227V13.3377C14.6673 13.7035 14.3638 14 14.0061 14H1.99518C1.63002 14 1.33398 13.7034 1.33398 13.3377V2.66227ZM4.00065 10V11.3333H12.0007V10H4.00065ZM4.00065 4.66667V8.66667H8.00065V4.66667H4.00065ZM9.33398 4.66667V6H12.0007V4.66667H9.33398ZM9.33398 7.33333V8.66667H12.0007V7.33333H9.33398ZM5.33398 6H6.66732V7.33333H5.33398V6Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ aution.vin }}</p>
                                            </div>
                                            <div class="flex gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M13.334 8.66667C13.334 10.1394 12.7371 11.4727 11.7719 12.4379L12.7147 13.3807C13.9211 12.1743 14.6673 10.5076 14.6673 8.66667C14.6673 4.98477 11.6825 2 8.00065 2C4.31875 2 1.33398 4.98477 1.33398 8.66667C1.33398 10.5076 2.08018 12.1743 3.2866 13.3807L4.22942 12.4379C3.26427 11.4727 2.66732 10.1394 2.66732 8.66667C2.66732 5.72115 5.05513 3.33333 8.00065 3.33333C10.9462 3.33333 13.334 5.72115 13.334 8.66667ZM10.196 5.52865L7.00065 8.33333L8.33398 9.66667L11.1388 6.47145L10.196 5.52865Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ aution.vehicleDetails.odometer }} Kilometers
                                                </p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-1" :class="changeLayouts ? 'flex-col' : ''">
                                            <div class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ aution.vehicleDetails.color }}</p>
                                            </div>
                                            <div class="flex gap-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.6673 13.3327H3.33398V13.9993C3.33398 14.3675 3.0355 14.666 2.66732 14.666H2.00065C1.63246 14.666 1.33398 14.3675 1.33398 13.9993V7.99935L3.00954 3.53118C3.2047 3.01078 3.70219 2.66602 4.25798 2.66602H11.7433C12.2991 2.66602 12.7966 3.01078 12.9918 3.53118L14.6673 7.99935V13.9993C14.6673 14.3675 14.3689 14.666 14.0007 14.666H13.334C12.9658 14.666 12.6673 14.3675 12.6673 13.9993V13.3327ZM2.75798 7.99935H13.2433L11.7433 3.99935H4.25798L2.75798 7.99935ZM4.33398 11.3327C4.88627 11.3327 5.33398 10.8849 5.33398 10.3327C5.33398 9.78042 4.88627 9.33268 4.33398 9.33268C3.7817 9.33268 3.33398 9.78042 3.33398 10.3327C3.33398 10.8849 3.7817 11.3327 4.33398 11.3327ZM11.6673 11.3327C12.2196 11.3327 12.6673 10.8849 12.6673 10.3327C12.6673 9.78042 12.2196 9.33268 11.6673 9.33268C11.1151 9.33268 10.6673 9.78042 10.6673 10.3327C10.6673 10.8849 11.1151 11.3327 11.6673 11.3327Z"
                                                        fill="#858585" />
                                                </svg>
                                                <p class="capitalize">{{ aution.vehicleDetails.driveTrain }}</p>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-1 "
                                            :class="changeLayouts ? ' p-5 whitespace-nowrap  gap-5 overflow-x-auto overflow-y-hidden ' : ''">
                                            <div v-if="aution?.vehicleDetails?.tireCondition"
                                                class="bg-[#F0F0F0] flex px-5 py-1 gap-3 rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p class=" capitalize ">{{ aution?.vehicleDetails?.tireCondition }}</p>
                                            </div>
                                            <div v-if="aution?.vehicleDetails?.rotorCondition"
                                                class="bg-[#F0F0F0] flex  px-5 py-1  gap-3 rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99935 12.8327C3.7776 12.8327 1.16602 10.2211 1.16602 6.99935C1.16602 3.7776 3.7776 1.16602 6.99935 1.16602C10.2211 1.16602 12.8327 3.7776 12.8327 6.99935C12.8327 10.2211 10.2211 12.8327 6.99935 12.8327ZM6.41777 9.33268L10.5419 5.20793L9.7171 4.3831L6.41777 7.68302L4.76752 6.03277L3.94268 6.8576L6.41777 9.33268Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                <p class=" capitalize ">{{ aution?.vehicleDetails?.rotorCondition }}</p>
                                            </div>
                                        </div>
                                    </RouterLink>
                                    <div :class="changeLayouts ? 'w-full' : 'w-[40%] flex flex-col'"
                                        class="border-l-2  border-[#E0E0E0]">
                                        <div class="flex  p-4 pt-1  justify-between "
                                            :class="changeLayouts ? 'flex-row' : 'flex-col h-full '">
                                            <div class="space-y-1 flex w-full  flex-col justify-between items-start">
                                                <p>Starts in:</p>
                                                <p class=" font-medium text-2xl ">
                                                    {{ moment(aution.startDate).format('MMMM DD, h:mm: A') }}</p>
                                            </div>

                                        </div>

                                        <div v-if="aution.remind"
                                            class="flex gap-4 p-5 flex-col justify-between w-full">
                                            <p class="text-[#858585] text-sm ">We will notify you when the auction is
                                                going
                                                to start via text & email as well</p>
                                            <button @click="remindCancel(aution)"
                                                class="btn w-full bg-transparent border border-[#E0E0E0] flex gap-2 items-center text-base-black">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                                    viewBox="0 0 17 17" fill="none">
                                                    <path
                                                        d="M12.8907 13.8324H3.16671C3.10481 13.8324 3.04413 13.8152 2.99147 13.7826C2.93881 13.7501 2.89625 13.7035 2.86857 13.6481C2.84088 13.5928 2.82916 13.5308 2.83472 13.4691C2.84028 13.4075 2.8629 13.3486 2.90004 13.2991L3.16671 12.9437V7.16573C3.16671 6.27907 3.38271 5.44307 3.76604 4.70773L1.42871 2.37107L2.37204 1.42773L15.5714 14.6277L14.628 15.5704L12.8907 13.8324ZM13.8334 11.0231L5.53938 2.72907C6.34254 2.19303 7.27616 1.8851 8.24063 1.83814C9.2051 1.79117 10.1642 2.00693 11.0157 2.46239C11.8671 2.91785 12.5789 3.59592 13.0752 4.42426C13.5714 5.2526 13.8335 6.20012 13.8334 7.16573V11.0231ZM6.83338 14.4991H10.1667C10.1667 14.9411 9.99112 15.365 9.67856 15.6776C9.36599 15.9901 8.94207 16.1657 8.50004 16.1657C8.05802 16.1657 7.63409 15.9901 7.32153 15.6776C7.00897 15.365 6.83338 14.9411 6.83338 14.4991Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                Cancel Reminder
                                            </button>
                                        </div>
                                        <div v-else class="flex gap-4 p-5 justify-between w-full">
                                            <button @click="remind(aution)"
                                                class="btn w-full bg-primary flex gap-2 items-center text-base-black">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16"
                                                    viewBox="0 0 12 16" fill="none">
                                                    <path
                                                        d="M11.3333 11.9447L11.5999 12.3C11.6371 12.3496 11.6597 12.4085 11.6652 12.4701C11.6708 12.5318 11.6591 12.5937 11.6314 12.6491C11.6037 12.7045 11.5612 12.751 11.5085 12.7836C11.4558 12.8161 11.3952 12.8334 11.3333 12.8334H0.666585C0.604681 12.8334 0.544 12.8161 0.491342 12.7836C0.438683 12.751 0.396127 12.7045 0.368443 12.6491C0.340759 12.5937 0.32904 12.5318 0.334599 12.4701C0.340158 12.4085 0.362776 12.3496 0.399919 12.3L0.666585 11.9447V6.16671C0.666585 4.75222 1.22849 3.39567 2.22868 2.39547C3.22888 1.39528 4.58543 0.833374 5.99992 0.833374C7.41441 0.833374 8.77096 1.39528 9.77115 2.39547C10.7713 3.39567 11.3333 4.75222 11.3333 6.16671V11.9447ZM4.33325 13.5H7.66658C7.66658 13.9421 7.49099 14.366 7.17843 14.6786C6.86587 14.9911 6.44195 15.1667 5.99992 15.1667C5.55789 15.1667 5.13397 14.9911 4.82141 14.6786C4.50885 14.366 4.33325 13.9421 4.33325 13.5Z"
                                                        fill="#0B1107" />
                                                </svg>
                                                Remind Me
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fixed md:hidden flex justify-center items-center bottom-2 w-full z-50">
            <div class="flex items-center py-2 rounded-lg px-3 gap-2 bg-base-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path
                        d="M7.33317 7.83333V11.8333L4.6665 13.1667V7.83333L0.666504 1.83333V0.5H11.3332V1.83333L7.33317 7.83333ZM2.26917 1.83333L5.99984 7.42933L9.7305 1.83333H2.26917Z"
                        fill="white" />
                </svg>
                <p class="text-white text-xs">Filter</p>
            </div>

        </div>
        <ModalBidNow v-if="statusModal.isActive" :form="formData" />
    </template>
</template>

<script>
import { ref, onMounted, computed, watch, watchEffect } from "vue";
import { toast } from "vue3-toastify";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import { ModalBids } from '@/stores/modalBids';
import { useRoute, useRouter } from 'vue-router'
import moment from "moment";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ModalBidNow from "../../../components/Modals/ModalBidNow/ModalBidNow.vue";
import HeaderOptionsDealer from '../../../components/Header/HeaderOptionsDealer.vue'
import ScreenNoDataDealer from '../../../components/Screen/ScreenNoDataDealer.vue'
import CardUpcoming from '../../../components/Cards/CardUpcoming.vue'
import Basic from '../../../components/Loading/Basic.vue'
import FilterBig from "../../../components/Filters/FilterBig.vue";
export default {

    components: {
        Swiper,
        SwiperSlide,
        ModalBidNow,
        HeaderOptionsDealer,
        ScreenNoDataDealer,
        CardUpcoming,
        Basic,
        FilterBig
    },
    setup() {
        const isOpen = ref(false)
        const loading = ref(false)
        const changeLayouts = ref(false)
        const filteredItems = ref([])
        const authStore = useAuthStore()
        const formData = ref({
            placeyourbid: 0,
            cardNumber: undefined,
            nameOnCard: undefined,
            expiryDate: undefined,
            cvv: undefined,
            saveCard: undefined,
            termsConditions: undefined,
        })
        const statusModal = ModalBids()
        const label = ref({
            year: 'year',
            klmtr: 'kilometers'
        })
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const data = ref([])
        const storeAutions = useAuctionStore()
        const path = ref(computed(() => route.name))
        const route = useRoute();
        const sortBy = ref('Auction Date')
        const counter = ref(0)
        const formFilter = ref({
            make: 'Select make',
            model: 'Select model',
            year: 'Select make',
            bodyType: 'Select body type',
            cilynder: 'Select cylinder',
            transmission: 'Select transmission',
            doors: 'Select doors',
            driver: 'Select drivetrain',
            color: 'Select color',


        })
        const removeDuplicate = (array) => {
            return [...new Set(array)]
        }
        const filterValues = (key) => {
            return removeDuplicate(filteredItems.value.map(item => item.vehicleDetails[key])).sort()
        }
        const changeGridTemplate = () => {
            changeLayouts.value = !changeLayouts.value
        }
        const applyPairFilters = (event, type, filter) => {
            console.log(filter);
            console.log(filteredItems.value);
            filteredItems.value = filteredItems.value.filter((item) => {
                if (type === 'start') {
                    return item.vehicleDetails[filter] >= event.target.value
                }
                if (type === 'end') {
                    return item.vehicleDetails[filter] <= event.target.value
                }

            })

            console.log('filter', filter, ':', event.target.value)
            counter.value++
        }
        const applyFilter = (event, filter) => {
            console.log(filter);
            filteredItems.value = filteredItems.value.filter((item) => {
                console.log(item);
                return item.vehicleDetails[filter] == event.target.value
            })
            counter.value++
        }
        const remind = async (aution) => {

            loading.value = true
            try {
                let res = await storeAutions.autionsAddRemindMe({ uuid: aution._id })
            } catch (error) {

                loading.value = false
            } finally {
                counter.value++
                index()
            }
        }
        const remindCancel = async (aution) => {

            loading.value = true
            try {
                let res = await storeAutions.autionsCancelRemindMe({ uuid: aution._id })
            } catch (error) {

                loading.value = false
            } finally {

                index()
            }
        }
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
        }
        const resetFilterValue = () => {
            formFilter.value.make = 'Select make',
                formFilter.value.model = 'Select model',
                formFilter.value.year = 'Select make',
                formFilter.value.bodyType = 'Select body type',
                formFilter.value.cilynder = 'Select cylinder',
                formFilter.value.transmission = 'Select transmission',
                formFilter.value.doors = 'Select doors',
                formFilter.value.driver = 'Select drivetrain',
                formFilter.value.color = 'Select color',
                resetFilters()
        }
        const index = async () => {
            loading.value = true
            try {
                await storeAutions.indexCurrentBids()
                let res = await storeAutions.index()
                data.value = storeAutions?.upcoming
                data.value.map((autions, index) => {
                    autions.remindList.map((remind, index) => {
                        if (authStore.userData._id == remind._id) {
                            autions.remind = true
                            counter.value++
                        }
                    })
                })
                data.value.map((autions, index) => {
                    /*   const formatter = new Intl.NumberFormat();
                      autions.vehicleDetails.odometer = formatter.format(autions.vehicleDetails.odometer) */
                    let photos = []
                    if (autions?.vehicleDetails?.additionalDocuments,
                        autions?.vehicleDetails?.exteriorPhotos,
                        autions?.vehicleDetails?.interiorPhotos,
                        autions?.vehicleDetails?.driverLicense) {
                        var d = photos.concat(
                            autions?.vehicleDetails?.additionalDocuments,
                            autions?.vehicleDetails?.exteriorPhotos,
                            autions?.vehicleDetails?.interiorPhotos,
                            autions?.vehicleDetails?.vehicleDamage,
                            autions?.vehicleDetails?.driverLicense,
                            autions?.vehicleDetails?.originalDocument,
                        );
                        let resD = d.map((item, i) => {
                            let name = item.split("/")
                            let newObjet = {
                                name: name[2],
                                url: item
                            }
                            return newObjet
                        })
                        return autions.photos = resD
                    } else {
                        return autions.photos = null
                    }
                })

                resetFilters()

            } catch (error) {
                loading.value = false

            } finally {
                loading.value = false
            }
        }
        watch(statusModal, async (newQuestion, oldQuestion) => {
            if (newQuestion.finally == 'finally') {
                index()
                formData.value.placeyourbid = 0
                formData.value.cardNumber = undefined
                formData.value.nameOnCard = undefined
                formData.value.expiryDate = undefined
                formData.value.cvv = undefined
                formData.value.saveCard = undefined
                formData.value.termsConditions = undefined
                statusModal.finally = null
            }
        })
        const setSorBy = (sort) => {
            sortBy.value = sort
            isOpen.value = false

        }
        const resetFilters = () => {
            filteredItems.value = data.value
        }

        const sortedData = computed(() => {
            switch (sortBy.value) {
                case 'Auction Date':
                    return filteredItems.value.filter(p => true).sort((a, b) => timeToEnd(b.startDate, b.duration) - timeToEnd(a.startDate, a.duration))
                case 'Odometer':
                    return filteredItems.value.sort((a, b) => parseFloat(b.vehicleDetails.odometer) - parseFloat(a.vehicleDetails.odometer));
                case 'Year':
                    return filteredItems.value.sort((a, b) => parseFloat(b.vehicleDetails.year) - parseFloat(a.vehicleDetails.year));
                default:
                    return filteredItems.value
            }
        })
        watchEffect(() => {
            if (sortBy.value) {
                counter.value++
            }
            else {
                counter.value++
            }
        })
        onMounted(() => {
            index()
        })
        return {
            loading,
            isOpen,
            changeLayouts,
            changeGridTemplate,
            modules: [Navigation, Pagination, Scrollbar, A11y],
            data,
            bucket,
            formData,
            statusModal,
            path,
            storeAutions,
            moment,
            remind,
            authStore,
            remindCancel,
            setSorBy,
            sortedData,
            counter,
            sortBy,
            resetFilters,
            filterValues,
            applyFilter,
            applyPairFilters,
            label,
            formFilter,
            resetFilterValue
        };
    },
};
</script>
