<template>
    <div class="flex items-center gap-2 ">
        <p class="mt-2 hidden md:block">Sort by:</p>
        <div class="flex items-center gap-5">
            <div class="navbar-right relative">
                <button @click="isOpen = !isOpen" class="flex gap-2 rounded-md  shadow-md px-2 bg-white items-center">
                    <p class="p-2 text-xs md:text-[16px] pb-1">Auction Status & Date </p>
                    <div class=" p-2 border-l-2 pr-0 border-[#efefef] ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M15 3V12H17.25L14.25 15.75L11.25 12H13.5V3H15ZM9 13.5V15H2.25V13.5H9ZM10.5 8.25V9.75H2.25V8.25H10.5ZM10.5 3V4.5H2.25V3H10.5Z"
                                fill="#858585" />
                        </svg>
                    </div>
                </button>
                <div v-if="isOpen"
                    class="absolute  z-10 top-auto left-0 w-full py-2 mt-2 rounded-lg border-gray-900 bg-white shadow-xl">
                    <div
                        class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">
                        Auction
                        Title
                    </div>
                    <a href=""
                        class=" text-[10px] md:text-sm text-gray-900 hover:bg-base-black hover:text-white block px-4 py-2 cursor-pointer">Auction
                        Start</a>

                </div>
            </div>
            <div class="shadow-md md:flex rounded-md hidden bg-white">
                <div @click="changeGridTemplate" :class="changeLayouts ? 'bg-white' : 'bg-[#EFF8E0]'"
                    class="p-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M19 11V5H5V11H19ZM19 13H5V19H19V13ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z"
                            :fill="changeLayouts ? '#09121F' : '#7EC600'" />
                    </svg>
                </div>
                <div @click="changeGridTemplate" :class="changeLayouts ? 'bg-[#EFF8E0]' : 'bg-white'"
                    class=" p-2 flex item-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z"
                            :fill="changeLayouts ? '#7EC600' : '#09121F'" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted, computed } from "vue";
export default {
    props: {
        changeLayouts: {
            type: Boolean
        },
        changeGridTemplate: {
            type: Function
        },
    },
    setup(props) {
        const changeLayouts = ref(props.changeLayouts);
        const isOpen = ref(false)
        const changeGridTemplate = () => {
            props.changeGridTemplate()

        }
        return {
            changeLayouts,
            isOpen,
            changeGridTemplate
        };
    },
};
</script>





  