<template>
    <div class="md:px-4 relative sm:px-6 lg:px-8 overflow-hidden bg-[#F3F5F7] md:py-8 w-full max-w-9xl mx-auto">
        <h1 class="text-4xl hidden md:block font-semibold mb-9 ">FAQ</h1>
        <div class="grid  md:grid-cols-2 gap-12">
            <div v-if="isLoading" class="w-full h-[30%] absolute left-0 flex justify-center items-center">
                <div class="text-indigo-700">
                    <div class="h-[40px] w-[40px]  md:h-[80px] md:w-[80px] ">
                        <div class="animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff"
                                stroke-width="0" viewBox="0 0 16 16">
                                <path
                                    d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                                </path>
                            </svg>
                        </div>
                        <p class=" text-base-gray font-medium pl-2 ">Loading...</p>
                    </div>
                </div>
            </div>
            <div v-else class="space-y-6 hidden md:block ">
                <div class="mt-1">
                    <label htmlFor="name" class="block text-sm font-medium text-gray-700">
                        Question
                    </label>
                    <div class="mt-1">
                        <input name="question" type="text" v-model="payloadData.question" placeholder="Question"
                            class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <div class="mt-1">
                    <label htmlFor="name" class="block text-sm font-medium text-gray-700">
                        Answer
                    </label>
                    <div class="mt-1">
                        <input name="question" type="text" v-model="payloadData.answer" placeholder="Answer"
                            class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <button v-if="!faqUpdate" class="btn mt-10 text-base-black bg-primary"
                    @click="sendQuestion">Send</button>
                <button v-else class="btn mt-10 text-base-black bg-primary" @click="updateQuestion">Update</button>
            </div>
            <div v-if="!isLoading"
                class="px-4 inline-block md:hidden z-40 bg-white shadow-lg py-3 fixed md:sticky top-12">
                <p class="text-md font-semibold ">FAQ</p>
                <div class="flex gap-3">
                    <div>
                        <label htmlFor="name" class="block text-xs font-medium text-gray-700">
                            Question
                        </label>
                        <div>
                            <input name="question" type="text" v-model="payloadData.question" placeholder="Question"
                                class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" class="block text-xs font-medium text-gray-700">
                            Answer
                        </label>
                        <div>
                            <input name="question" type="text" v-model="payloadData.answer" placeholder="Answer"
                                class="appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                    </div>
                </div>

                <button v-if="!faqUpdate" class="btn w-full mt-3 text-base-black bg-primary"
                    @click="sendQuestion">Send</button>
                <button v-else class="btn w-full mt-3 text-base-black bg-primary"
                    @click="updateQuestion">Update</button>
            </div>
            <div v-if="!isLoading"
                class="grid px-4 pt-10 mt-32 md:mt-0 md:grid-cols-2 items-left  custom-screen-faq  md:gap-4  overflow-y-auto overflow-x-hidden  ">
                <div v-if="store.data.length > 0" v-for="(faq, index) in store.data" :key="index">
                    <div :class="`animate-fade-up  animate-ease-in-out  animate-delay-${2 - index}00`"
                        class="group outline-none h-fit accordion-section  border-[1px] rounded-xl bg-[#191F26] border-[#4D5865]"
                        tabindex="1">
                        <div
                            class="group bg-gray-900 flex justify-between py-1 px-2  md:px-4 md:py-3 items-center text-white transition ease duration-500 cursor-pointer pr-4 relative">
                            <div
                                class="group-focus:text-primary text-xs md:text-lg font-medium transition ease duration-500">
                                {{ faq.question }}
                            </div>
                            <div class="flex justify-center items-center">

                                <div
                                    class=" w-4  md:h-8 md:w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180  mb-auto ml-auto  mr-2">
                                    <iconArrow />
                                </div>
                                <div class="mr-4 w-3">
                                    <iconDelete @click="deleteQuestion(faq)" />
                                </div>
                                <div class="w-2">
                                    <iconPincel @click="updatective(faq)" />
                                </div>
                            </div>
                        </div>
                        <div
                            class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
                            <p class="p-2  text-white text-xs text-justify">
                                {{ faq.answer }}
                            </p>
                        </div>
                    </div>
                    <div
                        :class="`animate-fade-up mt-2 p-4 pt-0 flex justify-between items-center animate-ease-in-out  animate-delay-${2 - index}00`">
                        <p class="text-[12px] font-semibold ">Create: <span class="font-normal  text-[10px]"> {{
                faq.createdAt }}</span>
                        </p>
                        <p class="text-[12px] font-semibold ">Update: <span class="font-normal text-[10px] ">{{
                faq.createdAt }} </span>
                        </p>
                    </div>

                </div>
                <div class="col-span-2 flex justify-center items-center w-full" v-else>
                    <p> No FAQ created</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import { useFaqStore } from "@/stores/faq";
import iconArrow from '@/components/icons/iconArrow.vue'
import iconDelete from '@/components/icons/iconDelete.vue'
import iconPincel from '@/components/icons/iconPincel.vue'

import { toast } from "vue3-toastify";
export default {

    components: {
        iconArrow,
        iconDelete,
        iconPincel,
    },
    setup() {
        const payloadData = ref({
            question: "",
            answer: ''
        });
        const faqUpdate = ref(false)
        const isLoading = ref(false)
        const store = useFaqStore();
        const dataEdit = ref('')
        const index = async () => {
            try {
                await store.index();
            } catch (error) {

            }
        };
        const sendQuestion = async () => {

            if (!payloadData.value.answer || !payloadData.value.question) {
                toast("Required field", {
                    type: "error",
                });
                return
            }
            isLoading.value = true
            let data = {
                question: payloadData.value.question,
                answer: payloadData.value.answer,
            }
            try {
                let res = await store.create(data)
                if (res.status === 200) {
                    index()
                    payloadData.value.answer = ''
                    payloadData.value.question = ''
                    isLoading.value = false
                }

            } catch (error) {
                isLoading.value = false


            }

        }
        const deleteQuestion = async (faqItem) => {
            isLoading.value = true
            try {
                let res = await store.delete(faqItem._id)
                if (res.status === 200) {
                    index()
                    payloadData.value.answer = ''
                    payloadData.value.question = ''
                    isLoading.value = false
                    toast("Removed", {
                        type: "success",
                    });
                }

            } catch (error) {
                isLoading.value = false


            }

        }
        const updatective = (faqItem) => {
            dataEdit.value = faqItem
            faqUpdate.value = true
            payloadData.value.question = faqItem.question
            payloadData.value.answer = faqItem.answer
        }
        const updateQuestion = async (faqItem) => {
            let dataUpdate = {
                question: payloadData.value.question,
                answer: payloadData.value.answer
            }

            isLoading.value = true
            try {
                let res = await store.update({ uuid: dataEdit.value._id, payload: dataUpdate })
                if (res.status === 200) {
                    index()
                    payloadData.value.answer = ''
                    payloadData.value.question = ''
                    isLoading.value = false
                    faqUpdate.value = false
                    toast("Update", {
                        type: "success",
                    });
                }

            } catch (error) {
                isLoading.value = false
                faqUpdate.value = false


            }

        }
        onMounted(() => {
            index();
        });
        return {
            payloadData,
            store,
            sendQuestion,
            deleteQuestion,
            updateQuestion,
            updatective,
            iconArrow,
            isLoading,
            iconDelete,
            iconPincel,
            faqUpdate,
            dataEdit
        };
    },
};
</script>
'