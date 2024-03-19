<template>
    <div class="flex-1 flex flex-col  justify-between h-full py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div
            class="flex-1 flex flex-col justify-center py-0 md:py-12 md:px-4 sm:px-6 h-full lg:flex-none lg:px-20 xl:px-24">
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
        <div v-if="route.query?.error !== 'expired'" class="text-center flex justify-center gap-2 md:flex-col">
            <p class=" text-xs font-normal text-[#666]  ">
                Didn’t receive the email? </p>
            <p @click="sendResendEmail"
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
        const nextStep = () => {
            props.next()
        }
        const backStep = () => {
            props.back()
        }
        const sendResendEmail = async () => {
            await router.push({ name: 'resend-email' })
            router.go()
        }
        const backError = () => {
            props.gobackError()

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

            try {
                let res = await auth.verifiedCodeEmail({ code: codeEmail.value, email: form.email })
                if (res.data.access_token) {
                    localStorage.setItem('updateUser', res.data.access_token)
                    props.next()
                }
                console.log('res', res)
            } catch (error) {
                toast(error.response?.data?.message || 'error', {
                    type: "error",
                });
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
            errorCode
        };
    },
};
</script>