<template>
    <div class="text-blue-800  md:grid hidden h-custom-chat overflow-hidden relative  grid-cols-9 grid-rows-7 ">
        <div v-if="!activateLayout" class="absolute w-[70%] h-full right-0 -z-0  top-0">
            <div class="flex   flex-col top-0 w-full h-full justify-center gap-4 items-center ">
                <img :src="bucket + 'public/svg/Layer_chat.svg'" alt="">
                <p class="text-xl font-bold">Welcome to your Inbox</p>
                <p>Start or continue your conversations with seller here</p>
            </div>

        </div>
        <div class="row-span-1  col-span-2  border-b-2 border-r-2 border-[#E0E0E0]  p-5 ">
            <div class="flex justify-between items-center gap-2">
                <input type="text" placeholder="search chatting" v-model="search"
                    class="h-[40px] pl-4 border-2 border-[#E0E0E0] rounded-lg w-full" />
                <!--  <div
                    class="w-[50px] h-[40px]  flex items-center justify-center border-[1px] rounded-lg border-[#E0E0E0] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                        <path
                            d="M7.5 8.5V13L4.5 14.5V8.5L0 1.75V0.25H12V1.75L7.5 8.5ZM1.803 1.75L6 8.0455L10.197 1.75H1.803Z"
                            fill="#858585" />
                    </svg>
                </div> -->
            </div>
        </div>
        <div :class="activateLayout ? 'visible pointer-events-auto' : 'invisible pointer-events-none '"
            class="row-span-1 col-span-5 border-b-2 border-r-2 border-[#E0E0E0] pb-0  p-5">
            <div class="flex items-center justify-between gap-4">
                <div class="flex justify-between w-full items-center">
                    <div v-if="auth?.userData.type == 2">
                        <div class="flex gap-2 items-center">
                            <img v-if="storeAution?.owner?.seller.picture"
                                class="w-[60px] rounded-full shadow-lg h-[60px] object-cover"
                                :src="bucket + storeAution?.owner?.seller.picture" alt="">
                            <img v-else class="w-[60px] rounded-full shadow-lg h-[60px] object-cover "
                                src="https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA="
                                alt="">
                            <div class="flex items-start  flex-col">
                                <p class="capitalize text-2xl font-medium">
                                    {{ storeAution?.owner?.seller.firstName }} {{ storeAution?.owner?.seller.lastName }}
                                </p>
                                <p class="capitalize font-medium">{{ storeAution?.vehicleDetails?.year }} {{
            storeAution?.vehicleDetails?.make }} {{ storeAution?.vehicleDetails?.model }}</p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>{{ storeAution?.owner?.dealer?.address }}</p>
                        <div class="flex gap-2 items-center">
                            <img v-if="storeAution?.bids[0]?.participant.dealer.picture"
                                class="w-[60px] rounded-full shadow-lg h-[60px] object-cover"
                                :src="bucket + storeAution?.bids[0]?.participant.dealer.picture" alt="">
                            <img v-else class="w-[60px] rounded-full shadow-lg h-[60px] object-cover "
                                src="https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA="
                                alt="">
                            <div class="flex items-start  flex-col">
                                <p class="capitalize text-2xl font-medium">{{
            storeAution?.bids[0]?.participant.dealer.firstName }} {{
            storeAution?.bids[0]?.participant.dealer.lastName }}</p>
                                <p class="capitalize font-medium">{{ storeAution?.vehicleDetails?.year }} {{
            storeAution?.vehicleDetails?.make }} {{ storeAution?.vehicleDetails?.model }}</p>
                            </div>
                        </div>
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
                <!-- <div class="w-[25%]">
                    <button class="btn text-base-black border border-base-black text-md">Hide Auction</button>
                </div> -->
            </div>
        </div>
        <div :class="activateLayout ? 'visible pointer-events-auto' : 'invisible pointer-events-none '"
            class="row-span-1 col-span-2  border-b-2 border-[#E0E0E0] p-5">
            <div class="flex justify-between h-full items-center">
                <p class=" capitalize text-base-black text-xl">Auction</p>
                <RouterLink :to="auth?.userData.type == 2 ? '/current-bits' : '/all'" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M11.9997 10.5867L16.9497 5.63672L18.3637 7.05072L13.4137 12.0007L18.3637 16.9507L16.9497 18.3647L11.9997 13.4147L7.04974 18.3647L5.63574 16.9507L10.5857 12.0007L5.63574 7.05072L7.04974 5.63672L11.9997 10.5867Z"
                            fill="#0B1107" />
                    </svg>
                </RouterLink>
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
                <template v-if="dataTableSearch.length > 0" v-for="(user, indexx) in dataTableSearch" :key="indexx">
                    <RouterLink
                        :to="{ name: auth?.userData.type == 1 ? 'inbox-seller' : 'inbox-dealer', query: { id: user.auction._id + '-' + user.participant._id } }"
                        @click="getMessages(user, indexx, user.auction._id + '-' + user.participant._id)"
                        class="flex flex-row py-3 gap-4 pl-2  justify-center cursor-pointer   hover:bg-[#1F94F0] hover:text-white ease-in-out duration-500 transition-all  items-center border-b-2 border-[#E0E0E0]"
                        :class="(user.activeChat == route.query.id) && route.query.id ? 'bg-[#1F94F0] text-white' : 'bg-white'">
                        <template v-if="auth?.userData.type == 1">
                            <div class="w-[30%] ">
                                <img v-if="user.participant.dealer.picture"
                                    :src="bucket + user.participant.dealer.picture"
                                    class="object-cover h-12 w-full rounded-md" alt="" />
                                <img v-else class="w-full rounded-s-lg h-12 object-cover"
                                    src="@/assets/img/jpg/image.jpg" alt="">
                            </div>
                            <div class="w-full">
                                <div class="text-lg capitalize font-semibold">{{ user.title }}</div>
                                <p v-if="user?.participant?.address" class="capitalize">{{
            user?.participant?.address?.country }}, {{
            user?.participant?.address?.city }}</p>
                            </div>
                        </template>
                        <template v-else>
                            <div class="w-[30%] ">
                                <img v-if="user.auction?.vehicleDetails.exteriorPhotos[0]"
                                    :src="bucket + user.auction?.vehicleDetails?.exteriorPhotos[0]"
                                    class="object-cover h-12 w-full rounded-md" alt="" />
                                <img v-else class="w-full rounded-s-lg h-12 object-cover"
                                    src="@/assets/img/jpg/image.jpg" alt="">
                            </div>
                            <div class="w-full flex  justify-between items-end  relative">
                                <div>
                                    <div class="text-lg  capitalize font-semibold">{{ user.title }}</div>
                                    <p v-if="user?.participant?.address" class="capitalize">{{
            user?.participant.address?.country }}, {{
            user?.participant?.address?.city }}
                                    </p>
                                </div>
                                <p class="text-gray-500 absolute -bottom-2 right-2  ">11.31</p>
                            </div>
                        </template>
                    </RouterLink>
                </template>
                <div class="w-full h-full flex justify-center items-center" v-else>
                    <p class=" capitalize   font-semibold text-[#3e3e3e]  ">no results</p>
                </div>
            </template>
        </div>
        <div :class="activateLayout ? 'visible pointer-events-auto' : 'invisible pointer-events-none '"
            class="row-span-5 col-span-5 border-r-2 border-t-[1px] relative border-[#E0E0E0] py-5 px-2 pt-0 pb-0">
            <div v-if="termins && listChat?.length === 0"
                class="flex justify-center items-center absolute w-full top-0">
                <div class="bg-[#464B50] w-fit flex justify-around mt-4 z-50  gap-4 items-center rounded-md p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M7.99967 14.6673C4.31767 14.6673 1.33301 11.6827 1.33301 8.00065C1.33301 4.31865 4.31767 1.33398 7.99967 1.33398C11.6817 1.33398 14.6663 4.31865 14.6663 8.00065C14.6663 11.6827 11.6817 14.6673 7.99967 14.6673ZM7.99967 13.334C9.41416 13.334 10.7707 12.7721 11.7709 11.7719C12.7711 10.7717 13.333 9.41514 13.333 8.00065C13.333 6.58616 12.7711 5.22961 11.7709 4.22941C10.7707 3.22922 9.41416 2.66732 7.99967 2.66732C6.58519 2.66732 5.22863 3.22922 4.22844 4.22941C3.22824 5.22961 2.66634 6.58616 2.66634 8.00065C2.66634 9.41514 3.22824 10.7717 4.22844 11.7719C5.22863 12.7721 6.58519 13.334 7.99967 13.334ZM7.33301 4.66732H8.66634V6.00065H7.33301V4.66732ZM7.33301 7.33398H8.66634V11.334H7.33301V7.33398Z"
                            fill="white" />
                    </svg>
                    <p class=" capitalize text-white">Please read and accept our <a href=""
                            class="underline  font-medium">Terms
                            &
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
                            <div
                                class="chat-text--small loading !w-[60%] !rounded-br-3xl !rounded-tr-3xl !rounded-tl-xl ">
                            </div>
                            <div
                                class="chat-text--small mt-5 loading !w-[60%] !rounded-bl-3xl !rounded-tl-3xl !rounded-tr-xl ">
                            </div>

                        </div>
                    </div>
                </div>
            </template>
            <div v-else class="w-full  flex flex-col h-full relative justify-between">
                <div class="flex overflow-auto section-message-chat relative h-custom-chat-panel mb-3 flex-col ">

                    <template v-if="dataChat?.length > 0" v-for="(msg, index) in dataChat" :key="index">
                        <!--  <div class="flex justify-center gap-4 items-center mt-4">
                            <hr class="w-full border border-[#E0E0E0]">
                            <p v-if="msg.today" class="text-[#666]">Today</p>
                            <p v-else class="text-[#666]">{{ msg.day }}</p>
                            <hr class="w-full border border-[#E0E0E0]">
                        </div> -->
                        <div v-if="msg.me" class="flex justify-end pt-4 mb-4" :class="index == 0 ? 'pt-5' : ''">
                            <div>

                                <div v-if="msg.typeMedia == 'webp' || msg.typeMedia == 'jpeg' || msg.typeMedia == 'png'"
                                    class=" shadow-lg rounded-lg flex flex-col gap-2 p-2  ">
                                    <img class="w-full h-[300px] rounded-lg  object-contain" :src="bucket + msg.url"
                                        alt="">
                                    {{ msg.message }}
                                </div>
                                <div class=" bg-[#fff]  flex items-start flex-col  " v-else-if="msg.typeMedia == 'pdf'">
                                    <div @click="downloadItem(msg)"
                                        class="flex p-2 mb-2 bg-[#eaeaea] items-center cursor-pointer gap-2 shadow-sm hover:shadow-lg transition-all ease-out duration-300 rounded-lg ">
                                        <div class="bg-[#1F94F0] flex gap-2 items-center rounded-md p-2">
                                            <svg version="1.1" width="12" height="12" id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33 32"
                                                enable-background="new 0 0 33 32" xml:space="preserve" fill="#000000">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                </g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <g>
                                                        <path fill="#fff"
                                                            d="M20.219,8.125c0.198-0.193,0.202-0.51,0.009-0.707c-0.193-0.198-0.509-0.201-0.707-0.009L7.325,19.313 c-0.799,0.78-1.239,1.822-1.239,2.934s0.44,2.154,1.239,2.934c1.647,1.608,4.329,1.608,5.976,0l13.892-13.561 c1.313-1.282,2.036-2.993,2.036-4.819c0-1.826-0.723-3.538-2.036-4.819c-2.712-2.647-7.127-2.647-9.838,0L2.764,16.226 C0.981,17.965,0,20.288,0,22.766c0,2.479,0.981,4.802,2.764,6.542c1.842,1.798,4.263,2.698,6.683,2.698 c2.42,0,4.841-0.899,6.683-2.698l16.72-16.321c0.198-0.193,0.202-0.51,0.009-0.707c-0.192-0.198-0.509-0.201-0.707-0.009 l-16.72,16.321c-3.3,3.222-8.67,3.222-11.969,0C1.874,27.042,1,24.973,1,22.767s0.875-4.275,2.462-5.825L18.053,2.698 c2.327-2.272,6.114-2.273,8.442,0c1.118,1.092,1.734,2.549,1.734,4.104c0,1.554-0.616,3.011-1.734,4.103L12.603,24.466 c-1.263,1.232-3.317,1.232-4.58,0c-0.604-0.59-0.938-1.378-0.938-2.218s0.333-1.628,0.938-2.218L20.219,8.125z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <a class="hidden" :href="bucket + msg.url" v-text="msg.nameFile" />
                                            <p class="text-xs text-white">PDF</p>
                                        </div>

                                        <p>{{ msg.nameFile }}</p>
                                        <svg fill="#000000" width="25" height="25" viewBox="0 0 1024 1024"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                stroke-linejoin="round">
                                            </g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M512 666.5L367.2 521.7l36.2-36.2 83 83V256h51.2v312.5l83-83 36.2 36.2L512 666.5zm-204.8 50.3V768h409.6v-51.2H307.2z">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>

                                    <div class="w-full text-end flex justify-end items-end">
                                        <p> {{ msg.message }}</p>

                                    </div>
                                </div>
                                <p v-else
                                    class=" py-3 px-4 bg-[#1F94F0] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                    {{ msg.message }}
                                </p>

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
                                <p
                                    class=" py-3 px-4 bg-[#F0F0F0] rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-base-black">
                                    {{ msg.message }}
                                </p>
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
                    <!--  <div v-else class="w-full h-full flex justify-center items-center">
                        <p class=" capitalize   font-semibold text-[#3e3e3e]  ">no results</p>
                    </div> -->
                </div>
                <div :class="termins && listChat.length === 0 ? 'bg-[#A3A3A3] pointer-events-none ' : ''"
                    class="p-5 pt-0  absolute bottom-0 h-fit w-full bg-white  mb-2 border flex gap-3 flex-col shadow-xl   rounded-lg border-[#E0E0E0]">
                    <div>
                        <div v-if="form?.preview" class="w-[400px] relative mt-5 shadow-xl h-[400px]">
                            <img :class="porcertanje > 0 ? ' blur-sm transition-all ease-out duration-300 ' : 'transition-all ease-out duration-300 '"
                                class="w-full  h-full rounded-lg object-cover " :src="form?.preview" alt="">
                            <div v-if="porcertanje > 0"
                                class=" absolute left-0 top-0 flex justify-center items-center w-full h-full  ">
                                <div class="card">
                                    <div class="percent">
                                        <svg>
                                            <circle cx="105" cy="105" r="100"></circle>
                                            <circle cx="105" cy="105" r="100" ref="circle"></circle>
                                        </svg>
                                        <div class="card-img number">
                                            <p v-if="porcertanje == 100">Upload...</p>
                                            <h3 v-else>
                                                {{ porcertanje }}%
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="form.docuemnt"
                            class="bg-white flex flex-col relative items-start gap-2 mt-2 w-fit py-2 px-4 shadow-xl rounded-lg">
                            <div class="flex items-center">
                                <div>
                                    <svg viewBox="0 0 1024 1024" width="24" height="24" ass="icon" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M719.8 651.8m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
                                                fill="#42ff4f">
                                            </path>
                                            <path
                                                d="M512.1 64H172v896h680V385.6L512.1 64z m278.8 324.3h-280v-265l280 265zM808 916H216V108h278.6l0.2 0.2v296.2h312.9l0.2 0.2V916z"
                                                fill="#000000"></path>
                                            <path d="M280.5 530h325.9v16H280.5z" fill="#000000"></path>
                                            <path d="M639.5 530h90.2v16h-90.2z" fill="#42ff4f"></path>
                                            <path d="M403.5 641.8h277v16h-277z" fill="#000000"></path>
                                            <path d="M280.6 641.8h91.2v16h-91.2z" fill="#42ff4f"></path>
                                            <path d="M279.9 753.7h326.5v16H279.9z" fill="#000000"></path>
                                            <path d="M655.8 753.7h73.9v16h-73.9z" fill="#42ff4f"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="flex items-center gap-2 ">
                                    <p class="text-[#727272]">File:
                                        <span class="text-[#000] font-medium lowercase ">
                                            {{ form.docuemnt.name }}
                                        </span>
                                    </p>
                                    <p class="text-[#727272]">Size:
                                        <span class="text-[#000] font-medium lowercase ">
                                            {{ form.docuemnt.mb }}Mb
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div v-if="loadingFile" class=" h-2 w-full flex justify-center items-center   ">

                                <p class="text-[10px] text-center">upload...</p>
                                <!--  <p v-else-if="!loadingFile && porcertanje == 100" class="text-[10px] ">{{ porcertanje }}%
                                </p> -->
                            </div>


                        </div>
                        <input v-model="textForm" v-on:keyup.enter="sendMessage"
                            class="w-full input-shat bg-transparent  mt-5 rounded-xl focus:outline-none  focus:ring-0 "
                            type="text" placeholder="type your message here..." />
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <div class="flex gap-2">

                            <div>
                                <label>
                                    <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M17.5 6.66602V17.4935C17.5008 17.603 17.48 17.7115 17.4388 17.8129C17.3976 17.9143 17.3369 18.0066 17.2601 18.0845C17.1832 18.1624 17.0918 18.2244 16.991 18.267C16.8902 18.3096 16.7819 18.3319 16.6725 18.3327H3.3275C3.10818 18.3327 2.89783 18.2456 2.74266 18.0906C2.5875 17.9356 2.50022 17.7253 2.5 17.506V2.49268C2.5 2.04518 2.87417 1.66602 3.335 1.66602H12.4975L17.5 6.66602ZM15.8333 7.49935H11.6667V3.33268H4.16667V16.666H15.8333V7.49935ZM6.66667 5.83268H9.16667V7.49935H6.66667V5.83268ZM6.66667 9.16602H13.3333V10.8327H6.66667V9.16602ZM6.66667 12.4993H13.3333V14.166H6.66667V12.4993Z"
                                            fill="#858585" />
                                    </svg>
                                    <input type="file" accept=".pdf,.docx,.odt,.rtf,.epub" @change="previewDocument"
                                        class="hidden">

                                </label>

                            </div>
                            <div>
                                <label>
                                    <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M17.4998 12.5V15H19.9998V16.6667H17.4998V19.1667H15.8332V16.6667H13.3332V15H15.8332V12.5H17.4998ZM17.5065 2.5C17.9632 2.5 18.3332 2.87083 18.3332 3.3275V10.8333H16.6665V4.16667H3.33317V15.8325L11.6665 7.5L14.1665 10V12.3575L11.6665 9.8575L5.689 15.8333H11.6665V17.5H2.49317C2.27385 17.4998 2.06358 17.4125 1.90858 17.2573C1.75357 17.1022 1.6665 16.8918 1.6665 16.6725V3.3275C1.66803 3.10865 1.75559 2.89918 1.91026 2.74435C2.06494 2.58951 2.27432 2.50175 2.49317 2.5H17.5065ZM6.6665 5.83333C7.10853 5.83333 7.53245 6.00893 7.84502 6.32149C8.15758 6.63405 8.33317 7.05797 8.33317 7.5C8.33317 7.94203 8.15758 8.36595 7.84502 8.67851C7.53245 8.99107 7.10853 9.16667 6.6665 9.16667C6.22448 9.16667 5.80055 8.99107 5.48799 8.67851C5.17543 8.36595 4.99984 7.94203 4.99984 7.5C4.99984 7.05797 5.17543 6.63405 5.48799 6.32149C5.80055 6.00893 6.22448 5.83333 6.6665 5.83333Z"
                                            fill="#858585" />
                                    </svg>
                                    <input type="file" accept="image/png,image/jpeg" @change="previewImage"
                                        class="hidden">
                                </label>

                            </div>
                            <div class="relative z-50">
                                <svg @click="showEmoji" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M9.99984 18.3327C5.39734 18.3327 1.6665 14.6018 1.6665 9.99935C1.6665 5.39685 5.39734 1.66602 9.99984 1.66602C14.6023 1.66602 18.3332 5.39685 18.3332 9.99935C18.3332 14.6018 14.6023 18.3327 9.99984 18.3327ZM9.99984 16.666C11.7679 16.666 13.4636 15.9636 14.7139 14.7134C15.9641 13.4632 16.6665 11.7675 16.6665 9.99935C16.6665 8.23124 15.9641 6.53555 14.7139 5.2853C13.4636 4.03506 11.7679 3.33268 9.99984 3.33268C8.23173 3.33268 6.53604 4.03506 5.28579 5.2853C4.03555 6.53555 3.33317 8.23124 3.33317 9.99935C3.33317 11.7675 4.03555 13.4632 5.28579 14.7134C6.53604 15.9636 8.23173 16.666 9.99984 16.666ZM5.83317 10.8327H7.49984C7.49984 11.4957 7.76323 12.1316 8.23207 12.6005C8.70091 13.0693 9.3368 13.3327 9.99984 13.3327C10.6629 13.3327 11.2988 13.0693 11.7676 12.6005C12.2364 12.1316 12.4998 11.4957 12.4998 10.8327H14.1665C14.1665 11.9378 13.7275 12.9976 12.9461 13.779C12.1647 14.5604 11.1049 14.9993 9.99984 14.9993C8.89477 14.9993 7.83496 14.5604 7.05356 13.779C6.27216 12.9976 5.83317 11.9378 5.83317 10.8327ZM6.6665 9.16602C6.33498 9.16602 6.01704 9.03432 5.78262 8.7999C5.5482 8.56548 5.4165 8.24754 5.4165 7.91602C5.4165 7.5845 5.5482 7.26655 5.78262 7.03213C6.01704 6.79771 6.33498 6.66602 6.6665 6.66602C6.99802 6.66602 7.31597 6.79771 7.55039 7.03213C7.78481 7.26655 7.9165 7.5845 7.9165 7.91602C7.9165 8.24754 7.78481 8.56548 7.55039 8.7999C7.31597 9.03432 6.99802 9.16602 6.6665 9.16602ZM13.3332 9.16602C13.0017 9.16602 12.6837 9.03432 12.4493 8.7999C12.2149 8.56548 12.0832 8.24754 12.0832 7.91602C12.0832 7.5845 12.2149 7.26655 12.4493 7.03213C12.6837 6.79771 13.0017 6.66602 13.3332 6.66602C13.6647 6.66602 13.9826 6.79771 14.2171 7.03213C14.4515 7.26655 14.5832 7.5845 14.5832 7.91602C14.5832 8.24754 14.4515 8.56548 14.2171 8.7999C13.9826 9.03432 13.6647 9.16602 13.3332 9.16602Z"
                                        fill="#858585" />
                                </svg>
                                <EmojiPicker class="absolute -top-[300px]" v-if="showModalEmoji" :native="true"
                                    @select="onSelectEmoji" />
                            </div>

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
            class="row-span-5 flex flex-col  col-span-2  border-t-[1px] border-[#E0E0E0] p-5">
            <div class="flex flex-col">
                <img v-if="storeAution?.vehicleDetails?.exteriorPhotos[0]"
                    :src="bucket + storeAution?.vehicleDetails?.exteriorPhotos[0]"
                    class="object-cover rounded-xl h-[200px] " alt="" />
                <div class="mt-4">
                    <p class=" capitalize font-semibold text-xl">{{ storeAution?.vehicleDetails?.make }}</p>
                    <p class=" capitalize font-light">
                        {{ storeAution?.city }}, {{ storeAution?.province }}
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
                        <p class="  w-fit uppercase">{{ storeAution?.vin }}</p>
                    </div>
                    <div class="flex justify-between items-center gap-2">
                        <svg class="w-fit capitalize" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 16 16" fill="none">
                            <path
                                d="M13.3335 8.66667C13.3335 10.1394 12.7366 11.4727 11.7714 12.4379L12.7142 13.3807C13.9206 12.1743 14.6668 10.5076 14.6668 8.66667C14.6668 4.98477 11.682 2 8.00016 2C4.31826 2 1.3335 4.98477 1.3335 8.66667C1.3335 10.5076 2.07969 12.1743 3.28612 13.3807L4.22893 12.4379C3.26378 11.4727 2.66683 10.1394 2.66683 8.66667C2.66683 5.72115 5.05464 3.33333 8.00016 3.33333C10.9457 3.33333 13.3335 5.72115 13.3335 8.66667ZM10.1955 5.52865L7.00016 8.33333L8.3335 9.66667L11.1383 6.47145L10.1955 5.52865Z"
                                fill="#858585" />
                        </svg>
                        <p class=" capitalize w-fit ">{{ storeAution?.vehicleDetails?.odometer }} Kilometers</p>
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
                        <p class=" capitalize w-fit "> {{ storeAution?.vehicleDetails?.color }} </p>
                    </div>
                    <div class="flex justify-between items-center gap-2">
                        <svg class="w-fit capitalize" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.6668 13.3327H3.3335V13.9993C3.3335 14.3675 3.03502 14.666 2.66683 14.666H2.00016C1.63198 14.666 1.3335 14.3675 1.3335 13.9993V7.99935L3.00906 3.53118C3.20421 3.01078 3.7017 2.66602 4.2575 2.66602H11.7428C12.2986 2.66602 12.7961 3.01078 12.9913 3.53118L14.6668 7.99935V13.9993C14.6668 14.3675 14.3684 14.666 14.0002 14.666H13.3335C12.9653 14.666 12.6668 14.3675 12.6668 13.9993V13.3327ZM2.7575 7.99935H13.2428L11.7428 3.99935H4.2575L2.7575 7.99935ZM4.3335 11.3327C4.88578 11.3327 5.3335 10.8849 5.3335 10.3327C5.3335 9.78042 4.88578 9.33268 4.3335 9.33268C3.78121 9.33268 3.3335 9.78042 3.3335 10.3327C3.3335 10.8849 3.78121 11.3327 4.3335 11.3327ZM11.6668 11.3327C12.2191 11.3327 12.6668 10.8849 12.6668 10.3327C12.6668 9.78042 12.2191 9.33268 11.6668 9.33268C11.1146 9.33268 10.6668 9.78042 10.6668 10.3327C10.6668 10.8849 11.1146 11.3327 11.6668 11.3327Z"
                                fill="#858585" />
                        </svg>
                        <p class=" capitalize w-fit ">{{ storeAution?.vehicleDetails?.driveTrain }}</p>
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

            <template v-if="auth?.userData?.type == 1">
                <div class="grid grid-cols-2  place-items-start gap-2 ">
                    <div class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                        <p class=" capitalize ">Auction Status</p>
                        <div class="flex gap-2 items-center">
                            <div v-if="storeAution?.status == 'live'"
                                class="w-[10px] h-[10px] rounded-full bg-[#1f94f0]">
                            </div>
                            <!--   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path
                                    d="M7.33925 0.752733C6.17128 0.374641 4.90159 0.900558 4.34305 1.99381L3.67156 3.30812C3.59178 3.46428 3.46477 3.59129 3.3086 3.67107L1.9943 4.34256C0.901046 4.9011 0.37513 6.17079 0.753221 7.33876L1.20777 8.74292C1.26178 8.90976 1.26178 9.08942 1.20777 9.25626L0.753221 10.6604C0.37513 11.8284 0.901046 13.0981 1.9943 13.6567L3.3086 14.3281C3.46477 14.4079 3.59178 14.5349 3.67156 14.6911L4.34305 16.0054C4.90159 17.0987 6.17128 17.6246 7.33925 17.2465L8.74341 16.7919C8.91025 16.7379 9.08991 16.7379 9.25675 16.7919L10.6609 17.2465C11.8289 17.6246 13.0986 17.0987 13.6572 16.0054L14.3286 14.6911C14.4084 14.5349 14.5354 14.4079 14.6916 14.3281L16.0059 13.6567C17.0992 13.0981 17.6251 11.8284 17.247 10.6604L16.7924 9.25626C16.7384 9.08942 16.7384 8.90976 16.7924 8.74292L17.247 7.33876C17.6251 6.17079 17.0992 4.9011 16.0059 4.34256L14.6916 3.67107C14.5354 3.59129 14.4084 3.46428 14.3286 3.30812L13.6572 1.99381C13.0986 0.900558 11.8289 0.374641 10.6609 0.752733L9.25675 1.20728C9.08991 1.26128 8.91025 1.26129 8.74341 1.20728L7.33925 0.752733ZM4.63322 8.79734L5.81174 7.61876L8.16875 9.97584L12.8828 5.2618L14.0613 6.44031L8.16875 12.3328L4.63322 8.79734Z"
                                    fill="#05A54B" />
                            </svg> -->
                            <p v-if="storeAution?.status == 'completed'" class="capitalize font-semibold text-xl">
                                Accepted
                            </p>
                            <p v-else class="capitalize font-semibold text-xl">{{
            storeAution?.status }} </p>
                        </div>
                    </div>
                    <!--  <div class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                        <p>Bid Status</p>
                        <div class="flex gap-2 items-center">
                            <p class=" capitalize  border border-[#E0E0E0] font-medium  rounded-full p-2">You Haven’t Bid
                            </p>
                        </div>
                    </div> -->
                    <div class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                        <p>Current bid</p>
                        <p class=" capitalize font-semibold text-xl">${{ storeAution?.bids[0]?.amount }}</p>
                    </div>
                    <div v-if="storeAution?.status == 'completed'"
                        class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                        <p>Final bid</p>
                        <p class=" capitalize font-semibold text-xl">${{ storeAution?.bids[0]?.amount }}</p>
                    </div>
                    <div class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                        <p>Total Bid</p>
                        <p v-if="storeAution?.bids?.length > 0" class="font-semibold text-xl">
                            {{ storeAution?.bids?.length }} Bids
                        </p>
                        <p v-else class="font-semibold text-xl">0 Bids</p>
                    </div>
                </div>
                <div v-if="storeAution?.status == 'bids completed'">
                    <div class="flex items-center gap-3 mb-3 justify-between  ">
                        <button class="btn w-full bg-primary ">Accept</button>
                        <button class="btn w-full border-error border text-error">Decline</button>
                    </div>
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path
                                d="M9.99984 18.8327C5.39734 18.8327 1.6665 15.1018 1.6665 10.4993C1.6665 5.89685 5.39734 2.16602 9.99984 2.16602C14.6023 2.16602 18.3332 5.89685 18.3332 10.4993C18.3332 15.1018 14.6023 18.8327 9.99984 18.8327ZM9.99984 17.166C11.7679 17.166 13.4636 16.4636 14.7139 15.2134C15.9641 13.9632 16.6665 12.2675 16.6665 10.4993C16.6665 8.73124 15.9641 7.03555 14.7139 5.7853C13.4636 4.53506 11.7679 3.83268 9.99984 3.83268C8.23173 3.83268 6.53604 4.53506 5.28579 5.7853C4.03555 7.03555 3.33317 8.73124 3.33317 10.4993C3.33317 12.2675 4.03555 13.9632 5.28579 15.2134C6.53604 16.4636 8.23173 17.166 9.99984 17.166ZM9.1665 12.9993H10.8332V14.666H9.1665V12.9993ZM9.1665 6.33268H10.8332V11.3327H9.1665V6.33268Z"
                                fill="#0B1107" />
                        </svg>
                        <p>Approval ends in <span class="text-[#FF9A02]">48 Hours</span></p>
                    </div>
                </div>
                <div v-if="storeAution?.status == 'live'" class="p-2 flex  gap-2 flex-col ">
                    <div class="flex gap-2">
                        <p>Update your Final Bid </p>
                        <div class="text-error">
                            <div class="text-[#FF9A02] font-medium !m-0">
                                <vue-countdown :time="timeToEnd(storeAution?.startDate, storeAution?.duration)"
                                    v-slot="{ days, hours, minutes, seconds }">
                                    <div class="flex items-center gap-1">
                                        (
                                        <!--   <p v-if="days > 0" class="flex gap-1 items-center">{{ days }} </p> -->
                                        <p v-if="hours > 0" class="flex gap-1 items-center">{{ hours
                                            }}
                                            Hours</p>
                                        <p v-if="minutes > 0" :class="hours == 0 && minutes > 0 ? '!text-error' : ''"
                                            class="flex gap-1 items-center">{{ minutes }}m</p>
                                        <p v-if="seconds > 0" :class="hours == 0 && minutes > 0 ? '!text-error' : ''"
                                            class="flex gap-1 items-center">{{ seconds }}s</p>
                                        )
                                    </div>
                                </vue-countdown>
                            </div>
                        </div>
                    </div>
                    <button v-if="storeAution?.status == 'completed'"
                        class="btn bg-transparent border border-[#E0E0E0]   w-full text-blue-dark ">Have a trouble?
                        Report now</button>
                </div>
            </template>

            <template v-if="auth?.userData.type == 2">
                <div class="grid grid-cols-2  place-items-start gap-2 ">
                    <div class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                        <p class=" capitalize ">Auction Status</p>
                        <div class="flex gap-2 items-center">
                            <!--  <div class="w-[10px] h-[10px] rounded-full bg-[#FF333E]"></div> -->
                            <div v-if="storeAution?.status == 'live'"
                                class="w-[15px] h-[15px] rounded-full bg-[#1f94f0]">
                            </div>
                            <svg v-if="storeAution?.status == 'bids completed' || storeAution?.status == 'completed'"
                                xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                fill="none">
                                <path
                                    d="M7.33925 0.752733C6.17128 0.374641 4.90159 0.900558 4.34305 1.99381L3.67156 3.30812C3.59178 3.46428 3.46477 3.59129 3.3086 3.67107L1.9943 4.34256C0.901046 4.9011 0.37513 6.17079 0.753221 7.33876L1.20777 8.74292C1.26178 8.90976 1.26178 9.08942 1.20777 9.25626L0.753221 10.6604C0.37513 11.8284 0.901046 13.0981 1.9943 13.6567L3.3086 14.3281C3.46477 14.4079 3.59178 14.5349 3.67156 14.6911L4.34305 16.0054C4.90159 17.0987 6.17128 17.6246 7.33925 17.2465L8.74341 16.7919C8.91025 16.7379 9.08991 16.7379 9.25675 16.7919L10.6609 17.2465C11.8289 17.6246 13.0986 17.0987 13.6572 16.0054L14.3286 14.6911C14.4084 14.5349 14.5354 14.4079 14.6916 14.3281L16.0059 13.6567C17.0992 13.0981 17.6251 11.8284 17.247 10.6604L16.7924 9.25626C16.7384 9.08942 16.7384 8.90976 16.7924 8.74292L17.247 7.33876C17.6251 6.17079 17.0992 4.9011 16.0059 4.34256L14.6916 3.67107C14.5354 3.59129 14.4084 3.46428 14.3286 3.30812L13.6572 1.99381C13.0986 0.900558 11.8289 0.374641 10.6609 0.752733L9.25675 1.20728C9.08991 1.26128 8.91025 1.26129 8.74341 1.20728L7.33925 0.752733ZM4.63322 8.79734L5.81174 7.61876L8.16875 9.97584L12.8828 5.2618L14.0613 6.44031L8.16875 12.3328L4.63322 8.79734Z"
                                    fill="#05A54B" />
                            </svg>
                            <p v-if="storeAution?.status == 'live'" class=" capitalize font-semibold text-xl">{{
            storeAution?.status }} </p>
                            <p v-if="storeAution?.status == 'bids completed'" class=" capitalize font-semibold text-xl">
                                Completed </p>
                            <p v-if="storeAution?.status == 'completed'" class=" capitalize font-semibold text-xl">
                                Accepted
                            </p>
                            <p v-if="storeAution?.status == 'drop off'" class=" capitalize font-semibold text-xl">
                                Dropped
                                Off</p>
                        </div>
                    </div>
                    <div v-if="storeAution?.status == 'live'"
                        class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                        <p>Current bid</p>
                        <p class=" capitalize font-semibold text-xl">${{ storeAution?.bids[0]?.amount }}</p>
                    </div>
                    <div v-if="storeAution?.status == 'bids completed' || storeAution?.status == 'completed' || storeAution?.status == 'drop off'"
                        class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                        <p>Final bid</p>
                        <p class=" capitalize font-semibold text-xl">${{ storeAution?.bids[0]?.amount }}</p>
                    </div>
                    <div v-if="storeAution?.status == 'live'"
                        class="flex flex-col w-full h-full gap-2 border border-[#E0E0E0] p-4 rounded-lg pb-2 ">
                        <p>Total Bid</p>
                        <p v-if="storeAution?.bids?.length > 0" class="font-semibold text-xl">
                            {{ storeAution?.bids?.length }} Bids
                        </p>
                        <p v-else class="font-semibold text-xl">0 Bids</p>
                    </div>
                </div>
                <div class="p-2 flex  gap-2 flex-col ">
                    <div v-if="storeAution?.status == 'live'" class="w-full flex whitespace-pre">
                        <div class="flex">Update your Final Bid </div>
                        (<vue-countdown :time="timeToEnd(storeAution?.startDate, storeAution?.duration)"
                            v-slot="{ days, hours, minutes, seconds }">
                            <div class="flex whitespace-pre text-error  items-center gap-1">
                                <p v-if="hours > 0" class="flex gap-1 items-center">{{ hours }}
                                    Hours</p>
                                <p v-if="minutes > 0" :class="hours == 0 && minutes > 0 ? '!text-error' : ''"
                                    class="flex gap-1 items-center">{{ minutes }}m</p>
                                <p v-if="seconds > 0" :class="hours == 0 && minutes > 0 ? '!text-error' : ''"
                                    class="flex gap-1 items-center">{{ seconds }}s</p>
                            </div>
                        </vue-countdown>)
                    </div>
                    <p v-if="storeAution?.status == 'bids completed'">Update your Final Bid <span
                            class="text-error">(Expires in 48 hours)</span></p>
                    <template v-if="storeAution?.status == 'bids completed'">
                        <CurrencyInput :options="{ currency: 'USD' }" v-model="currencyBit" :label="'Place your bid'"
                            :placeHolder="'$ Min 100,100'" />
                        <p v-if="errorCurrencyBit"
                            class="text-error animate-fade-up  animate-ease-in-out animate-delay-100">{{
            errorCurrencyBit }}
                        </p>
                        <p class="text-[#858585] ">Please enter your revised final bid amount that has been agreed upon
                            with
                            the
                            seller</p>
                        <button @click="openFinalBid" class="btn bg-primary w-full text-blue-dark ">Submit</button>
                    </template>

                </div>
                <div v-if="storeAution?.status == 'completed'">
                    <RouterLink :to="{ name: 'action-details-dealer', params: { id: storeAution?._id } }"
                        class="btn bg-primary w-full text-blue-dark ">See Detail</RouterLink>
                </div>
            </template>
        </div>
        <div v-show="modalFinalBit"
            class="fixed inset-0 flex items-center z-50 justify-center bg-base-black  bg-opacity-50">
            <div class="max-w-md overflow-auto  bg-white rounded-lg shadow-xl">
                <div class="p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                    <p class="text-xl text-white">Final Bid Adjustment</p>
                    <svg @click="closeFinalBid" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8  cursor-pointer"
                        fill="none" viewBox="0 0 24 24" stroke="#fff">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="p-5 flex flex-col gap-2 bg-white">
                    <div class="flex justify-between gap-2 items-center">
                        <div
                            class="w-full relative bg-[#F7F7F7] p-5 h-24 flex flex-col items-center shadow-lg  justify-between  ">
                            <p>Final Bid</p>
                            <p class="text-2xl font-medium">${{ storeAution?.bids[0]?.amount }}</p>
                            <div
                                class="w-8 h-8 -right-4 top-[40%] z-[1000] absolute bg-blue-dark flex justify-center items-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M10.7812 7.33312L7.20517 3.75712L8.14784 2.81445L13.3332 7.99979L8.14784 13.1851L7.20517 12.2425L10.7812 8.66645H2.6665V7.33312H10.7812Z"
                                        fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div
                            class="w-full relative bg-[#F7F7F7] p-5 h-24 flex flex-col items-center  shadow-lg justify-between  ">
                            <p>Final Bid</p>
                            <p class="text-2xl font-medium">${{ currencyBit }}</p>
                        </div>
                    </div>
                    <div class="border-t border-[#E0E0E0] pt-2 mt-6">
                        <p>Are you sure you want to update the final bid for the
                            <span class="font-bold">
                                {{ storeAution?.vehicleDetails?.year }}
                                {{ storeAution?.vehicleDetails?.make }}
                                {{ storeAution?.vehicleDetails?.model }}
                            </span> ?
                        </p>
                    </div>
                    <div class="flex w-full gap-2 items-center">
                        <button class="btn w-full bg-primary">Yes</button>
                        <button @click="closeFinalBid"
                            class="btn w-full bg-transparent border border-[#E0E0E0] ">No</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-show="!showModeMobil" class="md:hidden ">
        <div class="border-b-2 border-r-2 border-[#E0E0E0]  p-2 ">
            <div class="flex justify-between items-center gap-2">
                <input type="text" placeholder="search chatting" v-model="search"
                    class="h-[40px] pl-4 border-2 border-[#E0E0E0] rounded-lg w-full" />
                <!-- <div
                    class="w-[50px] h-[40px]  flex items-center justify-center border-[1px] rounded-lg border-[#E0E0E0] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                        <path
                            d="M7.5 8.5V13L4.5 14.5V8.5L0 1.75V0.25H12V1.75L7.5 8.5ZM1.803 1.75L6 8.0455L10.197 1.75H1.803Z"
                            fill="#858585" />
                    </svg>
                </div> -->
            </div>
        </div>
        <div class="row-span-5  col-span-2 border-r-2 border-t-[1px] border-[#E0E0E0] ">
            <div v-if="loadingUser" class="chat">
                <div class="flex " v-for="( n, index ) in  20 " :key="index">
                    <figure class="chat-avatar loading"></figure>
                    <div class="chat-content">
                        <div class="chat-text--small loading"></div>
                        <!--  <div class="chat-text--large loading"></div> -->
                    </div>
                </div>
            </div>

            <template v-else>
                <template v-if="dataTableSearch.length > 0" v-for="( user, indexx ) in  dataTableSearch " :key="indexx">
                    <RouterLink
                        :to="{ name: auth?.userData.type == 1 ? 'inbox-seller' : 'inbox-dealer', query: { id: user.auction._id + '-' + user.participant._id } }"
                        @click="getMessages(user, indexx, user.auction._id + '-' + user.participant._id, 'mobil')"
                        class="flex flex-row py-3 gap-2 pl-2  justify-center cursor-pointer   hover:bg-[#1F94F0] hover:text-white ease-in-out duration-500 transition-all  items-center ">
                        <template v-if="auth?.userData.type == 1">
                            <div class="w-[30%] ">
                                <img v-if="user.participant.dealer.picture"
                                    :src="bucket + user.participant.dealer.picture"
                                    class="object-cover h-12 w-full rounded-md" alt="" />
                                <img v-else class="w-full rounded-s-lg h-12 object-cover"
                                    src="@/assets/img/jpg/image.jpg" alt="">
                            </div>
                            <div class="w-full">
                                <div class="text-lg font-semibold">{{ user.participant.dealer.name }}</div>
                                <span class="text-gray-500">{{ user.createdAt }} </span>
                            </div>
                        </template>

                        <template v-else>
                            <div class="w-[30%] ">
                                <img v-if="user.auction?.vehicleDetails.exteriorPhotos[0]"
                                    :src="bucket + user.auction?.vehicleDetails?.exteriorPhotos[0]"
                                    class="object-cover h-12 w-full rounded-md" alt="" />
                                <img v-else class="w-full rounded-s-lg h-12 object-cover"
                                    src="@/assets/img/jpg/image.jpg" alt="">
                            </div>
                            <div class="w-full flex  justify-between items-end  relative">
                                <div>
                                    <p class="text-sm font-semibold">
                                        {{ user.auction?.vehicleDetails?.year }} {{ user.auction?.vehicleDetails?.make
                                        }}
                                        {{ user.auction?.vehicleDetails?.model }}
                                    </p>
                                    <p class="text-xs capitalize">{{ user.auction?.owner?.seller?.firstName }} {{
            user.auction?.owner?.seller?.lastName }}
                                    </p>
                                </div>
                                <div class="absolute -bottom-2 right-2 ">
                                    <div
                                        class="bg-[#05A54B] text-[9px] py-1 px-2 flex justify-center items-center text-white rounded-lg ">
                                        10</div>
                                    <p class="text-gray-500 text-xs text-[#858585] mt-[7px] ">11.31</p>
                                </div>
                            </div>
                        </template>
                    </RouterLink>
                </template>
                <div class="w-full h-full flex justify-center items-center" v-else>
                    <p class=" capitalize   font-semibold text-[#3e3e3e]  ">no results</p>
                </div>
            </template>
        </div>
    </div>
    <div v-show="showModeMobil" class="md:hidden relative bg-white ">
        <div
            class="p-2 flex fixed top-0 z-[15000] w-full  bg-white border-b border-[#e0e0e0] justify-between items-center">
            <div class="flex items-start gap-2">
                <div @click="backChat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path
                            d="M6.00011 4.82031L10.1251 0.695312L11.3034 1.87365L7.17844 5.99865L11.3034 10.1236L10.1251 11.302L6.00011 7.17698L1.87511 11.302L0.696777 10.1236L4.82178 5.99865L0.696777 1.87365L1.87511 0.695312L6.00011 4.82031Z"
                            fill="#0B1107" />
                    </svg>
                </div>
                <div class="flex flex-col items-center gap-1">
                    <p class="text-sm font-medium">2016 Mazda MX-5 Miata Club</p>
                    <p class="text-xs">St. John, Newfoundland & Labrador</p>
                </div>
            </div>
            <div class="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path
                        d="M15.0257 14.3488L18.5948 17.9171L17.4157 19.0963L13.8473 15.5271C12.5196 16.5915 10.8682 17.1704 9.1665 17.168C5.0265 17.168 1.6665 13.808 1.6665 9.66797C1.6665 5.52797 5.0265 2.16797 9.1665 2.16797C13.3065 2.16797 16.6665 5.52797 16.6665 9.66797C16.6689 11.3696 16.09 13.0211 15.0257 14.3488ZM13.354 13.7305C14.4116 12.6429 15.0022 11.185 14.9998 9.66797C14.9998 6.44464 12.389 3.83464 9.1665 3.83464C5.94317 3.83464 3.33317 6.44464 3.33317 9.66797C3.33317 12.8905 5.94317 15.5013 9.1665 15.5013C10.6835 15.5037 12.1414 14.9131 13.229 13.8555L13.354 13.7305Z"
                        fill="#0B1107" />
                </svg>
                <div class="relative">
                    <div class="bg-error border border-blue-dark w-2 absolute right-0 top-0 h-2 rounded-full"></div>
                    <svg @click="isModal = true" xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                        viewBox="0 0 20 21" fill="none">
                        <path
                            d="M10.0002 3C14.4935 3 18.2319 6.23333 19.016 10.5C18.2327 14.7667 14.4935 18 10.0002 18C5.50687 18 1.76854 14.7667 0.984375 10.5C1.76771 6.23333 5.50687 3 10.0002 3ZM10.0002 16.3333C11.6998 16.333 13.3489 15.7557 14.6776 14.696C16.0063 13.6363 16.936 12.1569 17.3144 10.5C16.9346 8.84442 16.0043 7.36667 14.6757 6.30835C13.3471 5.25004 11.6988 4.67377 10.0002 4.67377C8.30162 4.67377 6.65328 5.25004 5.32469 6.30835C3.99609 7.36667 3.06585 8.84442 2.68604 10.5C3.06446 12.1569 3.9941 13.6363 5.32283 14.696C6.65155 15.7557 8.30065 16.333 10.0002 16.3333ZM10.0002 14.25C9.00565 14.25 8.05182 13.8549 7.34856 13.1516C6.6453 12.4484 6.25021 11.4946 6.25021 10.5C6.25021 9.50544 6.6453 8.55161 7.34856 7.84835C8.05182 7.14509 9.00565 6.75 10.0002 6.75C10.9948 6.75 11.9486 7.14509 12.6519 7.84835C13.3551 8.55161 13.7502 9.50544 13.7502 10.5C13.7502 11.4946 13.3551 12.4484 12.6519 13.1516C11.9486 13.8549 10.9948 14.25 10.0002 14.25ZM10.0002 12.5833C10.5527 12.5833 11.0826 12.3638 11.4733 11.9731C11.864 11.5824 12.0835 11.0525 12.0835 10.5C12.0835 9.94747 11.864 9.41756 11.4733 9.02686C11.0826 8.63616 10.5527 8.41667 10.0002 8.41667C9.44767 8.41667 8.91777 8.63616 8.52707 9.02686C8.13637 9.41756 7.91687 9.94747 7.91687 10.5C7.91687 11.0525 8.13637 11.5824 8.52707 11.9731C8.91777 12.3638 9.44767 12.5833 10.0002 12.5833Z"
                            fill="#0B1107" />
                    </svg>
                </div>

            </div>

        </div>
        <div style="overscroll-behavior: none;">
            <div class="mt-8 mb-[120px]">
                <template v-if="dataChat?.length > 0" v-for="( msg, index ) in  dataChat " :key="index">
                    <div v-if="msg.me" class="clearfix">
                        <div class="bg-[#1F94F0] text-white w-3/4 mx-2 my-1 p-2 rounded-lg text-xs">
                            <p> {{ msg.message }}</p>
                        </div>
                        <div class="flex pl-2 w-3/4   justify-start items-center gap-1">
                            <p class=" capitalize text-[12px]  py-2">{{ msg.createdAt }} 11:45</p>
                        </div>
                    </div>
                    <div v-else class="clearfix flex items-end flex-col">
                        <div class=" bg-[#F0F0F0]   float-right w-3/4 mx-2 my-1 text-xs p-2 rounded-lg clearfix">
                            <p> {{ msg.message }}</p>
                        </div>
                        <div class="flex  w-3/4 pr-2  justify-end items-center gap-1">
                            <p class=" capitalize text-[12px]  py-2">{{ msg.createdAt }} 11:45</p>
                            <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M7.73499 9.17366L8.67632 10.115L14.3203 4.47099L15.263 5.41366L8.67632 12.0003L4.43366 7.75766L5.37633 6.81499L6.79299 8.23166L7.73499 9.17299V9.17366ZM7.73633 7.28833L11.0377 3.98633L11.9777 4.92633L8.67632 8.22833L7.73633 7.28833ZM5.85166 11.0583L4.90966 12.0003L0.666992 7.75766L1.60966 6.81499L2.55166 7.75699L2.55099 7.75766L5.85166 11.0583Z"
                                    fill="#05A54B" />
                            </svg>
                        </div>
                    </div>
                </template>

            </div>
        </div>
        <div class="w-full bg-white  pt-2 fixed bottom-0">
            <div class="flex whitespace-pre gap-2 pb-3 px-2 items-center overflow-x-auto overflow-y-hidden">
                <p class="text-[9px] p-1 border border-[#0A0A0A] rounded-xl ">Are there any customization or aftermarket
                    modifications on the vehicle?</p>
                <p class="text-[9px] p-1 border border-[#0A0A0A] rounded-xl ">Do you have service records available for
                    the
                    vehicle?</p>
                <p class="text-[9px] p-1 border border-[#0A0A0A] rounded-xl ">Are there any known mechanical issues or
                    repairs needed?</p>
                <p class="text-[9px] p-1 border border-[#0A0A0A] rounded-xl ">Is the vehicle still under warranty, and
                    if
                    so, for how long?</p>
                <p class="text-[9px] p-1 border border-[#0A0A0A] rounded-xl ">Can you provide more details about the
                    vehicle's maintenance history?</p>
            </div>
            <div :class="termins && listChat.length === 0 ? 'bg-[#A3A3A3] pointer-events-none ' : ''"
                class="p-2 pt-0  border flex gap-3 flex-col w-full shadow-xl bg-white  border-[#E0E0E0]">
                <input v-model="textForm" v-on:keyup.enter="sendMessage"
                    class="w-full input-shat bg-transparent   rounded-xl focus:outline-none  focus:ring-0 " type="text"
                    placeholder="type your message here..." />
                <div class="flex justify-between items-center w-full">
                    <div class="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M17.5 6.66602V17.4935C17.5008 17.603 17.48 17.7115 17.4388 17.8129C17.3976 17.9143 17.3369 18.0066 17.2601 18.0845C17.1832 18.1624 17.0918 18.2244 16.991 18.267C16.8902 18.3096 16.7819 18.3319 16.6725 18.3327H3.3275C3.10818 18.3327 2.89783 18.2456 2.74266 18.0906C2.5875 17.9356 2.50022 17.7253 2.5 17.506V2.49268C2.5 2.04518 2.87417 1.66602 3.335 1.66602H12.4975L17.5 6.66602ZM15.8333 7.49935H11.6667V3.33268H4.16667V16.666H15.8333V7.49935ZM6.66667 5.83268H9.16667V7.49935H6.66667V5.83268ZM6.66667 9.16602H13.3333V10.8327H6.66667V9.16602ZM6.66667 12.4993H13.3333V14.166H6.66667V12.4993Z"
                                fill="#858585" />
                        </svg>
                        <p>HOLA
                            <EmojiPicker :native="true" @select="onSelectEmoji" />
                        </p>

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
    <div v-show="isModal"
        class="fixed inset-0 w-full flex items-end md:items-center z-50 md:justify-center bg-base-black  bg-opacity-50">
        <div class="w-full overflow-auto  bg-white rounded-lg shadow-xl animation-fade-modal">
            <div class=" p-2 md:p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p class=" text-sm md:text-xl text-white">Auction</p>
                <svg @click="isModal = false" xmlns="http://www.w3.org/2000/svg"
                    class=" w-6 h-8 md:w-8   md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div>
                hola
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed, onUpdated, watchEffect } from "vue";
import axios from "@/axios";
import { useRouter, useRoute } from 'vue-router'
import moment from 'moment';
import { toast } from "vue3-toastify";
import { useAuthStore } from "@/stores/auth";
import { useAuctionStore } from "@/stores/auctions";
import CurrencyInput from "../../../components/Inputs/CurrencyInput.vue";
import EmojiPicker from 'vue3-emoji-picker'
import { useStoreFile } from "@/stores/uploader";
import 'vue3-emoji-picker/css'
export default {

    components: {
        CurrencyInput,
        EmojiPicker
    },
    setup() {
        const router = useRouter()
        const route = useRoute()
        const listUser = ref([])
        const listChat = ref([])
        const userFriend = ref(null)
        const search = ref('')
        const searchat = ref('')
        const textForm = ref('')
        const loading = ref(false)
        const storeFile = useStoreFile()
        const loadingUser = ref(false)
        const termins = ref(false)
        const storeIdAution = useAuctionStore()
        const storeAution = ref(null)
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const dataAution = ref(null)
        const activateLayout = ref(false)
        const modalFinalBit = ref(false)
        const currencyBit = ref(null)
        const errorCurrencyBit = ref(null)
        const auth = useAuthStore()
        const showModeMobil = ref(false)
        const socketChat = auth.socketChat
        const powerValue = ref(computed(() => { return storeFile.progressUpload }))
        const isModal = ref(false)
        const showModalEmoji = ref(false)
        const loadingFile = ref(false)
        const circle = ref(null)
        const porcertanje = ref(0)
        const form = ref({
            img: null,
            preview: null,
            docuemnt: null,
            previewDocuemnt: null,
        })
        watch(powerValue, async (newQuestion, oldQuestion) => {
            console.log('ENTROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
            if (newQuestion) {
                if (circle.value) {
                    circle.value.style.cssText = ` --percent: ${newQuestion}`;
                }

            }

            porcertanje.value = newQuestion
        })
        const showEmoji = () => {
            showModalEmoji.value = true
        }

        const onSelectEmoji = (emoji) => {
            console.log(emoji)
            textForm.value = textForm.value ? `${textForm.value + emoji.i}` : emoji.i
            showModalEmoji.value = false
            /*
              // result
              { 
                  i: "😚", 
                  n: ["kissing face"], 
                  r: "1f61a", // with skin tone
                  t: "neutral", // skin tone
                  u: "1f61a" // without tone
              }
              */
        }
        const previewDocument = (event) => {

            form.value.img = null;
            form.value.preview = null;
            var input = event.target;
            var maxfilesize = 1024 * 1024  // 1 Mb
            var filesize = input.files[0].size
            let convertion = (input.files[0].size / (1024 * 1024)).toFixed(2);
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    form.value.previewDocuemnt = e.target.result;
                }

                form.value.docuemnt = input.files[0];
                form.value.docuemnt.mb = convertion
                reader.readAsDataURL(input.files[0]);
                console.log('form.value', form.value)
                console.log('form.value.docuemnt ', form.value.docuemnt)
                event.target.value = ''
            }
        }
        const previewImage = (event) => {
            form.value.docuemnt = null;
            form.value.previewDocuemnt = null;
            var input = event.target;
            var maxfilesize = 1024 * 1024  // 1 Mb
            var filesize = input.files[0].size
            let convertion = (input.files[0].size / (1024 * 1024)).toFixed(2);
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    form.value.preview = e.target.result;
                }
                form.value.img = input.files[0];
                form.value.img.mb = convertion
                reader.readAsDataURL(input.files[0]);
            }
            event.target.value = ''
        }
        function timeToEnd(startDate, duration) {
            if (!startDate || !duration) return 0;
            return (
                new Date(new Date(startDate).getTime() + duration * 1000 * 60).valueOf() - Date.now()
            );
        }
        const accept = () => {
            termins.value = false
        }
        const getChats = async (id) => {
            socketChat?.emit("getChats", (response) => {
                response.map((chats, index) => {
                    if ((chats.auction._id + "-" + chats.participant._id) == route.query.id) {
                        chats.activeChat = chats.auction._id + "-" + chats.participant._id
                    }
                    console.log('chats', chats)
                    let name = null;
                    if (auth?.userData.type == 2) {
                        name = `${chats.auction.owner.seller.firstName} ${chats.auction.owner.seller.lastName} `
                    } else {
                        name = `${chats.participant.dealer.firstName} ${chats.participant.dealer.lastName} `
                    }
                    chats.title = `${name} - ${chats.auction.vehicleDetails.make} ${chats.auction.vehicleDetails.model}`
                    console.log('chats', chats)
                    return chats

                })
                listUser.value = response

                console.log('listUser', listUser)
                /*  sendChat() */
            });

        }
        const sendMessage = async (params) => {
            /*  if (!textForm.value) {
                 toast("Campos Requerido", {
                     type: "error",
                 });
                 return ``
             } */
            loadingFile.value = true
            let file = null;
            file = form.value.img ? form.value.img : form.value.docuemnt
            console.log('file', file)
            try {
                let resFile = file && await storeFile.uploaderFile({ file: file, location: form.value.img ? 'chat' : `chat/${file?.name}` })
                const emoji = textForm.value
                const encodeemoji = encodeURIComponent(emoji)
                const dataSend = {
                    chatId: route.query.id,
                    message: encodeemoji ? encodeemoji : '',
                    url: resFile?.data ? resFile?.data : null
                };
                socketChat?.emit("createMessage", dataSend, (data) => {
                    console.log('data', data)
                    textForm.value = '';
                    loadingFile.value = false;
                    form.value.img = null;
                    form.value.preview = null;
                    form.value.docuemnt = null;
                    form.value.previewDocuemnt = null;
                    porcertanje.value = 0
                });

            } catch (error) {
                console.log('error', error)

            }

        }
        const backChat = () => {
            showModeMobil.value = false
        }
        const getMessages = (userF, index, id, screen) => {
            console.log('screen', screen)/* 
            listChat.value = [] */
            textForm.value = '';
            form.value.docuemnt = null;
            form.value.previewDocuemnt = null;
            form.value.img = null;
            form.value.preview = null;
            if (screen === 'mobil') {
                showModeMobil.value = true
            } else {
                showModeMobil.value = false
            }

            if (userF && index) {
                dataTableSearch.value[index].activeChat = userF.auction._id + "-" + userF.participant._id
            }

            activateLayout.value = true
            const dataGet = {
                chatId: id ? id : route.query.id,
            };
            socketChat?.emit("getMessages", dataGet, (response) => {
                console.log('PEPITOOOOOOOO', response)
                storeAution.value = response.auction
                userFriend.value = response.participant
                listChat.value = response.messages
                listChat.value.map((chat, index) => {
                    let today = moment(new Date()).format('dddd')
                    let res = moment(chat.createdAt).format('dddd')
                    chat.today = res === today;
                    chat.day = res;
                    let resName = chat?.url?.split("/")
                    chat.nameFile = resName ? resName[2] : null;
                    chat.typeMedia = chat?.url ? chat?.url?.split("?")[0]?.split("#")[0]?.split('.')?.pop() : null;


                })
                response.messages.map((msg) => {
                    const encoded = msg.message
                    const decodedUriComponent = decodeURIComponent(encoded)
                    msg.me = msg.user == auth.userData._id ? true : false;
                    msg.message = decodedUriComponent
                    msg.createdAt = moment(msg.createdAt).format('LT');
                });
                listChat.value = response.messages.reverse();
                console.log('listChat.value', listChat.value)
                /*  setTimeout(() => {
                     if (listChat.value.length === 0) {
                         termins.value = true
                     }
                     refreshScroll()
                 }, 1000); */
                refreshScroll()
            });
            if (listChat.value.length == 0) {
                termins.value = true
            }
            console.log('listChat.value', listChat.value)
        }
        const refreshScroll = () => {
            if (listChat.value.length > 3) {
                setTimeout(() => {
                    const scroll = document.querySelector(".section-message-chat");
                    scroll.scrollTop = scroll.scrollHeight;
                    window.scrollTo(0, document.body.scrollHeight);
                }, 5);
            }
        }
        const readMessages = (Messages = false) => {
            const dataGet = {
                userId: 15447,
                friendId: route.query.state,
            };
            socketChat?.emit("setMessagesRead", dataGet, (response) => {
                setTimeout(() => {
                    let countMessages =
                        localStorage.getItem("messages") - response.length;
                    localStorage.setItem("messages", countMessages);
                    if (Messages) getMessages();
                }, 5);
            });
        }
        const dataTableSearch = computed(() => {
            return listUser.value.filter(s => s.title?.toLocaleLowerCase().includes(search.value?.toLocaleLowerCase()))
        })
        const dataChat = computed(() => {
            return listChat.value.filter(s => s?.message?.toLocaleLowerCase().includes(searchat.value?.toLocaleLowerCase()))
        })
        const getDataAution = async (id) => {
            loading.value = true
            try {
                let res = await storeIdAution.getAutionById({ uuid: id })
                if (res) {
                    storeAution.value = res.data
                    const formatter = new Intl.NumberFormat();
                    storeAution.value.vehicleDetails.odometer = formatter?.format(storeAution.value.vehicleDetails.odometer)
                    console.log('storeAution', storeAution.value)
                }
            } catch (error) {
                loading.value = false
            } finally {
                loading.value = false
            }

        }

        const openFinalBid = () => {
            console.log('currencyBit.value', currencyBit.value)
            if (!currencyBit.value) {
                errorCurrencyBit.value = 'Required Field'
            } else if (currencyBit.value <= storeAution.value?.bids[0]?.amount) {
                errorCurrencyBit.value = 'Your bid is less than the minimum bid'
            } else {
                errorCurrencyBit.value = null
                modalFinalBit.value = true
            }

        }

        const closeFinalBid = () => {
            currencyBit.value = null
            errorCurrencyBit.value = null
            modalFinalBit.value = false

        }
        const downloadItem = ({ url, nameFile }) => {
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.png'); //or any other extension
            document.body.appendChild(link);
            link.click();
            /*   axios.get(url, { responseType: 'blob' })
                  .then(response => {
                      const blob = new Blob([response.data], { type: 'application/pdf' })
                      const link = document.createElement('a')
                      link.href = URL.createObjectURL(blob)
                      link.download = nameFile
                      link.click()
                      URL.revokeObjectURL(link.href)
                  }).catch(console.error) */
        }
        const example = () => {
            console.log('circle', circle.value.style)
            /*     circle.value.style.strokeWidth = 50 */

        }
        onMounted(async () => {
            auth.authProfile().then(async (res) => {
                if (res.data) {
                    getChats()
                    if (route.query.id) {
                        let idAution = route.query.id.split('-')
                        getDataAution(idAution[0])
                        getMessages()
                    } else {
                        activateLayout.value = false
                    }
                    socketChat.on("newMessageSended", () => {
                        getMessages()
                    });

                    socketChat.on("newMessageReceived", () => {
                        getMessages()
                        // Verificar que este dentro del chat para marcar como leido
                        // Sigue escuchando una vez que entra en esta vista

                    });
                }
            }).catch((error) => {
            });
        })
        return {
            listUser,
            listChat,
            getMessages,
            sendMessage,
            accept,
            timeToEnd,
            closeFinalBid,
            openFinalBid,
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
            storeAution,
            auth,
            modalFinalBit,
            currencyBit,
            errorCurrencyBit,
            showModeMobil,
            onSelectEmoji,
            backChat,
            previewImage,
            previewDocument,
            form,
            isModal,
            showEmoji,
            showModalEmoji,
            porcertanje,
            loadingFile,
            downloadItem,
            circle,
            example
        };
    },
};
</script>