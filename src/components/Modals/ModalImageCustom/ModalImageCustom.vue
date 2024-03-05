

<template>
    <div v-show="statusModalImage.isActive"
        class="fixed z-[100] inset-0 flex items-end md:items-center md:justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-md w-full overflow-auto  bg-white rounded-lg shadow-xl animation-fade-modal">
            <div class="p-4 rounded-t-lg  bg-base-black flex items-center justify-between">
                <p class="md:text-xl text-white">Edit & Crop Image</p>
                <svg @click="statusModalImage.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

            <div class="relative">
                <div v-if="loading" class="md:min-h-[400px] h-full flex justify-center items-center">
                    <div class="w-full h-full flex justify-center items-center">
                        <div class=" text-indigo-700">
                            <div class="   md:h-[80px] md:w-[80px] ">
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
                </div>
                <template v-else>
                    <cropper ref="croppers" class="twitter-cropper" background-class="twitter-cropper__background"
                        foreground-class="twitter-cropper__foreground" image-restriction="stencil"
                        :stencil-size="stencilSize" :stencil-props="{
                            lines: {},
                            handlers: {},
                            movable: false,
                            scalable: false,
                            aspectRatio: 1,
                            previewClass: 'twitter-cropper__stencil',
                        }" :transitions="false" :debounce="false" :default-size="defaultSize" :min-width="150"
                        :min-height="150" :src="imgPreview" @change="onChange" />
                    <div class="flex justify-between gap-12 p-4">
                        <div class="w-full">
                            <p>Zoom</p>
                            <Navigation :zoom="zoom" @change="onZoom" />
                        </div>
                    </div>
                    <div class="flex w-full justify-end p-4 gap-3">
                        <label class="label-upload btn bg-white border border-[#E0E0E0]">
                            <input type="file" hidden ref="file" @change="uploadImage($event)" accept="image/*" />
                            <div class="btn-up">Replace</div>
                        </label>
                        <button @click="saveEditPhoto" class="btn bg-primary ">Upload</button>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
    
<script>
import { ref, onMounted } from "vue";
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import Navigation from "./Navegation.vue";
import { ModalImageCustom } from '@/stores/modalImageCustom';
import axios from "@/axios";
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
        const statusModalImage = ModalImageCustom()
        const formData = ref(props.form)
        const zoom = ref(0)
        const croppers = ref(null)
        const imgPreview = ref(statusModalImage.img)
        const defaultSize = ({ imageSize }) => {
            return {
                width: Math.min(imageSize.height, imageSize.width),
                height: Math.min(imageSize.height, imageSize.width),
            };
        }
        const stencilSize = ({ boundaries }) => {
            return {
                width: Math.min(boundaries.height, boundaries.width) - 48,
                height: Math.min(boundaries.height, boundaries.width) - 48,
            };
        }
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
        const onChange = (result) => {
            const cropper = croppers.value;
            if (cropper) {
                const { coordinates, imageSize } = cropper;
                if (
                    imageSize.width / imageSize.height >
                    coordinates.width / coordinates.height
                ) {
                    // Determine the position of slider bullet
                    // It's 0 if the stencil has the maximum size and it's 1 if the has the minimum size
                    zoom.value =
                        (cropper.imageSize.height - cropper.coordinates.height) /
                        (cropper.imageSize.height - cropper.sizeRestrictions.minHeight);
                } else {
                    zoom.value =
                        (cropper.imageSize.width - cropper.coordinates.width) /
                        (cropper.imageSize.width - cropper.sizeRestrictions.minWidth);
                }
            }
        }
        const onZoom = (value) => {
            const cropper = croppers.value;
            if (cropper) {
                if (cropper.imageSize.height < cropper.imageSize.width) {
                    const minHeight = cropper.sizeRestrictions.minHeight;
                    const imageHeight = cropper.imageSize.height;
                    // Determine the current absolute zoom and the new absolute zoom
                    // to calculate the sought relative zoom value
                    cropper.zoom(
                        (imageHeight - zoom.value * (imageHeight - minHeight)) /
                        (imageHeight - value * (imageHeight - minHeight))
                    );
                } else {
                    const minWidth = cropper.sizeRestrictions.minWidth;
                    const imageWidth = cropper.imageSize.width;
                    cropper.zoom(
                        (imageWidth - zoom.value * (imageWidth - minWidth)) /
                        (imageWidth - value * (imageWidth - minWidth))
                    );
                }
            }
        }
        const saveEditPhoto = () => {
            const { canvas } = croppers.value.getResult();
            if (canvas) {
                canvas.toBlob(async blob => {
                    let nameImg = statusModalImage.img.name
                    var file = new File([blob], nameImg, { lastModified: new Date().getTime(), type: blob.type });
                    console.log('file', file)
                    let image = canvas.toDataURL("image/jpeg");
                    console.log('image', image)
                    
                    switch (statusModalImage.typeImg) {
                        case 'document':
                            formData.value.previewDocument = image;
                            formData.value.document = file;
                            console.log('document', formData.value.previewDocument, formData.value.document)
                            break;
                        case 'driver':
                            formData.value.previewDriver = image;
                            formData.value.driverDocument = file;
                            console.log('driver',formData.value.previewDriver,formData.value.driverDocument)
                            break;
                        case 'frontPhoto':
                            formData.value.previewFrontPhoto = image;
                            formData.value.frontPhoto = file;
                            
                            break;
                        case 'front':
                            formData.value.previewFront = image;
                            formData.value.front = file;
                            
                            break;
                        case 'driverSide':
                            formData.value.previewDriverSide = image;
                            formData.value.driverSide = file;
                            
                            break;
                        case 'back':
                            formData.value.previewBack = image;
                            formData.value.back = file;
                            
                            break;
                        case 'passengerSide':
                            formData.value.previewPassengerSide = image;
                            formData.value.passengerSide = file;
                            
                            break;
                        case 'tireAndRim':
                            formData.value.previewTireAndRim = image;
                            formData.value.tireAndRim = file;
                            
                            break;
                        case 'driversDisplay':
                            formData.value.previewDriversDisplay = image;
                            formData.value.driversDisplay = file;
                            
                            break;
                        case 'driversSide':
                            formData.value.previewDriversSide = image;
                            formData.value.driversSide = file;
                            
                            break;
                        case 'centerConsole':
                            formData.value.previewCenterConsole = image;
                            formData.value.centerConsole = file;
                            
                            break;
                        case 'rearSeats':
                            formData.value.previewRearSeats = image;
                            formData.value.rearSeats = file;
                            
                            break;
                        case 'vehicleDamage':
                            formData.value.previewVehicleDamage = image;
                            formData.value.vehicleDamage = file;
                            
                            break;
                        case 'additionalDocuments':
                            formData.value.previewAdditionalDocuments = image;
                            formData.value.additionalDocuments = file;
                            
                            break;
                        case 'vehicleVideo':
                            formData.value.previewVehicleVideo = image;
                            formData.value.vehicleVideo = file;
                            
                            break;
                        default:
                            break;

                    }
                    statusModalImage.closeModal(false)
                }, "image/png");
            }
        }
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });
        async function MainFile(file) {
            loading.value = true
            try {
                const result = await toBase64(file);
                if (result) {
                    imgPreview.value = result
                    loading.value = false
                }
                return result
            } catch (error) {
                loading.value = false
                console.error(error);
                return;
            }
            //...
        }
        onMounted(() => {
            if (statusModalImage.img) {
                MainFile(statusModalImage.img)
            }
        })
        return {
            onZoom,
            onChange,
            uploadImage,
            stencilSize,
            defaultSize,
            loading,
            statusModalImage,
            croppers,
            zoom,
            imgPreview,
            saveEditPhoto
        };
    },
    components: {
        Cropper,
        Navigation,
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