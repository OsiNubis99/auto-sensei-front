<template>
    <header class="bg-base-black relative shadow-lg px-3 py-2">
        <nav class="flex justify-between flex-row-reverse">
            <div class="w-[130px] md:w-[200px] flex items-center">
                <div class="flex gap-5 ">
                    <IconSearch />
                    <IconNotifications />
                    <IconUser />
                </div>
                <div name="menu" @click="toggle()" class="text-[30px] cursor-pointer md:hidden">menu</div>
            </div>
            <div class="flex items-center gap-3">
                <RouterLink to="/" class="flex items-center gap-2">
                    <LogoIcon class="w-full" />
                </RouterLink>
                <div :class="open ? ' left-[0%]' : 'left-[-100%]'"
                    class="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh]  flex md:items-center gap-[1.5vw] top-[100%]  px-5 md:py-0 py-5 ">
                    <ul class="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">

                        <RouterLink to="/dashboard" :class="path == 'inicio' ? 'bg-[#303E18] text-primary' : ' text-white'"
                            class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                            <p>Dashboard</p>
                        </RouterLink>
                        <RouterLink to="/action-list"
                            :class="path == 'auto-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                            class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                            <p>Auctions List</p>
                        </RouterLink>
                        <RouterLink to="/dealer-list"
                            :class="path == 'dealer-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                            class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                            <p>Dealer List</p>
                        </RouterLink>
                        <RouterLink to="/seller-list"
                            :class="path == 'seller-list' ? 'bg-[#303E18] text-primary' : ' text-white'"
                            class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                            <p>Seller List</p>
                        </RouterLink>
                        <RouterLink to="/settings" :class="path == 'config-setting' ? 'bg-[#303E18] text-primary' : ' text-white'"
                            class="relative  max-w-fit py-2  px-4  rounded-[8px] hover:bg-[#303E18]  hover:text-primary ease-linear duration-500  ">
                            <p>Settings</p> 
                        </RouterLink>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script >
import { ref, computed, watch, onMounted } from "vue";
import LogoIcon from '@/assets/svg/logo.vue'
import { useRoute, useRouter } from 'vue-router'
import IconSearch from "../icons/iconSearch.vue";
import IconNotifications from "../icons/iconNotifications.vue";
import IconUser from "../icons/iconUser.vue";
export default {
    components: {
        LogoIcon,
        IconUser,
        IconNotifications,
        IconSearch
    },
    setup() {
        let open = ref(false)
        const route = useRoute();
        const path = ref(computed(() => route.name))
        const toggle = () => {
            open.value = !open.value
        }
        return {
            toggle,
            open,
            LogoIcon,
            path,
            IconUser,
            IconNotifications,
            IconSearch
        };
    },
};
</script>
