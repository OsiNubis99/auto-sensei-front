<template>
    <div class="bg=[#F9F9F9] h-screen">
        <div>
            <div class="absolute w-full h-[200px] overflow-hidden bg-[#0B1107]">
                <svg class="w-full " xmlns="http://www.w3.org/2000/svg" width="1768" height="260" viewBox="0 0 1768 260"
                    fill="none">
                    <path opacity="0.2"
                        d="M-244.713 -277.057L-486.999 758.702C-356.9 497.892 -38.9499 -21.2623 192.061 -11.3982C480.824 0.931761 -164.304 688.32 75.2107 782.511C266.823 857.864 592.581 203.318 731.509 -133.374C687.698 197.671 645.281 866.416 826.098 893.029C1052.12 926.295 1064.94 -23.957 1219.25 -8.96303C1342.7 3.03212 1314.53 642.392 1285.01 960.573L1707.71 62.9291"
                        stroke="#272D35" stroke-width="132" />
                </svg>
            </div>
            <div class="relative max-w-[85rem] mx-auto z-50 top-[60px] ">
                <Heanding :type="'h3'" :msg="'Create Auctions'" />
                <div class="flex justify-center mt-5 gap-7">
                    <div class="w-2/4  ">
                        <div class="bg-white p-5 shadow-steps">
                            <p class="text-[#666] font-medium  text-lg uppercase ">COMPLETE OUR 3 STEP PROCESS</p>
                            <div class=" flex justify-between gap-[100px] mt-7 items-center">
                                <div class="flex hr-custim-1 items-center gap-5 ">
                                    <div v-if="op.step1 && !checkStep.step1"
                                        class="flex justify-center bg-[#1F94F0] items-center w-10 h-10 text-white  rounded-full">
                                        1
                                    </div>
                                    <div v-if="(checkStep.step1 && !op.step1) || (op.step1 && op.step2 && op.step3)"
                                        class="flex justify-center items-center w-10 h-10 text-white bg-[#000] rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                            fill="none">
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                            fill="none">
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                            fill="none">
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
                        <div v-if="loading"
                            class="bg-white h-[50vh] flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
                            <div class="  w-full h-full flex justify-center items-center">
                                <div class="text-indigo-700">
                                    <div class="h-[80px] w-[80px] ">
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
                        <template v-else>
                            <GeneralInformation v-show="op.step1" :key="componentKey"
                                :nextGeneralInformation="nextGeneralInformation" :form="formData" :op="op"
                                :checkStep="checkStep" :launch="launch" :invalid="invalid" />
                            <VehiclesDetails v-show="op.step2" :key="componentKey"
                                :nextVehiclesDetails="nextVehiclesDetails" :form="formData" :op="op" :checkStep="checkStep"
                                :launch="launch" :invalid="invalid" />
                            <UploadPhotos v-show="op.step3" :key="componentKey" :nextUploadPhotos="nextUploadPhotos"
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
import { ref, onMounted } from "vue";
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
        const store = useAuctionStore()
        const id_create = ref(null)
        const storeFile = useStoreFile()
        const route = useRoute();
        const statusLauch = ModalLaunch()
        const isOpen = ref(true)
        const router = useRouter()
        const formData = ref({
            numberVinGenerals: undefined,
            date: undefined,
            startDate: undefined,
            province: 'Select province',
            city: 'Select city',
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
            doors: undefined,
            color: undefined,
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



        })
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
            console.log('formData.value', formData.value)
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
                    if (res) {
                        console.log('res.data', res.data)
                        id_create.value = res.data._id
                        formData.value.numberVin = res.data.vehicleDetails.vin
                        formData.value.make = res.data.vehicleDetails.make
                        formData.value.model = res.data.vehicleDetails.model
                        formData.value.trim = res.data.vehicleDetails.trim
                        formData.value.year = res.data.vehicleDetails.year
                        formData.value.bodyType = res.data.vehicleDetails.bodyType
                        formData.value.cylinder = res.data.vehicleDetails.cylinder
                        formData.value.transmission = res.data.vehicleDetails.transmission
                        op.value.step1 = false
                        op.value.step2 = true
                        op.value.step3 = false
                        checkStep.value.step1 = true
                        checkStep.value.step2 = false
                        checkStep.value.step3 = false
                        loading.value = false
                        console.log(' id_create.value', id_create.value)

                    }
                } catch (error) {
                    toast(error.response.data.message, { type: "error", position: "top-center", theme: "colored", });

                    id_create.value = undefined
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
                    }
                }
                console.log('VEHICULE DETAILS', dataPost)
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
                    console.log('hola')
                    id_create.value = undefined
                    loading.value = false
                    toast(error.response.data.message || 'An error has occurred try again', { type: "error" });

                }

            }
        }
        const nextUploadPhotos = async () => {
            componentKey.value += 1
            invalid.value = validateData(formData.value, 'UploadPhotos');
            if (Object.entries(invalid.value).length > 0) {
                toast(
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
        function getMinutesToStart(startDate) {
            return Math.floor(((startDate - new Date()) / 1000) / 60)
        }
        function getMinutesToEnd(startDate, duration) {
            return Math.floor(((new Date(startDate.getTime() + duration * 1000 * 60) - new Date()) / 1000) / 60)
        }

        const postFile = async (string) => {
            console.log('string', string)
            let newArrayExterior = []
            let newArrayInterior = []
            let newArrayVehicleDamage = []
            let newAdditionalDocuments = []
            let vehicleDamage = []
            let additionalDocuments = []
            let exterior = [
                {
                    file: formData.value.frontPhoto,
                    name: 'Front Photo'
                },
                {
                    file: formData.value.front,
                    name: 'Front'
                },
                {
                    file: formData.value.driverSide,
                    name: 'Driver Side (Exterior)'
                },
                {
                    file: formData.value.back,
                    name: 'Back'
                },
                {
                    file: formData.value.passengerSide,
                    name: 'Passenger Side'
                },
                {
                    file: formData.value.tireAndRim,
                    name: 'Tire and Rim'
                },
            ]
            let interior = [
                {
                    file: formData.value.driversDisplay,
                    name: 'Drivers Display (Odometer)'
                },
                {
                    file: formData.value.driverSide,
                    name: 'Drivers Side (Interior)'
                },
                {
                    file: formData.value.centerConsole,
                    name: 'Center Console'
                },
                {
                    file: formData.value.rearSeats,
                    name: 'Rear Seats'
                }
            ]
            if (formData.value.vehicleDamage) {
                vehicleDamage = [
                    {
                        file: formData.value.vehicleDamage,
                        name: 'Vehicle Damage'
                    }

                ]
            }

            if (formData.value.additionalDocuments) {
                additionalDocuments = [
                    {
                        file: formData.value.additionalDocuments,
                        name: 'Additional Documents'
                    }

                ]
            }
            let resOriginalDocument = await storeFile.uploaderFile({ file: formData.value.document, location: `${id_create.value}/Original Documents`})
            let resLicence = await storeFile.uploaderFile({ file: formData.value.driverDocument, location: `${id_create.value}/Driver License`})
            await Promise.all(
                exterior.map(async (photo, i) => {
                    let res = await storeFile.uploaderFile({ file: photo.file, location: `${id_create.value}/${photo.name}`})
                    newArrayExterior.push(res.data);
                })
            )
            await Promise.all(
                interior.map(async (photo, i) => {
                    let res = await storeFile.uploaderFile({ file: photo.file, location: `${id_create.value}/${photo.name}`})
                    newArrayInterior.push(res.data);
                })
            )
            vehicleDamage.length > 0 && await Promise.all(
                vehicleDamage.map(async (photo, i) => {
                    let res = await storeFile.uploaderFile({ file: photo.file, location: `${id_create.value}/${photo.name}`})
                    newArrayVehicleDamage.push(res.data);
                })
            )
            additionalDocuments.length > 0 && await Promise.all(
                additionalDocuments.map(async (photo, i) => {
                    let res = await storeFile.uploaderFile({ file: photo.file, location: `${id_create.value}/${photo.name}`})
                    newAdditionalDocuments.push(res.data);
                })
            );
            let resWeekend = getDateAndMinutes(+formData.value.dayMonday)
            let hour = moment(`${formData.value.auctionTime}:${formData.value.auctionDuration}`, "H:mm").format('HH:mm:ss')
            let date = moment(formData.value.auctionDate).format('YYYY-MM-DD');
            let duration = null
            let startDate = null

            switch (formData.value?.launchOptions) {
                case 'Launch now after verified':
                    duration = formData.value.auctionDuration
                    startDate = null
                    console.log('duration', duration)
                    console.log('startDate', startDate)
                    break;
                case 'Choose the date & time':
                    duration = formData.value.auctionDuration
                    startDate = date + "T" + hour
                    console.log('duration', duration)
                    console.log('startDate', startDate)
                    break;
                case 'Choose after hours (weekend)':
                    duration = resWeekend.duration
                    startDate = resWeekend.startDate
                    console.log('duration', duration)
                    console.log('startDate', startDate)
                    break;
                default:
                    break;
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
                    tireCondition: formData.value.tireCondition,
                    tireReplacement: formData.value.lastReplacement,
                    brakeCondition: formData.value.brakePads,
                    brakeReplacement: formData.value.lastReplacement2,
                    rotorCondition: formData.value.rotorCondition,
                    rotorReplacement: formData.value.lastReplacement3,
                    originalDocument: resOriginalDocument?.data,
                    driverLicense: resLicence?.data,
                    exteriorPhotos: newArrayExterior,
                    interiorPhotos: newArrayInterior,
                    vehicleDamage: newArrayVehicleDamage,
                    additionalDocuments: newAdditionalDocuments,
                    vehicleVideo: formData.value.vehicleVideo,
                  /*   year: formData.value.year,
                    trim: formData.value.trim, */
                  
                },
            }
            console.log('dataPost', dataPost)
            return dataPost
        }
        const saveData = async (string) => {
            console.log('string', string)
            componentKey.value += 1
            invalid.value = validateData(formData.value, 'confirmation');
            console.log('invalid.value', invalid.value)
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
                loading.value = true
                let resFiles = await postFile(string)
                console.log('resFiles', resFiles)
                statusLauch.closeModal(false)
                if (resFiles) {
                    try {
                        let res = await store.update({ uuid: id_create.value, payload: resFiles })
                        if (res) {
                            await router.push({ path: '/all' })
                            router.go()
                        }
                    } catch (error) {
                        id_create.value = null
                        loading.value = false
                        toast(error.response.data.message || 'An error has occurred try again', { type: "error" });

                    }
                }
            }
        }



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
            isOpen
        };
    },
};
</script>





  