<template>
    <div v-if="isLoading" class="h-screen-login-loading w-full h-full flex justify-center items-center">
        <div>
            <div class=" h-12 w-12 md:h-[80px] relative md:w-[80px] ">
                <div class="animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff"
                        stroke-width="0" viewBox="0 0 16 16">
                        <path
                            d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                        </path>
                    </svg>
                </div>
                <div v-if="codePhone" class=" absolute md:-left-[100%]  -left-[127%]   mt-3 md:pl-2">
                    <p class="text-xs md:text-base font-medium text-base-gray whitespace-pre">Sending code to your
                        phone...</p>
                </div>
                <p v-else class=" text-base-gray text-xs md:text-base mt-3 font-medium md:pl-2">Loading...</p>
            </div>
        </div>
    </div>
    <div v-else
        class="flex-1 flex flex-col h-auto  justify-between py-12 px-4  sm:px-6 lg:flex-none  lg:mx-20 2xl:mx-32   2xl:my-0">
        <div class="flex-1 flex flex-col justify-center md:p-0 md:mb-10 md:mx-4 sm:px-6 h-full lg:flex-none ">
            <div class="mx-auto  w-full ">
                <div>
                    <h2 class="mt-6 text-3xl md:text-4xl font-bold text-base-black text-center md:mb-5 ">Create Your
                        <span v-if="rol == 'dealers'"> Dealer</span> <span v-if="rol == 'sellers'"> Sellers</span>
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
                                <img v-else :src="bucket + 'public/svg/login/uploadImage.svg'" alt="">
                                <div>
                                    <div class="flex gap-1  items-center" v-if="form?.img?.name">
                                        <p class="text-xs font-medium text-[#666] truncate"> <strong
                                                class="text-[15]">Size:</strong> {{ form?.img?.mb }}Mb - </p>
                                        <p class="text-xs w-[90px]  font-medium md:w-[150px] text-[#666] truncate">
                                            <strong class="text-[15]">Name:</strong> {{ form?.img?.name }}
                                        </p>
                                    </div>
                                    <p v-else class="text-xs font-medium text-[#666]">JPG, GIF or PNG. Max size of 50Mb
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

                            <div v-if="rol === 'dealers'">
                                <div class="space-y-1">
                                    <p class="block text-sm font-medium text-gray-700">
                                        Address
                                    </p>
                                </div>
                                <div class="grid grid-cols-1 gap-4  md:grid-cols-3  mt-2 ">
                                    <div class="space-y-1">
                                        <label htmlFor="password" class="block text-sm font-medium text-gray-700">
                                            Line 1
                                        </label>
                                        <div class="mt-1">
                                            <input name="address" v-model="form.linea1" type="text"
                                                placeholder="Street address or P.O. Box"
                                                :class="invalid?.linea1 ? 'border-error' : 'border-[#F0F0F0]'"
                                                class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>
                                    <div class="space-y-1">
                                        <label htmlFor="password" class="block text-sm font-medium text-gray-700">
                                            Line 2
                                        </label>
                                        <div class="mt-1">
                                            <input name="address" v-model="form.linea2" type="text"
                                                placeholder="Apt, suite, unit, building, floor, etc."
                                                :class="invalid?.linea2 ? 'border-error' : 'border-[#F0F0F0]'"
                                                class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>
                                    <div class="space-y-1">
                                        <label htmlFor="password" class="block text-sm font-medium text-gray-700">
                                            Postal Code
                                        </label>
                                        <div class="mt-1">
                                            <input name="postalCode" v-model="form.zipCode" type="text"
                                                placeholder="587469"
                                                :class="invalid?.zipCode ? 'border-error' : 'border-[#F0F0F0]'"
                                                class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="flex items-center gap-3" v-if="rol === 'dealers'">
                                <div class="w-full flex flex-col gap-2 relative">
                                    <label class=" text-sm md:text-base " for="">Province</label>
                                    <input v-model="form.province"
                                        :class="invalid?.province ? 'border-error' : 'border-[#E0E0E0]'"
                                        class="p-2 rounded-lg border " type="text">
                                    <!--  <select v-model="form.province" @change="onChangeGetProvince($event)"
                                        :class="invalid?.province ? 'border-error' : 'border-[#E0E0E0]'"
                                        class=" border text-[#858585] md:p-3  text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">

                                        <option v-if="!form.getState" selected>Laoding city... </option>
                                        <option v-else selected hidden>Select province</option>
                                        <template v-for="(state, index) in form.getState" :key="index">
                                            <option :value="JSON.stringify(state)">{{ state.iso2 }} | {{ state.name }}
                                            </option>
                                        </template>
</select>
<div v-if="!form.getState" class="absolute text-xs md:text-sm text-[#858585] bottom-2 left-4 ">
    Laoding
    province...
</div> -->
                                </div>
                                <div class="w-full flex flex-col gap-2 relative">
                                    <label class=" text-sm md:text-base " for="">City</label>
                                    <input v-model="form.city"
                                        :class="invalid?.city ? 'border-error' : 'border-[#E0E0E0]'"
                                        class="p-2 rounded-lg border " type="text">
                                    <!--  <select v-model="form.city" @change="onChangeGetCity($event)"
                                        :disabled="loadingCountrys || !form.getCities ? true : false"
                                        :class="invalid?.city ? 'border-error' : 'border-[#E0E0E0]'" class=" border text-[#858585] md:p-3  text-gray-900 text-xs
                                         md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">

                                        <option v-if="loadingCountrys" selected>Laoding city... </option>
                                        <option v-else selected hidden>Select city </option>
                                        <template v-for="(cities, index) in form.getCities" :key="index">
                                            <option :value="JSON.stringify(cities)">{{ cities.name }}</option>
                                        </template>
                                    </select>
                                    <div v-if="loadingCountrys"
                                        class="absolute text-sm text-[#858585] bottom-2 left-4 ">
                                        Laoding
                                        city...</div> -->
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
                            <!--  <div v-if="rol == 'sellers'">
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
                            </div> -->

                            <div class="space-y-1 custom-phone">
                                <label htmlFor="phoneNumber" class="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input :class="invalid?.phoneNumber ? ' !border !border-error' : ''" type="tel"
                                    @input="filterinput" v-model="form.phoneNumber"
                                    class="border rounded-md h-[48px] w-full" id="telephone" />
                            </div>
                            <div>
                                <button @click="nextStep" id="continueAccount"
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
import { onUpdated, ref, onMounted, computed } from 'vue'
import { stepsSignUp } from "@/stores/stepsSignUp";
import { useUserStore } from "@/stores/user";
import { useStoreFile } from "@/stores/uploader";
import { infoAccount } from '../../../../validations/validationSignUp'
import { toast } from "vue3-toastify";
import { useRouter, useRoute } from 'vue-router'
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/intlTelInput.js";
import intlTelInput from "intl-tel-input";
import { usePayments } from "@/stores/payments";
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
        const formData = storeData.formData
        const countrys = usePayments()
        const loadingCountrys = ref(false)
        const formCreate = storeData.formData
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const token = ref(null)
        const route = useRoute();
        const typeUser = ref('')
        const router = useRouter()
        const isLoading = ref(false)
        const storeUser = useUserStore()
        const storeFile = useStoreFile()
        const telInput = ref();
        const inputPhone = ref(null)
        const codePhone = ref(null)
        const formattedNumber = ref(null)
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
            console.log('formattedNumber.value', formattedNumber.value)
            invalid.value = infoAccount(form, rol.value);
            if (Object.entries(invalid.value).length === 0) {
                if (!formattedNumber.value) {
                    formattedNumber.value = telInput.value.selectedCountryData.dialCode;
                    codePhone.value = `+${formattedNumber.value + form.phoneNumber}`;
                }
                let data = {
                    phone: codePhone.value
                }
                let address = null
                isLoading.value = true
                address = {
                    linea1: form.linea1,
                    linea2: form.linea2,
                    zipCode: form.zipCode,
                    province: form.province,
                    city: form.city
                    /*  province: JSON.parse(form.province)?.name,
                     city: JSON.parse(form.city)?.name */
                }
                try {
                    let dataSenCode = {
                        token: token.value,
                        rol: rol.value,
                        phone: codePhone.value ? codePhone.value : null,
                        picture: form.img ? form.img : null,
                        name: form.dealerName ? form.dealerName : null,
                        firstName: form.firtName ? form.firtName : null,
                        lastName: form.lastName ? form.lastName : null,
                        dealerFirsName: formCreate.firtName,
                        dealerLastName: formCreate.lastName,
                        omvic: form.registrationNumber ? form.registrationNumber : null,
                        address: address ? address : null,
                        driverLicense: form.driverLicense ? form.driverLicense : null,
                    }
                    storeData.getSendData = dataSenCode
                    let resCode = await storeUser.getValidation(data)
                    console.log('resCode', resCode)
                    if (resCode.data.status == 'ok') {
                        isLoading.value = true
                        if (form.img || form.driverLicense) {
                            let resFile = form.img && await storeFile.uploaderFile({ file: form.img, location: 'profile' })
                            let resLicence = form.driverLicense && await storeFile.uploaderFile({ file: form.driverLicense, location: 'license' })
                            console.log('resLicence', resLicence)
                            if (resFile.data || resLicence.data) {
                                try {
                                    let typeSeller = {
                                        seller: {
                                            picture: resFile?.data ? resFile?.data : null,
                                            firstName: form.firtName,
                                            lastName: form.lastName,
                                            driverLicense: resLicence?.data ? resLicence?.data : null,
                                        },
                                    }
                                    let typeDealer = {
                                        dealer: {
                                            picture: resFile?.data ? resFile?.data : null,
                                            name: form.dealerName ? form.dealerName : null,
                                            omvic: form.registrationNumber ? form.registrationNumber : null,
                                        },
                                        address: {
                                            city: address.city,
                                            country: 'Canada',
                                            line1: address.linea1,
                                            line2: address.linea2,
                                            postal_code: address.zipCode,
                                            state: address.province
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
                                        toast(error?.response?.data?.message[0] || 'error', {
                                            type: "error",
                                        });
                                    }



                                } catch (error) {
                                    toast(error?.response?.data?.message || 'error', {
                                        type: "error",
                                    });
                                    isLoading.value = false
                                }
                            } else {
                                isLoading.value = false
                                toast('error', {
                                    type: "error",
                                });
                            }
                        } else {
                            try {
                                let typeSeller = {
                                    seller: {
                                        firstName: form.firtName,
                                        lastName: form.lastName,
                                    }
                                }
                                let typeDealer = {
                                    dealer: {
                                        name: form.dealerName ? form.dealerName : null,
                                        omvic: form.registrationNumber ? form.registrationNumber : null,
                                    },
                                    address: {
                                        city: address.city,
                                        country: 'Canada',
                                        line1: address.linea1,
                                        line2: address.linea2,
                                        postal_code: address.zipCode,
                                        state: address.province
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
                        }
                        isLoading.value = false
                    }

                } catch (error) {
                    console.log('error', error)
                    toast(error.response.data.message, {
                        type: "error",
                        autoClose: 2000,
                    });
                    isLoading.value = false
                    console.log('errro', error)

                }
            }
        }
        const getCountry = async () => {
            try {
                const res = await countrys.getCountry()
                form.getState = res.data
                console.log('resresresresresres', res)
            } catch (error) {

            }
        }
        const onChangeGetProvince = async (event) => {
            form.getCities = undefined;
            form.city = undefined;
            let value = JSON.parse(event.target.value)
            loadingCountrys.value = true
            try {
                const res = await countrys.getCountryCities(value.iso2)
                form.getCities = res.data
                console.log('getCountryCities', res)
            } catch (error) {
                loadingCountrys.value = false
            } finally {
                loadingCountrys.value = false
            }

        }
        const onChangeGetCity = async (event) => {
            let value = JSON.parse(event.target.value)
            /* formData.city = value.name */
            console.log('value', value)
        }
        onUpdated(() => {
            rol.value = route.params.rol
        })
        onMounted(() => {
            console.log('entro al paso 3')
            form.phoneNumber = undefined;
            telInput.value = undefined;
            formattedNumber.value = undefined;
            codePhone.value = undefined;
            let input = undefined;
            getCountry()
            rol.value = route.params.rol
            token.value = localStorage.getItem('updateUser')
            /* if (token.value) {
                localStorage.clear()
            } */

            input = document.getElementById("telephone");
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
            codePhone,
            loadingCountrys,
            formData,
            onChangeGetProvince,
            onChangeGetCity,
            bucket
        };
    },
};
</script>