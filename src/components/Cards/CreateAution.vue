<template>
    <div class="bg-white p-5 shadow-steps">
        <div class="flex items-center gap-6 mb-4  relative cursor-pointer">
            <RouterLink to="/account-seller">
                <img v-if="data?.seller?.picture" class="w-14 h-14 object-cover rounded-full"
                    :src="bucket + data.seller.picture" alt="">
                <img v-else class="w-14 h-14 rounded-full" src="@/assets/img/jpg/image.jpg" alt="">
            </RouterLink>
            <div>
                <p class=" font-semibold capitalize ">
                    <span v-if="data.seller?.firstName"> {{ data.seller?.firstName }}</span> <span
                        v-if="data.seller?.lastName"> {{
                    data.seller?.lastName
                }}</span>
                </p>
            </div>
            <svg class=" absolute right-0 top-1 " xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                viewBox="0 0 20 21" fill="none">
                <path
                    d="M10.9766 10.5006L6.85156 6.3756L8.0299 5.19727L13.3332 10.5006L8.0299 15.8039L6.85156 14.6256L10.9766 10.5006Z"
                    fill="#858585" />
            </svg>
        </div>
        <hr class="border-[#cfcfcf] border-1 ">
        <div v-show="path !== 'draft'" class="flex pt-5 cursor-pointer justify-between">
            <RouterLink to="/draft" class="font-medium">Draft <span class="text-[#858585]">{{
                    autions?.draft?.length
                    }}</span></RouterLink>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 21" fill="none">
                <path
                    d="M10.9766 10.5006L6.85156 6.3756L8.0299 5.19727L13.3332 10.5006L8.0299 15.8039L6.85156 14.6256L10.9766 10.5006Z"
                    fill="#858585" />
            </svg>
        </div>
        <RouterLink to="/all/create" id="createAuction"
            class="btn w-full bg-base-black mt-7 flex gap-2 justify-center items-center text-primary ">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 17" fill="none">
                <path
                    d="M7.83398 7.83398V3.83398H9.16732V7.83398H13.1673V9.16732H9.16732V13.1673H7.83398V9.16732H3.83398V7.83398H7.83398Z"
                    fill="#C1F861" />
            </svg>
            <p class="text-primary pt-1">Create Auction</p>
        </RouterLink>
    </div>
</template>

<script>
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
        const autions = ref(props.autions);
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const route = useRoute();
        const router = useRouter();
        const path = ref(computed(() => route.name))
        return {
            data,
            autions,
            bucket,
            route,
            router,
            path
        };
    },
};
</script>