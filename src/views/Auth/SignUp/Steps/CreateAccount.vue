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
    <div v-else
        class="flex-1 flex flex-col overflow-auto justify-between py-12 px-4 h-full sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div
            class="flex-1 flex flex-col  h-creen gap-6 md:gap-0 justify-center md:py-12 px-4 sm:px-6 md:h-full lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full ">
                <div class="animate-fade-up  animate-ease-in-out animate-delay-100">
                    <h2 class="mt-6 md:text-4xl font-bold text-base-black text-center mb-5 ">Create Your Dealer Account
                    </h2>
                    <p class=" text-sm font-normal text-[#666] text-center  ">Auction your car to dealers right from
                        your home.</p>
                </div>

                <div class="mt-8">
                    <div class="mt-6 space-y-7 ">
                        <div v-if="rol == 'dealers'" class="flex flex-col md:flex-row gap-6 justify-between items-center">
                            <div class="w-full animate-fade-up  animate-ease-in-out animate-delay-200">
                                <label htmlFor="name" class="block text-sm font-medium text-gray-700">
                                    Legal First Name*
                                </label>
                                <div class="mt-1">
                                    <input name="name" type="text" v-model="form.name" placeholder="Alex"
                                        :class="invalid?.name ? 'border-error ' : 'border-[#E0E0E0]'"
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
                        <div class="animate-fade-up  animate-ease-in-out animate-delay-300">
                            <label htmlFor="email" class="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div class="mt-1">
                                <input name="email" type="email" v-model="form.email" autoComplete="email"
                                    :class="invalid?.email ? 'border-error' : 'border-[#E0E0E0]'"
                                    placeholder="your@email.com"
                                    class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        <div class="space-y-1 animate-fade-up  animate-ease-in-out animate-delay-600">
                            <label htmlFor="password" class="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div class="mt-1">
                                <input name="password" type="password" v-model="form.password" placeholder="*********"
                                    :class="invalid?.password ? 'border-error' : 'border-[#E0E0E0]'"
                                    class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        <div class="space-y-1 animate-fade-up  animate-ease-in-out animate-delay-800">
                            <label htmlFor="confirmationpassword" class="block text-sm font-medium text-gray-700">
                                Confirmation Password
                            </label>
                            <div class="mt-1">
                                <input name="confirmationpassword" type="password" v-model="form.confirmPassword"
                                    placeholder="*********"
                                    :class="invalid?.confirmPassword ? 'border-error' : 'border-[#E0E0E0]'"
                                    class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <button @click="nextStep"
                                class="animate-fade-up  animate-ease-in-out animate-delay-900 w-full btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Create Account
                            </button>
                        </div>
                        <div class="text-sm mt-6 text-center animate-fade-up  animate-ease-in-out animate-delay-800">
                            <RouterLink to="#" class="font-medium underline text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="text-center">
            <p class=" text-xs font-normal text-[#666]">
                By clicking “Log In”, you acknowledge that you have <br>
                read & agreed to AutoSensei User's
                <RouterLink to="#" class="font-medium underline text-base-black hover:text-indigo-500">
                    Terms & Conditions.
                </RouterLink>
            </p>
        </div>
    </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, onUpdated, ref } from 'vue'
import { createAccount } from '../../../../validations/validationSignUp'
import { stepsSignUp } from "@/stores/stepsSignUp";
import { useAuthStore } from "@/stores/auth";
import { toast } from "vue3-toastify";
export default {
    props: {
        next: {
            type: Function,
        },
        rol: {
            type: String,
        },

    },
    setup(props) {
        let rol = ref()
        const invalid = ref()
        const storeData = stepsSignUp()
        const storeAuth = useAuthStore()
        const loading = ref(false)
        const form = storeData.formData
        const nextStep = async () => {
            invalid.value = createAccount(form, rol.value);
            if (Object.entries(invalid.value).length > 0) {
                toast(invalid?.value?.email || invalid.value.password || invalid.value.confirmPassword, {
                    type: "error",
                });
                return
            }

            console.log('invalid.value', invalid.value)
            if (Object.entries(invalid.value).length === 0) {
                loading.value = true
                try {
                    console.log('form', form)

                    let typeSeller = {
                        email: form.email,
                        password: form.password,
                        seller: {
                            firstName: '',
                            lastName: '',
                        },
                    }
                    let typeDealer = {
                        email: form.email,
                        password: form.password,
                        dealer: {
                            name: form.name,
                        },
                    }

                    let resRol = rol.value == 'dealers' ? typeDealer : typeSeller
                    console.log('resRol', resRol)
                    let res = await storeAuth.register(resRol)
                    if (res.data.status == 400) {
                        toast(res?.data?.message || 'error al cargar', {
                            type: "error",
                        });
                        loading.value = false
                    } else {
                        props.next()
                        loading.value = false
                    }
                } catch (error) {
                    toast(error?.response?.data?.message || 'error al cargar', {
                        type: "error",
                    });
                    loading.value = false
                }
            }
        }
        onUpdated(() => {
            rol.value = props.rol
            console.log('se monto onUpdated')
        })
        onMounted(() => {
            rol.value = props.rol
            console.log('se monto onMounted')
        })
        return {
            nextStep,
            rol,
            form,
            invalid,
            loading
        };
    },
};
</script>