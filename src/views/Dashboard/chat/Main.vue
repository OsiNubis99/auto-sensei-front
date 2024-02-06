<template>
    <div class="text-blue-800 grid h-custom-chat overflow-hidden relative  grid-cols-9 grid-rows-7 ">
        <div v-if="!activateLayout" class="absolute w-[70%] h-full right-0 -z-0  top-0">
            <div class="flex   flex-col top-0 w-full h-full justify-center gap-4 items-center ">
                <img src="../../../assets/svg/Layer_chat.svg" alt="">
                <p class="text-xl font-bold">Welcome to your Inbox</p>
                <p>Start or continue your conversations with seller here</p>
            </div>

        </div>
        <div class="row-span-1  col-span-2  border-b-2 border-r-2 border-[#E0E0E0]  p-5 ">
            <div class="flex justify-between items-center gap-2">
                <input type="text" placeholder="search chatting" v-model="search"
                    class="h-[40px] pl-4 border-2 border-[#E0E0E0] rounded-lg w-full" />
                <div class="w-[50px] h-[40px]  flex items-center justify-center border-[1px] rounded-lg border-[#E0E0E0] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                        <path
                            d="M7.5 8.5V13L4.5 14.5V8.5L0 1.75V0.25H12V1.75L7.5 8.5ZM1.803 1.75L6 8.0455L10.197 1.75H1.803Z"
                            fill="#858585" />
                    </svg>
                </div>
            </div>
        </div>
        <div :class="activateLayout ? 'visible pointer-events-auto' : 'invisible pointer-events-none '"
            class="row-span-1 col-span-5 border-b-2 border-r-2 border-[#E0E0E0]   p-5">
            <div class="flex items-center justify-between gap-4">
                <div class="flex justify-between w-full items-center">
                    <div>
                        <p class=" capitalize text-2xl font-medium">{{ userFriend?.firstName }}</p>
                        <p>St. John, Newfoundland & Labrador</p>
                    </div>
                    <div>
                        <div class="container-seaxrh">
                            <input placeholder='Search...' v-model="searchat" class='js-search' type="text">
                            <svg class="w-6 h-6  " fill="none" stroke="black" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                                </path>
                            </svg>
                        </div>

                    </div>
                </div>
                <div class="w-[25%]">
                    <button class="btn text-base-black border border-base-black text-md">Hide Auction</button>
                </div>
            </div>
        </div>
        <div :class="activateLayout ? 'visible pointer-events-auto' : 'invisible pointer-events-none '"
            class="row-span-1 col-span-2  border-b-2 border-[#E0E0E0] p-5">
            <div class="flex justify-between h-full items-center">
                <p class=" capitalize text-base-black text-xl">Auction</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M11.9997 10.5867L16.9497 5.63672L18.3637 7.05072L13.4137 12.0007L18.3637 16.9507L16.9497 18.3647L11.9997 13.4147L7.04974 18.3647L5.63574 16.9507L10.5857 12.0007L5.63574 7.05072L7.04974 5.63672L11.9997 10.5867Z"
                        fill="#0B1107" />
                </svg>
            </div>
        </div>


        <div class="row-span-5  col-span-2 border-r-2 border-t-[1px] border-[#E0E0E0] ">
            <div v-if="loadingUser" class="chat">
                <div class="flex " v-for="(n, index) in 20" :key="index">
                    <figure class="chat-avatar loading"></figure>
                    <div class="chat-content">
                        <div class="chat-text--small loading"></div>
                        <!--  <div class="chat-text--large loading"></div> -->
                    </div>
                </div>
            </div>
            <template v-else>
                <template v-if="dataTableSearch.length > 0" v-for="(user, index) in dataTableSearch" :key="index">
                    <RouterLink :to="{ name: 'inbox', query: { state: user.id } }" @click="sendChat(user)"
                        class="flex flex-row py-3 gap-4 pl-2  justify-center cursor-pointer  hover:bg-[#1F94F0] hover:text-white ease-in-out duration-500 transition-all  items-center border-b-2 border-[#E0E0E0]"
                        :class="userFriend?.id === user.id ? 'bg-[#1F94F0] text-white' : ''">
                        <div class="w-[30%] ">
                            <img src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                                class="object-cover h-12 w-full rounded-md" alt="" />
                        </div>
                        <div class="w-full">
                            <div class="text-lg font-semibold">{{ user.firstName }}</div>
                            <span class="text-gray-500">{{ user.createdAt }} </span>
                        </div>
                    </RouterLink>
                </template>
                <div class="w-full h-full flex justify-center items-center" v-else>
                    <p class=" capitalize   font-semibold text-[#3e3e3e]  ">no results</p>
                </div>
            </template>
        </div>
        <div :class="activateLayout ? 'visible pointer-events-auto' : 'invisible pointer-events-none '"
            class="row-span-5 col-span-5 border-r-2 border-t-[1px] relative border-[#E0E0E0] py-5 px-2 pt-0 pb-0">
            <div v-if="termins && listChat.length === 0" class="flex justify-center items-center absolute w-full top-0">
                <div class="bg-[#464B50] w-fit flex justify-around mt-4 z-50  gap-4 items-center rounded-md p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M7.99967 14.6673C4.31767 14.6673 1.33301 11.6827 1.33301 8.00065C1.33301 4.31865 4.31767 1.33398 7.99967 1.33398C11.6817 1.33398 14.6663 4.31865 14.6663 8.00065C14.6663 11.6827 11.6817 14.6673 7.99967 14.6673ZM7.99967 13.334C9.41416 13.334 10.7707 12.7721 11.7709 11.7719C12.7711 10.7717 13.333 9.41514 13.333 8.00065C13.333 6.58616 12.7711 5.22961 11.7709 4.22941C10.7707 3.22922 9.41416 2.66732 7.99967 2.66732C6.58519 2.66732 5.22863 3.22922 4.22844 4.22941C3.22824 5.22961 2.66634 6.58616 2.66634 8.00065C2.66634 9.41514 3.22824 10.7717 4.22844 11.7719C5.22863 12.7721 6.58519 13.334 7.99967 13.334ZM7.33301 4.66732H8.66634V6.00065H7.33301V4.66732ZM7.33301 7.33398H8.66634V11.334H7.33301V7.33398Z"
                            fill="white" />
                    </svg>
                    <p class=" capitalize text-white">Please read and accept our <a href=""
                            class="underline  font-medium">Terms &
                            Conditions</a> before contacting the
                        seller.</p>
                    <button @click="accept" class="btn bg-white p-4">
                        Accept
                    </button>
                </div>
            </div>
            <template v-if="loading">
                <div class="w-full h-screen overflow-hidden relative">
                    <div class=" overflow-hidden mt-4 w-full h-[95%] top-0 absolute">
                        <div v-for="(n, index) in 20" :key="index"
                            class="chat-content flex  gap-7 !w-full !overflow-hidden">
                            <div class="chat-text--small loading !w-[60%] !rounded-br-3xl !rounded-tr-3xl !rounded-tl-xl ">
                            </div>
                            <div
                                class="chat-text--small mt-5 loading !w-[60%] !rounded-bl-3xl !rounded-tl-3xl !rounded-tr-xl ">
                            </div>

                        </div>
                    </div>
                </div>
            </template>
            <div v-else class="w-full  flex flex-col h-full justify-between">
                <div class="flex overflow-auto section-message-chat relative h-custom-chat-panel mb-3 flex-col ">
                    <template v-if="dataChat?.length > 0" v-for="(msg, index) in dataChat" :key="index">
                        <div class="flex justify-center gap-4 items-center mt-4">
                            <hr class="w-full border border-[#E0E0E0]">
                            <p v-if="msg.today" class="text-[#666]">Today</p>
                            <p v-else class="text-[#666]">{{ msg.day }}</p>
                            <hr class="w-full border border-[#E0E0E0]">
                        </div>
                        <div v-if="msg.me" class="flex justify-end pt-4 mb-4" :class="index == 0 ? 'pt-5' : ''">
                            <div>
                                <div class=" py-3 px-4 bg-[#1F94F0] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                    {{ msg.message }}
                                </div>
                                <div class="flex items-center w-full justify-end gap-1">
                                    <p class=" capitalize text-[12px]  py-2"> {{ msg.createdAt }}</p>
                                    <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M7.73499 9.17366L8.67632 10.115L14.3203 4.47099L15.263 5.41366L8.67632 12.0003L4.43366 7.75766L5.37633 6.81499L6.79299 8.23166L7.73499 9.17299V9.17366ZM7.73633 7.28833L11.0377 3.98633L11.9777 4.92633L8.67632 8.22833L7.73633 7.28833ZM5.85166 11.0583L4.90966 12.0003L0.666992 7.75766L1.60966 6.81499L2.55166 7.75699L2.55099 7.75766L5.85166 11.0583Z"
                                            fill="#05A54B" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div v-else class="flex justify-start mb-4" :class="index == 0 ? 'pt-5' : ''">
                            <div>
                                <div
                                    class=" py-3 px-4 bg-[#F0F0F0] rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-base-black">
                                    {{ msg.message }}
                                </div>
                                <div class="flex items-center w-full justify-start gap-1">
                                    <p class=" capitalize text-[12px]  py-2"> {{ msg.createdAt }}</p>
                                    <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M7.73499 9.17366L8.67632 10.115L14.3203 4.47099L15.263 5.41366L8.67632 12.0003L4.43366 7.75766L5.37633 6.81499L6.79299 8.23166L7.73499 9.17299V9.17366ZM7.73633 7.28833L11.0377 3.98633L11.9777 4.92633L8.67632 8.22833L7.73633 7.28833ZM5.85166 11.0583L4.90966 12.0003L0.666992 7.75766L1.60966 6.81499L2.55166 7.75699L2.55099 7.75766L5.85166 11.0583Z"
                                            fill="#05A54B" />
                                    </svg>
                                </div>


                            </div>
                        </div>
                    </template>
                    <div v-else class="w-full h-full flex justify-center items-center">
                        <p class=" capitalize   font-semibold text-[#3e3e3e]  ">no results</p>
                    </div>
                </div>
                <div :class="termins && listChat.length === 0 ? 'bg-[#A3A3A3] pointer-events-none ' : ''"
                    class="p-5 pt-0 mb-2 border flex gap-3 flex-col shadow-xl   rounded-lg border-[#E0E0E0]">
                    <input v-model="textForm"
                        class="w-full input-shat bg-transparent  mt-5 rounded-xl focus:outline-none  focus:ring-0 "
                        type="text" placeholder="type your message here..." />
                    <div class="flex justify-between items-center w-full">
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M17.5 6.66602V17.4935C17.5008 17.603 17.48 17.7115 17.4388 17.8129C17.3976 17.9143 17.3369 18.0066 17.2601 18.0845C17.1832 18.1624 17.0918 18.2244 16.991 18.267C16.8902 18.3096 16.7819 18.3319 16.6725 18.3327H3.3275C3.10818 18.3327 2.89783 18.2456 2.74266 18.0906C2.5875 17.9356 2.50022 17.7253 2.5 17.506V2.49268C2.5 2.04518 2.87417 1.66602 3.335 1.66602H12.4975L17.5 6.66602ZM15.8333 7.49935H11.6667V3.33268H4.16667V16.666H15.8333V7.49935ZM6.66667 5.83268H9.16667V7.49935H6.66667V5.83268ZM6.66667 9.16602H13.3333V10.8327H6.66667V9.16602ZM6.66667 12.4993H13.3333V14.166H6.66667V12.4993Z"
                                    fill="#858585" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M17.4998 12.5V15H19.9998V16.6667H17.4998V19.1667H15.8332V16.6667H13.3332V15H15.8332V12.5H17.4998ZM17.5065 2.5C17.9632 2.5 18.3332 2.87083 18.3332 3.3275V10.8333H16.6665V4.16667H3.33317V15.8325L11.6665 7.5L14.1665 10V12.3575L11.6665 9.8575L5.689 15.8333H11.6665V17.5H2.49317C2.27385 17.4998 2.06358 17.4125 1.90858 17.2573C1.75357 17.1022 1.6665 16.8918 1.6665 16.6725V3.3275C1.66803 3.10865 1.75559 2.89918 1.91026 2.74435C2.06494 2.58951 2.27432 2.50175 2.49317 2.5H17.5065ZM6.6665 5.83333C7.10853 5.83333 7.53245 6.00893 7.84502 6.32149C8.15758 6.63405 8.33317 7.05797 8.33317 7.5C8.33317 7.94203 8.15758 8.36595 7.84502 8.67851C7.53245 8.99107 7.10853 9.16667 6.6665 9.16667C6.22448 9.16667 5.80055 8.99107 5.48799 8.67851C5.17543 8.36595 4.99984 7.94203 4.99984 7.5C4.99984 7.05797 5.17543 6.63405 5.48799 6.32149C5.80055 6.00893 6.22448 5.83333 6.6665 5.83333Z"
                                    fill="#858585" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M9.99984 18.3327C5.39734 18.3327 1.6665 14.6018 1.6665 9.99935C1.6665 5.39685 5.39734 1.66602 9.99984 1.66602C14.6023 1.66602 18.3332 5.39685 18.3332 9.99935C18.3332 14.6018 14.6023 18.3327 9.99984 18.3327ZM9.99984 16.666C11.7679 16.666 13.4636 15.9636 14.7139 14.7134C15.9641 13.4632 16.6665 11.7675 16.6665 9.99935C16.6665 8.23124 15.9641 6.53555 14.7139 5.2853C13.4636 4.03506 11.7679 3.33268 9.99984 3.33268C8.23173 3.33268 6.53604 4.03506 5.28579 5.2853C4.03555 6.53555 3.33317 8.23124 3.33317 9.99935C3.33317 11.7675 4.03555 13.4632 5.28579 14.7134C6.53604 15.9636 8.23173 16.666 9.99984 16.666ZM5.83317 10.8327H7.49984C7.49984 11.4957 7.76323 12.1316 8.23207 12.6005C8.70091 13.0693 9.3368 13.3327 9.99984 13.3327C10.6629 13.3327 11.2988 13.0693 11.7676 12.6005C12.2364 12.1316 12.4998 11.4957 12.4998 10.8327H14.1665C14.1665 11.9378 13.7275 12.9976 12.9461 13.779C12.1647 14.5604 11.1049 14.9993 9.99984 14.9993C8.89477 14.9993 7.83496 14.5604 7.05356 13.779C6.27216 12.9976 5.83317 11.9378 5.83317 10.8327ZM6.6665 9.16602C6.33498 9.16602 6.01704 9.03432 5.78262 8.7999C5.5482 8.56548 5.4165 8.24754 5.4165 7.91602C5.4165 7.5845 5.5482 7.26655 5.78262 7.03213C6.01704 6.79771 6.33498 6.66602 6.6665 6.66602C6.99802 6.66602 7.31597 6.79771 7.55039 7.03213C7.78481 7.26655 7.9165 7.5845 7.9165 7.91602C7.9165 8.24754 7.78481 8.56548 7.55039 8.7999C7.31597 9.03432 6.99802 9.16602 6.6665 9.16602ZM13.3332 9.16602C13.0017 9.16602 12.6837 9.03432 12.4493 8.7999C12.2149 8.56548 12.0832 8.24754 12.0832 7.91602C12.0832 7.5845 12.2149 7.26655 12.4493 7.03213C12.6837 6.79771 13.0017 6.66602 13.3332 6.66602C13.6647 6.66602 13.9826 6.79771 14.2171 7.03213C14.4515 7.26655 14.5832 7.5845 14.5832 7.91602C14.5832 8.24754 14.4515 8.56548 14.2171 8.7999C13.9826 9.03432 13.6647 9.16602 13.3332 9.16602Z"
                                    fill="#858585" />
                            </svg>
                        </div>
                        <div>
                            <svg @click="sendMessage" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                viewBox="0 0 18 18" fill="none" class="cursor-pointer ">
                                <path
                                    d="M2.25 9.7502H6.75V8.2502H2.25V1.3847C2.25001 1.31954 2.267 1.2555 2.2993 1.1989C2.3316 1.14231 2.37809 1.0951 2.43418 1.06194C2.49028 1.02879 2.55405 1.01082 2.6192 1.00981C2.68436 1.0088 2.74866 1.02479 2.80575 1.0562L16.6522 8.6717C16.711 8.70407 16.7601 8.75163 16.7942 8.80941C16.8284 8.8672 16.8464 8.93308 16.8464 9.0002C16.8464 9.06732 16.8284 9.13321 16.7942 9.19099C16.7601 9.24877 16.711 9.29633 16.6522 9.3287L2.80575 16.9442C2.74866 16.9756 2.68436 16.9916 2.6192 16.9906C2.55405 16.9896 2.49028 16.9716 2.43418 16.9385C2.37809 16.9053 2.3316 16.8581 2.2993 16.8015C2.267 16.7449 2.25001 16.6809 2.25 16.6157V9.7502Z"
                                    fill="#858585" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="activateLayout ? 'visible pointer-events-auto' : 'invisible pointer-events-none '"
            class="row-span-5 flex flex-col gap-4 col-span-2  border-t-[1px] border-[#E0E0E0] p-5">
            <div class="flex flex-col">
                <img v-if="storeAution.autionById?.photos" :src="bucket + storeAution.autionById?.photos[0]"
                    class="object-cover rounded-xl h-[240px] " alt="" />
                <div class="mt-4">
                    <p class=" capitalize font-semibold text-xl">{{ storeAution.autionById?.vehicleDetails?.make }}</p>
                    <p class=" capitalize font-light">
                        {{ storeAution.autionById?.city }}, {{ storeAution.autionById?.province }}
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-2 mt-2">
                <div class="flex justify-between items-start ">
                    <div class="flex justify-between items-center gap-2">
                        <svg class="w-fit capitalize" xmlns="http://www.w3.org/2000/svg" width="14" height="12"
                            viewBox="0 0 14 12" fill="none">
                            <path
                                d="M0.333496 0.662267C0.333496 0.296507 0.637036 0 0.994696 0H13.0056C13.3708 0 13.6668 0.296633 13.6668 0.662267V11.3377C13.6668 11.7035 13.3633 12 13.0056 12H0.994696C0.629529 12 0.333496 11.7034 0.333496 11.3377V0.662267ZM3.00016 8V9.33333H11.0002V8H3.00016ZM3.00016 2.66667V6.66667H7.00016V2.66667H3.00016ZM8.3335 2.66667V4H11.0002V2.66667H8.3335ZM8.3335 5.33333V6.66667H11.0002V5.33333H8.3335ZM4.3335 4H5.66683V5.33333H4.3335V4Z"
                                fill="#858585" />
                        </svg>
                        <p class="  w-fit uppercase">{{ storeAution.autionById?.vin }}</p>
                    </div>
                    <div class="flex justify-between items-center gap-2">
                        <svg class="w-fit capitalize" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 16 16" fill="none">
                            <path
                                d="M13.3335 8.66667C13.3335 10.1394 12.7366 11.4727 11.7714 12.4379L12.7142 13.3807C13.9206 12.1743 14.6668 10.5076 14.6668 8.66667C14.6668 4.98477 11.682 2 8.00016 2C4.31826 2 1.3335 4.98477 1.3335 8.66667C1.3335 10.5076 2.07969 12.1743 3.28612 13.3807L4.22893 12.4379C3.26378 11.4727 2.66683 10.1394 2.66683 8.66667C2.66683 5.72115 5.05464 3.33333 8.00016 3.33333C10.9457 3.33333 13.3335 5.72115 13.3335 8.66667ZM10.1955 5.52865L7.00016 8.33333L8.3335 9.66667L11.1383 6.47145L10.1955 5.52865Z"
                                fill="#858585" />
                        </svg>
                        <p class=" capitalize w-fit ">{{ storeAution.autionById?.vehicleDetails?.odometer }} Kilometers</p>
                    </div>
                </div>

                <div class="flex justify-between ">
                    <div class="flex justify-between items-center gap-2">
                        <svg class="w-fit capitalize" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.8185 12.489L13.997 11.3106L15.1755 12.489C15.8263 13.1399 15.8263 14.1952 15.1755 14.8461C14.5246 15.497 13.4693 15.497 12.8185 14.8461C12.1676 14.1952 12.1676 13.1399 12.8185 12.489ZM5.91907 0.720703L13.4615 8.26318C13.7219 8.52351 13.7219 8.94564 13.4615 9.20598L7.80467 14.8628C7.54433 15.1232 7.1222 15.1232 6.86187 14.8628L1.20503 9.20598C0.944679 8.94564 0.944679 8.52351 1.20503 8.26318L6.39048 3.07772L4.97627 1.66351L5.91907 0.720703ZM7.33327 4.02054L2.61924 8.73458H12.0473L7.33327 4.02054Z"
                                fill="#858585" />
                        </svg>
                        <p class=" capitalize w-fit "> {{ storeAution.autionById?.vehicleDetails?.color }} </p>
                    </div>
                    <div class="flex justify-between items-center gap-2">
                        <svg class="w-fit capitalize" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.6668 13.3327H3.3335V13.9993C3.3335 14.3675 3.03502 14.666 2.66683 14.666H2.00016C1.63198 14.666 1.3335 14.3675 1.3335 13.9993V7.99935L3.00906 3.53118C3.20421 3.01078 3.7017 2.66602 4.2575 2.66602H11.7428C12.2986 2.66602 12.7961 3.01078 12.9913 3.53118L14.6668 7.99935V13.9993C14.6668 14.3675 14.3684 14.666 14.0002 14.666H13.3335C12.9653 14.666 12.6668 14.3675 12.6668 13.9993V13.3327ZM2.7575 7.99935H13.2428L11.7428 3.99935H4.2575L2.7575 7.99935ZM4.3335 11.3327C4.88578 11.3327 5.3335 10.8849 5.3335 10.3327C5.3335 9.78042 4.88578 9.33268 4.3335 9.33268C3.78121 9.33268 3.3335 9.78042 3.3335 10.3327C3.3335 10.8849 3.78121 11.3327 4.3335 11.3327ZM11.6668 11.3327C12.2191 11.3327 12.6668 10.8849 12.6668 10.3327C12.6668 9.78042 12.2191 9.33268 11.6668 9.33268C11.1146 9.33268 10.6668 9.78042 10.6668 10.3327C10.6668 10.8849 11.1146 11.3327 11.6668 11.3327Z"
                                fill="#858585" />
                        </svg>
                        <p class=" capitalize w-fit ">{{ storeAution.autionById?.vehicleDetails?.driveTrain }}</p>
                    </div>
                </div>
                <div class="flex gap-4 py-2">
                    <div class="bg-[#F0F0F0] flex px-5 py-1 gap-3 rounded-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M7.00033 12.8327C3.77858 12.8327 1.16699 10.2211 1.16699 6.99935C1.16699 3.7776 3.77858 1.16602 7.00033 1.16602C10.2221 1.16602 12.8337 3.7776 12.8337 6.99935C12.8337 10.2211 10.2221 12.8327 7.00033 12.8327ZM6.41874 9.33268L10.5429 5.20793L9.71808 4.3831L6.41874 7.68302L4.76849 6.03277L3.94366 6.8576L6.41874 9.33268Z"
                                fill="#0B1107" />
                        </svg>
                        <p class=" capitalize text-[12px] ">Tires is Good</p>
                    </div>
                    <div class="bg-[#F0F0F0] flex px-5 py-1 gap-3 rounded-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M7.00033 12.8327C3.77858 12.8327 1.16699 10.2211 1.16699 6.99935C1.16699 3.7776 3.77858 1.16602 7.00033 1.16602C10.2221 1.16602 12.8337 3.7776 12.8337 6.99935C12.8337 10.2211 10.2221 12.8327 7.00033 12.8327ZM6.41874 9.33268L10.5429 5.20793L9.71808 4.3831L6.41874 7.68302L4.76849 6.03277L3.94366 6.8576L6.41874 9.33268Z"
                                fill="#0B1107" />
                        </svg>
                        <p class=" capitalize text-[12px] ">Rotors & Pads are Good</p>
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-2  place-items-start gap-2 ">
                <div class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                    <p class=" capitalize ">Auction Status</p>
                    <div class="flex gap-2 items-center">
                        <div class="w-[10px] h-[10px] rounded-full bg-[#FF333E] "></div>
                        <p class=" capitalize font-semibold text-xl">{{ storeAution.autionById?.status }} </p>
                    </div>
                </div>
                <div class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                    <p>Bid Status</p>
                    <div class="flex gap-2 items-center">
                        <p class=" capitalize  border border-[#E0E0E0] font-medium  rounded-full p-2">You Haven’t Bid</p>
                    </div>
                </div>
                <div class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                    <p>Current bid</p>
                    <p class=" capitalize font-semibold text-xl">${{ storeAution.autionById?.amountBid }}</p>
                </div>
                <div class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                    <p>Total Bid</p>
                    <p v-if="storeAution.autionById?.bids?.length > 0" class="font-semibold text-xl">{{
                        storeAution.autionById?.bids?.length }} Bids
                    </p>
                    <p v-else class="font-semibold text-xl">0 Bids</p>
                </div>

            </div>
            <div>
                <button class="btn bg-primary w-full text-blue-dark ">See Detail</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed, onUpdated } from "vue";
import axios from "@/axios";
import { useRouter, useRoute } from 'vue-router'
import moment from 'moment';
import { toast } from "vue3-toastify";
import { useAuthStore } from "@/stores/auth";
import { useAuctionStore } from "@/stores/auctions";
import { useSockethStore } from "@/stores/socket";
export default {

    components: {
    },
    setup() {
        const router = useRouter()
        const route = useRoute()
        const listUser = ref([])
        const listChat = ref([])
        const userFriend = ref(null)
        const search = ref('')
        const searchat = ref('')
        const textForm = ref('Hola RAMONN')
        const loading = ref(false)
        const loadingUser = ref(false)
        const termins = ref(null)
        const storeAution = useAuctionStore()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const dataAution = ref(null)
        const activateLayout = ref(false)
        const auth = useAuthStore()
        const socketStore = useSockethStore()
        

        const accept = () => {
            console.log('termis')
            termins.value = false
        }
        const getChats = async (id) => {
            let dataGet = {
                chatId: "65c030d14021c575e8036597-65b8029b2f66ffd8f461b813"
            }
            console.log('dataGet', dataGet)
            socket.emit("getChats", dataGet, (response) => {
                console.log('Res Chat getChats', response)
            });

        }
        const sendMessage = (params) => {

            /*   if (!textForm.value) {
                  toast("Campos Requerido", {
                      type: "error",
                  });
                  return
              } */
            const emoji = textForm.value
            const encodeemoji = encodeURIComponent(emoji)
            const dataSend = {
                chatid: `${route.params.id}-65b8029b2f66ffd8f461b813`,
                message: 'Holaaaaaaaaaaaaaaaaa'
            };
            console.log("dataSendMessage", dataSend);

            socket.emit("createMessage", dataSend, (data) => {
                console.log("SMILEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", data);
               
            });
        }
       
        const sendChat = (userF) => {
            console.log('userF', userF)
            termins.value = null
            loading.value = true
            userFriend.value = userF
            activateLayout.value = true
            const dataGet = {
                userId: 15447,
                friendId: userF.id,
            };
            socket.emit("findAllMessages", dataGet, (response) => {
                console.log('response', response)
                listChat.value = response
                listChat.value.map((chat, index) => {
                    let today = moment(new Date()).format('dddd')
                    let res = moment(chat.createdAt).format('dddd')
                    chat.today = res === today
                    chat.day = res

                })
                response.map((msg) => {
                    const encoded = msg.message
                    const decodedUriComponent = decodeURIComponent(encoded)
                    msg.me = msg.userFrom.id == 15447 ? true : false;
                    msg.message = decodedUriComponent
                    msg.createdAt = moment(msg.createdAt).format('LT');
                });
                listChat.value = response.reverse();
                console.log('listChat.value', listChat.value)
                setTimeout(() => {
                    loading.value = false
                    if (listChat.value.length === 0) {
                        termins.value = true
                    }
                    refreshScroll()
                }, 1000);
            });
        }
        const refreshScroll = () => {
            if (listChat.value.length > 3) {
                // ir al final de pagina
                setTimeout(() => {
                    const scroll = document.querySelector(".section-message-chat");
                    scroll.scrollTop = scroll.scrollHeight;
                }, 5);
            }
        }
        const getMessages = () => {
            const dataGet = {
                userId: 15447,
                friendId: route.query.state,
            };
            socket.emit("findAllMessages", dataGet, (response) => {
                listChat.value = response
                listChat.value.map((chat, index) => {
                    let today = moment(new Date()).format('dddd')
                    let res = moment(chat.createdAt).format('dddd')
                    chat.today = res === today
                    chat.day = res

                })
                response.map((msg) => {
                    const encoded = msg.message
                    const decodedUriComponent = decodeURIComponent(encoded)
                    console.log("recibid", decodedUriComponent);
                    msg.me = msg.userFrom.id == 15447 ? true : false;
                    msg.message = decodedUriComponent
                    msg.createdAt = moment(msg.createdAt).format('LT');
                });
                listChat.value = response.reverse();
                refreshScroll();
            });

        }
        const readMessages = (Messages = false) => {
            const dataGet = {
                userId: 15447,
                friendId: route.query.state,
            };
            socket.emit("setMessagesRead", dataGet, (response) => {
                console.log('readMessages', response)
                setTimeout(() => {
                    let countMessages =
                        localStorage.getItem("messages") - response.length;
                    localStorage.setItem("messages", countMessages);
                    if (Messages) getMessages();
                }, 5);
            });
        }
        const dataTableSearch = computed(() => {
            return listUser.value.filter(s => s?.firstName?.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))
        })
        const dataChat = computed(() => {
            return listChat.value.filter(s => s?.message?.toLocaleLowerCase().includes(searchat.value.toLocaleLowerCase()))
        })
        watch(textForm, async (newQuestion, oldQuestion) => {
            if (newQuestion) {
                let error = socket.emit('isChatting', 'user is chatting');
                socket.on('typing', function (data) {
                    console.log('data', data)

                });
                console.log('error', error)
            }
        })
        const getDataAution = async (id) => {
            loading.value = true
            try {
                let res = await storeAution.getAutionById({ uuid: id })
                if (res) {
                    console.log('res', res)
                    let photos = []
                    if (storeAution.autionById.vehicleDetails?.additionalDocuments,
                        storeAution.autionById.vehicleDetails?.exteriorPhotos,
                        storeAution.autionById.vehicleDetails?.interiorPhotos,
                        storeAution.autionById.vehicleDetails?.vehicleDamage) {
                        var d = photos.concat(
                            storeAution.autionById.vehicleDetails?.additionalDocuments,
                            storeAution.autionById.vehicleDetails?.exteriorPhotos,
                            storeAution.autionById.vehicleDetails?.interiorPhotos,
                            storeAution.autionById.vehicleDetails?.vehicleDamage
                        );
                        storeAution.autionById.photos = d
                    } else {
                        storeAution.autionById.photos = null
                    }

                    console.log('   storeAution.autionById', storeAution.autionById)
                }
            } catch (error) {
                console.log('error', error)
                loading.value = true
            } finally {
                loading.value = true
            }

        }
        onUpdated(() => {
           /* console.log('socket', socket)
             socket.on("newMessageSended", () => {
                 console.log('New Message')
                 getMessages();
             });
             socket.on("newMessageResived", () => {
                 console.log('newMessageResived')
                 if (route.path == '/inbox' && route.query.state) {
                     console.log('entro aqui')
                     readMessages(true);
                 }
             }); */
        }),
            onMounted(() => {
                console.log('route.params', route.params.id)
                console.log('socketStore.', socketStore.socket)
               /*  getDataAution(route.params.id)
                sendMessage()
                getChats() */
              /*   socket.value = socketConnects()
                console.log('auth.authProfile.data', auth.userData)
                console.log('socketConnects', socket.value) */



            })
        return {
            listUser,
            listChat,
            sendChat,
            sendMessage,
            accept,
            route,
            userFriend,
            textForm,
            loading,
            loadingUser,
            dataTableSearch,
            search,
            termins,
            dataChat,
            searchat,
            dataAution,
            bucket,
            activateLayout,
            storeAution
        };
    },
};
</script>