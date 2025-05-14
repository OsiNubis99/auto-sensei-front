<template>
  <div class="bg-white flex flex-col md:mb-7 gap-5 items-start shadow-steps p-5 w-full">
    <div class="flex gap-6">
      <img :src="bucket + 'public/svg/uploadPhotos.svg'" alt="" />
      <div class="flex flex-col">
        <p class="font-semibold text-[13px] md:text-xl">Upload Photos</p>
        <p class="text-[10px] md:text-base">You can easily upload through your phone</p>
      </div>
    </div>

    <div class="flex gap-6">
      <div class="flex flex-col">
        <p class="text-[10px] md:text-base">
          Upload up to 30 photos of your vehicle. Please be transparent with photos outlining damages, imperfections, & condition of the vehicle. Taking pictures of the tires tread, rims & brakes are
          recommended as well. These photos will be subject to approval, pictures may be removed or reorganized in order to make your auction more appealing.
        </p>
        <p class="text-[10px] md:text-base">
          Suggested Photo Recommendations. Pictures of:
          <br />
          <strong>- Odometer (mileage)</strong>
          <br />
          <strong>- ⁠Tire & Rim Condition (Front and Rear)</strong>
          <br />
          <strong>- ⁠Rotors (Front and Rear)</strong>
          <br />
          <strong>- ⁠All angles of vehicle</strong>
          <br />
          <strong>- ⁠Interior (Front and Rear)</strong>
          <br />
          <strong>- ⁠Any Damages</strong>
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-start items-start">
      <p class="font-semibold text-[13px] md:text-lg">Please review the detailed vehicle image guide again.</p>
      <button
        class="btn bg-transparent border-[#E0E0E0] flex justify-center !py-1 mt-2 px-4 border rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700"
        @click="openModalGuide"
      >
        Guide
      </button>
    </div>

    <template v-if="!loadingUploadImages">
      <p class="font-semibold text-[13px] md:text-xl">Files: {{ form.images.length }}</p>
      <div
        v-if="form?.images?.length > 0"
        class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 lg:px-3 scroll-custom w-full m-auto pt-6 gap-6 h-fit lg:max-h-[65vh] lg:overflow-y-auto overflow-x-hidden"
      >
        <div class="flex w-full flex-col items-center" v-for="(image, index) in form.images">
          <div class="animate-fade-up w-full animate-ease-in-out" :class="`animate-delay-${index}00 animate-duration-${index + 1}000`">
            <div @click="viewPhoto(image)" class="relative w-full flex justify-end group cursor-pointer transition-all ease-out duration-300">
              <svg
                class="absolute z-50 w-6 mx-1 my-1 group-hover:-translate-y-4 group-hover-fill-[#fff] transition-all ease-out duration-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#fff" stroke-width="1.5"></path>
                </g>
              </svg>

              <div class="relative w-full">
                <p
                  :class="image?.file?.type?.split('/')[0] == 'video' ? 'bg-[#1f94f0] text-white ' : 'bg-primary text-base-black '"
                  class="absolute z-50 group-hover:-translate-y-4 group-hover-fill-[#fff] transition-all ease-out duration-300 font-bold py-1 px-3 top-2 uppercase left-2 text-[8px] rounded-lg"
                >
                  {{ image?.file?.type?.split('/')[0] }}
                </p>
                <video
                  v-if="image?.file?.type?.split('/')[0] == 'video'"
                  poster
                  :src="image.preview"
                  class="object-cover shadow-image-upload w-full h-[150px] rounded-lg mb-4 group-hover:backdrop-blur group-hover:-translate-y-4 transition-all ease-out duration-300"
                ></video>
                <img
                  v-else
                  class="object-cover shadow-image-upload w-full h-[150px] rounded-lg mb-4 group-hover:backdrop-blur group-hover:-translate-y-4 transition-all ease-out duration-300"
                  :src="image.preview"
                />
              </div>
            </div>

            <div class="flex gap-1 flex-col">
              <p class="text-xs font-medium truncate w-[120px]">Name: {{ image.file.name.split('.')[0] }}</p>
              <p class="text-xs font-medium truncate">
                Type:
                <span class="uppercase bg-[#6d53b0] text-white shadow-lg font-semibold ml-2 px-2 py-1 text-[8px] rounded-md">{{ image?.type }}</span>
              </p>
              <p class="text-xs font-medium mb-2 truncate">
                Size:
                <span class="uppercase bg-[#6d53b0] text-white shadow-lg font-semibold ml-3 px-2 py-1 text-[10px] rounded-md">{{ image?.size }} Mb</span>
              </p>
            </div>
            <button
              class="bg-white flex group hover:bg-[#FF333E] hover:text-white transition-all ease-in duration-300 items-center gap-2 border-error py-1 px-4 font-normal text-sm border-2 rounded-lg w-fit"
              @click="removeImage(index)"
            >
              <p>Remove image</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  class="fill-[#FF333E] group-hover:fill-[#fff] transition-all ease-in duration-500"
                  d="M10.332 1.66732H13.6654V3.00065H12.332V13.0007C12.332 13.1775 12.2618 13.347 12.1368 13.4721C12.0117 13.5971 11.8422 13.6673 11.6654 13.6673H2.33203C2.15522 13.6673 1.98565 13.5971 1.86063 13.4721C1.7356 13.347 1.66536 13.1775 1.66536 13.0007V3.00065H0.332031V1.66732H3.66536V0.333984H10.332V1.66732ZM4.9987 5.00065V10.334H6.33203V5.00065H4.9987ZM7.66536 5.00065V10.334H8.9987V5.00065H7.66536Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </template>
    <div v-if="form.images.length < 30" class="flex w-full items-center justify-start bg-grey-lighter">
      <label
        :class="[form.images.length > 4 ? 'px-2 flex-row-reverse justify-center gap-3 py-2' : 'px-4 py-6 flex-col', invalid?.images ? 'border-[#ff000075]' : 'border-base-black']"
        class="w-64 flex items-center bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border transition-all ease-out duration-300 cursor-pointer hover:bg-primary hover:text-white"
      >
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span :class="form.images.length > 4 ? 'mt-0 font-semibold text-sm' : 'mt-2 text-base font-Nohemi'" class="leading-normal">Select a file</span>
        <input type="file" class="hidden" multiple @change="onFileChange" />
      </label>
    </div>
    <div v-if="!save" class="flex justify-center items-center gap-2">
      <button
        @click="createAutions('draft')"
        class="btn bg-transparent border-[#E0E0E0] flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save as Draft
      </button>
      <button
        @click="next"
        id="step3"
        class="btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-blackbg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Confirmation
      </button>
    </div>
    <div v-else class="flex justify-center items-center gap-5">
      <button
        @click="createAutions('draft')"
        id="saveDraft"
        class="btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-blackbg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save as Draft
      </button>
      <button
        @click="modalLaunch('launch')"
        id="launchAuction"
        class="btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-blackbg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Launch Auction
      </button>
    </div>
    <p class="text-xs md:text-sm text-[#666666]">If you leave the create auction process, this listing will be saved in your drafts for your convenience to continue later.</p>
    <ModalLaunchVue :form="form" :modalLaunch="createAutions" />
    <ModalImageCustomVue v-if="statusModalImage?.isActive" :form="form" />
    <ModalViewImageVue v-if="statusModalViewImage?.isActive" :form="form" />
    <ModalGuidePhotosVue v-if="statusModalGuide?.isActive" />
  </div>
</template>
<script>
import { ref, onMounted, computed, watch } from 'vue';
import { toast } from 'vue3-toastify';
import ModalLaunchVue from '../../../../../components/Modals/ModalLaunch/ModalLaunchVue.vue';
import ModalImageCustomVue from '../../../../../components/Modals/ModalImageCustom/ModalImageCustom.vue';
import ModalViewImageVue from '../../../../../components/Modals/ModalViewImage/ModalViewImage.vue';
import ModalGuidePhotosVue from '@/components/Modals/ModalGuidePhotos/ModalGuidePhotos.vue';
import { ModalLaunch } from '@/stores/modalLaunch';
import { ModalImageCustom } from '@/stores/modalImageCustom';
import { ModalViewImage } from '@/stores/modalViewImage';
import { ModalGuidePhotos } from '@/stores/modalGuidePhotos';
export default {
  props: {
    op: {
      type: Object,
    },
    checkStep: {
      type: Object,
    },
    back: {
      type: Function,
    },
    form: {
      type: Object,
    },
    launch: {
      type: Boolean,
    },
    saveData: {
      type: Function,
    },
    nextUploadPhotos: {
      type: Function,
    },
    invalid: {
      type: Object,
    },
  },
  components: {
    ModalLaunchVue,
    ModalImageCustomVue,
    ModalViewImageVue,
    ModalGuidePhotosVue,
  },
  setup(props) {
    const date = ref(new Date());
    const form = ref(props.form);
    const save = ref(props.launch);
    const invalid = ref(props.invalid);
    let videoPlayer = ref();
    let isPlaying = ref(false);
    const statusModal = ModalLaunch();
    const statusModalImage = ModalImageCustom();
    const statusModalGuide = ModalGuidePhotos();
    const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS));
    const statusModalViewImage = ModalViewImage();
    const loadingUploadImages = ref(false);
    const toastStatus = ref(false);
    const play = () => {
      videoPlayer.value.play();
      isPlaying.value = true;
    };
    const paused = () => {
      videoPlayer.value.pause();
      isPlaying.value = false;
    };
    function isMobile() {
      const minWidth = 768; // Minimum width for desktop devices
      return window.innerWidth < minWidth || screen.width < minWidth;
    }
    const previewImage = (event, string) => {
      var input = event.target;
      let typeFile = input.files[0].type.split('/');
      if (typeFile[1] == 'jpg' || typeFile[1] == 'jpeg' || typeFile[1] == 'png' || typeFile[1] == 'webp') {
        let convertion = (input.files[0].size / (1024 * 1024)).toFixed(2);
        if (input.files) {
          if (convertion > 100 && typeFile[0] == 'video') {
            toast('The video exceeds 100mb', {
              type: 'error',
            });
          } else {
            var reader = new FileReader();
            reader.onload = e => {
              if (typeFile[0] !== 'video') {
                if (isMobile()) {
                } else {
                  statusModalImage.openModal({ active: true, img: input.files[0], type: string });
                }
              }
              switch (string) {
                case 'document':
                  form.value.previewDocument = e.target.result;
                  form.value.document = input.files[0];
                  form.value.document.mb = convertion;

                  break;
                case 'driver':
                  form.value.previewDriver = e.target.result;
                  form.value.driverDocument = input.files[0];
                  form.value.driverDocument.mb = convertion;

                  break;
                case 'frontPhoto':
                  form.value.previewFrontPhoto = e.target.result;
                  form.value.frontPhoto = input.files[0];
                  form.value.frontPhoto.mb = convertion;

                  break;
                case 'front':
                  form.value.previewFront = e.target.result;
                  form.value.front = input.files[0];
                  form.value.front.mb = convertion;

                  break;
                case 'driverSide':
                  form.value.previewDriverSide = e.target.result;
                  form.value.driverSide = input.files[0];
                  form.value.driverSide.mb = convertion;

                  break;
                case 'back':
                  form.value.previewBack = e.target.result;
                  form.value.back = input.files[0];
                  form.value.back.mb = convertion;

                  break;
                case 'passengerSide':
                  form.value.previewPassengerSide = e.target.result;
                  form.value.passengerSide = input.files[0];
                  form.value.passengerSide.mb = convertion;

                  break;
                case 'tireAndRim':
                  form.value.previewTireAndRim = e.target.result;
                  form.value.tireAndRim = input.files[0];
                  form.value.tireAndRim.mb = convertion;

                  break;
                case 'driversDisplay':
                  form.value.previewDriversDisplay = e.target.result;
                  form.value.driversDisplay = input.files[0];
                  form.value.driversDisplay.mb = convertion;

                  break;
                case 'driversSide':
                  form.value.previewDriversSide = e.target.result;
                  form.value.driversSide = input.files[0];
                  form.value.driversSide.mb = convertion;

                  break;
                case 'centerConsole':
                  form.value.previewCenterConsole = e.target.result;
                  form.value.centerConsole = input.files[0];
                  form.value.centerConsole.mb = convertion;

                  break;
                case 'rearSeats':
                  form.value.previewRearSeats = e.target.result;
                  form.value.rearSeats = input.files[0];
                  form.value.rearSeats.mb = convertion;

                  break;
                case 'vehicleDamage':
                  form.value.previewVehicleDamage = e.target.result;
                  form.value.vehicleDamage = input.files[0];
                  form.value.vehicleDamage.mb = convertion;

                  break;
                case 'additionalDocuments':
                  form.value.previewAdditionalDocuments = e.target.result;
                  form.value.additionalDocuments = input.files[0];
                  form.value.additionalDocuments.mb = convertion;

                  break;
                case 'vehicleVideo':
                  form.value.previewVehicleVideo = e.target.result;
                  form.value.vehicleVideo = input.files[0];
                  form.value.vehicleVideo.mb = convertion;

                  break;
                default:
                  break;
              }
            };
          }
          reader.readAsDataURL(input.files[0]);
        }
      } else {
        toast('File not supported,allowed files (jpg, jpeg, png, webp)', {
          type: 'error',
        });
      }
    };
    const next = () => {
      props.nextUploadPhotos();
    };
    const modalLaunch = () => {
      statusModal.openModal(true);
    };
    const createAutions = string => {
      props.saveData(string);
    };
    const viewPhoto = photo => {
      statusModalViewImage.openModal({ active: true, img: photo });
    };
    const openModalGuide = () => {
      statusModalGuide.openModal({ isActive: true });
    };
    function removeImage(index) {
      form.value.images.splice(index, 1);
    }
    function createImage(files) {
      for (var index = 0; index < files.length; index++) {
        let convertion = (files[index].size / (1024 * 1024)).toFixed(2);
        const imageUrl = {
          preview: null,
          file: files[index],
          size: convertion,
          format: files[index]?.type?.split('/')[0],
          type: files[index]?.type?.split('/')[1],
          name: files[index].name,
        };
        var reader = new FileReader();
        reader.onload = function (event) {
          imageUrl.preview = event.target.result;
          if (form.value.images.length >= 30) {
            toastStatus.value = true;

            return;
          } else {
            toastStatus.value = false;
            form.value.images.push(imageUrl);
          }
        };
        reader.readAsDataURL(files[index]);
      }
    }
    const onFileChange = e => {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if (files.length >= 30) {
        toastStatus.value = true;
        return;
      }
      toastStatus.value = false;
      createImage(files);
    };
    watch(toastStatus, async (newQuestion, oldQuestion) => {
      if (newQuestion) {
        toast('You can only upload a maximum of 30 files.', {
          type: 'error',
        });
      }
    });
    onMounted(() => {
      if (!save.value) {
        openModalGuide();
      }
    });
    return {
      date,
      form,
      next,
      previewImage,
      invalid,
      save,
      createAutions,
      play,
      paused,
      isPlaying,
      videoPlayer,
      modalLaunch,
      statusModalImage,
      viewPhoto,
      statusModalViewImage,
      bucket,
      loadingUploadImages,
      removeImage,
      createImage,
      onFileChange,
      statusModalGuide,
      openModalGuide,
    };
  },
};
</script>
