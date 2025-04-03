<template>
    <div v-show="statusModalView.isActive"
        class="fixed inset-0 flex items-end md:items-center md:justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-xl w-full h-[70vh] overflow-hidden  bg-white rounded-lg shadow-xl animation-fade-modal">
            <div class="h-full">
                <div class="md:p-4 p-2 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                    <p class=" text-md md:text-xl text-white">Guide</p>
                    <svg @click="statusModalView.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                        class=" w-5 md:w-8 md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="w-full p-2 h-full">
                    <p class=" font-Nohemi text-sm md:text-xl  ">It is recommended to upload detailed photos of the car
                        as indicated in this guide.
                        <br>
                        <br>
                        Example:
                    </p>
                    <div class="flex h-[60vh] pb-24 sm:pb-28 mt-3 overflow-auto gap-3 flex-col">

                        <div>
                            <p class=" font-Inter mb-2 text-sm sm:text-base font-semibold ">Exterior Photos</p>
                            <div class="grid grid-cols-2  md:grid-cols-3  px-2 gap-2 sm:gap-4 m-auto  lg:px-3  ">
                                <div class="flex w-full  flex-col gap-2">
                                    <div class="flex items-center gap-3">
                                        <p class="font-medium text-xs md:text-sm ">3/4 Front Photo</p>

                                    </div>
                                    <div
                                        class="flex flex-col h-full shadow-image-upload rounded-xl relative gap-4 bg-white items-center p-5 group">
                                        <img class="w-full h-full object-cover "
                                            :src="bucket + 'public/img/png/mainphoto.png'" alt="">
                                        <p v-if="!form?.previewFrontPhoto"
                                            class=" text-[8px] sm:text-[11px]  text-center   font-medium text-[#858585]">
                                            Example
                                            of 3/4 Front
                                            use JPG, PNG, or BMP file
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-full  flex-col gap-2">
                                    <div class="flex items-center gap-3">
                                        <p class="font-medium text-xs md:text-sm ">Front</p>
                                    </div>
                                    <div
                                        class="flex flex-col h-full shadow-image-upload rounded-xl relative gap-4 bg-white items-center p-5 group">
                                        <img class="w-full h-full object-cover "
                                            :src="bucket + 'public/img/png/front.png'" alt="">
                                        <p v-if="!form?.previewFrontPhoto"
                                            class=" text-[8px] sm:text-[11px]  text-center   font-medium text-[#858585]">
                                            Example
                                            of front
                                            use JPG, PNG, or BMP file
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-full  flex-col gap-2">
                                    <div class="flex items-center gap-3">
                                        <p class="font-medium text-xs md:text-sm ">Driver Side</p>
                                    </div>
                                    <div
                                        class="flex flex-col h-full shadow-image-upload rounded-xl relative gap-4 bg-white items-center p-5 group">
                                        <img class="w-full h-full object-cover "
                                            :src="bucket + 'public/img/png/driverside.png'" alt="">
                                        <p v-if="!form?.previewFrontPhoto"
                                            class=" text-[8px] sm:text-[11px]  text-center   font-medium text-[#858585]">
                                            Example
                                            of Driver Side
                                            use JPG, PNG, or BMP file
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-full  flex-col gap-2">
                                    <div class="flex items-center gap-3">
                                        <p class="font-medium text-xs md:text-sm ">Back</p>
                                    </div>
                                    <div
                                        class="flex flex-col h-full shadow-image-upload rounded-xl relative gap-4 bg-white items-center p-5 group">
                                        <img class="w-full h-full object-cover "
                                            :src="bucket + 'public/img/png/back.png'" alt="">
                                        <p v-if="!form?.previewFrontPhoto"
                                            class=" text-[8px] sm:text-[11px]  text-center   font-medium text-[#858585]">
                                            Example
                                            of Back
                                            use JPG, PNG, or BMP file
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-full  flex-col gap-2">
                                    <div class="flex items-center gap-3">
                                        <p class="font-medium text-xs md:text-sm ">Passenger Side</p>
                                    </div>
                                    <div
                                        class="flex flex-col h-full shadow-image-upload rounded-xl relative gap-4 bg-white items-center p-5 group">
                                        <img class="w-full h-full object-cover "
                                            :src="bucket + 'public/img/png/passenger.png'" alt="">
                                        <p v-if="!form?.previewFrontPhoto"
                                            class=" text-[8px] sm:text-[11px]  text-center   font-medium text-[#858585]">
                                            Example
                                            of Passenger Side
                                            use JPG, PNG, or BMP file
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-full  flex-col gap-2">
                                    <div class="flex items-center gap-3">
                                        <p class="font-medium text-xs md:text-sm ">Tire and Rim</p>
                                    </div>
                                    <div
                                        class="flex flex-col h-full shadow-image-upload rounded-xl relative gap-4 bg-white items-center p-5 group">
                                        <img class="w-full h-full object-cover "
                                            :src="bucket + 'public/img/png/tireandrim.png'" alt="">
                                        <p v-if="!form?.previewFrontPhoto"
                                            class=" text-[8px] sm:text-[11px]  text-center   font-medium text-[#858585]">
                                            Example
                                            of Tire and Rim
                                            use JPG, PNG, or BMP file
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class=" font-Inter mb-2 text-sm sm:text-base font-semibold ">Interior Photos</p>
                            <div class=" grid grid-cols-2  md:grid-cols-3  px-2 gap-2 sm:gap-4 m-auto  lg:px-3  ">

                                <div class="flex w-full  flex-col gap-2">
                                    <div class="flex items-center gap-3">
                                        <p class="font-medium text-xs md:text-sm whitespace-pre ">Drivers D.
                                            (Odometer)</p>

                                    </div>
                                    <div
                                        class="flex flex-col h-full shadow-image-upload rounded-xl relative gap-4 bg-white items-center p-5 group">
                                        <img class="w-full h-full object-cover "
                                            :src="bucket + 'public/img/png/tacomentro.png'" alt="">
                                        <p v-if="!form?.previewFrontPhoto"
                                            class=" text-[8px] sm:text-[11px]  text-center   font-medium text-[#858585]">
                                            Example
                                            of Drivers Display (Odometer)
                                            use JPG, PNG, or BMP file
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-full  flex-col gap-2">
                                    <div class="flex items-center gap-3">
                                        <p class="font-medium text-xs md:text-sm ">Drivers Side</p>
                                    </div>
                                    <div
                                        class="flex flex-col h-full shadow-image-upload rounded-xl relative gap-4 bg-white items-center p-5 group">
                                        <img class="w-full h-full object-cover "
                                            :src="bucket + 'public/img/png/dentro.png'" alt="">
                                        <p v-if="!form?.previewFrontPhoto"
                                            class=" text-[8px] sm:text-[11px]  text-center   font-medium text-[#858585]">
                                            Example
                                            of Drivers Side
                                            use JPG, PNG, or BMP file
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-full  flex-col gap-2">
                                    <div class="flex items-center gap-3">
                                        <p class="font-medium text-xs md:text-sm ">Center Console</p>
                                    </div>
                                    <div
                                        class="flex flex-col h-full shadow-image-upload rounded-xl relative gap-4 bg-white items-center p-5 group">
                                        <img class="w-full h-full object-cover "
                                            :src="bucket + 'public/img/png/tavblero.png'" alt="">
                                        <p v-if="!form?.previewFrontPhoto"
                                            class=" text-[8px] sm:text-[11px]  text-center   font-medium text-[#858585]">
                                            Example
                                            of Center Console
                                            use JPG, PNG, or BMP file
                                        </p>
                                    </div>
                                </div>
                                <div class="flex w-full  flex-col gap-2">
                                    <div class="flex items-center gap-3">
                                        <p class="font-medium text-xs md:text-sm ">Rear Seats</p>
                                    </div>
                                    <div
                                        class="flex flex-col h-full shadow-image-upload rounded-xl relative gap-4 bg-white items-center p-5 group">
                                        <img class="w-full h-full object-cover "
                                            :src="bucket + 'public/img/png/asientosatras.png'" alt="">
                                        <p v-if="!form?.previewFrontPhoto"
                                            class=" text-[8px] sm:text-[11px]  text-center   font-medium text-[#858585]">
                                            Example
                                            of Rear Seats
                                            use JPG, PNG, or BMP file
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { ModalGuidePhotos } from '@/stores/modalGuidePhotos';
export default {
    setup(props) {
        const statusModalView = ModalGuidePhotos()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))

        return {
            statusModalView,
            bucket
        };
    },
};
</script>
