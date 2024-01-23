<template>
    <div v-show="statusModal.isActive"
        class="fixed inset-0 flex items-center z-50 justify-center bg-base-black  bg-opacity-50">
        <div v-show="loading" class=" bg-[#0000004f] left-0 top-0 absolute w-full h-full flex justify-center items-center">
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
        <div class="max-w-md overflow-auto  bg-white rounded-lg shadow-xl">
            <div class="p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p class="text-xl text-white">Input Review</p>
                <svg @click="statusModal.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="py-10 px-4 pb-2">
                <div class="flex gap-3 justify-center flex-col items-center">
                    <img class="w-[60px] h-[60px] object-cover rounded-full  border border-[#4D4D4D] "
                        src="https://s3-alpha-sig.figma.com/img/c22b/31d7/d8ccc0e8074d79512ca764e61a530b58?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dinTyujwEF8v4eniC8Ord8p3s4U1a0QsZBfhzKFQ7XtjSWEsBl3Qsqh~37VMY1QyRFqmokbNkFeSYASxCTI2LLlbH7IBOqLFFBe6YE8DghoQvSzsO-4TjHAH5XfEDJgAAVI0eE5T~jeknz1dJPp~rHWDLZgNrX5H0apLQW4vxqXnari0pKQZHN9qJ8a7cwoiUGkQ7i2jcTDEbNX2WSAaPp9yH~AJVaxxNObjYck8LJ80DRY7cFSo4oKk9fCbxaE~j0Qr4M0-3xw6ADPUSYkyyfnhxH7XBhTCPA24IHsDhooC9XHi8BMl0vYCMQ~rSG48NGgrYnbYnFktifUt5jCNOQ__"
                        alt="">
                    <p>Maple Leaf Motors</p>
                    <div class="flex gap-2 items-center">
                        <svg v-for="(item, index) in 5" :key="index" xmlns="http://www.w3.org/2000/svg" width="60"
                            height="60" viewBox="0 0 40 40" fill="none">
                            <path @click="start(index)" class="
                            hover:fill-error transition-all ease-in duration-200"
                                d="M20.261 28.4928C20.101 28.3951 19.8998 28.3951 19.7398 28.4928L11.2296 33.6905C10.85 33.9223 10.3794 33.5803 10.4826 33.1477L12.7962 23.4474C12.8397 23.265 12.7775 23.0736 12.6351 22.9517L5.06345 16.4658C4.72567 16.1764 4.90545 15.6232 5.34879 15.5876L15.2876 14.7914C15.4745 14.7764 15.6373 14.6581 15.7093 14.485L19.5387 5.27709C19.7095 4.86642 20.2913 4.86642 20.4621 5.27709L24.2914 14.485C24.3634 14.6581 24.5263 14.7764 24.7132 14.7914L34.6535 15.5876C35.0968 15.6232 35.2766 16.1765 34.9388 16.4658L27.3657 22.9517C27.2233 23.0736 27.1611 23.265 27.2046 23.4474L29.5182 33.1477C29.6214 33.5803 29.1508 33.9223 28.7712 33.6905L20.261 28.4928Z"
                                fill="#C2C2C2" />
                        </svg>
                    </div>
                </div>

                <div class="flex flex-col mt-4 mb-4 gap-2">
                    <p class="font-semibold ">Tell us your experience</p>
                    <textarea v-model="form"
                        class="border p-4 capitalize focus:outline-none rounded-lg border-[#E0E0E0] h-[131px]" name=""
                        placeholder="Tell us your experience" id="" cols="30" rows="10"></textarea>

                    <div class="flex flex-wrap  gap-2">
                        <p v-for="(name, index) in comments" :key="index" @click="selecComment(name)"
                            class="p-2 rounded-full border border-[#E0E0E0] transition-all ease-in duration-200 hover:bg-blue-dark hover:text-primary">
                            {{ name }}</p>
                    </div>
                    <button class="btn bg-primary rounded-lg w-full" @click="sendComment">Submit</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { ModalReview } from '@/stores/modalReview';
export default {
    props: {
        form: {
            type: Object,
        },

    },
    setup(props) {
        const formData = ref(props.form)
        const statusModal = ModalReview()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const loading = ref(false)
        onMounted(() => {
            console.log('formData.value', formData.value)
        })
        const comments = ref([
            'Superb Shopper',
            'Outstanding Customer',
            'Good',
            'A+ Purchaser',
            'Impressive Customer',
            'Love it',
            'Excellent Client'

        ])
        const form = ref('')
        const next = () => {
            console.log('hola')
        }
        const start = (index) => {
            console.log('index', index += 1)

        }
        const selecComment = (comments) => {
            console.log('comments', comments)
            form.value = comments

        }
        const sendComment = () => {
            loading.value = true
            try {
                setTimeout(() => {
                    loading.value = false

                }, 1500);

            } catch (error) {

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
            loading
        };
    },
};
</script>