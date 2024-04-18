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
                <div :class="showFilter ? ' top-0 z-50 visible  w-full h-screen overflow-y-auto overflow-x-hidden shadow-xl animation-fade-modal' : ' invisible md:visible '"
                    class="fixed  lg:relative  md:w-[29%] md:block">
                    <div class="bg-white p-5 shadow-steps">
                        <div class="flex w-full justify-between items-center">
                            <p class=" lg:text-2xl font-semibold">Filter Auction</p>
                            <div class="flex  items-center gap-2 justify-end">
                                <p @click="resetFilterValue"
                                    class="cursor-pointer text-xs lg:text-[15px] text-error font-semibold">
                                    Reset
                                    Filter</p>
                                <svg @click="showFilter = false" xmlns="http://www.w3.org/2000/svg"
                                    class=" w-6 h-8 md:w-8 lg:hidden block  md:h-8  cursor-pointer" fill="none"
                                    viewBox="0 0 24 24" stroke="#ff4545">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

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
                        <p class="text-xs font-semibold md:text-base " v-if="sortedData.length > 0">{{ sortedData.length
                            }}
                            Vehicles
                        </p>
                        <p class="text-xs font-semibold md:text-base " v-else>0 Vehicles
                        </p>
                        <!--   <SorBy :key="counter" :changeLayouts="changeLayouts" :changeGridTemplate="changeGridTemplate" /> -->
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
                                    <div @click="setSorBy('Drop off Date')"
                                        class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                        Drop off Date
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
                    <div class="p-2"
                        :class="changeLayouts ? 'grid grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up  animate-ease-in-out animate-delay-200'">

                        <div v-for="(aution, index) in sortedData" :key="index"
                            class="bg-white flex  md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full  "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <CardCompletedDealer :key="counter" :aution="aution" :data="data" :auth="authStore"
                                :confirmVehicle="confirmVehicle" :changeLayouts="changeLayouts" />
                            <!--   <div class="w-full flex   p-5 sm:p-0 relative" :class="changeLayouts ? 'flex-col' : ''">
                                <swiper pagination :modules="modules" :slides-per-view="1" class="swiper-autions"
                                    :class="changeLayouts ? 'w-full' : 'w-[40%]'">
                                    <swiper-slide v-for="(img, indexPhoto) in aution.photos" :key="indexPhoto">
                                        <img class="w-full rounded-s-lg h-full object-cover" :src="bucket + img.url" alt="">
                                    </swiper-slide>
                                    <div v-if="!aution.photos" class=" absolute w-full h-full top-0 ">
                                        <img class="w-full rounded-s-lg h-full object-cover"
                                            src="@/assets/img/jpg/image.jpg" alt="">
                                    </div>
                                </swiper>
                                <div class="w-full flex justify-between gap-3 " :class="changeLayouts ? 'flex-col' : ''">
                                    <RouterLink :to="{ name: 'action-details-dealer', params: { id: aution?._id } }"
                                        class="flex p-5  flex-col gap-3">
                                        <div class="">
                                            <div class="font-bold text-xl">{{ aution?.vehicleDetails?.year }} {{
                                                aution?.vehicleDetails?.make }} {{ aution?.vehicleDetails?.model }}</div>
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
                                                <p class="capitalize">{{ aution.vehicleDetails.odometer }} Kilometers</p>
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
                                        <div v-if="aution?.bids[0].participant._id == authStore.userData._id"
                                            class="flex gap-4 mt-5 " :class="changeLayouts ? 'flex-col' : ''">
                                            <RouterLink
                                                :to="{ name: 'inbox-dealer', query: { id: aution._id + '-' + authStore.userData._id } }"
                                                class=" w-fit flex gap-3 cursor-pointer rounded-lg items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M5.37852 15.8333L1.66602 18.75V3.33333C1.66602 3.11232 1.75381 2.90036 1.91009 2.74408C2.06637 2.5878 2.27834 2.5 2.49935 2.5H17.4993C17.7204 2.5 17.9323 2.5878 18.0886 2.74408C18.2449 2.90036 18.3327 3.11232 18.3327 3.33333V15C18.3327 15.221 18.2449 15.433 18.0886 15.5893C17.9323 15.7455 17.7204 15.8333 17.4993 15.8333H5.37852ZM5.83268 8.33333V10H7.49935V8.33333H5.83268ZM9.16602 8.33333V10H10.8327V8.33333H9.16602ZM12.4993 8.33333V10H14.166V8.33333H12.4993Z"
                                                        fill="#0A0A0A" />
                                                </svg>
                                                <p class="capitalize  ">{{ aution.owner.seller.firstName }} {{
                                                    aution.owner.seller.lastName }}</p>
                                            </RouterLink>
                                        </div>
                                    </RouterLink>
                                    <div :class="changeLayouts ? 'w-full' : 'w-[40%] flex flex-col'"
                                        class="border-l-2  border-[#E0E0E0]">
                                        <div class="flex  p-4 pt-1  justify-between "
                                            :class="changeLayouts ? 'flex-row' : 'flex-col h-full '">
                                            <div class=" flex w-full  justify-between items-center">
                                                <div class="flex gap-3 items-center justify-center flex-col">
                                                    <p>Expected drop off date</p>
                                                    <p class="text-xl font-medium">{{
                                                        moment(aution.dropOffDate).format('MMMM DD, YYYY') }}</p>
                                                </div>
                                            </div>


                                        </div>
                                        <div v-if="aution.status == 'drop off'"
                                            class="flex justify-between items-center w-full p-5">
                                            <div>
                                                <p>Final bid</p>
                                                <p class="text-2xl font-semibold">${{ aution.bids[0].amount }}</p>
                                            </div>
                                            <div>
                                                <p>Status</p>
                                                <p
                                                    class="py-1 px-4 border rounded-full text-sm text-white bg-[#05A54B] flex justify-center items-center text-left">
                                                    Received
                                                </p>
                                            </div>
                                        </div>
                                        <template v-if="aution?.bids[0].participant._id == authStore.userData._id">
                                            <div v-if="aution.status == 'completed' || aution.status == 'bids completed'"
                                                class="p-2">
                                                <button :disabled="loadingButton ? true : false"
                                                    @click="confirmVehicle(aution._id)"
                                                    class="btn w-full bg-primary flex gap-2 items-center text-base-black">
                                                    <div v-if="loadingButton && indexShowLoading == aution._id"
                                                        class="w-8 h-8">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin"
                                                            fill="#0B1107" stroke="#fff" stroke-width="0"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <span v-else> Vehicle Received</span>
                                                </button>
                                            </div>
                                        </template>

                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!showFilter && data.length > 0" @click="showFilter = true"
            class="fixed md:hidden flex justify-center items-center bottom-2 w-full z-50">
            <div class="flex items-center py-2 rounded-lg px-3 gap-2 bg-base-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path
                        d="M7.33317 7.83333V11.8333L4.6665 13.1667V7.83333L0.666504 1.83333V0.5H11.3332V1.83333L7.33317 7.83333ZM2.26917 1.83333L5.99984 7.42933L9.7305 1.83333H2.26917Z"
                        fill="white" />
                </svg>
                <p class="text-white text-xs">Filter</p>
            </div>

        </div>
        <div v-if="openPdf"
            class="fixed inset-0 flex items-end md:items-center z-50 justify-center bg-base-black  bg-opacity-50">
            <div class="max-w-lg overflow-auto  bg-white rounded-lg shadow-xl animation-fade-modal">
                <div class="p-2 md:p-4  rounded-t-lg  bg-blue-dark flex items-center justify-between">
                    <p class=" text-sm md:text-xl text-white">Contract Auction</p>
                    <svg @click="closetModalPdf()" xmlns="http://www.w3.org/2000/svg"
                        class=" w-6 h-8 md:w-8   md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <template v-if="loadingPdf">
                    <div class="w-full h-[30vh]">
                        <div class=" w-full h-full flex justify-center items-center">
                            <div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
                                <div class="absolute -left-[30px] z-10  h-[80px] w-[80px] ">
                                    <div class="animate-bounce">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861"
                                            stroke="#fff" stroke-width="0" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class=" text-base-gray font-medium pl-2 ">Loading...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </template>
                <template v-else>
                    <div v-if="steps.step1" class="w-full p-5 flex flex-col justify-center items-center">
                        <div class="flex justify-center items-center flex-col gap-3">
                            <img src="../../../assets/img/png/icon-signature.png" alt="">
                            <p class=" text-center text-lg p-5 font-medium ">Thank you for completing the process! Enjoy
                                your new vehicle and continue bidding with us!</p>
                        </div>

                        <div class="flex gap-3 items-center w-full mt-4 justify-center">
                            <button
                                class="bg-white border-error text-error hover:bg-error transition-all ease-out duration-200 hover:text-white py-2 shadow-lg rounded-lg w-full"
                                @click="closetModalPdf">No</button>
                            <button class="bg-primary py-2 shadow-lg rounded-lg w-full"
                                @click="nextContract">Yes</button>
                        </div>

                    </div>
                    <div v-show="steps.step2" id="pspdfkit" style="width: 100%; height: 70vh;"></div>
                    <div v-if="steps.step3" class="p-4 flex justify-center items-center flex-col gap-3">
                        <p class=" font-semibold capitalize md:text-xl">Final Bid Approved!</p>
                        <p class="capitalize text-xs md:text-base ">Download the Actual Sheet Below and Hand It to the
                            Buyer
                            During the Vehicle
                            Drop-Off
                            Process.</p>
                        <div class="w-full">
                            <iframe class="w-full h-[60vh]" :src="showPdf" frameborder="0"></iframe>
                        </div>

                        <button @click="pdfDonwload" class="btn w-full bg-primary rounded-md">
                            Download PDF
                        </button>

                    </div>
                </template>

            </div>
        </div>
    </template>
</template>

<script>
import { ref, onMounted, computed, watchEffect, watch } from "vue";
import { toast } from "vue3-toastify";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import { useRoute, useRouter } from 'vue-router'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeaderOptionsDealer from '../../../components/Header/HeaderOptionsDealer.vue'
import ScreenNoDataDealer from '../../../components/Screen/ScreenNoDataDealer.vue'
import moment from "moment";
import Basic from '../../../components/Loading/Basic.vue'
import ScreenCreateAution from '../../../components/Screen/ScreenCreateAution.vue'
import FilterBig from "../../../components/Filters/FilterBig.vue";
import CardCompletedDealer from "../../../components/Cards/CardCompletedDealer.vue";
import SorBy from '../../../components/Filters/SorBy.vue'
import PSPDFKit from 'pspdfkit';
import axios from "@/axios";
import { arrayPhotos } from "../../../utils/packPhotos";
export default {

    components: {
        Swiper,
        SwiperSlide,
        HeaderOptionsDealer,
        ScreenNoDataDealer,
        Basic,
        ScreenCreateAution,
        FilterBig,
        SorBy,
        CardCompletedDealer
    },
    setup() {
        const isOpen = ref(false)
        const loading = ref(false)
        const loadingPdf = ref(false)
        const openPdf = ref(false)
        const autionPdf = ref(null)
        const changeLayouts = ref(false)
        const counter = ref(0)
        const showPdf = ref('')
        const changeGridTemplate = () => {
            changeLayouts.value = !changeLayouts.value
            counter.value++
        }
        const formData = ref({
            placeyourbid: 0,
            cardNumber: undefined,
            nameOnCard: undefined,
            expiryDate: undefined,
            cvv: undefined,
            saveCard: undefined,
            termsConditions: undefined,
            notify: undefined,
            creditCard: undefined
        })
        const authStore = useAuthStore()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const autionUpdate = ref(computed(() => authStore.aution))
        const data = ref([])
        const storeAutions = useAuctionStore()
        const path = ref(computed(() => route.name))
        const route = useRoute();
        const indexShowLoading = ref(false)
        const loadingButton = ref(false)
        const sortBy = ref('Drop off Date')
        const steps = ref({
            step1: true,
            step2: false,
            step3: false
        })
        const filteredItems = ref([])
        const showFilter = ref(false)
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
        const dataBuffer = ref(null)
        watch(autionUpdate, async (newQuestion, oldQuestion) => {
            console.log('autionUpdate COMPLETED DEALER', autionUpdate)
            const i = data.value.findIndex(x => x._id === newQuestion._id)
            data.value[i] = newQuestion
            if (autionUpdate.value.status == 'completed' || autionUpdate.value.status == 'drop off') {
                const i = data.value.findIndex(x => x._id === newQuestion._id)
                data.value[i] = newQuestion
                let photos = null;
                photos = arrayPhotos(data.value[i].vehicleDetails)
                if (photos.length > 0) {
                    data.value[i].photos = photos
                } else {
                    photos = null
                }
            } else {
                let result = null;
                result = data.value.filter((remove) => remove._id !== newQuestion._id)
                data.value = result

            }
            counter.value++
        })
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
        }
        const index = async () => {
            loading.value = true
            try {
                let newArray = []
                await storeAutions.index()
                let res = await storeAutions.indexCurrentBids()
                console.log('storeAutions?.completed', storeAutions?.completed)
                data.value = storeAutions?.completed
                data.value.map((autions, index) => {
                    let photos = null;
                    photos = arrayPhotos(autions.vehicleDetails)
                    if (photos.length > 0) {
                        autions.photos = photos
                    } else {
                        photos = null
                    }
                })
                resetFilters()
            } catch (error) {
                toast(error.response.data.message, {
                    type: "error",
                });
            } finally {
                loading.value = false
            }
        }
        const sutmibPDF = async (pdf) => {
            console.log('recivied', pdf)
            loadingPdf.value = true
            try {
                const blob = new Blob([pdf], { type: 'application/pdf' }, { name: Date.now() + '.' + pdf.extension });
                const formData = new FormData();
                formData.append("file", blob);
                formData.append("location", 'test/pdf');
                const options = {
                    url: "/uploader/create",
                    method: 'POST',
                    headers: { 'content-type': 'multipart/form-data' },
                    data: formData
                };
                let result = await axios(options);
                if (result.data) {
                    console.log('result', result)
                    console.log('autionPdf.value._id, result.data', autionPdf.value._id, result.data)
                    try {
                        let res = await storeAutions.vehicleReceived(autionPdf.value._id, result.data)
                        console.log('res', res)
                        if (res) {
                            showPdf.value = 'https://apidev.autosensei.ca/files/' + result.data
                            steps.value.step1 = false
                            steps.value.step2 = false
                            steps.value.step3 = true
                        }
                    } catch (error) {
                        loadingPdf.value = false
                        toast(error.response.data.message, {
                            type: "error",
                        });
                    } finally {
                        loadingPdf.value = false
                        index()
                    }



                }

                console.log(result);
            } catch (e) {
                loading.value = false
                console.error("error", e);
            } finally {
                loading.value = false
            }
        }
        const pdfDonwload = () => {
            const link = document.createElement('a');
            link.href = showPdf.value;
            link.target = '_blank';
            link.download = 'contect-file.pdf';

            // Simulate a click on the element <a>
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        }
        const nextContract = async () => {
            steps.value.step1 = false
            steps.value.step2 = true
            if (steps.value.step2) {
                loadingPdf.value = true
                try {
                    let res = await storeAutions.vehicleReceived(autionPdf.value._id, autionPdf.value.contractSeallerSing)
                    showPdf.value = 'https://apidev.autosensei.ca/files/' + autionPdf.value.contractSeallerSing
                    console.log('res', res)
                    if (res) {
                        loadingPdf.value = false
                        steps.value.step1 = false
                        steps.value.step2 = false
                        steps.value.step3 = true

                    }
                } catch (error) {
                    loadingPdf.value = false
                    toast(error.response.data.message, {
                        type: "error",
                    });
                } finally {
                    loadingPdf.value = false
                    /*  index() */
                }

                /* const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;
                PSPDFKit.load({
                    baseUrl,
                    container: "#pspdfkit",
                    document: 'https://apidev.autosensei.ca/files/' + autionPdf.value.contractSeallerSing,
                }).then(async function (instance) {
                    loadingPdf.value = false
                    const widget2 = new PSPDFKit.Annotations.WidgetAnnotation({
                        id: PSPDFKit.generateInstantId(),
                        pageIndex: 0,
                        isEditable: true,
                        locked: true,
                        lockedContents: true,
                        isReadOnly: true,
                        boundingBox: new PSPDFKit.Geometry.Rect({
                            left: 125,
                            top: 765,
                            width: 100,
                            height: 20
                        }),
                        formFieldName: "my signature form field"
                    })
                    const formField = new PSPDFKit.FormFields.SignatureFormField({
                        name: "my signature form field",
                        annotationIds: new PSPDFKit.Immutable.List([widget2.id])
                    });
                    await instance.create([widget2, formField]);
                    instance.addEventListener("annotations.create", async (e) => {
                        const buffer = await instance.exportPDF({ flatten: true });
                        dataBuffer.value = buffer
                        sutmibPDF(buffer)
                    });
                }) */
            }

        }
        const confirmVehicle = async (aution) => {
            console.log('aution', aution)
            autionPdf.value = aution
            openPdf.value = true
        }
        const setSorBy = (sort) => {
            sortBy.value = sort
            isOpen.value = false

        }
        const closetModalPdf = () => {
            steps.value.step1 = true
            steps.value.step2 = false
            steps.value.step3 = false
            dataBuffer.value = null
            autionPdf.value = null
            showPdf.value = null
            loadingPdf.value = false
            openPdf.value = false
        }
        const removeDuplicate = (array) => {
            return [...new Set(array)]
        }
        const filterValues = (key) => {
            return removeDuplicate(filteredItems.value.map(item => item.vehicleDetails[key])).sort()
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
        const resetFilters = () => {
            filteredItems.value = data.value
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
        const sortedData = computed(() => {
            switch (sortBy.value) {
                case 'Drop off Date':
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
            path,
            storeAutions,
            authStore,
            index,
            moment,
            confirmVehicle,
            loadingButton,
            indexShowLoading,
            counter,
            sortedData,
            setSorBy,
            sortBy,
            openPdf,
            autionPdf,
            loadingPdf,
            steps,
            nextContract,
            showPdf,
            pdfDonwload,
            closetModalPdf,
            filterValues,
            applyPairFilters,
            applyFilter,
            resetFilterValue,
            removeDuplicate,
            filteredItems,
            showFilter,
            formFilter
        };
    },
};
</script>
