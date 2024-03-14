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
        class="flex-1 flex flex-col overflow-auto md:overflow-hidden justify-between py-12 px-4 h-full sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div
            class="flex-1 flex flex-col  h-creen gap-6 md:gap-0 justify-center md:py-12 px-4 sm:px-6 md:h-full lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full ">
                <div class="animate-fade-up  animate-ease-in-out animate-delay-100">
                    <h2 class="mt-6 text-3xl md:text-4xl font-bold text-base-black text-center md:mb-5 ">Create Your
                        <span v-if="rol == 'dealers'"> Dealer</span> <span v-if="rol !== 'dealers'"> Sellers</span>
                        Account
                    </h2>
                    <p class=" text-sm font-normal text-[#666] text-center  ">Auction your car to <span
                            v-if="rol == 'dealers'"> dealers</span> <span v-if="rol !== 'dealers'"> sellers</span> right
                        from
                        your home.</p>
                </div>
                <div class="mt-8">
                    <div class="mt-6 space-y-7 ">
                        <div v-if="rol == 'dealers'"
                            class="flex flex-col md:flex-row gap-6 justify-between items-center">
                            <div class="w-full animate-fade-up  animate-ease-in-out animate-delay-200">
                                <label htmlFor="name" class="block text-sm font-medium text-gray-700">
                                    Legal First Name*
                                </label>
                                <div class="mt-1">
                                    <input name="name" type="text" v-model="form.firtName" placeholder="Alex"
                                        :class="invalid?.firtName ? 'border-error ' : 'border-[#E0E0E0]'"
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
                        <div class="flex  w-full justify-start dark:bg-gray-950">
                            <div class="flex justify-between items-center gap-2">
                                <label class="relative flex cursor-pointer items-center mb-1 rounded-md">

                                    <input type="checkbox" v-model="form.termsconditions"
                                        :class="form.termsconditions ? 'bg-base-black' : 'bg-white'"
                                        class="peer cursor-pointer appearance-none relative h-4 w-4  dark:bg-gray-100/25 border border-gray-900 dark:border-gray-100 transition-all checked:border-blue-500 checked:bg-blue-500 rounded-md" />
                                    <div
                                        class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20"
                                            fill="currentColor" stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>

                                </label>
                                <div class="flex flex-col relative">

                                    <p class="!text-sm  font-medium text-gray-700">I accept the <RouterLink
                                            to="/terms-conditions" target="_blank"
                                            class="font-medium underline text-base-black hover:text-indigo-500"> terms
                                            and conditions </RouterLink>
                                    </p>
                                    <p class="text-xs text-error absolute whitespace-pre  -bottom-[100%] font-medium text-gray-700"
                                        v-if="invalid?.termsconditions">{{ invalid?.termsconditions }}</p>
                                </div>

                            </div>
                        </div>
                        <div class="!mb-10 !md:m-0">


                            <button @click="nextStep"
                                class="animate-fade-up  animate-ease-in-out animate-delay-900 w-full btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Create Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="text-center">
            <p class="!text-[10px] md:text-xs font-normal text-[#666]">
                By clicking “Create Account”, you acknowledge that you have
                read & agreed to AutoSensei User's
                <RouterLink to="/terms-conditions" target="_blank"
                    class="font-medium underline text-base-black hover:text-indigo-500">
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
            console.log('form.', form)
            invalid.value = createAccount(form, rol.value);
            if (Object.entries(invalid.value).length > 0) {
                toast(invalid?.value?.email || invalid.value.password || invalid.value.confirmPassword || invalid.value.termsconditions, {
                    type: "error",
                    autoClose: 2000,
                });
                return
            }
            if (Object.entries(invalid.value).length === 0) {
                loading.value = true
                try {
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
                            firstName: form.firtName,
                            lastName: form.lastName,
                        },
                    }

                    let resRol = rol.value == 'dealers' ? typeDealer : typeSeller
                    let res = await storeAuth.register(resRol)
                    console.log('res', res)
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
        })
        onMounted(() => {
            rol.value = props.rol
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