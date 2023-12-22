<template>
    <div class="px-4 sm:px-6 lg:px-8 bg-[#F3F5F7] py-8 w-full max-w-9xl mx-auto">
        <h1 class="text-4xl font-semibold ">Dashboard</h1>
        <div class="my-2 flex justify-between items-center">
            <div></div>
            <div class="flex gap-2">
                <button class="bg-white font-semibold rounded-lg shadow-xl px-4 py-2 text-[#00]">Export</button>
                <button class="bg-blue-dark font-semibold rounded-lg shadow-xl px-4 py-2 text-primary">Refresh</button>
            </div>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-12 gap-6">

            <!-- Line chart (Acme Plus) -->
            <DashboardCard01 />
            <!-- Line chart (Acme Advanced) -->
            <DashboardCard02 />
            <!-- Line chart (Acme Professional) -->
            <DashboardCard03 />
            <!-- Bar chart (Direct vs Indirect) -->
            <!-- <DashboardCard04 /> -->
            <!-- Line chart (Real Time Value) -->
            <DashboardCard05 />
            <DashboardCard05 />
            <!-- Doughnut chart (Top Countries) -->
            <DashboardCard07 />
            <!-- Table (Top Channels) -->
            <DashboardCard07 />
            <DashboardCard07 />

        </div>
        <div v-if="loading" class="bg-[#000000a1;] left-0 top-0 absolute w-full h-full flex justify-center items-center">
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
    </div>
</template>
  
<script>
import { ref, onMounted } from "vue";
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import WelcomeBanner from '../../partials/dashboard/WelcomeBanner.vue'
import DashboardAvatars from '../../partials/dashboard/DashboardAvatars.vue'
import FilterButton from '../../components/DropdownFilter.vue'
import Datepicker from '../../components/Datepicker.vue'
import DashboardCard01 from '../../partials/dashboard/DashboardCard01.vue'
import DashboardCard02 from '../../partials/dashboard/DashboardCard02.vue'
import DashboardCard03 from '../../partials/dashboard/DashboardCard03.vue'
import DashboardCard04 from '../../partials/dashboard/DashboardCard04.vue'
import DashboardCard05 from '../../partials/dashboard/DashboardCard05.vue'
import DashboardCard06 from '../../partials/dashboard/DashboardCard06.vue'
import DashboardCard07 from '../../partials/dashboard/DashboardCard07.vue'
import DashboardCard08 from '../../partials/dashboard/DashboardCard08.vue'
import DashboardCard09 from '../../partials/dashboard/DashboardCard09.vue'
import DashboardCard10 from '../../partials/dashboard/DashboardCard10.vue'
import DashboardCard11 from '../../partials/dashboard/DashboardCard11.vue'
import DashboardCard12 from '../../partials/dashboard/DashboardCard12.vue'
import DashboardCard13 from '../../partials/dashboard/DashboardCard13.vue'
import Banner from '../../partials/Banner.vue'
import { useAuthStore } from "@/stores/auth";
import { toast } from "vue3-toastify";
import { useRouter, useRoute } from 'vue-router'
export default {
    name: 'Dashboard',
    components: {
        Sidebar,
        Header,
        WelcomeBanner,
        DashboardAvatars,
        FilterButton,
        Datepicker,
        DashboardCard01,
        DashboardCard02,
        DashboardCard03,
        DashboardCard04,
        DashboardCard05,
        DashboardCard06,
        DashboardCard07,
        DashboardCard08,
        DashboardCard09,
        DashboardCard10,
        DashboardCard11,
        DashboardCard12,
        DashboardCard13,
        Banner,
    },
    setup() {
        const store = useAuthStore()
        const sidebarOpen = ref(false)
        const token = ref('')
        const loading = ref(false)
        const route = useRoute();
        const router = useRouter()
        const getProfile = async () => {
            loading.value = true
            if (token.value) {
                try {
                    await store.authProfile({ token: token.value })
                    console.log('store?.userData', store?.userData)
                } catch (error) {
                    toast(error?.response?.data?.message || "An error has occurred", {
                        type: "error",
                    });
                    setTimeout(async () => {
                        localStorage.clear()
                        await router.push({ path: '/' })
                        router.go()
                        loading.value = false
                    }, 2500);
                } finally {
                    loading.value = false
                }

            }
        }
        onMounted(() => {
            token.value = localStorage.getItem('token')
            getProfile()
        })

        return {
            sidebarOpen,
            loading
        }
    }
}
</script>