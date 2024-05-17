<template>
  <div class="w-full py-10 relative z-10 h-[120vh] sm:h-fit xl:h-screen overflow-hidden bg-blue-dark ">
    <div
      class="flex flex-col md:flex-row lg:grid lg:grid-cols-2  gap-3 md:gap-20  p-5  pt-[100px]  md:pt-[150px]  2xl:pt-[200px] md:px-12  !pb-0 h-full">
      <div class="flex flex-col items-start gap-4 ">
        <p class="text-primary text-[10px] lg:text-base uppercase"> {{ $t("home.pre_title") }}</p>
        <h1 class="title-home font-bold text-white"> {{ $t("home.title") }}</h1>
        <p class="text-base-white text-xs lg:text-base">{{ $t("home.subt_title") }}</p>
        <div class="flex flex-col sm:mt-10 2xl:flex-row gap-6 2xl:gap-4  justify-start items-center">
          <button @click="goToHome()" id="sellCar"
            class="btn w-full   lg:w-[350px] lg:h-[55px] !font-bold bg-primary text-base-black">{{
          $t("sell_your_car")
        }}</button>
          <div
            class=" px-4 flex justify-center items-center 2xl:pr-6 2xl:w-fit w-full rounded-full 2xl:h-[55px] bg-[#292F38] text-base-black">
            <div class="flex gap-3 items-center justify-start ">
              <div class="bg-[#2F363F] p-2 w-[36px] h-[36px] flex justify-center items-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 20 19" fill="none">
                  <path
                    d="M10.0005 0.59082L13.4581 5.64964L19.3376 7.37518L15.5944 12.227L15.7711 18.3519L10.0005 16.2917L4.22905 18.3519L4.40578 12.227L0.662598 7.37518L6.54287 5.64964L10.0005 0.59082ZM8.36414 9.99991H6.72778C6.72777 10.8537 7.06143 11.6737 7.65756 12.285C8.2537 12.8962 9.06511 13.2503 9.91866 13.2717C10.7722 13.293 11.6003 12.98 12.2263 12.3993C12.8522 11.8186 13.2265 11.0163 13.2691 10.1635L13.2732 9.99991H11.6369C11.6388 10.4245 11.4755 10.8333 11.1817 11.1398C10.8878 11.4463 10.4862 11.6265 10.0619 11.6424C9.63759 11.6584 9.22369 11.5087 8.90765 11.2251C8.59161 10.9416 8.39818 10.5462 8.36823 10.1226L8.36414 9.99991Z"
                    fill="#FBBC05" />
                </svg>
              </div>
              <div class="flex flex-col justify-start ">
                <p class="text-[#FBBC05] text-xs md:text-base text-left">Rated 4.8/5</p>
                <p class="text-[#ABB1B8] text-xs md:text-base  text-left">over 3000 satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-custom-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path
              d="M5 11.5L6.5 7H17.5L19 11.5M17.5 16.5C17.1022 16.5 16.7206 16.342 16.4393 16.0607C16.158 15.7794 16 15.3978 16 15C16 14.6022 16.158 14.2206 16.4393 13.9393C16.7206 13.658 17.1022 13.5 17.5 13.5C17.8978 13.5 18.2794 13.658 18.5607 13.9393C18.842 14.2206 19 14.6022 19 15C19 15.3978 18.842 15.7794 18.5607 16.0607C18.2794 16.342 17.8978 16.5 17.5 16.5ZM6.5 16.5C6.10218 16.5 5.72064 16.342 5.43934 16.0607C5.15804 15.7794 5 15.3978 5 15C5 14.6022 5.15804 14.2206 5.43934 13.9393C5.72064 13.658 6.10218 13.5 6.5 13.5C6.89782 13.5 7.27936 13.658 7.56066 13.9393C7.84196 14.2206 8 14.6022 8 15C8 15.3978 7.84196 15.7794 7.56066 16.0607C7.27936 16.342 6.89782 16.5 6.5 16.5ZM18.92 6.5C18.72 5.92 18.16 5.5 17.5 5.5H6.5C5.84 5.5 5.28 5.92 5.08 6.5L3 12.5V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H5C5.26522 21.5 5.51957 21.3946 5.70711 21.2071C5.89464 21.0196 6 20.7652 6 20.5V19.5H18V20.5C18 20.7652 18.1054 21.0196 18.2929 21.2071C18.4804 21.3946 18.7348 21.5 19 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V12.5L18.92 6.5Z"
              fill="white" />
          </svg>
          <p> <strong> Over 5,000 cars sold </strong> through AutoSensei</p>
        </div>
      </div>
      <div class="w-full sm:invisible visible xl:visible -bottom-[70px]  md:-bottom-[100px]  h-full relative">
        <img class="absolute w-full h-full lg:h-[inherit]" :src="bucket + 'public/svg/carji.svg'" alt="">
      </div>
    </div>
    <img class="absolute xl:invisible invisible sm:visible sm:right-[5%] right-0 bottom-0  h-[50%] "
      :src="bucket + 'public/svg/carji.svg'" alt="">
    <img class="absolute -z-10 sm:hidden bottom-0 w-full" src="../assets/svg/vehiculp-movil.svg" alt="">
    <img class="absolute hidden sm:block -z-10 bottom-0 w-full" :src="bucket + 'public/svg/vehiculo.svg'" alt="">
    <svg class=" line-svg-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481 603" fill="none">
      <path
        d="M290.219 -142.774L15.4131 181.446C12.6915 184.657 17.0402 189.372 20.4385 186.888C127.109 108.922 315.63 -6.55714 387.378 33.846C485.061 88.8527 120.398 236.351 184.223 313.731C235.284 375.636 482.391 184.879 599.562 81.763C516.555 199.327 364.866 444.851 422.163 486.44C493.784 538.426 692.86 181.276 743.339 213.849C783.722 239.908 642.994 476.803 567.582 591.993L898.12 326.197"
        stroke="#2C3238" stroke-width="28" />
    </svg>
  </div>
  <div class="py-14 relative z-20 overflow-hidden ">
    <div class=" max-w-2xl  m-auto ">
      <h2>Sell Your Car Fast, for Top Dollar</h2>
      <p class=" text-xs px-5 md:text-lg text-center text-[#666666]">Say goodbye to low-ball offers and time-wasting
        hagglers.
        With AutoSensei, you're in control of getting the best value for your car, fast.</p>
    </div>

    <div
      class="grid xl:grid-cols-2 gap-10 md:gap-20 sm:p-5 md:pt-20  xl:mb-14 md:max-w-[90%] xl:max-w-[80%] m-auto lg:pb-0 h-full">
      <div class="flex gap-14 order-2 p-5 md:order-1 flex-col">
        <div class="flex gap-3 flex-col">
          <h4 class="rotate-title">Step 1</h4>
          <h3>List Your Car in Minutes For Free</h3>
          <p>Sign up for an account with us and provide your car's details with photos. No cost, no hassle. Our
            user-friendly platform guides you through each step, so you can create an appealing profile that attracts
            serious buyers, without any cost or complications.</p>
        </div>
        <div class="flex gap-3 flex-col">
          <h4 class="rotate-title">Step 2</h4>
          <h3>Dealers Bid, You Decide</h3>
          <p>Once your car's profile is complete, it goes to auction, where a network of verified dealers are ready to
            compete for your vehicle. You're in the driver's seat as bids roll in - the power to get the best price is
            in your hands. And with AutoSensei's auction system, you set the timeline, so you can sell at your pace,
            whether that's lightning-fast or on a more relaxed schedule.</p>
        </div>
        <div class="flex gap-3 flex-col">
          <h4 class="rotate-title">Step 3</h4>
          <h3>Close the Deal & Get Paid, Fast & Easy</h3>
          <p>After selecting the winning bid, AutoSensei makes closing the deal a breeze. Choose a convenient time and
            location for the car handover. We'll handle all the paperwork, so you don't have to worry about the details.
            Once the buyer has your car, you'll receive your payment within 48 hours. It's that simple – no hidden fees,
            no last-minute haggling. Move on to your next chapter with cash in hand.</p>
        </div>
      </div>
      <div class="relative order-1 mt-14 sm:mt-0 md:order-2 sm:h-[80vh]">
        <div class="line2-home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 783" fill="none">
            <path
              d="M331.227 761.637L36.0208 413.348C28.265 404.197 41.4545 389.954 51.3416 396.746C182.253 486.676 371.073 592.595 448.069 549.237C565.54 483.087 127.004 305.709 203.759 212.653C265.163 138.208 562.329 367.607 703.237 491.613C603.415 350.233 420.996 54.9708 489.9 4.9565C576.03 -57.5614 815.436 371.941 876.14 332.768"
              stroke="#1A1A1A" stroke-width="66" />
          </svg>
        </div>
        <div class="h-[70vh] w-[100%] sm:w-[inherit] sm:h-[inherit] ">
          <img class="w-full object-cover  h-full" src="../assets/img/png/celular.png" alt="">
        </div>

      </div>

    </div>
    <div class="flex w-full justify-center flex-col gap-3 items-center">
      <p class="font-semibold">Want to know more?</p>
      <button @click="goToHome()" class="btn-free bg-primary">
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
  <div class="bg-[#F3F4F5] px-3 relative py-14">
    <!--   <img class="absolute w-full top-0 left-0 object-cover h-full" :src="bucket + 'public/svg/lines/lineHomeWhy.svg'"
      alt=""> -->
    <div class="relative text-center mb-14">
      <h2> Why AutoSensei?</h2>
      <p class=" text-xs md:text-lg font-normal text-[#464B50] text-center">Auction your car to dealers right from your
        home, for
        the
        best price.
      </p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 p-4 gap-10 md:gap-20 relative lg:px-20 h-full">
      <div v-for="(  item, index  ) in   WhyAutoSensei  " :key="index" class="flex flex-col items-center gap-5">
        <component :is="item.icon"></component>
        <h5 class=" text-2xl text-center font-semibold text-base-black"> {{ item.title }} </h5>
        <p class=" text-xs md:text-sm text-center text-[#464B50] font-normal"> {{ item.pre_title }}</p>
      </div>
    </div>
    <div class="w-full justify-center flex-col gap-5 items-center relative mt-5 flex ">
      <p class=" font-semibold text-xs md:text-base">Join thousands of satisfied car sellers today!</p>
      <!--    <button id="getStarted" @click="goToHome()" class="btn bg-primary text-base-black">Get Started</button> -->
      <button id="getStarted" @click="goToHome()" class="btn-free bg-primary">
        <p class="font-bold ">Get Started Today</p>
        <p class="btn-free_card">Free</p>
        <svg class=" absolute right-3 " mlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
          fill="none">
          <path
            d="M13.6715 12.0007L8.72168 7.05093L10.1359 5.63672L16.4999 12.0007L10.1359 18.3646L8.72168 16.9504L13.6715 12.0007Z"
            fill="black" />
        </svg>
      </button>
    </div>
  </div>
  <div class="py-12">
    <h2 class="text-2xl md:text-4xl text-center  p-5 leading-[40px] md:leading-[50px]"> <strong> People who
        have
        sold their <br> car </strong> with AutoSensei</h2>
    <div class="p-5  grid grid-cols-1 md:grid-cols-2 2xl:flex gap-6 items-baseline justify-center">
      <div class="flex items-center max-w-sm  justify-center flex-col ">
        <div class="bg-[#6D53B0] w-full  rounded-xl py-6 overflow-hidden relative flex justify-center items-center">
          <svg class=" absolute left-0 w-full top-0  " xmlns="http://www.w3.org/2000/svg" width="340" height="192"
            viewBox="0 0 340 192" fill="none">
            <path
              d="M119.964 -121.692L-5.1401 25.9068C-8.4269 29.7846 -2.83739 35.8206 1.35258 32.9423C56.8308 -5.16843 136.849 -50.0551 169.479 -31.6807C219.261 -3.6475 33.4169 71.5223 65.9444 110.958C91.9665 142.507 217.901 45.2908 277.615 -7.26062C235.312 52.6536 158.006 177.781 187.206 198.976C223.707 225.47 325.163 43.4544 350.889 60.055"
              stroke="#1A1A1A" stroke-width="44" />
          </svg>
          <img
            class=" w-[80px] h-[80px] 2xl:w-[141px] 2xl:h-[141px] relative object-cover rounded-full border-2  md:border-8 border-base-black "
            src="https://s3-alpha-sig.figma.com/img/8333/30e2/b6bafd4e39c0f8b6912444cbce7aa094?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mcR4TxSbwT2DpX3YG4l8HhyR-4sJ3BfzhBeXqVtVxfggoBD8wSAbMM0qbQLcya~-kDKwExPGIBs0aG2kh6dXojiSOhhYlL2a1PoTv8I-XTFMpNoGyRtl9v8YQWtAEurkP8PZznRuxhVOSJGz95Qj-O-uhUhUGWJF6HdHXH3V6iTEC2YVASX~uVSkgoPHsirT0ZKykssRhH0Ze5VyQfBN2PyFASERJwp1FTkaBBpm9Ghd10SljHOMgA4QCo5XpYBNq-C36Fqr1NyUspQu~~mhxq1q9ZpnFaGykrAJKXN8GqvDVfWPWul9Ns6~wMxDczfwHUwwY~aqHqW2m0BVudNxfg__"
            alt="">
        </div>
        <div class="mt-4 p-2 text-center">
          <p class="font-bold text-xl ">Mei Zhang</p>
          <p>Ford Focus ST 2017</p>
          <p class="mt-4">“Selling my Ford Focus was incredibly smooth. Their detailed guides and easy-to-use platform
            made the
            entire
            process quick and hassle-free.”
          </p>
        </div>

      </div>
      <div class="flex items-center max-w-sm  justify-center flex-col ">
        <div class="bg-[#6D53B0] w-full rounded-xl py-6 overflow-hidden relative flex justify-center items-center">
          <svg class=" absolute left-0 w-full top-0  " xmlns="http://www.w3.org/2000/svg" width="340" height="192"
            viewBox="0 0 340 192" fill="none">
            <path
              d="M119.964 -121.692L-5.1401 25.9068C-8.4269 29.7846 -2.83739 35.8206 1.35258 32.9423C56.8308 -5.16843 136.849 -50.0551 169.479 -31.6807C219.261 -3.6475 33.4169 71.5223 65.9444 110.958C91.9665 142.507 217.901 45.2908 277.615 -7.26062C235.312 52.6536 158.006 177.781 187.206 198.976C223.707 225.47 325.163 43.4544 350.889 60.055"
              stroke="#1A1A1A" stroke-width="44" />
          </svg>
          <img
            class=" w-[80px] h-[80px] 2xl:w-[141px] 2xl:h-[141px] relative object-cover rounded-full  border-2 md:border-8 border-base-black "
            src="https://s3-alpha-sig.figma.com/img/81c5/12c8/d61e630e5ec0fd2aefb1303d3a637a7f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ElOh5Oka8RrrSBDberKy4I~ikr7ARqmV0mQ4ZhEvLRgG8N8UOS-n6pxW8FjsZd3Qt9c4UXKX1bUcGgVwzNeQE~MTnTOZ0kkzKYuMX75OJkDALwR1jSJt-ZzUhujnqQhlDUZl14UmpGgP7Cv8JBrb-aNgrr~vxsLgFrOX5UBxuuRV9QSKQ7BfCbx~Kx1-RWtvk6WAKD89ZTwBz7TI0qYruRkgxiGpUFcsgNKb5TBllDtbTBxbRO3Tbf9CDtPIawUQ6Mu9y71p7-s7yBqy6nOhoEDoYs0s9rtX88NSUtj5abGby2GnxJ8mjrBx7ZzglB04nXf7fDNdD69O7pggLd7z6A__"
            alt="">
        </div>
        <div class="mt-4 p-2 text-center">
          <p class="font-bold text-xl ">Tasha Williams</p>
          <p>2018 Ford Fusion</p>
          <p class="mt-4">“AutoSensei made selling my 2018 Ford Fusion a breeze. Their comprehensive support and
            user-friendly platform ensured a seamless experience from start to finish.”
          </p>
        </div>

      </div>
      <div class="flex items-center max-w-sm  justify-center flex-col ">
        <div class="bg-[#6D53B0] w-full rounded-xl py-6 overflow-hidden relative flex justify-center items-center">
          <svg class=" absolute left-0 w-full top-0  " xmlns="http://www.w3.org/2000/svg" width="340" height="192"
            viewBox="0 0 340 192" fill="none">
            <path
              d="M119.964 -121.692L-5.1401 25.9068C-8.4269 29.7846 -2.83739 35.8206 1.35258 32.9423C56.8308 -5.16843 136.849 -50.0551 169.479 -31.6807C219.261 -3.6475 33.4169 71.5223 65.9444 110.958C91.9665 142.507 217.901 45.2908 277.615 -7.26062C235.312 52.6536 158.006 177.781 187.206 198.976C223.707 225.47 325.163 43.4544 350.889 60.055"
              stroke="#1A1A1A" stroke-width="44" />
          </svg>
          <img
            class=" w-[80px] h-[80px] 2xl:w-[141px] 2xl:h-[141px] relative object-cover rounded-full  border-2 md:border-8 border-base-black "
            src="https://s3-alpha-sig.figma.com/img/2640/82ed/d7b22b790fdc35a3b692925ec9eb096a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3d5Xq~U6w-TjPvsOirDk2m--Ih-SteE0YfywsCxopKGLCUo7RP9m6OQMFdX7ACBKHrSvTNc1pc6FBqkM1EzqgCmpi5ASVlfwNW0TvIRmqQnfZt78oh8zwHWyyHBoWc36xbxkztf484MVlEj5ZL5X2qx-tiyHaoVlc7kkVPVGmGv~jAShEOUhAdFkWricits-34avSNQpIqy~JkSap2wwKSlB-~wV1k~-vGkx1TRYE1BJiGWjwiSL74fD-0NCpaekqEorOKHPDDt-cvGYXguNMB5-bjQI2Kh5wg5cXuaD355B4wNbKjfCNQbTZ8V2xnIvQx8PYo9po6hgrRVuVu-vQ__"
            alt="">
        </div>
        <div class="mt-4 p-2 text-center">
          <p class="font-bold text-xl ">Alex Martinez</p>
          <p>2014 Chevrolet Traverse</p>
          <p class="mt-4">“Selling my Chevy Traverse through AutoSensei was a fantastic experience. Took me only 2
            days!”
          </p>
        </div>

      </div>
    </div>
  </div>
  <div class="py-12 bg-[#F3F4F5] 2xl:px-20">
    <h2 class="text-2xl md:text-4xl text-center  sm:p-5 leading-[40px] md:leading-[50px]"> <strong> What people are
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
          listing service attracted many potential dealers, and the platform's security measures ensured a safe and
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
                <img class="w-full h-full  rounded-full object-cover"
                  src="https://s3-alpha-sig.figma.com/img/27a7/10d3/ba7c44ae966f7be41665a9dc4c73b40e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XlL9xtIAFjRnQIu-ZiUVz~9Ckheae-bVEsN58boNtlxkaweBhtdXo1yCDVi4augyFmd6~IiTYqgihjgHbyXLHXU2kZG-weG1C9He041Lrev-6y55vakIfeSGx-K1HQLG2CGyK6b~JQAq8fk4MNpqizIxXCeQSZfcVvo9q9IZMmn7TODKzRWaANKv699WPWtEerdDPxr9EmBl9NnczLBeJVMMh0beqt9wzdfF3qJdHrYSt2UjWvuqLSyV96yVkpk2nF1uYKphXzaE0giCaP4w-UGMqwawaJGUxTZ17zUHugRoyAbpPDblZSqSPs8O5uearbrvAz5u6RCdgaGz8uV8sA__"
                  alt="">
              </div>
              <div>
                <p class=" font-semibold ">Sarah Johnson</p>
                <p>2017 Honda CR-V</p>
              </div>
            </div>
            <div>
              <img class="w-[50px] h-[50px]  rounded-full object-cover"
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
          listing service attracted many potential dealers, and the platform's security measures ensured a safe and
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
                <img class="w-full h-full rounded-full object-cover"
                  src="https://s3-alpha-sig.figma.com/img/1cc2/91f3/3b208f411ffbdc466ab33436d3882ea6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AHnfTx1~wclkqrHcaf23kiLp2H8CTNJj3rzpVyg8G2ye9kmxvK96ye3hAnJ9aEPG1TW-6hs8dyUwS6KVjXsxbI~UamZFkLxrxjdJ16N7PVo9t3aWySg7KBP0zxm75EM0bH4DCd6o2VnE1okBoq5FlHF~h-T3wWjbBkJXE-qOiEjUbj~xrQj5vsjLOQ0evmWVdGopkSyq2MwOPd3QtFbXKEx9OO17PIkqRVKgeDrUJPxfY3C1RnU5D-WCeZVoQ1E-cmqMQ4oc8ZfAdMIvQqg5qaeH-s76Kzd2BfqPd4KQaOX2FNVc2CLY1DehRQ0CnrmDLSBrRROsBEoV1TxIYcgxkA__"
                  alt="">
              </div>
              <div>
                <p class=" font-semibold ">Mike Thompson</p>
                <p>2016 Toyota Corolla</p>
              </div>
            </div>
            <div>
              <img class="w-[50px] h-[50px]  rounded-full object-cover"
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
          listing service attracted many potential dealers, and the platform's security measures ensured a safe and
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
                <img class=" w-full h-full    object-cover"
                  src="https://s3-alpha-sig.figma.com/img/c5d6/ba76/401966ca16f35b2f0d7bcca86ece8051?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSNpvI6hG6YF1-xed~2t8IRJAXkr2sQu9DWObsTGTHfkFqXPPtPavTsybzIdHt66c0SDbalHsrmG6k~50FXcyODdPkiG3bzbngNipjpyklqQtjLDVL4F1ikqVLjjaFgLhL~Fsb92f2guXO8tVyFNuonnfIm23xZE6TFdRR7YDSGm1EgbzXDHrTY0KS4-kA7R1QPZRZ6Vneq5wzz5-K1FBH4MNRFGwRa7el2QY7bXg2A68hHRe5ILDbcWPYcDgUKdcvJfghAPpBLZXl9GdvNTcKnhVnAVN2MOJBauUz6X6k21XVKOUpXCImM5EzvycmK8UE617~pnxEotC3M-5aDHKg__"
                  alt="">
              </div>
              <div>
                <p class=" font-semibold ">James Brown</p>
                <p>2017 Nissan Rogue</p>
              </div>
            </div>
            <div>
              <img class="w-[50px] h-[50px]  rounded-full object-cover"
                src="https://s3-alpha-sig.figma.com/img/1abf/395b/180c2cd1a0003ed5cc7d419a4e27ffcf?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FhytE0VSmxwsVP0o2N0-nSjUH3AU4pGWFpElvS90kq~-RbccSQziqbAtEkcI6cnUFe1~qO3LjzPEqKaUBriTqs6LuloD6nlgkgDM6rTW7dmynC4U5DS758LczaeJJn-f7oO~dBwGjDEnGNMVWfOP65BxHIz5gtPN6POJ2xyN2Dfiz3xXIQXINDcbTpxSouETbv6PNKE6V8HFNezb1MHO5ASK~9sce6iLbvkR7GRkqO8Tu6m5guvX1e7FJEnZ~bpNbxjU-M11yau3ZIoylWbLFf4DwKxAUQuYVDopRMNycpnN6GtVosoSdXgBnqys~IvKaIp9awAaj62ciJFboLQlVQ__"
                alt="">
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  <div class="bg-primary relative pt-8 sm:pt-20 sm:py-20">

    <div class="relative flex flex-col items-center">
      <Heanding :type="'h2'" :color="'text-base-black '" :msg="'Sell Your Vehicle'" />
      <p class=" text-xs md:text-lg font-semibold text-blue-dark text-center">No haggling. No obligation. No stress. No
        fees
      </p>
      <button id="sellToday" @click="goToHome()" class="btn-free mt-5 text-white group  relative z-[500]  bg-[#6D53B0]">
        <p class="font-bold transition-all ease-linear duration-600 group-hover:text-base-black ">Sell Your Car Today
        </p>
        <p class="btn-free_card">Free</p>
        <svg class=" absolute right-3 " mlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
          fill="none">
          <path
            d="M13.6715 12.0007L8.72168 7.05093L10.1359 5.63672L16.4999 12.0007L10.1359 18.3646L8.72168 16.9504L13.6715 12.0007Z"
            fill="black" />
        </svg>
      </button>
      <!--   <button id="sellToday" @click="goToHome()" class="btn mt-10 bg-base-black text-primary ">Sell Your Car
        Today</button> -->
      <div class="flex-col p-5 lg:pt-20  h-full  w-full z-50 flex lg:flex-row items-center justify-center gap-10 ">
        <div
          class="bg-white shadow-2xl w-[259px] h-[259px] rounded-lg px-12 py-6 flex flex-col items-center justify-center gap-4 ">
          <img class="w-[93px] h-[80px] object-cover " src="../assets/svg/arrow-social.svg" alt="">
          <p class="text-[#6D53B0] text-4xl font-['Nohemi']  font-semibold  ">100s</p>
          <p class=" font-semibold text-center ">of dealerships <br> compete for your car</p>
        </div>
        <div
          class="bg-white shadow-2xl w-[259px] h-[259px] rounded-lg px-12 py-6 flex flex-col items-center justify-center gap-4 ">
          <img class="w-[93px] h-[80px] object-cover  " src="../assets/svg/like-social.svg" alt="">
          <p class="text-[#6D53B0]  text-4xl font-['Nohemi'] font-semibold  ">3,000+</p>
          <p class=" font-semibold text-center ">happy <br>
            customers</p>
        </div>
        <div
          class="bg-white shadow-2xl w-[259px] h-[259px]   rounded-lg px-12 py-6 flex flex-col items-center justify-center gap-4 ">
          <img class="w-[93px] h-[80px] object-cover  " src="../assets/svg/chat-social.svg" alt="">
          <p class="text-[#6D53B0] text-4xl font-['Nohemi']  font-semibold  ">48hrs</p>
          <p class=" font-semibold text-center ">till it’s gone, paid, <br>
            and sold!</p>
        </div>
      </div>
    </div>

    <img class="relative mt-6 md:absolute w-full bottom-0 " src="@/assets/svg/bannerpeople.svg" alt="">
  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from "vue";
import IconCardFree from '../components/icons/home/IconCardFree.vue'
import IconPlay from '../components/icons/home/iconPlay.vue'
import iconCheckbox from '../components/icons/home/iconCheckbox.vue'
import { useRoute, useRouter } from 'vue-router'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useAuthStore } from "@/stores/auth";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import iconInstagram from '@/components/icons/redes/iconInstagram.vue'
import iconFacebook from '@/components/icons/redes/iconFacebook.vue'
import iconTwitter from '@/components/icons/redes/iconTwitter.vue'
import iconYoutube from '@/components/icons/redes/iconYoutube.vue'
import iconLinkedin from '@/components/icons/redes/iconLinkedin.vue'

import { WhyAutoSensei } from "../Json/Home";
import Heanding from "../components/Headings/Heanding.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    IconCardFree,
    IconPlay,
    iconCheckbox,
    Heanding,
    iconInstagram,
    iconFacebook,
    iconTwitter,
    iconYoutube,
    iconLinkedin,
  },
  setup() {
    let videoPlayer = ref()
    let isPlaying = ref(false)
    const route = useRoute();
    const router = useRouter();
    const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
    const authStore = useAuthStore()
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
    const play = () => {
      videoPlayer.value.play();
      isPlaying.value = true
    }
    const paused = () => {
      videoPlayer.value.pause();
      isPlaying.value = false
    }
    onMounted(() => {
      console.log('route', route)
      console.log('router', router)
      /*  let yourScript = document.createElement('script')
       yourScript.setAttribute('src', '//js.hs-scripts.com/45834146.js')
       yourScript.setAttribute('id', 'hs-script-loader')
       document.head.appendChild(yourScript) */
    })

    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      modules: [Navigation, Pagination, Scrollbar, A11y],
      IconCardFree,
      IconPlay,
      iconCheckbox,
      play,
      paused,
      isPlaying,
      WhyAutoSensei,
      videoPlayer,
      Heanding,
      authStore,
      goToHome,
      bucket
    };
  },
};
</script>
