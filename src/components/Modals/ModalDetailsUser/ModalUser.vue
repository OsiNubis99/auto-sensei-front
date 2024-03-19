<template>
    <div v-show="statusModal?.isActive"
        class="fixed inset-0 flex  items-end md:items-center z-50 justify-center bg-base-black overflow-hidden bg-opacity-50">

        <div class="max-w-6xl  overflow-hidden   rounded-lg shadow-xl animation-fade-modal bg-[#F9F9F9]">
            <div class="md:p-4 p-2 rounded-t-lg  bg-[#22282F] flex items-center justify-between">
                <p v-if="statusModal?.datauser?.type == 1" class="text-sm md:text-xl text-white">Seller Details</p>
                <p v-else class="text-sm md:text-xl text-white">Dealer Details</p>
                <svg @click="cancel" xmlns="http://www.w3.org/2000/svg" class="md:w-8 md:h-8  w-6 cursor-pointer"
                    fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div v-if="statusModal?.datauser?.type == 1">
                <div class="shadow-primary-custom"
                    :class="statusModal?.datauser?.status == 'active' ? 'paralax-success' : 'paralax-error '"></div>
                <div class=" relative w-full h-[100px] md:h-[250px] flex justify-center items-center">
                    <div
                        class="bg-white w-[100px] h-[100px] md:w-[200px] flex justify-center items-center overflow-hidden md:h-[200px] rounded-full border-[4px] border-primary animate-fade-up  animate-ease-in-out animate-delay-200 ">
                        <img v-if="statusModal?.datauser?.seller?.picture"
                            class=" w-full h-full  object-contain  shadow-md"
                            :src="bucket + statusModal?.datauser?.seller.picture" alt="">
                        <img v-else class=" w-full h-full" src="@/assets/svg/profile.svg" alt="">
                    </div>
                </div>
                <div class="p-5 flex flex-col gap-4">
                    <div
                        class="flex gap-1 p-2 bg-white shadow-lg rounded-lg items-center animate-fade-up  animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg viewBox="0 0 24 24" width="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <circle cx="12" cy="6" r="4" fill="#1C274C"></circle>
                                    <path
                                        d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                                        fill="#1C274C"></path>
                                </g>
                            </svg>
                            <p class=" font-medium text-xs  md:text-base ">Full Name:</p>
                        </div>
                        <div v-if="statusModal?.datauser?.seller?.firstName || statusModal?.datauser?.seller?.lastName"
                            class="flex gap-1 items-center">
                            <p class="text-xs md:text-base text-[#797979] ">{{ statusModal?.datauser?.seller?.firstName }}
                            </p>
                            <p class="text-xs md:text-base text-[#797979] ">{{ statusModal?.datauser?.seller?.lastName }}
                            </p>
                        </div>
                        <p v-else class="text-xs md:text-base text-[#797979] whitespace-pre ">The user did not provide information.</p>
                    </div>

                    <div
                        class="flex gap-1 p-2 bg-white shadow-lg rounded-lg items-center animate-fade-up  animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg viewBox="0 0 24 24" width="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2V3C15 3.55228 14.5523 4 14 4H10C9.44772 4 9 3.55228 9 3V2Z"
                                        fill="#000000"></path>
                                    <rect x="5.75" y="1.75" width="12.5" height="20.5" rx="1.75" stroke="#000000"
                                        stroke-width="1.5"></rect>
                                    <path d="M9 19.5H15" stroke="#000000" stroke-width="1.5" stroke-linecap="round">
                                    </path>
                                </g>
                            </svg>
                            <p class=" font-medium text-xs  md:text-base ">Phone Number:</p>
                        </div>

                        <p v-if="statusModal?.datauser?.seller?.phone" class="text-xs md:text-base text-[#797979] ">
                            {{ statusModal?.datauser?.seller?.phone }}</p>
                        <p v-else class="text-xs md:text-base text-[#797979] whitespace-pre ">The user did not provide information.</p>
                    </div>
                    <div :class="statusModal?.datauser?.seller?.driverLicense ? 'flex-col items-start' : ' items-center'"
                        class="flex gap-1 p-2  bg-white shadow-lg rounded-lg  animate-fade-up  animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg fill="#000000" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" xml:space="preserve">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <rect x="140" y="91" width="75.1" height="15.1"></rect>
                                        <rect x="140" y="116.9" width="75.1" height="15.1"></rect>
                                        <rect x="140" y="142.8" width="75.1" height="15.1"></rect>
                                        <path
                                            d="M219.9,62.1H35.7c-12.9,0-23.4,10.5-23.4,23.4v84.9c0,12.9,10.5,23.4,23.4,23.4h184.1c12.9,0,23.4-10.5,23.4-23.4V85.1 C243.3,72.6,232.8,62.1,219.9,62.1z M220.2,185.4H35.7c-8.7,0-15.4-7-15.4-15.4V85.1c0-8.7,7-15.4,15.4-15.4h184.1 c8.7,0,15.4,7,15.4,15.4v84.9h0.3C235.6,178.8,228.6,185.4,220.2,185.4z">
                                        </path>
                                        <circle cx="81.2" cy="109.9" r="18.9"></circle>
                                        <path
                                            d="M102.8,132.6H81.2H59.5c-12.2,0-20.3,9.1-21.3,21.3v3.9h86.7v-3.9C123.1,141.7,115,132.6,102.8,132.6z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            <p class="font-medium text-xs  md:text-base ">Driver License:</p>
                        </div>

                        <div v-if="statusModal?.datauser?.seller?.driverLicense" class="w-full h-[150px]">
                            <img class="w-full h-full shadow-lg rounded-lg object-contain md:object-cover "
                                :src="bucket + statusModal?.datauser?.seller?.driverLicense" alt="">
                        </div>
                        <p v-else class="text-xs md:text-base text-[#797979] whitespace-pre ">The user did not provide information.</p>
                    </div>
                    <div
                        class="flex gap-1 p-2 bg-white shadow-lg rounded-lg items-center animate-fade-up  animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg width="20" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"
                                fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">

                                    <g>
                                        <path class="st0"
                                            d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009 c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067 c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745 c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51 c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05 c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104 c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929 c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443 c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925 l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244 c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16 c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572 c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            <p class="font-medium text-xs  md:text-base ">Email:</p>
                        </div>

                        <p class="text-xs md:text-base text-[#797979] " v-if="statusModal?.datauser?.email">{{
        statusModal?.datauser?.email }}</p>
                        <p v-else class="text-xs md:text-base text-[#797979] whitespace-pre ">The user did not provide information.</p>
                    </div>
                    <div
                        class="flex gap-1 p-2 bg-white shadow-lg rounded-lg items-center animate-fade-up  animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg viewBox="0 0 24 24" width="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path opacity="0.4"
                                        d="M2.44922 14.9702C3.51922 18.4102 6.39923 21.0602 9.97923 21.7902"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path
                                        d="M2.05078 10.98C2.56078 5.93 6.82078 2 12.0008 2C17.1808 2 21.4408 5.94 21.9508 10.98"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M14.0098 21.8C17.5798 21.07 20.4498 18.45 21.5398 15.02" stroke="#292D32"
                                        stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </g>
                            </svg>
                            <p class="  text-xs md:text-base ">Status:</p>
                        </div>
                        <div :class="statusModal?.datauser?.status == 'active' ? 'bg-[#30ff527c]' : 'bg-[#ffbbbb]'"
                            class=" flex items-center gap-2 px-2 py-1 shadow-xl w-fit rounded-full">
                            <p class="capitalize text-xs "
                                :class="statusModal?.datauser?.status == 'active' ? 'text-[#008000]' : 'text-[#ff0000]'">
                                {{ statusModal?.datauser?.status }}
                            </p>
                            <svg v-if="statusModal?.datauser?.status == 'active'" viewBox="0 0 512 512" width="15"
                                version="1.1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>success-filled</title>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="add-copy-2" fill="#4ca800" transform="translate(42.666667, 42.666667)">
                                            <path
                                                d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51296 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,3.55271368e-14 213.333333,3.55271368e-14 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z"
                                                id="Shape"> </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg v-else viewBox="0 0 16 16" width="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 "
                                        stroke="none" fill-rule="evenodd" fill="#ff2525"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="statusModal?.datauser?.type == 2" class=" flex justify-center relative items-center flex-col">
                <div class="shadow-primary-custom"
                    :class="statusModal?.datauser?.status == 'active' ? 'paralax-success' : 'paralax-error '"></div>
                <div class=" relative w-full h-[100px] md:h-[250px] flex justify-center items-center">
                    <div
                        class="bg-white w-[100px] h-[100px] md:w-[200px] flex justify-center items-center overflow-hidden md:h-[200px] rounded-full border-[4px] border-primary animate-fade-up  animate-ease-in-out animate-delay-200 ">
                        <img v-if="statusModal?.datauser?.dealer?.picture"
                            class=" w-full h-full  object-contain  shadow-md"
                            :src="bucket + statusModal?.datauser?.dealer.picture" alt="">
                        <img v-else class=" w-full h-full" src="@/assets/svg/profile.svg" alt="">
                    </div>
                </div>
                <div class="p-5 flex flex-col gap-4">
                    <div
                        class="flex gap-1 p-2 bg-white shadow-lg rounded-lg items-center animate-fade-up  animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg viewBox="0 0 24 24" width="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <circle cx="12" cy="6" r="4" fill="#1C274C"></circle>
                                    <path
                                        d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                                        fill="#1C274C"></path>
                                </g>
                            </svg>
                            <p class=" font-medium text-xs  md:text-base ">Full Name:</p>
                        </div>
                        <div v-if="statusModal?.datauser?.dealer?.firstName || statusModal?.datauser?.dealer?.lastName"
                            class="flex gap-1 items-center">
                            <p class="text-xs md:text-base text-[#797979] ">{{ statusModal?.datauser?.dealer?.firstName }}
                            </p>
                            <p class="text-xs md:text-base text-[#797979] ">{{ statusModal?.datauser?.dealer?.lastName }}
                            </p>
                        </div>
                        <p v-else class="text-xs md:text-base text-[#797979] whitespace-pre ">The user did not provide information.</p>
                    </div>
                    <div class=" flex gap-1 p-2 bg-white shadow-lg rounded-lg items-center animate-fade-up
                            animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg viewBox="0 0 1024 1024" width="20" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill="#000000"
                                        d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z">
                                    </path>
                                    <path fill="#000000"
                                        d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z">
                                    </path>
                                </g>
                            </svg>
                            <p class="font-medium text-xs  md:text-base">Address:</p>
                        </div>


                        <p v-if="statusModal?.datauser?.dealer?.address" class=" text-xs md:text-base text-[#797979] ">
                            {{ statusModal?.datauser?.dealer?.address }}
                        </p>
                        <p v-else class="text-xs md:text-base text-[#797979] whitespace-pre ">The user did not provide information.</p>
                    </div>
                    <div class=" flex gap-1 p-2 bg-white shadow-lg rounded-lg items-center animate-fade-up
                            animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg viewBox="0 0 24 24" width="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M6 7H7M6 10H7M11 10H12M11 13H12M6 13H7M11 7H12M7 21V18C7 16.8954 7.89543 16 9 16C10.1046 16 11 16.8954 11 18V21H7ZM7 21H3V4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H13.4C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V9M19.7 13.5C19.7 14.3284 19.0284 15 18.2 15C17.3716 15 16.7 14.3284 16.7 13.5C16.7 12.6716 17.3716 12 18.2 12C19.0284 12 19.7 12.6716 19.7 13.5ZM21.5 21V20.5C21.5 19.1193 20.3807 18 19 18H17.5C16.1193 18 15 19.1193 15 20.5V21H21.5Z"
                                        stroke="#000000" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <p class="font-medium text-xs  md:text-base ">Dealer Name:</p>
                        </div>
                        <p v-if="statusModal?.datauser?.dealer?.name" class="text-xs md:text-base text-[#797979] ">{{
        statusModal?.datauser?.dealer?.name }}</p>
                        <p v-else class="text-xs md:text-base text-[#797979] whitespace-pre ">The user did not provide information.</p>
                    </div>
                    <div
                        class="flex gap-1 p-2 bg-white shadow-lg rounded-lg items-center animate-fade-up  animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg viewBox="0 0 24 24" width="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2V3C15 3.55228 14.5523 4 14 4H10C9.44772 4 9 3.55228 9 3V2Z"
                                        fill="#000000"></path>
                                    <rect x="5.75" y="1.75" width="12.5" height="20.5" rx="1.75" stroke="#000000"
                                        stroke-width="1.5"></rect>
                                    <path d="M9 19.5H15" stroke="#000000" stroke-width="1.5" stroke-linecap="round">
                                    </path>
                                </g>
                            </svg>
                            <p class=" font-medium text-xs  md:text-base ">Phone Number:</p>
                        </div>

                        <p v-if="statusModal?.datauser?.dealer?.phone" class="text-xs md:text-base text-[#797979] ">{{
        statusModal?.datauser?.dealer?.phone }}</p>
                        <p v-else class="text-xs md:text-base text-[#797979] whitespace-pre ">The user did not provide information.</p>
                    </div>
                    <div
                        class="flex gap-1 p-2 bg-white shadow-lg rounded-lg items-center animate-fade-up  animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg width="20" fill="#000000" viewBox="0 0 16 16" id="register-16px"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path id="Path_184" data-name="Path 184"
                                        d="M57.5,41a.5.5,0,0,0-.5.5V43H47V31h2v.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V31h2v.5a.5.5,0,0,0,1,0v-1a.5.5,0,0,0-.5-.5H55v-.5A1.5,1.5,0,0,0,53.5,28h-3A1.5,1.5,0,0,0,49,29.5V30H46.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-2A.5.5,0,0,0,57.5,41ZM50,29.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V31H50Zm11.854,4.646-2-2a.5.5,0,0,0-.708,0l-6,6A.5.5,0,0,0,53,38.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.354-.146l6-6A.5.5,0,0,0,61.854,34.146ZM54,40V38.707l5.5-5.5L60.793,34.5l-5.5,5.5Zm-2,.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1,0-1h2A.5.5,0,0,1,52,40.5Zm0-3a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1,0-1h2A.5.5,0,0,1,52,37.5ZM54.5,35h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z"
                                        transform="translate(-46 -28)"></path>
                                </g>
                            </svg>
                            <p class="font-medium text-xs  md:text-base ">OMVIC:</p>
                        </div>
                        <p class="text-xs md:text-base text-[#797979] " v-if="statusModal?.datauser?.dealer?.omvic">{{
        statusModal?.datauser?.dealer?.omvic }}</p>
                        <p v-else class="text-xs md:text-base text-[#797979] whitespace-pre ">The user did not provide information.</p>
                    </div>
                    <div
                        class="flex gap-1 p-2 bg-white shadow-lg rounded-lg items-center animate-fade-up  animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg width="20" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"
                                fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">

                                    <g>
                                        <path class="st0"
                                            d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009 c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067 c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745 c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51 c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05 c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104 c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929 c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443 c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925 l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244 c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16 c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572 c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            <p class="font-medium text-xs  md:text-base ">Email:</p>
                        </div>

                        <p class="text-xs md:text-base text-[#797979] " v-if="statusModal?.datauser?.email">{{
        statusModal?.datauser?.email }}</p>
                        <p v-else class="text-xs md:text-base text-[#797979] whitespace-pre ">The user did not provide information.</p>
                    </div>
                    <div
                        class="flex gap-1 p-2 bg-white shadow-lg rounded-lg items-center animate-fade-up  animate-ease-in-out animate-delay-200">
                        <div class="flex gap-2 items-center">
                            <svg viewBox="0 0 24 24" width="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path opacity="0.4"
                                        d="M2.44922 14.9702C3.51922 18.4102 6.39923 21.0602 9.97923 21.7902"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path
                                        d="M2.05078 10.98C2.56078 5.93 6.82078 2 12.0008 2C17.1808 2 21.4408 5.94 21.9508 10.98"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M14.0098 21.8C17.5798 21.07 20.4498 18.45 21.5398 15.02" stroke="#292D32"
                                        stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </g>
                            </svg>
                            <p class="  text-xs md:text-base ">Status:</p>
                        </div>
                        <div :class="statusModal?.datauser?.status == 'active' ? 'bg-[#30ff527c]' : 'bg-[#ffbbbb]'"
                            class=" flex items-center gap-2 px-2 py-1 shadow-xl w-fit rounded-full">
                            <p class="capitalize text-xs "
                                :class="statusModal?.datauser?.status == 'active' ? 'text-[#008000]' : 'text-[#ff0000]'">
                                {{ statusModal?.datauser?.status }}
                            </p>
                            <svg v-if="statusModal?.datauser?.status == 'active'" viewBox="0 0 512 512" width="15"
                                version="1.1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>success-filled</title>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="add-copy-2" fill="#4ca800" transform="translate(42.666667, 42.666667)">
                                            <path
                                                d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51296 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,3.55271368e-14 213.333333,3.55271368e-14 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z"
                                                id="Shape"> </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg v-else viewBox="0 0 16 16" width="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 "
                                        stroke="none" fill-rule="evenodd" fill="#ff2525"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { ModalUserDetails } from '@/stores/ModalUserDetails';
import moment from "moment";
export default {
    props: {
        cancelAution: {
            type: Function,
        },
    },
    setup(props) {
        const statusModal = ModalUserDetails()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const cancel = () => {
            console.log('hola')
            statusModal?.closeModal(false)
        }

        return {
            statusModal,
            cancel,
            bucket,
            moment,
        };
    },
};
</script>