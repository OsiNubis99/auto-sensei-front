

<template>
  <div class="fixed z-[100] inset-0 flex items-center justify-center bg-base-black  bg-opacity-50">
    <div class="max-w-md overflow-auto  bg-white rounded-lg shadow-xl">
      <div class="p-4 rounded-t-lg  bg-base-black flex items-center justify-between">
        <p class="text-xl text-white">Edit & Crop Image</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8  cursor-pointer" fill="none" viewBox="0 0 24 24"
          stroke="#fff">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div v-if="loading">
        <p>Espere....</p>

      </div>
      <div v-else>
        <cropper ref="cropper" class="twitter-cropper" background-class="twitter-cropper__background"
          foreground-class="twitter-cropper__foreground" image-restriction="stencil" :stencil-size="stencilSize"
          :stencil-props="{
            lines: {},
            handlers: {},
            movable: false,
            scalable: false,
            aspectRatio: 1,
            previewClass: 'twitter-cropper__stencil',
          }" :transitions="false" :canvas="false" :debounce="false" :default-size="defaultSize" :min-width="150"
          :min-height="150" :src="img" @change="onChange" />
        <div class="flex justify-between gap-12 p-4">
          <div class="w-full">
            <p>Zoom</p>
            <navigation :zoom="zoom" @change="onZoom" />
          </div>
          <div class="w-full">
            <p>Straight</p>
            <navigation :zoom="zoom" @change="onZoom" />
          </div>
        </div>

      </div>
      <div class="flex w-full justify-end p-4 gap-3">
        <label class="label-upload btn bg-white border border-[#E0E0E0]">
          <input type="file" hidden ref="file" @change="uploadImage($event)" accept="image/*" />
          <div class="btn-up">Replace</div>
        </label>
        <button class="btn bg-primary ">Upload</button>
      </div>
    </div>

  </div>
</template>
  
<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import Navigation from "./Navegation.vue";
import imagen from './Dashboard/imagen.avif'

export default {
  components: {
    Cropper,
    Navigation,
  },
  data() {
    return {
      zoom: 0,
      img:
        "https://images.pexels.com/photos/1111534/pexels-photo-1111534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      loading: false,
    };
  },
  methods: {
    defaultSize({ imageSize }) {
      return {
        width: Math.min(imageSize.height, imageSize.width),
        height: Math.min(imageSize.height, imageSize.width),
      };
    },
    stencilSize({ boundaries }) {
      return {
        width: Math.min(boundaries.height, boundaries.width) - 48,
        height: Math.min(boundaries.height, boundaries.width) - 48,
      };
    },
    uploadImage(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        this.loading = true
        reader.onload = (e) => {
          this.img = e.target.result;
          this.loading = false
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    onChange(result) {
      const cropper = this.$refs.cropper;
      if (cropper) {
        const { coordinates, imageSize } = cropper;
        if (
          imageSize.width / imageSize.height >
          coordinates.width / coordinates.height
        ) {
          // Determine the position of slider bullet
          // It's 0 if the stencil has the maximum size and it's 1 if the has the minimum size
          this.zoom =
            (cropper.imageSize.height - cropper.coordinates.height) /
            (cropper.imageSize.height - cropper.sizeRestrictions.minHeight);
        } else {
          this.zoom =
            (cropper.imageSize.width - cropper.coordinates.width) /
            (cropper.imageSize.width - cropper.sizeRestrictions.minWidth);
        }
      }
    },
    onZoom(value) {
      const cropper = this.$refs.cropper;
      if (cropper) {
        if (cropper.imageSize.height < cropper.imageSize.width) {
          const minHeight = cropper.sizeRestrictions.minHeight;
          const imageHeight = cropper.imageSize.height;
          // Determine the current absolute zoom and the new absolute zoom
          // to calculate the sought relative zoom value
          cropper.zoom(
            (imageHeight - this.zoom * (imageHeight - minHeight)) /
            (imageHeight - value * (imageHeight - minHeight))
          );
        } else {
          const minWidth = cropper.sizeRestrictions.minWidth;
          const imageWidth = cropper.imageSize.width;
          cropper.zoom(
            (imageWidth - this.zoom * (imageWidth - minWidth)) /
            (imageWidth - value * (imageWidth - minWidth))
          );
        }
      }
    },
  },
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