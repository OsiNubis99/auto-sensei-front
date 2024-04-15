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
                <p class=" text-base-gray text-xs md:text-base mt-3 font-medium md:pl-2 ">Loading...</p>
            </div>
        </div>
    </div>
    <div v-else
        class="flex-1 flex flex-col overflow-auto  justify-between py-12 pt-4 px-4  sm:px-6 lg:flex-none lg:px-10 xl:px-24">
        <div
            class="flex-1 flex flex-col  h-creen gap-6 md:gap-0 justify-center md:py-12  px-4 sm:px-6 md:h-full lg:flex-none lg:px-10 2xl:px-24">
            <div class="mx-auto w-full ">
                <div v-if="route.query?.error == 'expired'">
                    <h2 class="mt-6 text-2xl md:text-4xl font-bold text-base-black text-center mb-5 ">Your email
                        verification token has
                        expired</h2>
                </div>
                <div v-else>
                    <h2 class="mt-6 text-3xl md:text-4xl font-bold text-base-black text-center mb-5 ">Check Your Email
                    </h2>
                    <p class=" text-sm font-normal text-[#666] text-center  ">We sent an email to
                        <strong>{{ form?.email }}</strong>.
                        Open the email to verify your email address.
                    </p>
                </div>
                <div class="mt-8 flex justify-center items-center flex-col">
                    <img src="../../../../assets/svg/login/verifiqueCard.svg" alt="">
                    <template v-if="route.query?.error == 'expired'">
                        <div class="flex gap-2 items-center mt-4 mb-4">
                            <button @click="backError" class="btn bg-primary mt-5">Go back</button>
                            <button @click="sendResendEmail" class="btn bg-primary mt-5">Resend Email</button>
                        </div>
                    </template>
                    <p v-else class=" text-sm mt-6 font-medium mb-5">Click the link in your email to continue</p>
                </div>
                <div class="">
                    <div class="w-full animate-fade-up  animate-ease-in-out animate-delay-200">
                        <label htmlFor="name" class="block text-sm font-medium text-gray-700">
                            Enter the code
                        </label>
                        <div class="mt-1">
                            <input name="name" type="text" v-model="codeEmail" placeholder="*******"
                                :class="errorCode ? 'border-error ' : 'border-[#E0E0E0]'"
                                class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                    </div>
                    <button class="btn bg-primary w-full h-10 mt-2 " @click="verifiedCode()">Send Code</button>
                </div>

            </div>
        </div>
        <div v-if="route.query?.error !== 'expired'" class="text-center mt-4 pb-5 flex justify-center gap-2 flex-col">
            <p class=" text-xs font-normal text-[#666]  ">
                Send Code Didn’t receive the email?
            </p>
            <p class=" text-xs font-normal text-[#666]  ">
                Please check your junk mail if you cannot find the code in your general inbox. </p>
            <p @click="sendRecover"
                class="font-medium cursor-pointer text-xs  underline text-base-black hover:text-indigo-500">
                Resend Email
            </p>

        </div>
    </div>
</template>
<script>
import { stepsSignUp } from "@/stores/stepsSignUp";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from "@/stores/auth";
import { toast } from "vue3-toastify";
export default {
    props: {
        next: {
            type: Function,
        },
        back: {
            type: Function,
        },
        rol: {
            type: String,
        },
        gobackError: {
            type: Function,
        },


    },
    setup(props) {
        let rol = props.rol
        const storeData = stepsSignUp()
        const form = storeData.formData
        const router = useRouter();
        const route = useRoute();
        const codeEmail = ref(null)
        const errorCode = ref(false)
        const auth = useAuthStore()
        const loading = ref(false)
        const nextStep = () => {
            props.next()
        }
        const backStep = () => {
            props.back()
        }
        const sendResendEmail = async () => {
            /* await router.push({ name: 'resend-email' }) */

        }
        const backError = () => {
            props.gobackError()

        }
        const sendRecover = async () => {
            loading.value = true
            try {
                let data = {
                    email: form.email
                }
                let res = await auth.resendEmail(data)
                if (res.status == 200) {
                    loading.value = false
                    toast('Email succesfully resent', {
                        type: "success",
                    });
                }

            } catch (error) {
                loading.value = false
                toast(error.response.data.message || "Your request could not be sent", {
                    type: "error",
                });
            }
        }
        const verifiedCode = async () => {
            console.log('form', form)
            if (!codeEmail.value) {
                errorCode.value = true
                toast('Campo Obligarotio', {
                    type: "error",
                });
                return
            } else {
                errorCode.value = false
            }
            loading.value = true
            try {
                let res = await auth.verifiedCodeEmail({ code: codeEmail.value, email: form.email })
                if (res.data.access_token) {
                    localStorage.setItem('updateUser', res.data.access_token)
                    props.next()
                }
                console.log('res', res)
            } catch (error) {
                loading.value = false
                toast(error.response?.data?.message || 'error', {
                    type: "error",
                });
            } finally {
                loading.value = false
            }

        }
        onMounted(() => {
            console.log('se moneto el paso 3', route.query?.error)

        })
        return {
            nextStep,
            rol,
            form,
            backStep,
            sendResendEmail,
            route,
            backError,
            codeEmail,
            verifiedCode,
            errorCode,
            loading,
            sendRecover
        };
    },
};
</script>