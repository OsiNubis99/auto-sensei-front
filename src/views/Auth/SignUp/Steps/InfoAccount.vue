<template>
    <div v-if="loading" class="h-screen-login-loading w-full h-full flex justify-center items-center">
        <div>
            <div class=" h-12 w-12 md:h-[80px] md:w-[80px] ">
                <div class="animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff"
                        stroke-width="0" viewBox="0 0 16 16">
                        <path
                            d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                        </path>
                    </svg>
                </div>
                <p v-if="codePhone" class=" text-base-gray text-xs md:text-base mt-3 font-medium md:pl-2">Sending code to your phone...</p>
                <p v-else class=" text-base-gray text-xs md:text-base mt-3 font-medium md:pl-2">Loading...</p>
            </div>
        </div>
    </div>
    <div v-else class="flex-1 flex flex-col  justify-between py-12 px-4 h-full sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="flex-1 flex flex-col justify-center md:py-12 md:px-4 sm:px-6 h-full lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full ">
                <div>
                    <h2 class="mt-6 text-3xl md:text-4xl font-bold text-base-black text-center mb-5 ">Create Your Dealer
                        Account
                    </h2>
                    <p class=" text-xs md:text-sm font-normal text-[#666] text-center  ">Auction your car to dealers
                        right
                        from
                        your home.</p>
                </div>
                <div class="mt-8">
                    <div class="mt-6">
                        <div class="space-y-6">
                            <p class="text-sm font-medium capitalize"> <span v-if="rol === 'sellers'">Seller</span>
                                <span v-else>Dealer</span> Photo
                            </p>
                            <div class="flex !mt-2 gap-2 md:gap-6">
                                <img class="w-[80px] h-[80px] rounded-full object-cover " v-if="form?.preview"
                                    :src="form?.preview" alt="">
                                <img v-else src="../../../../assets/svg/login/uploadImage.svg" alt="">
                                <div>
                                    <div class="flex gap-1  items-center" v-if="form?.img?.name">
                                        <p class="text-xs font-medium text-[#666] truncate"> <strong
                                                class="text-[15]">Size:</strong> {{ form?.img?.mb }}Mb - </p>
                                        <p class="text-xs w-[90px]  font-medium md:w-[150px] text-[#666] truncate">
                                            <strong class="text-[15]">Name:</strong> {{ form?.img?.name }}
                                        </p>
                                    </div>
                                    <p v-else class="text-xs font-medium text-[#666]">JPG, GIF or PNG. Max size of 1Mb
                                    </p>
                                    <label :class="invalid?.img ? 'bg-error' : 'bg-[#F0F0F0]'"
                                        class="flex flex-col items-center mt-4 px-2 py-2  rounded-lg shadow-lg  tracking-wide  cursor-pointer">
                                        <span :class="invalid?.img ? 'text-white' : 'text-base-black'"
                                            class="text-sm  font-medium leading-normal">Upload Profile</span>
                                        <input type="file" accept="image/*" @change="previewImage" class="hidden">
                                    </label>
                                </div>
                            </div>
                            <div v-if="rol === 'dealers'">
                                <label htmlFor="dealerName" class="block text-sm font-medium text-gray-700">
                                    Dealer Name
                                </label>
                                <div class="mt-1">
                                    <input name="dealerName" type="text" v-model="form.dealerName"
                                        placeholder="Car Garage Co"
                                        :class="invalid?.dealerName ? 'border-error' : 'border-[#F0F0F0]'"
                                        class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div v-if="rol === 'dealers'">
                                <label htmlFor="registrationNumber" class="block text-sm font-medium text-gray-700">
                                    OMVIC Registration Number
                                </label>
                                <div class="mt-1">
                                    <input name="registrationNumber" v-model="form.registrationNumber" type="text"
                                        placeholder="1234567890"
                                        :class="invalid?.registrationNumber ? 'border-error' : 'border-[#F0F0F0]'"
                                        class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div v-if="rol === 'dealers'" class="space-y-1">
                                <label htmlFor="password" class="block text-sm font-medium text-gray-700">
                                    Address
                                </label>
                                <div class="mt-1">
                                    <input name="address" v-model="form.address" type="text"
                                        placeholder="San Fransisco, California"
                                        :class="invalid?.address ? 'border-error' : 'border-[#F0F0F0]'"
                                        class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div v-if="rol == 'sellers'"
                                class="flex flex-col md:flex-row gap-6 justify-between items-center">
                                <div class="w-full animate-fade-up  animate-ease-in-out animate-delay-200">
                                    <label htmlFor="name" class="block text-sm font-medium text-gray-700">
                                        Legal First Name*
                                    </label>
                                    <div class="mt-1">
                                        <input name="name" type="text" v-model="form.firtName" placeholder="Alex"
                                            :class="invalid?.firtName ? 'border-error ' : 'border-[#E0E0E0]'"
                                            class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div class="w-full animate-fade-up  animate-ease-in-out animate-delay-200">
                                    <label htmlFor="lastName" class="block text-sm font-medium text-gray-700">
                                        Legal Last Name*
                                    </label>
                                    <div class="mt-1">
                                        <input name="lastName" type="text" v-model="form.lastName" placeholder="Turner"
                                            :class="invalid?.lastName ? 'border-error' : 'border-[#E0E0E0]'"
                                            class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                            </div>
                            <div v-if="rol == 'sellers'">
                                <label htmlFor="lastName" class="block text-sm font-medium text-gray-700">
                                    Driver License
                                </label>
                                <div class="flex justify-between p-1 rounded-lg items-center border border-[#E0E0E0]">

                                    <p v-if="form?.driverLicense?.name"
                                        class=" pl-2 text-blue-dark font-medium truncate w-[50%] text-sm">
                                        {{ form?.driverLicense?.name }}
                                    </p>
                                    <p v-else class="text-[#858585] pl-2  text-xs md:text-sm">
                                        JPG or PNG. Up to 5mb
                                    </p>
                                    <div>
                                        <label :class="invalid?.driverLicense ? 'bg-error' : 'bg-[#F0F0F0]'"
                                            class="flex flex-col items-center py-1 px-2 md:py-2  rounded-lg shadow-lg  tracking-wide  cursor-pointer">
                                            <span :class="invalid?.driverLicense ? 'text-white' : 'text-base-black'"
                                                class=" text-xs md:text-sm  font-medium leading-normal">Upload
                                                Profile</span>
                                            <input type="file" accept="image/*" @change="previewLicense" class="hidden">
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div class="space-y-1 custom-phone">
                                <label htmlFor="phoneNumber" class="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input :class="invalid?.phoneNumber ? ' !border !border-error' : ''" type="tel"
                                    @input="filterinput" v-model="form.phoneNumber"
                                    class="border rounded-md h-[48px] w-full" id="telephone" />
                            </div>
                            <div>
                                <button @click="nextStep"
                                    class="w-full btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { onUpdated, ref, onMounted } from 'vue'
import { stepsSignUp } from "@/stores/stepsSignUp";
import { useUserStore } from "@/stores/user";
import { useStoreFile } from "@/stores/uploader";
import { infoAccount } from '../../../../validations/validationSignUp'
import { toast } from "vue3-toastify";
import { useRouter, useRoute } from 'vue-router'
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/intlTelInput.js";
import intlTelInput from "intl-tel-input";
export default {
    props: {
        next: {
            type: Function,
        },
        back: {
            type: Function,
        },
        backEmailToken: {
            type: Function,
        },
        getDataRegister: {
            type: Object,
        }
    },
    setup(props) {
        let rol = ref()
        const invalid = ref()
        const storeData = stepsSignUp()
        const form = storeData.formAccount
        const token = ref(null)
        const route = useRoute();
        const typeUser = ref('')
        const router = useRouter()
        const isLoading = ref(false)
        const storeUser = useUserStore()
        const storeFile = useStoreFile()
        const telInput = ref();
        const codePhone = ref(null)
        const dataForm = ref(props.getDataRegister)
        const previewImage = (event) => {
            var input = event.target;
            var maxfilesize = 1024 * 1024  // 1 Mb
            var filesize = input.files[0].size
            let convertion = (input.files[0].size / (1024 * 1024)).toFixed(2);
            if (input.files) {
                if (filesize > maxfilesize) {
                    toast("File too large: " + convertion + "Mb" + ". Maximum size: 1 Mb", {
                        type: "error",
                    });
                    form.preview = null
                    form.img = null
                } else {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        form.preview = e.target.result;
                    }

                    form.img = input.files[0];
                    form.img.mb = convertion
                    reader.readAsDataURL(input.files[0]);
                }
            }
        }
        const previewLicense = (event) => {
            var input = event.target;
            var maxfilesize = (1024 * 1024) * 5  // 5 Mb
            var filesize = input.files[0].size
            let convertion = (input.files[0].size / (1024 * 1024)).toFixed(2);
            console.log('convertion', convertion)
            if (input.files) {
                if (filesize > maxfilesize) {
                    toast("File too large: " + convertion + "Mb" + ". Maximum size: 5 Mb", {
                        type: "error",
                    });
                    form.previewDriverLicense = null
                    form.driverLicense = null
                } else {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        form.previewDriverLicense = e.target.result;
                    }

                    form.driverLicense = input.files[0];
                    form.driverLicense.mb = convertion
                    reader.readAsDataURL(input.files[0]);
                }
            }
        }
        const backStep = () => {
            props.back()
        }

        const filterinput = (e) => {
            e.target.value = e.target.value.replace(/[^0-9]+/g, '');
            let value = e.target.value;
            form.phoneNumber = value
        }
        const nextStep = async () => {
            invalid.value = infoAccount(form, rol.value);
            if (Object.entries(invalid.value).length === 0) {
                const formattedNumber = telInput.value.selectedCountryData.dialCode;
                codePhone.value = `+${formattedNumber + form.phoneNumber}`;
                let data = {
                    phone: codePhone.value
                }

                try {
                    let resCode = await storeUser.getValidation(data)
                    if (resCode.data.status == 'ok') {
                        let dataSenCode = {
                            token: token.value,
                            rol: rol.value,
                            phone: codePhone.value ? codePhone.value : null,
                            picture: form.img ? form.img : null,
                            name: form.dealerName ? form.dealerName : null,
                            firstName: form.firtName ? form.firtName : null,
                            lastName: form.lastName ? form.lastName : null,
                            omvic: form.registrationNumber ? form.registrationNumber : null,
                            address: form.address ? form.address : null,
                            driverLicense: form.driverLicense ? form.driverLicense : null,
                            validationCode: resCode.data.code
                        }
                        storeData.getSendData = dataSenCode
                        console.log('dataSenCode', dataSenCode)
                        props.next()
                    }
                    console.log('resCode', resCode)
                } catch (error) {
                    console.log('errro', errro)

                }
                /*  let typeSeller = {
                     seller: {
                         picture: form.img ? form.img : null,
                         firstName: form.firtName,
                         lastName: form.lastName,
                         driverLicense: form.driverLicense ? form.driverLicense : null,
                         phone: idCode ? idCode : null,
                     }
                 }
                 let typeDealer = {
                     dealer: {
                         picture: form.img ? form.img : null,
                         name: form.dealerName,
                         omvic: form.registrationNumber,
                         address: form.address,
                         phone: idCode ? idCode : null
                     },
                 }
                 typeUser.value = rol.value == 'sellers' ? typeSeller : typeDealer */


                /*  isLoading.value = true
                 if (form.img || form.driverLicense) {
                     let resFile = form.img && await storeFile.uploaderFile({ file: form.img, location: 'profile' })
                     let resLicence = form.driverLicense && await storeFile.uploaderFile({ file: form.driverLicense, location: 'license' })
                     console.log('resLicence', resLicence)
                     if (resFile.data || resLicence.data) {
                         try {
                             let typeSeller = {
                                 seller: {
                                     picture: resFile.data ? resFile.data : null,
                                     firstName: form.firtName,
                                     lastName: form.lastName,
                                     driverLicense: resLicence.data ? resLicence.data : null,
                                     phone: idCode ? idCode : null,
                                 }
                             }
                             let typeDealer = {
                                 dealer: {
                                     picture: resFile.data ? resFile.data : null,
                                     name: form.dealerName,
                                     omvic: form.registrationNumber,
                                     address: form.address,
                                     phone: idCode ? idCode : null
                                 },
                             }
                             typeUser.value = rol.value == 'sellers' ? typeSeller : typeDealer
 
                             let data = {
                                 token: token.value,
                                 payloadData: typeUser.value
                             }
 
                             try {
                                 let res = await storeUser.userData(data)
                                 if (res) {
                                     props.next()
                                     isLoading.value = false
                                 }
                             } catch (error) {
                                 isLoading.value = false
                                 toast(error?.response?.data?.message[0] || 'error al cargar', {
                                     type: "error",
                                 });
                             }
 
 
 
                         } catch (error) {
                             toast(error?.response?.data?.message || 'error al cargar', {
                                 type: "error",
                             });
                             isLoading.value = false
                         }
                     } else {
                         isLoading.value = false
                         toast('Intente de nuevo', {
                             type: "error",
                         });
                     }
                 } else {
                     try {
                         let typeSeller = {
                             seller: {
                                 firstName: form.firtName,
                                 lastName: form.lastName,
                                 phone: idCode ? idCode : null,
                             }
                         }
                         let typeDealer = {
                             dealer: {
                                 name: form.dealerName,
                                 omvic: form.registrationNumber,
                                 address: form.address,
                                 phone: idCode ? idCode : null,
                             },
                         }
                         typeUser.value = rol.value == 'sellers' ? typeSeller : typeDealer
                         let data = {
                             token: token.value,
                             payloadData: typeUser.value
                         }
                         try {
                             let res = await storeUser.userData(data)
                             if (res) {
                                 props.next()
                                 isLoading.value = false
                             }
                         } catch (error) {
                             isLoading.value = false
                             toast(error?.response?.data?.message[0] || 'error al cargar', {
                                 type: "error",
                             });
                         }
 
                     } catch (error) {
                         if (error?.response?.data?.message == "Unauthorized") {
                             toast(error?.response?.data?.message || 'error al cargar', {
                                 type: "error",
                                 autoClose: 2000,
                             });
                             props.backEmailToken()
                         }
                         isLoading.value = false
                     }
                 } */
            }
        }
        onUpdated(() => {
            rol.value = route.params.rol
        })
        onMounted(() => {
            rol.value = route.params.rol
            token.value = localStorage.getItem('updateUser')
            /* if (token.value) {
                localStorage.clear()
            } */
            const input = document.getElementById("telephone");
            telInput.value = intlTelInput(input, {
                preferredCountries: ["ca", "in", "us"],
                // Otros opciones de inicialización si es necesario
            });
            input.addEventListener("countrychange", function (e) {
                console.log(telInput);
            });

        })
        return {
            nextStep,
            backStep,
            previewImage,
            previewLicense,
            form,
            invalid,
            rol,
            isLoading,
            filterinput,
            codePhone
        };
    },
};
</script>