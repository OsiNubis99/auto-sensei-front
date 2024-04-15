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
                <p class=" text-base-gray text-xs md:text-base mt-3 font-medium md:pl-2">Loading...</p>
            </div>
        </div>
    </div>
    <div v-else :class="showSuccessRegister ? '!p-0' : ''"
        class="flex-1 flex flex-col justify-between py-12 px-4 sm:px-6 h-full lg:flex-none lg:px-20 xl:px-24">
        <template v-if="showSuccessRegister">
            <div class="w-full h-full overflow-hidden relative ">
                <div class="h-full w-full md:w-[60%] mx-auto flex justify-center flex-col items-center  p-5">
                    <div
                        class="bg-white h-fit flex flex-col gap-2 md:gap-6 items-center justify-center shadow-lg  rounded-lg p-4">
                        <div class="check-container">
                            <div class="check-background">
                                <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="check-shadow"></div>
                        </div>
                        <div>
                            <p class="text-center text-sm md:text-2xl font-medium">Your account have been successfully
                                created.</p>
                            <p class="text-center text-xs md:text-base">Our administrators will validate your info and
                                activate your
                                account. This process may take a few moments.</p>
                        </div>
                        <div>
                            <button @click="refirectToLogin" class="btn bg-primary" to="/login/dealers">Login</button>
                        </div>
                    </div>
                </div>
                <ul class="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>


        </template>
        <template v-else>
            <div class="flex-1 flex flex-col justify-center md:py-12 px-4 sm:px-6 h-full lg:flex-none  xl:px-24">
                <div class="mx-auto w-full ">
                    <div>
                        <h2 class="mt-6 text-3xl md:text-4xl font-bold text-base-black text-center mb-5 ">
                            Enter Verification
                            Code</h2>
                        <p class=" text-sm font-normal text-[#666] text-center  ">A text message with a 6-digit code has
                            been sent to <strong> {{ formdata?.phone }} </strong>
                        </p>
                    </div>
                    <div class="mt-8">
                        <div class="mt-6">
                            <div class="space-y-7 ">
                                <div>
                                    <label htmlFor="email" class="block text-sm font-medium text-gray-700">
                                        Code
                                    </label>
                                    <div class="mt-1">
                                        <input v-model="form.code" type="text" placeholder="Enter the 6-digit code"
                                            class="appearance-none block w-full px-3 py-2 border border-[#E0E0E0] rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <button @click="nextStep"
                                        class="w-full btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5 flex justify-center gap-2 md:flex-col">
                            <p class=" text-xs font-normal text-[#666]  ">
                                Didn’t receive the code? </p>
                            <p @click="backStep"
                                class="font-medium cursor-pointer text-xs  underline text-base-black hover:text-indigo-500">
                                Resend Code
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </template>


    </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue'
import { stepsSignUp } from "@/stores/stepsSignUp";
import { toast } from "vue3-toastify";
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useAuthStore } from "@/stores/auth";
import { useStoreFile } from "@/stores/uploader";
import { useUserStore } from "@/stores/user";

import axios from "@/axios";
export default {
    props: {
        next: {
            type: Function,
        },
        back: {
            type: Function,
        },
    },
    setup(props) {
        const storeData = stepsSignUp()
        const formdata = storeData.getSendData
        const create = storeData.formData
        const storeUser = useUserStore()
        const store = useAuthStore()
        const form = ref({ code: '' })
        const route = useRoute();
        const path = ref(computed(() => route.name))
        const router = useRouter()
        const loading = ref(false)
        const storeFile = useStoreFile()
        const token = ref(null)
        const dataForm = ref(props.getDataRegister)
        const showSuccessRegister = ref(false)
        const nextStep = async () => {

            if (!form.value.code) {
                toast('Campo Obligarotio', {
                    type: "error",
                });
                return
            }
            loading.value = true
            console.log('formdata', formdata)
            try {
                let dataRegister = {
                    phone: formdata.phone,
                    validationCode: form.value.code
                }
                let data = {
                    token: formdata.token,
                    payloadData: dataRegister
                }

                try {
                    let res = await storeUser.userData(data)
                    console.log('res USERRR', res.data)
                    if (res) {
                        axios.defaults.headers['Authorization'] = `Bearer ${formdata.token}`;
                        let resToken = await store.authProfile()
                        console.log('resToken', resToken)
                        if (resToken.statusText = "OK") {
                            let resDtaLate = await dataLayer.push({ 'event': 'registrationComplete', 'formType': res.data /* Or other relevant information 'userId': 'USER_ID' If you track user IDs and it's compliant with our privacy policy*/ });
                            console.log('resDtaLate', resDtaLate)
                            if (resToken.data.type !== 2) localStorage.setItem('token', formdata.token)
                            if (resToken.data.type !== 2) localStorage.removeItem('updateUser')
                            if (resToken.data.type !== 2) localStorage.setItem('rol', resToken.data.type)
                            switch (resToken.data.type) {
                                case 0:
                                    await router.push({ path: '/inicio' })
                                    break;
                                case 1:
                                    await router.push({ path: '/all' })
                                    break;
                                case 2:
                                    localStorage.clear()
                                    showSuccessRegister.value = true
                                    break;
                                default:
                                    await router.push({ name: 'home' })
                                    break;
                            }
                            create.name = '';
                            create.firtName = '';
                            create.lastName = '';
                            create.email = '';
                            create.password = '';
                            create.confirmPassword = '';
                            create.termsconditions = null;
                            formdata.img = '';
                            formdata.dealerName = '';
                            formdata.registrationNumber = '';
                            formdata.address = '';
                            formdata.linea1 = '';
                            formdata.linea2 = '';
                            formdata.zipCode = '';
                            formdata.province = null;
                            formdata.getState = null;
                            formdata.city = null;
                            formdata.getCities = null;
                            formdata.phoneNumber = '';
                            formdata.preview = '';
                            formdata.firtName = '';
                            formdata.lastName = '';
                            formdata.driverLicense = '';
                            formdata.numberCode = '';
                            formdata.previewDriverLicense = '';
                            loading.value = false

                        }
                    }
                } catch (error) {
                    console.log('entro aqi', error)
                    loading.value = false
                    let errorMessage = error?.response?.data?.message[0]
                    if (typeof error?.response?.data?.message === 'string') {
                        errorMessage = error?.response?.data?.message
                    }
                    toast(errorMessage || 'error al cargar', {
                        type: "error",
                    });
                }
            } catch (error) {
                console.log('entro aqi', error)
                toast(error?.response?.data?.message || 'error al cargar', {
                    type: "error",
                });
                loading.value = false
            }
        }
        const backStep = async () => {
            console.log('formdata?.phone', formdata?.phone)
            if (formdata.phone) {
                loading.value = true
                let data = {
                    phone: formdata?.phone
                }
                try {
                    let resCode = await storeUser.getValidation(data)
                    if (resCode) {
                        console.log('resCode', resCode)
                        toast('Code succesfully resent', {
                        type: "success",
                    });
                        loading.value = false
                    }
                } catch (error) {

                    toast(error?.response?.data?.message || 'error', {
                        type: "error",
                    });
                }
            }


            /* props.back() */
        }
        const refirectToLogin = async () => {
            await router.push({ path: '/login/dealers' })
            showSuccessRegister.value = false

        }
        /* const openCode = () => {
            alert(formdata.validationCode)
        } */
        onMounted(() => {
            token.value = localStorage.getItem('updateUser')
        })

        return {
            nextStep,
            backStep,
            form,
            loading,
            formdata,
            refirectToLogin,
            showSuccessRegister
        };
    },
};
</script>