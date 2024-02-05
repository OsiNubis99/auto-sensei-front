<template>
    <div v-show="storeModalFull.isActive"
        class="fixed z-[100] inset-0 flex items-center justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-md overflow-auto  bg-white rounded-lg shadow-xl">
            <div class="p-4 rounded-t-lg  bg-base-black flex items-center justify-between">
                <svg @click="storeModalFull.closeModal()" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8  cursor-pointer" fill="none"
                    viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
        <div>
            <img src="https://s3-alpha-sig.figma.com/img/3e54/d94a/19709983f5c0fb6e2904e7c2e83ea1a7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dThmyLP5azeKO2W-678eRgU6FcKuPXDgzFwZWZ4eN8qATkoNigWFWVKcUFKsjpZUsnKbr16uBdHEhv80G3pzdmzCcTJW0w8FaMAbmMS3oTCz4YAePpjscs74zHAQDEO8ENhCbZ4AfXu4jW12bprqhoYBioJYL24IRHhcO6Y67oN6Mr28wQgWanMAF-WUMQIAkbZm5feORczV6wyUiy3dzpD5MEQuONd~p7ylx93V0BNdgCLGqybhP7SdA-A2B~T3l2jx~D3o2svgTidJSz3JR9sPDivcKfx68d77RA-5qCy0YaAr1X4VoVvEBfxCO2hQTLssQuNdAdw3fUDdulDqmA__" alt="">
        </div>


    </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { ModalImageDetails } from "@/stores/modalFullImagen";
export default {
    props: {
    },
    setup(props) {
        const storeModalFull = ModalImageDetails();
        onMounted(() => {
            console.log('storeModalFull', storeModalFull.index)
        })

        return {
            storeModalFull
        };
    },
};
</script>