<template>
    <div class="flex-1 flex flex-col  justify-between h-full py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 h-full lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full ">
                <div>
                    <h2 class="mt-6 text-4xl font-bold text-base-black text-center mb-5 ">Check Your Email</h2>

                    <p class=" text-sm font-normal text-[#666] text-center  ">We sent an email to
                        <strong>{{ form?.email }}</strong>. <br>
                        Open the email to verify your email address.
                    </p>
                </div>
                <div class="mt-8 flex justify-center items-center flex-col">
                    <img src="../../../../assets/svg/login/verifiqueCard.svg" alt="">
                    <p class=" text-sm mt-6 font-medium mb-5">Click the link in your email to continue</p>
                </div>
            </div>
            <button @click="nextStep"
                class="w-full btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create Account
            </button>
        </div>
        <div class="text-center">
            <p class=" text-xs font-normal text-[#666]  ">
                Didn’t receive the email?
            <p @click="backStep" class="font-medium underline text-base-black hover:text-indigo-500">
                Resend Email
            </p>
            </p>
        </div>
    </div>
</template>
<script>
import { stepsSignUp } from "@/stores/stepsSignUp";
import { onMounted } from "vue";
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

    },
    setup(props) {
        let rol = props.rol
        const storeData = stepsSignUp()
        const form = storeData.formData
        const nextStep = () => {
            props.next()
        }
        const backStep = () => {
            props.back()
        }
        onMounted(() => {
            console.log('form', form)
        })
        return {
            nextStep,
            rol,
            form,
            backStep
        };
    },
};
</script>