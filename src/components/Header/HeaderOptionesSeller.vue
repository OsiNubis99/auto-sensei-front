<template>
    <nav class="bg-[#22282F] flex flex-nowrap overflow-auto scroll-custom-options items-center gap-6 py-4 px-3 md:p-5 ">

        <RouterLink to="/all" :class="path == 'all' ? 'bg-primary' : 'bg-[#464B50] text-white'"
            class="flex gap-3 h-5 rounded-[8px]  items-center py-4 px-3 md:p-5  w-auto  ease-linear duration-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M2.5 9.16667H17.5V10.8333H2.5V9.16667ZM15 15V17.5H13.3333V15H10.8333L14.1667 11.6667L17.5 15H15ZM6.66667 15V17.5H5V15H2.5L5.83333 11.6667L9.16667 15H6.66667ZM15 5H17.5L14.1667 8.33333L10.8333 5H13.3333V2.5H15V5ZM6.66667 5H9.16667L5.83333 8.33333L2.5 5H5V2.5H6.66667V5Z"
                    :fill="path == 'all' ? '#09121F' : '#C2C2C2'" />
            </svg>
            <p class=" whitespace-nowrap text-xs md:text-base ">All ({{ all?.length }})</p>
        </RouterLink>
        <RouterLink to="/upcoming-auctions"
            :class="path == 'upcoming-auctions' ? 'bg-primary' : 'bg-[#464B50] text-white'"
            class="flex gap-3 h-5 rounded-[8px]  items-center py-4 px-3 md:p-5  w-auto  ease-linear duration-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M7.5 14.1667C7.5 14.1667 13.3333 15 15.8333 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V11.6142C18.2188 11.4292 18.75 10.7766 18.75 10C18.75 9.22342 18.2188 8.57083 17.5 8.38583V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H15.8333C13.3333 5 7.5 5.83333 7.5 5.83333H4.16667C3.24619 5.83333 2.5 6.57952 2.5 7.5V12.5C2.5 13.4205 3.24619 14.1667 4.16667 14.1667H5L5.83333 18.3333H7.5V14.1667ZM9.16667 7.21767C9.73608 7.0955 10.4396 6.92661 11.1994 6.70311C12.5979 6.29178 14.375 5.64385 15.8333 4.64548V15.3545C14.375 14.3562 12.5979 13.7083 11.1994 13.2969C10.4396 13.0734 9.73608 12.9045 9.16667 12.7823V7.21767ZM4.16667 7.5H7.5V12.5H4.16667V7.5Z"
                    :fill="path == 'upcoming-auctions' ? '#09121F' : '#C2C2C2'" />
            </svg>
            <p class=" whitespace-nowrap text-xs md:text-base ">Upcoming Auctions ({{ upcoming?.length }})
            </p>
        </RouterLink>
        <RouterLink to="/live" :class="path == 'live' ? 'bg-primary' : 'bg-[#464B50] text-white'"
            class="flex gap-3 h-5 rounded-[8px]  items-center py-4 px-3 md:p-5  w-auto  ease-linear duration-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M15.304 15.3037C18.2329 12.3747 18.2329 7.626 15.304 4.69706L16.4825 3.51855C20.0622 7.09836 20.0622 12.9024 16.4825 16.4822L15.304 15.3037ZM4.69735 4.69706C1.76842 7.626 1.76842 12.3747 4.69735 15.3037L3.51884 16.4822C-0.060968 12.9024 -0.060968 7.09836 3.51884 3.51855L4.69735 4.69706ZM12.9469 12.9466C14.5741 11.3194 14.5741 8.68115 12.9469 7.05399L14.1254 5.87548C16.4035 8.15354 16.4035 11.847 14.1254 14.1251L12.9469 12.9466ZM7.05438 7.05399C5.42718 8.68115 5.42718 11.3194 7.05438 12.9466L5.87586 14.1251C3.5978 11.847 3.5978 8.15354 5.87586 5.87548L7.05438 7.05399ZM10.0007 11.667C10.9211 11.667 11.6673 10.9208 11.6673 10.0003C11.6673 9.07982 10.9211 8.33366 10.0007 8.33366C9.08015 8.33366 8.33398 9.07982 8.33398 10.0003C8.33398 10.9208 9.08015 11.667 10.0007 11.667Z"
                    :fill="path == 'live' ? '#09121F' : '#C2C2C2'" />
            </svg>
            <p class=" whitespace-nowrap text-xs md:text-base ">Live ({{ live?.length }})</p>
        </RouterLink>
        <RouterLink to="/completed" :class="path == 'completed' ? 'bg-primary' : 'bg-[#464B50] text-white'"
            class="flex gap-3 h-5 rounded-[8px]  items-center py-4 px-3 md:p-5  w-auto  ease-linear duration-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M4.55149 3.6932C6.01232 2.43008 7.9166 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39697 18.3327 9.99935C18.3327 11.7794 17.7745 13.4292 16.8237 14.7832L14.166 9.99935H16.666C16.666 6.31745 13.6813 3.33268 9.99935 3.33268C8.20753 3.33268 6.58082 4.03957 5.38287 5.1897L4.55149 3.6932ZM15.4472 16.3055C13.9863 17.5686 12.0821 18.3327 9.99935 18.3327C5.39697 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 8.21923 2.22417 6.56948 3.17502 5.21555L5.83268 9.99935H3.33268C3.33268 13.6813 6.31745 16.666 9.99935 16.666C11.7912 16.666 13.4179 15.9591 14.6159 14.809L15.4472 16.3055Z"
                    :fill="path == 'completed' ? '#09121F' : '#C2C2C2'" />
            </svg>
            <p class=" whitespace-nowrap text-xs md:text-base ">Completed ({{ completed?.length }})</p>
        </RouterLink>
    </nav>
</template>

<script>
import { ref, onMounted, computed, watch, watchEffect } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from "@/stores/auth";
import { useAuctionStore } from "@/stores/auctions";
export default {
    setup(props) {
        const route = useRoute();
        const path = ref(computed(() => route.name))

        const useAutions = useAuctionStore()
        const useAuth = useAuthStore()
        const all = ref([])
        const upcoming = ref([])
        const live = ref([])
        const completed = ref([])
        const autionUpdate = ref(computed(() => useAuth.aution))
        watch(autionUpdate, async (newQuestion, oldQuestion) => {
            if (newQuestion) {
                if (newQuestion.status == "live") {
                    let result = null;
                    result = upcoming.value.filter((remove) => remove._id !== newQuestion._id)
                    upcoming.value = []
                    upcoming.value = result
                    live.value.push(newQuestion)
                } else {
                    let result = null;
                    result = live.value.filter((remove) => remove._id !== newQuestion._id)
                    live.value = []
                    live.value = result
                    completed.value.push(newQuestion)
                }
            }

        })
        onMounted(async () => {
            let res = await useAutions.index()
            all.value = res.data.filter((item) => item.status !== "draft")
            upcoming.value = useAutions.upcoming;
            console.log('upcoming', upcoming.value)
            live.value = useAutions.live;
            completed.value = useAutions.completed;
        })
        return {
            path,
            all,
            upcoming,
            live,
            completed
        };
    },
};
</script>