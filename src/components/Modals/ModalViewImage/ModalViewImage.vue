<template>
    <div v-show="statusModalView.isActive"
        class="fixed inset-0 flex items-end md:items-center md:justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-xl w-full h-[70vh] overflow-hidden  bg-white rounded-lg shadow-xl animation-fade-modal">
            <div class="h-full">
                <div class="md:p-4 p-2 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                    <p class=" text-md md:text-xl text-white">View Photo</p>
                    <svg @click="statusModalView.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                        class=" w-5 md:w-8 md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="w-full p-2 h-full">
                    <img :src="img.bucket ? bucket + img.preview : img.preview" class="w-full h-[90%] object-cover "
                        alt="">
                </div>
                <!-- <div class="flex w-full justify-end border-t-2 border-[#E0E0E0] p-4 gap-3">
                    <label class="label-upload btn bg-white border border-[#E0E0E0]">
                        <input type="file" hidden ref="file" @change="uploadImage($event)" accept=".jpg, .jpeg,.png,.webp" />
                        <div class="btn-up">Replace</div>
                    </label>
                </div> -->
            </div>

        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { ModalViewImage } from '@/stores/modalViewImage';
export default {
    props: {
        form: {
            type: Object,
        },
        img: {
            type: Object,
        },
    },
    setup(props) {
        const loading = ref(false)
        const statusModalView = ModalViewImage()
        const formData = ref(props.form)
        const zoom = ref(0)
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const croppers = ref(null)
        const img = ref(statusModalView.img)
        const uploadImage = (event) => {
            console.log('statusModalView', statusModalView.typeImg)
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                loading.value = true
                reader.onload = (e) => {
                    img.value = e.target.result;
                    loading.value = false
                };
                reader.readAsDataURL(input.files[0]);
            }
        }

        onMounted(() => {
            console.log('statusModalView.img', statusModalView.img)
        })
        return {
            uploadImage,

            loading,
            img,
            statusModalView,
            bucket
        };
    },
    components: {
    }
};
</script>


<style lang="scss">
.twitter-cropper {
    height: 521px;

    &__background {
        background-color: #edf2f4;
    }

    &__foreground {
        /* background-color: #edf2f4; */
    }

    &__stencil {
        /* border: solid 5px rgb(29, 161, 242); */
    }
}
</style>