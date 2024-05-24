<template>
    <div :class="op.step1 ? 'md:h-screen' : 'h-fit'" class="bg-[#BDBDBF66] md:bg=[#F9F9F9] ">
        <div>
            <div class="absolute hidden md:block w-full h-[200px] overflow-hidden bg-[#0B1107]">
                <svg class="w-full " xmlns="http://www.w3.org/2000/svg" width="1768" height="260" viewBox="0 0 1768 260"
                    fill="none">
                    <path opacity="0.2"
                        d="M-244.713 -277.057L-486.999 758.702C-356.9 497.892 -38.9499 -s21.2623 192.061 -11.3982C480.824 0.931761 -164.304 688.32 75.2107 782.511C266.823 857.864 592.581 203.318 731.509 -133.374C687.698 197.671 645.281 866.416 826.098 893.029C1052.12 926.295 1064.94 -23.957 1219.25 -8.96303C1342.7 3.03212 1314.53 642.392 1285.01 960.573L1707.71 62.9291"
                        stroke="#272D35" stroke-width="132" />
                </svg>
            </div>
            <div class="relative max-w-[85rem] mx-auto z-50 lg:pt-[60px] ">
                <Heanding class="hidden lg:block" :type="'h3'" :msg="'Create Auctions'" />
                <div class="flex justify-center flex-col lg:flex-row lg:mt-5 md:gap-7 relative">
                    <div class="lg:w-2/4 w-full  ">
                        <div class="w-full   left-0 z-50 block lg:hidden ">
                            <div class="py-2 bg-white shadow-md">
                                <div class="flex items-center cursor-pointer  justify-between uppercase w-full text-sm px-4 py-2"
                                    @click="expanded = !expanded">
                                    <span class="text-[#666666] text-center">Complete our 3 step process</span>
                                    <svg class="transition-all ease-linear mb-1 duration-200 "
                                        :class="expanded ? 'rotate-90' : 'transition-all ease-linear duration-200 '"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M13.1717 12.0007L8.22168 7.05072L9.63568 5.63672L15.9997 12.0007L9.63568 18.3647L8.22168 16.9507L13.1717 12.0007Z"
                                            fill="#000" />
                                    </svg>
                                </div>
                                <div class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"
                                    :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
                                    <div class="overflow-hidden">
                                        <div class="p-5 pt-0">
                                            <div class=" flex justify-between  gap-[100px] mt-7 items-center">
                                                <div class="flex hr-custims-1 items-center gap-5 ">
                                                    <div v-if="op.step1 && !checkStep.step1"
                                                        class="flex justify-center bg-[#1F94F0] items-center w-8 h-8 text-white  rounded-full">
                                                        1
                                                    </div>
                                                    <div v-if="(checkStep.step1 && !op.step1) || (op.step1 && op.step2 && op.step3)"
                                                        class="flex justify-center items-center w-8 h-8 text-white bg-[#000] rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                            viewBox="0 0 22 22" fill="none">
                                                            <path
                                                                d="M9.22232 13.82L17.393 5.64844L18.6508 6.90533L9.22232 16.3338L3.56543 10.6769L4.82232 9.41999L9.22232 13.82Z"
                                                                fill="white" />
                                                        </svg>
                                                    </div>
                                                    <p>General Information</p>
                                                </div>
                                                <svg class=" absolute right-5 " xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M13.1717 12.0007L8.22168 7.05072L9.63568 5.63672L15.9997 12.0007L9.63568 18.3647L8.22168 16.9507L13.1717 12.0007Z"
                                                        fill="#858585" />
                                                </svg>
                                            </div>
                                            <div class=" flex justify-between gap-[100px] mt-7 items-center">
                                                <div class="flex items-center hr-custims-2 gap-5 ">
                                                    <div v-if="!checkStep.step2"
                                                        :class="op.step2 ? 'bg-[#1F94F0]' : 'bg-[#E0E0E0]'"
                                                        class="flex justify-center items-center w-8 h-8 text-white  rounded-full">
                                                        2
                                                    </div>
                                                    <div v-if="(checkStep.step2 && !op.step2) || (op.step1 && op.step2 && op.step3)"
                                                        class="flex justify-center items-center w-8 h-8 text-white bg-[#000] rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                            viewBox="0 0 22 22" fill="none">
                                                            <path
                                                                d="M9.22232 13.82L17.393 5.64844L18.6508 6.90533L9.22232 16.3338L3.56543 10.6769L4.82232 9.41999L9.22232 13.82Z"
                                                                fill="white" />
                                                        </svg>
                                                    </div>
                                                    <p
                                                        :class="op.step2 || checkStep.step2 ? 'text-[#000]' : 'text-[#E0E0E0]'">
                                                        Vehicles
                                                        Details</p>
                                                </div>
                                                <svg class=" absolute right-5 " xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M13.1717 12.0007L8.22168 7.05072L9.63568 5.63672L15.9997 12.0007L9.63568 18.3647L8.22168 16.9507L13.1717 12.0007Z"
                                                        fill="#858585" />
                                                </svg>
                                            </div>
                                            <div class=" flex justify-between gap-[100px] mt-7 items-center">
                                                <div class="flex items-center gap-5 ">
                                                    <div v-if="!checkStep.step3"
                                                        :class="op.step3 ? 'bg-[#1F94F0]' : 'bg-[#E0E0E0]'"
                                                        class="flex justify-center items-center w-8 h-8 text-white  rounded-full">
                                                        3
                                                    </div>
                                                    <div v-if="op.step1 && op.step2 && op.step3"
                                                        class="flex justify-center items-center w-8 h-8 text-white bg-[#000] rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                            viewBox="0 0 22 22" fill="none">
                                                            <path
                                                                d="M9.22232 13.82L17.393 5.64844L18.6508 6.90533L9.22232 16.3338L3.56543 10.6769L4.82232 9.41999L9.22232 13.82Z"
                                                                fill="white" />
                                                        </svg>
                                                    </div>
                                                    <p
                                                        :class="op.step3 || checkStep.step3 ? 'text-[#000]' : 'text-[#E0E0E0]'">
                                                        Upload
                                                        Photos
                                                    </p>
                                                </div>
                                                <svg class=" absolute right-5 " xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M13.1717 12.0007L8.22168 7.05072L9.63568 5.63672L15.9997 12.0007L9.63568 18.3647L8.22168 16.9507L13.1717 12.0007Z"
                                                        fill="#858585" />
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white hidden lg:block p-5 shadow-steps">
                            <p class="text-[#666] font-medium  text-lg uppercase ">COMPLETE OUR 3 STEP PROCESS</p>
                            <div class=" flex justify-between gap-[100px] mt-7 items-center">
                                <div class="flex hr-custim-1 items-center gap-5 ">
                                    <div v-if="op.step1 && !checkStep.step1"
                                        class="flex justify-center bg-[#1F94F0] items-center w-10 h-10 text-white  rounded-full">
                                        1
                                    </div>
                                    <div v-if="(checkStep.step1 && !op.step1) || (op.step1 && op.step2 && op.step3)"
                                        class="flex justify-center items-center w-10 h-10 text-white bg-[#000] rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path
                                                d="M9.22232 13.82L17.393 5.64844L18.6508 6.90533L9.22232 16.3338L3.56543 10.6769L4.82232 9.41999L9.22232 13.82Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <p>General Information</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M13.1717 12.0007L8.22168 7.05072L9.63568 5.63672L15.9997 12.0007L9.63568 18.3647L8.22168 16.9507L13.1717 12.0007Z"
                                        fill="#858585" />
                                </svg>
                            </div>
                            <div class=" flex justify-between gap-[100px] mt-7 items-center">
                                <div class="flex items-center hr-custim-2 gap-5 ">
                                    <div v-if="!checkStep.step2" :class="op.step2 ? 'bg-[#1F94F0]' : 'bg-[#E0E0E0]'"
                                        class="flex justify-center items-center w-10 h-10 text-white  rounded-full">
                                        2
                                    </div>
                                    <div v-if="(checkStep.step2 && !op.step2) || (op.step1 && op.step2 && op.step3)"
                                        class="flex justify-center items-center w-10 h-10 text-white bg-[#000] rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path
                                                d="M9.22232 13.82L17.393 5.64844L18.6508 6.90533L9.22232 16.3338L3.56543 10.6769L4.82232 9.41999L9.22232 13.82Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <p :class="op.step2 || checkStep.step2 ? 'text-[#000]' : 'text-[#E0E0E0]'">Vehicles
                                        Details</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M13.1717 12.0007L8.22168 7.05072L9.63568 5.63672L15.9997 12.0007L9.63568 18.3647L8.22168 16.9507L13.1717 12.0007Z"
                                        fill="#858585" />
                                </svg>
                            </div>
                            <div class=" flex justify-between gap-[100px] mt-7 items-center">
                                <div class="flex items-center hr-custim-2 gap-5 ">
                                    <div v-if="!checkStep.step3" :class="op.step3 ? 'bg-[#1F94F0]' : 'bg-[#E0E0E0]'"
                                        class="flex justify-center items-center w-10 h-10 text-white  rounded-full">
                                        3
                                    </div>
                                    <div v-if="op.step1 && op.step2 && op.step3"
                                        class="flex justify-center items-center w-10 h-10 text-white bg-[#000] rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path
                                                d="M9.22232 13.82L17.393 5.64844L18.6508 6.90533L9.22232 16.3338L3.56543 10.6769L4.82232 9.41999L9.22232 13.82Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <p :class="op.step3 || checkStep.step3 ? 'text-[#000]' : 'text-[#E0E0E0]'">Upload
                                        Photos
                                    </p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M13.1717 12.0007L8.22168 7.05072L9.63568 5.63672L15.9997 12.0007L9.63568 18.3647L8.22168 16.9507L13.1717 12.0007Z"
                                        fill="#858585" />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div class="w-full">
                        <template v-if="loading || loadingUploadImages">
                            <div v-if="loading"
                                class="bg-white h-[calc(100vh_-_108px)] md:h-[50vh] flex flex-col md:mb-7 gap-5 items-start md:shadow-steps md:p-5 w-full">
                                <div class="w-full h-full flex justify-center items-center">
                                    <div class="text-indigo-700">
                                        <div class="h-12 w-12 md:h-[80px] md:w-[80px] ">
                                            <div class="animate-bounce">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin"
                                                    fill="#c1f861" stroke="#fff" stroke-width="0" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <p class=" text-base-gray text-xs md:text-base mt-3 font-medium md:pl-2 ">
                                                Loading...</p>
                                            <p class=" text-error text-xs md:text-base mt-3 font-medium md:pl-2 "
                                                v-if="stateProgressUpload">{{ stateProgressUpload }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else
                                class="bg-white h-fit flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
                                <template v-if="arrayUpload?.length > 0">
                                    <div class="flex gap-6">
                                        <!--  <img :src="bucket + 'public/svg/uploadPhotos.svg'" alt=""> -->
                                        <div class="flex flex-col ">
                                            <p class="text-[13px] font-Nohemi md:text-xl "> Uploading
                                                <strong>{{
        arrayUpload?.length }}</strong> of <strong>{{ formData.images.length
                                                    }}
                                                </strong>
                                            </p>
                                            <p class=" text-[10px] font-Nohemi md:text-base">This may take a few
                                                minutes.</p>
                                        </div>
                                    </div>
                                    <div
                                        class="grid  grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 px-3 scroll-custom w-full m-auto py-6 gap-6 h-fit overflow-hidden ">
                                        <div class="flex w-full flex-col items-center "
                                            v-for="(image, index) in arrayUpload">
                                            <div class="animate-fade-up  w-full animate-ease-in-out "
                                                :class="`animate-delay-${index}00 animate-duration-${(index) + 1}000`">
                                                <div
                                                    class="relative w-full flex justify-end group  transition-all ease-out duration-300">
                                                    <div class="relative  w-full ">
                                                        <p :class="image?.format == 'video' ? 'bg-[#1f94f0] text-white ' : 'bg-primary text-base-black '"
                                                            class="absolute z-50 font-bold py-1 px-3 top-2 uppercase left-2 text-[8px] rounded-lg ">
                                                            {{ image?.format }}
                                                        </p>
                                                        <video v-if="image?.format == 'video'" poster
                                                            :src="image.preview"
                                                            class="object-cover shadow-image-upload w-full h-[150px] rounded-lg mb-4   "></video>
                                                        <img v-else
                                                            class="object-cover shadow-image-upload w-full h-[150px] rounded-lg mb-4   "
                                                            :src="image.preview" />
                                                    </div>
                                                </div>

                                                <div class="flex gap-1 flex-col">
                                                    <p class="text-xs font-medium truncate w-[120px]">Name:
                                                        {{ image.name }}
                                                    </p>
                                                    <p class="text-xs font-medium truncate">Type:
                                                        <span
                                                            class="uppercase bg-[#6d53b0] text-white shadow-lg font-semibold ml-2 px-2 py-1 text-[8px] rounded-md ">
                                                            {{ image?.type }}
                                                        </span>
                                                    </p>
                                                    <p class="text-xs font-medium mb-2 truncate">Size:
                                                        <span
                                                            class="uppercase bg-[#6d53b0] text-white shadow-lg font-semibold ml-3 px-2 py-1 text-[10px] rounded-md ">
                                                            {{ image?.size }} Mb
                                                        </span>
                                                    </p>
                                                </div>
                                                <div v-if="!image.completed" class="w-full flex flex-col md:gap-2">

                                                    <div
                                                        class="bg-[#E5E5E5] whitespace-pre shadow-sm w-full rounded-full  h-4">
                                                        <div :style="{ width: porcertanje + '%' }"
                                                            class=" h-4 bg-primary flex justify-center items-center rounded-full shadow-progreess ">
                                                            <p class="text-[10px] ">{{ porcertanje }} %</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else-if="index == arrayUpload.length - 1"
                                                    class="w-full flex flex-col md:gap-2">

                                                    <div class="bg-[#E5E5E5] rounded-full  shadow-xl h-4">
                                                        <div
                                                            class=" w-full h-4 bg-primary flex justify-center items-center rounded-full">
                                                            <p class="text-[10px]">Completed</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else class="w-full flex flex-col md:gap-2">

                                                    <div class="bg-[#E5E5E5] rounded-full  shadow-xl h-4">
                                                        <div
                                                            class=" w-full h-4 bg-primary flex justify-center items-center rounded-full">
                                                            <p class="text-[10px]">Completed</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-center w-full items-center">
                                        <img class="h-16 w-16" src="@/assets/svg/Spin.svg" alt="">
                                        <p class=" text-base-gray mt-1 text-xs md:text-base font-medium">Uploading...
                                        </p>
                                    </div>
                                </template>

                            </div>
                            <!--  <template v-if="loadingUploadImages">
                                <div
                                    class="bg-white h-fit flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
                                    <div class="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
                                        <div v-if="arrayUpload?.length > 0" v-for="(nameUpload, index) in arrayUpload"
                                            :key="index">
                                            <div
                                                class="flex justify-between border-b border-[#e5e5e5] pb-3 items-start gap-4 w-full">
                                                <div v-if="nameUpload.preview" class="w-16">
                                                    <img class="w-15 object-cover h-15 rounded-lg shadow-lg"
                                                        :src="nameUpload.preview" alt="">
                                                </div>
                                                <div v-if="!nameUpload.completed" class="w-full flex flex-col md:gap-2">
                                                    <p class="capitalize text-sm md:text-base">{{ nameUpload.name }}</p>
                                                    <div
                                                        class="bg-[#E5E5E5] whitespace-pre shadow-sm w-full rounded-full  h-4">
                                                        <div :style="{ width: porcertanje + '%' }"
                                                            class=" h-4 bg-primary flex justify-center items-center rounded-full shadow-progreess ">
                                                            <p class="text-[10px] ">{{ porcertanje }} %</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else-if="index == arrayUpload.length - 1"
                                                    class="w-full flex flex-col md:gap-2">
                                                    <p class="capitalize text-sm md:text-base">{{ nameUpload.name }}</p>
                                                    <div class="bg-[#E5E5E5] rounded-full  shadow-xl h-4">
                                                        <div
                                                            class=" w-full h-4 bg-primary flex justify-center items-center rounded-full">
                                                            <p class="text-[10px]">Completed</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else class="w-full flex flex-col md:gap-2">
                                                    <p class="capitalize text-sm md:text-base">{{ nameUpload.name }}</p>
                                                    <div class="bg-[#E5E5E5] rounded-full  shadow-xl h-4">
                                                        <div
                                                            class=" w-full h-4 bg-primary flex justify-center items-center rounded-full">
                                                            <p class="text-[10px]">Completed</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-center w-full items-center">
                                        <img class="h-16 w-16" src="@/assets/svg/Spin.svg" alt="">
                                        <p class=" text-base-gray mt-1 text-xs md:text-base font-medium">Uploading...
                                        </p>
                                    </div>
                                </div>
                            </template> -->
                        </template>

                        <template v-else>
                            <GeneralInformation v-if="op.step1" :key="componentKey"
                                :nextGeneralInformation="nextGeneralInformation" :form="formData" :op="op"
                                :checkStep="checkStep" :launch="launch" :invalid="invalid"
                                :loadingCountrys="loadingCountrys" :onChangeGetProvince="onChangeGetProvince"
                                :onChangeGetCity="onChangeGetCity" />
                            <VehiclesDetails v-if="op.step2" :key="componentKey" :saveData="saveData"
                                :nextVehiclesDetails="nextVehiclesDetails" :form="formData" :op="op"
                                :checkStep="checkStep" :launch="launch" :invalid="invalid" :idCreate="id_create" />
                            <UploadPhotos v-if="op.step3" :key="componentKey" :nextUploadPhotos="nextUploadPhotos"
                                :form="formData" :op="op" :checkStep="checkStep" :launch="launch" :saveData="saveData"
                                :invalid="invalid" />

                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, watch, computed, onMounted } from "vue";
import Heanding from "../../../../components/Headings/Heanding.vue";
import GeneralInformation from "./steps/GeneralInformation.vue"
import VehiclesDetails from "./steps/VehiclesDetails.vue";
import UploadPhotos from "./steps/UploadPhotos.vue";
import { validateData } from '../../../../validations/validationCreateAutions'
import { toast } from "vue3-toastify";
import { useAuctionStore } from "@/stores/auctions";
import { useStoreFile } from "@/stores/uploader";
import { useRouter, useRoute } from 'vue-router'
import { ModalLaunch } from '@/stores/modalLaunch';
import { usePayments } from "@/stores/payments";
import { useAuthStore } from "@/stores/auth";
import moment from 'moment';
export default {

    components: {
        Heanding,
        GeneralInformation,
        VehiclesDetails,
        UploadPhotos,
    },
    setup() {
        const auctionList = ref(true)
        const invalid = ref();
        const launch = ref(false)
        const componentKey = ref(0)
        const loading = ref(false)
        const loadingUploadImages = ref(false)
        const store = useAuctionStore()
        const id_create = ref(null)
        const auth = useAuthStore()
        const storeFile = useStoreFile()
        const route = useRoute();
        const statusLauch = ModalLaunch()
        const isOpen = ref(true)
        const router = useRouter()
        const expanded = ref(false)
        const stateProgressUpload = ref('')
        const porcertanje = ref(0)
        const countrys = usePayments()
        const powerValue = ref(computed(() => { return storeFile.progressUpload }))
        const arrayUpload = ref([])
        const loadingCountrys = ref(false)
        const modalErrorCreate = ref(false)
        watch(powerValue, async (newQuestion, oldQuestion) => {
            porcertanje.value = newQuestion
        })
        const espandex = () => {
            expanded.value = !expanded.value
        }
        const formData = ref({
            numberVinGenerals: undefined,
            date: undefined,
            startDate: undefined,
            province: '',
            getState: undefined,
            getCities: undefined,
            city: '',
            saveCity: undefined,
            saveProvince: undefined,
            keys: 'Select number of keys',
            currently: undefined,
            buyoutVehicle: undefined,
            newVehicle: undefined,
            numberVin: undefined,
            year: undefined,
            make: undefined,
            model: undefined,
            trim: undefined,
            bodyType: undefined,
            cylinder: undefined,
            transmission: undefined,
            odometer: undefined,
            doors: 'Select Doors',
            color: undefined,
            customColor: undefined,
            driveTrain: undefined,
            additionalPackages: undefined,
            tireCondition: undefined,
            lastReplacement: undefined,
            brakePads: undefined,
            lastReplacement2: undefined,
            rotorCondition: undefined,
            lastReplacement3: undefined,
            document: undefined,
            previewDocument: undefined,
            driverDocument: undefined,
            previewDriver: undefined,
            frontPhoto: undefined,
            previewFrontPhoto: undefined,
            front: undefined,
            previewFront: undefined,
            driverSide: undefined,
            previewDriverSide: undefined,
            back: undefined,
            previewBack: undefined,
            passengerSide: undefined,
            previewPassengerSide: undefined,
            tireAndRim: undefined,
            previewTireAndRim: undefined,
            driversDisplay: undefined,
            previewDriversDisplay: undefined,
            driversSide: undefined,
            previewDriversSide: undefined,
            centerConsole: undefined,
            previewCenterConsole: undefined,
            rearSeats: undefined,
            previewRearSeats: undefined,
            vehicleDamage: undefined,
            previewVehicleDamage: undefined,
            additionalDocuments: undefined,
            previewAdditionalDocuments: undefined,
            vehicleVideo: undefined,
            previewVehicleVideo: undefined,
            leasingFinancing: undefined,

            financingCompany: undefined,
            manyPayments: undefined,
            remainingPayments: undefined,
            yourVehicleAmount: undefined,
            anyVehicle: undefined,
            makePreferences: undefined,
            modelPreferences: undefined,
            modelFromPreferences: undefined,
            modelToPreferences: undefined,
            yearFromPreferences: undefined,
            yearToPreferences: undefined,
            //Campos de la modal
            modalLaunchAuction: false,
            launchOptions: undefined,

            //AfterVerifield
            //Date & Time
            auctionDate: new Date(),
            auctionTime: undefined,
            auctionDuration: undefined,
            //(Weekend)
            daySaturday: '19.00 PM',
            dayMonday: 'Select time',
            repairs: undefined,
            //NEW UPLOAD IMAGES
            images: [],



        })
        const counterUpload = ref(1)
        const op = ref({
            step1: true,
            step2: false,
            step3: false,
        })
        const checkStep = ref({
            step1: false,
            step2: false,
            step3: false,
        })
        const nextGeneralInformation = async () => {
            componentKey.value += 1
            invalid.value = validateData(formData.value, 'generalInformation');
            if (Object.entries(invalid.value).length > 0) {
                toast(
                    invalid?.value?.numberVinGenerals ||
                    invalid?.value?.date ||
                    invalid?.value?.province ||
                    invalid?.value?.city ||
                    invalid?.value?.keys ||
                    invalid?.value?.currently
                    , { type: "error" });
                return
            }
            if (Object.entries(invalid.value).length === 0) {
                /*  formData.value.saveCity = JSON.parse(formData.value.city)
                 formData.value.saveProvince = JSON.parse(formData.value.province) */
                let dataPost = {
                    vin: formData.value.numberVinGenerals,
                    dropOffDate: formData.value.date,
                    city: formData.value.city,
                    province: formData.value.province,
                    keysNumber: formData.value.keys,
                    vehicleStatus: {
                        status: formData.value.currently,
                        financingCompany: formData.value.financingCompany,
                        remainingPayments: formData.value.remainingPayments,
                    },
                    buyout: formData.value.yourVehicleAmount,
                    buyNew: {
                        anyVehicle: formData.value.anyVehicle == 'Yes' ? true : false,
                        make: formData.value.makePreferences,
                        model: formData.value.modelPreferences,
                        mileageStart: formData.value.modelFromPreferences,
                        mileageEnd: formData.value.modelToPreferences,
                        yearStart: formData.value.yearFromPreferences,
                        yearEnd: formData.value.yearToPreferences
                    }
                }
                console.log('dataPost', dataPost)
                loading.value = true
                try {

                    let res = await store.create(dataPost)
                    console.log('nextGeneralInformation', res)
                    if (res) {
                        id_create.value = res.data._id;
                        formData.value.numberVin = res.data.vin;
                        formData.value.make = res.data.vehicleDetails.make;
                        formData.value.model = res.data.vehicleDetails.model;
                        formData.value.doors = res.data.vehicleDetails.doors ? `${res.data.vehicleDetails.doors} Doors` : undefined;
                        formData.value.trim = res.data.vehicleDetails.trim;
                        formData.value.year = res.data.vehicleDetails.year;
                        formData.value.driveTrain = res.data.vehicleDetails.driveTrain;
                        formData.value.bodyType = res.data.vehicleDetails.bodyType;
                        formData.value.cylinder = res.data.vehicleDetails.cylinder;
                        formData.value.transmission = res.data.vehicleDetails.transmission;
                        op.value.step1 = false
                        op.value.step2 = true
                        op.value.step3 = false
                        checkStep.value.step1 = true
                        checkStep.value.step2 = false
                        checkStep.value.step3 = false
                        loading.value = false

                    }
                } catch (error) {
                    toast(error.response.data.message, { type: "error", position: "top-center", theme: "colored", });
                    loading.value = false
                }
            }

        }
        const nextVehiclesDetails = async () => {
            componentKey.value += 1
            invalid.value = validateData(formData.value, 'vehiclesDetails');
            if (Object.entries(invalid.value).length > 0) {

                toast(
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
                    , {
                        type: "error",

                    });
                return
            }
            if (Object.entries(invalid.value).length === 0) {
                if (formData.value.color !== 'other') {
                    formData.value.customColor = undefined
                } else {
                    formData.value.color = formData.value.customColor
                }
                /*   formData.value.saveCity = JSON.parse(formData.value.city)
                  formData.value.saveProvince = JSON.parse(formData.value.province) */
                let dataPost = {
                    vin: formData.value.numberVinGenerals,
                    dropOffDate: formData.value.date,
                    city: formData.value.city,
                    province: formData.value.province,
                    keysNumber: formData.value.keys,
                    vehicleStatus: {
                        status: formData.value.currently,
                        financingCompany: formData.value.financingCompany,
                        remainingPayments: formData.value.remainingPayments,
                    },
                    buyout: formData.value.yourVehicleAmount,
                    buyNew: {
                        anyVehicle: formData.value.anyVehicle == 'Yes' ? true : false,
                        make: formData.value.makePreferences,
                        model: formData.value.modelPreferences,
                        mileageStart: formData.value.modelFromPreferences,
                        mileageEnd: formData.value.modelToPreferences,
                        yearStart: formData.value.yearFromPreferences,
                        yearEnd: formData.value.yearToPreferences
                    },
                    startDate: null,
                    duration: formData.value.auctionDuration,
                    vehicleDetails: {
                        odometer: formData.value.odometer,
                        doors: formData.value.doors,
                        color: formData.value.color,
                        driveTrain: formData.value.driveTrain,
                        aditionals: formData.value.additionalPackages,
                        tireCondition: formData.value.tireCondition,
                        tireReplacement: formData.value.lastReplacement,
                        brakeCondition: formData.value.brakePads,
                        brakeReplacement: formData.value.lastReplacement2,
                        repairs: formData.value.repairs,
                    }
                }
                loading.value = true
                try {
                    let res = await store.update({ uuid: id_create.value, payload: dataPost })

                    if (res.data.status == 401) {
                        toast(res.data.message || 'Error', {
                            type: "error",
                        });
                        loading.value = false
                    } else {
                        op.value.step1 = false
                        op.value.step2 = false
                        op.value.step3 = true
                        checkStep.value.step1 = true
                        checkStep.value.step2 = true
                        checkStep.value.step3 = false
                        loading.value = false
                    }
                } catch (error) {
                    loading.value = false
                    toast(error.response.data.message || 'An error has occurred try again', { type: "error" });

                }

            }
        }
        const nextUploadPhotos = async () => {

            console.log('IMAGENES', formData.value.images)
            componentKey.value += 1
            invalid.value = validateData(formData.value, 'UploadPhotos');
            console.log('invalid.value', invalid.value)
            if (Object.entries(invalid.value).length > 0) {
                toast(
                    invalid?.value?.images ||
                    invalid?.value?.document ||
                    invalid?.value?.driverDocument ||
                    invalid?.value?.frontPhoto ||
                    invalid?.value?.front ||
                    invalid?.value?.driverSide ||
                    invalid?.value?.back ||
                    invalid?.value?.passengerSide ||
                    invalid?.value?.tireAndRim ||
                    invalid?.value?.driversDisplay ||
                    invalid?.value?.driversSide ||
                    invalid?.value?.centerConsole ||
                    invalid?.value?.rearSeats, {
                    type: "error",
                });
                return
            }
            if (Object.entries(invalid.value).length === 0) {
                loading.value = true
                setTimeout(() => {
                    op.value.step1 = true
                    op.value.step2 = true
                    op.value.step3 = true
                    checkStep.value.step1 = true
                    checkStep.value.step2 = true
                    checkStep.value.step3 = true
                    launch.value = true
                    loading.value = false
                }, 2000);
            }
        }
        function getDateAndMinutes(hours) {
            var days = {
                monday: 1,
                tuesday: 2,
                wednesday: 3,
                thursday: 4,
                friday: 5,
                saturday: 6,
                sunday: 0
            };
            if (typeof hours !== 'number' || hours < 0 || hours > 24) {
                return new Error(hours + " is not a valid hour");
            }
            var currDate = new Date(new Date().setHours(19, 0, 0));
            var dayMillDiff = 0;
            var dayInMill = 1000 * 60 * 60 * 24;
            while (currDate.getDay() != 6 || dayMillDiff == 0) {
                dayMillDiff += dayInMill;
                currDate = new Date(currDate.getTime() + dayInMill);
            }
            var monday = new Date(currDate.getTime() + dayInMill * 2).setHours(hours);
            var diff = monday - currDate;

            return {
                startDate: currDate,
                monday: new Date(monday),
                duration: Math.floor(((monday - currDate) / 1000) / 60)
            };
        }
        function dateTomorrow(startHour, startMin = 0) {
            let date = new Date()
            if (!startHour) return date
            let day = 24 * 60 * 60 * 1000
            date.setHours(startHour, startMin, 0, 0)
            date.setTime(date.getTime() + day)
            return date
        }
        const postFile = async (string) => {
            try {
                let newArrayImages = []
                for (let index = 0; index < formData.value.images.length; index++) {
                    const element = formData.value.images[index];
                    console.log('element', element)
                    arrayUpload.value = [...arrayUpload.value, {
                        name: `file-${index}`,
                        preview: element.preview,
                        completed: false,
                        type: element?.type,
                        size: element.size,
                        format: element.format
                    }]
                    let resImages = await Promise.all([storeFile.uploaderFile({ file: element.file, location: `${id_create.value}/${element?.name}-${element?.type}-${element?.size}-${element?.format}` })])
                    newArrayImages.push(resImages[0].data)
                    if (resImages[0]?.data) {
                        arrayUpload.value.map((file) => {
                            console.log('file', file)
                            if (file.name == `file-${index}`) {

                                file.completed = true
                                counterUpload.value++
                            }
                        })
                    }
                }
                if (newArrayImages.length > 0) {
                    console.log('newArrayImages', newArrayImages)
                    try {
                        let resWeekend = getDateAndMinutes(+formData.value.dayMonday)
                        let hour = moment(`${formData.value.auctionTime}:${formData.value.auctionDuration}`, "H:mm").format('HH:mm:ss')
                        let date = moment(formData.value.auctionDate).format('YYYY-MM-DD');
                        let duration = null
                        let startDate = null
                        switch (formData.value?.launchOptions) {
                            case 'Launch now after verified':
                                duration = formData.value.auctionDuration
                                startDate = null
                                break;
                            case 'Choose the date & time':
                                duration = formData.value.auctionDuration
                                startDate = date + "T" + hour
                                break;
                            case 'Choose after hours (weekend)':
                                duration = resWeekend.duration
                                startDate = resWeekend.startDate
                                break;
                            case 'none':
                                console.log('entroaqui ')
                                let resStart = dateTomorrow(9)
                                duration = 480
                                startDate = resStart
                                break;
                            default:
                                break;
                        }
                        if (formData.value.color !== 'other') {
                            formData.value.customColor = undefined
                        } else {
                            formData.value.color = formData.value.customColor
                        }
                        let dataPost = {
                            vin: formData.value.numberVinGenerals,
                            dropOffDate: formData.value.date,
                            city: formData.value.city,
                            province: formData.value.province,
                            keysNumber: formData.value.keys,
                            vehicleStatus: {
                                status: formData.value.currently,
                                financingCompany: formData.value.financingCompany,
                                remainingPayments: formData.value.remainingPayments,
                            },
                            buyout: formData.value.yourVehicleAmount,
                            buyNew: {
                                anyVehicle: formData.value.anyVehicle == 'Yes' ? true : false,
                                make: formData.value.makePreferences,
                                model: formData.value.modelPreferences,
                                mileageStart: formData.value.modelFromPreferences,
                                mileageEnd: formData.value.modelToPreferences,
                                yearStart: formData.value.yearFromPreferences,
                                yearEnd: formData.value.yearToPreferences
                            },
                            startDate: string == 'draft' ? null : startDate,
                            duration: string == 'draft' ? null : Number(duration),
                            vehicleDetails: {
                                odometer: formData.value.odometer,
                                doors: formData.value.doors,
                                color: formData.value.color,
                                driveTrain: formData.value.driveTrain,
                                aditionals: formData.value.additionalPackages,
                                repairs: formData.value.repairs,
                                tireCondition: formData.value.tireCondition,
                                tireReplacement: formData.value.lastReplacement,
                                brakeCondition: formData.value.brakePads,
                                brakeReplacement: formData.value.lastReplacement2,
                                rotorCondition: formData.value.rotorCondition,
                                rotorReplacement: formData.value.lastReplacement3,
                                exteriorPhotos: newArrayImages,
                                interiorPhotos: [],
                                vehicleDamage: [],
                                additionalDocuments: [],
                                vehicleVideo: formData.value.vehicleVideo,

                            },
                        }
                        return dataPost
                    } catch (error) {
                        console.log('error', error)
                        loadingUploadImages.value = false
                        toast(error?.response?.data?.message || 'Your auction listing is incomplete, please answer all the questions and fill all out all the forms.', {
                            type: "error",
                        });

                    }
                }
            } catch (error) {
                console.log('error', error)
                loadingUploadImages.value = false
                toast(error?.response?.data?.message || 'Your auction listing is incomplete, please answer all the questions and fill all out all the forms.', {
                    type: "error",
                });
            }




        }
        const saveData = async (string) => {
            componentKey.value += 1
            invalid.value = validateData(formData.value, 'confirmation');
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
                    invalid?.value?.driveTrain ||
                    invalid?.value?.additionalPackages ||
                    invalid?.value?.tireCondition ||
                    invalid?.value?.lastReplacement ||
                    invalid?.value?.brakePads ||
                    invalid?.value?.lastReplacement2 ||
                    invalid?.value?.rotorCondition ||
                    invalid?.value?.lastReplacement3 ||
                    invalid?.value?.document ||
                    invalid?.value?.driverDocument ||
                    invalid?.value?.frontPhoto ||
                    invalid?.value?.front ||
                    invalid?.value?.driverSide ||
                    invalid?.value?.back ||
                    invalid?.value?.passengerSide ||
                    invalid?.value?.tireAndRim ||
                    invalid?.value?.driversDisplay ||
                    invalid?.value?.driversSide ||
                    invalid?.value?.centerConsole ||
                    invalid?.value?.rearSeats, {
                    type: "error",
                });
                return
            }
            if (Object.entries(invalid.value).length === 0) {
                loadingUploadImages.value = true
                let resFiles = await postFile(string)
                statusLauch.closeModal(false)
                if (resFiles) {
                    try {
                        let res = await store.update({ uuid: id_create.value, payload: resFiles })
                        if (res) {
                            let resDtaLate = await dataLayer.push({ 'event': 'LaunchAuction', 'formType': res.data /* Or other relevant information 'userId': 'USER_ID' If you track user IDs and it's compliant with our privacy policy*/ });
                            console.log('resDtaLate Create', resDtaLate)
                            await router.push({ path: '/all' })

                        }
                    } catch (error) {
                        loadingUploadImages.value = false
                        toast(error.response.data.message || 'An error has occurred try again', { type: "error" });

                    }
                }
            }
        }
        const getCountry = async () => {
            try {
                const res = await countrys.getCountry()
                console.log('resresresresresres', res)
                formData.value.getState = res.data
            } catch (error) {

            }
        }
        const onChangeGetProvince = async (event) => {
            formData.value.getCities = undefined
            let value = JSON.parse(event.target.value)
            loadingCountrys.value = true
            try {
                const res = await countrys.getCountryCities(value.iso2)
                formData.value.getCities = res.data
                console.log('getCountryCities', res)
            } catch (error) {
                loadingCountrys.value = false
            } finally {
                loadingCountrys.value = false
            }

        }
        const onChangeGetCity = async (event) => {
            let value = JSON.parse(event.target.value)
            /* formData.value.city = value.name */
            console.log('value', value)
        }
        onMounted(() => {
            getCountry()
            let twoDaysLater = new Date(new Date().getTime() + 2 * 86400 * 1000);
            console.log('twoDaysLater', twoDaysLater)
        })

        return {
            op,
            checkStep,
            formData,
            invalid,
            launch,
            saveData,
            nextGeneralInformation,
            nextVehiclesDetails,
            nextUploadPhotos,
            componentKey,
            loading,
            auctionList,
            isOpen,
            espandex,
            expanded,
            stateProgressUpload,
            porcertanje,
            arrayUpload,
            loadingUploadImages,
            onChangeGetProvince,
            onChangeGetCity,
            loadingCountrys,
            id_create,
            counterUpload
        };
    },
};
</script>