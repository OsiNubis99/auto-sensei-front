<template>
    <div class="w-full pt-10 relative z-10  bg-blue-dark ">
        <div class="flex flex-col lg:grid lg:grid-cols-2   gap-20  p-5 lg:pt-20 lg:p-28  h-full">
            <div class="flex flex-col items-start gap-4 2xl:gap-10">
                <p class="text-primary text-[10px] lg:text-base uppercase">HOW IT WORKS</p>
                <h1 class=" text-3xl lg:text-6xl lg:leading-[58px]  font-bold text-white">Sell Your Car Quickly and
                    Easily
                    with
                    AutoSensei
                </h1>
                <p class="text-base-white text-xs lg:text-base">Post your car in <span class="text-[#C4ADFF]"> less than
                        10 minutes</span> </p>
            </div>
            <div class="w-full h-full relative">
                <img class="absolute w-full h-full lg:h-[inherit] bottom-0" src="../assets/svg/groups-cars.svg" alt="">
            </div>
        </div>
    </div>
    <div class="bg-[#6D53B0] py-4 text-white font-semibold text-center ">
        <h5>Just three simple step</h5>
    </div>
    <div class="container mx-auto w-full h-full">
        <div class="relative wrap overflow-hidden md:p-10 pl-10 p-4 h-full">
            <div class="mb-8 flex justify-between flex-col  md:flex-row items-center w-full right-timeline relative">
                <div class="order-1  drop-shadow-xl rounded-lg shadow-xl md:w-5/12">
                    <img class="w-full h-full" :src="bucket + 'public/img/png/timeline-1.png'" alt="">
                </div>
                <div class="order-1 md:w-5/12 pt-10">
                    <p class="rotate-title mb-4">Step 1</p>
                    <h2 class="mb-3 font-bold text-md md:text-3xl">Create Your Auction</h2>
                    <p class=" text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Begin by
                        creating your
                        vehicle auction on AutoSensei. Provide essential details about your vehicle, add high-quality
                        photos, and set a reserve price to ensure you receive the value you desire.</p>
                </div>


            </div>
            <div
                class="mb-8 flex justify-between flex-col md:flex-row-reverse items-center w-full relative left-timeline">
                <div class="order-1 bg-gray-900 shadow-xl drop-shadow-xl rounded-lg  md:w-5/12 px-6 py-4">
                    <img class="w-full h-full" :src="bucket + 'public/img/png/timeline-3.png'" alt="">
                </div>
                <div class="order-1 md:w-5/12 pt-10">
                    <p class="rotate-title mb-4">Step 2</p>
                    <h3 class="mb-3 font-bold text-md md:text-3xl">Negotiate with buyers</h3>
                    <p class=" text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">When you
                        receive a bid that aligns with your expectations, use the platform to negotiate with the buyer.
                        Discuss the terms, ask for any specific requirements, and finalize the deal. Once both parties
                        are satisfied, accept the bid and move forward.</p>
                </div>

            </div>
            <div class="mb-8 flex justify-between flex-col  md:flex-row items-center w-full right-timeline relative">
                <div class="order-1 bg-gray-100 shadow-xl drop-shadow-xl rounded-lg  md:w-5/12 px-6 py-4">
                    <img class="w-full h-full" :src="bucket + 'public/img/png/timeline-4.png'" alt="">

                </div>
                <div class="order-1 md:w-5/12 pt-10">
                    <p class="rotate-title mb-4">Step 3</p>
                    <h3 class="mb-3 font-bold text-md md:text-3xl">Close the deal</h3>
                    <p class=" text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">The final
                        step involves completing the transaction. Ensure all necessary documentation is in order, and
                        seal the deal. When you're satisfied with the outcome, mark the transaction as completed.
                        AutoSensei will handle the rest, including payment processing and paperwork.</p>
                </div>

            </div>
            <!--   <div
                class="mb-8 flex justify-between flex-col md:flex-row-reverse items-center w-full relative left-timeline">
                <div class="order-1 md:w-5/12 pt-10">
                    <h3 class="mb-3 font-bold text-md m:text-xl">Negotiate and Accept Bids</h3>
                    <p class=" text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">When you
                        receive a bid that
                        aligns with your expectations, use the platform to negotiate with the buyer. Discuss the terms,
                        ask
                        for any specific requirements, and finalize the deal. Once both parties are satisfied, accept
                        the
                        bid and move forward.</p>
                </div>
                <div class="order-1 bg-gray-900 shadow-xl drop-shadow-xl rounded-lg  md:w-5/12 px-6 py-4">
                    <img class="w-full h-full" :src="bucket + 'public/img/png/timeline-4.png'" alt="">

                </div>
            </div>
            <div class="mb-8 flex justify-between flex-col  md:flex-row items-center w-full right-timeline relative">
                <div class="order-1 md:w-5/12 pt-10">
                    <h3 class="mb-3 font-bold text-md m:text-xl">Arrange Drop-off and Payment</h3>
                    <p class=" text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">After
                        accepting the bid,
                        it's time to work out the logistics. Use AutoSensei's secure and user-friendly environment to
                        arrange the drop-off and payment details with the buyer. This ensures a smooth and hassle-free
                        experience.</p>
                </div>
                <div
                    class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute top-0 -left-[28px] md:left-[49%] w-5 h-5 md:w-10 md:h-10 rounded-full">
                    <h1 class="mx-auto font-semibold text-xs md:text-lg text-white">5</h1>
                </div>
                <div class="order-1 bg-gray-100 shadow-xl drop-shadow-xl rounded-lg  md:w-5/12 px-6 py-4">
                    <img class="w-full h-full" :src="bucket + 'public/img/png/timeline-5.png'" alt="">

                </div>
            </div>
            <div
                class="mb-8 flex justify-between flex-col md:flex-row-reverse items-center w-full relative left-timeline">
                <div class="order-1 md:w-5/12 pt-10">
                    <h3 class="mb-3 font-bold text-md m:text-xl">Close the Deal</h3>
                    <p class=" text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">The final
                        step involves
                        completing the transaction. Ensure all necessary documentation is in order, and seal the deal.
                        When
                        you're satisfied with the outcome, mark the transaction as completed. AutoSensei will handle the
                        rest, including payment processing and paperwork.</p>
                </div>

                <div class="order-1 bg-gray-900 shadow-xl drop-shadow-xl rounded-lg  md:w-5/12 px-6 py-4">
                    <img class="w-full h-full" :src="bucket + 'public/img/png/timeline-6.png'" alt="">

                </div>
            </div> -->
            <!--  <div
                class="mb-8 flex justify-between flex-col md:flex-row-reverse items-center w-full relative left-timeline">
                <div
                    class="z-20 flex items-center order-1 bg-[#1F94F0] shadow-xl  absolute left-[-8.5%] top-[-50px] w-4 h-4 lg:top-[-20px] lg:left-[49.7%] md:w-5 md:h-5 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-xs md:text-lg"></h1>
                </div>
            </div> -->
        </div>
        <div class="flex w-full justify-center items-center py-3 pb-20">
            <button id="getStarted-how-it-works" @click="goToHome" class="btn-free bg-primary">
                <p class="font-bold ">Get Started Today</p>
                <p class="btn-free_card">Free</p>
                <svg mlns=" http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path
                        d="M13.6715 12.0007L8.72168 7.05093L10.1359 5.63672L16.4999 12.0007L10.1359 18.3646L8.72168 16.9504L13.6715 12.0007Z"
                        fill="black" />
                </svg>
            </button>
        </div>

    </div>
    <div class="py-12 bg-[#F3F4F5] 2xl:px-20">
        <h2 class="text-2xl md:text-4xl text-center  p-5 leading-[40px] md:leading-[50px]"> <strong> What people are
                saying
            </strong> <br> about AutoSensei
        </h2>
        <div class="w-full justify-center  flex items-center">
            <div class="flex flex-col lg:flex-row items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_593_25955)">
                        <path
                            d="M10.5975 1.03762C10.5424 0.926333 10.4572 0.832664 10.3517 0.767178C10.2461 0.701691 10.1244 0.666992 10.0002 0.666992C9.87599 0.666992 9.75425 0.701691 9.64871 0.767178C9.54316 0.832664 9.45802 0.926333 9.40286 1.03762L6.67353 6.56696L0.57086 7.45362C0.447727 7.4715 0.332055 7.52349 0.23693 7.60369C0.141805 7.6839 0.0710246 7.78912 0.0325948 7.90746C-0.00583487 8.0258 -0.0103796 8.15254 0.0194748 8.27333C0.0493292 8.39412 0.112391 8.50414 0.201527 8.59096L4.61753 12.895L3.57486 18.9736C3.55394 19.0961 3.56769 19.2221 3.61454 19.3372C3.6614 19.4523 3.7395 19.552 3.84004 19.6251C3.94057 19.6982 4.05952 19.7417 4.18348 19.7507C4.30743 19.7598 4.43145 19.734 4.54153 19.6763L10.0002 16.8056L15.4589 19.6763C15.5689 19.734 15.693 19.7598 15.8169 19.7507C15.9409 19.7417 16.0598 19.6982 16.1604 19.6251C16.2609 19.552 16.339 19.4523 16.3858 19.3372C16.4327 19.2221 16.4464 19.0961 16.4255 18.9736L15.3829 12.8936L19.7989 8.59096C19.888 8.50414 19.9511 8.39412 19.9809 8.27333C20.0108 8.15254 20.0062 8.0258 19.9678 7.90746C19.9294 7.78912 19.8586 7.6839 19.7635 7.60369C19.6683 7.52349 19.5527 7.4715 19.4295 7.45362L13.3269 6.56696L10.5975 1.03762Z"
                            fill="#FBBC05" />
                    </g>
                    <defs>
                        <clipPath id="clip0_593_25955">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <p> <strong>Excellent 4.9 stars,</strong> 100+ reviews on</p>
                <img class="w-[80px]" src="@/assets/svg/google-socila.svg" alt="">
            </div>
        </div>
        <div class="flex flex-col lg:flex-row  p-2 justify-center mt-10 items-center gap-5">
            <div class="bg-white p-5 max-w-xl   shadow-lg flex rounded-2xl flex-col gap-4 justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" viewBox="0 0 31 22" fill="none">
                    <path
                        d="M13.637 4.75862C11.3021 4.89655 9.41426 5.47126 7.97356 6.48276C6.58253 7.49425 5.76282 8.87356 5.51442 10.6207C5.46474 11.2184 5.46474 11.8621 5.51442 12.5517C5.91186 12 6.40865 11.6092 7.00481 11.3793C7.60096 11.1494 8.32131 11.0345 9.16586 11.0345C10.5072 11.0345 11.6747 11.5172 12.6683 12.4828C13.6619 13.4483 14.1587 14.7126 14.1587 16.2759C14.1587 17.977 13.5625 19.3563 12.3702 20.4138C11.1779 21.4713 9.61298 22 7.67548 22C5.24119 22 3.35336 21.1724 2.01202 19.5172C0.670673 17.8161 0 15.5862 0 12.8276C0 9.47126 1.09295 6.57471 3.27885 4.13793C5.51442 1.65517 8.96715 0.275861 13.637 0V4.75862ZM30.4784 4.75862C28.0937 4.89655 26.2059 5.47126 24.8149 6.48276C23.4239 7.49425 22.6042 8.87356 22.3558 10.6207C22.3061 11.0345 22.2812 11.6782 22.2812 12.5517C22.7284 12 23.25 11.6092 23.8462 11.3793C24.4423 11.1494 25.1627 11.0345 26.0072 11.0345C27.3486 11.0345 28.516 11.5172 29.5096 12.4828C30.5032 13.4483 31 14.7126 31 16.2759C31 17.977 30.4038 19.3563 29.2115 20.4138C28.0192 21.4713 26.4543 22 24.5168 22C22.0329 22 20.1202 21.1724 18.7788 19.5172C17.4872 17.8161 16.8413 15.5862 16.8413 12.8276C16.8413 9.47126 17.9343 6.57471 20.1202 4.13793C22.3558 1.65517 25.8085 0.275861 30.4784 0V4.75862Z"
                        fill="#6D53B0" />
                </svg>
                <p>I was worried about selling my 2018 Mazda CX-5, but <span class="text-[#6D53B0]"> AutoSensei made it
                        incredibly
                        simple. </span> Their comprehensive
                    listing service attracted many potential dealers, and the platform's security measures ensured a
                    safe and
                    smooth
                    sale.
                </p>
                <div>
                    <div class="py-4">
                        <star-rating :starSize="20" :rating="4" :read-only="true" :increment="0.01"
                            :active-color="['#FF333E', '#FF9A02', '#FBDB17']" :show-rating="false"
                            :active-border-color="['#FF333E', '#FF9A02', '#FBDB17']">
                        </star-rating>
                    </div>
                    <div class="flex w-full justify-between items-center">
                        <div class="flex  gap-2 items-center">
                            <div class="w-[50px] h-[50px] shadow-lg  rounded-full overflow-hidden ">
                                <img class="w-full h-full  rounded-full object-contain"
                                    src="https://s3-alpha-sig.figma.com/img/1cc2/91f3/3b208f411ffbdc466ab33436d3882ea6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AHnfTx1~wclkqrHcaf23kiLp2H8CTNJj3rzpVyg8G2ye9kmxvK96ye3hAnJ9aEPG1TW-6hs8dyUwS6KVjXsxbI~UamZFkLxrxjdJ16N7PVo9t3aWySg7KBP0zxm75EM0bH4DCd6o2VnE1okBoq5FlHF~h-T3wWjbBkJXE-qOiEjUbj~xrQj5vsjLOQ0evmWVdGopkSyq2MwOPd3QtFbXKEx9OO17PIkqRVKgeDrUJPxfY3C1RnU5D-WCeZVoQ1E-cmqMQ4oc8ZfAdMIvQqg5qaeH-s76Kzd2BfqPd4KQaOX2FNVc2CLY1DehRQ0CnrmDLSBrRROsBEoV1TxIYcgxkA__"
                                    alt="">
                            </div>
                            <div>
                                <p class=" font-semibold ">Mike Thompson</p>
                                <p>2016 Toyota Corolla</p>
                            </div>
                        </div>
                        <div>
                            <img class="w-[50px] h-[50px]  rounded-full object-contain"
                                src="https://s3-alpha-sig.figma.com/img/1abf/395b/180c2cd1a0003ed5cc7d419a4e27ffcf?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FhytE0VSmxwsVP0o2N0-nSjUH3AU4pGWFpElvS90kq~-RbccSQziqbAtEkcI6cnUFe1~qO3LjzPEqKaUBriTqs6LuloD6nlgkgDM6rTW7dmynC4U5DS758LczaeJJn-f7oO~dBwGjDEnGNMVWfOP65BxHIz5gtPN6POJ2xyN2Dfiz3xXIQXINDcbTpxSouETbv6PNKE6V8HFNezb1MHO5ASK~9sce6iLbvkR7GRkqO8Tu6m5guvX1e7FJEnZ~bpNbxjU-M11yau3ZIoylWbLFf4DwKxAUQuYVDopRMNycpnN6GtVosoSdXgBnqys~IvKaIp9awAaj62ciJFboLQlVQ__"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white p-5 max-w-xl  shadow-lg flex rounded-2xl flex-col gap-4 justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" viewBox="0 0 31 22" fill="none">
                    <path
                        d="M13.637 4.75862C11.3021 4.89655 9.41426 5.47126 7.97356 6.48276C6.58253 7.49425 5.76282 8.87356 5.51442 10.6207C5.46474 11.2184 5.46474 11.8621 5.51442 12.5517C5.91186 12 6.40865 11.6092 7.00481 11.3793C7.60096 11.1494 8.32131 11.0345 9.16586 11.0345C10.5072 11.0345 11.6747 11.5172 12.6683 12.4828C13.6619 13.4483 14.1587 14.7126 14.1587 16.2759C14.1587 17.977 13.5625 19.3563 12.3702 20.4138C11.1779 21.4713 9.61298 22 7.67548 22C5.24119 22 3.35336 21.1724 2.01202 19.5172C0.670673 17.8161 0 15.5862 0 12.8276C0 9.47126 1.09295 6.57471 3.27885 4.13793C5.51442 1.65517 8.96715 0.275861 13.637 0V4.75862ZM30.4784 4.75862C28.0937 4.89655 26.2059 5.47126 24.8149 6.48276C23.4239 7.49425 22.6042 8.87356 22.3558 10.6207C22.3061 11.0345 22.2812 11.6782 22.2812 12.5517C22.7284 12 23.25 11.6092 23.8462 11.3793C24.4423 11.1494 25.1627 11.0345 26.0072 11.0345C27.3486 11.0345 28.516 11.5172 29.5096 12.4828C30.5032 13.4483 31 14.7126 31 16.2759C31 17.977 30.4038 19.3563 29.2115 20.4138C28.0192 21.4713 26.4543 22 24.5168 22C22.0329 22 20.1202 21.1724 18.7788 19.5172C17.4872 17.8161 16.8413 15.5862 16.8413 12.8276C16.8413 9.47126 17.9343 6.57471 20.1202 4.13793C22.3558 1.65517 25.8085 0.275861 30.4784 0V4.75862Z"
                        fill="#6D53B0" />
                </svg>
                <p>I was worried about selling my 2018 Mazda CX-5, but <span class="text-[#6D53B0]"> AutoSensei made it
                        incredibly
                        simple. </span> Their comprehensive
                    listing service attracted many potential dealers, and the platform's security measures ensured a
                    safe and
                    smooth
                    sale.
                </p>
                <div>
                    <div class="py-4">
                        <star-rating :starSize="20" :rating="2" :read-only="true" :increment="0.01"
                            :active-color="['#FF333E', '#FF9A02', '#FBDB17']" :show-rating="false"
                            :active-border-color="['#FF333E', '#FF9A02', '#FBDB17']">
                        </star-rating>
                    </div>
                    <div class="flex w-full justify-between items-center">
                        <div class="flex  gap-2 items-center">
                            <div class="w-[50px] h-[50px] shadow-lg  rounded-full overflow-hidden ">
                                <img class="w-full h-full rounded-full object-contain"
                                    src="https://s3-alpha-sig.figma.com/img/c5d6/ba76/401966ca16f35b2f0d7bcca86ece8051?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSNpvI6hG6YF1-xed~2t8IRJAXkr2sQu9DWObsTGTHfkFqXPPtPavTsybzIdHt66c0SDbalHsrmG6k~50FXcyODdPkiG3bzbngNipjpyklqQtjLDVL4F1ikqVLjjaFgLhL~Fsb92f2guXO8tVyFNuonnfIm23xZE6TFdRR7YDSGm1EgbzXDHrTY0KS4-kA7R1QPZRZ6Vneq5wzz5-K1FBH4MNRFGwRa7el2QY7bXg2A68hHRe5ILDbcWPYcDgUKdcvJfghAPpBLZXl9GdvNTcKnhVnAVN2MOJBauUz6X6k21XVKOUpXCImM5EzvycmK8UE617~pnxEotC3M-5aDHKg__"
                                    alt="">
                            </div>
                            <div>
                                <p class=" font-semibold ">Mike Thompson</p>
                                <p>2016 Toyota Corolla</p>
                            </div>
                        </div>
                        <div>
                            <img class="w-[50px] h-[50px]  rounded-full object-contain"
                                src="https://s3-alpha-sig.figma.com/img/1abf/395b/180c2cd1a0003ed5cc7d419a4e27ffcf?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FhytE0VSmxwsVP0o2N0-nSjUH3AU4pGWFpElvS90kq~-RbccSQziqbAtEkcI6cnUFe1~qO3LjzPEqKaUBriTqs6LuloD6nlgkgDM6rTW7dmynC4U5DS758LczaeJJn-f7oO~dBwGjDEnGNMVWfOP65BxHIz5gtPN6POJ2xyN2Dfiz3xXIQXINDcbTpxSouETbv6PNKE6V8HFNezb1MHO5ASK~9sce6iLbvkR7GRkqO8Tu6m5guvX1e7FJEnZ~bpNbxjU-M11yau3ZIoylWbLFf4DwKxAUQuYVDopRMNycpnN6GtVosoSdXgBnqys~IvKaIp9awAaj62ciJFboLQlVQ__"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white p-5 max-w-xl  shadow-lg flex rounded-2xl flex-col gap-4 justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" viewBox="0 0 31 22" fill="none">
                    <path
                        d="M13.637 4.75862C11.3021 4.89655 9.41426 5.47126 7.97356 6.48276C6.58253 7.49425 5.76282 8.87356 5.51442 10.6207C5.46474 11.2184 5.46474 11.8621 5.51442 12.5517C5.91186 12 6.40865 11.6092 7.00481 11.3793C7.60096 11.1494 8.32131 11.0345 9.16586 11.0345C10.5072 11.0345 11.6747 11.5172 12.6683 12.4828C13.6619 13.4483 14.1587 14.7126 14.1587 16.2759C14.1587 17.977 13.5625 19.3563 12.3702 20.4138C11.1779 21.4713 9.61298 22 7.67548 22C5.24119 22 3.35336 21.1724 2.01202 19.5172C0.670673 17.8161 0 15.5862 0 12.8276C0 9.47126 1.09295 6.57471 3.27885 4.13793C5.51442 1.65517 8.96715 0.275861 13.637 0V4.75862ZM30.4784 4.75862C28.0937 4.89655 26.2059 5.47126 24.8149 6.48276C23.4239 7.49425 22.6042 8.87356 22.3558 10.6207C22.3061 11.0345 22.2812 11.6782 22.2812 12.5517C22.7284 12 23.25 11.6092 23.8462 11.3793C24.4423 11.1494 25.1627 11.0345 26.0072 11.0345C27.3486 11.0345 28.516 11.5172 29.5096 12.4828C30.5032 13.4483 31 14.7126 31 16.2759C31 17.977 30.4038 19.3563 29.2115 20.4138C28.0192 21.4713 26.4543 22 24.5168 22C22.0329 22 20.1202 21.1724 18.7788 19.5172C17.4872 17.8161 16.8413 15.5862 16.8413 12.8276C16.8413 9.47126 17.9343 6.57471 20.1202 4.13793C22.3558 1.65517 25.8085 0.275861 30.4784 0V4.75862Z"
                        fill="#6D53B0" />
                </svg>
                <p>I was worried about selling my 2018 Mazda CX-5, but <span class="text-[#6D53B0]"> AutoSensei made it
                        incredibly
                        simple. </span> Their comprehensive
                    listing service attracted many potential dealers, and the platform's security measures ensured a
                    safe and
                    smooth
                    sale.
                </p>
                <div>
                    <div class="py-4">
                        <star-rating :starSize="20" :rating="5" :read-only="true" :increment="0.01"
                            :active-color="['#FF333E', '#FF9A02', '#FBDB17']" :show-rating="false"
                            :active-border-color="['#FF333E', '#FF9A02', '#FBDB17']">
                        </star-rating>
                    </div>
                    <div class="flex w-full justify-between items-center">
                        <div class="flex  gap-2 items-center">
                            <div class="w-[50px] h-[50px] shadow-lg  rounded-full overflow-hidden ">
                                <img class=" w-full h-full    object-contain"
                                    src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png" alt="">
                            </div>
                            <div>
                                <p class=" font-semibold ">Mike Thompson</p>
                                <p>2016 Toyota Corolla</p>
                            </div>
                        </div>
                        <div>
                            <img class="w-[50px] h-[50px]  rounded-full object-contain"
                                src="https://s3-alpha-sig.figma.com/img/1abf/395b/180c2cd1a0003ed5cc7d419a4e27ffcf?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FhytE0VSmxwsVP0o2N0-nSjUH3AU4pGWFpElvS90kq~-RbccSQziqbAtEkcI6cnUFe1~qO3LjzPEqKaUBriTqs6LuloD6nlgkgDM6rTW7dmynC4U5DS758LczaeJJn-f7oO~dBwGjDEnGNMVWfOP65BxHIz5gtPN6POJ2xyN2Dfiz3xXIQXINDcbTpxSouETbv6PNKE6V8HFNezb1MHO5ASK~9sce6iLbvkR7GRkqO8Tu6m5guvX1e7FJEnZ~bpNbxjU-M11yau3ZIoylWbLFf4DwKxAUQuYVDopRMNycpnN6GtVosoSdXgBnqys~IvKaIp9awAaj62ciJFboLQlVQ__"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import iconArrow from '../components/icons/iconArrow.vue'
import Heanding from '../components/Headings/Heanding.vue'
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue';
import { useAuthStore } from "@/stores/auth";
export default {
    components: {
        iconArrow,
        Heanding,
    },
    setup() {
        const route = useRouter();
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        const authStore = useAuthStore()
        const router = useRouter();
        const redirectLogin = (redirect) => {
            route.push({ name: 'signup', params: { rol: redirect } })
        }
        const goToHome = async () => {
            console.log('authStore.userData', authStore.userData)
            if (authStore.userData._id) {
                switch (authStore.userData.type) {
                    case 0:
                        await router.push({ path: '/inicio' })

                        break;
                    case 1:
                        await router.push({ path: '/all' })

                        break;
                    case 2:
                        await router.push({ path: '/upcoming' })

                        break;

                    default:
                        break;
                }
            } else {
                await router.push({ path: '/login/sellers' })

            }
        }
        return {
            iconArrow,
            Heanding,
            redirectLogin,
            bucket,
            goToHome
        };
    },
};
</script>