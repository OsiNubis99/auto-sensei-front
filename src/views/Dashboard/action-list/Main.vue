<template>
    <div v-if="loading" class=" flex flex-col h-screen mb-7 gap-5 items-start  p-5 w-full">
        <div class="  w-full h-full flex justify-center items-center">
            <div class="text-indigo-700">
                <div class="h-12 w-12 md:h-[80px] md:w-[80px] ">
                    <div class="animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff"
                            stroke-width="0" viewBox="0 0 16 16">
                            <path
                                d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                            </path>
                        </svg>
                    </div>
                    <p class=" text-base-gray text-xs md:text-base font-medium md:pl-2 ">Loading...</p>
                </div>
            </div>
        </div>
    </div>
    <template v-else>
        <div class="mx-auto bg-[#F0F0F0] h-screen">
            <div class="flex justify-between p-2 md:p-5">
                <div class="flex overflow-auto pb-4 gap-3 md:gap-7">
                    <RouterLink :to="{ name: 'action-list', query: { state: 'drafts' } }"
                        @click="changeSeccion('drafts')"
                        :class="stateTable == 'drafts' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn font-semibold  whitespace-pre ">
                        Drafts ({{ counterData.draft }})
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'unapproved' } }"
                        @click="changeSeccion('unapproved')"
                        :class="stateTable == 'unapproved' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold  whitespace-pre shadow-md capitalize  ">
                        Unapproved ({{ counterData.unapproved }})
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'upcoming' } }"
                        @click="changeSeccion('upcoming')"
                        :class="stateTable == 'upcoming' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold  whitespace-pre shadow-md capitalize  ">
                        Upcoming ({{ counterData.upcoming }})
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'live' } }" @click="changeSeccion('live')"
                        :class="stateTable == 'live' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold  whitespace-pre shadow-md capitalize  ">
                        Live ({{ counterData.live }})
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'completed' } }"
                        @click="changeSeccion('completed')"
                        :class="stateTable == 'completed' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold  whitespace-pre shadow-md capitalize  ">
                        Completed ({{ counterData.completed }})
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'canceled' } }"
                        @click="changeSeccion('canceled')"
                        :class="stateTable == 'canceled' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold  whitespace-pre shadow-md capitalize  ">
                        Cancelled ({{ counterData.canceled }})
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'rejected' } }"
                        @click="changeSeccion('rejected')"
                        :class="stateTable == 'rejected' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold  whitespace-pre shadow-md capitalize  ">
                        Rejected ({{ counterData.rejected }})
                    </RouterLink>
                    <RouterLink :to="{ name: 'action-list', query: { state: 'declined' } }"
                        @click="changeSeccion('declined')"
                        :class="stateTable == 'declined' ? 'bg-blue-dark text-primary' : 'bg-white text-blue-dark'"
                        class="btn  font-semibold  whitespace-pre shadow-md capitalize  ">
                        Declined ({{ counterData.declined }})
                    </RouterLink>
                </div>
                <!--   <div class="flex  items-center gap-3">
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
                </div> -->
            </div>
            <div class="flex p-2 md:p-5 flex-col">
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="inline-block min-w-full align-middle">
                        <div class="overflow-hidden ">
                            <table
                                class="min-w-full bg-white divide-y divide-[#E0E0E0] table-fixed dark:divide-gray-700">
                                <template v-if="paginated.length > 0">
                                    <thead class="bg-gray-100 hidden md:contents dark:bg-gray-700">
                                        <tr>
                                            <th scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-[#000] uppercase ">
                                                <div class="flex items-center gap-1">
                                                    <p class="!m-0">Auctions Title</p>
                                                    <svg class="cursor-pointer" @click="order('auctions-title')"
                                                        xmlns="http://www.w3.org/2000/svg" width="14" height="14"
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
                                                    <svg class="cursor-pointer" @click="order('seller')"
                                                        xmlns="http://www.w3.org/2000/svg" width="14" height="14"
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
                                                    <svg class="cursor-pointer" @click="order('created')"
                                                        xmlns="http://www.w3.org/2000/svg" width="14" height="14"
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
                                                    <p v-if="stateTable !== 'completed'"
                                                        class="py-3 px-6 pl-0 text-xs font-medium tracking-wider text-left text-[#000] capitalize ">
                                                        Confirmation
                                                    </p>
                                                    <p v-else
                                                        class="py-3 px-6 pl-0 text-xs font-medium tracking-wider text-left text-[#000] capitalize ">
                                                        Status Aution
                                                    </p>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white flex flex-col md:contents divide-y divide-[#E0E0E0] ">
                                        <tr v-for="(  aution, index  ) in paginated" :key="aution?.id"
                                            :class="index % 2 !== 0 ? 'bg-[#e0e0e026]' : ''"
                                            class="hover:bg-gray-100 grid md:table-row relative  dark:hover:bg-gray-700">
                                            <td
                                                class=" py-1 pt-4 md:pt-0 px-2 md:py-4 md:px-6 text-sm flex gap-4 font-medium text-gray-900 whitespace-nowrap ">
                                                <div class="w-10 h-10">
                                                    <img v-if="aution?.owner?.seller?.picture"
                                                        class="w-full shadow-md   rounded-full h-full object-cover"
                                                        :src="bucket + aution?.owner?.seller?.picture" alt="">
                                                    <img v-else
                                                        class="w-full shadow-md  rounded-full h-full object-cover"
                                                        src="https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA="
                                                        alt="">
                                                </div>
                                                <div class="flex justify-center flex-col">
                                                    <p class="p-0 !m-0 capitalize"> {{ aution?.vehicleDetails?.model }}
                                                    </p>
                                                    <p class="p-0 uppercase font-normal  text-[#4D4D4D] !m-0">{{
        aution?.vehicleDetails?.vin }}</p>
                                                </div>
                                            </td>
                                            <td
                                                class=" py-1 px-2 md:py-4 md:px-6 text-sm font-medium text-[#000] whitespace-nowrap ">
                                                <p class="!m-0 font-extrabold capitalize">
                                                    {{ aution?.owner?.seller?.firstName }} {{
        aution?.owner?.seller?.lastName }}
                                                </p>
                                                <p class="!m-0 truncate w-[200px] md:w-auto "> {{ aution.city }}, {{
        aution.province }}
                                                </p>
                                            </td>
                                            <td
                                                class="flex gap-2 py-1 px-2 md:py-4 md:px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">

                                                <p class="p-0 !m-0"> {{ aution?.createDay }}</p>
                                                <p class="p-0 !m-0">{{ aution?.createHour }}</p>

                                            </td>
                                            <td
                                                class=" py-1 px-2 md:py-4 md:px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                                <div v-if="aution?.vehicleStatus?.status == 'Paid OFF'"
                                                    class="relative w-fit  flex py-1 px-2 rounded-md justify-center items-center bg-[#05A54B14] gap-2">
                                                    <p class="text-[#05A54B]   text-xs md:text-[13px]  capitalize">
                                                        PaidOff</p>
                                                </div>

                                                <div v-else-if="aution?.vehicleStatus?.status == 'Financed'"
                                                    class="relative w-fit flex py-1 px-2 rounded-md justify-center items-center bg-[#6D53B014] gap-2">
                                                    <p class="text-[#6D53B0]   text-xs md:text-[13px]  capitalize">
                                                        Financed</p>
                                                </div>
                                                <div v-else-if="aution?.vehicleStatus?.status == 'Leased'"
                                                    class="relative  w-fit flex py-1 px-2 rounded-md justify-center items-center bg-[#1F94F014] gap-2">
                                                    <p class="text-[#1F94F0]   text-xs md:text-[13px]  capitalize">
                                                        Leased</p>
                                                </div>
                                                <div v-else
                                                    class="relative w-fit  flex py-1 px-2 rounded-md justify-center items-center bg-[#7b7b7b14] gap-2">
                                                    <p class="text-[#FF333E]   text-xs md:text-[13px]  capitalize">there
                                                        is no state</p>
                                                </div>
                                            </td>
                                            <div
                                                class="flex flex-wrap md:flex-nowrap h-full py-1 px-2 pb-3 md:py-4 md:px-6 md:justify-center gap-2 md:gap-4 ">
                                                <td :class="aution.status == 'completed' || aution.status == 'reviewed' || aution.status == 'drop off' || aution.status == 'bids completed' || aution.status == 'live' ? 'md:w-full 2xl:grid-cols-4' : ' w-[50%]  lg:grid-cols-3'"
                                                    class="w-full flex  2xl:grid place-items-center  text-sm  gap-4 font-medium text-gray-900 flex-wrap md:whitespace-nowrap ">
                                                    <RouterLink
                                                        :to="{ name: 'action-details-admin', params: { id: aution?._id } }"
                                                        class="flex gap-1 items-center border p-2 rounded-md border-[#E0E0E0]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 md:w-[16px] "
                                                            viewBox="0 0 16 16" fill="none">
                                                            <path
                                                                d="M8.00002 2C11.5947 2 14.5854 4.58667 15.2127 8C14.586 11.4133 11.5947 14 8.00002 14C4.40535 14 1.41469 11.4133 0.787354 8C1.41402 4.58667 4.40535 2 8.00002 2ZM8.00002 12.6667C9.35967 12.6664 10.6789 12.2045 11.7419 11.3568C12.8049 10.509 13.5486 9.32552 13.8514 8C13.5475 6.67554 12.8033 5.49334 11.7404 4.64668C10.6776 3.80003 9.35889 3.33902 8.00002 3.33902C6.64115 3.33902 5.32248 3.80003 4.2596 4.64668C3.19673 5.49334 2.45253 6.67554 2.14869 8C2.45142 9.32552 3.19514 10.509 4.25812 11.3568C5.3211 12.2045 6.64037 12.6664 8.00002 12.6667ZM8.00002 11C7.20437 11 6.44131 10.6839 5.8787 10.1213C5.31609 9.55871 5.00002 8.79565 5.00002 8C5.00002 7.20435 5.31609 6.44129 5.8787 5.87868C6.44131 5.31607 7.20437 5 8.00002 5C8.79567 5 9.55873 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55873 10.6839 8.79567 11 8.00002 11ZM8.00002 9.66667C8.44205 9.66667 8.86597 9.49107 9.17853 9.17851C9.49109 8.86595 9.66669 8.44203 9.66669 8C9.66669 7.55797 9.49109 7.13405 9.17853 6.82149C8.86597 6.50893 8.44205 6.33333 8.00002 6.33333C7.55799 6.33333 7.13407 6.50893 6.82151 6.82149C6.50895 7.13405 6.33335 7.55797 6.33335 8C6.33335 8.44203 6.50895 8.86595 6.82151 9.17851C7.13407 9.49107 7.55799 9.66667 8.00002 9.66667Z"
                                                                fill="#0B1107" />
                                                        </svg>

                                                        <p class="text-xs md:text-[13px] ">Detail</p>
                                                    </RouterLink>

                                                    <button @click="deleteUserAuction(aution)"
                                                        class="flex gap-1 items-center border p-2 rounded-md border-[#E0E0E0]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 md:w-[16px] "
                                                            viewBox="0 0 16 16" fill="none">
                                                            <path
                                                                d="M2.66659 5.3335H13.3333V14.0002C13.3333 14.177 13.263 14.3465 13.138 14.4716C13.013 14.5966 12.8434 14.6668 12.6666 14.6668H3.33325C3.15644 14.6668 2.98687 14.5966 2.86185 14.4716C2.73682 14.3465 2.66659 14.177 2.66659 14.0002V5.3335ZM3.99992 6.66683V13.3335H11.9999V6.66683H3.99992ZM5.99992 8.00016H7.33325V12.0002H5.99992V8.00016ZM8.66659 8.00016H9.99992V12.0002H8.66659V8.00016ZM4.66659 3.3335V2.00016C4.66659 1.82335 4.73682 1.65378 4.86185 1.52876C4.98687 1.40373 5.15644 1.3335 5.33325 1.3335H10.6666C10.8434 1.3335 11.013 1.40373 11.138 1.52876C11.263 1.65378 11.3333 1.82335 11.3333 2.00016V3.3335H14.6666V4.66683H1.33325V3.3335H4.66659ZM5.99992 2.66683V3.3335H9.99992V2.66683H5.99992Z"
                                                                fill="#FF333E" />
                                                        </svg>
                                                        <p class="text-error text-xs md:text-[13px] ">Remove</p>
                                                    </button>

                                                    <RouterLink
                                                        :class="aution?.vehicleDetails?.exteriorPhotos?.length > 0 ? 'visible' : ' invisible '"
                                                        :to="{ name: 'order-by-photos', params: { id: aution?._id } }"
                                                        class="flex gap-1 items-center border p-2 rounded-md border-[#E0E0E0]">
                                                        <svg class="w-3 md:w-[16px] " viewBox="0 0 15 15" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke="#CCCCCC"
                                                                stroke-width="0.99"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path
                                                                    d="M4.5 3.5L4.85355 3.14645C4.65829 2.95118 4.34171 2.95118 4.14645 3.14645L4.5 3.5ZM1.5 1H13.5V0H1.5V1ZM14 1.5V13.5H15V1.5H14ZM13.5 14H1.5V15H13.5V14ZM1 13.5V1.5H0V13.5H1ZM1.5 14C1.22386 14 1 13.7761 1 13.5H0C0 14.3284 0.671573 15 1.5 15V14ZM14 13.5C14 13.7761 13.7761 14 13.5 14V15C14.3284 15 15 14.3284 15 13.5H14ZM13.5 1C13.7761 1 14 1.22386 14 1.5H15C15 0.671573 14.3284 0 13.5 0V1ZM1.5 0C0.671573 0 0 0.671574 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM0.5 11H14.5V10H0.5V11ZM0.853553 7.85355L4.85355 3.85355L4.14645 3.14645L0.146447 7.14645L0.853553 7.85355ZM4.14645 3.85355L11.1464 10.8536L11.8536 10.1464L4.85355 3.14645L4.14645 3.85355ZM10.5 5C10.2239 5 10 4.77614 10 4.5H9C9 5.32843 9.67157 6 10.5 6V5ZM11 4.5C11 4.77614 10.7761 5 10.5 5V6C11.3284 6 12 5.32843 12 4.5H11ZM10.5 4C10.7761 4 11 4.22386 11 4.5H12C12 3.67157 11.3284 3 10.5 3V4ZM10.5 3C9.67157 3 9 3.67157 9 4.5H10C10 4.22386 10.2239 4 10.5 4V3Z"
                                                                    fill="#000000"></path>
                                                            </g>
                                                        </svg>
                                                        <p class="text-xs md:text-[13px] ">Photos</p>

                                                    </RouterLink>


                                                    <button @click="openModalBits(aution)"
                                                        v-if="aution.status == 'completed' || aution.status == 'reviewed' || aution.status == 'drop off' || aution.status == 'bids completed' || aution.status == 'live'"
                                                        class="flex gap-1 items-center border p-2 rounded-md border-[#E0E0E0]">
                                                        <svg class="w-3 md:w-[16px] " viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                stroke-linejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path
                                                                    d="M7 3V21M7 3L11 7M7 3L3 7M14 3H21M14 9H19M14 15H17M14 21H15"
                                                                    stroke="#000000" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                        <p class="text-xs md:text-[13px] ">Bids ({{ aution?.bids?.length
                                                            }})</p>
                                                    </button>
                                                </td>
                                                <td :class="aution.status == 'completed' || aution.status == 'reviewed' || aution.status == 'drop off' || aution.status == 'bids completed' || aution.status == 'live' ? 'w-[50%]' : ' w-[50%]'"
                                                    class=" justify-start text-sm flex gap-3 font-medium text-gray-900 whitespace-nowrap ">
                                                    <template
                                                        v-if="aution.status !== 'completed' && aution.status !== 'reviewed' && aution.status !== 'drop off' && aution.status !== 'bids completed' && aution.status !== 'rejected' && aution.status !== 'declined'">
                                                        <button
                                                            v-if="aution.status !== 'upcoming' && aution.status !== 'live' && aution.status !== 'completed' && aution.status !== 'draft'"
                                                            @click="confirmAutions(aution)"
                                                            class="flex gap-1 bg-primary items-center border p-2 rounded-md border-[#E0E0E0]">
                                                            <p class="text-xs md:text-[13px] ">Aprove</p>

                                                        </button>
                                                        <button
                                                            v-if="aution.status !== 'canceled' && aution.status !== 'draft'"
                                                            @click="rejetAutions(aution)"
                                                            class="flex gap-1 items-center border p-2 bg-error text-white rounded-md border-[#E0E0E0]">
                                                            <p class="text-xs md:text-[13px] ">Reject</p>

                                                        </button>

                                                    </template>

                                                    <div v-else :class="[
        aution.status == 'completed' && 'bg-[#05a54b] text-white',
        aution.status == 'drop Off' && 'bg-[#0b1107] text-white',
        aution.status == 'reviewed' && 'bg-[#0b1107] text-white',
        aution.status == 'bids completed' && 'bg-[#fbdb17]',
        aution.status == 'live' && 'bg-[#1f94f0] text-white',
        aution.status == 'declined' && 'bg-error text-white',
        aution.status == 'rejected' && 'bg-error text-white'
    ]
        " class="md:px-4 md:py-2 px-2 py-1 absolute top-2 right-2 md:sticky shadow-md  rounded-lg  md:shadow-lg flex justify-center items-center">
                                                        <p
                                                            class="capitalize  text-[9px] tracking-wider	 md:text-[13px] ">
                                                            {{
        aution.status
    }}</p>

                                                    </div>
                                                    <button @click="openModalLaunch(aution)"
                                                        v-if="aution.status == 'rejected' || aution.status == 'bids completed' || aution.status == 'upcoming' || aution.status == 'declined'"
                                                        class="flex gap-1 items-center border p-2 rounded-md border-[#E0E0E0]">
                                                        <p class="text-xs md:text-[13px] ">Launch</p>

                                                    </button>
                                                </td>
                                            </div>

                                        </tr>
                                    </tbody>
                                </template>
                                <p v-else class="p-10 text-center ">
                                    No auction {{ stateTable }}</p>

                            </table>
                        </div>
                    </div>
                </div>
                <div v-show="numberPage.length > 1"
                    class="flex mt-7 items-center justify-between  rounded-lg bg-white px-4 py-3 sm:px-6">
                    <div class="flex items-center flex-1 justify-between sm:hidden">
                        <div :class="current > 1 && current <= numberPage.length ? '  bg-white  border border-gray-300 ' : 'pointer-events-none bg-[#bfbfbfa1] text-white '"
                            @click="prev()"
                            class="relative inline-flex items-center py-1 px-3 rounded-md  transition-all ease-out duration-700  md:px-4 md:py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            <p class="text-xs">Previous</p>
                        </div>
                        <div class="flex">
                            <div v-for="page in numberPage.slice(current - 1, current + 3)" :key="index">
                                <div @click="next(page)"
                                    :class="page == current ? 'bg-base-black text-primary  ' : 'bg-[#F0F0F0] hover:bg-base-black  hover:text-primary '"
                                    class="relative py-1 px-2 cursor-pointer rounded-lg mr-1 z-10 inline-flex items-center bg-indigo-600 md:px-4 md:py-2  transition-all ease-out duration-300   text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <template v-if="page !== 0">
                                        {{ page }}

                                    </template>

                                </div>
                            </div>
                        </div>

                        <div @click="next()"
                            :class="current < numberPage.length ? '  bg-white  border border-gray-300 ' : 'pointer-events-none bg-[#bfbfbfa1] text-white '"
                            class="relative ml-3 inline-flex items-center py-1 px-3 rounded-md border border-gray-300 bg-white md:px-4 md:py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            <p class="text-xs">Next</p>

                        </div>
                    </div>
                    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing
                                <span class="font-medium"> {{ (current - 1) * pageSize + 1 }}</span>
                                to
                                <span class="font-medium">{{ current * pageSize }}</span>
                                of
                                <span class="font-medium">{{ current * pageSize }}</span>
                                results
                            </p>
                        </div>
                        <div class="flex gap-3">
                            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <div v-show="current > 1 && current <= numberPage.length" @click="prev()"
                                    class="relative mr-2 inline-flex items-center cursor-pointer group hover:bg-base-black transition-all ease-out duration-300  rounded-lg px-2 py-2 text-gray-400 bg-transparent border border-[#E0E0E0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span class="sr-only">Previous</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="group-hover:fill-primary  fill-base-black" width="17" height="17"
                                        viewBox="0 0 17 17" fill="none">
                                        <path
                                            d="M5.71875 7.83312H13.8334V9.16645H5.71875L9.29475 12.7425L8.35208 13.6851L3.16675 8.49979L8.35208 3.31445L9.29475 4.25712L5.71875 7.83312Z" />
                                    </svg>
                                </div>
                                <div v-for="page in numberPage.slice(current - 1, current + 9)" :key="index">
                                    <div @click="next(page)"
                                        :class="page == current ? 'bg-base-black text-primary  ' : 'bg-[#F0F0F0] hover:bg-base-black  hover:text-primary '"
                                        class="relative cursor-pointer rounded-lg mr-1 z-10 inline-flex items-center bg-indigo-600 px-4 py-2  transition-all ease-out duration-300   text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <template v-if="page !== 0">
                                            {{ page }}

                                        </template>
                                    </div>
                                </div>
                                <div v-show="current < numberPage.length" @click="next()"
                                    class="relative inline-flex items-center group cursor-pointer hover:bg-base-black transition-all ease-out duration-300 rounded-lg px-2 py-2 text-gray-400  bg-transparent border border-[#E0E0E0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span class="sr-only">Next</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="group-hover:fill-primary  fill-base-black" width="17" height="17"
                                        viewBox="0 0 17 17" fill="none">
                                        <path
                                            d="M11.2814 7.83312L7.70541 4.25712L8.64808 3.31445L13.8334 8.49979L8.64808 13.6851L7.70541 12.7425L11.2814 9.16645H3.16675V7.83312H11.2814Z" />
                                    </svg>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ModalDetailsBitsVue v-if="statusModalView.isActive" />
        <div v-show="activeAution"
            class="fixed inset-0 flex items-end md:items-center md:justify-center bg-base-black  bg-opacity-50">
            <div class="max-w-xl w-full  overflow-hidden  bg-white rounded-lg shadow-xl animation-fade-modal">
                <div class="h-full">
                    <div class="md:p-4 p-2 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                        <p class=" text-md md:text-xl text-white">Launch Auction</p>
                        <svg @click="activeAution = false" xmlns="http://www.w3.org/2000/svg"
                            class=" w-5 md:w-8 md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div v-if="loadingAuction" class=" flex flex-col h-full py-28 mb-7 gap-5 items-start  p-5 w-full">
                        <div class="  w-full h-full flex justify-center items-center">
                            <div class="text-indigo-700">
                                <div class="h-[80px] w-[80px] ">
                                    <div class="animate-bounce">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861"
                                            stroke="#fff" stroke-width="0" viewBox="0 0 16 16">
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
                    <div v-else class="w-full flex flex-col justify-center items-center  p-2 h-full">
                        <p class="text-center font-Nohemi md:text-2xl ">Are you sure you want to activate this car?</p>
                        <svg style="filter: drop-shadow(2px 4px 6px #0000002b);"
                            class=" w-12 md:w-[150px] animation-fixez" version="1.1" baseProfile="tiny" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 24 24" overflow="visible" xml:space="preserve" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <rect y="0" fill="none" width="24" height="24"></rect>
                                    <g transform="translate(1.000000, 1.000000)">
                                        <polygon id="Fill-1" fill-rule="evenodd" fill="#C1F861"
                                            points="8.8,20.8 13.2,20.8 13.2,19.2 8.8,19.2 "></polygon>
                                        <polygon id="Fill-2" fill-rule="evenodd" fill="#C1F861"
                                            points="11,20.8 13.2,20.8 13.2,19.2 11,19.2 "></polygon>
                                        <polygon id="Fill-3" fill-rule="evenodd" fill="#C1F861"
                                            points="18.7,22.2 21.6,14.1 17.7,11.9 15.3,19.3 16.7,22.2 "></polygon>
                                        <polygon id="Fill-4" fill-rule="evenodd" fill="#C1F861"
                                            points="17.7,11.9 15.3,19.3 16.7,22.2 "></polygon>
                                        <polygon id="Fill-5" fill-rule="evenodd" fill="#C1F861"
                                            points="3.3,22.2 0.4,14.1 4.3,11.9 6.7,19.3 5.3,22.2 "></polygon>
                                        <polygon id="Fill-6" fill-rule="evenodd" fill="#C1F861"
                                            points="4.3,11.9 6.7,19.3 5.3,22.2 "></polygon>
                                        <path id="Fill-7" fill-rule="evenodd" fill="#C1F861"
                                            d="M11,10.5c-1.4,0-2.5-1.1-2.5-2.5S9.6,5.5,11,5.5s2.5,1.1,2.5,2.5 S12.4,10.5,11,10.5L11,10.5z M11-0.2L5.8,5v5.5l2.3,8h5.8l2.3-8V5L11-0.2z">
                                        </path>
                                        <path id="Fill-9" fill-rule="evenodd" fill="#C1F861"
                                            d="M11-0.2v5.8c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5v8h2.9l2.3-8V5 L11-0.2z">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div class="flex w-full justify-center gap-10 mt-3 items-center">
                            <button class="btn bg-primary rounded-lg" @click="luachAution()">Launch</button>
                            <button class="btn  !border-[1px] !border-base-gray rounded-lg"
                                @click="closetModalLaunch">Cancel</button>
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
import ModalDetailsBitsVue from "../../../components/Modals/ModalDetailsBits/ModalDetailsBits.vue";
import { ModalDetailsBits } from '@/stores/modalDetailsBits';
export default {
    components: {
        ModalDetailsBitsVue
    },
    setup() {
        const router = useRouter()
        const route = useRoute();
        const store = useAuctionStore()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const loading = ref(false)
        const loadingAuction = ref(false)
        const orderName = ref(false)
        const orderCreate = ref(false)
        const orderActions = ref(false)
        const dataTable = ref([])
        const current = ref(1)
        const pageSize = ref(10)
        const numberPage = ref([])
        const statusModalView = ModalDetailsBits()
        const autionLaunch = ref(null)
        const counterData = ref({
            draft: 0,
            unapproved: 0,
            upcoming: 0,
            live: 0,
            completed: 0,
            canceled: 0,

        })
        const stateTable = ref('')
        const activeAution = ref(false)
        const index = async () => {
            loading.value = true
            try {
                let res = await store.index()
                if (res.status === 200) {
                    switch (route.query.state) {
                        case 'drafts':
                            stateTable.value = 'drafts'
                            dataTable.value = store.draft
                            break;
                        case 'unapproved':
                            stateTable.value = 'unapproved'
                            dataTable.value = store.unapproved
                            break;
                        case 'upcoming':
                            stateTable.value = 'upcoming'
                            dataTable.value = store.upcomingAmin
                            break;
                        case 'live':
                            stateTable.value = 'live'
                            dataTable.value = store.live
                            break;
                        case 'completed':
                            stateTable.value = 'completed'
                            dataTable.value = store.completed
                            console.log('dataTable.value', dataTable.value)
                            break;
                        case 'canceled':
                            stateTable.value = 'canceled'
                            dataTable.value = store.canceled
                            break;
                        case 'rejected':
                            stateTable.value = 'rejected'
                            dataTable.value = store.rejected
                            break;
                        case 'declined':
                            stateTable.value = 'declined'
                            dataTable.value = store.declined
                            break;
                        default:
                            break;
                    }
                    counterData.value.draft = store.draft.length
                    counterData.value.unapproved = store.unapproved.length
                    counterData.value.upcoming = store.upcomingAmin.length
                    counterData.value.live = store.live.length
                    counterData.value.completed = store.completed.length
                    counterData.value.canceled = store.canceled.length
                    counterData.value.rejected = store.rejected.length
                    counterData.value.declined = store.declined.length

                    let counterPage = Math.ceil(dataTable.value.length / 10)
                    numberPage.value = Array.apply(null, Array(counterPage))
                        .map(function (y, i) { return i; });
                    loading.value = false
                }
            } catch (error) {
                toast(error.response.data.message || 'An error has occurred try again', { type: "error" });
                loading.value = false
            }
        }
        const openModalBits = (aution) => {
            statusModalView.openModal({ active: true, data: aution })
        }
        const order = (string) => {


            if (string === 'auctions-title') {
                orderActions.value = !orderActions.value
                if (orderActions.value) {
                    return dataTable.value.sort((a, b) => (a.vehicleDetails.model > b.vehicleDetails.model ? 1 : -1));
                } else {
                    return dataTable.value.sort((a, b) => (a.vehicleDetails.model > b.vehicleDetails.model ? -1 : 1));
                }
            }
            if (string === 'seller') {
                orderName.value = !orderName.value
                if (orderName.value) {
                    return dataTable.value.sort((a, b) => (a.owner.seller.firstName > b.owner.seller.firstName ? 1 : -1));
                } else {
                    return dataTable.value.sort((a, b) => (a.owner.seller.firstName > b.owner.seller.firstName ? -1 : 1));
                }
            }
            if (string === 'created') {
                orderCreate.value = !orderCreate.value
                if (orderCreate.value) {
                    return dataTable.value.sort((a, b) => (a.createDay > b.createDay ? 1 : -1));
                } else {
                    return dataTable.value.sort((a, b) => (a.createDay > b.createDay ? -1 : 1));
                }
            }

        }
        const deleteUserAuction = async (item) => {
            console.log('deleteUserAuction', item)
            try {
                await store.delete(item._id)
                index()

            } catch (error) {
                toast(error.response.data.message || 'An error has occurred try again', { type: "error" });
            }
        }
        const confirmAutions = async (aution) => {
            console.log('confirmAutions', aution)
            try {
                await store.activeAutions(aution._id)
                index()

            } catch (error) {
                toast(error.response.data.message || 'An error has occurred try again', { type: "error" });
                loading.value = false
            }
        }
        const rejetAutions = async (aution) => {
            console.log('rejetAutions', aution)
            try {
                await store.inactivateAutions(aution._id)
                index()

            } catch (error) {
                toast(error.response.data.message || 'An error has occurred try again', { type: "error" });
            }
        }
        const changeSeccion = (change) => {
            stateTable.value = change
            current.value = 1
            pageSize.value = 10
            numberPage.value = 0
            switch (stateTable.value) {
                case 'drafts':
                    dataTable.value = store.draft
                    break;
                case 'unapproved':
                    dataTable.value = store.unapproved
                    break;
                case 'upcoming':
                    dataTable.value = store.upcoming
                    break;
                case 'live':
                    dataTable.value = store.live
                    break;
                case 'completed':
                    dataTable.value = store.completed
                    break;
                case 'canceled':
                    dataTable.value = store.canceled
                    break;
                default:
                    break;
            }
            index()
        }
        const indexStart = computed(() => {
            return (current.value - 1) * pageSize.value;
        })
        const indexEnd = computed(() => {
            return indexStart.value + pageSize.value;
        })
        const paginated = computed(() => {
            return dataTable.value.slice(indexStart.value, indexEnd.value);
        })
        const prev = () => {
            current.value--;
        }
        const next = (page) => {
            if (page) {
                current.value = page;
            } else {
                current.value++;
            }
        }
        const openModalLaunch = (data) => {
            console.log('data', data)
            autionLaunch.value = data
            activeAution.value = true
        }
        const closetModalLaunch = () => {
            autionLaunch.value = null
            activeAution.value = false
        }
        const luachAution = async () => {
            console.log('autionLaunch.value', autionLaunch.value)
            try {
                loadingAuction.value = true
                let res = await store.launchAuction({ uuid: autionLaunch.value._id })
                console.log('res', res)
                if (res) {
                    loadingAuction.value = false
                    activeAution.value = false
                    index()
                }
            } catch (error) {
                console.log('error', error)
                toast(error?.response?.data?.message[0] || error?.response?.data?.message || 'Error', {
                    type: "error",
                });
                loadingAuction.value = false

            }
        }
        onMounted(() => {
            index()
        })
        return {
            store,
            deleteUserAuction,
            loading,
            confirmAutions,
            rejetAutions,
            changeSeccion,
            dataTable,
            stateTable,
            bucket,
            dataTable,
            counterData,
            paginated,
            prev,
            next,
            order,
            current,
            numberPage,
            statusModalView,
            openModalBits,
            luachAution,
            openModalLaunch,
            activeAution,
            closetModalLaunch,
            loadingAuction,
            pageSize

        };
    },
};
</script>