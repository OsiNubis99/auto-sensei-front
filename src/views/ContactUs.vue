<template>
    <div class=" mt-20 md:mt-40 flex justify-center  items-center gap-10 md:p-5 flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="43" viewBox="0 0 60 43" fill="none">
            <path
                d="M38.0808 13.2498C38.6829 13.3809 39.0007 13.3008 39.076 13.1988C38.2202 12.1448 35.7366 12.1691 35.0202 13.3906C34.9811 13.6359 35.1233 13.7525 35.3045 13.7161C35.9818 12.9584 37.6543 12.9511 38.0808 13.2498Z"
                fill="#0B1107" />
            <path
                d="M36.6493 14.4797C36.3984 14.6934 37.2821 14.6594 37.8423 14.6521C38.4026 14.6449 38.5281 14.7226 38.7929 14.844C39.0577 14.9654 39.4033 14.7226 39.264 14.5477C38.8152 13.9916 37.3155 13.9163 36.6493 14.4773V14.4797Z"
                fill="#0B1107" />
            <path
                d="M40.0804 5.97431C24.6182 -1.80187 7.49185 -1.17774 1.82767 7.37072C-3.8365 15.9192 4.10505 29.1523 19.5645 36.9309C35.0267 44.7071 52.153 44.083 57.8172 35.5345C63.4813 26.986 55.5398 13.7529 40.0804 5.97431ZM31.612 33.6888C22.4328 31.1898 26.1401 22.2601 27.1436 20.786C27.1436 20.786 25.7583 19.2147 26.2795 17.9179C26.5109 19.052 27.7151 20.7933 28.989 21.4441C29.1144 21.5073 29.5715 21.6821 29.7221 21.296C28.6712 20.7617 27.0321 18.8213 26.9903 17.4637C26.9485 16.1062 28.6768 15.3436 30.235 17.4443C31.7932 19.545 30.6559 20.5091 30.7228 22.9547C30.7897 25.4026 33.4294 28.1347 36.0887 28.8026C35.6455 28.4869 35.0462 27.275 35.0517 26.714C35.3807 27.207 37.0755 28.1129 37.4378 30.4006C37.9173 33.429 34.8566 34.5728 31.6092 33.6888H31.612ZM53.0394 29.6259C51.5509 31.8723 49.031 33.4047 45.8811 34.211C42.9626 34.9565 39.9048 33.4702 39.0406 30.93C38.8873 30.4807 38.7257 30.0363 38.55 29.6016C40.794 30.7333 43.5173 31.3064 45.7808 31.287C42.801 26.7432 44.4233 22.4447 44.5654 20.7714C44.7076 19.0957 43.2163 18.5566 42.1821 19.2633C41.4184 17.9494 39.6818 18.6076 38.9263 19.596C37.8532 20.9948 36.8051 21.823 34.9235 21.8934C35.8462 21.602 37.1786 20.9171 37.5911 20.2954C32.0329 17.9397 31.7987 14.2678 33.4768 12.6552C32.1388 11.8878 30.89 10.0275 32.7716 9.66327C34.865 9.2577 37.0002 10.7075 38.7256 10.3384C39.9605 11.4774 42.3522 15.2271 40.3981 14.6199C40.8553 15.3971 42.3661 17.029 42.7814 17.9859C42.7229 18.1024 42.1877 18.3914 41.672 18.4352C42.8121 18.8771 43.7264 18.5906 43.5703 18.0587C43.4058 17.5026 42.5529 16.3733 41.5996 15.1663C42.3996 14.8822 41.1647 11.4531 38.9236 9.91341C38.5751 5.0029 29.9451 4.29376 24.3283 10.676C24.3283 10.676 25.0001 9.11927 26.3882 7.99C16.4453 2.3145 16.2752 14.1779 12.855 14.2095C17.577 18.4522 19.9185 11.8781 22.8844 12.0894C20.5122 16.4608 22.6641 18.9476 23.9464 21.194C26.3659 25.4415 20.568 29.3369 16.8271 26.2939C9.72184 20.514 6.69463 13.1579 10.0954 8.02886C14.4411 1.4718 27.5785 0.990948 39.4392 6.95787C51.3 12.9248 57.3907 23.0761 53.045 29.6332L53.0394 29.6259ZM40.8191 21.0847C41.6971 20.5893 42.3494 20.7471 42.6588 21.5243C41.895 21.2255 41.3905 21.0993 40.8191 21.0847Z"
                fill="#0B1107" />
        </svg>
        <div class="flex justify-center items-center flex-col md:mt-7">
            <h1 class="text-4xl md:text-6xl pb-5 font-bold  text-center text-base-black">Contact our friendly team </h1>
            <p class=" text-md md:text-base text-base-black">Let’s us know how we can help.</p>
        </div>

        <div class="flex flex-col md:flex-row gap-10 pt-20 pb-10 p-5  max-w-6xl ">
            <div class="w-full">
                <img class="h-full w-full object-cover" :src="bucket + 'public/img/png/mapa.png'" alt="">
            </div>
            <div v-show="loading" class=" w-full h-auto flex justify-center items-center">
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
            <div v-show="!loading" class="flex gap-4 flex-col w-full">
                <div class="flex gap-2 flex-col">
                    <label for="" class="font-medium">Name</label>
                    <input type="text" v-model="form.name" :class="invalid?.name ? 'border-error' : 'border-[#E0E0E0]'"
                        class="appearance-none mblock w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter name">
                </div>
                <div class="flex gap-2 flex-col">
                    <label for="" class="font-medium">Email</label>
                    <input type="text" v-model="form.email"
                        :class="invalid?.email ? 'border-error' : 'border-[#E0E0E0]'"
                        class="appearance-none mblock w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter email">
                </div>
                <div class="space-y-1 custom-phone">
                    <label htmlFor="phoneNumber" class="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input :class="invalid?.phone ? ' !border !border-error' : ''" type="tel" @input="filterinput"
                        v-model="form.phone" class="border rounded-md h-[48px] w-full" id="telephone" />
                </div>
                <div class="flex gap-2 flex-col">
                    <label for="" class="font-medium">Description</label>
                    <textarea v-model="form.description"
                        :class="invalid?.description ? 'border-error' : 'border-[#E0E0E0]'"
                        class="appearance-none  block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        name="textarea" placeholder="Description" rows="10" cols="40"></textarea>
                </div>
                <button @click="sendContact" class="btn bg-primary">Send</button>
            </div>

        </div>


        <div v-if="store?.data?.length > 0" class="w-full  flex flex-col justify-center items-center bg-[#F0F0F0]">
            <div class="flex justify-center items-center flex-col pt-20 mb-5 md:mb-20 ">
                <h1 class="text-3xl md:text-6xl  font-bold  text-center text-base-black">Frequently asked question</h1>
                <p class="text-base-black text-sm pt-2 md:text-base ">Let’s us know how we can help</p>
            </div>
            <div class="md:w-[50%] w-full h-96">
                <div v-for="(faq, index) in store.data" :key="index">
                    <div class="group outline-none h-fit accordion-section mb-5 border-b-[1px] border-[#C2C2C2]"
                        tabindex="1">
                        <div
                            class="group bg-gray-900 flex justify-between  px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
                            <div
                                class=" text-sm md:text-lg text-base-black  flex items-center gap-2 font-semibold transition ease duration-500">
                                <svg class="md:w-[40px] w-[24px] md:h-[40px]" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 29" fill="none">
                                    <g clip-path="url(#clip0_433_147175)">
                                        <path
                                            d="M20.0447 9.26498C19.3555 8.57575 18.5924 8.00344 17.7862 7.52344C16.6847 11.6527 12.8447 13.665 12.6539 13.7573L11.817 14.1819L10.9801 13.7573C10.7893 13.6588 6.98007 11.665 5.86007 7.57267C5.09084 8.04036 4.35238 8.60036 3.68777 9.26498C-0.823005 13.7757 -0.823005 21.1111 3.68777 25.6219C5.94007 27.8742 8.90623 29.0065 11.8662 29.0065C14.8262 29.0065 17.7862 27.8804 20.0447 25.6219C24.5555 21.1111 24.5555 13.7757 20.0447 9.26498ZM6.89392 25.7758C6.217 25.3758 5.577 24.8958 4.99854 24.3111C1.99546 21.3081 1.38007 16.8157 3.14007 13.1911C4.74623 12.3604 6.86315 13.4065 6.8693 15.4373C6.88777 19.4742 10.7401 16.1019 11.8662 19.4742C12.7216 22.0404 9.98315 24.5942 6.88777 25.7696L6.89392 25.7758ZM18.7401 24.3111C18.1493 24.9019 17.5032 25.3819 16.8201 25.7881C15.5032 22.2988 19.6755 20.8711 16.8508 18.0527C14.8693 16.0711 16.457 14.1265 20.3401 12.6927C22.4078 16.3911 21.8847 21.1665 18.7401 24.3111Z"
                                            fill="#0A0A0A" />
                                        <path
                                            d="M11.8172 0.845703C9.37412 0.845703 7.39258 2.82724 7.39258 5.27032C7.39258 9.86109 11.8172 12.1072 11.8172 12.1072C11.8172 12.1072 16.2418 9.85494 16.2418 5.27032C16.2418 2.82724 14.2603 0.845703 11.8172 0.845703ZM11.8172 7.28263C10.7033 7.28263 9.80489 6.38417 9.80489 5.27032C9.80489 4.15647 10.7033 3.25801 11.8172 3.25801C12.931 3.25801 13.8295 4.15647 13.8295 5.27032C13.8295 6.38417 12.931 7.28263 11.8172 7.28263Z"
                                            fill="#0A0A0A" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_433_147175">
                                            <rect width="23.12" height="28.1539" fill="white"
                                                transform="translate(0.308594 0.845703)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="mt-2 font-semibold ">{{ faq.question }}</p>
                            </div>
                            <div
                                class="h-8 w-8  group-focus:text-primary bg-[#E0E0E0] rounded-lg items-center inline-flex justify-center transform transition ease duration-500  group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M10.0006 9.02268L5.8756 13.1477L4.69727 11.9693L10.0006 6.66602L15.3039 11.9693L14.1256 13.1477L10.0006 9.02268Z"
                                        fill="#09121F" />
                                </svg>
                            </div>
                        </div>
                        <div
                            class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
                            <p class="p-2 px-8 text-sm  md:text-base text-base-black text-left">
                                {{ faq.answer }}
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import iconArrow from '../components/icons/iconArrow.vue'
import Heanding from '../components/Headings/Heanding.vue'
import { useRouter, useRoute } from 'vue-router'
import { toast } from "vue3-toastify";
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/intlTelInput.js";
import intlTelInput from "intl-tel-input";
import { useFaqStore } from "@/stores/faq";
import { useContactStore } from "@/stores/contactForm";
import { validationContactUs } from "../validations/validationContactUs";
export default {
    components: {
        iconArrow,
        Heanding,
    },
    setup() {
        const route = useRouter();
        const store = useFaqStore();
        const invalid = ref();
        const telInput = ref();
        const loading = ref(false)
        const contactStore = useContactStore()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const redirectLogin = (redirect) => {
            route.push({ name: 'signup', params: { rol: redirect } })
        }
        const form = ref({
            name: null,
            email: null,
            phone: null,
            description: null,
        })
        const index = async () => {
            try {
                let res = await store.index();
            } catch (error) {
                toast(error?.response?.data?.message, {
                    type: "error",
                });
            }
        };
        const filterinput = (e) => {
            e.target.value = e.target.value.replace(/[^0-9]+/g, '');
            let value = e.target.value;
            form.phoneNumber = value
        }
        const sendContact = async () => {
            invalid.value = validationContactUs(form.value);
            if (Object.entries(invalid.value).length > 0) {
                toast(invalid?.value?.name || invalid.value.email || invalid.value.phone || invalid.value.description, {
                    type: "error",
                    autoClose: 2000,
                });
                return
            }
            loading.value = true
            const formattedNumber = telInput.value.selectedCountryData.dialCode;
            form.value.phone = `+${formattedNumber + form.phoneNumber}`;
            console.log('form.value', form.value)
            try {
                let data = {
                    name: form.value.name,
                    email: form.value.email,
                    phone: form.value.phone,
                    description: form.value.description,
                }
                let res = await contactStore.sendContact(data);
                if (res) {
                    console.log('res', res)
                    toast('Your information has been sent', {
                        type: "success",
                        position: "top-center",
                    });
                }
            } catch (error) {
                toast(error?.response?.data?.message || 'Please try later', {
                    type: "error",
                });
            } finally {
                form.value.name = null
                form.value.email = null
                form.value.phone = null
                form.value.description = null
                const input = document.getElementById("telephone");
                telInput.value = intlTelInput(input, {
                    preferredCountries: ["ca", "in", "us"],
                    // Otros opciones de inicialización si es necesario
                });
                input.addEventListener("countrychange", function (e) {
                    console.log(telInput);
                });
                loading.value = false
            }
            console.log('form', form.value)
        }
        onMounted(() => {
            index();
            const input = document.getElementById("telephone");
            telInput.value = intlTelInput(input, {
                preferredCountries: ["ca", "in", "us"],
                // Otros opciones de inicialización si es necesario
            });
            input.addEventListener("countrychange", function (e) {
                console.log(telInput);
            });
        });
        return {
            iconArrow,
            Heanding,
            redirectLogin,
            store,
            sendContact,
            form,
            invalid,
            filterinput,
            loading,
            bucket
        };
    },
};
</script>