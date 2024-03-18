<template>
    <div class="w-full h-screen-payment bg-[#f5ffe2e0] flex justify-center items-center">
        <div
            class="max-w-xl w-full m-2 gap-4 p-2 md:p-5 flex flex-col justify-between items-center md:h-[50%] bg-white shadow-xl rounded-lg  relative ">
            <div>
                <h1 class="text-blue-dark text-2xl font-medium md:text-4xl">
                    Payment Save
                </h1>
                <div class="payment-loader mt-5">
                    <div class="pad">
                        <div class="chip"></div>
                        <div class="line line1"></div>
                        <div class="line line2"></div>
                    </div>
                </div>
            </div>

            <p class="md:text-xl   text-center">We have successfully processed your payment information. Yoy may continue your
                bidding.</p>
            <div>
                <hr class="border border-[#e9e9e9d9] ">
                <RouterLink to="/upcoming" class="btn bg-primary shadow-lg ">auctions bidding</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { RouterLink } from "vue-router";
export default {
    components: {},
    setup() {
        onMounted(() => {
        })
        return {
        };
    },
};
</script>