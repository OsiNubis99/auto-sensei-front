<template>
    <nav class="bg-[#22282F] flex flex-nowrap overflow-auto scroll-custom-options items-center gap-6 py-4 px-3 md:p-5 ">
        <RouterLink to="/upcoming" :class="path == 'upcoming' ? 'bg-primary' : 'bg-[#464B50] text-white'"
            class="flex gap-3 md:h-5 rounded-[8px]  h-8 items-center p-2 md:p-5  w-auto  ease-linear duration-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path
                    d="M5.5 12.1667C5.5 12.1667 11.3333 13 13.8333 15.5H14.6667C15.1269 15.5 15.5 15.1269 15.5 14.6667V9.61417C16.2188 9.42917 16.75 8.77658 16.75 8C16.75 7.22342 16.2188 6.57083 15.5 6.38583V1.33333C15.5 0.8731 15.1269 0.5 14.6667 0.5H13.8333C11.3333 3 5.5 3.83333 5.5 3.83333H2.16667C1.24619 3.83333 0.5 4.57952 0.5 5.5V10.5C0.5 11.4205 1.24619 12.1667 2.16667 12.1667H3L3.83333 16.3333H5.5V12.1667ZM7.16667 5.21767C7.73608 5.0955 8.43958 4.92661 9.19942 4.70311C10.5979 4.29178 12.375 3.64385 13.8333 2.64548V13.3545C12.375 12.3562 10.5979 11.7083 9.19942 11.2969C8.43958 11.0734 7.73608 10.9045 7.16667 10.7823V5.21767ZM2.16667 5.5H5.5V10.5H2.16667V5.5Z"
                    fill="#0B1107" />
            </svg>
            <p v-if="loadingUpcoming" class=" whitespace-nowrap text-xs md:text-base ">Loading... (
            <div class="lds-dual-ring"></div>)</p>
            <p v-else class=" whitespace-nowrap text-xs md:text-base ">Upcoming ({{ upcoming.length }})</p>
        </RouterLink>
        <RouterLink to="/liveDealer" :class="path == 'liveDealer' ? 'bg-primary' : 'bg-[#464B50] text-white'"
            class="flex gap-3 md:h-5 rounded-[8px]  h-8 items-center p-2 md:p-5  w-auto  ease-linear duration-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M15.304 15.3037C18.2329 12.3747 18.2329 7.626 15.304 4.69706L16.4825 3.51855C20.0622 7.09836 20.0622 12.9024 16.4825 16.4822L15.304 15.3037ZM4.69735 4.69706C1.76842 7.626 1.76842 12.3747 4.69735 15.3037L3.51884 16.4822C-0.060968 12.9024 -0.060968 7.09836 3.51884 3.51855L4.69735 4.69706ZM12.9469 12.9466C14.5741 11.3194 14.5741 8.68115 12.9469 7.05399L14.1254 5.87548C16.4035 8.15354 16.4035 11.847 14.1254 14.1251L12.9469 12.9466ZM7.05438 7.05399C5.42718 8.68115 5.42718 11.3194 7.05438 12.9466L5.87586 14.1251C3.5978 11.847 3.5978 8.15354 5.87586 5.87548L7.05438 7.05399ZM10.0007 11.667C10.9211 11.667 11.6673 10.9208 11.6673 10.0003C11.6673 9.07982 10.9211 8.33366 10.0007 8.33366C9.08015 8.33366 8.33398 9.07982 8.33398 10.0003C8.33398 10.9208 9.08015 11.667 10.0007 11.667Z"
                    :fill="path == 'liveDealer' ? '#09121F' : '#C2C2C2'" />
            </svg>
            <p v-if="loadingLive" class=" whitespace-nowrap text-xs md:text-base ">Loading... (
            <div class="lds-dual-ring"></div>)</p>
            <p v-else class=" whitespace-nowrap text-xs md:text-base ">Live ({{ live.length }})</p>

        </RouterLink>
        <RouterLink to="/current-bits" :class="path == 'current-bits' ? 'bg-primary' : 'bg-[#464B50] text-white'"
            class="flex gap-3 md:h-5 rounded-[8px]  h-8 items-center p-2 md:p-5  w-auto  ease-linear duration-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M4.55149 3.6932C6.01232 2.43008 7.9166 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39697 18.3327 9.99935C18.3327 11.7794 17.7745 13.4292 16.8237 14.7832L14.166 9.99935H16.666C16.666 6.31745 13.6813 3.33268 9.99935 3.33268C8.20753 3.33268 6.58082 4.03957 5.38287 5.1897L4.55149 3.6932ZM15.4472 16.3055C13.9863 17.5686 12.0821 18.3327 9.99935 18.3327C5.39697 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 8.21923 2.22417 6.56948 3.17502 5.21555L5.83268 9.99935H3.33268C3.33268 13.6813 6.31745 16.666 9.99935 16.666C11.7912 16.666 13.4179 15.9591 14.6159 14.809L15.4472 16.3055Z"
                    :fill="path == 'current-bits' ? '#09121F' : '#C2C2C2'" />
            </svg>
            <p v-if="loadingCurrentBits" class=" whitespace-nowrap text-xs md:text-base ">Loading... (
            <div class="lds-dual-ring"></div>)</p>
            <p class=" whitespace-nowrap text-xs md:text-base ">Current Bids ({{ currentBits.length }})
            </p>

        </RouterLink>

        <RouterLink to="/completed-buyer" :class="path == 'completed-buyer' ? 'bg-primary' : 'bg-[#464B50] text-white'"
            class="flex gap-3 md:h-5 rounded-[8px]  h-8 items-center p-2 md:p-5  w-auto  ease-linear duration-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M8.33876 1.75273C7.17079 1.37464 5.9011 1.90056 5.34256 2.99381L4.67107 4.30812C4.59129 4.46428 4.46428 4.59129 4.30812 4.67107L2.99381 5.34256C1.90056 5.9011 1.37464 7.17079 1.75273 8.33876L2.20728 9.74292C2.26128 9.90976 2.26128 10.0894 2.20728 10.2563L1.75273 11.6604C1.37464 12.8284 1.90056 14.0981 2.99381 14.6567L4.30812 15.3281C4.46428 15.4079 4.59129 15.5349 4.67107 15.6911L5.34256 17.0054C5.9011 18.0987 7.17079 18.6246 8.33876 18.2465L9.74292 17.7919C9.90976 17.7379 10.0894 17.7379 10.2563 17.7919L11.6604 18.2465C12.8284 18.6246 14.0981 18.0987 14.6567 17.0054L15.3281 15.6911C15.4079 15.5349 15.5349 15.4079 15.6911 15.3281L17.0054 14.6567C18.0987 14.0981 18.6246 12.8284 18.2465 11.6604L17.7919 10.2563C17.7379 10.0894 17.7379 9.90976 17.7919 9.74292L18.2465 8.33876C18.6246 7.17079 18.0987 5.9011 17.0054 5.34256L15.6911 4.67107C15.5349 4.59129 15.4079 4.46428 15.3281 4.30812L14.6567 2.99381C14.0981 1.90056 12.8284 1.37464 11.6604 1.75273L10.2563 2.20728C10.0894 2.26128 9.90976 2.26129 9.74292 2.20728L8.33876 1.75273ZM6.82674 3.75208C7.01292 3.38767 7.43616 3.21236 7.82548 3.33839L9.22967 3.79293C9.73018 3.95496 10.269 3.95496 10.7695 3.79293L12.1738 3.33839C12.563 3.21236 12.9863 3.38767 13.1724 3.75207L13.8439 5.06639C14.0833 5.53487 14.4643 5.91591 14.9328 6.15526L16.2471 6.82674C16.6115 7.01292 16.7868 7.43616 16.6608 7.82548L16.2063 9.22967C16.0443 9.73018 16.0443 10.269 16.2063 10.7695L16.6608 12.1738C16.7868 12.563 16.6115 12.9863 16.2471 13.1724L14.9328 13.8439C14.4643 14.0833 14.0833 14.4643 13.8439 14.9328L13.1724 16.2471C12.9863 16.6115 12.563 16.7868 12.1738 16.6608L10.7695 16.2063C10.269 16.0443 9.73018 16.0443 9.22967 16.2063L7.82548 16.6608C7.43616 16.7868 7.01292 16.6115 6.82674 16.2471L6.15526 14.9328C5.91591 14.4643 5.53487 14.0833 5.06639 13.8439L3.75208 13.1724C3.38767 12.9863 3.21236 12.563 3.33839 12.1738L3.79293 10.7695C3.95496 10.269 3.95496 9.73018 3.79293 9.22967L3.33839 7.82548C3.21236 7.43616 3.38767 7.01292 3.75208 6.82674L5.06639 6.15526C5.53487 5.91591 5.91591 5.53487 6.15526 5.06639L6.82674 3.75208ZM5.63259 9.79742L9.16809 13.3329L15.0607 7.4404L13.8822 6.26189L9.16809 10.9759L6.81111 8.61884L5.63259 9.79742Z"
                    :fill="path == 'completed-buyer' ? '#09121F' : '#C2C2C2'" />
            </svg>
            <p v-if="loadingCompleted" class=" whitespace-nowrap text-xs md:text-base ">Loading... (
            <div class="lds-dual-ring"></div>)</p>
            <p class=" whitespace-nowrap text-xs md:text-base ">Completed ({{ completed.length }})
            </p>
        </RouterLink>
    </nav>
</template>

<script>
import { ref, onMounted, computed, watchEffect, watch } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from "@/stores/auth";
import { useAuctionStore } from "@/stores/auctions";
import { arrayPhotos } from "../../utils/packPhotos";
export default {
    components: {
    },

    setup(props) {
        const route = useRoute();
        const router = useRouter();
        const path = ref(computed(() => route.name))
        const data = ref(props.data)
        const storeAutions = ref(props.storeAutions)
        const useAutions = useAuctionStore()
        const useAuth = useAuthStore()
        const autionUpdate = ref(computed(() => useAuth.aution))
        const currentBits = ref([])
        const upcoming = ref([])
        const live = ref([])
        const completed = ref([])
        const loadingUpcoming = ref(false)
        const loadingLive = ref(false)
        const loadingCurrentBits = ref(false)
        const loadingCompleted = ref(false)
        watch(autionUpdate, async (newQuestion, oldQuestion) => {

            if (newQuestion) {
                let photos = null;
                photos = arrayPhotos(newQuestion.vehicleDetails)
                if (photos.length > 0) {
                    newQuestion.photos = photos
                } else {
                    photos = null
                }
                if (newQuestion.status == 'live') {
                    if (newQuestion.bids.length > 0) {
                        let resUser = null;
                        resUser = newQuestion.bids.filter((user) => user.participant._id === useAuth.userData._id)
                        console.log('resUser', resUser)
                        if (resUser.length > 0) {

                            let result = null;
                            result = live.value.filter((remove) => remove._id !== newQuestion._id)
                            live.value = []
                            live.value = result
                            console.log('live.value.le', live.value.length)
                        }
                    }

                    if (newQuestion.status === 'live' && newQuestion.bids.length === 0) {
                        console.log('entro en agregar')
                        live.value.push(newQuestion)
                    }
                }
                if (newQuestion.status == 'live' && newQuestion.bids.length > 0) {
                    /*  let resUser = null;
                     resUser = newQuestion.bids.filter((user) => user.participant._id === useAuth.userData._id)
                     console.log('resUser', resUser)
                     if (resUser.length > 0) {
                         currentBits.value.push(newQuestion)
                     } */

                    if (newQuestion.bids[0].participant._id === useAuth.userData._id) {
                        currentBits.value.push(newQuestion)
                    }

                }
                if (newQuestion.status == 'completed') {
                    if (newQuestion.bids.length > 0) {
                        let resUser = null;
                        resUser = newQuestion.bids.filter((user) => user.participant._id === useAuth.userData._id)
                        console.log('resUser', resUser)
                        if (resUser.length > 0) {
                            let result = null;
                            result = currentBits.value.filter((remove) => remove._id !== newQuestion._id)
                            currentBits.value = []
                            currentBits.value = result
                        }
                    }
                }
                if (newQuestion.status == 'bids completed') {
                    let resUser = null;
                    resUser = newQuestion.bids.filter((user) => user.participant._id === useAuth.userData._id)
                    if (resUser.length > 0) {
                        let result = null;
                        result = currentBits.value.filter((remove) => remove._id !== newQuestion._id)
                        currentBits.value = result
                        let newArray = completed.value.map(aution => aution._id !== newQuestion._id ? aution : newQuestion);
                        completed.value = []
                        completed.value = newArray
                    }

                }
            }



        })
        onMounted(async () => {
            loadingUpcoming.value = true;
            loadingLive.value = true;
            loadingCompleted.value = true;
            loadingCurrentBits.value = true;
            let resCurrent = await useAutions.currentBids
            let resUpcoming = await useAutions.upcoming;
            let resLive = await useAutions.live
            let resCompleted = await useAutions.completed
            if (resCurrent) {
                currentBits.value = useAutions.currentBids;
                loadingCurrentBits.value = false
            }
            if (resUpcoming) {
                upcoming.value = useAutions.upcoming;
                loadingUpcoming.value = false
            }
            if (resLive) {
                live.value = useAutions.live;
                loadingLive.value = false
            }
            if (resCompleted) {
                completed.value = useAutions.completed;
                loadingCompleted.value = false
            }
        })
        return {
            data,
            storeAutions,
            path,
            currentBits,
            upcoming,
            live,
            completed,
            loadingUpcoming,
            loadingLive,
            loadingCurrentBits,
            loadingCompleted
        };
    },
};
</script>