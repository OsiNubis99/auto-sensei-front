<template>
    <div class="bg-white flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
        <div class="flex gap-6">
            <img src="@/assets/svg/review.svg" alt="">
            <div class="flex flex-col ">
                <p class=" font-semibold text-xl">Reviews</p>
                <p>Explore user reviews and ratings for valuable insights into their experiences</p>
            </div>
        </div>
        <hr class="border-[#cfcfcf] border-1 w-full ">
        <template v-if="storeProfile?.valorationes?.length == 0">
            <div class="flex w-full p-8 justify-center items-center flex-col gap-4">
                <img src="@/assets/svg/noreewed.svg" alt="">
                <p class="text-xl font-semibold capitalize">No Reviews Yet</p>
                <p class="text-center">You haven't received any reviews from buyers yet</p>
            </div>
        </template>
        <template v-else>
            <div v-for="(item, index) in storeProfile?.valorationes" :key="index"
                class="w-full border-b pb-4 border-[#C2C2C2]">
                <div class="flex justify-between items-center w-full">
                    <div class="flex gap-1 items-center">
                        <p class="text-2xl font-medium">{{ item.vehicleDetails.make }}</p>
                        <p class="text-[#858585] ">sold for</p>
                        <img class="w-[30px] rounded-full shadow-lg h-[30px]" :src="bucket + item.owner.seller.picture"
                            alt="">
                        <p>{{ item.owner.seller.firstName }} {{ item.owner.seller.lastName }}</p>
                    </div>
                    <div class="flex flex-col justify-start items-start">
                        <p>Final Bids</p>
                        <div class="flex">
                            <p class="text-xl font-semibold">$18,000</p>
                            <p class="mt-1 text-[#666666] ">/{{ item.bids.length }} Bids</p>
                        </div>
                    </div>
                </div>
                <star-rating :starSize="20" :rating="item?.valuation?.valoration" :read-only="true" :increment="0.01"
                    @rating-selected="setRating" :active-color="['#FF333E', '#FF9A02', '#FBDB17']"
                    :active-border-color="['#FF333E', '#FF9A02', '#FBDB17']">
                </star-rating>
                {{ rating }}
                <div>
                    <p>Working with AutoSensei was a breeze. We connected with a serious buyer quickly, and the negotiation
                        process was straightforward. Our deal was closed smoothly, and the platform's security features gave
                        us
                        confidence. AutoSensei is our top choice for connecting with reliable buyers
                    </p>
                    <div class="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M11.3335 1.99935H14.0002C14.177 1.99935 14.3465 2.06959 14.4716 2.19461C14.5966 2.31964 14.6668 2.4892 14.6668 2.66602V13.3327C14.6668 13.5095 14.5966 13.6791 14.4716 13.8041C14.3465 13.9291 14.177 13.9993 14.0002 13.9993H2.00016C1.82335 13.9993 1.65378 13.9291 1.52876 13.8041C1.40373 13.6791 1.3335 13.5095 1.3335 13.3327V2.66602C1.3335 2.4892 1.40373 2.31964 1.52876 2.19461C1.65378 2.06959 1.82335 1.99935 2.00016 1.99935H4.66683V0.666016H6.00016V1.99935H10.0002V0.666016H11.3335V1.99935ZM10.0002 3.33268H6.00016V4.66602H4.66683V3.33268H2.66683V5.99935H13.3335V3.33268H11.3335V4.66602H10.0002V3.33268ZM13.3335 7.33268H2.66683V12.666H13.3335V7.33268Z"
                                fill="#4D4D4D" />
                        </svg>
                        <p>October 24, 2023</p>
                    </div>

                </div>
            </div>
        </template>
    </div>
</template>
<script>
import { ref, onMounted, watch, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useUserStore } from "@/stores/user";
import { ModalReview } from "@/stores/modalReview";
import ModalReviewVue from '@/components/Modals/ModalReview/ModalReview.vue'
export default {
    props: {
        needReview: {
            type: Array
        },
        reviewed: {
            type: Array
        },
        storeProfile: {
            type: Object
        }

    },
    components: {
        ModalReviewVue,
    },
    setup(props) {
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const storeAuth = useAuthStore()
        const storeUser = useUserStore()
        const statusModalR = ModalReview()
        const storeProfile = ref(props.storeProfile)
        const optione = ref({
            opReview: true,
            opNewReview: false
        })
        const rating = ref(null)
        const reviewed = ref(props.reviewed)
        const needReview = ref(props.needReview)
        const setRating = (ratings) => {
            rating.value = "You have Selected: " + ratings + " stars";
        }
        const changeOptions = (op) => {
            switch (op) {
                case 'review':
                    optione.value.opReview = true
                    optione.value.opNewReview = false

                    break;
                case 'newreview':
                    optione.value.opReview = false
                    optione.value.opNewReview = true
                    break;
                default:
                    break;
            }
        }
        return {
            storeAuth,
            storeUser,
            optione,
            changeOptions,
            bucket,
            reviewed,
            needReview,
            setRating,
            rating,
            statusModalR,
            storeProfile
        };
    },
};
</script>