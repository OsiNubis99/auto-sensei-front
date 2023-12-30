<template>
    <div class="mx-auto bg-[#F0F0F0] h-screen">
        <div class="flex justify-between p-5">
            <div class="w-[20%]  ">
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search about dealer here" required>
                </div>
            </div>
            <div class="flex  items-center gap-3">
                <button class="flex gap-2 rounded-md py-1 px-2 bg-white items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 16 17" fill="none">
                        <path
                            d="M6.66667 12.5H9.33333V11.1667H6.66667V12.5ZM2 4.5V5.83333H14V4.5H2ZM4 9.16667H12V7.83333H4V9.16667Z"
                            fill="#09121F" />

                    </svg>
                    <p class="!m-0">Filter</p>
                </button>
                <button class="flex gap-2 rounded-md py-1 px-2 bg-white items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path
                            d="M12.6667 2.5L15.3333 5.83333H13.3333V13.8333H12V5.83333H10L12.6667 2.5ZM9.33333 12.5V13.8333H2V12.5H9.33333ZM9.33333 7.83333V9.16667H2V7.83333H9.33333ZM8 3.16667V4.5H2V3.16667H8Z"
                            fill="#09121F" />
                    </svg>
                    <p class="!m-0">Sort</p>
                </button>
            </div>
        </div>
        <template v-if="store?.userDealers?.data?.length == 0">
            <div style="inline-size: auto;"
                class="w-full flex  rounded-lg m-5 shadow-xl  bg-white justify-center items-center">
                <div class=" text-gray-500 capitalize py-12 px-36 ">
                    there are no users
                </div>
            </div>
        </template>
        <template v-else>
            <div v-if="isLoading" class=" left-0 top-0 absolute w-full h-full flex justify-center items-center">
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
                        <p class=" text-base-gray font-medium pl-2 ">Loading...</p>
                    </div>
                </div>
            </div>
            <div v-else class="flex p-5 flex-col">
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="inline-block min-w-full align-middle">
                        <div class="overflow-hidden ">
                            <table class="min-w-full bg-white divide-y divide-[#E0E0E0] table-fixed dark:divide-gray-700">
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
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] capitalize ">
                                            <div class="flex items-center gap-1">
                                                <p class="!m-0">Dealer</p>
                                                <svg @click="order" class="cursor-pointer "
                                                    xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 14 14" fill="none">
                                                    <path
                                                        d="M6.99996 4.66667H4.66721L4.66663 11.6667H3.49996V4.66667H1.16663L4.08329 1.75L6.99996 4.66667ZM12.8333 9.33333L9.91663 12.25L6.99996 9.33333H9.33329V2.33333H10.5V9.33333H12.8333Z"
                                                        fill="#4D4D4D" />
                                                </svg>
                                            </div>

                                        </th>
                                        <th scope="col"
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] capitalize ">
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
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] capitalize ">
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
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] capitalize ">
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
                                        <th scope="col" class="flex h-full py-4 px-6 justify-center gap-4">
                                            <div
                                                class="w-[50%] justify-end text-sm flex gap-4 font-medium text-gray-900 whitespace-nowrap  ">
                                                <div
                                                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] capitalize ">
                                                    History
                                                </div>
                                                <div
                                                    class="py-3 pl-0 px-6 text-xs font-medium tracking-wider text-left text-[#000] capitalize ">
                                                    Actions
                                                </div>
                                            </div>

                                            <div
                                                class="w-[50%]  justify-start text-sm flex gap-3 font-medium text-gray-900 whitespace-nowrap ">
                                                <p
                                                    class="py-3 px-6 pl-0 text-xs font-medium tracking-wider text-left text-[#000] capitalize ">
                                                    Confirmation</p>

                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-[#E0E0E0] ">
                                    <tr v-for="(user, index) in now" :key="user?.id"
                                        :class="index % 2 !== 0 ? 'bg-[#e0e0e026]' : ''"
                                        class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td class="p-4 w-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-1" type="checkbox"
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <td
                                            class="py-4 px-6 text-sm flex gap-4 font-medium text-gray-900 whitespace-nowrap ">
                                            <div class="w-10 h-10">
                                                <img v-if="user?.dealer?.picture"
                                                    class="w-full shadow-md   rounded-full h-full object-cover"
                                                    :src="bucket + user?.dealer?.picture" alt="">
                                                <img v-else class="w-full shadow-md  rounded-full h-full object-cover"
                                                    src="https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA="
                                                    alt="">
                                            </div>
                                            <div class="flex justify-center flex-col">
                                                <p class="p-0 !m-0 capitalize"> {{ user?.dealer?.name }}</p>
                                                <div class=" flex items-center gap-1">
                                                    <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="15"
                                                        height="15" viewBox="0 0 14 13" fill="none">
                                                        <path
                                                            d="M6.55778 0.838169C6.74538 0.482596 7.25462 0.482596 7.44222 0.83817L9.02481 3.83773C9.09716 3.97486 9.22902 4.07066 9.38179 4.09709L12.7236 4.67531C13.1197 4.74385 13.2771 5.22817 12.9969 5.51647L10.6332 7.94852C10.5251 8.0597 10.4748 8.21471 10.4968 8.36817L10.9796 11.7251C11.0368 12.123 10.6248 12.4224 10.2641 12.245L7.22062 10.7485C7.0815 10.6801 6.9185 10.6801 6.77938 10.7485L3.73593 12.245C3.37516 12.4224 2.96317 12.123 3.0204 11.7251L3.50316 8.36817C3.52523 8.21471 3.47486 8.0597 3.36681 7.94852L1.0031 5.51647C0.722898 5.22817 0.880263 4.74385 1.27641 4.67531L4.61821 4.09709C4.77098 4.07066 4.90284 3.97486 4.97519 3.83773L6.55778 0.838169Z"
                                                            fill="#D6C000" />
                                                    </svg>
                                                    <p class="p-0 !m-0 ">5.0 (2.8k)</p>

                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-[#000] whitespace-nowrap ">
                                            <div v-if="user.status == 'active'"
                                                class="relative w-fit flex py-1 px-2 rounded-md justify-center items-center bg-[#05A54B14] gap-2">
                                                <div class="w-2 h-2 rounded-full bg-[#05A54B]"></div>
                                                <div class="text-[#05A54B] capitalize ">{{ user.status }}</div>
                                            </div>
                                            <div v-else
                                                class="relative flex py-1 px-2 rounded-md justify-center items-center bg-[#FF333E14] gap-2">
                                                <div class="w-2 h-2 rounded-full bg-[#FF333E]"></div>
                                                <div class="text-[#FF333E] capitalize ">{{ user.status }} </div>
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
                                        <div class="flex h-full py-4 px-6 justify-center gap-4 ">
                                            <td
                                                class="w-[50%] justify-end text-sm flex gap-4 font-medium text-gray-900 whitespace-nowrap ">
                                                <button
                                                    class="flex gap-1 items-center border p-2 rounded-md border-[#E0E0E0]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 16 16" fill="none">
                                                        <path
                                                            d="M8.00002 2C11.5947 2 14.5854 4.58667 15.2127 8C14.586 11.4133 11.5947 14 8.00002 14C4.40535 14 1.41469 11.4133 0.787354 8C1.41402 4.58667 4.40535 2 8.00002 2ZM8.00002 12.6667C9.35967 12.6664 10.6789 12.2045 11.7419 11.3568C12.8049 10.509 13.5486 9.32552 13.8514 8C13.5475 6.67554 12.8033 5.49334 11.7404 4.64668C10.6776 3.80003 9.35889 3.33902 8.00002 3.33902C6.64115 3.33902 5.32248 3.80003 4.2596 4.64668C3.19673 5.49334 2.45253 6.67554 2.14869 8C2.45142 9.32552 3.19514 10.509 4.25812 11.3568C5.3211 12.2045 6.64037 12.6664 8.00002 12.6667ZM8.00002 11C7.20437 11 6.44131 10.6839 5.8787 10.1213C5.31609 9.55871 5.00002 8.79565 5.00002 8C5.00002 7.20435 5.31609 6.44129 5.8787 5.87868C6.44131 5.31607 7.20437 5 8.00002 5C8.79567 5 9.55873 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55873 10.6839 8.79567 11 8.00002 11ZM8.00002 9.66667C8.44205 9.66667 8.86597 9.49107 9.17853 9.17851C9.49109 8.86595 9.66669 8.44203 9.66669 8C9.66669 7.55797 9.49109 7.13405 9.17853 6.82149C8.86597 6.50893 8.44205 6.33333 8.00002 6.33333C7.55799 6.33333 7.13407 6.50893 6.82151 6.82149C6.50895 7.13405 6.33335 7.55797 6.33335 8C6.33335 8.44203 6.50895 8.86595 6.82151 9.17851C7.13407 9.49107 7.55799 9.66667 8.00002 9.66667Z"
                                                            fill="#0B1107" />
                                                    </svg>
                                                    View
                                                </button>
                                                <button
                                                    class="flex gap-1 items-center border p-2 rounded-md border-[#E0E0E0]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 16 16" fill="none">
                                                        <path
                                                            d="M8.00008 0.666992L14.3334 4.33366V11.667L8.00008 15.3337L1.66675 11.667V4.33366L8.00008 0.666992ZM8.00008 2.20766L3.00008 5.10232V10.8983L8.00008 13.793L13.0001 10.8983V5.10232L8.00008 2.20766ZM8.00008 10.667C7.29284 10.667 6.61456 10.386 6.11446 9.88594C5.61437 9.38585 5.33341 8.70757 5.33341 8.00033C5.33341 7.29308 5.61437 6.6148 6.11446 6.11471C6.61456 5.61461 7.29284 5.33366 8.00008 5.33366C8.70732 5.33366 9.3856 5.61461 9.8857 6.11471C10.3858 6.6148 10.6667 7.29308 10.6667 8.00033C10.6667 8.70757 10.3858 9.38585 9.8857 9.88594C9.3856 10.386 8.70732 10.667 8.00008 10.667ZM8.00008 9.33366C8.3537 9.33366 8.69284 9.19318 8.94289 8.94313C9.19294 8.69309 9.33341 8.35395 9.33341 8.00033C9.33341 7.6467 9.19294 7.30756 8.94289 7.05752C8.69284 6.80747 8.3537 6.66699 8.00008 6.66699C7.64646 6.66699 7.30732 6.80747 7.05727 7.05752C6.80722 7.30756 6.66675 7.6467 6.66675 8.00033C6.66675 8.35395 6.80722 8.69309 7.05727 8.94313C7.30732 9.19318 7.64646 9.33366 8.00008 9.33366Z"
                                                            fill="#0B1107" />
                                                    </svg>
                                                    Menu
                                                </button>
                                            </td>
                                            <td
                                                class="w-[50%] justify-start text-sm flex gap-3 font-medium text-gray-900 whitespace-nowrap ">
                                                <button @click="confirmDealer(user)"
                                                    class="flex gap-1 bg-primary items-center border p-2 rounded-md border-[#E0E0E0]">
                                                    Accept
                                                </button>
                                                <button @click="rejetDealer(user)"
                                                    class="flex gap-1 items-center border p-2 bg-error text-white rounded-md border-[#E0E0E0]">
                                                    Reject
                                                </button>
                                            </td>
                                        </div>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="flex mt-7 items-center justify-between  rounded-lg bg-white px-4 py-3 sm:px-6">
                    <div class="flex flex-1 justify-between sm:hidden">
                        <a href="#"
                            class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                        <a href="#"
                            class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                    </div>
                    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing
                                <span class="font-medium">1</span>
                                to
                                <span class="font-medium">10</span>
                                of
                                <span class="font-medium">97</span>
                                results
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a href="#"
                                    class="relative mr-2 inline-flex items-center rounded-lg px-2 py-2 text-gray-400 bg-transparent border border-[#E0E0E0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span class="sr-only">Previous</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                        fill="none">
                                        <path
                                            d="M5.71875 7.83312H13.8334V9.16645H5.71875L9.29475 12.7425L8.35208 13.6851L3.16675 8.49979L8.35208 3.31445L9.29475 4.25712L5.71875 7.83312Z"
                                            fill="#0B1107" />
                                    </svg>
                                </a>
                                <div>
                                    <a href="#" aria-current="page"
                                        class="relative rounded-lg mr-1 z-10 inline-flex items-center bg-indigo-600 px-4 py-2 bg-base-black text-sm font-semibold text-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                    <a href="#"
                                        class="relative rounded-lg mr-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-[#F0F0F0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                    <a href="#"
                                        class="relative rounded-lg mr-1 hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-[#F0F0F0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                    <span
                                        class="relative rounded-lg mr-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 bg-[#F0F0F0] focus:outline-offset-0">...</span>
                                    <a href="#"
                                        class="relative rounded-lg mr-1 hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-[#F0F0F0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                    <a href="#"
                                        class="relative rounded-lg mr-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-[#F0F0F0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                    <a href="#"
                                        class="relative rounded-lg mr-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-[#F0F0F0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                                </div>

                                <a href="#"
                                    class="relative inline-flex items-center rounded-lg px-2 py-2 text-gray-400  bg-transparent border border-[#E0E0E0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span class="sr-only">Next</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                        fill="none">
                                        <path
                                            d="M11.2814 7.83312L7.70541 4.25712L8.64808 3.31445L13.8334 8.49979L8.64808 13.6851L7.70541 12.7425L11.2814 9.16645H3.16675V7.83312H11.2814Z"
                                            fill="#0B1107" />
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <div class="container mx-auto">
            <div v-show="isOpen" class="fixed inset-0 flex items-center justify-center bg-base-black bg-opacity-50">
                <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
                    <div class="flex items-center justify-between">
                        <h3 class="text-2xl">Model Title</h3>
                        <svg @click="isOpen = false" xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 text-red-900 cursor-pointer" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="mt-4">
                        <p class="mb-4 text-sm">
                            Are you sure you want to Accept/Reject this auction?
                        </p>
                        <div class="flex w-full justify-end">
                            <button @click="isOpen = false" class="px-6 py-2 text-blue-800 border border-blue-600 rounded">
                                Cancel
                            </button>
                            <button class="px-6 py-2 ml-2 text-blue-100 bg-primary rounded">
                                Accept
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { toast } from "vue3-toastify";
export default {
    setup() {
        const store = useUserStore();
        const isLoading = ref(false)
        const orderName = ref(false)
        const isOpen = ref(false)
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const now = ref(computed(() => store.userDealers.data))
        const getUserDealer = async () => {
            isLoading.value = true
            try {
                await store.getUserDealers()
            } catch (error) {
                console.log('error', error)
                isLoading.value = false

            } finally {
                isLoading.value = false
            }

        }
        const order = (string) => {
            orderName.value = !orderName.value
            if (orderName.value) {
                return now.value.sort((a, b) => (a.dealer.name > b.dealer.name ? 1 : -1));
            } else {
                return now.value.sort((a, b) => (a.dealer.name > b.dealer.name ? -1 : 1));
            }


        }
        const confirmDealer = async (user) => {
            isLoading.value = true
            try {
                await store.activeUser(user._id)
                isLoading.value = false

            } catch (error) {
                toast(error.response.data.message || 'An error has occurred try again', { type: "error" });
                isLoading.value = false
            }
        }
        const rejetDealer = async (user) => {
            isLoading.value = true
            try {
                await store.inactivateUser(user._id)
                isLoading.value = false

            } catch (error) {
                toast(error.response.data.message || 'An error has occurred try again', { type: "error" });
                isLoading.value = false
            }
        }


        onMounted(() => {
            getUserDealer()
        })
        return {
            isLoading,
            store,
            order,
            now,
            isOpen,
            confirmDealer,
            rejetDealer,
            bucket
        };
    },
};
</script>


  