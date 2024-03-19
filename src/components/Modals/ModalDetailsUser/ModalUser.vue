<template>
    <div v-show="statusModal.isActive"
        class="fixed inset-0 flex items-end md:items-center z-50 justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-6xl overflow-auto   rounded-lg shadow-xl animation-fade-modal bg-[#F9F9F9]">
            <div class="p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p class="text-sm md:text-xl text-white">View Details</p>
                <svg @click="statusModal.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="p-5">
                user

            </div>

        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { ModalUserDetails } from '@/stores/ModalUserDetails';
import moment from "moment";
export default {
    props: {
        cancelAution: {
            type: Function,
        },
    },
    setup(props) {
        const statusModal = ModalUserDetails()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const cancel = () => {
            statusModal.closeModal()
        }

        return {
            statusModal,
            cancel,
            bucket,
            moment,
        };
    },
};
</script>