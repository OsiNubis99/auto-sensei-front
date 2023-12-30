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
        const router = useRouter()
        const formData = ref({
            numberVinGenerals: '',
            date: '',
            province: '',
            city: '',
            keys: '',
            currently: '',
            buyoutVehicle: '',
            newVehicle: '',
            numberVin: '',
            year: '',
            make: '',
            model: '',
            series: '',
            bodyType: '',
            cylinder: '',
            transmission: '',
            odometer: '',
            doors: '',
            color: '',
            driveTrain: '',
            additionalPackages: '',
            tireCondition: '',
            lastReplacement: '',
            brakePads: '',
            lastReplacement2: '',
            rotorCondition: '',
            lastReplacement3: '',
            document: '',
            previewDocument: '',
            driverDocument: '',
            previewDriver: '',
            frontPhoto: '',
            previewFrontPhoto: '',
            front: '',
            previewFront: '',
            driverSide: '',
            previewDriverSide: '',
            back: '',
            previewBack: '',
            passengerSide: '',
            previewPassengerSide: '',
            tireAndRim: '',
            previewTireAndRim: '',
            driversDisplay: '',
            previewDriversDisplay: '',
            driversSide: '',
            previewDriversSide: '',
            centerConsole: '',
            previewCenterConsole: '',
            rearSeats: '',
            previewRearSeats: '',
            vehicleDamage: '',
            previewVehicleDamage: '',
            additionalDocuments: '',
            previewAdditionalDocuments: '',
            vehicleVideo: '',
            previewVehicleVideo: ''
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
                    vehicleStatus: formData.value.currently,
                    buyout: formData.value.buyoutVehicle,
                    buyNew: formData.value.newVehicle
                }
                console.log('dataPost', dataPost)
                loading.value = true
                try {

                    let res = await store.create(dataPost)
                    if (res) {
                        id_create.value = res.data._id
                        formData.value.numberVin = res.data.vehicleDetails.vin
                        formData.value.year = res.data.vehicleDetails.year
                        formData.value.make = res.data.vehicleDetails.make
                        formData.value.model = res.data.vehicleDetails.model
                        formData.value.series = res.data.vehicleDetails.series
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
                    id_create.value = null
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
                    invalid?.value?.series ||
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
                    vehicleStatus: formData.value.currently,
                    buyout: formData.value.buyoutVehicle,
                    buyNew: formData.value.newVehicle,
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
                    id_create.value = null
                    loading.value = false
                    toast(error.response.data.message || 'An error has occurred try again', { type: "error" });

                }

            }
        }

        const postFile = async () => {
            let newArrayExterior = []
            let newArrayInterior = []
            let newArrayVehicleDamage = []
            let newAdditionalDocuments = []
            let exterior = [
                formData.value.frontPhoto,
                formData.value.front,
                formData.value.driverSide,
                formData.value.back,
                formData.value.passengerSide,
                formData.value.tireAndRim,
            ]
            let interior = [
                formData.value.driversDisplay,
                formData.value.driverSide,
                formData.value.centerConsole,
                formData.value.rearSeats,
            ]
            let vehicleDamage = [
                formData.value.vehicleDamage,
            ]
            let additionalDocuments = [
                formData.value.additionalDocuments,
            ]
            if (exterior.length > 0 && interior.length > 0 && vehicleDamage.length > 0 && additionalDocuments.length > 0) {
                await Promise.all(
                    exterior.map(async (file, i) => {
                        let res = await storeFile.uploaderFile({ file: file, location: 'test' })
                        newArrayExterior.push(res.data);
                    })
                )
                await Promise.all(
                    interior.map(async (file, i) => {
                        let res = await storeFile.uploaderFile({ file: file, location: 'test' })
                        newArrayInterior.push(res.data);
                    })
                );
                await Promise.all(
                    vehicleDamage.map(async (file, i) => {
                        let res = await storeFile.uploaderFile({ file: file, location: 'test' })
                        newArrayVehicleDamage.push(res.data);
                    })
                );
                await Promise.all(
                    additionalDocuments.map(async (file, i) => {
                        let res = await storeFile.uploaderFile({ file: file, location: 'test' })
                        newAdditionalDocuments.push(res.data);
                    })
                );
                let dataPost = {
                    vehicleDetails: {
                        originalDocument: formData.value.document,
                        driverLicense: formData.value.driverDocument,
                        exteriorPhotos: newArrayExterior,
                        interiorPhotos: newArrayInterior,
                        vehicleDamage: newArrayVehicleDamage,
                        additionalDocuments: newAdditionalDocuments,
                        vehicleVideo: formData.value.vehicleVideo
                    }
                }
                return dataPost
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
                    invalid?.value?.rearSeats ||
                    invalid?.value?.vehicleDamage ||
                    invalid?.value?.additionalDocuments ||
                    invalid?.value?.vehicleVideo, {
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
        const saveData = async () => {
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
                    invalid?.value?.series ||
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
                    invalid?.value?.rearSeats ||
                    invalid?.value?.vehicleDamage ||
                    invalid?.value?.additionalDocuments ||
                    invalid?.value?.vehicleVideo, {
                    type: "error",
                });
                return
            }
            if (Object.entries(invalid.value).length === 0) {
                loading.value = true
                let resFiles = await postFile()
                console.log('resFiles', resFiles)
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
        };
    },
};
</script>





  