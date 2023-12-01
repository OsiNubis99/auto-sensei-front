<template>
    <div class="flex-1 flex flex-col  justify-between py-12 px-4 h-full sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 h-full lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full ">
                <div>
                    <h2 class="mt-6 text-4xl font-bold text-base-black text-center mb-5 ">Create Your Dealer Account
                    </h2>
                    <p class=" text-sm font-normal text-[#666] text-center  ">Auction your car to dealers right from
                        your home.</p>
                </div>
                <div class="mt-8">
                    <div class="mt-6">
                        <div class="space-y-6">
                            <p class="text-sm font-medium">Profile Photo</p>
                            <div class="flex gap-6">
                                <img class="w-[80px] h-[80px] rounded-full object-cover " v-if="form?.preview"
                                    :src="form?.preview" alt="">
                                <img v-else src="../../../../assets/svg/login/uploadImage.svg" alt="">
                                <div>
                                    <div class="flex gap-1 items-center" v-if="form?.img?.name">
                                        <p class="text-xs font-medium text-[#666] truncate"> <strong
                                                class="text-[15]">Size:</strong> {{ form?.img?.mb }}Mb - </p>
                                        <p class="text-xs font-medium w-[150px] text-[#666] truncate"><strong
                                                class="text-[15]">Name:</strong> {{ form?.img?.name }}</p>
                                    </div>
                                    <p v-else class="text-xs font-medium text-[#666]">JPG, GIF or PNG. Max size of 1Mb</p>
                                    <label :class="invalid?.img ? 'bg-error' : 'bg-[#F0F0F0]'"
                                        class="flex flex-col items-center mt-4 px-2 py-2  rounded-lg shadow-lg tracking-wide  cursor-pointer">
                                        <span :class="invalid?.img ? 'text-white' : 'text-base-black'"
                                            class="  font-medium leading-normal">Upload Profile</span>
                                        <input type="file" accept="image/*" @change="previewImage" class="hidden">
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="dealerName" class="block text-sm font-medium text-gray-700">
                                    Dealer Name
                                </label>
                                <div class="mt-1">
                                    <input name="dealerName" type="text" v-model="form.dealerName"
                                        placeholder="Car Garage Co"
                                        :class="invalid?.dealerName ? 'border-error' : 'border-[#F0F0F0]'"
                                        class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="registrationNumber" class="block text-sm font-medium text-gray-700">
                                    OMVIC Registration Number
                                </label>
                                <div class="mt-1">
                                    <input name="registrationNumber" v-model="form.registrationNumber" type="text"
                                        placeholder="1234567890"
                                        :class="invalid?.registrationNumber ? 'border-error' : 'border-[#F0F0F0]'"
                                        class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div class="space-y-1">
                                <label htmlFor="password" class="block text-sm font-medium text-gray-700">
                                    Address
                                </label>
                                <div class="mt-1">
                                    <input name="address" v-model="form.address" type="text"
                                        placeholder="San Fransisco, California"
                                        :class="invalid?.address ? 'border-error' : 'border-[#F0F0F0]'"
                                        class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div class="space-y-1">
                                <label htmlFor="phoneNumber" class="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <div class="mt-1">
                                    <input name="phoneNumber" type="password " v-model="form.phoneNumber"
                                        placeholder="*********"
                                        :class="invalid?.phoneNumber ? 'border-error' : 'border-[#F0F0F0]'"
                                        class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
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
    </div>
</template>
<script>
import { onUpdated, ref, onMounted } from 'vue'
import { stepsSignUp } from "@/stores/stepsSignUp";
import { infoAccount } from '../../../../validations/validationSignUp'
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
        let rol = ref()
        const invalid = ref()
        const storeData = stepsSignUp()
        const form = storeData.formAccount
        const previewImage = (event) => {
            console.log('form', form.value)
            var input = event.target;
            var maxfilesize = 1024 * 1024  // 1 Mb
            var filesize = input.files[0].size
            let convertion = (input.files[0].size / (1024 * 1024)).toFixed(2);
            if (input.files) {
                if (filesize > maxfilesize) {
                    alert("File too large: " + convertion + "Mb" + ". Maximum size: 1 Mb")
                    form.preview = null
                    form.img = null
                } else {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        console.log('e', e)
                        form.preview = e.target.result;
                    }

                    form.img = input.files[0];
                    form.img.mb = convertion
                    reader.readAsDataURL(input.files[0]);
                    console.log(' form.img', form.img)
                }
            }
        }
        const backStep = () => {
            props.back()
        }
        const nextStep = () => {
            invalid.value = infoAccount(form, rol);
            console.log('invalid.value', invalid.value)
            if (Object.entries(invalid.value).length === 0) {
                props.next()
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
            backStep,
            previewImage,
            form,
            invalid
        };
    },
};
</script>