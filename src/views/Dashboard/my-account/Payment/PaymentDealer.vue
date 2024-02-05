<template>
    <div class="bg-white  mb-7 gap-5  shadow-steps p-5 w-full">
        <div class="flex justify-between items-center">
            <div class="flex gap-6">
                <img src="@/assets/svg/review.svg" alt="">
                <div class="flex flex-col ">
                    <p class=" font-semibold text-xl">Payment</p>
                    <p>Input and Arrange Your Payment Details</p>
                </div>
            </div>
            <div>
                <button @click="opeModal" class="btn bg-primary px-6 py-4 text-base-black">Add Credit Card</button>
            </div>
        </div>
        <div class="border px-4 mt-6 py-4 flex justify-between items-center rounded-lg border-[#E0E0E0]">
            <div class="flex  gap-4 items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                        <path
                            d="M37.0367 26.7799L36.6617 24.9049H32.4717L31.805 26.7665L28.4467 26.7732C30.0455 22.9284 31.6477 19.0851 33.2533 15.2432C33.5267 14.5915 34.0117 14.2599 34.7267 14.2632C35.2733 14.2682 36.165 14.2682 37.4033 14.2649L40 26.7749L37.0367 26.7799ZM33.415 22.3365H36.115L35.1067 17.6365L33.415 22.3365ZM11.7667 14.2615L15.1433 14.2649L9.92333 26.7815L6.505 26.7782C5.64541 23.4721 4.79652 20.1632 3.95833 16.8515C3.79167 16.1915 3.46167 15.7299 2.82667 15.5115C2.26167 15.3165 1.32 15.0165 0 14.6082V14.2665H5.395C6.32833 14.2665 6.87333 14.7182 7.04833 15.6449C7.225 16.5732 7.66833 18.9365 8.38167 22.7349L11.7667 14.2615ZM19.7833 14.2649L17.1133 26.7782L13.9 26.7749L16.5667 14.2615L19.7833 14.2649ZM26.3 14.0332C27.2617 14.0332 28.4733 14.3332 29.17 14.6082L28.6067 17.2032C27.9767 16.9499 26.94 16.6082 26.0683 16.6199C24.8017 16.6415 24.0183 17.1732 24.0183 17.6832C24.0183 18.5132 25.3783 18.9315 26.7783 19.8382C28.3767 20.8715 28.5867 21.7999 28.5667 22.8082C28.545 24.9015 26.7783 26.9665 23.0517 26.9665C21.3517 26.9415 20.7383 26.7982 19.3517 26.3065L19.9383 23.5982C21.35 24.1899 21.9483 24.3782 23.155 24.3782C24.26 24.3782 25.2083 23.9315 25.2167 23.1532C25.2233 22.5999 24.8833 22.3249 23.6433 21.6415C22.4033 20.9565 20.6633 20.0082 20.6867 18.1049C20.715 15.6682 23.0233 14.0332 26.3017 14.0332H26.3Z"
                            fill="#09121F" />
                    </svg>
                </div>
                <div>
                    <p class="font-semibold text-lg">**** **** **** 0023</p>
                    <p class="text-[#4D4D4D]">John Cenna</p>
                </div>
            </div>
            <div>
                <button class="btn bg-transparent border text-error  border-[#E0E0E0]">Delete</button>
            </div>
        </div>
        <ModalCrediCardVue v-if="storeModal?.isActive" />
    </div>
</template>
<script>
import { ref, onMounted, watch, computed } from "vue";
import { ModalCrediCard } from '@/stores/modalCrediCard';
import ModalCrediCardVue from "../../../../components/Modals/ModalAddPaymet/ModalCrediCard.vue";
export default {
    props: {
        needReview: {
            type: Array
        },

    },
    components: {
        ModalCrediCardVue
    },
    setup(props) {
        const storeModal = ModalCrediCard()
        const opeModal = () => {
            console.log('storeModal', storeModal)
            storeModal.openModal({ isActive: true })

        }
        return {
            storeModal,
            opeModal
        };
    },
};
</script>