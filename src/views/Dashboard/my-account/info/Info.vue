<template>
    <div class="bg-white flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
        <div class="flex gap-6">
            <img src="../../../../assets/svg/profile.svg" alt="">
            <div class="flex flex-col ">
                <p class=" font-semibold text-xl">Profile</p>
                <p>Your Profile Information</p>
            </div>
        </div>
        <hr class="border-[#cfcfcf] border-1 w-full ">
        <div class="flex justify-between w-full  ">
            <div class="flex flex-col w-[60%] ">
                <p class=" font-semibold text-lg">General Information </p>
                <p>This will be displayed on the seller's page</p>
            </div>
            <div
                class="flex flex-col space-y-2  w-full p-4 justify-between items-center rounded-lg border-2 border-[#dbdbdb93]">
                <div class="flex w-full items-center justify-between gap-3 border-b-2 border-[#dbdbdb93]">
                    <p class=" font-medium  ">Full Name</p>
                    <div class="flex items-center">
                        <input type="text" class=" text-lg placeholder:text-right placeholder:pr-2 mt-2 "
                            placeholder="Cristina Martin">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path
                                    d="M8.6 5.07206L11.428 7.90072L4.828 14.5001H2V11.6714L8.6 5.07139V5.07206ZM9.54267 4.12939L10.9567 2.71472C11.0817 2.58974 11.2512 2.51953 11.428 2.51953C11.6048 2.51953 11.7743 2.58974 11.8993 2.71472L13.7853 4.60072C13.9103 4.72574 13.9805 4.89528 13.9805 5.07206C13.9805 5.24883 13.9103 5.41837 13.7853 5.54339L12.3707 6.95739L9.54267 4.12939Z"
                                    fill="#0B1107" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex w-full items-center justify-between gap-3 border-b-2 border-[#dbdbdb93]">
                    <p class=" font-medium  ">Email Address</p>
                    <div class="flex items-center">
                        <input type="text" class=" text-lg placeholder:text-right placeholder:pr-2 mt-2 "
                            placeholder="Cristinamartin@gmail.com">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path
                                    d="M8.6 5.07206L11.428 7.90072L4.828 14.5001H2V11.6714L8.6 5.07139V5.07206ZM9.54267 4.12939L10.9567 2.71472C11.0817 2.58974 11.2512 2.51953 11.428 2.51953C11.6048 2.51953 11.7743 2.58974 11.8993 2.71472L13.7853 4.60072C13.9103 4.72574 13.9805 4.89528 13.9805 5.07206C13.9805 5.24883 13.9103 5.41837 13.7853 5.54339L12.3707 6.95739L9.54267 4.12939Z"
                                    fill="#0B1107" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex w-full items-center justify-between gap-3 border-b-2 border-[#dbdbdb93]">
                    <p class=" font-medium  ">Password</p>
                    <div class="flex items-center">
                        <input type="password" class=" text-lg placeholder:text-right placeholder:pr-2 mt-2 "
                            placeholder="•••••••••••••••">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path
                                    d="M8.6 5.07206L11.428 7.90072L4.828 14.5001H2V11.6714L8.6 5.07139V5.07206ZM9.54267 4.12939L10.9567 2.71472C11.0817 2.58974 11.2512 2.51953 11.428 2.51953C11.6048 2.51953 11.7743 2.58974 11.8993 2.71472L13.7853 4.60072C13.9103 4.72574 13.9805 4.89528 13.9805 5.07206C13.9805 5.24883 13.9103 5.41837 13.7853 5.54339L12.3707 6.95739L9.54267 4.12939Z"
                                    fill="#0B1107" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex w-full items-center justify-between gap-3 border-b-2 border-[#dbdbdb93]">
                    <p class=" font-medium  ">Mobile Number</p>
                    <div class="flex items-center">
                        <input type="number" class=" text-lg placeholder:text-right placeholder:pr-2 mt-2 "
                            placeholder="+14043833639">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                <path
                                    d="M8.6 5.07206L11.428 7.90072L4.828 14.5001H2V11.6714L8.6 5.07139V5.07206ZM9.54267 4.12939L10.9567 2.71472C11.0817 2.58974 11.2512 2.51953 11.428 2.51953C11.6048 2.51953 11.7743 2.58974 11.8993 2.71472L13.7853 4.60072C13.9103 4.72574 13.9805 4.89528 13.9805 5.07206C13.9805 5.24883 13.9103 5.41837 13.7853 5.54339L12.3707 6.95739L9.54267 4.12939Z"
                                    fill="#0B1107" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between w-full  ">
            <div class="flex flex-col w-[60%] ">
                <p class=" font-semibold text-lg">Driver License</p>
                <p>This is preview your drive license</p>
            </div>
            <div class="flex space-y-2  w-full p-4 justify-between items-end  rounded-lg border-2 border-[#dbdbdb93]">
                <img class="w-4/5 " src="../../../../assets/img/png/exampleLicencie.png" alt="">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path
                            d="M8.6 5.07206L11.428 7.90072L4.828 14.5001H2V11.6714L8.6 5.07139V5.07206ZM9.54267 4.12939L10.9567 2.71472C11.0817 2.58974 11.2512 2.51953 11.428 2.51953C11.6048 2.51953 11.7743 2.58974 11.8993 2.71472L13.7853 4.60072C13.9103 4.72574 13.9805 4.89528 13.9805 5.07206C13.9805 5.24883 13.9103 5.41837 13.7853 5.54339L12.3707 6.95739L9.54267 4.12939Z"
                            fill="#0B1107" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="bg-white flex flex-col mb-7 gap-5 items-start shadow-steps p-5 w-full">
        <div class="flex gap-6">
            <img src="../../../../assets/svg/review.svg" alt="">
            <div class="flex flex-col ">
                <p class=" font-semibold text-xl">Profile</p>
                <p>All the reviews you give to the dealer will be displayed here</p>
            </div>
        </div>
        <hr class="border-[#cfcfcf] border-1 w-full ">
        <div class="flex justify-between w-full  ">
            <div class="flex gap-4 items-center">
                <button class="text-white rounded-lg py-2 px-4 bg-[#1F94F0]">Reviewed (12)</button>
                <button class=" border borer-[#C2C2C2] py-2 px-4 rounded-lg">Need Review (2)</button>
            </div>

        </div>
    </div>
</template>
<script>
import { ref, onMounted, watch } from "vue";
export default {
    props: {
    },
    setup(props) {
        return {
        };
    },
};
</script>