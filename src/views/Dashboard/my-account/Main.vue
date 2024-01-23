<template>
    <div class="bg=[#F9F9F9] h-screen">
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
        <div>
            <div class="absolute w-full h-[200px] overflow-hidden bg-[#0B1107]">
                <svg class="w-full " xmlns="http://www.w3.org/2000/svg" width="1768" height="260" viewBox="0 0 1768 260"
                    fill="none">
                    <path opacity="0.2"
                        d="M-244.713 -277.057L-486.999 758.702C-356.9 497.892 -38.9499 -21.2623 192.061 -11.3982C480.824 0.931761 -164.304 688.32 75.2107 782.511C266.823 857.864 592.581 203.318 731.509 -133.374C687.698 197.671 645.281 866.416 826.098 893.029C1052.12 926.295 1064.94 -23.957 1219.25 -8.96303C1342.7 3.03212 1314.53 642.392 1285.01 960.573L1707.71 62.9291"
                        stroke="#272D35" stroke-width="132" />
                </svg>
            </div>
            <div class="relative max-w-[85rem] mx-auto z-50 top-[60px] ">
                <Heanding :type="'h3'" :msg="'My Account'" />
                <div class="flex justify-center mt-5 gap-7">
                    <div class="w-2/4  ">
                        <div class="bg-white p-5 shadow-steps">
                            <div class="flex items-center flex-col gap-6 mb-4 relative">
                                <div
                                    class="flex justify-center items-end gap-4 relative group transition-all duration-500 ease-linear">
                                    <div
                                        class=" flex justify-center items-center rounded-lg group-hover:visible group-hover:bg-[#0000009f] transition-all duration-500 ease-linear invisible absolute w-full h-full top-0 ">
                                        <label class="  cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                viewBox="0 0 32 32" fill="none">
                                                <path
                                                    d="M17.2 9.14411L22.856 14.8014L9.656 28.0001H4V22.3428L17.2 9.14278V9.14411ZM19.0853 7.25878L21.9133 4.42944C22.1634 4.17948 22.5024 4.03906 22.856 4.03906C23.2096 4.03906 23.5486 4.17948 23.7987 4.42944L27.5707 8.20144C27.8206 8.45148 27.9611 8.79056 27.9611 9.14411C27.9611 9.49766 27.8206 9.83674 27.5707 10.0868L24.7413 12.9148L19.0853 7.25878Z"
                                                    fill="white" />
                                            </svg>
                                            <input type="file" accept="image/*" @change="previewImage" class="hidden">
                                        </label>

                                    </div>
                                    <img v-if="form.preview" :src="form.preview" alt=""
                                        class="w-36 h-36 object-cover rounded-lg">
                                    <img v-else class="w-36 h-36 rounded-lg object-cover"
                                        :src="bucket + storeUser.userData?.seller?.picture" alt="">

                                </div>
                                <button v-if="form.preview && form.img" @click="updateiMG()"
                                    class="btn  animate-fade-up  animate-ease-in-out animate-delay-600  bg-blue-dark text-primary ">Update
                                    Photo</button>
                                <div class="flex gap-1 items-center  ">
                                    <p class="text-2xl font-semibold capitalize ">{{ storeUser.userData?.seller?.firstName
                                    }}
                                    </p>
                                    <p class="text-2xl font-semibold capitalize ">{{ storeUser.userData?.seller?.lastName }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pt-5 cursor-pointer justify-between py-2">
                                <div class="flex w-full justify-between items-center">
                                    <div class="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <path
                                                d="M15.8327 16.6663H4.16602V17.4997C4.16602 17.7207 4.07822 17.9326 3.92194 18.0889C3.76566 18.2452 3.5537 18.333 3.33268 18.333H2.49935C2.27834 18.333 2.06637 18.2452 1.91009 18.0889C1.75381 17.9326 1.66602 17.7207 1.66602 17.4997V9.16634L3.73268 4.34301C3.86128 4.04301 4.07515 3.78737 4.34773 3.60782C4.62031 3.42828 4.93961 3.33272 5.26602 3.33301H14.7327C15.0588 3.33304 15.3777 3.42876 15.65 3.60828C15.9223 3.78781 16.1359 4.04327 16.2643 4.34301L18.3327 9.16634V17.4997C18.3327 17.7207 18.2449 17.9326 18.0886 18.0889C17.9323 18.2452 17.7204 18.333 17.4993 18.333H16.666C16.445 18.333 16.233 18.2452 16.0768 18.0889C15.9205 17.9326 15.8327 17.7207 15.8327 17.4997V16.6663ZM16.666 10.833H3.33268V14.9997H16.666V10.833ZM3.47935 9.16634H16.5193L14.7335 4.99967H5.26602L3.48018 9.16634H3.47935ZM5.41602 14.1663C5.0845 14.1663 4.76655 14.0346 4.53213 13.8002C4.29771 13.5658 4.16602 13.2479 4.16602 12.9163C4.16602 12.5848 4.29771 12.2669 4.53213 12.0325C4.76655 11.798 5.0845 11.6663 5.41602 11.6663C5.74754 11.6663 6.06548 11.798 6.2999 12.0325C6.53432 12.2669 6.66602 12.5848 6.66602 12.9163C6.66602 13.2479 6.53432 13.5658 6.2999 13.8002C6.06548 14.0346 5.74754 14.1663 5.41602 14.1663ZM14.5827 14.1663C14.2512 14.1663 13.9332 14.0346 13.6988 13.8002C13.4644 13.5658 13.3327 13.2479 13.3327 12.9163C13.3327 12.5848 13.4644 12.2669 13.6988 12.0325C13.9332 11.798 14.2512 11.6663 14.5827 11.6663C14.9142 11.6663 15.2321 11.798 15.4666 12.0325C15.701 12.2669 15.8327 12.5848 15.8327 12.9163C15.8327 13.2479 15.701 13.5658 15.4666 13.8002C15.2321 14.0346 14.9142 14.1663 14.5827 14.1663Z"
                                                fill="#09121F" />
                                        </svg>
                                        <p>Vehicle Sell</p>
                                    </div>
                                    <p class="text-[#858585] ">12 Vehicles</p>
                                </div>
                            </div>
                            <hr class="border-[#cfcfcf] border-1 ">
                            <div class="flex w-full justify-between items-center py-2">
                                <div class="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M14.5833 17.5C13.8098 17.5 13.0679 17.1927 12.5209 16.6457C11.974 16.0987 11.6667 15.3569 11.6667 14.5833C11.6667 13.8098 11.974 13.0679 12.5209 12.5209C13.0679 11.974 13.8098 11.6667 14.5833 11.6667C15.3569 11.6667 16.0987 11.974 16.6457 12.5209C17.1927 13.0679 17.5 13.8098 17.5 14.5833C17.5 15.3569 17.1927 16.0987 16.6457 16.6457C16.0987 17.1927 15.3569 17.5 14.5833 17.5ZM14.5833 15.8333C14.9149 15.8333 15.2328 15.7016 15.4672 15.4672C15.7016 15.2328 15.8333 14.9149 15.8333 14.5833C15.8333 14.2518 15.7016 13.9339 15.4672 13.6995C15.2328 13.465 14.9149 13.3333 14.5833 13.3333C14.2518 13.3333 13.9339 13.465 13.6995 13.6995C13.465 13.9339 13.3333 14.2518 13.3333 14.5833C13.3333 14.9149 13.465 15.2328 13.6995 15.4672C13.9339 15.7016 14.2518 15.8333 14.5833 15.8333ZM5.41667 8.33333C5.03364 8.33333 4.65437 8.25789 4.30051 8.11132C3.94664 7.96474 3.62511 7.7499 3.35427 7.47906C3.08343 7.20822 2.86859 6.88669 2.72202 6.53283C2.57544 6.17896 2.5 5.79969 2.5 5.41667C2.5 5.03364 2.57544 4.65437 2.72202 4.30051C2.86859 3.94664 3.08343 3.62511 3.35427 3.35427C3.62511 3.08343 3.94664 2.86859 4.30051 2.72202C4.65437 2.57544 5.03364 2.5 5.41667 2.5C6.19021 2.5 6.93208 2.80729 7.47906 3.35427C8.02604 3.90125 8.33333 4.64312 8.33333 5.41667C8.33333 6.19021 8.02604 6.93208 7.47906 7.47906C6.93208 8.02604 6.19021 8.33333 5.41667 8.33333ZM5.41667 6.66667C5.74819 6.66667 6.06613 6.53497 6.30055 6.30055C6.53497 6.06613 6.66667 5.74819 6.66667 5.41667C6.66667 5.08515 6.53497 4.7672 6.30055 4.53278C6.06613 4.29836 5.74819 4.16667 5.41667 4.16667C5.08515 4.16667 4.7672 4.29836 4.53278 4.53278C4.29836 4.7672 4.16667 5.08515 4.16667 5.41667C4.16667 5.74819 4.29836 6.06613 4.53278 6.30055C4.7672 6.53497 5.08515 6.66667 5.41667 6.66667ZM15.8925 2.92917L17.0708 4.1075L4.10833 17.0708L2.93 15.8925L15.8917 2.92917H15.8925Z"
                                            fill="#09121F" />
                                    </svg>
                                    <p>Vehicle Sell</p>
                                </div>
                                <p class="text-[#858585] ">94%</p>
                            </div>
                        </div>

                    </div>
                    <div class="w-full">
                        <Info :key="counter" :dataUser="dataUser" :getProfile="getProfile" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import Heanding from "../../../components/Headings/Heanding.vue";
import Info from "./info/Info.vue";
import { useAuthStore } from "@/stores/auth";
import { useStoreFile } from "@/stores/uploader";
import { useUserStore } from "@/stores/user";
import { toast } from "vue3-toastify";
export default {

    components: {
        Info,
        Heanding
    },
    setup() {
        const storeUser = useAuthStore()
        const storeFile = useStoreFile()
        const storeProfile = useUserStore()
        const dataUser = ref({})
        const loading = ref(false)
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const counter = ref(0)
        const form = ref({
            preview: null,
            img: null

        })
        const getProfile = async () => {
            loading.value = true
            const token = localStorage.getItem('token')
            storeUser.authProfile({ token: token }).then((res) => {
                if (res.data) {
                    dataUser.value = res.data
                    loading.value = false
                    counter.value += 1
                }
            }).catch((error) => {
                console.log("validateToken error", error);
                loading.value = false
            });
        }
        const previewImage = (event) => {
            console.log('event', event)
            var input = event.target;
            var maxfilesize = 1024 * 1024  // 1 Mb
            var filesize = input.files[0].size
            let convertion = (input.files[0].size / (1024 * 1024)).toFixed(2);
            if (input.files) {
                if (filesize > maxfilesize) {
                    toast("File too large: " + convertion + "Mb" + ". Maximum size: 1 Mb", {
                        type: "error",
                    });
                    form.value.preview = null
                    form.value.img = null
                } else {
                    loading.value = true
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        console.log('e', e)

                        form.value.preview = e.target.result;
                        loading.value = false
                    }

                    form.value.img = input.files[0];
                    form.value.img.mb = convertion
                    reader.readAsDataURL(input.files[0]);
                    counter.value += 1
                    console.log(' form.img', form.preview)
                }
            }
        }
        const updateiMG = async () => {
            if (form.value.img) {
                let data = {
                    file: form.value.img,
                    location: 'test'
                }
                console.log('data', data)
                loading.value = true
                try {
                    let resFile = await storeFile.uploaderFile(data)
                    if (resFile.data) {
                        try {
                            let update = {
                                seller: {
                                    picture: resFile.data,
                                },
                            }
                            let resUpdate = await storeProfile.updateUser(update)
                            if (resUpdate) {
                                console.log('resUpdate', resUpdate)
                                getProfile()
                                form.value.preview = null
                                form.value.img = null
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


        }
        onMounted(() => {
            getProfile()
            console.log('Account', storeUser)

        })
        return {
            Heanding,
            storeUser,
            loading,
            dataUser,
            counter,
            bucket,
            previewImage,
            updateiMG,
            form,
            getProfile
        };
    },
};
</script>





  