<template>
    <div class="bg-white flex flex-col md:mb-7 gap-5 items-start shadow-steps p-5 w-full">
        <div class="flex gap-6">
            <img :src="bucket + 'public/svg/uploadPhotos.svg'" alt="">
            <div class="flex flex-col ">
                <p class=" font-semibold text-[13px]   md:text-xl ">Upload Photos</p>
                <p class=" text-[10px] md:text-base">You can easily upload through your phone</p>
            </div>
        </div>
        <!-- <div>
            <p class="font-medium text-[14px] md:text-base">Original Documents</p>
            <p class="text-[10px] md:text-sm text-[#666666]">Such as ownership certificate, financing documents, etc.
            </p>
        </div>
        <div class="flex w-full md:max-w-[320px] relative  flex-col gap-5 group  ">
            <div v-if="form?.previewDocument"
                class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                <div @click="viewPhoto(form.previewDocument)"
                    class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12" fill="none">
                        <path
                            d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                            fill="#09121F" />
                    </svg>
                </div>
                <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                fill="#0B1107" />
                        </svg>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'document')" class="hidden">
                </label>
            </div>
            <div :class="[invalid?.document ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewDocument ? '!border-none shadow-lg !p-0 shado-yes-img' : '']"
                class="border w-[100%] md:w-[320px] flex flex-col gap-4 items-center py-2 md:p-5">
                <div class="w-full flex justify-center ">
                    <img v-if="form?.previewDocument" class="w-full h-[160px]  md:h-[190px] object-contain "
                        :src="form?.previewDocument" alt="">
                    <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                        :src="bucket + 'public/img/png/exampleDocuemnt.png'" alt="">
                </div>
                <p v-if="!form?.previewDocument"
                    class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of original
                    documents
                    photo <br> use JPG, PNG,
                    or BMP file</p>
            </div>
            <label v-if="!form?.previewDocument"
                class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                <div class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                        fill="none">
                        <path
                            d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                            fill="#1F94F0" />
                    </svg>
                    <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                        Select Image</p>
                </div>
                <input type="file" accept=".jpg, .jpeg,.png,.webp" @change="(event) => previewImage(event, 'document')"
                    class="hidden">
            </label>
        </div> -->
        <!-- div>
            <p class="font-medium text-[14px] md:text-base">Driver License</p>
        </div>
        <div class=" w-full md:max-w-[320px] relative  flex  flex-col gap-5 group">
            <div v-if="form?.previewDriver"
                class="w-full group-hover:bg-[#0000009f] group-hover:flex transition-all duration-500 ease-linear hidden justify-center items-center gap-4  absolute h-full top-0">
                <div @click="viewPhoto(form.previewDriver)"
                    class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12" fill="none">
                        <path
                            d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                            fill="#09121F" />
                    </svg>
                </div>
                <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                fill="#0B1107" />
                        </svg>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'driver')" class="hidden">
                </label>
            </div>
            <div :class="[invalid?.driverDocument ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewDriver ? '!border-none shadow-lg !p-0 shado-yes-img' : '']"
                class="border md:w-[320px]  flex flex-col gap-4 items-center  p-5">
                <div class="w-full flex justify-center">
                    <img class="w-full h-[160px]  md:h-[190px] object-contain " v-if="form?.previewDriver"
                        :src="form?.previewDriver" alt="">
                    <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                        :src="bucket + 'public/img/png/exampleLicencie.png'" alt="">
                </div>
                <p v-if="!form?.previewDriver"
                    class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of drive license
                    photo
                    <br> use JPG, PNG, or
                    BMP file
                </p>
            </div>
            <label v-if="!form?.previewDriver"
                class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                <div class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                        fill="none">
                        <path
                            d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                            fill="#1F94F0" />
                    </svg>
                    <p class="text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                        Select Image</p>
                </div>
                <input type="file" accept=".jpg, .jpeg,.png,.webp" @change="(event) => previewImage(event, 'driver')"
                    class="hidden">
            </label>
        </div> -->
        <!--  <div>
            <p class="font-medium text-[14px] md:text-base">Exterior Photos</p>
        </div>
        <div class="grid md:grid-cols-3 gap-5 w-full">
            <div class="flex max-w-xs flex-col gap-2">
                <div class="flex items-center gap-3">
                    <p class="font-medium text-xs md:text-sm ">3/4 Front Photo</p>
                    <p class="text-white text-xs  bg-[#05A54B]  px-2 md:py-1 md:px-3 rounded-xl ">Main Photo</p>
                </div>

                <div class="border flex flex-col relative gap-4 items-center p-5 group"
                    :class="[invalid?.frontPhoto ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewFrontPhoto ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">
                    <div v-if="form?.previewFrontPhoto"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewFrontPhoto)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'frontPhoto')" class="hidden">
                        </label>
                    </div>
                    <div>
                        <img class="w-full h-[160px]  md:h-[190px] object-contain " v-if="form?.previewFrontPhoto"
                            :src="form?.previewFrontPhoto" alt="">
                        <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                            :src="bucket + 'public/img/png/mainphoto.png'" alt="">
                    </div>
                    <p v-if="!form?.previewFrontPhoto"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of front
                        photo
                        use JPG, PNG, or BMP file
                    </p>
                </div>
                <label v-if="!form?.previewFrontPhoto"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'frontPhoto')" class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Front</p>
                <div class="border relative  flex flex-col gap-4 items-center group p-5"
                    :class="[invalid?.front ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewFront ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">
                    <div v-if="form?.previewFront"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewFront)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'front')" class="hidden">
                        </label>
                    </div>
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewFront"
                            :src="form?.previewFront" alt="">
                        <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                            :src="bucket + 'public/img/png/front.png'" alt="">
                    </div>
                    <p v-if="!form?.previewFront"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of front
                        photo use
                        JPG, PNG, or BMP file
                    </p>
                </div>
                <label v-if="!form?.previewFront"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp" @change="(event) => previewImage(event, 'front')"
                        class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Driver Side</p>
                <div class="border flex flex-col  gap-4 items-center p-5 relative group"
                    :class="[invalid?.driverSide ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewDriverSide ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">
                    <div v-if="form?.previewDriverSide"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewDriverSide)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'driverSide')" class="hidden">
                        </label>
                    </div>
                    <div>

                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewDriverSide"
                            :src="form?.previewDriverSide" alt="">
                        <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                            :src="bucket + 'public/img/png/driverside.png'" alt="">
                    </div>
                    <p v-if="!form?.previewDriverSide"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of front
                        photo
                        use JPG, PNG, or BMP file
                    </p>
                </div>
                <label v-if="!form?.previewDriverSide"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'driverSide')" class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Back</p>
                <div class="border flex flex-col gap-4 items-center group relative p-5"
                    :class="[invalid?.back ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewBack ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">
                    <div v-if="form?.previewBack"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewBack)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'back')" class="hidden">
                        </label>
                    </div>
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewBack"
                            :src="form?.previewBack" alt="">
                        <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                            :src="bucket + 'public/img/png/back.png'" alt="">
                    </div>
                    <p v-if="!form?.previewBack"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of back photo
                        use JPG, PNG, or BMP file
                    </p>
                </div>
                <label v-if="!form?.previewBack"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center p-3 tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp" @change="(event) => previewImage(event, 'back')"
                        class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Passenger Side</p>
                <div class="border flex flex-col gap-4 relative group items-center p-5"
                    :class="[invalid?.passengerSide ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewPassengerSide ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">

                    <div v-if="form?.previewPassengerSide"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewPassengerSide)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'passengerSide')" class="hidden">
                        </label>
                    </div>
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewPassengerSide"
                            :src="form?.previewPassengerSide" alt="">
                        <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                            :src="bucket + 'public/img/png/passenger.png'" alt="">
                    </div>
                    <p v-if="!form?.previewPassengerSide"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of passenger
                        side photo use JPG, PNG, or
                        BMP file</p>
                </div>
                <label v-if="!form?.previewPassengerSide"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'passengerSide')" class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Tire and Rim</p>
                <div class="border flex flex-col gap-4 items-center p-5 group relative"
                    :class="[invalid?.tireAndRim ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewTireAndRim ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">
                    <div v-if="form?.previewTireAndRim"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewTireAndRim)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'tireAndRim')" class="hidden">
                        </label>
                    </div>
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewTireAndRim"
                            :src="form?.previewTireAndRim" alt="">
                        <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                            :src="bucket + 'public/img/png/rin.png'" alt="">
                    </div>
                    <p v-if="!form?.previewTireAndRim"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of tire and
                        rim photo use JPG, PNG, or BMP
                        file</p>
                </div>
                <label v-if="!form?.previewTireAndRim"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'tireAndRim')" class="hidden">
                </label>
            </div>

        </div>
        <div>
            <p class="font-medium text-[14px] md:text-base">Interior Photos</p>
        </div>
        <div class="grid md:grid-cols-3 gap-5 w-full">
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Drivers Display (Odometer)</p>
                <div class="border flex flex-col gap-4 items-center p-5 group relative"
                    :class="[invalid?.driversDisplay ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewDriversDisplay ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">
                    <div v-if="form?.previewDriversDisplay"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewDriversDisplay)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'driversDisplay')" class="hidden">
                        </label>
                    </div>
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewDriversDisplay"
                            :src="form?.previewDriversDisplay" alt="">
                        <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                            :src="bucket + 'public/img/png/tacomentro.png'" alt="">
                    </div>
                    <p v-if="!form?.previewDriversDisplay"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of drivers
                        display photo use JPG, PNG, or
                        BMP file</p>
                </div>
                <label v-if="!form?.previewDriversDisplay"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'driversDisplay')" class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Drivers Side</p>
                <div class="border flex flex-col gap-4 items-center p-5 group relative"
                    :class="[invalid?.driversSide ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewDriversSide ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">
                    <div v-if="form?.previewDriversSide"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewDriversSide)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'driversSide')" class="hidden">
                        </label>
                    </div>
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewDriversSide"
                            :src="form?.previewDriversSide" alt="">
                        <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                            :src="bucket + 'public/img/png/dentro.png'" alt="">
                    </div>
                    <p v-if="!form?.previewDriversSide"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of drivers
                        side photo use JPG, PNG, or BMP
                        file</p>
                </div>
                <label v-if="!form?.previewDriversSide"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'driversSide')" class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Center Console</p>
                <div class="border flex flex-col gap-4 items-center group relative p-5"
                    :class="[invalid?.centerConsole ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewCenterConsole ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">
                    <div v-if="form?.previewCenterConsole"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewCenterConsole)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'centerConsole')" class="hidden">
                        </label>
                    </div>
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewCenterConsole"
                            :src="form?.previewCenterConsole" alt="">
                        <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                            :src="bucket + 'public/img/png/tavblero.png'" alt="">
                    </div>
                    <p v-if="!form?.previewCenterConsole"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of center
                        console photo use JPG, PNG, or
                        BMP file</p>
                </div>
                <label v-if="!form?.previewCenterConsole"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'centerConsole')" class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Rear Seats</p>
                <div class="border flex flex-col gap-4 items-center p-5 group relative"
                    :class="[invalid?.rearSeats ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewRearSeats ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">
                    <div v-if="form?.previewRearSeats"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewRearSeats)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'rearSeats')" class="hidden">
                        </label>
                    </div>
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewRearSeats"
                            :src="form?.previewRearSeats" alt="">
                        <img v-else class="w-full md:h-[190px] h-[90px] object-contain "
                            :src="bucket + 'public/img/png/asientosatras.png'" alt="">
                    </div>
                    <p v-if="!form?.previewRearSeats"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Example of drivers
                        display photo use JPG, PNG, or
                        BMP file</p>
                </div>
                <label v-if="!form?.previewRearSeats"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'rearSeats')" class="hidden">
                </label>
            </div>

        </div>
        <div>
            <p class="font-medium text-[14px] md:text-base">Other Documents</p>
        </div>
        <div class="grid md:grid-cols-3 gap-5 w-full">
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Upload Vehicle Damage</p>
                <p class="text-xs md:text-sm text-[#666666] ">Please upload damages on vehicle if applicable</p>
                <div class="border flex flex-col gap-4 group relative items-center p-5"
                    :class="[invalid?.vehicleDamage ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewVehicleDamage ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">
                    <div v-if="form?.previewVehicleDamage"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewVehicleDamage)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'vehicleDamage')" class="hidden">
                        </label>
                    </div>
                    <div>
                        <img class="w-full h-[190px]   object-contain " v-if="form?.previewVehicleDamage"
                            :src="form?.previewVehicleDamage" alt="">
                        <svg v-else class="w-[100px] h-[100px]"
                            :fill="invalid?.vehicleDamage ? '#ff000075' : '#6d6d6d42'"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                    </div>
                    <p v-if="!form?.previewVehicleDamage"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Use JPG, PNG or BMP
                        files</p>
                </div>
                <label v-if="!form?.previewVehicleDamage"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'vehicleDamage')" class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">Upload Additional Documents</p>
                <p class="text-xs md:text-sm text-[#666666] ">Please upload additional documents such as service records
                    if available
                </p>
                <div class="border flex flex-col gap-4 group relative items-center p-5"
                    :class="[invalid?.additionalDocuments ? 'border-[#ff000075]' : 'border-[#E0E0E0]', form?.previewAdditionalDocuments ? '!border-none shadow-lg !p-0 shado-yes-img' : '']">
                    <div v-if="form?.previewAdditionalDocuments"
                        class="w-full group-hover:bg-[#0000009f] group-hover:visible flex transition-all duration-200 ease-linear invisible justify-center items-center gap-4  absolute h-full top-0">
                        <div @click="viewPhoto(form.previewAdditionalDocuments)"
                            class="bg-white relative z-[100] cursor-pointer rounded-md p-4 flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 12"
                                fill="none">
                                <path
                                    d="M7.99978 0C11.5944 0 14.5851 2.58667 15.2124 6C14.5858 9.41333 11.5944 12 7.99978 12C4.40511 12 1.41444 9.41333 0.787109 6C1.41378 2.58667 4.40511 0 7.99978 0ZM7.99978 10.6667C9.35942 10.6664 10.6787 10.2045 11.7417 9.35678C12.8047 8.50901 13.5484 7.32552 13.8511 6C13.5473 4.67554 12.8031 3.49334 11.7402 2.64668C10.6773 1.80003 9.35865 1.33902 7.99978 1.33902C6.64091 1.33902 5.32224 1.80003 4.25936 2.64668C3.19648 3.49334 2.45229 4.67554 2.14844 6C2.45117 7.32552 3.19489 8.50901 4.25787 9.35678C5.32085 10.2045 6.64013 10.6664 7.99978 10.6667ZM7.99978 9C7.20413 9 6.44107 8.68393 5.87846 8.12132C5.31585 7.55871 4.99978 6.79565 4.99978 6C4.99978 5.20435 5.31585 4.44129 5.87846 3.87868C6.44107 3.31607 7.20413 3 7.99978 3C8.79543 3 9.55849 3.31607 10.1211 3.87868C10.6837 4.44129 10.9998 5.20435 10.9998 6C10.9998 6.79565 10.6837 7.55871 10.1211 8.12132C9.55849 8.68393 8.79543 9 7.99978 9ZM7.99978 7.66667C8.4418 7.66667 8.86573 7.49107 9.17829 7.17851C9.49085 6.86595 9.66644 6.44203 9.66644 6C9.66644 5.55797 9.49085 5.13405 9.17829 4.82149C8.86573 4.50893 8.4418 4.33333 7.99978 4.33333C7.55775 4.33333 7.13383 4.50893 6.82127 4.82149C6.5087 5.13405 6.33311 5.55797 6.33311 6C6.33311 6.44203 6.5087 6.86595 6.82127 7.17851C7.13383 7.49107 7.55775 7.66667 7.99978 7.66667Z"
                                    fill="#09121F" />
                            </svg>
                        </div>
                        <label class="flex flex-col bg-white items-center rounded-md p-[15px] cursor-pointer">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.4853 6.45739L9.54267 5.51472L3.33333 11.7241V12.6667H4.276L10.4853 6.45739ZM11.428 5.51472L12.3707 4.57206L11.428 3.62939L10.4853 4.57206L11.428 5.51472ZM4.828 14.0001H2V11.1714L10.9567 2.21472C11.0817 2.08974 11.2512 2.01953 11.428 2.01953C11.6048 2.01953 11.7743 2.08974 11.8993 2.21472L13.7853 4.10072C13.9103 4.22574 13.9805 4.39528 13.9805 4.57206C13.9805 4.74883 13.9103 4.91837 13.7853 5.04339L4.82867 14.0001H4.828Z"
                                        fill="#0B1107" />
                                </svg>
                            </div>
                            <input type="file" accept=".jpg, .jpeg,.png,.webp"
                                @change="(event) => previewImage(event, 'additionalDocuments')" class="hidden">
                        </label>
                    </div>
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
                    <p v-if="!form?.previewAdditionalDocuments"
                        class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Use JPG, PNG or BMP
                        files</p>
                </div>
                <label v-if="!form?.previewAdditionalDocuments"
                    class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16"
                            fill="none">
                            <path
                                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                                fill="#1F94F0" />
                        </svg>
                        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
                            Select Image</p>
                    </div>
                    <input type="file" accept=".jpg, .jpeg,.png,.webp"
                        @change="(event) => previewImage(event, 'additionalDocuments')" class="hidden">
                </label>
            </div>
            <div class="flex max-w-xs flex-col gap-2">
                <p class="font-medium text-sm ">360-Degree Vehicle Video</p>
                <p class="text-xs md:text-sm text-[#666666] ">Users tend to get more for their vehicle with a detailed
                    30 second video
                </p>
                <div class="border flex flex-col gap-4 items-center p-5"
                    :class="invalid?.vehicleVideo ? 'border-[#ff000075]' : 'border-[#E0E0E0]'">
                    <div class="relative">
                        <template v-if="form?.previewVehicleVideo">
                            <div v-if="!isPlaying" @click="play"
                                class="w-[40px] cursor-pointer z-50 h-[40px] top-[40%] left-[42%] rounded-full absolute flex justify-center items-center bg-[#ffffffd1]  ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.146 10.3468L7.31352 16.2351C7.25077 16.2769 7.17787 16.3008 7.10259 16.3044C7.02731 16.308 6.95246 16.2911 6.88601 16.2555C6.81957 16.22 6.76402 16.167 6.72528 16.1024C6.68654 16.0377 6.66605 15.9638 6.66602 15.8884V4.11176C6.66605 4.0364 6.68654 3.96245 6.72528 3.8978C6.76402 3.83315 6.81957 3.78022 6.88601 3.74465C6.95246 3.70907 7.02731 3.69219 7.10259 3.69579C7.17787 3.69939 7.25077 3.72334 7.31352 3.7651L16.146 9.65343C16.2031 9.69148 16.2499 9.74303 16.2822 9.80351C16.3146 9.86398 16.3315 9.93151 16.3315 10.0001C16.3315 10.0687 16.3146 10.1362 16.2822 10.1967C16.2499 10.2572 16.2031 10.3087 16.146 10.3468Z"
                                        fill="#05A54B" />
                                </svg>
                            </div>
                        </template>


<video v-if="form?.previewVehicleVideo" ref="videoPlayer" muted loop class="w-full h-[190px] object-contain"
    :src="form?.previewVehicleVideo" @click="paused" />
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
<p v-else class="text-[11px] text-center  md:text-[14px] font-medium text-[#858585]">Use MP4, MOV
    video up to 100mb</p>
</div>
<label class="flex flex-col border border-[#C2C2C2] border-dashed items-center  p-3  tracking-wide  cursor-pointer">
    <div class="flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class=" w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16" fill="none">
            <path
                d="M3.16634 12.6667H13.833V8H15.1663V13.3333C15.1663 13.5101 15.0961 13.6797 14.9711 13.8047C14.8461 13.9298 14.6765 14 14.4997 14H2.49967C2.32286 14 2.15329 13.9298 2.02827 13.8047C1.90325 13.6797 1.83301 13.5101 1.83301 13.3333V8H3.16634V12.6667ZM9.16634 6V10.6667H7.83301V6H4.49967L8.49967 2L12.4997 6H9.16634Z"
                fill="#1F94F0" />
        </svg>
        <p class=" text-[10px] md:text-[16px] font-medium leading-normal text-[#1F94F0]">Drag & Drop or
            Select Video</p>
    </div>
    <input type="file" accept="video/mp4, video/mov" @change="(event) => previewImage(event, 'vehicleVideo')"
        class="hidden">
</label>
</div>
</div> -->
        <div class="flex gap-6">
            <div class="flex flex-col ">

                <p class=" text-[10px] md:text-base">Upload up to 30 photos of your vehicle. Please be transparent with
                    photos
                    outlining damages, imperfections, & condition of the vehicle. Taking pictures of the tires tread,
                    rims &
                    brakes are recommended as well. These photos will be subject to approval, pictures may be removed or
                    reorganized in order to make your auction more appealing.</p>
                <p class=" text-[10px] md:text-base">Suggested Photo Recommendations. Pictures of:
                    <br>
                    <strong>- Odometer (mileage) </strong> <br>
                    <strong>- ⁠Tire & Rim Condition (Front and Rear) </strong> <br>
                    <strong>- ⁠Rotors (Front and Rear) </strong> <br>
                    <strong>- ⁠All angles of vehicle </strong> <br>
                    <strong>- ⁠Interior (Front and Rear) </strong> <br>
                    <strong>- ⁠Any Damages </strong>
                </p>
            </div>

        </div>
        <div class="flex flex-col justify-start  items-start ">
            <p class=" font-semibold text-[13px]   md:text-lg ">Please review the detailed vehicle image guide again.
            </p>
            <button
                class=" btn bg-transparent  border-[#E0E0E0] flex justify-center !py-1 mt-2 px-4 border rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 "
                @click="openModalGuide">Guide</button>
        </div>

        <template v-if="!loadingUploadImages">
            <p class=" font-semibold text-[13px]   md:text-xl ">Files: {{ form.images.length }}</p>
            <div v-if="form?.images?.length > 0"
                class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 lg:px-3  scroll-custom w-full m-auto pt-6 gap-6 h-fit   lg:max-h-[65vh] lg:overflow-y-auto overflow-x-hidden">

                <div class="flex w-full flex-col items-center " v-for="(image, index) in form.images">
                    <div class="animate-fade-up  w-full animate-ease-in-out "
                        :class="`animate-delay-${index}00 animate-duration-${(index) + 1}000`">
                        <div @click="viewPhoto(image)"
                            class="relative w-full flex justify-end group cursor-pointer transition-all ease-out duration-300">
                            <svg class=" absolute  z-50 w-6 mx-1 my-1 group-hover:-translate-y-4 group-hover-fill-[#fff] transition-all ease-out duration-300  "
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                                        stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path>
                                    <path
                                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        stroke="#fff" stroke-width="1.5"></path>
                                </g>
                            </svg>

                            <div class="relative  w-full ">
                                <p :class="image?.file?.type?.split('/')[0] == 'video' ? 'bg-[#1f94f0] text-white ' : 'bg-primary text-base-black '"
                                    class="absolute z-50 group-hover:-translate-y-4 group-hover-fill-[#fff] transition-all ease-out duration-300  font-bold py-1 px-3 top-2 uppercase left-2 text-[8px] rounded-lg ">
                                    {{ image?.file?.type?.split('/')[0] }}
                                </p>
                                <video v-if="image?.file?.type?.split('/')[0] == 'video'" poster :src="image.preview"
                                    class="object-cover shadow-image-upload w-full h-[150px] rounded-lg mb-4 group-hover:backdrop-blur  group-hover:-translate-y-4 transition-all ease-out duration-300  "></video>
                                <img v-else
                                    class="object-cover shadow-image-upload w-full h-[150px] rounded-lg mb-4 group-hover:backdrop-blur  group-hover:-translate-y-4 transition-all ease-out duration-300  "
                                    :src="image.preview" />
                            </div>
                        </div>

                        <div class="flex gap-1 flex-col">
                            <p class="text-xs font-medium truncate w-[120px]">Name: {{ image.file.name.split('.')[0] }}
                            </p>
                            <p class="text-xs font-medium truncate">Type: <span
                                    class="uppercase bg-[#6d53b0] text-white shadow-lg font-semibold ml-2 px-2 py-1 text-[8px] rounded-md ">{{
                image?.type }}
                                </span> </p>
                            <p class="text-xs font-medium mb-2 truncate">Size: <span
                                    class="uppercase bg-[#6d53b0] text-white shadow-lg font-semibold ml-3 px-2 py-1 text-[10px] rounded-md ">{{
                image?.size }} Mb
                                </span> </p>
                        </div>
                        <button
                            class=" bg-white flex group hover:bg-[#FF333E] hover:text-white transition-all ease-in duration-300 items-center gap-2 border-error py-1 px-4 font-normal text-sm border-2  rounded-lg w-fit"
                            @click="removeImage(index)">
                            <p>Remove image</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                    class="fill-[#FF333E] group-hover:fill-[#fff] transition-all ease-in duration-500 "
                                    d="M10.332 1.66732H13.6654V3.00065H12.332V13.0007C12.332 13.1775 12.2618 13.347 12.1368 13.4721C12.0117 13.5971 11.8422 13.6673 11.6654 13.6673H2.33203C2.15522 13.6673 1.98565 13.5971 1.86063 13.4721C1.7356 13.347 1.66536 13.1775 1.66536 13.0007V3.00065H0.332031V1.66732H3.66536V0.333984H10.332V1.66732ZM4.9987 5.00065V10.334H6.33203V5.00065H4.9987ZM7.66536 5.00065V10.334H8.9987V5.00065H7.66536Z" />
                            </svg>
                        </button>
                    </div>


                </div>

            </div>
        </template>
        <div v-if="form.images.length < 30" class="flex w-full items-center justify-start bg-grey-lighter">
            <label
                :class="[form.images.length > 4 ? 'px-2 flex-row-reverse justify-center gap-3 py-2' : 'px-4 py-6 flex-col', invalid?.images ? 'border-[#ff000075]' : 'border-base-black']"
                class="w-64 flex  items-center  bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border transition-all ease-out duration-300  cursor-pointer hover:bg-primary hover:text-white">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span :class="form.images.length > 4 ? 'mt-0 font-semibold text-sm' : 'mt-2 text-base font-Nohemi'"
                    class="  leading-normal">Select
                    a
                    file</span>
                <input type="file" class="hidden" multiple accept=".jpg, .jpeg,.png,.webp" @change="onFileChange">
            </label>
        </div>
        <div v-if="!save" class="flex justify-center items-center gap-2  ">
            <button @click="createAutions('draft')"
                class=" btn bg-transparent  border-[#E0E0E0] flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save as Draft
            </button>
            <button @click="next" id="step3"
                class=" btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-blackbg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Confirmation
            </button>

        </div>
        <div v-else class="flex justify-center items-center gap-5 ">
            <button @click="createAutions('draft')" id="saveDraft"
                class=" btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-blackbg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save as Draft
            </button>
            <button @click="modalLaunch('launch')" id="launchAuction"
                class=" btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-blackbg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Launch Auction
            </button>
        </div>
        <p class="text-xs md:text-sm text-[#666666]">If you leave the create auction process, this listing will be
            saved
            in your
            drafts for your convenience to continue later.</p>
        <ModalLaunchVue :form="form" :modalLaunch="createAutions" />
        <ModalImageCustomVue v-if="statusModalImage?.isActive" :form="form" />
        <ModalViewImageVue v-if="statusModalViewImage?.isActive" :form="form" />
        <ModalGuidePhotosVue v-if="statusModalGuide?.isActive" />
    </div>
</template>
<script>
import { ref, onMounted, computed, watch } from "vue";
import { toast } from "vue3-toastify";
import ModalLaunchVue from "../../../../../components/Modals/ModalLaunch/ModalLaunchVue.vue";
import ModalImageCustomVue from "../../../../../components/Modals/ModalImageCustom/ModalImageCustom.vue";
import ModalViewImageVue from "../../../../../components/Modals/ModalViewImage/ModalViewImage.vue";
import ModalGuidePhotosVue from "@/components/Modals/ModalGuidePhotos/ModalGuidePhotos.vue";
import { ModalLaunch } from '@/stores/modalLaunch';
import { ModalImageCustom } from '@/stores/modalImageCustom';
import { ModalViewImage } from '@/stores/modalViewImage';
import { ModalGuidePhotos } from '@/stores/modalGuidePhotos';
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
        ModalLaunchVue,
        ModalImageCustomVue,
        ModalViewImageVue,
        ModalGuidePhotosVue
    },
    setup(props) {

        const date = ref(new Date());
        const form = ref(props.form)
        const save = ref(props.launch)
        const invalid = ref(props.invalid)
        let videoPlayer = ref()
        let isPlaying = ref(false)
        const statusModal = ModalLaunch()
        const statusModalImage = ModalImageCustom()
        const statusModalGuide = ModalGuidePhotos()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const statusModalViewImage = ModalViewImage()
        const loadingUploadImages = ref(false)
        const toastStatus = ref(false)
        const play = () => {
            videoPlayer.value.play();
            isPlaying.value = true
        }
        const paused = () => {
            videoPlayer.value.pause();
            isPlaying.value = false
        }
        function isMobile() {
            const minWidth = 768; // Minimum width for desktop devices
            return window.innerWidth < minWidth || screen.width < minWidth;
        }
        const previewImage = (event, string) => {
            var input = event.target;
            let typeFile = input.files[0].type.split("/")
            if (typeFile[1] == 'jpg' || typeFile[1] == 'jpeg' || typeFile[1] == 'png' || typeFile[1] == 'webp') {
                console.log('typeFile', typeFile[1])
                let convertion = (input.files[0].size / (1024 * 1024)).toFixed(2);
                console.log('input', input)
                if (input.files) {
                    if (convertion > 100 && typeFile[0] == 'video') {
                        toast("The video exceeds 100mb", {
                            type: "error",
                        });
                    } else {
                        var reader = new FileReader();
                        reader.onload = (e) => {
                            if (typeFile[0] !== 'video') {
                                if (isMobile()) {
                                    console.log("Mobile device detected");
                                } else {
                                    statusModalImage.openModal({ active: true, img: input.files[0], type: string })
                                }

                            }
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
                }
            } else {
                toast("File not supported,allowed files (jpg, jpeg, png, webp)", {
                    type: "error",
                });
            }

        }
        const next = () => {
            props.nextUploadPhotos()
        }
        const modalLaunch = () => {
            statusModal.openModal(true)
        }
        const createAutions = (string) => {
            props.saveData(string)
        }
        const viewPhoto = (photo) => {
            console.log('photo', photo)
            statusModalViewImage.openModal({ active: true, img: photo })
        }
        const openModalGuide = () => {

            statusModalGuide.openModal({ isActive: true })
        }
        function removeImage(index) {
            form.value.images.splice(index, 1)
            console.log('imagenes', form.value.images)
        }
        function createImage(files) {
            for (var index = 0; index < files.length; index++) {
                let convertion = (files[index].size / (1024 * 1024)).toFixed(2);
                const imageUrl = {
                    preview: null,
                    file: files[index],
                    size: convertion,
                    format: files[index]?.type?.split('/')[0],
                    type: files[index]?.type?.split('/')[1],
                    name: files[index].name
                }
                var reader = new FileReader();
                reader.onload = function (event) {
                    imageUrl.preview = event.target.result;
                    if (form.value.images.length >= 30) {
                        toastStatus.value = true

                        return
                    } else {
                        toastStatus.value = false
                        console.log('HAY MENOS DE 30', form.value.images.length)
                        form.value.images.push(imageUrl);
                    }

                }
                reader.readAsDataURL(files[index]);
            }
        }
        const onFileChange = (e) => {
            console.log('e.target.files', e.target.files)
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            if (files.length >= 30) {
                toastStatus.value = true
                return
            }
            toastStatus.value = false
            createImage(files);


        }
        watch(toastStatus, async (newQuestion, oldQuestion) => {
            if (newQuestion) {
                toast('You can only upload a maximum of 30 files.', {
                    type: "error",
                });

            }
        })
        onMounted(() => {
            if (!save.value) {
                openModalGuide()
            }

        })
        return {
            date,
            form,
            next,
            previewImage,
            invalid,
            save,
            createAutions,
            play,
            paused,
            isPlaying,
            videoPlayer,
            modalLaunch,
            statusModalImage,
            viewPhoto,
            statusModalViewImage,
            bucket,
            loadingUploadImages,
            removeImage,
            createImage,
            onFileChange,
            statusModalGuide,
            openModalGuide

        };
    },
};
</script>