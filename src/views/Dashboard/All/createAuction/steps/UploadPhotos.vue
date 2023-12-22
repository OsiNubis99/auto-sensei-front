<template>
    <div class="bg-white flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
        <div class="flex gap-6">
            <img src="../../../../../assets/svg/uploadPhotos.svg " alt="">
            <div class="flex flex-col ">
                <p class=" font-semibold text-xl">Upload Photos</p>
                <p>You can easily upload through your phone</p>
            </div>
        </div>
        <div>
            <p class="font-medium text-base">Original Documents</p>
            <p class="text-sm text-[#666666]">Such as ownership certificate, financing documents, etc.</p>
        </div>
        <div class="flex max-w-[320px]  flex-col gap-5">
            <div :class="invalid?.document ? 'border-[#ff000075]' : 'border-[#E0E0E0]'"
                class="border flex flex-col gap-4 items-center  p-5">
                <div class="w-full flex justify-center ">
                    <img v-if="form?.previewDocument" class="w-full h-[190px] object-contain " :src="form?.previewDocument"
                        alt="">
                    <img v-else class="w-full h-[190px] object-contain "
                        src="../../../../../assets/img/png/exampleDocuemnt.png" alt="">
                    <!-- <svg v-else class="w-[100px] h-[100px]" :fill="invalid?.document ? '#ff000075' : '#6d6d6d42'"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg> -->
                </div>
                <div v-if="form?.document?.name" class="flex w-full items-start flex-col justify-start gap-1">
                    <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                        form?.document?.mb }}Mb - </p>
                    <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                        {{ form?.document?.name }}</p>
                </div>
                <p v-else class="text-[14px] font-medium text-[#666]">Example of original documents photo <br> use JPG, PNG,
                    or BMP file</p>
            </div>
            <label
                class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                <div class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                        <path
                            d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                            fill="#1F94F0" />
                    </svg>
                    <p class=" text-md  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                </div>
                <input type="file" accept="image/*" @change="(event) => previewImage(event, 'document')" class="hidden">
            </label>
        </div>
        <div>
            <p class="font-medium text-base">Driver License</p>
        </div>
        <div class="max-w-[320px]   flex  flex-col gap-5">
            <div :class="invalid?.driverDocument ? 'border-[#ff000075]' : 'border-[#E0E0E0]'"
                class="border flex flex-col gap-4 items-center  p-5">
                <div class="w-full flex justify-center">
                    <img class="w-full h-[190px]  object-contain " v-if="form?.previewDriver" :src="form?.previewDriver"
                        alt="">
                    <img v-else class="w-full h-[190px] object-contain "
                        src="../../../../../assets/img/png/exampleLicencie.png" alt="">
                    <!-- <svg v-else class="w-[100px] h-[100px]" :fill="invalid?.driverDocument ? '#ff000075' : '#6d6d6d42'"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg> -->
                </div>
                <div v-if="form?.driverDocument?.name" class="flex w-full items-start flex-col justify-start gap-1">
                    <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                        form?.driverDocument?.mb }}Mb - </p>
                    <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                        {{ form?.driverDocument?.name }}</p>
                </div>
                <p v-else class="text-[14px] font-medium text-[#666]">Example of drive license photo <br> use JPG, PNG, or
                    BMP file</p>
            </div>
            <label
                class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                <div class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                        <path
                            d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                            fill="#1F94F0" />
                    </svg>
                    <p class=" text-md  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                </div>
                <input type="file" accept="image/*" @change="(event) => previewImage(event, 'driver')" class="hidden">
            </label>
        </div>
        <div>
            <p class="font-medium text-base">Exterior Photos</p>
        </div>
        <div class="grid grid-cols-3 gap-5">
            <div class="flex max-w-xs flex-col gap-2">
                <div class="flex items-center gap-3">
                    <p class="font-medium text-sm ">3/4 Front Photo</p>
                    <p class="text-white text-xs  bg-[#05A54B] py-1 px-3 rounded-xl ">Main Photo</p>
                </div>

                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.frontPhoto ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]  object-contain " v-if="form?.previewFrontPhoto"
                            :src="form?.previewFrontPhoto" alt="">
                        <img v-else class="w-full h-[190px] object-contain " src="../../../../../assets/img/png/mainphoto.png"
                            alt="">
                        <!-- <svg v-else class="w-[100px] h-[100px]" :fill="invalid?.frontPhoto ? '#ff000075' : '#6d6d6d42'"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg> -->
                    </div>
                    <div v-if="form?.frontPhoto?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.frontPhoto?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.frontPhoto?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Example of front photo use JPG, PNG, or BMP file
                    </p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'frontPhoto')"
                        class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Front</p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.front ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewFront" :src="form?.previewFront"
                            alt="">
                        <img v-else class="w-full h-[190px] object-contain " src="../../../../../assets/img/png/front.png"
                            alt="">
                        <!-- <svg v-else class="w-[100px] h-[100px]" :fill="invalid?.front ? '#ff000075' : '#6d6d6d42'"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg> -->
                    </div>
                    <div v-if="form?.front?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.front?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.front?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Example of front photo use JPG, PNG, or BMP file
                    </p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'front')" class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Driver Side</p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.driverSide ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewDriverSide"
                            :src="form?.previewDriverSide" alt="">
                        <img v-else class="w-full h-[190px] object-contain " src="../../../../../assets/img/png/driverside.png"
                            alt="">
                    </div>
                    <div v-if="form?.driverSide?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.driverSide?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.driverSide?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Example of front photo use JPG, PNG, or BMP file
                    </p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'driverSide')"
                        class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Back</p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.back ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewBack" :src="form?.previewBack"
                            alt="">
                        <img v-else class="w-full h-[190px] object-contain " src="../../../../../assets/img/png/back.png"
                            alt="">
                    </div>
                    <div v-if="form?.back?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.back?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.back?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Example of back photo use JPG, PNG, or BMP file
                    </p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'back')" class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Passenger Side</p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.passengerSide ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewPassengerSide"
                            :src="form?.previewPassengerSide" alt="">
                        <img v-else class="w-full h-[190px] object-contain " src="../../../../../assets/img/png/passenger.png"
                            alt="">
                    </div>
                    <div v-if="form?.passengerSide?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.passengerSide?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.passengerSide?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Example of passenger side photo use JPG, PNG, or
                        BMP file</p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'passengerSide')"
                        class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Tire and Rim</p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.tireAndRim ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewTireAndRim"
                            :src="form?.previewTireAndRim" alt="">
                        <img v-else class="w-full h-[190px] object-contain " src="../../../../../assets/img/png/rin.png"
                            alt="">
                    </div>
                    <div v-if="form?.tireAndRim?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.tireAndRim?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.tireAndRim?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Example of tire and rim photo use JPG, PNG, or BMP
                        file</p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'tireAndRim')"
                        class="hidden">
                </label>
            </div>

        </div>
        <div>
            <p class="font-medium text-base">Interior Photos</p>
        </div>
        <div class="grid grid-cols-3 gap-5">
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Drivers Display (Odometer)</p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.driversDisplay ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewDriversDisplay"
                            :src="form?.previewDriversDisplay" alt="">
                        <img v-else class="w-full h-[190px] object-contain " src="../../../../../assets/img/png/tacomentro.png"
                            alt="">
                    </div>
                    <div v-if="form?.driversDisplay?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.driversDisplay?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.driversDisplay?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Example of drivers display photo use JPG, PNG, or
                        BMP file</p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'driversDisplay')"
                        class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Drivers Side</p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.driversSide ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewDriversSide"
                            :src="form?.previewDriversSide" alt="">
                        <img v-else class="w-full h-[190px] object-contain " src="../../../../../assets/img/png/dentro.png"
                            alt="">
                    </div>
                    <div v-if="form?.driversSide?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.driversSide?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.driversSide?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Example of drivers side photo use JPG, PNG, or BMP
                        file</p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'driversSide')"
                        class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Center Console</p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.centerConsole ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewCenterConsole"
                            :src="form?.previewCenterConsole" alt="">
                        <img v-else class="w-full h-[190px] object-contain " src="../../../../../assets/img/png/tavblero.png"
                            alt="">
                    </div>
                    <div v-if="form?.centerConsole?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.centerConsole?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.centerConsole?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Example of center console photo use JPG, PNG, or
                        BMP file</p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'centerConsole')"
                        class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Rear Seats</p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.rearSeats ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewRearSeats"
                            :src="form?.previewRearSeats" alt="">
                        <img v-else class="w-full h-[190px] object-contain "
                            src="../../../../../assets/img/png/asientosatras.png" alt="">
                    </div>
                    <div v-if="form?.rearSeats?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.rearSeats?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.rearSeats?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Example of drivers display photo use JPG, PNG, or
                        BMP file</p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'rearSeats')"
                        class="hidden">
                </label>
            </div>

        </div>
        <div>
            <p class="font-medium text-base">Other Documents</p>
        </div>
        <div class="grid grid-cols-3 gap-5">
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Upload Vehicle Damage</p>
                <p class="text-sm text-[#666666] ">Please upload damages on vehicle if applicable</p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.vehicleDamage ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewVehicleDamage"
                            :src="form?.previewVehicleDamage" alt="">
                        <svg v-else class="w-[100px] h-[100px]" :fill="invalid?.vehicleDamage ? '#ff000075' : '#6d6d6d42'"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                    </div>
                    <div v-if="form?.vehicleDamage?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.vehicleDamage?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.vehicleDamage?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Use JPG, PNG or BMP files</p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'vehicleDamage')"
                        class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Upload Additional Documents</p>
                <p class="text-sm text-[#666666] ">Please upload additional documents such as service records if available
                </p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.additionalDocuments ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewAdditionalDocuments"
                            :src="form?.previewAdditionalDocuments" alt="">
                        <svg v-else class="w-[100px] h-[100px]"
                            :fill="invalid?.additionalDocuments ? '#ff000075' : '#6d6d6d42'"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                    </div>
                    <div v-if="form?.additionalDocuments?.name"
                        class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.additionalDocuments?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.additionalDocuments?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Use JPG, PNG or BMP files</p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Image</p>
                    </div>
                    <input type="file" accept="image/*" @change="(event) => previewImage(event, 'additionalDocuments')"
                        class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">360-Degree Vehicle Video</p>
                <p class="text-sm text-[#666666] ">Users tend to get more for their vehicle with a detailed 30 second video
                </p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.vehicleVideo ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div>
                        <video autoplay muted loop class="w-full h-[190px] object-contain" v-if="form?.previewVehicleVideo"
                            :src="form?.previewVehicleVideo" />
                        <svg v-else class="w-[100px] h-[100px]" :fill="invalid?.vehicleVideo ? '#ff000075' : '#6d6d6d42'"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                    </div>
                    <div v-if="form?.vehicleVideo?.name" class="flex w-full items-start flex-col justify-start gap-1">
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"> <strong>Size:</strong> {{
                            form?.vehicleVideo?.mb }}Mb - </p>
                        <p class="text-xs font-medium w-[200px] text-[#666] truncate"><strong>Name:</strong>
                            {{ form?.vehicleVideo?.name }}</p>
                    </div>
                    <p v-else class="text-[14px] font-medium text-[#666]">Use MP4, MOV video up to 100mb</p>
                </div>
                <label
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 17 16" fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-sm  font-medium leading-normal text-[#1F94F0]">Drag & Drop or Select Video</p>
                    </div>
                    <input type="file" accept="video/mp4, video/mov"
                        @change="(event) => previewImage(event, 'vehicleVideo')" class="hidden">
                </label>
            </div>

        </div>
        <div v-if="!save" class="flex justify-center items-center gap-5 ">
            <button
                class=" btn bg-transparent  border-[#E0E0E0] flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save as Draft
            </button>
            <button @click="next"
                class=" btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-blackbg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Launch Auction
            </button>
        </div>
        <div v-else class="flex justify-center items-center gap-5 ">
            <button @click="createAutions"
                class=" btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-blackbg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Launch Auction POST
            </button>
        </div>

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
        saveData: {
            type: Function,
        },
        nextUploadPhotos: {
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
        const invalid = ref(props.invalid)
        const previewImage = (event, string) => {
            var input = event.target;
            let typeFile = input.files[0].type.split("/")

            let convertion = (input.files[0].size / (1024 * 1024)).toFixed(2);
            if (input.files) {

                if (convertion > 100 && typeFile[0] == 'video') {
                    toast("The video exceeds 100mb", {
                        type: "error",
                    });
                } else {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        switch (string) {
                            case 'document':
                                form.value.previewDocument = e.target.result;
                                form.value.document = input.files[0];
                                form.value.document.mb = convertion
                                break;
                            case 'driver':
                                form.value.previewDriver = e.target.result;
                                form.value.driverDocument = input.files[0];
                                form.value.driverDocument.mb = convertion
                                break;
                            case 'frontPhoto':
                                form.value.previewFrontPhoto = e.target.result;
                                form.value.frontPhoto = input.files[0];
                                form.value.frontPhoto.mb = convertion
                                break;
                            case 'front':
                                form.value.previewFront = e.target.result;
                                form.value.front = input.files[0];
                                form.value.front.mb = convertion
                                break;
                            case 'driverSide':
                                form.value.previewDriverSide = e.target.result;
                                form.value.driverSide = input.files[0];
                                form.value.driverSide.mb = convertion
                                break;
                            case 'back':
                                form.value.previewBack = e.target.result;
                                form.value.back = input.files[0];
                                form.value.back.mb = convertion
                                break;
                            case 'passengerSide':
                                form.value.previewPassengerSide = e.target.result;
                                form.value.passengerSide = input.files[0];
                                form.value.passengerSide.mb = convertion
                                break;
                            case 'tireAndRim':
                                form.value.previewTireAndRim = e.target.result;
                                form.value.tireAndRim = input.files[0];
                                form.value.tireAndRim.mb = convertion
                                break;
                            case 'driversDisplay':
                                form.value.previewDriversDisplay = e.target.result;
                                form.value.driversDisplay = input.files[0];
                                form.value.driversDisplay.mb = convertion
                                break;
                            case 'driversSide':
                                form.value.previewDriversSide = e.target.result;
                                form.value.driversSide = input.files[0];
                                form.value.driversSide.mb = convertion
                                break;
                            case 'centerConsole':
                                form.value.previewCenterConsole = e.target.result;
                                form.value.centerConsole = input.files[0];
                                form.value.centerConsole.mb = convertion
                                break;
                            case 'rearSeats':
                                form.value.previewRearSeats = e.target.result;
                                form.value.rearSeats = input.files[0];
                                form.value.rearSeats.mb = convertion
                                break;
                            case 'vehicleDamage':
                                form.value.previewVehicleDamage = e.target.result;
                                form.value.vehicleDamage = input.files[0];
                                form.value.vehicleDamage.mb = convertion
                                break;
                            case 'additionalDocuments':
                                form.value.previewAdditionalDocuments = e.target.result;
                                form.value.additionalDocuments = input.files[0];
                                form.value.additionalDocuments.mb = convertion
                                break;
                            case 'vehicleVideo':
                                console.log('video', e)
                                form.value.previewVehicleVideo = e.target.result;
                                form.value.vehicleVideo = input.files[0];
                                form.value.vehicleVideo.mb = convertion
                                break;
                            default:
                                break;
                        }

                    }
                }
                reader.readAsDataURL(input.files[0]);
                console.log('reader', reader)
            }
        }
        const next = () => {
            props.nextUploadPhotos()
        }
        const createAutions = () => {
            props.saveData()
        }
        return {
            date,
            form,
            next,
            previewImage,
            invalid,
            save,
            createAutions
        };
    },
};
</script>





  