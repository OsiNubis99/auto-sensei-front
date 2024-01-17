<template>
    <div class="w-full flex justify-center items-center h-screen  p-6 ">
        <div class="bg-white  w-2/6 shadow-lg mt-7 rounded-xl">
            <div v-if="loading" class="  w-full h-full flex justify-center items-center">
                <div class=" h-full flex justify-center item-center my-7 w-full text-indigo-700">
                    <div class="h-[80px] w-[80px] ">
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
            <div class="p-4 sm:p-7">
                <div v-if="!loading" class="text-center">
                    <div class="flex items-end justify-center mb-8 text-2xl font-bold">
                        <LogoIcon />
                    </div>
                    <h1 class="block text-lg font-bold text-gray-800">Reset Password</h1>
                </div>
                <div class="mt-5">
                    <div class="grid gap-y-4">
                        <div v-if="!loading">
                            <label for="new_password" class="block mb-2 ml-1 text-xs font-semibold ">New
                                password</label>
                            <div class="relative">
                                <input type="password" v-model="formData.password"
                                    class="block w-full px-4 py-3 text-sm  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Enter a new password">
                            </div>
                            <p class="hidden mt-2 text-xs text-red-600" id="new-password-error">Please include a
                                password that
                                complies with the rules to ensure security</p>
                        </div>
                        <div v-if="!loading">
                            <label for="confirmn_new_password" class="block mb-2 ml-1 text-xs font-semibold ">Confirm
                                new password</label>
                            <div class="relative">
                                <input type="password" v-model="formData.confirmPassword"
                                    class="block w-full px-4 py-3 text-sm  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Enter a new password">
                            </div>
                            <p class="hidden mt-2 text-xs text-red-600" id="confirmn_new-password-error">Please
                                include a password that
                                complies with the rules to ensure security</p>
                        </div>
                      <!--   <p v-if="message" class="text-md font-medium text-error"> {{ message }} </p> -->
                        <button :disabled="loading ? true : false" @click="changePassword"
                            :class="loading ? 'bg-base-gray text-white' : 'bg-primary '"
                            class="inline-flex  items-center justify-center gap-2 px-4 py-3 text-sm font-semibold  transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Reset
                            my password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

  
<script >
import { ref, computed, watch, onMounted } from "vue";
import LogoIcon from '@/assets/svg/logo.vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from "@/stores/user";
import { toast } from "vue3-toastify";
export default {
    components: {
        LogoIcon,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const store = useUserStore();
        const token = ref(null)
        const loading = ref(false)
        const message = ref('')
        const formData = ref({
            password: '',
            confirmPassword: ''
        });
        const changePassword = async () => {
            if (formData.value.password == "" || formData.value.confirmPassword == "") {
                toast("Required field", {
                    type: "error",
                });
                return;
            } else if (formData.value.password !== formData.value.confirmPassword) {
                toast("Passwords do not match", {
                    type: "error",
                });
                return
            }
            loading.value = true
            try {
                let data = {
                    token: token.value,
                    payloadData: {
                        password: formData.value.password
                    }
                }
                let res = await store.userData(data)
                if (res.data.message === 'Pasword should be valid') {
                    message.value = res.data.message
                    toast("Verify that your password is 8 characters long containing only characters, numeric digits, lower case and capital letters", {
                        type: "error",
                    });
                    loading.value = false
                } else {
                    loading.value = false
                    token.value = null
                    localStorage.clear()
                    await router.push('/login/sellers')
                   router.go()
                }

            } catch (error) {
                console.log('error', error)
                loading.value = false
            }
        }
        onMounted(() => {
            router.replace({ query: '' })
            token.value = localStorage.getItem('password')
        })
        return {
            LogoIcon,
            changePassword,
            formData,
            loading,
            message
        };
    },
};
</script>