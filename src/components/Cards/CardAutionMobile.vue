<template>
    <div class=" fixed z-[100] bottom-2 w-full gap-3 px-4 flex justify-between items-center ">
        <RouterLink v-if="path !== 'draft'" to="/draft" class=" btn w-full !py-2 !text-sm bg-white border border-base-black font-medium">
            Draft
            <span class="text-[#858585] ml-1">{{ autions?.draft?.length }}</span>
        </RouterLink>
        <RouterLink to="/all/create" class="btn w-full !py-2 text-primary flex justify-between gap-2 !text-sm bg-base-black border font-medium ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 17" fill="none">
                <path
                    d="M7.83398 7.83398V3.83398H9.16732V7.83398H13.1673V9.16732H9.16732V13.1673H7.83398V9.16732H3.83398V7.83398H7.83398Z"
                    fill="#C1F861" />
            </svg>
            <p class="text-sm mt-1 whitespace-nowrap ">Create Auction</p>
        </RouterLink>
    </div>
</template>
  
<script >
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from 'vue-router'
export default {
    components: {
    },
    props: {
        data: {
            type: Object
        },
        autions: {
            type: Object
        },
    },
    setup(props) {
        const data = ref(props.data);
        const route = useRoute();
        const path = ref(computed(() => route.name))
        const autions = ref(props.autions);
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        onMounted(() => {

        })
        return {
            data,
            autions,
            bucket,
            path
        };
    },
};
</script>

  
  
  