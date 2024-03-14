<template>
    <div v-show="statusModal.isActive"
        class="fixed z-[100] inset-0 flex items-end md:items-center justify-center bg-base-black  bg-opacity-50">
        <div class=" w-full md:w-auto md:max-w-xl overflow-auto  bg-white rounded-lg shadow-xl  animation-fade-modal">
            <div class="md:p-4 p-2 rounded-t-lg  bg-base-black flex items-center justify-between">
                <p v-if="statusModal.from == 'autoBid'" class=" text-sm md:text-xl text-white">Auto Bid</p>
                <p v-if="statusModal.from == 'bidNow'" class=" text-sm md:text-xl text-white">Bid Now</p>
                <svg @click="closet" xmlns="http://www.w3.org/2000/svg" class=" w-6 h-8 md:w-8   md:h-8  cursor-pointer"
                    fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div v-if="steps.step1 || steps.step2" class="md:p-4 p-2 flex gap-3 pb-2 flex-col  ">
                <div class="flex justify-start items-center gap-2">
                    <p class="text-xs md:text-base "
                        :class="steps.step1 ? 'text-base-black font-semibold' : 'text-[#858585]'">Select Amount</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M8.78145 8.00048L5.48145 4.70048L6.42411 3.75781L10.6668 8.00048L6.42411 12.2431L5.48145 11.3005L8.78145 8.00048Z"
                            fill="#858585" />
                    </svg>
                    <p class="text-xs md:text-base "
                        :class="steps.step2 ? 'text-base-black font-semibold' : 'text-[#858585]'">Payment</p>
                </div>
            </div>
            <template v-if="steps.step1">
                <div class="flex gap-3 items-start border-b border-[#E0E0E0] p-2 md:p-5">
                    <div class="w-[80px] md:w-[120px]   md:h-[90px]">
                        <img v-if="statusModal.data?.photos" class="w-full h-full shadow-lg rounded-lg object-cover"
                            :src="bucket + statusModal.data?.photos[0].url" alt="">
                        <img class=" shadow-xl w-full h-full rounded-lg object-cover " v-else
                            src="@/assets/img/jpg/image.jpg" alt="">
                    </div>
                    <div class="md:h-full flex justify-between flex-col">
                        <p class=" font-semibold text-sm :text-base ">{{ statusModal.data?.vehicleDetails?.year }} {{
        statusModal.data?.vehicleDetails?.make }} {{
        statusModal.data?.vehicleDetails?.model }}</p>
                        <div>
                            <p class="capitalize text-sm md:text-base mt-4">Current Bid</p>
                            <p v-if="statusModal.data?.bids[0]?.amount"
                                class=" font-medium text-lg md:text-2xl text-base-black  ">
                                ${{ statusModal.data.bids[0].amount }}
                            </p>
                            <p v-else-if="statusModal.data?.vehicleDetails?.basePrice"
                                class=" font-medium text-2xl text-base-black  ">
                                ${{ statusModal.data?.vehicleDetails?.basePrice }}</p>
                            <p v-else class="font-medium text-2xl text-base-black ">0$</p>
                        </div>
                    </div>
                </div>
                <template v-if="statusModal.from == 'autoBid'">
                    <div class="md:p-5 p-2">
                        <div class="flex gap-1 flex-col justify-start">
                            <p class="font-semibold text-sm md:text-base">Maximum Bid Amount</p>
                            <p class="text-xs md:text-base">Please enter a price higher than the current bid</p>
                        </div>
                        <CurrencyInput :key="counterKey" v-model="formData.placeyourbid"
                            :error='invalid?.placeyourbid ? true : false' :options="{ currency: 'USD' }"
                            :placeHolder="`$ Min ${statusModal?.data?.vehicleDetails?.basePrice}`" />
                        <p class="text-[#858585] text-xs md:text-base mt-2"> {{ invalid?.placeyourbid }} </p>
                        <div class="form-group md:mt-4">
                            <input type="checkbox" v-model="formData.notify" id="html">
                            <label class="text-xs md:text-base" for="html">Notify me when the current bid approaches my
                                maximum bid amount</label>
                        </div>
                    </div>
                </template>

                <template v-if="statusModal.from == 'bidNow'">
                    <div class="mt-2 p-5 flex items-center gap-4 border-[#E0E0E0] border-t-[1px] ">
                        <CurrencyInput :key="counterKey" :error='invalid' v-model="formData.placeyourbid"
                            :options="{ currency: 'USD' }" :label="'Place your bid'" :placeHolder="'$ Min 100,100'" />
                        <button @click="addAmount"
                            class="btn mt-8 bg-blue-dark font-medium rounded-md  text-primary">+$100</button>
                    </div>
                </template>


                <div class="md:p-5 p-2 pt-0 ">
                    <button @click="next(1)" :disabled="sizeObjet == 0 ? false : true"
                        :class="sizeObjet == 0 ? 'bg-primary' : 'bg-base-gray text-white'"
                        class="w-full  text-sm h-9 md:text-base md:h-[41px] rounded">
                        Next
                    </button>
                </div>

            </template>

            <template v-if="steps.step2">
                <div class="md:p-5 p-2 pt-0">
                    <p class="text-xs  md:text-base">
                        <span v-if="statusModal.from == 'autoBid'">You’ll be charged a $250 transaction fee if your bid
                            is
                            successfully won.</span>
                        <span v-if="statusModal.from == 'bidNow'">You'll be charged a $250 + Harmonized Sales Tax (HST)
                            transaction fee if your bid is
                            successful won.</span>
                    </p>
                    <template v-if="authStore.userData?.paymentMethods?.length > 0 && !showPayment">
                        <div class="custom-payment">
                            <label class=" font-semibold text-sm md:text-base text-[#0B1107]" for="">Credit Card</label>
                            <div class="navbar-right w-full relative">
                                <button @click="openDropdown = !openDropdown"
                                    :class="openDropdown ? 'border border-[#0A0A0A] transition-all ease-linear duration-300 ' : 'transition-all ease-linear duration-300'"
                                    class="flex w-full gap-2 rounded-md md:h-[42px] shadow-md px-2 bg-white items-center">
                                    <p v-if="!itemCard" class="p-2 text-xs md:text-[16px] pb-1">Choose credit card</p>
                                    <p v-else class="p-2 text-xs md:text-[16px] pb-1">{{ itemCard?.billingDetails?.name
                                        }} - **** **** **** {{ itemCard?.card?.last4 }}</p>
                                </button>
                                <div v-if="openDropdown"
                                    class="absolute h-[128px] md:h-[150px] flex flex-col gap-[6px] custom-scroll-payment border border-[#E0E0E0] overflow-auto  z-10 top-auto left-0 w-full py-2 mt-2  rounded-lg border-gray-900 bg-white shadow-xl">
                                    <div v-for="(payments, index) in authStore.userData.paymentMethods"
                                        class="flex flex-col   "
                                        :class="index !== authStore.userData.paymentMethods.length - 1 ? 'hover:bg-primary gap-6  cursor-pointer transition-all ease-linear duration-300 ' : ''">
                                        <div :class="index !== authStore.userData.paymentMethods.length - 1 ? ' py-1 ' : ''"
                                            @click="getCard(payments)"
                                            class="flex px-2 md:px-6 justify-between w-full  ">
                                            <p class="text-base-black text-start text-xs md:text-base  w-full">
                                                {{ payments?.billingDetails?.name }}</p>
                                            <p class="text-base-black text-end  text-xs md:text-base w-full">**** ****
                                                ****
                                                {{ payments?.card?.last4 }}</p>
                                        </div>
                                        <p @click="showOptionNewPaymtent('add-card')"
                                            v-if="index === authStore.userData.paymentMethods.length - 1"
                                            class="text-[#1F94F0] px-2 md:px-6 text-xs md:text-base pt-2 mt-0 cursor-pointer text-start font-semibold ">
                                            Add another Credit Card</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" v-model="formData.termsConditions" id="css">
                            <label for="css" class=" text-xs md:text-base">Please agree to our <a href="#"
                                    class="font-semibold underline">Terms &
                                    Conditions</a> to
                                proceed.</label>
                        </div>
                    </template>

                    <template v-if="showPayment || authStore.userData?.paymentMethods?.length === 0">
                        <div class="flex justify-center items-center">
                            <img class=" w-20 h-20 md:w-40 md:h-40" src="@/assets/svg/credit-card-new.svg" alt="">
                        </div>


                        <div class="flex flex-col items-center gap-2">
                            <p class=" text-xs md:text-base">You do not have payment methods you must add one to bid, In
                                the profile section you can add a payment method</p>
                            <RouterLink to="/account-dealer" class="btn bg-primary text-base-black ">Go to Profile
                            </RouterLink>
                        </div>
                      <!--   <div class="flex md:pt-4 flex-col gap-3">
                            <div class="flex flex-col gap-3">
                                <div class="flex flex-col gap-2">
                                    <label class=" text-sm md:text-base " for="">Card Number</label>
                                    <input class="p-2 w-full rounded-lg border capitalize "
                                        placeholder="Input card number" v-model="formData.cardNumber"
                                        @keydown="formatCardNumber" @input="filterinput" type="text" inputmode="numeric"
                                        pattern="[0-9\s]{13,19}" maxlength="16">
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label class=" text-sm md:text-base " for="">Name on Card</label>
                                    <input v-model="formData.nameOnCard" @keypress="isLetter($event)"
                                        class="p-2 w-full rounded-lg border capitalize" placeholder="Input name"
                                        type="text">
                                </div>
                            </div>
                            <div class="flex justify-between items-center gap-3">
                                <div class=" flex flex-col gap-2">
                                    <label class=" text-sm md:text-base " for="">Expiry Date</label>
                                    <input v-model="formData.expiryDate" class="p-2 w-full rounded-lg border capitalize"
                                        placeholder="Input expired date" @keydown="formatExpiryDate" type="number">
                                </div>

                                <div class=" flex flex-col gap-2">
                                    <label class=" text-sm md:text-base " for="">CVV/CVC</label>
                                    <input v-model="formData.cvv" class="p-2 w-full rounded-lg border capitalize"
                                        placeholder="Input cvv" pattern="[0-9\s]{13,19}" maxlength="4" type="password">
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="form-group ">
                                <input type="checkbox" v-model="formData.saveCard" id="html">
                                <label for="html" class="text-xs md:text-base ">Save Credit Card Info</label>
                            </div>
                            <div class="form-group ">
                                <input type="checkbox" v-model="formData.termsConditions" id="css">
                                <label class="text-xs md:text-base " for="css">Please agree to our <a href="#"
                                        class="font-semibold underline">Terms &
                                        Conditions</a> to
                                    proceed.</label>
                            </div>
                        </div> -->
                    </template>

                </div>
                <div class="p-5 flex gap-4 ">
                    <button v-if="!showPayment" @click="back(1)"
                        class="w-2/5 md:h-[41px] text-xs h-9 md:text-base items-center  border rounded-md flex justify-center gap-3 border-[#C2C2C2] ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path
                                d="M5.7185 7.83312H13.8332V9.16645H5.7185L9.2945 12.7425L8.35184 13.6851L3.1665 8.49979L8.35184 3.31445L9.2945 4.25712L5.7185 7.83312Z"
                                fill="#0B1107" />
                        </svg>
                        <p>Back</p>
                    </button>
                    <button v-if="showPayment && authStore.userData.paymentMethods.length > 0"
                        @click="showOptionNewPaymtent('select-card')"
                        class="w-full text-xs h-9 md:text-base md:h-[41px] items-center  border rounded-md flex justify-center gap-3 border-[#C2C2C2] ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path
                                d="M5.7185 7.83312H13.8332V9.16645H5.7185L9.2945 12.7425L8.35184 13.6851L3.1665 8.49979L8.35184 3.31445L9.2945 4.25712L5.7185 7.83312Z"
                                fill="#0B1107" />
                        </svg>
                        <p>Select card</p>
                    </button>
                    <button @click="next(2)" :disabled="sizeObjet == 0 ? false : true"
                        :class="sizeObjet == 0 ? 'bg-primary' : 'bg-base-gray text-white'"
                        class="w-full text-xs h-9 md:text-base md:h-[41px]  rounded">


                        <span v-if="statusModal.from == 'bidNow'">Bid Now</span>
                        <span v-if="statusModal.from == 'autoBid'">Complete Auto Bid</span>
                    </button>
                </div>
            </template>

            <template v-if="steps.step3">
                <div class="flex gap-3 items-center justify-center flex-col p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="89" height="108" viewBox="0 0 89 108" fill="none">
                        <g clip-path="url(#clip0_8_16708)">
                            <path
                                d="M88.2951 37.1809C88.2875 54.7651 77.6828 73.1181 62.8119 83.7228C58.1766 91.6896 53.5488 99.6489 48.9209 107.616C45.3936 103.757 41.8586 99.8901 38.3312 96.0386C37.276 94.8854 36.2284 93.7397 35.1732 92.5865C32.9422 92.4283 30.8091 92.0288 28.7967 91.4108C27.5305 91.0339 26.3019 90.5666 25.1337 90.0013C24.0785 89.4963 23.0609 88.931 22.0886 88.2979C21.9454 88.1999 21.7947 88.1095 21.6515 88.019C19.82 86.7603 18.1542 85.268 16.692 83.5495C12.2225 78.3262 9.59957 71.0604 9.58449 62.3173C9.56188 39.6455 27.1536 15.6246 48.9059 8.66779C56.0511 6.38403 62.7667 6.22575 68.5402 7.86131C70.2587 8.34369 71.9018 8.98435 73.4393 9.79082C82.5065 14.4186 88.3102 24.1717 88.3026 37.1884L88.2951 37.1809Z"
                                fill="#508817" />
                            <path
                                d="M88.2951 37.1809C88.2875 54.7651 77.6828 73.1256 62.8119 83.7229C58.1766 91.6897 53.5488 99.6564 48.9285 107.623H48.9209C46.8708 105.37 44.8207 103.131 42.7631 100.885C42.2656 100.342 41.7757 99.8072 41.2783 99.2645C40.7281 98.6615 40.1703 98.0586 39.6201 97.4556C39.1905 96.9883 38.7609 96.5134 38.3312 96.0461C37.276 94.8929 36.2284 93.7398 35.1732 92.5941C34.0351 92.5187 32.9195 92.368 31.8417 92.1645C31.7814 92.157 31.7211 92.1494 31.6608 92.1343C30.9448 91.9987 30.2363 91.8329 29.5504 91.6369C29.2942 91.5691 29.0455 91.4937 28.7967 91.4183C27.5305 91.0415 26.3095 90.5742 25.1337 90.0089C24.0785 89.5039 23.0609 88.9386 22.0886 88.2979C21.9454 88.2075 21.7947 88.1095 21.6515 88.0191C21.4254 87.8608 21.1993 87.7025 20.9731 87.5367C20.9656 87.5291 20.9505 87.5216 20.943 87.5141C19.6768 86.5795 18.4934 85.5167 17.4005 84.3485C17.2799 84.2128 17.1593 84.0771 17.0312 83.9339C16.9182 83.8058 16.8051 83.6776 16.692 83.5495C12.2225 78.3263 9.59203 71.0604 9.58449 62.3098C9.56188 39.6455 27.1536 15.6246 48.9059 8.66027C56.0511 6.38405 62.7592 6.22576 68.5402 7.85379C68.7964 7.92916 69.0527 8.00454 69.3014 8.07991C70.2587 8.38139 71.1782 8.7281 72.0751 9.12757C72.5424 9.33108 72.9946 9.54965 73.4393 9.78331C73.4695 9.79838 73.5072 9.81345 73.5373 9.83607C74.4116 10.2883 75.2558 10.7857 76.0623 11.336C76.7029 11.7656 77.3285 12.2329 77.924 12.7228C77.9315 12.7303 77.9466 12.7303 77.9541 12.7454H77.9616C84.3833 17.9988 88.3026 26.4932 88.2875 37.1809H88.2951Z"
                                stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M48.9208 107.615C45.9963 105.49 43.0644 103.364 40.14 101.231H40.1324C38.0823 98.9777 36.0322 96.7391 33.9746 94.493C33.2661 93.7167 32.55 92.9404 31.8416 92.1641C32.9194 92.3676 34.0349 92.5183 35.173 92.5937C36.2282 93.7393 37.2758 94.8925 38.3311 96.0457C38.7607 96.513 39.1903 96.9878 39.6199 97.4552C40.1701 98.0581 40.7279 98.6611 41.2781 99.2641C41.7755 99.8067 42.2655 100.342 42.7629 100.885C44.8205 103.131 46.8707 105.369 48.9208 107.615Z"
                                fill="#BDF461" />
                            <path
                                d="M48.9208 107.615C45.9963 105.49 43.0644 103.364 40.14 101.231H40.1324C38.0823 98.9777 36.0322 96.7391 33.9746 94.493C33.2661 93.7167 32.55 92.9404 31.8416 92.1641C32.9194 92.3676 34.0349 92.5183 35.173 92.5937C36.2282 93.7393 37.2758 94.8925 38.3311 96.0457C38.7607 96.513 39.1903 96.9878 39.6199 97.4552C40.1701 98.0581 40.7279 98.6611 41.2781 99.2641C41.7755 99.8067 42.2655 100.342 42.7629 100.885C44.8205 103.131 46.8707 105.369 48.9208 107.615Z"
                                stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M51.0388 23.6822C55.7571 22.0316 59.2543 22.1145 61.5607 23.9083C63.8444 25.6795 64.9826 28.5512 64.9826 32.5233C64.9826 34.6412 64.7715 36.5029 64.3494 38.1083C63.9274 39.7213 63.2339 41.3719 62.2692 43.0602C61.3044 44.7636 60.0231 46.7761 58.4403 49.1277C56.6163 51.7883 55.335 53.8158 54.5963 55.2177C53.8577 56.6196 53.4884 57.8708 53.4884 58.9787V60.0038L44.3383 63.7648V62.167C44.3383 59.8229 44.8734 57.4713 45.9361 55.1272C46.9989 52.7907 48.6797 50.1376 50.9785 47.1831C52.3277 45.4495 53.315 44.0175 53.9331 42.8794C54.5587 41.7488 54.9581 40.7162 55.139 39.7816C55.3199 38.847 55.4179 37.8295 55.4179 36.729C55.4179 35.0482 54.83 33.993 53.6542 33.5634C52.4709 33.1263 51.0388 33.2167 49.358 33.8272C47.6772 34.4377 46.2 35.1914 44.6774 36.1788C43.1474 37.1662 41.542 38.4776 39.8537 40.1208L36.3489 32.7268C38.7834 30.5109 41.1048 28.7095 43.3132 27.3151C45.5065 25.9358 48.0842 24.7223 51.0388 23.6973V23.6822ZM49.3656 81.0475C47.6772 81.7937 46.2376 81.9143 45.0468 81.4018C43.8559 80.8893 43.2605 79.4497 43.2605 77.1056C43.2605 74.7616 43.8559 72.6738 45.0468 71.1814C46.2301 69.6966 47.6697 68.5962 49.3656 67.8877C51.0614 67.1792 52.3955 67.0963 53.5562 67.5786C54.7094 68.061 55.2822 69.5082 55.2822 71.9125C55.2822 74.2189 54.7094 76.1333 53.5562 77.6634C52.3955 79.2009 51.0087 80.3315 49.3731 81.0551L49.3656 81.0475Z"
                                fill="white" />
                            <path
                                d="M51.0388 23.6822C55.7571 22.0316 59.2543 22.1145 61.5607 23.9083C63.8445 25.6795 64.9826 28.5512 64.9826 32.5233C64.9826 34.6412 64.7715 36.5029 64.3494 38.1083C63.9274 39.7213 63.2339 41.3719 62.2692 43.0602C61.3044 44.7636 60.0231 46.7761 58.4403 49.1277C56.6163 51.7883 55.335 53.8158 54.5963 55.2177C53.8577 56.6196 53.4884 57.8708 53.4884 58.9787V60.0038L44.3383 63.7648V62.167C44.3383 59.8229 44.8734 57.4713 45.9361 55.1272C46.9989 52.7907 48.6797 50.1376 50.9785 47.1831C52.3277 45.4495 53.315 44.0175 53.9331 42.8794C54.5587 41.7488 54.9581 40.7162 55.139 39.7816C55.3199 38.847 55.4179 37.8295 55.4179 36.729C55.4179 35.0482 54.83 33.993 53.6542 33.5634C52.4709 33.1263 51.0388 33.2167 49.358 33.8272C47.6772 34.4377 46.2 35.1914 44.6774 36.1788C43.1474 37.1662 41.542 38.4776 39.8537 40.1208L36.3489 32.7268C38.7834 30.5109 41.1048 28.7095 43.3132 27.3151C45.5065 25.9358 48.0842 24.7223 51.0388 23.6973V23.6822ZM49.3656 81.0475C47.6772 81.7937 46.2376 81.9143 45.0468 81.4018C43.8559 80.8893 43.2605 79.4497 43.2605 77.1056C43.2605 74.7616 43.8559 72.6738 45.0468 71.1814C46.2301 69.6966 47.6697 68.5962 49.3656 67.8877C51.0614 67.1792 52.3955 67.0963 53.5562 67.5786C54.7094 68.061 55.2822 69.5082 55.2822 71.9125C55.2822 74.2189 54.7094 76.1333 53.5562 77.6634C52.3955 79.2009 51.0087 80.3315 49.3731 81.0551L49.3656 81.0475Z"
                                stroke="black" stroke-miterlimit="10" />
                            <path
                                d="M0.796164 55.9182C0.773553 33.2539 18.3653 9.233 40.1175 2.26867C47.2628 -0.0075565 53.9709 -0.165837 59.7519 1.46219C60.0081 1.53756 60.2644 1.61293 60.5131 1.68831C61.9603 2.14053 63.3396 2.70582 64.651 3.3917C64.6812 3.40678 64.7188 3.42185 64.749 3.44446C65.6685 3.91931 66.5504 4.45444 67.4021 5.03481C67.4925 5.0951 67.5905 5.16294 67.681 5.23077C67.9146 5.39659 68.1483 5.56241 68.3744 5.73576C70.937 7.59744 73.4996 9.46666 76.0623 11.3359C75.2558 10.7857 74.4116 10.2882 73.5373 9.83598C73.5072 9.81337 73.4695 9.79829 73.4393 9.78322C72.9947 9.54957 72.5424 9.33099 72.0751 9.12749C71.1782 8.72801 70.2587 8.38131 69.3014 8.07982C69.0527 8.00445 68.7965 7.92908 68.5402 7.8537C62.7592 6.22568 56.0511 6.38396 48.9059 8.66018C27.1536 15.6245 9.56188 39.6455 9.5845 62.3097C9.59203 71.0603 12.2225 78.3262 16.692 83.5494C16.8051 83.6776 16.9182 83.8057 17.0312 83.9338C17.1593 84.077 17.2799 84.2127 17.4005 84.3484C18.4934 85.5166 19.6768 86.5794 20.943 87.514C18.2522 85.5543 15.5539 83.5871 12.8632 81.6275C12.637 81.4692 12.4109 81.3109 12.1848 81.1451C12.1773 81.1375 12.1622 81.13 12.1547 81.1225C10.8884 80.1879 9.70509 79.1251 8.6122 77.9569C8.37855 77.6931 8.13736 77.4293 7.90371 77.1579C3.43417 71.9347 0.803702 64.6688 0.796164 55.9182Z"
                                fill="#BDF461" />
                            <path
                                d="M0.796164 55.9182C0.773553 33.2539 18.3653 9.23301 40.1175 2.26867C47.2628 -0.0075565 53.9709 -0.165837 59.7519 1.46219C60.0081 1.53756 60.2644 1.61293 60.5131 1.68831C61.9602 2.14054 63.3395 2.70582 64.651 3.3917C64.6812 3.40678 64.7188 3.42185 64.749 3.44446C65.6685 3.91931 66.5504 4.45444 67.4021 5.03481C67.4925 5.0951 67.5905 5.16294 67.681 5.23077C67.9146 5.39659 68.1483 5.56241 68.3744 5.73576C70.937 7.59744 73.4996 9.46666 76.0623 11.3359C75.2558 10.7857 74.4116 10.2882 73.5373 9.83598C73.5072 9.81337 73.4695 9.79829 73.4393 9.78322C72.9947 9.54957 72.5424 9.33099 72.0751 9.12748C71.1782 8.72802 70.2587 8.38131 69.3014 8.07982C69.0527 8.00445 68.7965 7.92908 68.5402 7.8537C62.7592 6.22568 56.0511 6.38396 48.9059 8.66018C27.1536 15.6245 9.56189 39.6455 9.5845 62.3097C9.59203 71.0603 12.2225 78.3262 16.692 83.5494C16.8051 83.6776 16.9182 83.8057 17.0312 83.9338C17.1593 84.077 17.2799 84.2127 17.4005 84.3484C18.4934 85.5166 19.6768 86.5794 20.943 87.514C18.2522 85.5543 15.5539 83.5871 12.8632 81.6275C12.637 81.4692 12.4109 81.3109 12.1848 81.1451C12.1773 81.1375 12.1622 81.13 12.1547 81.1225C10.8884 80.1879 9.70509 79.1251 8.6122 77.9569C8.37855 77.6931 8.13736 77.4293 7.90371 77.1579C3.43417 71.9347 0.803702 64.6688 0.796164 55.9182Z"
                                stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_8_16708">
                                <rect width="88.2526" height="108" fill="white" transform="translate(0.419189)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="  text-sm md:text-base text-center font-semibold">You're all set! Let's keep your bids
                        winning</p>
                    <p class=" text-sm md:text-base text-center">Give your maximum bid amount and save the time of
                        watching the bid
                        constantly
                        with auto bid. Are you
                        sure you want to set Auto Bid on this auction ? You can change your Auto Bid later as well.</p>
                </div>
                <div class="flex p-4 gap-3">
                    <button @click="next(3)" :class="sizeObjet == 0 ? 'bg-primary' : 'bg-base-gray text-white'"
                        class="w-full p-2 text-xs h-9 md:text-base  rounded">
                        Yes
                    </button>
                    <button @click="back(2)"
                        class="w-full p-2 text-xs h-9 md:text-base items-center  border rounded-md flex justify-center gap-3 border-[#C2C2C2] ">
                        <p>No</p>
                    </button>
                </div>
            </template>
        </div>
        <!-- <div v-if="loading" class="bg-[#000000a1;] left-0 top-0 absolute w-full h-full flex justify-center items-center">
            <div class="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
                <div class="absolute -left-[30px] z-10  h-[80px] w-[80px] ">
                    <div class="animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" fill="#c1f861" stroke="#fff"
                            stroke-width="0" viewBox="0 0 16 16">
                            <path
                                d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z">
                            </path>
                        </svg>
                    </div>
                    <p class=" text-base-gray font-medium pl-2 ">Loading...</p>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import CurrencyInput from "../../Inputs/CurrencyInput.vue";
import { validationsDealerBidding } from "../../../validations/validationsDealerBidding";
import { ModalBids } from '@/stores/modalBids';
import { useAuctionStore } from "@/stores/auctions";
import { useAuthStore } from "@/stores/auth";
import { toast } from "vue3-toastify";
export default {
    props: {
        form: {
            type: Object,
        },
        index: {
            type: Function,
        }
    },
    setup(props) {
        const isOpen = ref(true);
        const openDropdown = ref(false)
        const value = ref('')
        const formData = ref(props.form);
        const statusModal = ModalBids()
        const counterKey = ref(0)
        const invalid = ref(null)
        const sizeObjet = ref(null)
        const showPayment = ref(false)
        const loading = ref(false)
        const autionsStore = useAuctionStore()
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const authStore = useAuthStore()
        const itemCard = ref(null)
        const addAmount = () => {
            console.log('statusModal.data.vehicleDetails.basePrice', statusModal.data.vehicleDetails.basePrice)
            /*  counterKey.value += 1 */
            formData.value.placeyourbid = (statusModal.data.vehicleDetails.basePrice += 100)
            console.log('formData.placeyourbid', formData.placeyourbid)
            invalid.value = validationsDealerBidding(formData.value, steps.value, statusModal.data.vehicleDetails.basePrice, statusModal.from);
            sizeObjet.value = Object.entries(invalid.value).length
        }
        const steps = ref({
            step1: true,
            step2: false,
            step3: false,
        });
        const back = (paso) => {
            steps.value.step1 = true
            steps.value.step2 = false
            switch (paso) {
                case 1:
                    steps.value.step1 = true
                    steps.value.step2 = false
                    steps.value.step3 = false
                    openDropdown.value = false
                    formData.value.cardNumber = undefined;
                    formData.value.creditCard = undefined;
                    formData.value.cvv = undefined;
                    formData.value.expiryDate = undefined;
                    formData.value.nameOnCard = undefined;
                    formData.value.notify = undefined;
                    formData.value.saveCard = undefined;
                    formData.value.termsConditions = false;
                    itemCard.value = null
                    break;
                case 2:
                    steps.value.step1 = false
                    steps.value.step2 = true
                    steps.value.step3 = false
                    break;
                default:
                    break;
            }
        };
        const next = async (paso) => {
            switch (paso) {
                case 1:
                    steps.value.step1 = false
                    steps.value.step2 = true
                    steps.value.step3 = false
                    sizeObjet.value = null
                    break;
                case 2:
                    steps.value.step1 = false
                    steps.value.step2 = false
                    steps.value.step3 = true
                    break;
                case 3:

                    let payload = null
                    if (statusModal.from == 'autoBid') {
                        let currentBid = statusModal.data?.bids[0]?.amount
                        if (!currentBid) {
                            currentBid = statusModal?.data?.vehicleDetails?.basePrice
                        }
                        let currentAmount = currentBid + 100
                        if (formData.value.placeyourbid < currentAmount) {
                            currentAmount = formData.value.placeyourbid
                        }
                        payload = {
                            amount: currentAmount,
                            biddingLimit: formData.value.placeyourbid,
                            idPaymentMethod: itemCard.value._id
                        }
                    } else {
                        payload = {
                            amount: formData.value.placeyourbid,
                            idPaymentMethod: itemCard.value._id
                        }
                    }
                    loading.value = true
                    try {
                        await autionsStore.autionsBit({ uuid: statusModal.data._id, payload })
                    } catch (error) {
                        toast(error?.response?.data?.message || "An error has occurred", {
                            type: "error",
                        });
                        loading.value = false
                    } finally {
                        loading.value = false
                        statusModal.isActive = false
                        statusModal.finally = 'finally'
                        props.index(statusModal.data._id)
                        toast('Successfully placed bid', { type: "success", position: "top-center", theme: "colored", });
                    }
                    break;
                default:
                    break;
            }

        };
        const formatCardNumber = (event) => {
            let value = event.target.value;
            if (!value) return
            formData.value.cardNumber = value.replaceAll(" ", "")
                .split("")
                .map((v, index) => {
                    event.target.value = event.target.value.replace(/[^0-9]+/g, '');
                    if (index > 0 && index % 4 == 0) {
                        return " " + v
                    } else {
                        return v
                    }
                }).join("")
        }
        const filterinput = (e) => {
            e.target.value = e.target.value.replace(/[^0-9]+/g, '');
            let value = e.target.value;
            formData.value.cardNumber = value.replaceAll(" ", "")
                .split("")
                .map((v, index) => {
                    if (index > 0 && index % 4 == 0) {
                        return " " + v
                    } else {
                        return v
                    }
                }).join("")

        }
        const formatExpiryDate = (event) => {
            const key = event.keyCode || event.charCode;
            if (formData.value.expiryDate?.length == 2) {
                formData.value.expiryDate = (formData.value.expiryDate + '/');
            }
            if (key !== 8 && key !== 46) {

            }

            if ((key == 8 || key == 46) && formData.value.expiryDate.length === 4) {
                formData.value.expiryDate = formData.value.expiryDate.slice(0, 3)
            }
        }
        const isLetter = (e) => {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[a-zA-Z\s]*$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        }
        const closet = () => {
            statusModal.closeModal(false)
            formData.value.placeyourbid = 0
            formData.value.cardNumber = undefined
            formData.value.nameOnCard = undefined
            formData.value.expiryDate = undefined
            formData.value.cvv = undefined
            formData.value.saveCard = undefined
            formData.value.termsConditions = undefined
            formData.value.notify = undefined
            formData.value.creditCard = undefined
        }
        const getCard = (card) => {
            console.log('card', card)
            formData.value.termsConditions = undefined
            itemCard.value = card
            openDropdown.value = false
        }
        const showOptionNewPaymtent = (op) => {
            if (op == 'add-card') {
                showPayment.value = true
            } else {
                showPayment.value = false
            }

            openDropdown.value = false
            formData.value.cardNumber = undefined;
            formData.value.creditCard = undefined;
            formData.value.cvv = undefined;
            formData.value.expiryDate = undefined;
            formData.value.nameOnCard = undefined;
            formData.value.notify = undefined;
            formData.value.saveCard = undefined;
            formData.value.termsConditions = false;
            itemCard.value = null
        }
        watch(formData.value, async (newQuestion, oldQuestion) => {

            invalid.value = validationsDealerBidding(formData.value, steps.value, statusModal.data.vehicleDetails.basePrice, statusModal.from, showPayment.value, itemCard.value, authStore.userData);
            sizeObjet.value = Object.entries(invalid.value).length
            if (newQuestion.placeyourbid > statusModal?.data?.vehicleDetails?.basePrice) {
                counterKey.value += 1
            }
        })
        onMounted(() => {
            console.log('statusModal.data', statusModal)
            if (!authStore.userData.paymentMethods.length > 0) {
                showPayment.value = true
            }
            if (statusModal.data.bids[0]) {
                statusModal.data.vehicleDetails.basePrice = statusModal.data.bids[0].amount
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });
                statusModal.data.amountBid = formatter.format(statusModal.data.amountBid)


            }
        })

        return {
            isOpen,
            openDropdown,
            formData,
            next,
            back,
            value,
            addAmount,
            counterKey,
            sizeObjet,
            invalid,
            steps,
            formatCardNumber,
            statusModal,
            authStore,
            closet,
            bucket,
            filterinput,
            isLetter,
            formatExpiryDate,
            itemCard,
            getCard,
            showPayment,
            showOptionNewPaymtent
        };
    },
    components: { CurrencyInput }
};
</script>