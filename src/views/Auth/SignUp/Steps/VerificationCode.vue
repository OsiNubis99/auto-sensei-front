<template>
    <div class="flex-1 flex flex-col justify-between py-12 px-4 sm:px-6 h-full lg:flex-none lg:px-20 xl:px-24">
        <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 h-full lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full ">
                <div>
                    <h2 class="mt-6 text-4xl font-bold text-base-black text-center mb-5 ">Enter Verification Code</h2>
                    <p class=" text-sm font-normal text-[#666] text-center  ">A text message with a 6-digit code has
                        been sent to (628) 267-9126
                    </p>
                </div>
                <div class="mt-8">
                    <div class="mt-6">
                        <form class="space-y-7">
                            <div>
                                <label htmlFor="email" class="block text-sm font-medium text-gray-700">
                                    Code
                                </label>
                                <div class="mt-1">
                                    <input id="email" name="email" type="email" autoComplete="email"
                                        placeholder="Enter the 6-digit code"
                                        class="appearance-none block w-full px-3 py-2 border border-[#E0E0E0] rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <button @click="nextStep"
                                    class="w-full btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <p class=" text-xs font-normal text-[#666]  ">
                Didn’t receive the code?
            <p @click="backStep" class="font-medium underline text-base-black hover:text-indigo-500">
                Resend Code
            </p>
            </p>
        </div>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import { stepsSignUp } from "@/stores/stepsSignUp";
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
        const formAccount = storeData.formAccount
        const formCreate = storeData.formData
        const nextStep = () => {
            props.next()
        }
        const backStep = () => {
            props.back()
        }
        onMounted(() => {
            console.log('formAccount', formAccount)
            console.log('formCreate', formCreate)

        })
        return {
            nextStep,
            backStep
        };
    },
};
</script>