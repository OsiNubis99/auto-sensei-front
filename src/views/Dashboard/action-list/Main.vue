<template>
    <div v-if="loading" class=" flex flex-col h-screen mb-7 gap-5 items-start  p-5 w-full">
        <div class="  w-full h-full flex justify-center items-center">
            <div class="text-indigo-700">
                <div class="h-[80px] w-[80px] ">
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
    </div>
    <template v-else>
        <div class="mx-auto bg-[#F0F0F0] h-screen">
            <div class="flex justify-between p-5">
                <div class="flex gap-7">
                    <RouterLink :to="{ name: 'action-list', query: { state: 'drafts' } }" @click="changeSeccion('drafts')"
                        :class="stateTable == 'drafts' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn font-semibold ">
                        Drafts (325)
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'unapproved' } }"
                        @click="changeSeccion('unapproved')"
                        :class="stateTable == 'unapproved' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold shadow-md capitalize  ">
                        Unapproved
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'upcoming' } }"
                        @click="changeSeccion('upcoming')"
                        :class="stateTable == 'upcoming' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold shadow-md capitalize  ">
                        Upcoming
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'live' } }" @click="changeSeccion('live')"
                        :class="stateTable == 'live' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold shadow-md capitalize  ">
                        Live
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'completed' } }"
                        @click="changeSeccion('completed')"
                        :class="stateTable == 'completed' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold shadow-md capitalize  ">
                        Completed
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'canceled' } }"
                        @click="changeSeccion('canceled')"
                        :class="stateTable == 'canceled' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold shadow-md capitalize  ">
                        Cancelled
                    </RouterLink>
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
            <div class="flex p-5 flex-col">
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
                                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] uppercase ">
                                            <div class="flex items-center gap-1">
                                                <p class="!m-0">Auctions Title</p>
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
                                                <p class="!m-0">Seller</p>
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
                                                <p class="!m-0">Created</p>
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
                                                <p class="!m-0">Status Car</p>
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
                                                    Actions
                                                </div>
                                                <div
                                                    class="py-3  px-6 text-xs opacity-0 font-medium tracking-wider text-left text-[#000] capitalize ">
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
                                    <tr v-for="(  aution, index  ) in   dataTable  " :key="aution?.id"
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
                                                <img v-if="aution.owner.seller.picture"
                                                    class="w-full shadow-md   rounded-full h-full object-cover"
                                                    :src=" bucket + aution.owner.seller.picture"
                                                    alt="">
                                                <img v-else class="w-full shadow-md  rounded-full h-full object-cover"
                                                    src="https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA="
                                                    alt="">
                                            </div>
                                            <div class="flex justify-center flex-col">
                                                <p class="p-0 !m-0 capitalize"> {{ aution?.vehicleDetails?.model }}</p>
                                                <p class="p-0 uppercase font-normal  text-[#4D4D4D] !m-0">{{
                                                    aution?.vehicleDetails?.vin }}</p>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-[#000] whitespace-nowrap ">
                                            <p class="!m-0 font-extrabold capitalize">{{ aution.owner.seller.firstName }} {{
                                                aution.owner.seller.lastName }}</p>
                                            <p class="!m-0">Banff, Alberta</p>
                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">

                                            <p class="p-0 !m-0"> {{ aution?.createDay }}</p>
                                            <p class="p-0 !m-0">{{ aution?.createHour }}</p>

                                        </td>
                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                            <div v-if="aution?.vehicleStatus == 'PaidOff'"
                                                class="relative w-fit  flex py-1 px-2 rounded-md justify-center items-center bg-[#05A54B14] gap-2">
                                                <p class="text-[#05A54B] capitalize">PaidOff</p>
                                            </div>
                                            <div v-else-if="aution?.vehicleStatus == 'Financed'"
                                                class="relative w-fit flex py-1 px-2 rounded-md justify-center items-center bg-[#6D53B014] gap-2">
                                                <p class="text-[#6D53B0] capitalize">Financed</p>
                                            </div>
                                            <div v-else-if="aution?.vehicleStatus == 'Leased'"
                                                class="relative  w-fit flex py-1 px-2 rounded-md justify-center items-center bg-[#1F94F014] gap-2">
                                                <p class="text-[#1F94F0] capitalize">Leased</p>
                                            </div>
                                            <div v-else
                                                class="relative w-fit  flex py-1 px-2 rounded-md justify-center items-center bg-[#7b7b7b14] gap-2">
                                                <p class="text-[#FF333E] capitalize">there is no state</p>
                                            </div>
                                        </td>
                                        <div class="flex h-full py-4 px-6 justify-center gap-4 ">
                                            <td
                                                class="w-[50%] justify-end text-sm flex gap-4 font-medium text-gray-900 whitespace-nowrap ">
                                                <RouterLink
                                                    :to="{ name: 'action-details-admin', query: { data: JSON.stringify(aution) } }"
                                                    class="flex gap-1 items-center border p-2 rounded-md border-[#E0E0E0]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 16 16" fill="none">
                                                        <path
                                                            d="M8.00002 2C11.5947 2 14.5854 4.58667 15.2127 8C14.586 11.4133 11.5947 14 8.00002 14C4.40535 14 1.41469 11.4133 0.787354 8C1.41402 4.58667 4.40535 2 8.00002 2ZM8.00002 12.6667C9.35967 12.6664 10.6789 12.2045 11.7419 11.3568C12.8049 10.509 13.5486 9.32552 13.8514 8C13.5475 6.67554 12.8033 5.49334 11.7404 4.64668C10.6776 3.80003 9.35889 3.33902 8.00002 3.33902C6.64115 3.33902 5.32248 3.80003 4.2596 4.64668C3.19673 5.49334 2.45253 6.67554 2.14869 8C2.45142 9.32552 3.19514 10.509 4.25812 11.3568C5.3211 12.2045 6.64037 12.6664 8.00002 12.6667ZM8.00002 11C7.20437 11 6.44131 10.6839 5.8787 10.1213C5.31609 9.55871 5.00002 8.79565 5.00002 8C5.00002 7.20435 5.31609 6.44129 5.8787 5.87868C6.44131 5.31607 7.20437 5 8.00002 5C8.79567 5 9.55873 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55873 10.6839 8.79567 11 8.00002 11ZM8.00002 9.66667C8.44205 9.66667 8.86597 9.49107 9.17853 9.17851C9.49109 8.86595 9.66669 8.44203 9.66669 8C9.66669 7.55797 9.49109 7.13405 9.17853 6.82149C8.86597 6.50893 8.44205 6.33333 8.00002 6.33333C7.55799 6.33333 7.13407 6.50893 6.82151 6.82149C6.50895 7.13405 6.33335 7.55797 6.33335 8C6.33335 8.44203 6.50895 8.86595 6.82151 9.17851C7.13407 9.49107 7.55799 9.66667 8.00002 9.66667Z"
                                                            fill="#0B1107" />
                                                    </svg>
                                                    Detail
                                                </RouterLink>
                                                <button @click="deleteUserAuction(aution)"
                                                    class="flex gap-1 items-center border p-2 rounded-md border-[#E0E0E0]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 16 16" fill="none">
                                                        <path
                                                            d="M2.66659 5.3335H13.3333V14.0002C13.3333 14.177 13.263 14.3465 13.138 14.4716C13.013 14.5966 12.8434 14.6668 12.6666 14.6668H3.33325C3.15644 14.6668 2.98687 14.5966 2.86185 14.4716C2.73682 14.3465 2.66659 14.177 2.66659 14.0002V5.3335ZM3.99992 6.66683V13.3335H11.9999V6.66683H3.99992ZM5.99992 8.00016H7.33325V12.0002H5.99992V8.00016ZM8.66659 8.00016H9.99992V12.0002H8.66659V8.00016ZM4.66659 3.3335V2.00016C4.66659 1.82335 4.73682 1.65378 4.86185 1.52876C4.98687 1.40373 5.15644 1.3335 5.33325 1.3335H10.6666C10.8434 1.3335 11.013 1.40373 11.138 1.52876C11.263 1.65378 11.3333 1.82335 11.3333 2.00016V3.3335H14.6666V4.66683H1.33325V3.3335H4.66659ZM5.99992 2.66683V3.3335H9.99992V2.66683H5.99992Z"
                                                            fill="#FF333E" />
                                                    </svg>
                                                    <p class="text-error">Remove</p>
                                                </button>
                                            </td>
                                            <td
                                                class="w-[50%] justify-start text-sm flex gap-3 font-medium text-gray-900 whitespace-nowrap ">
                                                <button
                                                    v-if="aution.status !== 'upcoming' && aution.status !== 'live' && aution.status !== 'completed'"
                                                    @click="confirmAutions(aution)"
                                                    class="flex gap-1 bg-primary items-center border p-2 rounded-md border-[#E0E0E0]">
                                                    Accept
                                                </button>
                                                <button v-if="aution.status !== 'canceled'" @click="rejetAutions(aution)"
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
        </div>
    </template>
</template>
<script>
import { ref, watch, computed, onMounted } from "vue";
import { useAuctionStore } from "@/stores/auctions";
import { toast } from "vue3-toastify";
import { useRoute, useRouter } from 'vue-router'
export default {
    setup() {
        const router = useRouter()
        const route = useRoute();
        const store = useAuctionStore()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const loading = ref(false)
        const dataTable = ref([])
        const stateTable = ref('drafts')
        const index = async () => {
            loading.value = true
            try {
                await store.index()
                loading.value = false
               /*  stateTable.value == 'drafts' && (dataTable.value = store.draft) */
            } catch (error) {
                toast(error.response.data.message || 'An error has occurred try again', { type: "error" });
                loading.value = false
            }
        }
        watch(route, (to) => {
            console.log('to', to)
        }, { flush: 'pre', immediate: true, deep: true })
        onMounted(() => {
            index()
            console.log('params', route)
            console.log('router', router.query)
        })
        const deleteUserAuction = async (item) => {
            loading.value = true
            try {
                await store.delete(item._id)
                index()
                loading.value = false

            } catch (error) {
                toast(error.response.data.message || 'An error has occurred try again', { type: "error" });
                loading.value = false
            }
        }
        const confirmAutions = async (aution) => {
            loading.value = true
            try {
                await store.activeAutions(aution._id)
                index()
                loading.value = false

            } catch (error) {
                toast(error.response.data.message || 'An error has occurred try again', { type: "error" });
                loading.value = false
            }
        }
        const rejetAutions = async (aution) => {
            console.log('user confirm', aution)
            loading.value = true
            try {
                await store.inactivateAutions(aution._id)
                index()
                loading.value = false

            } catch (error) {
                toast(error.response.data.message || 'An error has occurred try again', { type: "error" });
                loading.value = false
            }
        }
        const changeSeccion = (change) => {
            stateTable.value = change
            dataTable
            switch (stateTable.value) {
                case 'drafts':
                    dataTable.value = store.draft
                    index()
                    break;
                case 'unapproved':
                    dataTable.value = store.unapproved
                    index()
                    break;
                case 'upcoming':
                    dataTable.value = store.upcoming
                    index()
                    break;
                case 'live':
                    dataTable.value = store.live
                    index()
                    break;
                case 'completed':
                    dataTable.value = store.completed
                    index()
                    break;
                case 'canceled':
                    dataTable.value = store.canceled
                    index()
                    break;
                default:
                    break;
            }
        }
        return {
            store,
            deleteUserAuction,
            loading,
            confirmAutions,
            rejetAutions,
            changeSeccion,
            dataTable,
            stateTable,
            bucket
        };
    },
};
</script>





  