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
    <div v-else class="flex-1 flex flex-col justify-between py-12 px-4 sm:px-6 h-full lg:flex-none lg:px-20 xl:px-24">
        <div class="flex-1 flex flex-col justify-center md:py-12 px-4 sm:px-6 h-full lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full ">
                <div>
                    <h2 @click="openCode" class="mt-6 text-3xl md:text-4xl font-bold text-base-black text-center mb-5 ">
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
</template>

<script>
import { onMounted, ref, computed } from 'vue'
import { stepsSignUp } from "@/stores/stepsSignUp";
import { toast } from "vue3-toastify";
import { useRouter, useRoute } from 'vue-router'
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
        const nextStep = async () => {

            if (!form.value.code) {
                toast('Campo Obligarotio', {
                    type: "error",
                });
                return
            }
            console.log('formdata', formdata)
            loading.value = true
            if (formdata.picture || formdata.driverLicense) {
                let resFile = formdata.picture && await storeFile.uploaderFile({ file: formdata.picture, location: 'profile' })
                let resLicence = formdata.driverLicense && await storeFile.uploaderFile({ file: formdata.driverLicense, location: 'license' })
                console.log('resLicence', resLicence)
                if (resFile?.data || resLicence?.data) {
                    console.log('entro aqi')
                    try {
                        let typeSeller = {
                            seller: {
                                picture: resFile?.data ? resFile?.data : null,
                                firstName: formdata.firstName,
                                lastName: formdata.lastName,
                                driverLicense: resLicence?.data ? resLicence?.data : null,
                            },
                            phone: formdata.phone,
                            validationCode: form.value.code
                        }
                        let typeDealer = {
                            dealer: {
                                picture: resFile?.data ? resFile?.data : null,
                                name: formdata.name,
                                omvic: formdata.omvic,
                                address: formdata.address,
                            },
                            phone: formdata.phone,
                            validationCode: form.value.code
                        }
                        let dataRegister = formdata.rol == 'sellers' ? typeSeller : typeDealer
                        let data = {
                            token: formdata.token,
                            payloadData: dataRegister
                        }

                        try {
                            console.log('entro aqi')
                            let res = await storeUser.userData(data)
                            if (res) {
                                axios.defaults.headers['Authorization'] = `Bearer ${formdata.token}`;

                                let resToken = await store.authProfile()
                                console.log('resToken', resToken)
                                if (resToken.statusText = "OK") {
                                    if (resToken.data.type !== 2) localStorage.setItem('token', formdata.token)
                                    if (resToken.data.type !== 2) localStorage.removeItem('updateUser')
                                    if (resToken.data.type !== 2) localStorage.setItem('rol', resToken.data.type)
                                    switch (resToken.data.type) {
                                        case 0:
                                            await router.push({ path: '/inicio' })
                                            router.go()
                                            break;
                                        case 1:
                                            await router.push({ path: '/all' })
                                            router.go()
                                            break;
                                        case 2:
                                            await router.push({ path: '/login/dealers' })
                                            localStorage.clear()
                                            router.go()
                                            break;
                                        default:
                                            await router.push({ name: 'home' })
                                            router.go()
                                            break;
                                    }
                                    loading.value = false;
                                }
                            }
                        } catch (error) {
                            console.log('entro aqi', error)
                            loading.value = false
                            toast(error?.response?.data?.message[0] || 'error al cargar', {
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
                } else {
                    loading.value = false
                    toast('Intente de nuevo', {
                        type: "error",
                    });
                }
            } else {
                console.log('entro')
                try {
                    let typeSeller = {
                        seller: {
                            firstName: formdata.firtName,
                            lastName: formdata.lastName,
                        },
                        phone: formdata.phone,
                        validationCode: form.value.code
                    }
                    let typeDealer = {
                        dealer: {
                            name: formdata.name,
                            omvic: formdata.registrationNumber,
                            address: formdata.address,
                        },
                        phone: formdata.phone,
                        validationCode: form.value.code
                    }
                    let dataRegister = formdata.rol == 'sellers' ? typeSeller : typeDealer
                    console.log('dataRegister', dataRegister)
                    let data = {
                        token: formdata.token,
                        payloadData: dataRegister
                    }

                    try {
                        let res = await storeUser.userData(data)
                        if (res) {
                            axios.defaults.headers['Authorization'] = `Bearer ${formdata.token}`;

                            let resToken = await store.authProfile()

                            if (resToken.statusText = "OK") {
                                if (resToken.data.type !== 2) localStorage.setItem('token', formdata.token)
                                if (resToken.data.type !== 2) localStorage.removeItem('updateUser')
                                if (resToken.data.type !== 2) localStorage.setItem('rol', resToken.data.type)
                                setInterval(async () => {
                                    switch (resToken.data.type) {
                                        case 0:
                                            await router.push({ path: '/inicio' })
                                            router.go()
                                            break;
                                        case 1:
                                            await router.push({ path: '/all' })
                                            router.go()
                                            break;
                                        case 2:
                                            await router.push({ path: '/login/dealers' })
                                            router.go()
                                            break;
                                        default:
                                            await router.push({ name: 'home' })
                                            router.go()
                                            break;
                                    }
                                    loading.value = false;
                                }, 800);
                            }
                        }
                    } catch (error) {
                        console.log('error', error)
                        loading.value = false
                        toast(error?.response?.data?.message[0] || 'error al cargar', {
                            type: "error",
                        });
                    }

                } catch (error) {
                    console.log('error', error)
                    if (error?.response?.data?.message == "Unauthorized") {
                        toast(error?.response?.data?.message || 'error al cargar', {
                            type: "error",
                            autoClose: 2000,
                        });
                    }
                    loading.value = false
                }
            }

            /*  console.log('res', resToken)
             setTimeout(async () => {
                 await router.push({ path: `/login/${route.params.rol}` })
                 router.go()
                 loading.value = false
             }, 2000);

            /*  props.next() */
        }
        const backStep = () => {
            props.back()
        }
        const openCode = () => {
            alert(formdata.validationCode)
        }
        onMounted(() => {
            token.value = localStorage.getItem('updateUser')
        })

        return {
            nextStep,
            backStep,
            form,
            loading,
            openCode, formdata
        };
    },
};
</script>