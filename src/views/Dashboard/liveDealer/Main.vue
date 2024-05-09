<template>
    <template v-if="loading">
        <Basic />
    </template>

    <template v-else>
        <HeaderOptionsDealer />
        <div class="relative max-w-[120rem] mx-auto z-50 md:top-[60px] ">
            <template v-if="data.length == 0">
                <ScreenNoDataDealer />
            </template>
            <div v-else class="flex justify-between md:mt-5 gap-4 mt-2">
                <div :class="showFilter ? ' top-0 z-50 visible  w-full h-screen overflow-y-auto overflow-x-hidden shadow-xl animation-fade-modal' : ' invisible lg:visible '"
                    class="fixed  lg:relative  lg:w-[29%] md:block">
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
                <div class="w-full lg:w-[76%] ">
                    <div class="flex items-center px-3 justify-between mb-4">
                        <p class=" text-xs font-semibold md:text-base " v-if="data.length > 0">{{ data.length }}
                            Vehicles</p>
                        <div class="flex items-center gap-2 ">
                            <p class="p-2 text-xs md:text-[16px] pb-1">Sort by:</p>
                            <!--   <div class="flex items-center gap-5">
                                <div class="navbar-right relative">
                                    <button @click="isOpen = !isOpen"
                                        class="flex gap-2 rounded-md  shadow-md px-2 bg-white items-center">
                                        <p class="p-2 pb-1">Auction Posted</p>
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
                                        <div @click="setSorBy('auction-posted')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Auction Posted
                                        </div>
                                        <div @click="setSorBy('odometer')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Odometer
                                        </div>
                                        <div @click="setSorBy('year')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Year
                                        </div>
                                    </div>
                                </div>
                                <div class="shadow-md  rounded-md flex bg-white">
                                    <div @click="changeGridTemplate"
                                        :class="changeLayouts ? 'bg-white' : 'bg-[#EFF8E0]'" class="p-2 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M19 11V5H5V11H19ZM19 13H5V19H19V13ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z"
                                                :fill="changeLayouts ? '#09121F' : '#7EC600'" />
                                        </svg>
                                    </div>
                                    <div @click="changeGridTemplate"
                                        :class="changeLayouts ? 'bg-[#EFF8E0]' : 'bg-white'"
                                        class=" p-2 flex item-center justify-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z"
                                                :fill="changeLayouts ? '#7EC600' : '#09121F'" />
                                        </svg>
                                    </div>
                                </div>
                            </div> -->
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
                                        <div @click="setSorBy('Auction Posted')"
                                            class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                                            Auction Posted
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
                                    <div @click="changeGridTemplate"
                                        :class="changeLayouts ? 'bg-white' : 'bg-[#EFF8E0]'" class="p-2 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M19 11V5H5V11H19ZM19 13H5V19H19V13ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z"
                                                :fill="changeLayouts ? '#09121F' : '#7EC600'" />
                                        </svg>
                                    </div>
                                    <div @click="changeGridTemplate"
                                        :class="changeLayouts ? 'bg-[#EFF8E0]' : 'bg-white'"
                                        class=" p-2 flex item-center justify-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z"
                                                :fill="changeLayouts ? '#7EC600' : '#09121F'" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="flex gap-2 justify-center mt-48 items-center flex-col">
                    <div>
                        <img class="object-cover " src="../../../assets/svg/noresultsdealer.svg" alt="">
                    </div>
                    <h3 class="text-center text-lg"><strong>No Results Found</strong></h3>
                    <p class="text-center">You can check your preference car in live bidding <br> or adjust your search
                        criteria</p>
                    <div class="flex gap-2 items-center">
                        <button class="btn border border-[#E0E0E0] ">Reset Filter</button>
                        <button class="btn bg-primary text-base-black ">Search Live Bidding</button>
                    </div>
                </div> -->
                    <div class="p-2"
                        :class="changeLayouts ? 'grid grid-cols-3 place-content-center place-items-center gap-5' : 'animate-fade-up  animate-ease-in-out animate-delay-200'">
                        <div v-for="(auction, index) in data" :key="index"
                            class="bg-white flex  md:mb-7 gap-5 items-start shadow-steps mb-[20%] w-full  "
                            :class="changeLayouts ? 'animate-fade-up  animate-ease-in-out animate-delay-200' : ''">
                            <CardLiveDealer :key="counter" :auction="auction" :changeLayouts="changeLayouts"
                                :auth="auth" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!showFilter && data.length > 0" @click="showFilter = true"
            class="fixed lg:hidden flex justify-center items-center bottom-2 w-full z-50">
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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ModalBidNow from "../../../components/Modals/ModalBidNow/ModalBidNow.vue";
import HeaderOptionsDealer from '../../../components/Header/HeaderOptionsDealer.vue'
import ScreenNoDataDealer from '../../../components/Screen/ScreenNoDataDealer.vue'
import CardLiveDealer from '../../../components/Cards/CardLiveDealer.vue'
import Basic from '../../../components/Loading/Basic.vue'
import FilterBig from "../../../components/Filters/FilterBig.vue";
import { arrayPhotos } from "../../../utils/packPhotos";
export default {

    components: {
        Swiper,
        SwiperSlide,
        ModalBidNow,
        HeaderOptionsDealer,
        ScreenNoDataDealer,
        CardLiveDealer,
        Basic,
        FilterBig
    },
    setup() {
        const isOpen = ref(false)
        const loading = ref(false)
        const changeLayouts = ref(false)
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
        const statusModal = ModalBids()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const data = ref([])
        const storeAutions = useAuctionStore()
        const path = ref(computed(() => route.name))
        const counter = ref(0)
        const route = useRoute();
        const auth = useAuthStore()
        const autionUpdate = ref(computed(() => auth.aution))
        const sortBy = ref('Auction Posted')

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
        watch(autionUpdate, async (newQuestion, oldQuestion) => {
            if (newQuestion.status === "live" && newQuestion.bids.length > 0) {
                let resUser = null;
                resUser = newQuestion.bids.filter((user) => user.participant._id === auth.userData._id)
                if (resUser.length > 0) {
                    let result = null;
                    result = data.value.filter((remove) => remove._id !== newQuestion._id)
                    data.value = result
                }
            }

            if (newQuestion.status === "live" && newQuestion.bids.length === 0) {
                console.log('entro en agregar en el BODY')
                data.value = [...data.value, ...newQuestion];
            }
            if (newQuestion.status === "live" && newQuestion.bids.length > 0) {
                let newArray = data.value.map(aution => aution._id !== newQuestion._id ? aution : newQuestion);
                data.value = []
                data.value = newArray
            }
            counter.value++
        })
        const index = async () => {
            loading.value = true
            try {
                await storeAutions.indexCurrentBids()
                let res = await storeAutions.index()

                data.value = storeAutions?.live
                data.value.map((autions, index) => {
                    /*   const formatter = new Intl.NumberFormat();
                      autions.vehicleDetails.odometer = formatter?.format(autions.vehicleDetails.odometer) */
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


            } finally {
                loading.value = false
            }
        }
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
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
            formFilter.value.make = 'Select make'
            formFilter.value.model = 'Select model'
            formFilter.value.year = 'Select make'
            formFilter.value.bodyType = 'Select body type'
            formFilter.value.cilynder = 'Select cylinder'
            formFilter.value.transmission = 'Select transmission'
            formFilter.value.doors = 'Select doors'
            formFilter.value.driver = 'Select drivetrain'
            formFilter.value.color = 'Select color'
            resetFilters()
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
            timeToEnd,
            auth,
            setSorBy,
            sortedData,
            counter,
            sortBy,
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
