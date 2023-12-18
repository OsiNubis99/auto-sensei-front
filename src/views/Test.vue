<template>
    <div class="max-w-6xl mx-auto mt-36"> 
        <div class="flex flex-col">
            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden ">
                        <table class="min-w-full divide-y divide-[#E0E0E0] table-fixed dark:divide-gray-700">
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" class="p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-all" type="checkbox"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-all" class="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] uppercase ">
                                        <div class="flex items-center gap-1">
                                            <p class="!m-0">Dealer</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 14 14" fill="none">
                                                <path
                                                    d="M6.99996 4.66667H4.66721L4.66663 11.6667H3.49996V4.66667H1.16663L4.08329 1.75L6.99996 4.66667ZM12.8333 9.33333L9.91663 12.25L6.99996 9.33333H9.33329V2.33333H10.5V9.33333H12.8333Z"
                                                    fill="#4D4D4D" />
                                            </svg>
                                        </div>

                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] uppercase ">
                                        <div class="flex items-center gap-1">
                                            <p class="!m-0">Status</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 14 14" fill="none">
                                                <path
                                                    d="M6.99996 4.66667H4.66721L4.66663 11.6667H3.49996V4.66667H1.16663L4.08329 1.75L6.99996 4.66667ZM12.8333 9.33333L9.91663 12.25L6.99996 9.33333H9.33329V2.33333H10.5V9.33333H12.8333Z"
                                                    fill="#4D4D4D" />
                                            </svg>
                                        </div>

                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] uppercase ">
                                        <div class="flex items-center gap-1">
                                            <p class="!m-0">Total Purchase</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 14 14" fill="none">
                                                <path
                                                    d="M6.99996 4.66667H4.66721L4.66663 11.6667H3.49996V4.66667H1.16663L4.08329 1.75L6.99996 4.66667ZM12.8333 9.33333L9.91663 12.25L6.99996 9.33333H9.33329V2.33333H10.5V9.33333H12.8333Z"
                                                    fill="#4D4D4D" />
                                            </svg>
                                        </div>

                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] uppercase ">
                                        <div class="flex items-center gap-1">
                                            <p class="!m-0">Success Rate</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 14 14" fill="none">
                                                <path
                                                    d="M6.99996 4.66667H4.66721L4.66663 11.6667H3.49996V4.66667H1.16663L4.08329 1.75L6.99996 4.66667ZM12.8333 9.33333L9.91663 12.25L6.99996 9.33333H9.33329V2.33333H10.5V9.33333H12.8333Z"
                                                    fill="#4D4D4D" />
                                            </svg>
                                        </div>

                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] uppercase ">
                                        History
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] uppercase ">
                                        Actions
                                    </th>
                                    <th scope="col" class="p-4">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td class="p-4 w-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-1" type="checkbox"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6 text-sm flex gap-4 font-medium text-gray-900 whitespace-nowrap ">
                                        <div class="w-10 h-10">
                                            <img class="w-full  rounded-full h-full object-contain"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                                alt="">
                                        </div>
                                        <div class="flex justify-center flex-col">
                                            <p class="p-0 !m-0"> Apple Imac 27"</p>
                                            <p class="p-0 !m-0">5.0 (2.8k)</p>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-[#000] whitespace-nowrap ">
                                        <div
                                            class="relative flex py-1 px-2 rounded-md justify-center items-center bg-[#05A54B14] gap-2">
                                            <div class="w-2 h-2 rounded-full bg-[#05A54B]"></div>
                                            <div class="text-[#05A54B]">Active</div>
                                        </div>
                                        <div
                                            class="relative flex py-1 px-2 rounded-md justify-center items-center bg-[#FF333E14] gap-2">
                                            <div class="w-2 h-2 rounded-full bg-[#FF333E]"></div>
                                            <div class="text-[#FF333E]">Inactive</div>
                                        </div>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        <p class="!m-0">$524,824</p>
                                        <p class="!m-0"> 102 Vehicles</p>

                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        <p class="!m-0 font-medium ">100%</p>
                                        <p class="!m-0">From 94 seller</p>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        <button class="flex gap-1 items-center border p-2 rounded-md border-[#E0E0E0]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <path
                                                    d="M8.00002 2C11.5947 2 14.5854 4.58667 15.2127 8C14.586 11.4133 11.5947 14 8.00002 14C4.40535 14 1.41469 11.4133 0.787354 8C1.41402 4.58667 4.40535 2 8.00002 2ZM8.00002 12.6667C9.35967 12.6664 10.6789 12.2045 11.7419 11.3568C12.8049 10.509 13.5486 9.32552 13.8514 8C13.5475 6.67554 12.8033 5.49334 11.7404 4.64668C10.6776 3.80003 9.35889 3.33902 8.00002 3.33902C6.64115 3.33902 5.32248 3.80003 4.2596 4.64668C3.19673 5.49334 2.45253 6.67554 2.14869 8C2.45142 9.32552 3.19514 10.509 4.25812 11.3568C5.3211 12.2045 6.64037 12.6664 8.00002 12.6667ZM8.00002 11C7.20437 11 6.44131 10.6839 5.8787 10.1213C5.31609 9.55871 5.00002 8.79565 5.00002 8C5.00002 7.20435 5.31609 6.44129 5.8787 5.87868C6.44131 5.31607 7.20437 5 8.00002 5C8.79567 5 9.55873 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55873 10.6839 8.79567 11 8.00002 11ZM8.00002 9.66667C8.44205 9.66667 8.86597 9.49107 9.17853 9.17851C9.49109 8.86595 9.66669 8.44203 9.66669 8C9.66669 7.55797 9.49109 7.13405 9.17853 6.82149C8.86597 6.50893 8.44205 6.33333 8.00002 6.33333C7.55799 6.33333 7.13407 6.50893 6.82151 6.82149C6.50895 7.13405 6.33335 7.55797 6.33335 8C6.33335 8.44203 6.50895 8.86595 6.82151 9.17851C7.13407 9.49107 7.55799 9.66667 8.00002 9.66667Z"
                                                    fill="#0B1107" />
                                            </svg>
                                            View
                                        </button>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                        <button class="flex gap-1 items-center border p-2 rounded-md border-[#E0E0E0]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none">
                                                <path
                                                    d="M8.00008 0.666992L14.3334 4.33366V11.667L8.00008 15.3337L1.66675 11.667V4.33366L8.00008 0.666992ZM8.00008 2.20766L3.00008 5.10232V10.8983L8.00008 13.793L13.0001 10.8983V5.10232L8.00008 2.20766ZM8.00008 10.667C7.29284 10.667 6.61456 10.386 6.11446 9.88594C5.61437 9.38585 5.33341 8.70757 5.33341 8.00033C5.33341 7.29308 5.61437 6.6148 6.11446 6.11471C6.61456 5.61461 7.29284 5.33366 8.00008 5.33366C8.70732 5.33366 9.3856 5.61461 9.8857 6.11471C10.3858 6.6148 10.6667 7.29308 10.6667 8.00033C10.6667 8.70757 10.3858 9.38585 9.8857 9.88594C9.3856 10.386 8.70732 10.667 8.00008 10.667ZM8.00008 9.33366C8.3537 9.33366 8.69284 9.19318 8.94289 8.94313C9.19294 8.69309 9.33341 8.35395 9.33341 8.00033C9.33341 7.6467 9.19294 7.30756 8.94289 7.05752C8.69284 6.80747 8.3537 6.66699 8.00008 6.66699C7.64646 6.66699 7.30732 6.80747 7.05727 7.05752C6.80722 7.30756 6.66675 7.6467 6.66675 8.00033C6.66675 8.35395 6.80722 8.69309 7.05727 8.94313C7.30732 9.19318 7.64646 9.33366 8.00008 9.33366Z"
                                                    fill="#0B1107" />
                                            </svg>
                                            Menu
                                        </button>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import { useFaqStore } from "@/stores/faq";
import iconArrow from '../components/icons/iconArrow.vue'
import iconDelete from '../components/icons/iconDelete.vue'
export default {

    components: {
        iconArrow,
        iconDelete
    },
    setup() {
        const payloadData = ref({
            question: "",
            answer: ''
        });
        const isLoading = ref(false)
        const store = useFaqStore();
        const people = ref([
            {
                name: 'Jane Cooper',
                title: 'Regional Paradigm Technician',
                department: 'Optimization',
                role: 'Admin',
                email: 'jane.cooper@example.com',
                image:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
            },
            {
                name: 'Jane Cooper',
                title: 'Regional Paradigm Technician',
                department: 'Optimization',
                role: 'Admin',
                email: 'jane.cooper@example.com',
                image:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
            },
            {
                name: 'Jane Cooper',
                title: 'Regional Paradigm Technician',
                department: 'Optimization',
                role: 'Admin',
                email: 'jane.cooper@example.com',
                image:
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
            },
        ])
        const index = async () => {
            try {
                await store.index();
            } catch (error) {
                console.log(error);

            }
        };
        const sendQuestion = async () => {
            console.log('question', payloadData.value.question)
            console.log('answer', payloadData.value.answer)

            if (!payloadData.value.answer || !payloadData.value.question) {
                console.log('debes ingresar los campos')
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
                console.log('res', res)
            } catch (error) {
                isLoading.value = false
                console.log('error', error)

            }

        }
        const deleteQuestion = async (faqItem) => {
            console.log('faqItem', faqItem._id)
            isLoading.value = true
            try {
                let res = await store.delete(faqItem._id)
                if (res.status === 200) {
                    index()
                    payloadData.value.answer = ''
                    payloadData.value.question = ''
                    isLoading.value = false
                }
                console.log('res', res)
            } catch (error) {
                isLoading.value = false
                console.log('error', error)

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
            iconArrow,
            isLoading,
            iconDelete,
            people
        };
    },
};
</script>
'
<style scoped>
#outlook a {
    padding: 0;
}

.ReadMsgBody {
    width: 100%;
}

.ExternalClass {
    width: 100%;
}

.ExternalClass * {
    line-height: 100%;
}

body {
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

table,
td {
    border-collapse: collapse;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
}

img {
    border: 0;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
}

p {
    display: block;
    margin: 13px 0;
}

@media only screen and (min-width:480px) {

    .mj-column-per-100,
    * [aria-labelledby="mj-column-per-100"] {
        width: 100% !important;
    }
}

@media only screen and (max-width:480px) {
    @-ms-viewport {
        width: 320px;
    }

    @viewport {
        width: 320px;
    }
}
</style>
  