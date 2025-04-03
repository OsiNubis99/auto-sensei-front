<template>
  <!-- <div>
    <div id="pspdfkit" style="width: 100%; height: 100vh;"></div>
    <div v-lazy-container="{ selector: 'img' }">
      <img class="w-[200px] h-[200px]" :data-loading="loadimage"
        data-src="https://s3.us-east-2.amazonaws.com/files.autosensei.ca/public/svg/about/Frame3.svg">
      <img class="w-[200px] h-[200px]" :data-loading="loadimage"
        data-src="https://s3.us-east-2.amazonaws.com/files.autosensei.ca/public/svg/about/Frame2.svg">
      <img class="w-[200px] h-[200px]" :data-loading="loadimage"
        data-src="https://s3.us-east-2.amazonaws.com/files.autosensei.ca/public/svg/about/Frame.svg">
    </div>
  </div>
  <div>
    Automatic Create Aution
  </div>

  <div>
    <Button v-if="step.step" @click="createAution" :disabled="loading ? true : false"
      class="btn bg-primary rounded-md ">
      <span v-if="loading">Creando...</span>
      <span v-else>Create</span>
    </Button>
    <Button @click="update" v-if="step.step2" :disabled="loading ? true : false" class="btn bg-primary rounded-md ">
      <span v-if="loading">Update...</span>
      <span v-else>Update Data Aution</span>
    </Button>
  </div>
   <div class="h-screen m-auto flex flex-col items-center justify-center">
    <div class="mt-32">
      <h2>Upload File</h2>
      <input type="file" multiple accept=".jpg, .jpeg,.png,.webp" @change="onFileChange">
    </div>

    <div v-if="!loadingUploadImages"
      class="grid grid-cols-4  m-auto mt-11 gap-6  p-10 h-[50vh] overflow-y-auto overflow-x-hidden">
      <div class="flex w-full flex-col items-center " v-for="(image, index) in images">
        <div class="animate-fade-up  animate-ease-in-out "
          :class="`animate-delay-${index}00 animate-duration-${(index) + 1}000`">
          <div class="relative flex justify-end group cursor-pointer transition-all ease-out duration-300">
            <svg
              class=" absolute  z-50 w-6 mx-1 my-1 group-hover:-translate-y-4 group-hover-fill-[#fff] transition-all ease-out duration-300  "
              viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                  stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path>
                <path
                  d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                  stroke="#fff" stroke-width="1.5"></path>
              </g>
            </svg>
            <img
              class="object-cover group-hover:backdrop-blur  group-hover:-translate-y-4 transition-all ease-out duration-300 shadow-xl "
              :src="image.preview" />
          </div>

          <div class="flex gap-1 flex-col">
            <p class="text-xs font-medium truncate w-[120px]">Name: {{ image.file.name.split('.')[0] }}
            </p>
            <p class="text-xs font-medium truncate">Type: <span
                class="uppercase bg-[#6d53b0] text-white shadow-lg font-semibold ml-2 px-2 py-1 text-[8px] rounded-md ">{{
        image?.file?.type?.split('/')[1] }}
              </span> </p>
            <p class="text-xs font-medium mb-2 truncate">Size: <span
                class="uppercase bg-[#6d53b0] text-white shadow-lg font-semibold ml-3 px-2 py-1 text-[10px] rounded-md ">{{
        image?.size }} Mb
              </span> </p>
          </div>
          <button
            class=" bg-white flex group hover:bg-[#FF333E] hover:text-white transition-all ease-in duration-300 items-center gap-2 border-error py-1 px-4 font-normal text-sm border-2  rounded-lg w-fit"
            @click="removeImage(index)">
            <p>Remove image</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path class="fill-[#FF333E] group-hover:fill-[#fff] transition-all ease-in duration-500 "
                d="M10.332 1.66732H13.6654V3.00065H12.332V13.0007C12.332 13.1775 12.2618 13.347 12.1368 13.4721C12.0117 13.5971 11.8422 13.6673 11.6654 13.6673H2.33203C2.15522 13.6673 1.98565 13.5971 1.86063 13.4721C1.7356 13.347 1.66536 13.1775 1.66536 13.0007V3.00065H0.332031V1.66732H3.66536V0.333984H10.332V1.66732ZM4.9987 5.00065V10.334H6.33203V5.00065H4.9987ZM7.66536 5.00065V10.334H8.9987V5.00065H7.66536Z" />
            </svg>
          </button>
        </div>


      </div>

    </div>
    <div v-else class="bg-white h-fit flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
      <div class="w-full flex flex-col md:grid md:grid-cols-2 gap-4">
        <div v-if="arrayUpload?.length > 0" v-for="(nameUpload, index) in arrayUpload" :key="index">
          <div class="flex justify-between border-b border-[#e5e5e5] pb-3 items-start gap-4 w-full">
            <div v-if="nameUpload.preview" class="w-16">
              <img class="w-15 object-cover h-15 rounded-lg shadow-lg" :src="nameUpload.preview" alt="">
            </div>
            <div v-if="!nameUpload.completed" class="w-full flex flex-col md:gap-2">
              <p class="capitalize text-sm md:text-base">{{ nameUpload.name }}</p>
              <div class="bg-[#E5E5E5] whitespace-pre shadow-sm w-full rounded-full  h-4">
                <div :style="{ width: porcertanje + '%' }"
                  class=" h-4 bg-primary flex justify-center items-center rounded-full shadow-progreess ">
                  <p class="text-[10px] ">{{ porcertanje }} %</p>
                </div>
              </div>
            </div>
            <div v-else-if="index == arrayUpload.length - 1" class="w-full flex flex-col md:gap-2">
              <p class="capitalize text-sm md:text-base">{{ nameUpload.name }}</p>
              <div class="bg-[#E5E5E5] rounded-full  shadow-xl h-4">
                <div class=" w-full h-4 bg-primary flex justify-center items-center rounded-full">
                  <p class="text-[10px]">Completed</p>
                </div>
              </div>
            </div>
            <div v-else class="w-full flex flex-col md:gap-2">
              <p class="capitalize text-sm md:text-base">{{ nameUpload.name }}</p>
              <div class="bg-[#E5E5E5] rounded-full  shadow-xl h-4">
                <div class=" w-full h-4 bg-primary flex justify-center items-center rounded-full">
                  <p class="text-[10px]">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full items-center">
        <img class="h-16 w-16" src="@/assets/svg/Spin.svg" alt="">
        <p class=" text-base-gray mt-1 text-xs md:text-base font-medium">Uploading...
        </p>
      </div>
    </div>
    <button v-show="images.length > 0" @click="uploadImages" class="btn bg-primary   rounded-lg w-fit">Upload</button>

  </div>
   <div v-if="!loading" id="demo">
    <div @click="ordenarPhotos">Sorby Images</div>
    <div v-for="category in categories" :key="category.id" @drop="onDrop($event, category.id)" class="droppable"
      @dragover.prevent @dragenter.prevent>
      <h4>{{ category.title }}</h4>
      <div v-if="category.id == 0" class="w-full">
        <div v-if="categories[0].children.length === 0" :key="index">
          <div class="w-full h-[400px] flex justify-center items-center  bg-white rounded-lg shadow-lg">
            <div :class="showAnimation > -1 ? 'contend-drag' : ''" @dragover.prevent
              class="  border-dashed border-2  flex-col gap-4 p-5 h-[70%] w-1/2 flex justify-center items-center  bg-[#6d53b01c] border-[#6d53b0b6]">
              <div class="effecto-camera">
                <img class="!w-[80px] !h-[80px]" src="../assets/img/png/photo-camera.png" alt="">
                <img class="!w-[80px] !h-[80px]" src="../assets/img/png/photo-camera.png" alt="">
                <img class="!w-[80px] !h-[80px]" src="../assets/img/png/photo-camera.png" alt="">
              </div>

              <p class=" font-semibold text-lg  text-[#6d53b0] capitalize ">Drag with mouse to sort images</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="category.children.length > 0" class="child">
        <div v-for="(item, index) in category.children.filter((x) => x.categoryId === category.id)" :key="item.id"
          :class="`animate-delay-${index}00 animate-duration-${(index) + 1}000`" @dragend="dragEnd"
          @dragstart="onDragStart($event, item, index)" class="draggable animate-ease-in-out animate-fade-up "
          draggable="true">
          <img :src="bucket + item.img" alt="">
        </div>
      </div>
    </div>
  </div> -->
  <div class="w-full h-screen mt-64">
    <h1>{{ countDownTimer(5) }}</h1>

    <div class="absolute bg-[#fbffee34] px-2 py-4 rounded-xl shadow-md w-[20%] top-40 right-4 flex flex-col gap-4">
      <div v-for="(item, index) in notificaciones" :key="item.id"
        :class="itemRemove?.id === item?.id ? '  opacity-0 bg-error  ' : ''"
        class="bg-white rounded-lg flex p-2 gap-4 flex-col items-start justify-center transition-all ease-in duration-500 shadow-lg">
        <p>{{ item.message }}</p>
        <p>{{ countDownTimer(item.duration) }}</p>
        <svg @click="deleteNotification(item)" xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 absolute right-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#000">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
    <div>
      <div v-if="step.step" @click="createAution" class="btn bg-primary rounded-md">
        <span v-if="loading">Creando...</span>
        <span v-else>Create</span>
      </div>
      <div @click="update" v-if="step.step2" class="btn bg-primary rounded-md">
        <span v-if="loading">Update...</span>
        <span v-else>Update Data Aution</span>
      </div>
    </div>
  </div>
</template>

<script>
import PSPDFKit from "pspdfkit";
import "../../assets/pspdfkit";
import document from "../assets/dummy.pdf";
import { onMounted, ref, computed, watch } from "vue";
import axios from "@/axios";
import loadimage from "../assets/img/jpg/loading.gif";
import errorimage from "../assets/img/jpg/error.png";
import { useAuctionStore } from "@/stores/auctions";
import { useStoreFile } from "@/stores/uploader";
import { toast } from "vue3-toastify";
export default {
  components: {
    loadimage,
    errorimage,
  },
  setup() {
    const store = useAuctionStore();
    const loading = ref(false);
    const step = ref({
      step: true,
      step2: false,
    });
    const id_aution = ref(null);
    const images = ref([]);
    const storeFile = useStoreFile();
    const porcertanje = ref(0);
    const powerValue = ref(
      computed(() => {
        return storeFile.progressUpload;
      })
    );
    const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS));
    const arrayEmpty = ref([]);
    const showAnimation = ref(-1);
    const countDown = ref(null);
    const addItem = ref(5);
    const itemRemove = ref(null);
    const notificaciones = ref([]);
    const categories = ref([
      {
        id: 0,
        title: "Fotos Ordenadas",
        children: [],
      },
      {
        id: 1,
        title: "Fotos aleatoria",
        children: [],
      },
    ]);
    const onDrop = (e, categoryId) => {
      const itemId = parseInt(e.dataTransfer.getData("itemId"));
      const id = categoryId === 0 ? 1 : 0;
      const child = categories.value[id].children.find((c) => c.id === itemId);
      child.categoryId = categoryId;
      removeFromList(id, itemId);
      addToList(categoryId, child);
    };
    const addToList = (categoryId, child) => {
      categories.value[categoryId].children = [
        ...categories.value[categoryId].children,
        child,
      ];
      /*  const updatedHero = hero.filter(item => item.id !== 1);
       console.log('arrayEmpty.value', arrayEmpty.value) */
    };
    const dragEnd = (ev) => {
      showAnimation.value = -1;
    };
    const addClass = (e) => {
      console.log("e", e);
      showAnimation.value = e.target.textContent;
    };
    const removeFromList = (id, itemId) => {
      categories.value[id].children = categories.value[id].children.filter(
        (c) => c.id !== itemId
      );
    };
    const onDragStart = (e, item, index) => {
      console.log("hola");
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("itemId", item.id.toString());
      showAnimation.value = index;
    };
    const arrayUpload = ref([]);
    const loadingUploadImages = ref(false);
    function removeImage(index) {
      images.value.splice(index, 1);
      console.log("imagenes", images.value);
    }
    function createImage(files) {
      for (var index = 0; index < files.length; index++) {
        let convertion = (files[index].size / (1024 * 1024)).toFixed(2);
        const imageUrl = {
          preview: null,
          file: files[index],
          size: convertion,
        };
        var reader = new FileReader();
        reader.onload = function (event) {
          imageUrl.preview = event.target.result;
          images.value.push(imageUrl);
        };
        reader.readAsDataURL(files[index]);
      }
    }
    const onFileChange = (e) => {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      console.log("files.length", files.length);
      if (images.value.length >= 30 || files.length >= 30) {
        console.log("ENTROOOOOOOOOOOOOOO", images.value);
        alert("Maximo de archivo 30");
        return;
      }
      createImage(files);
    };
    const counterDelete = (duration) => { };
    const deleteNotification = (item) => {
      itemRemove.value = item;

      for (let index = 0; index < notificaciones.value.length; index++) {
        const element = notificaciones.value[index];
        setTimeout(() => {
          notificaciones.value = notificaciones.value.filter(
            (noti) => noti.id !== item.id
          );
        }, 1000);
        console.log("element", element);
      }

      /*   let res = notificaciones.value.filter(noti => noti.id !== item.id)
  
        notificaciones.value = res */
    };
    const additemArray = () => {
      if (addItem.value > 0) {
        setTimeout(() => {
          addItem.value -= 1;
          notificaciones.value.push({
            id: addItem.value,
            message: "Nueva Hola",
            duration: 5,
          });
          additemArray();
        }, 1000);
      }
    };
    function time() { }
    function timer(duration) {
      let n = duration;
      let res = setInterval(() => {
        if (n === 0) {
          clearInterval(res);
        }
        n--;
      }, 1000);
      console.log("res", res);
    }
    const countDownTimer = (item) => {
      var n = null;
      countDown.value = item;
      if (countDown.value > 0) {
        setTimeout(() => {
          countDown.value -= 1;
        }, 1000);
        return countDown.value;
      }
    };
    const uploadImages = async () => {
      loadingUploadImages.value = true;
      if (images.value.length === 0) {
        alert("Debes subir imagenes");
        return;
      }
      let newArrayImages = [];
      for (let index = 0; index < images.value.length; index++) {
        const element = images.value[index];
        arrayUpload.value = [
          ...arrayUpload.value,
          { name: `file-${index}`, preview: element.preview, completed: false },
        ];
        let resImages = await Promise.all([
          storeFile.uploaderFile({
            file: element.file,
            location: `662298889e18250b6f075b81/example`,
          }),
        ]);
        newArrayImages.push(resImages[0].data);
        if (resImages[0]?.data) {
          arrayUpload.value.map((file) => {
            console.log("file", file);
            if (file.name == `file-${index}`) {
              file.completed = true;
            }
          });
        }
      }
      console.log("AFUERA DEL FOR", newArrayImages);
    };
    const createAution = async () => {
      let dataPost = {
        vin: "W1KZF8DB9MA200007",
        dropOffDate: "2026-04-25T15:03:00.000Z",
        city: "Alberta",
        province: "Lethbridge",
        keysNumber: "2 keys",
        vehicleStatus: {
          status: "Paid OFF",
        },
        buyout: undefined,
        buyNew: {
          anyVehicle: false,
        },
      };
      try {
        let res = await store.create(dataPost);
        if (res.data) {
          console.log("res.data", res.data);
          id_aution.value = res.data._id;
          step.value.step = false;
          step.value.step2 = true;
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    const update = async () => {
      loading.value = true;
      let data = {
        vin: "W1KZF8DB9MA200007",
        dropOffDate: "2026-04-25T15:03:00.000Z",
        city: "Alberta",
        province: "Lethbridge",
        keysNumber: "1 keys",
        vehicleStatus: {
          status: "Paid OFF",
        },
        buyNew: {
          anyVehicle: false,
        },
        startDate: null,
        duration: 45,
        vehicleDetails: {
          odometer: 5000,
          doors: "4 Doors",
          color: "silver",
          driveTrain: "RWD",
          aditionals: "Additionals Packages",
          tireCondition: "Good",
          tireReplacement: "2023",
          brakeCondition: "Brand New",
          brakeReplacement: "2022",
          originalDocument:
            "development/6627ce68d107592cc473718c/original-documents/1713884903372.png",
          driverLicense:
            "development/6627ce68d107592cc473718c/driver-license/1713884903632.png",
          exteriorPhotos: [
            "development/6627ce68d107592cc473718c/front-photo/1713884903902.png",
            "development/6627ce68d107592cc473718c/front/1713884904142.png",
            "development/6627ce68d107592cc473718c/driver-side-(exterior)/1713884904412.png",
            "development/6627ce68d107592cc473718c/'back'/1713884904772.png",
            "development/6627ce68d107592cc473718c/passenger-side/1713884905202.png",
            "development/6627ce68d107592cc473718c/tire-and-rim/1713884905472.png",
          ],
          interiorPhotos: [
            "development/6627ce68d107592cc473718c/drivers-display-(odometer)/1713884905732.png",
            "development/6627ce68d107592cc473718c/drivers-side-(interior)/1713884905972.png",
            "development/6627ce68d107592cc473718c/center-console/1713884906222.png",
            "development/6627ce68d107592cc473718c/rear-seats/1713884906455.png",
          ],
          vehicleDamage: [],
          additionalDocuments: [],
        },
      };
      let res = await store.update({ uuid: id_aution.value, payload: data });
      if (res.data) {
        console.log("res.data", res.data);
        loading.value = false;
        step.value.step = true;
        step.value.step2 = false;
        id_aution.value = null;
      }
    };
    const getDataAution = async (id) => {
      loading.value = true;
      try {
        let res = await store.getAutionById({
          uuid: "665098ad611c4dcd82bb7493",
        });
        if (res) {
          let newArray = [];
          newArray = res.data.vehicleDetails.exteriorPhotos.map(
            (img, index) => {
              let newObjet = {
                id: index,
                img,
                categoryId: 1,
              };
              return newObjet;
            }
          );
          if (newArray.length > 0) {
            for (let index = 0; index < newArray.length; index++) {
              const element = newArray[index];
              arrayEmpty.value.push({
                item: element.id,
              });
            }
            categories.value[1].children = newArray;
            loading.value = false;
            console.log("PEPITOOOOOOOO", categories.value[1].children);
          }
        }
      } catch (error) {
        loading.value = false;
        console.log("error", error);
      }
    };
    const ordenarPhotos = () => {
      console.log(
        "categories.value[1].children.length",
        categories.value[1].children.length
      );
      if (categories.value[1].children.length !== 0) {
        toast("The video exceeds 100mb", {
          type: "error",
        });
      }

      console.log("categories", categories.value);
    };
    /*    watch(notificaciones.value, async (newQuestion, oldQuestion) => {
      console.log('SOKET NOTIFICACIONES',)
      countDownTimer(newQuestion.slice(-1).pop())
    }) */
    /*   watch(powerValue, async (newQuestion, oldQuestion) => {
      porcertanje.value = newQuestion
    })
    watch(showAnimation.value, async (newQuestion, oldQuestion) => {
      if (newQuestion) {

        countDownTimer(newQuestion)
      }
      console.log('newQuestion', newQuestion)
    }) */
    onMounted(async () => {
      /*  getDataAution(); */
      /*  additemArray() */
    });
    return {
      loadimage,
      errorimage,
      step,
      createAution,
      loading,
      update,
      removeImage,
      onFileChange,
      onFileChange,
      images,
      uploadImages,
      loadingUploadImages,
      arrayUpload,
      porcertanje,
      onDrop,
      addToList,
      removeFromList,
      onDragStart,
      categories,
      bucket,
      getDataAution,
      arrayEmpty,
      ordenarPhotos,
      addClass,
      showAnimation,
      dragEnd,
      countDown,
      notificaciones,
      deleteNotification,
      itemRemove,
      counterDelete,
      countDownTimer,
      timer,
    };
  },
};
</script>

<style scoped>
.app {
  text-align: center;
}

#demo {
  margin-top: 200px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.droppable {
  width: 90%;
  padding: 15px;
  border-radius: 5px;
  /*  background: #2c3e50; */
  margin-bottom: 10px;
}

.droppable h4 {
  color: white;
}

.contend-drag .effecto-camera img:nth-child(1) {
  transform: translateY(-20px);
}

.contend-drag .effecto-camera img:nth-child(2) {
  position: absolute;
  opacity: 0.4;
  right: -50px;
  top: 0px;
  transform: rotate(11deg);
  z-index: 10;
  filter: grayscale(1);
}

.contend-drag .effecto-camera img:nth-child(3) {
  position: absolute;
  opacity: 0.4;
  left: -50px;
  top: 0px;
  transform: rotate(350deg);
  z-index: 10;
  filter: grayscale(1);
}

.effecto-camera {
  position: relative;
}

.effecto-camera img:nth-child(1) {
  position: relative;
  z-index: 10;
  transition: 0.5s all ease-in;
}

.effecto-camera img:nth-child(2) {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 10px;
  transform: rotate(11deg);
  z-index: 10;
  transition: all 0.5s ease-out;
  transform: translateY(-20px);
}

.effecto-camera img:nth-child(3) {
  position: absolute;
  opacity: 0;
  left: 0;
  top: 10px;
  transform: rotate(350deg);
  z-index: 10;
  transition: all 0.5s ease-out;
  transform: translateY(-20px);
}

.draggable h5 {
  margin: 0;
}

.child {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
  gap: 10px;
  max-height: 40vh;
  overflow: auto;
}

img {
  width: 100%;
  height: 150px;
  border-radius: 10px;
  margin: auto;
  display: block;
  object-fit: cover;
}

/* 
input[type='file'] {
  display: none;
} */

.custom-file-upload {
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background: #4a8fed;
  padding: 10px;
  color: #fff;
  font: inherit;
  font-size: 16px;
  font-weight: bold;
}
</style>
