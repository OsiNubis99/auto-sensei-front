<template>
    <div v-show="statusModal.isActive"
        class="fixed inset-0 flex items-end md:items-center z-50 md:justify-center bg-base-black  bg-opacity-50">
        <div class="max-w-xl w-full overflow-hidden  bg-white rounded-lg shadow-xl animation-fade-modal">
            <div class=" p-2 md:p-4 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p v-if="steps.step1" class="invisible text-sm md:text-xl text-white">Verify phone number</p>
                <p v-if="steps.step2" class="invisible text-sm md:text-xl text-white">Contract Auction</p>
                <p v-if="steps.step3" class="invisible text-sm md:text-xl text-white">Download Contract</p>
                <svg @click="statusModal.closeModal(false)" xmlns="http://www.w3.org/2000/svg"
                    class=" w-6 h-8 md:w-8   md:h-8  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

            <template v-if="loading">
                <div class="w-full h-[30vh]">
                    <div class=" w-full h-full flex justify-center items-center">
                        <div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
                            <div class="absolute -left-[30px] z-10  h-[80px] w-[80px] ">
                                <div class="animate-bounce">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861"
                                        stroke="#fff" stroke-width="0" viewBox="0 0 16 16">
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

            <template v-else>
                <div class="p-5">
                    <div class="flex justify-center flex-col items-center">
                        <p v-if="steps.step1" class="text-xl font-medium text-center font-Nohemi">Verified phone number
                            now you can accept the auction</p>
                        <p v-if="steps.step2" class="text-xl font-medium text-center font-Nohemi">You must verify the
                            phone number to
                            accept
                            the
                            auction.</p>
                        <svg width="200px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 500 500">
                            <defs>
                                <clipPath id="freepik--clip-path--inject-2">
                                    <rect x="174.41" y="112.08" width="167.9" height="302.59" rx="6.75"
                                        style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                    </rect>
                                </clipPath>
                            </defs>
                            <g id="freepik--Ground--inject-2">
                                <ellipse cx="255.17" cy="416.02" rx="170.83" ry="15" style="fill:#c1f861"></ellipse>
                                <ellipse cx="255.17" cy="416.02" rx="170.83" ry="15" style="fill:#fff;opacity:0.5">
                                </ellipse>
                            </g>
                            <g id="freepik--Graphics--inject-2">
                                <line x1="80.97" y1="226.3" x2="80.97" y2="235.17"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></line>
                                <line x1="85.41" y1="230.74" x2="76.54" y2="230.74"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></line>
                                <line x1="383.64" y1="150.3" x2="383.64" y2="159.17"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></line>
                                <line x1="388.07" y1="154.74" x2="379.2" y2="154.74"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></line>
                                <line x1="257.64" y1="81.64" x2="257.64" y2="90.51"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></line>
                                <line x1="262.07" y1="86.07" x2="253.2" y2="86.07"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></line>
                                <line x1="111.64" y1="325.64" x2="111.64" y2="334.51"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></line>
                                <line x1="116.07" y1="330.07" x2="107.2" y2="330.07"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></line>
                                <path d="M379.67,118.33a7.34,7.34,0,1,1-7.34-7.33A7.34,7.34,0,0,1,379.67,118.33Z"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <circle cx="63" cy="287.67" r="7.33" transform="translate(-105.29 46.01) rotate(-22.5)"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </circle>
                                <path d="M413,193.33a1.67,1.67,0,1,1-3.33,0,1.67,1.67,0,0,1,3.33,0Z"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path d="M158.67,169.33a1.67,1.67,0,1,1-1.67-1.66A1.67,1.67,0,0,1,158.67,169.33Z"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                            </g>
                            <g id="freepik--Device--inject-2">
                                <rect x="179.74" y="112.08" width="167.9" height="302.59" rx="6.75"
                                    style="fill:#263238;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </rect>
                                <rect x="174.41" y="112.08" width="167.9" height="302.59" rx="6.75" style="fill:#fff">
                                </rect>
                                <g style="clip-path:url(#freepik--clip-path--inject-2)">
                                    <path d="M342.31,226.26,194.67,414.68h140.9a6.75,6.75,0,0,0,6.74-6.75Z"
                                        style="fill:#c1f861"></path>
                                    <path d="M342.31,226.26,194.67,414.68h140.9a6.75,6.75,0,0,0,6.74-6.75Z"
                                        style="fill:#fff;opacity:0.5"></path>
                                </g>
                                <rect x="174.41" y="112.08" width="167.9" height="302.59" rx="6.75"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></rect>
                                <path
                                    d="M270,130.16h-20.9a2.15,2.15,0,0,1-2.15-2.15h0a2.14,2.14,0,0,1,2.15-2.14H270a2.14,2.14,0,0,1,2.14,2.14h0A2.14,2.14,0,0,1,270,130.16Z"
                                    style="fill:#263238;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </path>
                                <path
                                    d="M331.7,387.63H185V130.41h34.77l3.91,3.24a7.6,7.6,0,0,0,4.86,1.76h61.35a7.61,7.61,0,0,0,5-1.9l3.54-3.1H331.7Z"
                                    style="fill:#263238;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </path>
                                <line x1="212.54" y1="332.17" x2="304.18" y2="332.17"
                                    style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round"></line>
                                <line x1="212.54" y1="344.23" x2="304.18" y2="344.23"
                                    style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round"></line>
                                <line x1="212.54" y1="356.29" x2="304.18" y2="356.29"
                                    style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round"></line>
                                <path d="M221,220.2a45.35,45.35,0,1,0,37.33-19.59,46.22,46.22,0,0,0-8.29.75"
                                    style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path d="M228.73,211.63a46.5,46.5,0,0,0-4.3,4.24"
                                    style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round"></path>
                                <circle cx="258.36" cy="245.95" r="38.48"
                                    transform="translate(-69.16 387.29) rotate(-66.93)" style="fill:#c1f861"></circle>
                                <polyline points="240.59 241.97 255.19 258.56 279.07 224.73"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px">
                                </polyline>
                                <path
                                    d="M294.93,133.51a7.61,7.61,0,0,1-5,1.9H228.56a7.6,7.6,0,0,1-4.86-1.76l-3.91-3.24H185v26.31H331.7V130.41H298.47Z"
                                    style="fill:#c1f861;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </path>
                                <path d="M263.05,395.56a3.34,3.34,0,1,0-3.33,3.33A3.34,3.34,0,0,0,263.05,395.56Z"
                                    style="fill:#263238;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </path>
                            </g>
                            <g id="freepik--character-1--inject-2">
                                <path
                                    d="M132.58,293.26l-13.08,117s-9.59,8.34-8.75,11.71,11.91-2,13.44-4.78a28.85,28.85,0,0,0,2.3-7.28l27.54-88,21.18,94.37s9,7.39,14,7.14,3.22-2.22.37-5.83-9.3-5.67-9.3-5.67l-3.18-121.63Z"
                                    style="fill:#263238;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </path>
                                <rect x="132.56" y="289.36" width="44" height="6"
                                    transform="translate(-14.64 8.22) rotate(-2.91)"
                                    style="fill:#263238;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </rect>
                                <path
                                    d="M159.7,292.05c.07,1.49-1.82,2.79-4.24,2.92S151,294,151,292.5s1.83-2.79,4.24-2.91S159.62,290.57,159.7,292.05Z"
                                    style="fill:#fff"></path>
                                <polygon
                                    points="152.17 230.57 135.65 235.41 137.7 290.63 176.45 289.67 171.55 232.59 152.17 230.57"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </polygon>
                                <polygon
                                    points="144.94 231.19 142.72 325.42 121.68 315.23 130.93 285.47 124.62 235.22 144.94 231.19"
                                    style="fill:#c1f861;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </polygon>
                                <polygon
                                    points="161.67 230.34 173.43 323.86 193.34 311.59 181.12 282.92 182.3 232.29 161.67 230.34"
                                    style="fill:#c1f861;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </polygon>
                                <polygon
                                    points="149.15 241.74 152.43 247.08 149.81 284.26 156.03 291.62 159.25 282.78 154.27 247.15 157.34 241.99 152.88 236.21 149.15 241.74"
                                    style="fill:#263238;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </polygon>
                                <polygon
                                    points="153.21 241.03 147.02 245.69 142.06 233.59 144.85 229.27 160 228.5 163.58 233.33 160.63 244.33 153.21 241.03"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </polygon>
                                <polygon
                                    points="146.11 224.62 147.5 232.31 153.21 241.03 158.44 230.75 158.11 224.26 146.11 224.62"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </polygon>
                                <polygon
                                    points="124.62 235.22 96.56 269.19 115.21 291.27 122.72 286.39 113.5 267.58 127.26 257.62 124.62 235.22"
                                    style="fill:#c1f861;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </polygon>
                                <polygon points="122.72 286.39 123.84 288.83 117.52 292.41 116.67 290.45 122.72 286.39"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </polygon>
                                <path
                                    d="M123.84,288.83l6.44,8.44-2.12,2.61-1.54-.67-3.12,2.66s-2.28-.64-2.57-1.37-3.38-2.59-3.45-3.83,0-4.26,0-4.26Z"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path
                                    d="M197.93,238.92a5.47,5.47,0,0,0,.24-3.11c-.46-1.19-1.48-5.31-1.28-6.67s2.26-3.34,2.44-5.1,0-3.37,0-4.32a1.21,1.21,0,0,1,2.26-.52c1,1.16,1.6,2.35,1.12,3.58a17.05,17.05,0,0,0-.46,4.2s1.6,2.21,2.48,3.65.8,5.21.21,6.72a9.41,9.41,0,0,1-2.28,3l.1,2.6Z"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path
                                    d="M200.85,224.9s-.7,2.06.53,2.53,6.26,1.17,6.31-.45.15-2.43-.66-2.39-4.58,0-4.58,0S200.7,224.5,200.85,224.9Z"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path
                                    d="M201.42,235s-.5,1.53.39,1.88,4.51.88,4.54-.33.1-1.81-.48-1.78-3.3,0-3.3,0S201.31,234.68,201.42,235Z"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path
                                    d="M200.75,231.73s-.58,1.78.45,2.19,5.22,1,5.26-.38.12-2.1-.56-2.07-3.82,0-3.82,0S200.62,231.39,200.75,231.73Z"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path
                                    d="M200.36,228.56s-.7,2.06.54,2.53,6.25,1.17,6.3-.45.15-2.43-.66-2.39-4.58,0-4.58,0S200.21,228.17,200.36,228.56Z"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <polygon points="197.36 240.97 198.14 237.83 203.56 241.06 202.65 244.47 197.36 240.97"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </polygon>
                                <path
                                    d="M182.3,232.29l10.38,22.09,5.1-14.21,5,4.76-5.12,26.34a4.24,4.24,0,0,1-7.6,1.66l-8.29-11.57Z"
                                    style="fill:#c1f861;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </path>
                                <path d="M141.28,215.64s-2.1-2.24-2.37-.6.58,4.47,1.9,5.48,2.48-.66,2.48-.66Z"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path d="M161.13,214.63s1.85-2.44,2.3-.84-.13,4.51-1.34,5.65-2.54-.41-2.54-.41Z"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path
                                    d="M142.12,217.94l-2-4.23a19.78,19.78,0,0,1-3.27-7.57c-1-4.64.65-8.5,2.75-9.69a5.78,5.78,0,0,1,3.93-.74s.4-2.72,7-5,13.78,1.83,13.67,3.27-1.87,2.08-1.87,2.08,5.14,1.9,3.28,4.33a11.8,11.8,0,0,1-4.33,3.47,34.28,34.28,0,0,1,.91,3.73c.26,1.61-1.19,8.53-1.19,8.53l-3.55-9.73-11.14.57s-.66,4.72-1.84,6.4a8.81,8.81,0,0,0-1.22,4.2S142.73,219.34,142.12,217.94Z"
                                    style="fill:#263238;stroke:#263238;stroke-linecap:round;stroke-linejoin:round">
                                </path>
                                <path
                                    d="M144.1,200.36a66.09,66.09,0,0,1-.63,8.68,6.53,6.53,0,0,1-2.32,4.08s1.42,6.59,3.22,10.1,5.54,6.39,9.31,6,6.78-4.67,7.14-8.29-1.41-17-1.41-17S147.63,206,144.1,200.36Z"
                                    style="fill:#fff;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path d="M145.1,213.89a4.3,4.3,0,0,1,4-.2"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path d="M144.94,210.89s.23-2,3.57-2.18"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path d="M153.83,208.27a3.82,3.82,0,0,1,4.4,1.11"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path d="M152.66,211.5s.53,4,.56,4.49,1.7.58,1.25,1.6-1.9,2.1-3.11,1.33"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path d="M154.54,222.27s-1.27,1.23-3.83.19"
                                    style="fill:none;stroke:#263238;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path
                                    d="M157.07,212.78c0,.74-.31,1.36-.77,1.38s-.86-.56-.9-1.29.31-1.35.77-1.38S157,212.05,157.07,212.78Z"
                                    style="fill:#263238"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="mx-auto w-full ">
                        <template v-if="steps.step1">
                            < <div>
                                <h3 class="mt-6 font-bold text-base-black text-center mb-5 ">
                                    Enter Verification
                                    Code</h3>
                                <p class=" text-sm font-normal text-[#666] text-center  ">A text message with a 6-digit
                                    code has
                                    been sent to
                                </p>
                                <p class="pt-4 font-Nohemi text-center lg:text-xl font-semibold">{{ form?.phone
                                    }}</p>
                    </div>
                    <div class="mt-8">
                        <div class="mt-6">
                            <div class="space-y-7 ">
                                <div>
                                    <label htmlFor="email" class="block text-sm font-medium text-gray-700">
                                        Code
                                    </label>
                                    <div class="mt-1">
                                        <input v-model="form.code"
                                            :class="invalid ? 'border-error' : 'border-[#E0E0E0]'" type="text"
                                            placeholder="Enter the 6-digit code"
                                            class="appearance-none block w-full px-3 py-2 border border-[#E0E0E0] rounded-md shadow-sm placeholder-[#858585] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <button @click="verifyPhone" id="continueAccount"
                                        class="w-full btn flex justify-center bg-primary py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-base-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Continue
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5 flex justify-center gap-2 md:flex-col">
                            <p class=" text-xs font-normal text-[#666]  ">
                                Didn’t receive the code? </p>
                            <div class="flex justify-center items-center gap-3">
                                <p @click="resendCode('resend')"
                                    class="font-medium cursor-pointer text-xs  underline text-base-black hover:text-indigo-500">
                                    Resend Code
                                </p>
                                <p class="font-medium cursor-pointer text-xs  underline text-base-black hover:text-indigo-500"
                                    @click="backCode">
                                    Change Phone
                                </p>
                            </div>
                        </div>
                    </div>
            </template>

        </div>

    </div>

</template>
</div>
</div>
</template>
<script>
import { onMounted, ref, computed } from 'vue'
import { toast } from "vue3-toastify";
import { useAuthStore } from "@/stores/auth";
import { useRoute, useRouter } from 'vue-router'
import { ModalVerifyPhone } from '@/stores/modalVerifyPhone';
import { useUserStore } from "@/stores/user";
export default {
    setup(props) {
        const steps = ref({
            step1: true,
            step2: false,
        });
        const statusModal = ModalVerifyPhone()
        const loading = ref(false)
        const router = useRouter()
        const auth = useAuthStore()
        const storeUser = useUserStore()
        const form = ref({ code: null, phone: null })
        const invalid = ref(false)
        const backCode = () => {
            statusModal.closeModal(false)
            router.push('/account-seller')
            form.value.code = null;
            form.value.phone = null;

        }

        const resendCode = async (string) => {
            if (form.value.phone) {
                loading.value = true
                let data = {
                    phone: form.value.phone
                }
                try {
                    let resCode = await storeUser.getValidation(data)
                    if (resCode) {
                        if (string == 'resend') {
                            toast('Code succesfully resent', {
                                type: "success",
                            });
                        }

                        loading.value = false
                    }
                } catch (error) {

                    toast(error?.response?.data?.message || 'error', {
                        type: "error",
                    });
                }
            }

        }
        const verifyPhone = async () => {
            if (!form.value.code) {
                toast('Required field', {
                    type: "error",
                });
                invalid.value = true
                return
            } else {
                invalid.value = false
            }
            let update = {
                phone: form.value.phone,
                validationCode: form.value.code
            }
            loading.value = true
            try {
                let resUpdate = await storeUser.updateUser(update)
                if (resUpdate) {
                    steps.value.step1 = false
                    steps.value.step2 = true
                    loading.value = false
                }
            } catch (error) {
                toast(error?.response?.data?.message || 'error', {
                    type: "error",
                });
                loading.value = false
            }
        }
        onMounted(() => {
            if (auth.userData.seller.phone) {
                form.value.phone = auth.userData.seller.phone
                resendCode()

            }

        })

        return {
            steps,
            loading,
            statusModal,
            form,
            backCode,
            resendCode,
            verifyPhone,
            invalid
        };
    },
};
</script>