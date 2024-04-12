<template>
    <div class="bg-white flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
        <div v-show="loading"
            class="bg-[#000000a1;] left-0 top-0 fixed w-full h-full z-[100] flex justify-center items-center">
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
        <div class="flex gap-2 md:gap-6">
            <img src="../../../../assets/svg/profile.svg" alt="">
            <div class="flex flex-col ">
                <p class=" font-semibold text-sm md:text-xl">Profile</p>
                <p class=" text-xs md:text-base">Your Profile Information</p>
            </div>
        </div>
        <hr class="border-[#cfcfcf] border-1 w-full ">
        <div class="flex justify-between flex-col md:flex-row w-full  ">
            <div class="flex flex-col md:w-[60%] pb-3 ">
                <p class=" font-semibold text-md md:text-lg">General Information </p>
                <p class="text-xs md:text-base">This will be displayed on the seller's page</p>
            </div>
            <div
                class="flex flex-col  w-full p-4 justify-between gap-5 items-center rounded-lg border-2 border-[#dbdbdb93]">
                <div
                    class="flex w-full flex-col md:flex-row md:items-center justify-between md:gap-3 border-b-2  border-[#dbdbdb93]">
                    <p class=" font-medium text-xs md:text-base ">Full Name</p>
                    <div class="flex items-center">
                        <div v-if="storeUser.type == 1" class="flex gap-1 capitalize text-[#9ca3af] items-center">
                            <p class=" text-xs md:text-base">{{ storeUser.seller?.firstName }}</p>
                            <p class=" text-xs md:text-base">{{ storeUser.seller?.lastName }}</p>
                        </div>
                        <div v-if="storeUser?.type == 2" class="flex gap-1 capitalize text-[#9ca3af] items-center">
                            <p class=" text-xs md:text-base">{{ storeUser.dealer?.firstName }}</p>
                            <p class=" text-xs md:text-base">{{ storeUser.dealer?.lastName }}</p>
                        </div>
                    </div>
                </div>

                <div
                    class="flex w-full flex-col md:flex-row md:items-center justify-between md:gap-3 border-b-2  border-[#dbdbdb93]">
                    <p class="  font-medium text-xs md:text-base   ">Email Address</p>
                    <div class="flex justify-between items-center">
                        <div class="flex gap-1 capitalize text-[#9ca3af] items-center">
                            <p class=" text-xs md:text-base">{{ storeUser.email }}</p>
                        </div>
                        <button @click="onOption('email')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                fill="none">
                                <path
                                    d="M8.6 5.07206L11.428 7.90072L4.828 14.5001H2V11.6714L8.6 5.07139V5.07206ZM9.54267 4.12939L10.9567 2.71472C11.0817 2.58974 11.2512 2.51953 11.428 2.51953C11.6048 2.51953 11.7743 2.58974 11.8993 2.71472L13.7853 4.60072C13.9103 4.72574 13.9805 4.89528 13.9805 5.07206C13.9805 5.24883 13.9103 5.41837 13.7853 5.54339L12.3707 6.95739L9.54267 4.12939Z"
                                    fill="#0B1107" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div v-show="activeInputEmail" class="w-full">
                    <label htmlFor="email" class="block text-xs md:text-sm font-medium text-gray-700">
                        New Email Address
                    </label>
                    <div class="mt-1">
                        <input id="email" name="email" type="email" v-model="form.email" autoComplete="email"
                            placeholder="your@email.com"
                            class="appearance-none animate-fade-up  animate-ease-in-out animate-delay-600 block w-full px-3 py-2 border border-[#E0E0E0] rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div class="flex items-center pt-4 justify-end gap-2 w-full">
                        <button @click="offOption('email')"
                            class="btn  btn-mobil-account bg-white border border-[#E0E0E0]">Cancel</button>
                        <button @click="update('email')" class="btn btn-mobil-account bg-blue-dark text-primary ">Update
                            Email</button>
                    </div>
                </div>
                <div
                    class="flex w-full flex-col md:flex-row md:items-center justify-between md:gap-3 border-b-2  border-[#dbdbdb93]">
                    <p class="  font-medium text-xs md:text-base ">Password</p>
                    <div class="flex items-center justify-between">
                        <div class="flex gap-1 text-xs md:text-base capitalize text-[#9ca3af] items-center">
                            *************
                        </div>
                        <button @click="onOption('password')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                fill="none">
                                <path
                                    d="M8.6 5.07206L11.428 7.90072L4.828 14.5001H2V11.6714L8.6 5.07139V5.07206ZM9.54267 4.12939L10.9567 2.71472C11.0817 2.58974 11.2512 2.51953 11.428 2.51953C11.6048 2.51953 11.7743 2.58974 11.8993 2.71472L13.7853 4.60072C13.9103 4.72574 13.9805 4.89528 13.9805 5.07206C13.9805 5.24883 13.9103 5.41837 13.7853 5.54339L12.3707 6.95739L9.54267 4.12939Z"
                                    fill="#0B1107" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div v-show="activeInputPassword" class="w-full">
                    <div class="mt-1 ">
                        <div class="animate-fade-up   animate-ease-in-out animate-delay-600">
                            <label htmlFor="password" class="block text-xs md:text-sm font-medium text-gray-700">
                                New Password
                            </label>
                            <div class="mt-1">
                                <input v-model="form.password" name="password" type="password" placeholder="*********"
                                    class="appearance-none block w-full px-3 py-2  border border-[#E0E0E0]   rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        <div class="animate-fade-up mt-4  animate-ease-in-out animate-delay-800">
                            <label htmlFor="confirmationpassword"
                                class="block text-xs md:text-sm font-medium text-gray-700">
                                Confirmation Password
                            </label>
                            <div class="mt-1">
                                <input v-model="form.confirmPassword" name="confirmPassword" type="password"
                                    placeholder="*********"
                                    class="appearance-none block w-full px-3 py-2  border border-[#E0E0E0]   rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center pt-4 justify-end gap-2 w-full">
                        <button @click="offOption('password')"
                            class="btn btn-mobil-account bg-white border border-[#E0E0E0]">Cancel</button>
                        <button @click="update('password')"
                            class="btn btn-mobil-account bg-blue-dark text-primary ">Update
                            Password
                        </button>
                    </div>
                </div>

                <div v-if="storeUser.type == 1"
                    class="flex w-full flex-col md:flex-row md:items-center justify-between md:gap-3 ">
                    <p class="font-medium text-xs md:text-base  ">Mobile Number</p>
                    <div class="flex items-center justify-between">
                        <div class="flex gap-1 capitalize text-[#9ca3af] text-xs md:text-base items-center">
                            <p>{{ storeUser?.seller?.phone }}</p>
                        </div>
                        <button @click="onOption('number')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                fill="none">
                                <path
                                    d="M8.6 5.07206L11.428 7.90072L4.828 14.5001H2V11.6714L8.6 5.07139V5.07206ZM9.54267 4.12939L10.9567 2.71472C11.0817 2.58974 11.2512 2.51953 11.428 2.51953C11.6048 2.51953 11.7743 2.58974 11.8993 2.71472L13.7853 4.60072C13.9103 4.72574 13.9805 4.89528 13.9805 5.07206C13.9805 5.24883 13.9103 5.41837 13.7853 5.54339L12.3707 6.95739L9.54267 4.12939Z"
                                    fill="#0B1107" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div v-show="activeInputNumber" class="w-full">
                    <div class="mt-1 ">
                        <div class="animate-fade-up   animate-ease-in-out animate-delay-600">
                            <label htmlFor="password" class="block text-xs md:text-sm font-medium text-gray-700">
                                New Phone
                            </label>
                            <div class="mt-1">
                                <input v-model="form.phone" name="password" type="number"
                                    class="appearance-none block w-full px-3 py-2  border border-[#E0E0E0]   rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center pt-4 justify-end gap-2 w-full">
                        <button @click="offOption('phone')"
                            class="btn btn-mobil-account bg-white border border-[#E0E0E0]">Cancel</button>
                        <button @click="update('phone')" class="btn btn-mobil-account bg-blue-dark text-primary ">Update
                            Phone</button>
                    </div>
                </div>
                <div
                    class="flex w-full flex-col md:flex-row md:items-center justify-between md:gap-3 border-b-2  border-[#dbdbdb93]">
                    <p class="font-medium text-xs md:text-base">Address</p>
                    <div class="flex items-center justify-between">
                        <div class="flex gap-1 text-xs md:text-base capitalize text-[#9ca3af] items-center">
                            {{ storeUser?.address?.country }}, {{ storeUser?.address?.state }} {{
            storeUser?.address?.city
        }}
                        </div>
                        <button @click="onOption('address')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                fill="none">
                                <path
                                    d="M8.6 5.07206L11.428 7.90072L4.828 14.5001H2V11.6714L8.6 5.07139V5.07206ZM9.54267 4.12939L10.9567 2.71472C11.0817 2.58974 11.2512 2.51953 11.428 2.51953C11.6048 2.51953 11.7743 2.58974 11.8993 2.71472L13.7853 4.60072C13.9103 4.72574 13.9805 4.89528 13.9805 5.07206C13.9805 5.24883 13.9103 5.41837 13.7853 5.54339L12.3707 6.95739L9.54267 4.12939Z"
                                    fill="#0B1107" />
                            </svg>
                        </button>
                    </div>


                </div>
                <div v-show="activeInputAddress" class="w-full">
                    <div class="mt-1 grid md:grid-cols-2 gap-4 ">
                        <div class="grid grid-cols-8 gap-1 col-span-2">
                            <div class="animate-fade-up   animate-ease-in-out animate-delay-600 col-span-3">
                                <label htmlFor="line1" class="block text-xs md:text-sm font-medium text-gray-700">
                                    Linea 1
                                </label>
                                <div class="mt-1">
                                    <input v-model="form.line1" name="line1" type="text"
                                        placeholder="Street address or P.O. Box"
                                        class="appearance-none block w-full px-3 py-2  border border-[#E0E0E0]   rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div class="animate-fade-up   animate-ease-in-out animate-delay-600 col-span-3">
                                <label htmlFor="line2" class="block text-xs md:text-sm font-medium text-gray-700">
                                    Linea 2
                                </label>
                                <div class="mt-1">
                                    <input v-model="form.line2" name="line2" type="text"
                                        placeholder="Apt, suite, unit, building, floor, etc."
                                        class="appearance-none block w-full px-3 py-2  border border-[#E0E0E0]   rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div class="animate-fade-up   animate-ease-in-out animate-delay-600 col-span-2">
                                <label htmlFor="zip" class="block text-xs md:text-sm font-medium text-gray-700">
                                    Zip Code
                                </label>
                                <div class="mt-1">
                                    <input v-model="form.zipCode" name="zip" type="number" placeholder="014747"
                                        class="appearance-none block w-full px-3 py-2  border border-[#E0E0E0]   rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                        </div>

                        <div class="w-full flex flex-col gap-2 relative">
                            <label class=" text-sm md:text-base " for="">Province</label>
                            <select v-model="form.province" @change="onChangeGetProvince($event)"
                                class=" border text-[#858585] md:p-3  text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">

                                <option v-if="!form.getState" selected>Laoding city... </option>
                                <option v-else selected hidden>Select province</option>
                                <template v-for="(state, index) in form.getState" :key="index">
                                    <option class="text-xs md:text-sm" :value="JSON.stringify(state)">{{ state.iso2 }} |
                                        {{
            state.name }}</option>
                                </template>
                            </select>
                            <div v-if="!form.getState" class="absolute text-sm text-[#858585] bottom-2 left-4 ">Laoding
                                province...
                            </div>
                        </div>
                        <div class="w-full flex flex-col gap-2 relative">
                            <label class=" text-sm md:text-base " for="">City</label>
                            <select v-model="form.city" @change="onChangeGetCity($event)"
                                :disabled="loadingCountrys || !form.getCities ? true : false"
                                class=" border text-[#858585] md:p-3  text-gray-900 text-xs md:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">

                                <option v-if="loadingCountrys" selected>Laoding city... </option>
                                <option v-else selected hidden>Select city </option>
                                <template v-for="(cities, index) in form.getCities" :key="index">
                                    <option class="text-xs md:text-sm" :value="JSON.stringify(cities)">{{ cities.name }}
                                    </option>
                                </template>
                            </select>
                            <div v-if="loadingCountrys" class="absolute text-sm text-[#858585] bottom-2 left-4 ">Laoding
                                city...</div>
                        </div>
                    </div>
                    <div class="flex items-center pt-4 justify-end gap-2 w-full">
                        <button @click="offOption('address')"
                            class="btn btn-mobil-account bg-white border border-[#E0E0E0]">Cancel</button>
                        <button @click="update('address')"
                            class="btn btn-mobil-account bg-blue-dark text-primary ">Update
                            Address
                        </button>
                    </div>
                </div>
               
            </div>

        </div>

        <div class="flex justify-between w-full flex-col md:flex-row  ">
            <div v-if="storeUser.type == 1" class="flex flex-col md:w-[60%] ">
                <p class="font-semibold text-xs md:text-lg">Driver License</p>
                <p class="text-xs md:text-base">This will be displayed on the seller's page</p>
            </div>
            <div v-if="storeUser.type == 2" class="flex flex-col md:w-[60%] ">
                <p class=" font-semibold text-md md:text-lg">Dealer Profile</p>
                <p class=" text-xs md:text-base mb-3">This is preview your drive license</p>
            </div>
            <div v-if="storeUser.type == 1"
                class="flex space-y-2  w-full p-4 justify-between items-end mt-4 relative group rounded-lg border-2 border-[#dbdbdb93]">
                <template v-if="form.driverPreview">
                    <img class="w-4/5 h-[220px] object-cover " :src="form.driverPreview" alt="">
                </template>

                <template v-else>
                    <img v-if="storeUser.seller?.driverLicense"
                        class="w-4/5  object-contain md:object-cover md:h-[220px]"
                        :src="bucket + storeUser.seller?.driverLicense" alt="">
                    <img v-else class="w-4/5  md:h-[220px] object-contain md:object-cover "
                        src="../../../../assets/img/png/exampleLicencie.png" alt="">

                </template>


                <button @click="onOption('driver')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path
                            d="M8.6 5.07206L11.428 7.90072L4.828 14.5001H2V11.6714L8.6 5.07139V5.07206ZM9.54267 4.12939L10.9567 2.71472C11.0817 2.58974 11.2512 2.51953 11.428 2.51953C11.6048 2.51953 11.7743 2.58974 11.8993 2.71472L13.7853 4.60072C13.9103 4.72574 13.9805 4.89528 13.9805 5.07206C13.9805 5.24883 13.9103 5.41837 13.7853 5.54339L12.3707 6.95739L9.54267 4.12939Z"
                            fill="#0B1107" />
                    </svg>
                </button>
            </div>
            <div v-if="storeUser.type == 2"
                class="flex flex-col  w-full p-4 justify-between gap-5 items-center rounded-lg border-2 border-[#dbdbdb93]">
                <div
                    class="flex w-full flex-col md:flex-row md:items-center justify-between md:gap-3 border-b-2  border-[#dbdbdb93]">
                    <p class=" font-medium text-xs md:text-base ">Dealer Name</p>
                    <div class="flex items-center font-medium text-xs md:text-base">
                        <div class="flex gap-1 capitalize text-[#9ca3af] items-center">
                            <p>{{ storeUser.dealer?.name }}</p>
                        </div>
                    </div>
                </div>

                <div
                    class="flex w-full flex-col md:flex-row md:items-center justify-between md:gap-3 border-b-2  border-[#dbdbdb93]">
                    <p class="font-medium text-xs md:text-base">OMVIC Registration Number</p>
                    <div class="flex items-center font-medium text-xs md:text-base ">
                        <div class="flex gap-1 capitalize text-[#9ca3af] items-center">
                            <p>{{ storeUser.dealer?.omvic }}</p>
                        </div>
                    </div>

                </div>


                <div class="flex w-full flex-col md:flex-row md:items-center md:justify-between md:gap-3 ">
                    <p class="font-medium text-xs md:text-base">Mobile Number</p>
                    <div class="flex items-center font-medium text-xs md:text-base ">
                        <div class="flex gap-1 capitalize text-[#9ca3af] items-center">
                            <p>{{ storeUser?.dealer?.phone }}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div v-show="activeInputDriver"
            class="flex items-center pt-4 justify-end gap-2 w-full animate-fade-up   animate-ease-in-out animate-delay-600">
            <div class="flex items-center gap-3">
                <button @click="offOption('driver')"
                    class="btn btn-mobil-account bg-white border border-[#E0E0E0]">Cancel</button>
                <label class="btn btn-mobil-account bg-blue-dark text-primary    cursor-pointer">
                    <span class="  font-medium leading-normal">Upload Driver License</span>
                    <input type="file" accept="image/*" @change="previewImage" class="hidden">
                </label>
            </div>
        </div>
        <div class="flex w-full justify-end items-center">
            <button v-if="form.driverPreview && form.driveImg" @click="update('driver')"
                class="btn btn-mobil-account bg-blue-dark text-primary ">Update Phone
            </button>
        </div>

    </div>
    <div v-show="activeModal"
        class="fixed p-10 inset-0 flex items-center z-50 justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-md overflow-auto  bg-white rounded-lg shadow-xl">
            <div class="p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p class="text-xl text-white">Change Email Confirmation</p>
                <svg @click="activeModal = false" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8  cursor-pointer"
                    fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="p-4">
                <p class="text-2xl text-center font-semibold">Check Your Email</p>
                <p class="text-center">
                    We sent an email to <strong>{{ form?.email }} </strong> <br>
                    Open the email to verify your email address.
                </p>
                <div class="mt-8 flex justify-center items-center flex-col">
                    <img src="@/assets/svg/login/verifiqueCard.svg" alt="">
                    <p class=" text-sm mt-6 font-medium mb-5">Didn’t receive the email? Resend Email</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed, onUpdated } from "vue";
import { useAuthStore } from "@/stores/auth";
import { toast } from "vue3-toastify";
import { regexEmail } from "../../../../utils/Regex";
import { useUserStore } from "@/stores/user";
import { useStoreFile } from "@/stores/uploader";
import { usePayments } from "@/stores/payments";
export default {
    props: {
        dataUser: {
            type: Object
        },
        getProfile: {
            type: Function
        }
    },
    setup(props) {
        const storeUser = (props.dataUser)
        const activeInputEmail = ref(false)
        const activeInputPassword = ref(false)
        const activeInputNumber = ref(false)
        const activeInputDriver = ref(false)
        const activeInputAddress = ref(false)
        const storeProfile = useUserStore()
        const storeFile = useStoreFile()
        const countrys = usePayments()
        const loadingCountrys = ref(false)
        const auth = useAuthStore()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const form = ref({
            email: null,
            password: null,
            confirmPassword: null,
            phone: null,
            driverPreview: null,
            driveImg: null,
            line1: null,
            line2: null,
            zipCode: null,
            province: null,
            city: null,
            getState: null,
            getCities: null
        })
        const loading = ref(false)
        const activeModal = ref(false)
        const onOption = (optionInput) => {
            switch (optionInput) {
                case 'email':
                    activeInputEmail.value = true
                    break;
                case 'password':
                    activeInputPassword.value = true
                    break;
                case 'number':
                    activeInputNumber.value = true
                    break;
                case 'driver':
                    activeInputDriver.value = true
                    break;
                case 'address':
                    activeInputAddress.value = true
                    break;

                default:
                    break;
            }
        }
        const offOption = (optionInput) => {
            form.value.email = null
            form.value.password = null
            form.value.confirmPassword = null
            form.value.phone = null
            form.value.driverPreview = null
            form.value.driveImg = null
            switch (optionInput) {
                case 'email':
                    activeInputEmail.value = false
                    break;
                case 'password':
                    activeInputPassword.value = false
                    break;
                case 'phone':
                    activeInputNumber.value = false
                    break;
                case 'driver':
                    activeInputDriver.value = false
                    break;
                case 'address':
                    activeInputAddress.value = false
                    break;
                default:
                    break;
            }
        }

        const previewImage = (event) => {
            var input = event.target;
            var maxfilesize = 1024 * 1024  // 1 Mb
            var filesize = input.files[0].size
            let convertion = (input.files[0].size / (1024 * 1024)).toFixed(2);
            if (input.files) {
                if (filesize > maxfilesize) {
                    toast("File too large: " + convertion + "Mb" + ". Maximum size: 1 Mb", {
                        type: "error",
                    });
                    form.value.driverPreview = null
                    form.value.driveImg = null
                } else {
                    loading.value = true
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        form.value.driverPreview = e.target.result;
                        loading.value = false
                    }
                    form.value.driveImg = input.files[0];
                    form.value.driveImg.mb = convertion
                    reader.readAsDataURL(input.files[0]);
                    counter.value += 1
                }
            }
        }
        const update = async (string) => {
            switch (string) {
                case 'email':
                    if (!form.value.email) {
                        toast("Email required", {
                            type: "error",
                        });
                        return
                    } else if (!regexEmail.test(form.value.email.trim())) {
                        toast("Invalid email", {
                            type: "error",
                        });
                        return;
                    }
                    activeModal.value = true
                    break;
                case 'password':
                    if (!form.value.password || !form.value.confirmPassword) {
                        toast("Password required", {
                            type: "error",
                        });
                        return
                    } else if (form.value.password !== form.value.confirmPassword) {
                        toast('Passwords do not match', {
                            type: "error",
                        });
                        return;
                    }
                    loading.value = true
                    try {

                        let update = {
                            password: form.value.password,
                        }
                        let resUpdate = await storeProfile.updateUser(update)
                        if (resUpdate) {
                            props.getProfile()
                        }
                    } catch (error) {
                        toast(error?.response?.data?.message || 'error', {
                            type: "error",
                        });
                        loading.value = false
                    }
                    break;
                case 'phone':
                    if (!form.value.phone) {
                        toast("Phone required", {
                            type: "error",
                        });
                        return
                    }
                    loading.value = true
                    try {
                        let numero = form.value.phone.toString()
                        let update = {

                            seller: {
                                phone: `+${numero}`,
                            },
                        }
                        let resUpdate = await storeProfile.updateUser(update)
                        if (resUpdate) {
                            props.getProfile()
                        }
                    } catch (error) {
                        toast(error?.response?.data?.message || 'error', {
                            type: "error",
                        });
                        loading.value = false
                    }
                    break;
                case 'driver':
                    if (form.value.driveImg) {
                        let data = {
                            file: form.value.driveImg,
                            location: 'test'
                        }

                        loading.value = true
                        try {
                            let resFile = await storeFile.uploaderFile(data)
                            if (resFile.data) {
                                try {
                                    let update = {
                                        seller: {
                                            driverLicense: resFile.data,
                                        },
                                    }
                                    let resUpdate = await storeProfile.updateUser(update)
                                    if (resUpdate) {
                                        props.getProfile()
                                        form.value.driverPreview = null
                                        form.value.driveImg = null
                                    }
                                } catch (error) {
                                    toast(error?.response?.data?.message || 'error al cargar', {
                                        type: "error",
                                    });
                                    loading.value = false
                                }
                            }
                        } catch (error) {
                            toast(error?.response?.data?.message || 'error al cargar', {
                                type: "error",
                            });
                            loading.value = false

                        }
                    }

                    break;
                case 'address':
                    /*  loading.value = true */
                    if (storeUser.type == 1) {
                        if (!form.value.province || !form.value.city || !form.value.line1  || !form.value.zipCode) {
                            toast('Required address fields', {
                                type: "error",
                            });
                            return
                        }
                    }
                    let city = JSON.parse(form.value.city)?.name;
                    let province = JSON.parse(form.value.province)?.name;
                    try {
                        let resUpdate = await storeProfile.updateUser({
                            address: {
                                city: city,
                                country: 'Canada',
                                line1: form.value.line1,
                                line2: form.value.line2,
                                postal_code: form.value.zipCode,
                                state: province
                            }
                        })
                        if (resUpdate) {
                            console.log('resUpdate adreeedasss', resUpdate)
                            props.getProfile()
                        }
                    } catch (error) {
                        console.log('error', error)
                        toast(error?.response?.data?.message || 'error', {
                            type: "error",
                        });
                        loading.value = false
                    }
                    console.log('form.value', form.value)
                    break;
                default:
                    break;
            }
        }
        const getCountry = async () => {
            try {
                const res = await countrys.getCountry()
                form.value.getState = res.data
                if (form.value.province) {
                    let resCountry = form.value.getState.filter((c) => c.name == form.value.province)
                    form.value.province = JSON.stringify(resCountry[0])
                    await onChangeGetProvince(resCountry)
                }
            } catch (error) {

            }
        }
        const onChangeGetProvince = async (event) => {
            form.value.getCities = undefined
            let props = null;
            if (event?.target?.value) {
                props = JSON.parse(event.target.value)
            } else {
                props = event
            }
            loadingCountrys.value = true
            try {
                const res = await countrys.getCountryCities(props.iso2 ? props.iso2 : props[0].iso2)
                form.value.getCities = res.data
                if (form.value.city) {
                    let resCity = res.data.filter((c) => c.name == form.value.city)
                    console.log('resCity', resCity)
                    form.value.city = JSON.stringify(resCity[0])
                }
            } catch (error) {
                loadingCountrys.value = false
            } finally {
                loadingCountrys.value = false
            }

        }
        const onChangeGetCity = async (event) => {
            let value = JSON.parse(event.target.value)
            /* form.value.city = value.name */
            console.log('value', value)
        }
        onMounted(() => {
            getCountry()
            form.value.line1 = auth.userData?.address?.line1
            form.value.line2 = auth.userData?.address?.line2
            form.value.zipCode = auth.userData?.address?.postal_code
            form.value.province = auth.userData?.address?.state
            form.value.city = auth.userData?.address?.city
        })
        return {
            storeUser,
            onOption,
            offOption,
            activeInputEmail,
            activeInputPassword,
            activeInputNumber,
            activeInputDriver,
            update,
            form,
            activeModal,
            previewImage,
            bucket,
            loading,
            activeInputAddress,
            onChangeGetProvince,
            onChangeGetCity,
            loadingCountrys
        };
    },
};
</script>