<template>
    <div v-if="loading" class=" left-0 top-0 absolute w-full h-full flex justify-center items-center">
        <div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
            <div class="absolute -left-[30px] z-10  h-[80px] w-[80px] ">
                <div class="animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff"
                        stroke-width="0" viewBox="0 0 16 16">
                        <path
                            d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                        </path>
                    </svg>
                </div>
                <p class=" text-base-gray font-medium pl-2 ">Loading...</p>
            </div>
        </div>
    </div>
    <div v-else class="flex-1 flex flex-col justify-between py-12 px-4 sm:px-6 h-full lg:flex-none lg:px-20 xl:px-24">
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
                        <div class="space-y-7">
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
import { onMounted, ref, computed } from 'vue'
import { stepsSignUp } from "@/stores/stepsSignUp";
import { toast } from "vue3-toastify";
import { useRouter, useRoute } from 'vue-router'
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
        const form = ref({ code: '' })
        const route = useRoute();
        const path = ref(computed(() => route.name))
        const router = useRouter()
        const loading = ref(false)
        const nextStep = () => {
            if (!form.value.code) {
                toast('Campo Obligarotio', {
                    type: "error",
                });
                return
            }
            loading.value = true
            setTimeout(async () => {
                await  router.push({ path: `/login/${route.params.rol}` })
                router.go()
                loading.value = false
            }, 2000);

            /*  props.next() */
        }
        const backStep = () => {
            props.back()
        }
        onMounted(() => {
            console.log('path', route.params.rol)

        })
        return {
            nextStep,
            backStep,
            form,
            loading
        };
    },
};
</script>