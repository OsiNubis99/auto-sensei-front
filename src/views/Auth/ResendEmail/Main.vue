<template>
    <div class="max-w-4xl mx-auto  mt-24">
        <div class="flex flex-col items-center justify-center  p-4 space-y-4 antialiased text-gray-900 bg-gray-100">
            <div class="w-full px-8 max-w-lg space-y-6 bg-white rounded-md py-16">
                <template v-if="message">
                    <div class="relative flex  flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
                        <div class="max-w-xl px-5 text-center">
                            <h2 class="mb-2 text-[42px] font-bold text-zinc-800">Check your inbox</h2>
                            <p class="mb-2 text-lg text-zinc-500">
                                We have sent you a link to verify the email.
                                <br>
                                <span class="font-medium text-indigo-500">{{ formEmail }}</span>.
                            </p>
                            <button @click="resendEmail"
                                class="mt-3 bg-primary inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-black shadow-md shadow-indigo-500/20 hover:bg-indigo-700">Resend</button>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div v-if="loading" class="  w-full h-full flex justify-center items-center">
                        <div class=" h-full flex justify-center item-center my-7 w-full text-indigo-700">
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
                    <div v-else>
                        <h1 class=" mb-6 text-3xl font-bold text-center">
                            Don't worry
                        </h1>
                        <p class="text-center mb-5 mx-12">We are here to help you verify your email again. Enter email
                            address.</p>
                        <div class="space-y-6 w-ful">
                            <input v-model="formEmail"
                                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-100"
                                type="email" name="email" placeholder="Email address">

                        </div>
                    </div>
                    <div>
                        <button :disabled="loading" @click="sendRecover"
                            :class="loading ? 'bg-[#c3c3c3] text-white' : 'bg-primary'"
                            class="w-full px-4 py-2 font-medium text-center text-white bg-indigo-600 transition-colors duration-200 rounded-md  hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
                            Send
                        </button>
                    </div>
                </template>
                <div class="text-sm text-gray-600 items-center flex justify-between">
                    <button @click="back"
                        class="text-gray-800 cursor-pointer hover:text-blue-500 inline-flex items-center ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                clip-rule="evenodd" />
                        </svg>
                        Back
                    </button>
                    <p class="hover:text-blue-500 cursor-pointer">Need help?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch, computed, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from "@/stores/auth";
import { regexEmail } from '../../../utils/Regex'
import { toast } from "vue3-toastify";
export default {
    components: {
    },
    setup() {
        const route = useRoute();
        const router = useRouter()
        const storeAuth = useAuthStore()
        const formEmail = ref('')
        const loading = ref(false)
        const message = ref('')

        const back = () => {
            router.go(-1)
        }

        const sendRecover = async () => {
            if (!formEmail.value) {
                toast('Required field', {
                    type: "error",
                });
                return
            } else if (!regexEmail.test(formEmail.value.trim())) {
                toast('You must enter a valid email', {
                    type: "error",
                });
                return
            }
            loading.value = true
            try {
                let data = {
                    email: formEmail.value
                }
                let res = await storeAuth.resendEmail(data)
                console.log('res', res)
                if (res.status == 200) {
                    loading.value = false
                    message.value = 'Se ha enviado un correo de cambiar password'
                }

            } catch (error) {
                loading.value = false
                message.value = ''
            }
        }
        const resendEmail = () => {
            message.value = null
            formEmail.value = null
        }
        onMounted(() => {
        })
        return {
            back,
            formEmail,
            sendRecover,
            loading,
            message,
            resendEmail
        };
    },
};
</script>