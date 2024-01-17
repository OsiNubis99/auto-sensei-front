

<template>
    <div v-show="statusModalImage.isActive"
        class="fixed z-[100] inset-0 flex items-center justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-md w-full overflow-auto  bg-white rounded-lg shadow-xl">
            <div class="p-4 rounded-t-lg  bg-base-black flex items-center justify-between">
                <p class="text-xl text-white">Edit & Crop Image</p>
                <svg @click="statusModalImage.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div v-if="loading">
                <p>Espere....</p>

            </div>
            <div v-else>
                <cropper ref="croppers" class="twitter-cropper" background-class="twitter-cropper__background"
                    foreground-class="twitter-cropper__foreground" image-restriction="stencil" :stencil-size="stencilSize"
                    :stencil-props="{
                        lines: {},
                        handlers: {},
                        movable: false,
                        scalable: false,
                        aspectRatio: 1,
                        previewClass: 'twitter-cropper__stencil',
                    }" :transitions="false" :debounce="false" :default-size="defaultSize" :min-width="150"
                    :min-height="150" :src="img" @change="onChange" />
                <div class="flex justify-between gap-12 p-4">
                    <div class="w-full">
                        <p>Zoom</p>
                        <Navigation :zoom="zoom" @change="onZoom" />
                    </div>
                    <div class="w-full">
                        <p>Straight</p>
                        <Navigation />
                    </div>
                </div>

            </div>
            <div class="flex w-full justify-end p-4 gap-3">
                <label class="label-upload btn bg-white border border-[#E0E0E0]">
                    <input type="file" hidden ref="file" @change="uploadImage($event)" accept="image/*" />
                    <div class="btn-up">Replace</div>
                </label>
                <button @click="saveEditPhoto" class="btn bg-primary ">Upload</button>
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
        const img = ref(statusModalImage.img)
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
            console.log('input.files[0]', input.files[0])
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
            statusModalImage.closeModal(false)
          /*   console.log('statusModalImage.typeImg', statusModalImage.typeImg)
            console.log('croppers.value', croppers.value.getResult())
            const { canvas } = croppers.value.getResult();
            if (canvas) {
                canvas.toBlob(async blob => {
                    console.log('blob', blob)
                    let image = canvas.toDataURL("image/jpeg");
                    switch (statusModalImage.typeImg) {
                        case 'document':
                            formData.value.previewDocument = image;
                            formData.value.document = blob;
                            break;
                        case 'driver':
                            formData.value.previewDriver = image;
                            formData.value.driverDocument = blob;
                            break;
                        case 'frontPhoto':
                            formData.value.previewFrontPhoto = image;
                            formData.value.frontPhoto = blob;
                            break;
                        case 'front':
                            formData.value.previewFront = image;
                            formData.value.front = blob;
                            break;
                        case 'driverSide':
                            formData.value.previewDriverSide = image;
                            formData.value.driverSide = blob;
                            break;
                        case 'back':
                            formData.value.previewBack = image;
                            formData.value.back = blob;
                            break;
                        case 'passengerSide':
                            formData.value.previewPassengerSide = image;
                            formData.value.passengerSide = blob;
                            break;
                        case 'tireAndRim':
                            formData.value.previewTireAndRim = image;
                            formData.value.tireAndRim = blob;
                            break;
                        case 'driversDisplay':
                            formData.value.previewDriversDisplay = image;
                            formData.value.driversDisplay = blob;
                            break;
                        case 'driversSide':
                            formData.value.previewDriversSide = image;
                            formData.value.driversSide = blob;
                            break;
                        case 'centerConsole':
                            formData.value.previewCenterConsole = image;
                            formData.value.centerConsole = blob;
                            break;
                        case 'rearSeats':
                            formData.value.previewRearSeats = image;
                            formData.value.rearSeats = blob;
                            break;
                        case 'vehicleDamage':
                            formData.value.previewVehicleDamage = image;
                            formData.value.vehicleDamage = blob;
                            break;
                        case 'additionalDocuments':
                            formData.value.previewAdditionalDocuments = image;
                            formData.value.additionalDocuments = blob;
                            break;
                        case 'vehicleVideo':
                            console.log('video', e)
                            formData.value.previewVehicleVideo = image;
                            formData.value.vehicleVideo = blob;
                            break;
                        default:
                            break;

                    }
                    statusModalImage.closeModal(false)
                }, "image/png");
            } */
        }
        onMounted(() => {
            console.log('props.form', props.form)
            if (statusModalImage.img) {
                img.value = URL.createObjectURL(statusModalImage.img)

            }
            console.log('PERAAAAAAAAAAAAAAAA', statusModalImage.img)
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
            img,
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