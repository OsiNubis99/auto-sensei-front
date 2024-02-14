

<template>
    <div v-show="statusModalView.isActive"
        class="fixed z-[100] inset-0 flex items-center justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-xl w-full h-[70vh] overflow-hidden  bg-white rounded-lg shadow-xl">
            <div class="h-[79%] ">
                <div class="p-4 rounded-t-lg  bg-base-black flex items-center justify-between">
                    <p class="text-xl text-white">View Photo</p>
                    <svg @click="statusModalView.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="w-full h-full">
                    <img :src="img" class="w-full h-full object-contain " alt="">
                </div>
                <div class="flex w-full justify-end border-t-2 border-[#E0E0E0] p-4 gap-3">
                    <label class="label-upload btn bg-white border border-[#E0E0E0]">
                        <input type="file" hidden ref="file" @change="uploadImage($event)" accept="image/*" />
                        <div class="btn-up">Replace</div>
                    </label>
                </div>
            </div>

        </div>
    </div>
</template>
    
<script>
import { ref, onMounted } from "vue";
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
        const croppers = ref(null)
        const img = ref(statusModalView.img)
        const uploadImage = (event) => {
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
        return {
            uploadImage,

            loading,
            img,
            statusModalView
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