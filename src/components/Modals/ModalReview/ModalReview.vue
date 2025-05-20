<template>
    <div v-show="statusModal.isActive"
        class="fixed inset-0 flex md:items-center z-50  items-end  justify-center bg-base-black  bg-opacity-50 ">
        <div v-show="loading"
            class=" bg-[#0000004f] left-0 top-0 absolute w-full h-full flex md:justify-center md:items-center">
            <div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
                <div class="absolute -left-[30px] z-10  h-[80px] w-[80px] ">
                    <div class="animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff"
                            stroke-width="0" viewBox="0 0 16 16">
                            <path
                                d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                            </path>
                        </svg>
                    </div>
                    <p class=" text-white font-medium pl-2  ">Loading...</p>
                </div>
            </div>
        </div>
        <div class="max-w-md overflow-auto rounded-t-md bg-white md:rounded-lg shadow-xl animation-fade-modal">
            <div class="py-2 px-2 md:p-4 md:rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p class="md:text-xl text-white">Input Review</p>
                <svg @click="statusModal.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                    class=" w-6 h-6 md:w-8 md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="py-10 px-4 pb-2">
                <div class="flex gap-3 justify-center flex-col items-center">
                    <img class="w-[60px] h-[60px] object-cover rounded-full  border border-[#4D4D4D] "
                        :src="bucket + statusModal?.dataAutiont?.owner?.seller?.picture" alt="">
                    <p class=" capitalize ">{{ statusModal?.dataAutiont?.owner?.seller?.firstName }} {{
                        statusModal?.dataAutiont?.owner?.seller?.lastName }}</p>
                    <div class="md:hidden">
                        <star-rating :show-rating="false" :active-color="['#FF333E', '#FF9A02', '#FBDB17']"
                            :active-border-color="['#FF333E', '#FF9A02', '#FBDB17']" :padding="3"
                            :active-on-click="true" :star-size="30" v-model:rating="form.raiting"></star-rating>
                    </div>
                    <div class="hidden md:block">
                        <star-rating :show-rating="false" :active-color="['#FF333E', '#FF9A02', '#FBDB17']"
                            :active-border-color="['#FF333E', '#FF9A02', '#FBDB17']" :padding="3"
                            :active-on-click="true" :star-size="40" v-model:rating="form.raiting"></star-rating>
                    </div>

                </div>
                <div class="flex flex-col mt-4 mb-4 gap-2">
                    <p class="font-semibold text-xs md:text-base ">Tell us your experience</p>
                    <textarea :class="error ? 'border-error' : ''" v-model="form.comment"
                        class="border p-4 capitalize focus:outline-none rounded-lg border-[#E0E0E0] h-[110px] md:h-[131px]"
                        name="" placeholder="Tell us your experience" id="" cols="30" rows="10"></textarea>

                    <div class="flex flex-wrap  gap-2">
                        <p v-for="(name, index) in comments" :key="index" @click="selecComment(name)"
                            class="md:p-2 rounded-full text-xs p-1 md:text-base border border-[#E0E0E0] transition-all ease-in duration-200 hover:bg-blue-dark hover:text-primary">
                            {{ name }}</p>
                    </div>
                    <button class="btn bg-primary !text-xs !md:text-base rounded-lg w-full"
                        @click="sendComment">Submit</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { ModalReview } from '@/stores/modalReview';
import { useAuctionStore } from "@/stores/auctions";
import { toast } from "vue3-toastify";
export default {
    props: {
        form: {
            type: Object,
        },
        index: {
            type: Function,
        },

    },
    setup(props) {
        const formData = ref(props.form)
        const statusModal = ModalReview()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const loading = ref(false)
        const storeAutions = useAuctionStore()
        const comments = ref([
            'Superb Shopper',
            'Outstanding Customer',
            'Good',
            'A+ Purchaser',
            'Impressive Customer',
            'Love it',
            'Excellent Client'

        ])
        const form = ref({
            raiting: null,
            comment: null,
        })
        const error = ref(false)
        const next = () => {

        }
        const start = (index) => {

        }
        const selecComment = (comments) => {

            form.value.comment = comments

        }
        const sendComment = async () => {
            if (!form.value.comment || !form.value.raiting) {
                error.value = true
                return
            } else {
                error.value = false
            }
            loading.value = true
            let payload = {
                valoration: form.value?.raiting?.toString(),
                comment: form.value.comment
            }
            try {
                let res = await storeAutions.autionsReview(({ uuid: statusModal.dataAutiont._id, payload }))
            } catch (error) {
                toast(error?.response?.data?.message || 'error', {
                    type: "error",
                });
                form.value.comment = null
                form.value.raiting = null
                statusModal.closeModal(false)
                loading.value = false
                /*   props.index() */
            } finally {
                loading.value = false
                form.value.comment = null
                form.value.raiting = null
                statusModal.closeModal(false)
                /*   props.index() */

            }

        }

        return {
            formData,
            statusModal,
            bucket,
            next,
            start,
            comments,
            form,
            selecComment,
            sendComment,
            loading,
            error
        };
    },
};
</script>