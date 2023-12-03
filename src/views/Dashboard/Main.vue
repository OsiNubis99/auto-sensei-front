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

    </div>
</template>
  
<script>
import { ref } from 'vue'
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

        const sidebarOpen = ref(false)

        return {
            sidebarOpen,
        }
    }
}
</script>