<template>
  <div class="w-full pt-10 relative z-10 h-screen bg-blue-dark ">
    <div
      class="flex flex-col lg:grid lg:grid-cols-2  gap-20  p-5  pt-[1px]  md:pt-[150px]  2xl:pt-[200px] lg:px-12  !pb-0 h-full">
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

        <!--  <div class="flex gap-5 items-center">
          <a href="https://www.facebook.com/profile.php?id=61558003370710&mibextid=LQQJ4d" target="_blank"
            rel="noopener noreferrer">
            <iconFacebook :color="'#fff'" />
          </a>
          <a href="https://www.instagram.com/autosenseiauction/?igsh=MXA3MnNvc25pa2d0YQ%3D%3D&utm_source=qr"
            target="_blank" rel="noopener noreferrer">
            <iconInstagram :color="'#fff'" />
          </a>
          <a href="https://x.com/autosensei_inc?t=pAr1rD9pRasGjX_9S4_mGg&s=09" target="_blank"
            rel="noopener noreferrer">
            <iconTwitter :color="'#fff'" />
          </a>
            <a target="_blank" rel="noopener noreferrer">
            <iconYoutube :color="'#fff'" />
          </a>
          <a href="https://www.linkedin.com/company/autosensei/" target="_blank" rel="noopener noreferrer">
            <iconLinkedin :color="'#fff'" />
          </a>
        </div> -->
      </div>
      <div class="w-full h-full relative">
        <img class="absolute w-full h-full lg:h-[inherit] bottom-0" :src="bucket + 'public/svg/carji.svg'" alt="">
      </div>
    </div>

    <img class="absolute -z-10 bottom-0 w-full" :src="bucket + 'public/svg/vehiculo.svg'" alt="">
    <!--   <img class="absolute hidden md:block -z-10 top-0 right-0" :src="bucket + 'public/svg/lines/lineHome.svg'" alt=""> -->
    <svg class="absolute hidden  w-[30%]  md:block -z-10 top-0 right-0" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 481 603" fill="none">
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

    <div class="grid lg:grid-cols-2 gap-10 md:gap-20 p-5 md:pt-20 mb-14 lg:max-w-[80%] m-auto lg:pb-0 h-full">
      <div class="flex gap-14 order-2  md:order-1 flex-col">
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
      <div class="relative order-1  md:order-2 h-[80vh]">
        <div class="absolute -right-[100px]  -top-[80px] sm:-right-[230px]  xl:-right-[200px] xl:-top-[400px] -z-[1]">
          <svg class=" w-full  md:w-[400px] xl:w-[700px]  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 783"
            fill="none">
            <path
              d="M331.227 761.637L36.0208 413.348C28.265 404.197 41.4545 389.954 51.3416 396.746C182.253 486.676 371.073 592.595 448.069 549.237C565.54 483.087 127.004 305.709 203.759 212.653C265.163 138.208 562.329 367.607 703.237 491.613C603.415 350.233 420.996 54.9708 489.9 4.9565C576.03 -57.5614 815.436 371.941 876.14 332.768"
              stroke="#1A1A1A" stroke-width="66" />
          </svg>
        </div>
        <img class="w-full  h-full" src="@/assets/svg/parrnet-bg.svg" alt="">
      </div>

    </div>
    <div class="flex w-full justify-center flex-col gap-3 items-center">
      <p class="font-semibold">Want to know more?</p>
      <button class="btn-free bg-primary">
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
    <div class="w-full justify-center flex-col gap-5 items-center relative flex ">
      <p class="text-white text-xs md:text-base">Want to know more?</p>
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
  <div class="bg-primary relative sm:py-20">

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
    <svg class="relative mt-6 md:absolute w-full bottom-0 " viewBox="0 0 1440 362" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M1439.24 307.891H0V527.677H1439.24V307.891Z" fill="#A0BAB5" />
      <path opacity="0.22"
        d="M893.027 418.27C773.753 428.862 654.479 439.444 535.205 450.036C532.617 450.267 530.02 450.307 527.443 450.176C411.306 460.488 295.178 470.789 179.041 481.101C174.156 481.541 169.221 481.321 164.386 480.449C109.594 470.579 54.7921 460.708 0 450.848V379.68L205.623 356.372C206.502 356.272 207.401 356.322 208.26 356.522C216.741 358.516 225.212 360.51 233.693 362.505L561.787 325.307C562.666 325.207 563.555 325.257 564.414 325.458C674.318 351.311 784.212 377.155 894.116 403.009C902.657 405.023 901.768 417.489 893.027 418.27Z"
        fill="black" />
      <path opacity="0.31"
        d="M602.975 235.231C602.695 235.241 602.425 235.241 602.146 235.251C595.812 235.381 589.479 235.511 583.146 235.652C576.972 230.591 570.799 224.699 564.855 217.835C539.202 188.203 530.441 154.754 527.744 130.253C529.432 130.183 531.141 130.123 532.849 130.063C533.268 130.043 533.688 130.023 534.117 130.013C538.443 129.872 542.728 129.792 546.964 129.752C551.089 144.573 556.993 161.007 565.464 178.182C576.962 201.481 590.338 220.38 602.975 235.231Z"
        fill="#EFF0EB" />
      <path
        d="M913.037 122.226C912.697 121.856 912.358 121.485 912.008 121.124C912.008 122.387 911.848 124.441 911.049 126.766C911.029 126.746 911.009 126.716 910.989 126.696C908.951 126.846 907.493 127.407 906.554 127.878C902.638 129.852 901.579 133.339 896.804 140.805C895.406 142.989 894.197 144.713 893.428 145.795C894.656 146.286 896.494 146.877 898.772 147.118C900.211 147.268 902.968 147.569 905.515 146.687C910.749 144.883 914.865 138.24 913.706 132.167C913.407 130.584 912.787 129.271 912.158 128.269C913.397 125.523 913.117 122.878 913.027 122.216L913.037 122.226Z"
        fill="#34823B" />
      <path
        d="M913.037 122.226C912.697 121.856 912.358 121.485 912.008 121.124C912.008 122.387 911.848 124.441 911.049 126.766C911.029 126.746 911.009 126.716 910.989 126.696C908.951 126.846 907.493 127.407 906.554 127.878C902.638 129.852 901.579 133.339 896.804 140.805C895.406 142.989 894.197 144.713 893.428 145.795C894.656 146.286 896.494 146.877 898.772 147.118C900.211 147.268 902.968 147.569 905.515 146.687C910.749 144.883 914.865 138.24 913.706 132.167C913.407 130.584 912.787 129.271 912.158 128.269C913.397 125.523 913.117 122.878 913.027 122.216L913.037 122.226Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path opacity="0.44"
        d="M957.48 243.99C957.42 265.585 957.35 287.169 957.28 308.764H870.232V149.674C862.5 148.973 857.875 148.091 857.875 147.119V138.962C857.875 136.707 883.008 134.874 914.016 134.874C919.25 134.874 924.315 134.924 929.12 135.024V243.99H957.48Z"
        fill="#34823B" />
      <path opacity="0.27"
        d="M929.119 84.8373V243.987H1016.18L1016.69 78.2637C987.498 80.4582 958.308 82.6428 929.119 84.8373Z"
        fill="#34823B" />
      <path opacity="0.27"
        d="M1016.69 78.2637C1025.44 82.8131 1034.18 87.3626 1042.93 91.912C1043.36 133.508 1043.79 175.094 1044.23 216.691C1034.88 225.79 1025.53 234.888 1016.18 243.987L1016.69 78.2637Z"
        fill="#34823B" />
      <path opacity="0.19"
        d="M988.699 92.5638C993.234 91.8924 997.77 91.2109 1002.3 90.5396C1002.19 98.967 1002.09 107.384 1001.97 115.812C997.71 116.483 993.454 117.165 989.199 117.836C989.029 109.409 988.859 100.991 988.699 92.5638Z"
        fill="white" />
      <path opacity="0.19"
        d="M951.865 144.832C956.4 144.16 960.936 143.479 965.471 142.808C965.361 151.235 965.251 159.653 965.131 168.08C960.876 168.751 956.62 169.433 952.365 170.104C952.195 161.677 952.025 153.259 951.865 144.832Z"
        fill="white" />
      <path opacity="0.19"
        d="M860.561 190.458C865.096 189.786 869.631 189.105 874.166 188.434C874.056 196.861 873.946 205.279 873.827 213.706C869.571 214.377 865.316 215.059 861.06 215.73C860.89 207.303 860.72 198.885 860.561 190.458Z"
        fill="white" />
      <path
        d="M776.452 332.982C763.685 329.685 746.294 335.758 745.045 345.137C744.226 351.28 750.569 356.962 754.355 359.317C764.065 365.359 776.871 361.952 783.744 355.158C785.262 353.655 790.657 348.324 789.348 342.552C787.85 335.928 778.599 333.543 776.452 332.982Z"
        fill="#0B1107" />
      <path
        d="M1040.92 362.524C1039.22 376.002 1031.81 386.213 1022.55 386.574C1016.45 386.824 1010.35 387.065 1004.27 387.305C1015.28 386.864 1023.65 372.554 1022.97 355.339C1022.31 338.674 1013.4 325.397 1002.85 324.966C1008.6 324.725 1014.35 324.485 1020.08 324.244C1020.4 324.244 1020.71 324.224 1021.02 324.244C1028.1 329.525 1033.75 338.845 1035.81 350.118C1036.51 353.936 1036.74 357.694 1036.56 361.281L1040.92 362.534V362.524Z"
        fill="#383A37" />
      <path
        d="M1004.27 387.294C1001.28 387.415 998.406 386.503 995.788 384.759C988.766 380.079 983.591 369.457 983.102 356.921C982.762 348.143 984.76 340.126 988.276 334.314C988.276 334.284 988.306 334.254 988.326 334.224C991.703 328.693 996.448 325.185 1001.81 324.965C1012.82 324.524 1022.3 338.122 1022.98 355.338C1023.66 372.554 1015.28 386.863 1004.27 387.294Z"
        fill="#4F514E" />
      <path
        d="M1004.27 387.294C1001.29 387.415 998.409 386.503 995.791 384.759C996.96 385.14 999.018 385.651 1001.54 385.34C1001.54 385.34 1003.65 385.08 1005.7 384.098C1008.15 382.925 1012.58 379.107 1015.26 370.419C1019.62 356.29 1016.79 337.521 1006.85 330.266C1003.69 327.961 1001.08 327.731 1000.3 327.691C993.803 327.34 989.108 333.232 988.279 334.314C988.279 334.284 988.309 334.254 988.329 334.224C991.706 328.693 996.451 325.185 1001.81 324.965C1012.82 324.524 1022.3 338.122 1022.98 355.338C1023.66 372.554 1015.28 386.863 1004.27 387.294Z"
        fill="#828282" />
      <path
        d="M1001.8 324.956C990.795 325.396 982.424 339.706 983.103 356.922C983.782 374.138 993.262 387.736 1004.27 387.295"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1021.46 369.196C1022.61 364.987 1023.16 360.277 1022.97 355.327C1022.71 348.774 1021.17 342.731 1018.77 337.801"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1006.01 367.654C1005.24 368.105 1004.4 368.365 1003.52 368.395C1001.08 368.485 998.826 366.842 997.288 364.166C996.079 362.102 995.3 359.397 995.18 356.43C995.06 353.474 995.629 350.729 996.648 348.574C997.977 345.778 1000.09 343.944 1002.54 343.854C1003.42 343.824 1004.27 344.005 1005.08 344.405C1008.25 345.919 1010.66 350.418 1010.88 355.819C1011.1 361.21 1009.05 365.89 1006.01 367.664V367.654Z"
        fill="#2E3D25" />
      <path
        d="M1006.01 367.654C1005.24 368.105 1004.4 368.365 1003.52 368.395C1001.08 368.485 998.826 366.842 997.288 364.166C996.079 362.102 995.3 359.397 995.18 356.43C995.06 353.474 995.629 350.729 996.648 348.574C997.977 345.778 1000.09 343.944 1002.54 343.854C1003.42 343.824 1004.27 344.005 1005.08 344.405C1008.25 345.919 1010.66 350.418 1010.88 355.819C1011.1 361.21 1009.05 365.89 1006.01 367.664V367.654Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1002.84 324.955C1008.58 324.715 1014.34 324.474 1020.07 324.234C1020.39 324.234 1020.7 324.213 1021.01 324.234C1028.09 329.514 1033.74 338.834 1035.8 350.107C1036.49 353.925 1036.72 357.683 1036.54 361.27L1040.91 362.523C1039.21 376.001 1031.8 386.212 1022.54 386.573C1016.44 386.823 1010.34 387.064 1004.26 387.304"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1006.01 367.653C1005.86 367.653 1005.72 367.653 1005.57 367.653C1002.32 367.653 999.385 366.32 997.287 364.156C995.23 362.062 993.961 359.186 993.961 356.009C993.961 353.173 994.97 350.578 996.648 348.564C998.676 346.119 1001.69 344.525 1005.08 344.395C1008.25 345.908 1010.66 350.407 1010.88 355.809C1011.1 361.2 1009.05 365.88 1006.01 367.653Z"
        fill="#0E5B4C" />
      <path
        d="M1006.01 367.653C1005.86 367.653 1005.72 367.653 1005.57 367.653C1002.32 367.653 999.385 366.32 997.287 364.156C995.23 362.062 993.961 359.186 993.961 356.009C993.961 353.173 994.97 350.578 996.648 348.564C998.676 346.119 1001.69 344.525 1005.08 344.395C1008.25 345.908 1010.66 350.407 1010.88 355.809C1011.1 361.2 1009.05 365.88 1006.01 367.653Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1017.56 328.493C1017.91 328.814 1018.63 329.485 1019.44 330.427C1030.79 343.574 1029.43 373.496 1017.78 382.615C1017.04 383.197 1016.4 383.587 1016.08 383.768"
        stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1022.37 328.132C1022.72 328.453 1023.44 329.124 1024.25 330.066C1035.6 343.214 1034.24 373.136 1022.59 382.255C1021.84 382.836 1021.2 383.227 1020.88 383.407"
        stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1026.49 382.855C1026.81 382.674 1027.45 382.284 1028.2 381.702C1033.19 377.785 1036.28 370.079 1037.31 361.481"
        stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1004.71 368.745C1003.94 369.196 1003.1 369.457 1002.22 369.487C999.787 369.577 997.529 367.934 995.991 365.258C994.782 363.194 994.003 360.488 993.883 357.522C993.763 354.566 994.333 351.82 995.351 349.666C996.68 346.87 998.798 345.036 1001.25 344.946C1002.12 344.916 1002.97 345.096 1003.78 345.497C1006.95 347.01 1009.37 351.51 1009.59 356.911C1009.81 362.302 1007.75 366.982 1004.71 368.755V368.745Z"
        fill="#2E3D25" />
      <path
        d="M1004.71 368.745C1003.94 369.196 1003.1 369.457 1002.22 369.487C999.787 369.577 997.529 367.934 995.991 365.258C994.782 363.194 994.003 360.488 993.883 357.522C993.763 354.566 994.333 351.82 995.351 349.666C996.68 346.87 998.798 345.036 1001.25 344.946C1002.12 344.916 1002.97 345.096 1003.78 345.497C1006.95 347.01 1009.37 351.51 1009.59 356.911C1009.81 362.302 1007.75 366.982 1004.71 368.755V368.745Z"
        stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1004.71 368.746C1004.56 368.746 1004.42 368.746 1004.27 368.746C1001.02 368.746 998.086 367.413 995.989 365.249C993.931 363.154 992.662 360.278 992.662 357.102C992.662 354.266 993.671 351.671 995.349 349.656C997.377 347.211 1000.39 345.618 1003.78 345.488C1006.95 347.001 1009.36 351.5 1009.58 356.901C1009.8 362.293 1007.75 366.972 1004.71 368.746Z"
        fill="#E5E4D5" />
      <path
        d="M1004.71 368.746C1004.56 368.746 1004.42 368.746 1004.27 368.746C1001.02 368.746 998.086 367.413 995.989 365.249C993.931 363.154 992.662 360.278 992.662 357.102C992.662 354.266 993.671 351.671 995.349 349.656C997.377 347.211 1000.39 345.618 1003.78 345.488C1006.95 347.001 1009.36 351.5 1009.58 356.901C1009.8 362.293 1007.75 366.972 1004.71 368.746Z"
        stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1092.13 330.316V340.557C1092.13 342.742 1091.88 344.876 1091.41 346.931C1088.72 358.805 1078.61 367.954 1066.04 369.006L837.006 388.206C830.143 388.777 823.22 388.106 816.597 386.212L796.059 380.35C796.239 376.762 796.009 373.005 795.31 369.187C791.783 349.937 777.818 336.369 764.103 338.894C753.454 340.848 746.092 351.921 744.973 365.78L707.922 355.208V193.242C745.292 186.879 793.262 182.439 848.603 186.568C885.454 189.314 918.05 195.296 945.601 202.16C960.415 227.914 975.22 253.657 990.034 279.41C1017.2 287.227 1044.37 295.053 1071.53 302.879C1073.9 303.561 1076.1 304.523 1078.15 305.745C1079.43 306.497 1080.65 307.348 1081.79 308.29C1088.19 313.601 1092.14 321.598 1092.14 330.316H1092.13Z"
        fill="#1F90EC" />
      <path
        d="M945.601 202.16C917.56 200.086 886.283 199.204 852.289 200.527C816.487 201.93 783.792 205.548 754.742 210.177C751.376 210.718 747.94 210.458 744.673 209.476C739.419 207.892 733.924 206.389 728.19 204.976C721.218 203.273 714.435 201.86 707.922 200.697V193.232C745.292 186.879 793.262 182.44 848.603 186.568C885.454 189.314 918.05 195.296 945.601 202.16Z"
        fill="#ACDAF9" />
      <path
        d="M840.063 350.618C839.493 353.013 838.434 356.31 836.257 359.917C836.366 359.286 836.496 358.324 836.436 357.162C835.727 343.794 811.712 334.675 783.562 325.476C764.582 319.283 739.059 311.527 707.912 303.731V295.754C766.37 314.523 796.409 323.332 806.948 325.306C816.008 326.999 824.239 331.929 833.26 333.853C834.588 334.134 837.435 334.705 839.313 337.05C842.36 340.848 840.942 346.88 840.073 350.608L840.063 350.618Z"
        fill="#ACDAF9" />
      <path
        d="M1081.78 308.291C1004.35 313.161 926.922 318.031 849.494 322.901C849.214 322.601 848.785 322.14 848.255 321.619C842.511 315.897 836.468 313.312 832.951 311.849C826.109 308.993 808.108 303.261 783.344 297.88C856.317 293.1 929.28 288.31 1002.26 283.53C1027.56 290.945 1052.85 298.351 1078.14 305.756C1079.42 306.507 1080.64 307.359 1081.78 308.301V308.291Z"
        fill="#ACDAF9" />
      <path
        d="M925.463 328.432C954.902 326.188 984.341 323.943 1013.78 321.698C1014.57 326.638 1015.36 331.569 1016.15 336.509C984.461 339.615 952.765 342.732 921.078 345.838C922.537 340.036 924.005 334.234 925.463 328.432Z"
        fill="#383A37" />
      <path
        d="M925.463 328.432C954.902 326.188 984.341 323.943 1013.78 321.698C1014.57 326.638 1015.36 331.569 1016.15 336.509C984.461 339.615 952.765 342.732 921.078 345.838C922.537 340.036 924.005 334.234 925.463 328.432Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1091.4 346.931C1088.71 358.806 1078.6 367.955 1066.03 369.007L836.996 388.207C830.133 388.778 823.21 388.107 816.587 386.213L796.049 380.351C796.229 376.763 795.999 373.005 795.3 369.188C791.773 349.938 777.808 336.37 764.093 338.895C753.444 340.849 746.082 351.922 744.963 365.781L707.922 355.209V344.236C718.171 347.222 728.43 350.208 738.679 353.204C739.349 351.321 744.144 338.394 757.3 333.884C773.762 328.233 787.778 341.059 789.356 342.552C797.987 350.729 799.825 360.981 800.284 364.468C809.435 366.963 818.585 369.448 827.735 371.943C872.278 370.6 919.608 367.725 969.376 362.774C1012.2 358.505 1052.92 353.104 1091.4 346.931Z"
        fill="#067CCC" />
      <path
        d="M742.126 216.32C742.635 216.42 743.145 216.53 743.644 216.631C745.742 217.061 747.34 218.785 747.62 220.919C751.996 253.457 756.361 285.994 760.736 318.532C761.306 322.751 760.427 327.03 758.259 330.677C751.676 341.76 745.103 352.843 738.52 363.936C728.321 361.02 718.111 358.114 707.912 355.208V209.796C719.21 211.781 730.608 213.955 742.126 216.32Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1092.13 330.316V340.557C1092.13 355.398 1080.79 367.764 1066.04 368.996L837.006 388.196C830.143 388.767 823.22 388.096 816.597 386.202L796.059 380.34C796.239 376.752 796.009 372.995 795.31 369.177C791.783 349.927 777.818 336.359 764.103 338.884C753.454 340.838 746.092 351.911 744.973 365.77L707.922 355.208V193.242C745.292 186.879 793.262 182.439 848.603 186.568C885.454 189.314 918.05 195.296 945.601 202.16C960.415 227.914 975.22 253.657 990.034 279.41C1017.2 287.227 1044.37 295.053 1071.53 302.879C1083.72 306.386 1092.14 317.58 1092.14 330.316H1092.13Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M742.695 290.974C731.107 288.058 719.51 285.152 707.922 282.236V209.806C715.903 211.319 723.885 212.852 731.867 214.366C734.084 214.786 736.302 215.207 738.52 215.628C739.718 215.859 740.937 216.089 742.136 216.32C744.004 239.768 745.862 263.237 747.74 286.686C747.96 289.471 745.392 291.646 742.695 290.964V290.974Z"
        fill="#383A37" />
      <path opacity="0.31"
        d="M721.547 213.784C719.669 221.861 717.891 230.188 716.223 238.756C713.486 252.725 711.278 266.263 709.5 279.29L707.932 279V226.09C709.92 221.4 712.137 217.171 714.425 213.394L721.557 213.794L721.547 213.784Z"
        fill="#EFF0EB" />
      <path opacity="0.31"
        d="M738.719 214.747C737.131 221.741 735.612 228.926 734.174 236.282C731.047 252.295 728.6 267.727 726.692 282.477L715.773 280.453C717.631 264.36 720.119 247.565 723.375 230.139C724.384 224.687 725.453 219.326 726.562 214.065L738.719 214.737V214.747Z"
        fill="#EFF0EB" />
      <path
        d="M742.126 216.32C743.994 239.779 745.862 263.227 747.73 286.686C747.95 289.472 745.383 291.646 742.685 290.975C731.098 288.059 719.51 285.143 707.912 282.237V209.796C719.32 211.971 730.718 214.145 742.126 216.32Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M754.965 221.521C759.391 244.108 763.816 266.684 768.241 289.271C768.751 291.867 771.098 293.69 773.736 293.54C839.616 289.742 905.486 285.944 971.367 282.157C975.253 281.936 977.57 277.707 975.692 274.29C965.673 256.133 955.663 237.985 945.644 219.827C943.177 215.348 938.691 212.362 933.617 211.781C904.917 208.504 871.912 206.66 835.46 207.993C807.7 209.005 782.207 211.71 759.351 215.248C756.384 215.709 754.386 218.555 754.965 221.511V221.521Z"
        fill="#0B1107" />
      <path
        d="M965.352 277.947C923.835 280.142 882.319 282.336 840.793 284.531C837.307 284.711 833.82 284.902 830.324 285.082C825.619 285.332 820.904 285.583 816.199 285.833C807.508 286.294 798.817 286.745 790.117 287.216C786.401 287.407 782.665 287.607 778.948 287.798C776.461 287.928 774.253 286.345 773.774 284.1C769.598 264.559 765.423 245.009 761.247 225.468C760.708 222.903 762.576 220.448 765.383 220.037C766.931 219.817 768.489 219.596 770.078 219.386C775.492 218.654 781.056 217.973 786.77 217.341C790.037 216.991 793.343 216.65 796.7 216.329C799.806 216.049 802.933 215.768 806.12 215.518C816.099 214.716 826.458 214.115 837.177 213.754C871.551 212.602 902.688 214.195 929.749 217.031C934.534 217.532 938.76 220.117 941.087 223.995C950.537 239.708 959.977 255.42 969.437 271.133C971.215 274.089 969.028 277.737 965.352 277.937V277.947Z"
        fill="#383A37" />
      <path
        d="M754.965 221.521C759.391 244.108 763.816 266.684 768.241 289.271C768.751 291.867 771.098 293.69 773.736 293.54C839.616 289.742 905.486 285.944 971.367 282.157C975.253 281.936 977.57 277.707 975.692 274.29C965.673 256.133 955.663 237.985 945.644 219.827C943.177 215.348 938.691 212.362 933.617 211.781C904.917 208.504 871.912 206.66 835.46 207.993C807.7 209.005 782.207 211.71 759.351 215.248C756.384 215.709 754.386 218.555 754.965 221.511V221.521Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M758.42 267.606C759.029 268.237 760.108 269.54 760.608 271.504C761.447 274.831 759.978 277.546 759.619 278.167C756.332 278.568 753.046 278.979 749.749 279.38C749.499 275.813 749.26 272.235 749.01 268.668C752.146 268.317 755.273 267.957 758.41 267.606H758.42Z"
        fill="#067CCC" />
      <path
        d="M758.42 267.606C759.029 268.237 760.108 269.54 760.608 271.504C761.447 274.831 759.978 277.546 759.619 278.167C756.332 278.568 753.046 278.979 749.749 279.38C749.499 275.813 749.26 272.235 749.01 268.668C752.146 268.317 755.273 267.957 758.41 267.606H758.42Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M751.417 276.074C751.327 276.966 751.227 277.747 751.147 278.348C750.648 282.246 750.228 284.16 749.179 285.613C746.033 289.952 739.729 289.922 727.243 289.702C716.734 289.512 711.429 289.351 708.912 286.125C707.384 284.14 707.264 280.803 707.264 274.44V272.727C707.264 266.434 708.223 263.888 710.051 262.516C710.95 261.844 711.839 261.624 712.358 261.493C722.308 259.098 735.374 259.289 742.187 260.401C743.505 260.622 745.533 261.022 747.631 262.455C747.631 262.455 748.28 262.856 748.74 263.327C751.847 266.474 751.767 272.296 751.407 276.094L751.417 276.074Z"
        fill="#1F90EC" />
      <path
        d="M751.417 276.074C751.327 276.966 751.227 277.747 751.147 278.348C750.648 282.246 750.228 284.16 749.179 285.613C746.033 289.952 739.729 289.922 727.243 289.701C716.734 289.511 711.429 289.351 708.912 286.124C707.384 284.14 707.264 280.803 707.264 274.44C710.46 276.735 713.337 278.068 715.365 278.849C727.892 283.719 739.659 280.152 744.564 278.669C747.221 277.867 749.519 276.946 751.417 276.074Z"
        fill="#067CCC" />
      <path
        d="M707.264 272.727C707.264 266.424 708.233 263.879 710.051 262.506C710.95 261.834 711.839 261.614 712.359 261.484C722.308 259.089 735.384 259.279 742.187 260.391C743.506 260.612 745.543 261.013 747.631 262.446C747.631 262.446 748.281 262.846 748.74 263.307C752.566 267.196 751.547 275.152 751.138 278.349C750.638 282.237 750.219 284.161 749.17 285.614C746.033 289.953 739.72 289.923 727.233 289.702C716.724 289.512 711.42 289.351 708.912 286.125C707.234 283.98 707.254 280.223 707.254 272.727H707.264Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M707.922 216.62C719.52 218.935 731.118 221.249 742.705 223.564C742.516 221.149 742.326 218.734 742.126 216.329C730.718 214.155 719.32 211.981 707.912 209.806V216.63L707.922 216.62Z"
        fill="#067CCC" />
      <path
        d="M707.922 216.62C719.52 218.935 731.118 221.249 742.705 223.564C742.516 221.149 742.326 218.734 742.126 216.329C730.718 214.155 719.32 211.981 707.912 209.806V216.63L707.922 216.62Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M855.037 329.074C876.854 327.461 898.671 325.857 920.488 324.244C924.893 323.923 928.749 327.26 928.989 331.679C929.059 332.952 929.039 334.325 928.899 335.778C928.749 337.321 928.47 338.734 928.13 340.017C927.271 343.263 924.414 345.588 921.077 345.839L856.436 350.759C852.41 351.07 848.804 348.284 848.034 344.306C847.925 343.754 847.835 343.173 847.755 342.582C847.455 340.197 847.505 338.013 847.725 336.079C848.164 332.291 851.231 329.355 855.027 329.074H855.037Z"
        fill="white" />
      <path
        d="M855.037 329.074C876.854 327.461 898.671 325.857 920.488 324.244C924.893 323.923 928.749 327.26 928.989 331.679C929.059 332.952 929.039 334.325 928.899 335.778C928.749 337.321 928.47 338.734 928.13 340.017C927.271 343.263 924.414 345.588 921.077 345.839L856.436 350.759C852.41 351.07 848.804 348.284 848.034 344.306C847.925 343.754 847.835 343.173 847.755 342.582C847.455 340.197 847.505 338.013 847.725 336.079C848.164 332.291 851.231 329.355 855.027 329.074H855.037Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1017.37 314.975C1036 313.903 1054.64 312.831 1073.27 311.768C1077.03 311.548 1080.22 314.985 1080.3 319.414C1080.32 320.687 1080.27 322.06 1080.11 323.503C1079.94 325.046 1079.66 326.449 1079.33 327.721C1078.5 330.948 1076 333.193 1073.16 333.363L1017.95 336.68C1014.5 336.89 1011.51 334.024 1010.97 330.026C1010.89 329.465 1010.83 328.894 1010.79 328.293C1010.6 325.908 1010.71 323.713 1010.95 321.789C1011.43 318.011 1014.14 315.155 1017.38 314.965L1017.37 314.975Z"
        fill="white" />
      <path
        d="M1017.37 314.975C1036 313.903 1054.64 312.831 1073.27 311.768C1077.03 311.548 1080.22 314.985 1080.3 319.414C1080.32 320.687 1080.27 322.06 1080.11 323.503C1079.94 325.046 1079.66 326.449 1079.33 327.721C1078.5 330.948 1076 333.193 1073.16 333.363L1017.95 336.68C1014.5 336.89 1011.51 334.024 1010.97 330.026C1010.89 329.465 1010.83 328.894 1010.79 328.293C1010.6 325.908 1010.71 323.713 1010.95 321.789C1011.43 318.011 1014.14 315.155 1017.38 314.965L1017.37 314.975Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M770.398 314.503C786.012 319.122 801.625 323.732 817.239 328.351" stroke="#2D2226" stroke-width="2"
        stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M710.609 296.827C723.775 300.715 736.932 304.612 750.098 308.5" stroke="#2D2226" stroke-width="2"
        stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M800.425 381.603C798.727 395.081 791.315 405.292 782.055 405.653C775.951 405.903 769.858 406.144 763.774 406.384C774.782 405.943 783.153 391.634 782.474 374.418C781.815 357.753 772.904 344.476 762.355 344.045C768.099 343.804 773.853 343.564 779.587 343.323C779.907 343.323 780.217 343.303 780.526 343.323C787.609 348.604 793.253 357.924 795.311 369.197C796.01 373.015 796.24 376.773 796.06 380.36L800.425 381.613V381.603Z"
        fill="#383A37" />
      <path
        d="M763.766 406.374C760.779 406.494 757.902 405.582 755.284 403.839C748.262 399.159 743.087 388.537 742.598 376.001C742.258 367.223 744.256 359.206 747.772 353.394C747.772 353.364 747.802 353.334 747.822 353.304C751.199 347.772 755.944 344.265 761.308 344.045C772.316 343.604 781.796 357.202 782.476 374.418C783.155 391.633 774.774 405.943 763.766 406.374Z"
        fill="#4F514E" />
      <path
        d="M763.763 406.374C760.776 406.494 757.899 405.582 755.282 403.839C756.45 404.219 758.508 404.73 761.026 404.42C761.026 404.42 763.143 404.159 765.191 403.177C767.639 402.005 772.074 398.187 774.751 389.499C779.106 375.37 776.279 356.601 766.34 349.346C763.183 347.041 760.566 346.81 759.787 346.77C753.294 346.42 748.599 352.312 747.77 353.394C747.77 353.364 747.799 353.334 747.819 353.304C751.196 347.772 755.941 344.265 761.305 344.045C772.314 343.604 781.794 357.202 782.473 374.418C783.152 391.633 774.771 405.943 763.763 406.374Z"
        fill="#828282" />
      <path
        d="M761.307 344.035C750.299 344.476 741.928 358.786 742.607 376.001C743.286 393.217 752.766 406.815 763.775 406.374"
        stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M780.965 388.287C782.114 384.078 782.663 379.369 782.473 374.418C782.213 367.865 780.675 361.822 778.268 356.892"
        stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M765.512 386.743C764.743 387.194 763.904 387.454 763.025 387.485C760.588 387.575 758.33 385.931 756.792 383.256C755.583 381.191 754.804 378.486 754.684 375.52C754.564 372.564 755.133 369.818 756.152 367.663C757.481 364.868 759.599 363.034 762.046 362.944C762.925 362.914 763.774 363.094 764.583 363.495C767.75 365.008 770.167 369.507 770.387 374.908C770.607 380.3 768.549 384.979 765.512 386.753V386.743Z"
        stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M762.344 344.034C768.088 343.794 773.842 343.553 779.576 343.313C779.895 343.313 780.205 343.293 780.515 343.313C787.597 348.594 793.241 357.913 795.299 369.186C795.998 373.004 796.228 376.762 796.048 380.349L800.414 381.602C798.715 395.08 791.303 405.291 782.043 405.652C775.939 405.902 769.846 406.143 763.762 406.383"
        stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M777.069 347.572C777.418 347.892 778.137 348.564 778.947 349.506C790.295 362.653 788.936 392.575 777.288 401.694C776.539 402.275 775.9 402.666 775.58 402.846"
        stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M781.875 347.211C782.225 347.532 782.944 348.203 783.753 349.145C795.101 362.293 793.743 392.215 782.095 401.334C781.346 401.915 780.706 402.306 780.387 402.486"
        stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1020.64 349.342L926.251 357.243C924.288 357.407 922.83 359.137 922.994 361.105C923.158 363.074 924.881 364.537 926.844 364.373L1021.24 356.472C1023.2 356.307 1024.66 354.578 1024.49 352.609C1024.33 350.64 1022.61 349.178 1020.64 349.342Z"
        fill="#383A37" />
      <path
        d="M912.515 358.39L886.294 360.585C884.331 360.749 882.873 362.478 883.037 364.447C883.201 366.416 884.924 367.879 886.887 367.715L913.108 365.52C915.071 365.355 916.529 363.626 916.366 361.657C916.202 359.689 914.478 358.226 912.515 358.39Z"
        fill="#A8A385" />
      <path
        d="M1062.53 345.84L1036.31 348.035C1034.35 348.199 1032.89 349.928 1033.06 351.897C1033.22 353.866 1034.94 355.329 1036.91 355.164L1063.13 352.969C1065.09 352.805 1066.55 351.076 1066.39 349.107C1066.22 347.138 1064.5 345.675 1062.53 345.84Z"
        fill="#A8A385" />
      <path
        d="M912.515 358.39L886.294 360.585C884.331 360.749 882.873 362.478 883.037 364.447C883.201 366.416 884.924 367.879 886.887 367.715L913.108 365.52C915.071 365.355 916.529 363.626 916.366 361.657C916.202 359.689 914.478 358.226 912.515 358.39Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1062.53 345.84L1036.31 348.035C1034.35 348.199 1032.89 349.928 1033.06 351.897C1033.22 353.866 1034.94 355.329 1036.91 355.164L1063.13 352.969C1065.09 352.805 1066.55 351.076 1066.39 349.107C1066.22 347.138 1064.5 345.675 1062.53 345.84Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M830.674 331.408C831.663 331.598 836.368 332.63 839.305 337.059C843.43 343.252 840.224 350.256 840.054 350.617"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M886.204 296.827C898.381 301.576 910.568 306.326 922.745 311.086C925.043 311.977 924.024 315.434 921.617 314.943C918.41 314.292 915.153 313.581 911.837 312.799C895.075 308.841 880.061 303.861 866.904 298.6C864.877 297.789 865.406 294.783 867.584 294.712L872.868 294.542C877.423 294.402 881.949 295.173 886.194 296.827H886.204Z"
        fill="#FFFAE6" />
      <path
        d="M919.569 292.428C923.245 292.177 926.911 291.937 930.587 291.686C933.654 291.486 936.71 292.117 939.438 293.53C950.596 299.302 961.764 305.083 972.922 310.855C974.541 311.697 973.512 314.152 971.783 313.581C954.222 307.789 936.661 302.007 919.089 296.215C917.061 295.544 917.441 292.568 919.569 292.418V292.428Z"
        fill="#FFFAE6" />
      <path opacity="0.31"
        d="M840.794 284.531C837.308 284.712 833.822 284.902 830.325 285.083C826.29 281.926 822.204 278.158 818.318 273.659C800.867 253.497 797.2 230.229 796.711 216.34C799.818 216.059 802.944 215.779 806.131 215.528C808.429 225.86 812.245 238.135 818.668 251.172C825.451 264.921 833.382 275.964 840.804 284.531H840.794Z"
        fill="#EFF0EB" />
      <path opacity="0.31"
        d="M816.199 285.835C807.508 286.296 798.817 286.746 790.117 287.217C784.003 278.65 778.019 267.717 774.163 254.289C770.377 241.132 769.638 229.107 770.078 219.397C775.492 218.665 781.056 217.984 786.77 217.353C787.13 224.157 788.179 231.722 790.366 239.759C795.831 259.821 806.289 275.052 816.199 285.825V285.835Z"
        fill="#EFF0EB" />
      <path
        d="M429.475 291.498C421.773 294.384 407.668 299.655 404.562 312.391C404.222 313.794 402.394 321.25 406.42 327.312C415.37 340.79 443.331 332.453 445.458 331.792C453.989 329.146 467.705 324.897 470.002 313.514C471.95 303.884 464.838 293.472 456.247 289.264C447.236 284.854 438.396 288.161 429.475 291.498Z"
        fill="#0B1107" />
      <path
        d="M664.791 285.956C664.511 285.916 664.231 285.876 663.952 285.836C663.222 285.746 662.493 285.685 661.754 285.655C663.882 285.565 666.019 285.475 668.147 285.385C670.405 285.776 672.862 286.457 675.419 287.529C683.661 290.996 690.154 299.945 694.749 312.832C694.749 312.842 694.749 312.852 694.749 312.862C694.749 312.872 694.759 312.892 694.769 312.912C694.699 312.762 694.629 312.621 694.559 312.471C694.12 311.559 693.67 310.677 693.211 309.805C689.704 303.212 685.409 297.68 680.584 293.592C678.876 292.149 677.108 290.876 675.29 289.804C674.66 289.423 674.031 289.082 673.392 288.762C673.102 288.621 672.802 288.481 672.503 288.341C672.193 288.201 671.883 288.06 671.564 287.92C671.244 287.79 670.934 287.659 670.615 287.529C670.295 287.399 669.975 287.289 669.656 287.178C669.336 287.068 669.006 286.958 668.687 286.868C668.037 286.657 667.388 286.477 666.739 286.337C666.219 286.206 665.7 286.106 665.17 286.026C665.04 285.996 664.911 285.976 664.781 285.956H664.791Z"
        fill="#878160" />
      <path
        d="M695.556 314.626C695.366 314.205 695.186 313.794 694.996 313.383C695.086 313.544 695.156 313.704 695.226 313.874C695.466 314.385 695.695 314.896 695.915 315.417C696.005 315.628 696.095 315.848 696.195 316.079C696.435 316.66 696.674 317.261 696.904 317.862C697.174 318.544 697.434 319.225 697.673 319.927C697.823 320.317 697.953 320.708 698.083 321.109C697.923 320.658 697.773 320.217 697.613 319.776C697.463 319.335 697.304 318.894 697.124 318.454C696.624 317.151 696.105 315.868 695.556 314.626Z"
        fill="#878160" />
      <path
        d="M699.322 325.037C699.072 324.165 698.813 323.304 698.543 322.462C698.663 322.793 698.763 323.123 698.863 323.464C698.983 323.815 699.082 324.175 699.192 324.536C699.262 324.767 699.322 324.987 699.382 325.218C699.702 326.32 700.001 327.442 700.281 328.584C700.291 328.614 700.301 328.644 700.301 328.664C700.421 329.155 700.531 329.646 700.641 330.137C700.691 330.318 700.721 330.488 700.761 330.669C700.831 330.959 700.891 331.25 700.95 331.55C701.05 332.001 701.14 332.462 701.23 332.913C701.38 333.665 701.52 334.416 701.64 335.178C701.69 335.468 701.74 335.769 701.78 336.059C701.83 336.31 701.86 336.561 701.899 336.811C701.67 335.318 701.41 333.845 701.12 332.402C700.691 330.288 700.191 328.224 699.642 326.21C699.532 325.819 699.432 325.418 699.322 325.027V325.037Z"
        fill="#878160" />
      <path
        d="M701.908 336.982C701.908 336.982 701.908 336.922 701.898 336.892C701.948 337.193 701.998 337.483 702.028 337.784C702.138 338.505 702.228 339.227 702.308 339.948C702.188 338.946 702.058 337.954 701.908 336.982Z"
        fill="#878160" />
      <path
        d="M702.817 358.005C702.857 357.384 702.886 356.763 702.906 356.142C702.906 356.302 702.906 356.472 702.897 356.633C702.877 357.164 702.847 357.685 702.807 358.216C702.817 358.146 702.817 358.076 702.817 358.005Z"
        fill="#878160" />
      <path
        d="M703.007 351.452C703.007 350.57 702.987 349.678 702.957 348.787C702.987 349.678 702.997 350.56 703.007 351.452Z"
        fill="#878160" />
      <path
        d="M702.478 341.491C702.428 340.98 702.368 340.459 702.309 339.948C702.309 339.948 702.312 339.955 702.319 339.968C702.359 340.269 702.388 340.559 702.418 340.86C702.468 341.331 702.518 341.792 702.558 342.263C702.598 342.614 702.628 342.974 702.658 343.335C702.708 343.866 702.748 344.407 702.778 344.948C702.848 345.89 702.898 346.842 702.937 347.804C702.947 348.135 702.938 348.456 702.957 348.786C702.947 348.456 702.947 348.135 702.928 347.804C702.848 345.67 702.688 343.566 702.478 341.491Z"
        fill="#878160" />
      <path
        d="M702.916 356.142C702.966 355 702.996 353.847 703.006 352.695C703.006 353.857 702.966 355 702.916 356.142Z"
        fill="#878160" />
      <path
        d="M732.688 387.146C725.775 401.686 714.777 411.226 702.08 411.717C689.594 412.238 677.137 412.729 664.67 413.22C666.528 413.15 668.356 412.88 670.134 412.419C670.584 412.298 671.023 412.178 671.463 412.048C674.1 411.246 676.627 410.034 679.035 408.46C681.043 407.158 682.961 405.604 684.769 403.821C686.617 402.007 688.345 399.963 689.963 397.708C690.652 396.756 691.312 395.754 691.961 394.722C692.55 393.78 693.12 392.808 693.649 391.816C694.119 390.964 694.568 390.082 695.008 389.19C695.358 388.479 695.697 387.747 696.027 387.006C696.436 386.094 696.826 385.152 697.196 384.2C697.445 383.579 697.685 382.938 697.915 382.296C698.005 382.056 698.095 381.815 698.175 381.575C698.284 381.274 698.384 380.973 698.484 380.673C699.044 379.009 699.563 377.306 700.023 375.552C700.162 375.051 700.292 374.54 700.412 374.029C700.462 373.849 700.502 373.658 700.542 373.478C700.562 373.398 700.582 373.328 700.592 373.257C700.652 373.047 700.692 372.847 700.742 372.636C700.872 372.065 701.002 371.484 701.111 370.903C701.161 370.682 701.211 370.452 701.251 370.231C701.281 370.091 701.311 369.961 701.331 369.82C701.391 369.54 701.441 369.249 701.491 368.969C701.531 368.768 701.561 368.568 701.601 368.367C701.641 368.147 701.681 367.916 701.711 367.686C701.741 367.536 701.771 367.375 701.791 367.225C701.821 367.055 701.851 366.884 701.871 366.714C701.941 366.303 702 365.902 702.05 365.491C702.12 365 702.19 364.509 702.25 364.018C702.3 363.647 702.34 363.277 702.39 362.906C702.41 362.786 702.42 362.665 702.43 362.535C702.5 361.914 702.56 361.283 702.61 360.651C702.66 360.16 702.7 359.669 702.74 359.178C702.74 359.288 702.73 359.389 702.72 359.499C702.69 359.9 702.66 360.311 702.62 360.711V360.731C702.89 367.996 702.86 375.622 702.52 383.509C703.569 383.739 704.618 383.97 705.667 384.19C708.574 384.821 711.49 385.453 714.397 386.084C716.935 386.635 719.472 387.186 722.009 387.737C722.888 387.687 723.757 387.637 724.637 387.587C727.324 387.437 730.001 387.287 732.688 387.146Z"
        fill="#878160" />
      <path
        d="M702.916 356.142C702.916 356.302 702.916 356.473 702.906 356.633C702.886 357.164 702.856 357.685 702.816 358.216C702.796 358.537 702.776 358.858 702.746 359.178C702.746 359.289 702.736 359.389 702.726 359.499C702.696 359.91 702.656 360.311 702.626 360.712C702.626 360.812 702.606 360.912 702.596 361.012C702.566 361.303 702.536 361.603 702.506 361.904C702.476 362.245 702.437 362.575 702.397 362.906C702.357 363.267 702.317 363.628 702.267 363.988C702.257 364.078 702.247 364.169 702.237 364.249C702.187 364.65 702.127 365.061 702.067 365.461C702.067 365.471 702.067 365.481 702.067 365.491C702.017 365.902 701.957 366.303 701.887 366.714C701.867 366.884 701.837 367.055 701.807 367.225C701.787 367.375 701.757 367.536 701.727 367.686C701.697 367.916 701.657 368.137 701.617 368.367C701.577 368.568 701.547 368.768 701.507 368.969C701.458 369.249 701.408 369.54 701.348 369.82C701.328 369.961 701.298 370.091 701.268 370.231C701.228 370.452 701.178 370.682 701.128 370.903C701.018 371.484 700.888 372.065 700.758 372.636C700.708 372.847 700.668 373.047 700.608 373.258C700.598 373.328 700.578 373.398 700.558 373.478C700.519 373.658 700.469 373.849 700.429 374.029C700.309 374.54 700.179 375.051 700.039 375.552C699.58 377.306 699.06 379.009 698.501 380.673C698.401 380.974 698.301 381.274 698.191 381.575C698.111 381.815 698.021 382.056 697.931 382.296C697.701 382.938 697.462 383.579 697.212 384.2C696.842 385.152 696.453 386.094 696.043 387.006C695.714 387.748 695.374 388.479 695.024 389.191C694.585 390.082 694.135 390.964 693.666 391.816C693.126 392.808 692.567 393.77 691.978 394.712C691.328 395.754 690.669 396.756 689.98 397.708C688.361 399.963 686.633 402.007 684.785 403.821C678.991 409.513 672.129 412.91 664.686 413.2C663.248 413.26 661.809 413.2 660.401 413.03C660.041 412.99 659.682 412.94 659.322 412.88C658.982 412.82 658.643 412.759 658.293 412.689C657.874 412.609 657.464 412.519 657.044 412.409C656.795 412.339 656.545 412.278 656.295 412.208C655.856 412.088 655.416 411.958 654.977 411.797C654.717 411.717 654.447 411.617 654.187 411.527C653.848 411.407 653.508 411.276 653.179 411.136C652.839 410.996 652.509 410.855 652.18 410.705C651.88 410.575 651.58 410.435 651.281 410.284C650.591 409.954 649.912 409.593 649.243 409.202C648.923 409.022 648.603 408.831 648.284 408.631C647.964 408.43 647.644 408.23 647.335 408.02C646.915 407.739 646.496 407.448 646.086 407.158C646.056 407.138 646.026 407.108 645.996 407.088C645.557 406.767 645.117 406.426 644.688 406.086C644.268 405.755 643.858 405.404 643.449 405.063C643.429 405.053 643.409 405.033 643.399 405.013C638.724 400.965 634.558 395.564 631.132 389.16C630.512 387.988 629.913 386.796 629.344 385.563C629.054 384.952 628.774 384.33 628.505 383.699C628.235 383.068 627.965 382.427 627.705 381.785C627.446 381.134 627.196 380.482 626.956 379.831C626.707 379.17 626.467 378.498 626.237 377.827C626.037 377.246 625.847 376.665 625.668 376.073C625.438 375.392 625.228 374.69 625.028 373.989C624.888 373.518 624.759 373.037 624.629 372.566C624.499 372.085 624.369 371.604 624.249 371.123C624.119 370.642 623.999 370.151 623.889 369.66C623.79 369.239 623.69 368.818 623.6 368.387C623.57 368.297 623.55 368.207 623.53 368.107C623.32 367.145 623.12 366.173 622.94 365.201C622.881 364.86 622.821 364.509 622.761 364.169C622.461 362.475 622.211 360.752 622.001 359.008C621.682 356.413 621.472 353.747 621.362 351.051C621.232 347.644 621.272 344.297 621.472 341.021C621.482 340.87 621.492 340.73 621.502 340.58C621.532 340.159 621.562 339.748 621.592 339.327C621.662 338.405 621.752 337.483 621.842 336.571C621.862 336.491 621.862 336.411 621.872 336.321C621.932 335.83 621.991 335.339 622.051 334.838C622.221 333.485 622.421 332.132 622.651 330.809C622.761 330.178 622.871 329.547 622.99 328.926C623.14 328.154 623.3 327.392 623.47 326.631C623.51 326.45 623.55 326.28 623.59 326.11C623.69 325.679 623.79 325.258 623.889 324.837C623.999 324.386 624.119 323.925 624.239 323.474C624.339 323.073 624.449 322.673 624.559 322.272C625.528 318.785 626.707 315.468 628.055 312.361C628.195 312.031 628.345 311.7 628.495 311.369C628.674 310.968 628.854 310.568 629.044 310.187C629.224 309.816 629.404 309.455 629.583 309.094C629.763 308.724 629.953 308.353 630.153 307.982C630.343 307.621 630.532 307.251 630.732 306.9C630.862 306.659 630.992 306.419 631.132 306.188C631.202 306.068 631.262 305.948 631.332 305.828C631.541 305.477 631.741 305.126 631.951 304.786C631.951 304.725 632.001 304.665 632.051 304.595C632.141 304.445 632.241 304.295 632.341 304.144C632.53 303.834 632.73 303.523 632.93 303.212C632.98 303.142 633.02 303.062 633.07 302.992C633.27 302.701 633.459 302.401 633.659 302.12C634.488 300.907 635.337 299.755 636.236 298.673C636.476 298.372 636.726 298.082 636.976 297.791C637.175 297.561 637.375 297.33 637.575 297.1C637.885 296.749 638.194 296.408 638.514 296.087C638.774 295.807 639.033 295.536 639.303 295.276C639.573 295.015 639.833 294.755 640.102 294.494C640.372 294.244 640.652 293.993 640.921 293.743C641.201 293.492 641.471 293.252 641.751 293.021C642.31 292.55 642.879 292.109 643.449 291.678C643.739 291.458 644.028 291.247 644.318 291.047C644.608 290.847 644.907 290.646 645.197 290.446C645.487 290.245 645.786 290.065 646.086 289.885C646.985 289.343 647.904 288.842 648.833 288.392C649.143 288.241 649.452 288.101 649.772 287.961C650.082 287.83 650.401 287.69 650.721 287.57C651.061 287.43 651.4 287.299 651.75 287.179C654.287 286.287 656.925 285.766 659.642 285.656C660.351 285.626 661.06 285.626 661.769 285.656C662.509 285.686 663.238 285.746 663.967 285.836C664.247 285.866 664.527 285.906 664.806 285.956C664.936 285.977 665.066 285.997 665.196 286.027C665.725 286.107 666.245 286.207 666.764 286.337C667.414 286.478 668.063 286.658 668.712 286.868C669.032 286.959 669.361 287.069 669.681 287.179C670.001 287.289 670.32 287.399 670.64 287.53C670.96 287.66 671.269 287.79 671.589 287.921C671.909 288.061 672.218 288.201 672.528 288.341C672.828 288.482 673.127 288.622 673.417 288.762C674.057 289.083 674.686 289.424 675.315 289.804C677.143 290.867 678.911 292.129 680.61 293.592C685.444 297.671 689.74 303.202 693.236 309.806C693.626 310.507 693.985 311.219 694.345 311.95C694.425 312.121 694.515 312.301 694.585 312.471C694.655 312.592 694.715 312.712 694.765 312.832C694.765 312.842 694.765 312.852 694.765 312.862C694.765 312.872 694.775 312.892 694.785 312.912C694.875 313.073 694.944 313.223 695.004 313.383C695.094 313.544 695.164 313.704 695.234 313.874C695.474 314.385 695.704 314.896 695.923 315.418C696.013 315.628 696.103 315.848 696.203 316.079C696.443 316.66 696.683 317.261 696.912 317.863C697.182 318.544 697.442 319.225 697.682 319.927C697.831 320.318 697.961 320.709 698.091 321.109C698.251 321.56 698.401 322.011 698.541 322.462C698.66 322.793 698.76 323.124 698.86 323.464C698.98 323.815 699.08 324.176 699.19 324.536C699.26 324.767 699.32 324.987 699.38 325.218C699.699 326.32 699.999 327.443 700.279 328.585C700.289 328.615 700.299 328.645 700.299 328.665C700.419 329.156 700.529 329.647 700.638 330.138C700.688 330.318 700.718 330.489 700.758 330.669C700.828 330.96 700.888 331.25 700.948 331.551C701.048 332.002 701.138 332.463 701.228 332.914C701.378 333.665 701.517 334.417 701.637 335.179C701.687 335.469 701.737 335.77 701.777 336.06C701.827 336.311 701.857 336.561 701.897 336.812C701.907 336.832 701.907 336.862 701.907 336.892C701.957 337.193 702.007 337.483 702.037 337.784C702.147 338.505 702.237 339.227 702.317 339.948C702.317 339.948 702.32 339.955 702.327 339.968C702.367 340.269 702.397 340.56 702.427 340.86C702.476 341.331 702.526 341.792 702.566 342.263C702.606 342.614 702.636 342.975 702.666 343.335C702.716 343.867 702.756 344.408 702.786 344.949C702.856 345.891 702.906 346.843 702.946 347.805C702.956 348.135 702.946 348.456 702.966 348.787C702.996 349.679 703.006 350.56 703.016 351.452C703.016 351.863 703.016 352.284 703.016 352.695C703.016 353.857 702.976 355 702.926 356.142H702.916Z"
        fill="#A8A385" />
      <path
        d="M702.918 356.142C702.918 356.302 702.918 356.473 702.908 356.633C702.888 357.164 702.858 357.685 702.818 358.216C702.798 358.537 702.778 358.858 702.748 359.178C702.748 359.289 702.738 359.389 702.728 359.499C702.698 359.91 702.658 360.311 702.628 360.712C702.628 360.812 702.608 360.912 702.598 361.012C702.569 361.303 702.539 361.603 702.509 361.904C702.479 362.245 702.439 362.575 702.399 362.906C702.359 363.267 702.319 363.628 702.269 363.988C702.259 364.078 702.249 364.169 702.239 364.249C702.189 364.65 702.129 365.061 702.069 365.461C702.069 365.471 702.069 365.481 702.069 365.491C702.019 365.902 701.959 366.303 701.889 366.714C701.869 366.884 701.839 367.055 701.809 367.225C701.789 367.375 701.759 367.536 701.729 367.686C701.699 367.916 701.659 368.137 701.62 368.367C701.58 368.568 701.55 368.768 701.51 368.969C701.46 369.249 701.41 369.54 701.35 369.82C701.33 369.961 701.3 370.091 701.27 370.231C701.23 370.452 701.18 370.682 701.13 370.903C701.02 371.484 700.89 372.065 700.76 372.636C700.711 372.847 700.671 373.047 700.611 373.258C700.601 373.328 700.581 373.398 700.561 373.478C700.521 373.658 700.471 373.849 700.431 374.029C700.311 374.54 700.181 375.051 700.041 375.552C699.582 377.306 699.062 379.009 698.503 380.673C698.403 380.974 698.303 381.274 698.193 381.575C698.113 381.815 698.023 382.056 697.933 382.296C697.704 382.938 697.464 383.579 697.214 384.2C696.845 385.152 696.455 386.094 696.045 387.006C695.716 387.748 695.376 388.479 695.027 389.191C694.587 390.082 694.137 390.964 693.668 391.816C693.128 392.808 692.569 393.77 691.98 394.712C691.33 395.754 690.671 396.756 689.982 397.708C688.364 399.963 686.635 402.007 684.787 403.821C678.993 409.513 672.131 412.91 664.689 413.2C663.25 413.26 661.812 413.2 660.403 413.03C660.043 412.99 659.684 412.94 659.324 412.88C658.985 412.82 658.645 412.759 658.295 412.689C657.876 412.609 657.466 412.519 657.047 412.409C656.797 412.339 656.547 412.278 656.297 412.208C655.858 412.088 655.418 411.958 654.979 411.797C654.719 411.717 654.449 411.617 654.19 411.527C653.85 411.407 653.51 411.276 653.181 411.136C652.841 410.996 652.511 410.855 652.182 410.705C651.882 410.575 651.582 410.435 651.283 410.284C650.593 409.954 649.914 409.593 649.245 409.202C648.925 409.022 648.606 408.831 648.286 408.631C647.966 408.43 647.647 408.23 647.337 408.02C649.724 408.801 653.93 409.833 659.084 409.202C659.084 409.202 663.42 408.671 667.605 406.657C672.61 404.252 681.681 396.456 687.175 378.669C696.095 349.749 690.311 311.349 669.953 296.508C663.5 291.799 658.135 291.318 656.547 291.237C651.053 290.937 646.188 292.821 642.252 295.296C636.678 298.793 632.962 303.473 631.953 304.775C631.953 304.725 632.003 304.665 632.053 304.595C632.143 304.445 632.243 304.295 632.343 304.144C632.532 303.834 632.732 303.523 632.932 303.212C632.982 303.142 633.022 303.062 633.072 302.992C633.272 302.701 633.462 302.401 633.661 302.12C634.49 300.907 635.34 299.755 636.239 298.673C636.478 298.372 636.728 298.082 636.978 297.791C637.178 297.561 637.377 297.33 637.577 297.1C637.887 296.749 638.197 296.408 638.516 296.087C638.776 295.807 639.036 295.536 639.305 295.276C639.575 295.015 639.835 294.755 640.105 294.494C640.374 294.244 640.654 293.993 640.924 293.743C641.203 293.492 641.473 293.252 641.753 293.021C642.312 292.55 642.882 292.109 643.451 291.678C643.741 291.458 644.03 291.247 644.32 291.047C644.61 290.847 644.909 290.646 645.199 290.446C645.489 290.245 645.789 290.065 646.088 289.885C646.987 289.343 647.906 288.842 648.835 288.392C649.145 288.241 649.455 288.101 649.774 287.961C650.084 287.83 650.404 287.69 650.723 287.57C651.063 287.43 651.403 287.299 651.752 287.179C654.29 286.287 656.927 285.766 659.644 285.656C660.353 285.626 661.062 285.626 661.772 285.656C662.511 285.686 663.24 285.746 663.969 285.836C664.249 285.866 664.529 285.906 664.808 285.956C664.938 285.977 665.068 285.997 665.198 286.027C665.727 286.107 666.247 286.207 666.766 286.337C667.416 286.478 668.065 286.658 668.714 286.868C669.034 286.959 669.364 287.069 669.683 287.179C670.003 287.289 670.323 287.399 670.642 287.53C670.962 287.66 671.272 287.79 671.591 287.921C671.911 288.061 672.221 288.201 672.53 288.341C672.83 288.482 673.13 288.622 673.419 288.762C674.059 289.083 674.688 289.424 675.317 289.804C677.145 290.867 678.914 292.129 680.612 293.592C685.447 297.671 689.742 303.202 693.238 309.806C693.628 310.507 693.988 311.219 694.347 311.95C694.427 312.121 694.517 312.301 694.587 312.471C694.657 312.592 694.717 312.712 694.767 312.832C694.767 312.842 694.767 312.852 694.767 312.862C694.767 312.872 694.777 312.892 694.787 312.912C694.877 313.073 694.947 313.223 695.007 313.383C695.096 313.544 695.166 313.704 695.236 313.874C695.476 314.385 695.706 314.896 695.926 315.418C696.015 315.628 696.105 315.848 696.205 316.079C696.445 316.66 696.685 317.261 696.914 317.863C697.184 318.544 697.444 319.225 697.684 319.927C697.834 320.318 697.963 320.709 698.093 321.109C698.253 321.56 698.403 322.011 698.543 322.462C698.663 322.793 698.763 323.124 698.862 323.464C698.982 323.815 699.082 324.176 699.192 324.536C699.262 324.767 699.322 324.987 699.382 325.218C699.702 326.32 700.001 327.443 700.281 328.585C700.291 328.615 700.301 328.645 700.301 328.665C700.421 329.156 700.531 329.647 700.641 330.138C700.691 330.318 700.72 330.489 700.76 330.669C700.83 330.96 700.89 331.25 700.95 331.551C701.05 332.002 701.14 332.463 701.23 332.914C701.38 333.665 701.52 334.417 701.64 335.179C701.689 335.469 701.739 335.77 701.779 336.06C701.829 336.311 701.859 336.561 701.899 336.812C701.909 336.832 701.909 336.862 701.909 336.892C701.959 337.193 702.009 337.483 702.039 337.784C702.149 338.505 702.239 339.227 702.319 339.948C702.319 339.948 702.322 339.955 702.329 339.968C702.369 340.269 702.399 340.56 702.429 340.86C702.479 341.331 702.529 341.792 702.569 342.263C702.608 342.614 702.638 342.975 702.668 343.335C702.718 343.867 702.758 344.408 702.788 344.949C702.858 345.891 702.908 346.843 702.948 347.805C702.958 348.135 702.948 348.456 702.968 348.787C702.998 349.679 703.008 350.56 703.018 351.452C703.018 351.863 703.018 352.284 703.018 352.695C703.018 353.857 702.978 355 702.928 356.142H702.918Z"
        fill="#CEC69F" />
      <path
        d="M664.669 413.211C663.23 413.271 661.792 413.211 660.383 413.03C660.023 412.99 659.664 412.94 659.304 412.88C658.955 412.83 658.615 412.76 658.275 412.689C657.856 412.609 657.446 412.519 657.027 412.409C656.777 412.349 656.527 412.279 656.277 412.208C655.838 412.088 655.398 411.958 654.959 411.798C654.699 411.717 654.429 411.627 654.17 411.527C653.83 411.407 653.5 411.277 653.161 411.136C652.821 411.006 652.491 410.856 652.162 410.705C651.862 410.575 651.562 410.435 651.263 410.284C650.573 409.954 649.894 409.593 649.225 409.202C648.905 409.022 648.586 408.831 648.266 408.631C647.946 408.441 647.627 408.23 647.317 408.02C646.897 407.749 646.478 407.459 646.068 407.158C646.038 407.138 646.008 407.108 645.978 407.088C645.539 406.767 645.099 406.436 644.67 406.086C644.25 405.765 643.841 405.414 643.431 405.064C643.411 405.054 643.391 405.034 643.381 405.014C638.696 400.975 634.53 395.574 631.114 389.161C630.485 387.998 629.885 386.796 629.326 385.563C629.036 384.952 628.756 384.331 628.487 383.699C628.207 383.068 627.947 382.437 627.688 381.785C627.428 381.144 627.178 380.493 626.938 379.831C626.689 379.17 626.449 378.499 626.219 377.827C626.019 377.246 625.83 376.665 625.65 376.074C625.42 375.392 625.21 374.691 625.01 373.989C624.871 373.518 624.741 373.037 624.611 372.566C624.481 372.085 624.351 371.604 624.231 371.123C624.101 370.642 623.982 370.151 623.872 369.66C623.772 369.239 623.672 368.818 623.582 368.388C623.552 368.297 623.532 368.207 623.512 368.107C623.302 367.145 623.112 366.173 622.923 365.201C622.863 364.86 622.803 364.51 622.743 364.169C622.443 362.475 622.193 360.752 621.984 359.008C621.674 356.403 621.464 353.747 621.354 351.052C621.214 347.645 621.254 344.298 621.454 341.021C621.464 340.871 621.474 340.73 621.484 340.58C621.514 340.159 621.544 339.748 621.574 339.327C621.644 338.405 621.734 337.484 621.824 336.572C621.844 336.491 621.844 336.411 621.854 336.321C621.914 335.83 621.974 335.339 622.034 334.838C622.203 333.485 622.403 332.132 622.633 330.81C622.743 330.178 622.853 329.547 622.973 328.926C623.122 328.154 623.282 327.393 623.452 326.631C623.492 326.451 623.532 326.28 623.572 326.11C623.672 325.679 623.772 325.258 623.872 324.837C623.982 324.386 624.101 323.925 624.221 323.474C624.321 323.074 624.431 322.673 624.541 322.272C625.51 318.785 626.689 315.468 628.037 312.361C628.177 312.021 628.327 311.69 628.477 311.369C628.657 310.969 628.836 310.568 629.026 310.187C629.206 309.816 629.376 309.455 629.566 309.095C629.745 308.714 629.935 308.343 630.135 307.982C630.315 307.612 630.515 307.251 630.714 306.9C630.834 306.66 630.974 306.429 631.104 306.189L631.314 305.828C631.514 305.477 631.723 305.126 631.933 304.786C632.063 304.565 632.193 304.355 632.323 304.144C632.513 303.834 632.712 303.523 632.912 303.212C632.962 303.142 633.002 303.062 633.052 302.992C633.252 302.701 633.442 302.401 633.641 302.12C634.47 300.908 635.32 299.755 636.219 298.673C636.458 298.372 636.698 298.082 636.958 297.791C637.148 297.551 637.357 297.32 637.557 297.1C637.867 296.749 638.177 296.408 638.496 296.088C638.746 295.807 639.016 295.537 639.285 295.276C639.545 295.005 639.815 294.745 640.084 294.494C640.354 294.234 640.624 293.983 640.904 293.743C641.183 293.492 641.453 293.252 641.733 293.021C642.292 292.55 642.852 292.099 643.431 291.679C643.711 291.458 644 291.248 644.3 291.047C644.59 290.837 644.879 290.636 645.179 290.446C645.469 290.246 645.769 290.065 646.068 289.885C646.967 289.334 647.886 288.833 648.815 288.392C649.125 288.231 649.445 288.091 649.754 287.961C650.064 287.821 650.384 287.68 650.703 287.57C651.073 287.41 651.462 287.269 651.842 287.129C654.349 286.257 656.947 285.756 659.624 285.646"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M694.328 311.951C694.408 312.121 694.498 312.301 694.568 312.472C694.638 312.602 694.708 312.732 694.758 312.863C694.778 312.883 694.778 312.893 694.778 312.913C694.868 313.073 694.937 313.223 694.997 313.384C695.087 313.544 695.157 313.704 695.227 313.875C695.347 314.125 695.457 314.376 695.557 314.626C695.687 314.887 695.797 315.147 695.916 315.418C696.006 315.628 696.096 315.849 696.196 316.079C696.436 316.66 696.676 317.262 696.905 317.863C696.985 318.053 697.065 318.254 697.125 318.454C697.305 318.895 697.465 319.336 697.615 319.777C697.645 319.827 697.665 319.877 697.675 319.927C697.824 320.318 697.954 320.709 698.084 321.11C698.244 321.561 698.394 322.012 698.534 322.462C698.654 322.793 698.753 323.124 698.853 323.465C698.963 323.815 699.073 324.176 699.183 324.537C699.253 324.767 699.313 324.988 699.373 325.218C699.692 326.32 699.992 327.443 700.272 328.585C700.282 328.615 700.292 328.645 700.292 328.665C700.412 329.156 700.522 329.647 700.631 330.138C700.681 330.319 700.711 330.489 700.751 330.67C700.821 330.96 700.881 331.261 700.941 331.551C701.001 331.832 701.061 332.123 701.111 332.403C701.151 332.573 701.181 332.744 701.221 332.914C701.371 333.666 701.511 334.417 701.63 335.179C701.68 335.469 701.73 335.77 701.77 336.061C701.82 336.311 701.85 336.562 701.89 336.812C701.89 336.832 701.89 336.862 701.89 336.892C701.9 336.922 701.9 336.953 701.9 336.983C701.95 337.243 701.99 337.514 702.02 337.784C702.13 338.506 702.22 339.227 702.3 339.949C702.3 339.949 702.303 339.955 702.31 339.969C702.34 340.259 702.38 340.56 702.41 340.861C702.43 341.071 702.459 341.282 702.469 341.492C702.509 341.742 702.529 342.003 702.549 342.264C702.589 342.614 702.619 342.975 702.649 343.336C702.699 343.867 702.739 344.408 702.769 344.949C702.839 345.891 702.889 346.843 702.929 347.805C703.049 350.791 703.029 353.737 702.889 356.633C702.869 357.094 702.849 357.555 702.809 358.006C702.809 358.076 702.809 358.147 702.799 358.217C702.779 358.537 702.759 358.858 702.729 359.179C702.729 359.289 702.729 359.389 702.709 359.499C702.679 359.9 702.649 360.311 702.609 360.712V360.732C702.599 360.822 702.589 360.912 702.579 361.012C702.549 361.303 702.519 361.604 702.489 361.904C702.47 362.115 702.45 362.325 702.42 362.536C702.41 362.666 702.4 362.786 702.38 362.906C702.34 363.267 702.3 363.628 702.25 363.989C702.25 363.999 702.25 364.009 702.25 364.019C702.25 364.099 702.24 364.169 702.23 364.249C702.18 364.65 702.12 365.061 702.06 365.462C702 365.883 701.94 366.293 701.87 366.714C701.85 366.885 701.82 367.055 701.79 367.225C701.77 367.376 701.74 367.536 701.71 367.686C701.68 367.917 701.64 368.147 701.6 368.368C701.56 368.568 701.531 368.769 701.491 368.969C701.441 369.25 701.391 369.54 701.331 369.821C701.311 369.961 701.281 370.091 701.251 370.232C701.211 370.452 701.161 370.682 701.111 370.903C701.001 371.484 700.871 372.065 700.741 372.637C700.691 372.847 700.651 373.047 700.592 373.258C700.582 373.328 700.562 373.398 700.542 373.478C700.502 373.659 700.462 373.849 700.412 374.029C700.292 374.54 700.162 375.052 700.022 375.553C699.972 375.773 699.912 375.983 699.852 376.194"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M668.237 373.026C666.658 373.948 664.95 374.469 663.142 374.54C658.147 374.73 653.542 371.363 650.395 365.882C647.918 361.653 646.33 356.131 646.09 350.059C645.84 344.006 647.009 338.405 649.097 333.975C651.824 328.264 656.149 324.506 661.154 324.305C662.952 324.235 664.69 324.626 666.339 325.438C672.822 328.524 677.766 337.733 678.206 348.786C678.646 359.829 674.44 369.399 668.237 373.016V373.026Z"
        fill="#2E3D25" />
      <path
        d="M668.237 373.026C666.658 373.948 664.95 374.469 663.142 374.54C658.147 374.73 653.542 371.363 650.395 365.882C647.918 361.653 646.33 356.131 646.09 350.059C645.84 344.006 647.009 338.405 649.097 333.975C651.824 328.264 656.149 324.506 661.154 324.305C662.952 324.235 664.69 324.626 666.339 325.438C672.822 328.524 677.766 337.733 678.206 348.786C678.646 359.829 674.44 369.399 668.237 373.016V373.026Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M668.236 373.027C667.936 373.047 667.637 373.047 667.337 373.047C660.694 373.047 654.68 370.312 650.385 365.882C646.169 361.593 643.582 355.701 643.582 349.218C643.582 343.416 645.64 338.105 649.086 333.976C653.232 328.966 659.405 325.709 666.338 325.438C672.821 328.525 677.766 337.734 678.205 348.787C678.645 359.83 674.439 369.4 668.236 373.017V373.027Z"
        fill="#0E5B4C" />
      <path
        d="M668.236 373.027C667.936 373.047 667.637 373.047 667.337 373.047C660.694 373.047 654.68 370.312 650.385 365.882C646.169 361.593 643.582 355.701 643.582 349.218C643.582 343.416 645.64 338.105 649.086 333.976C653.232 328.966 659.405 325.709 666.338 325.438C672.821 328.525 677.766 337.734 678.205 348.787C678.645 359.83 674.439 369.4 668.236 373.017V373.027Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M437.679 299.294C437.4 299.254 437.12 299.214 436.84 299.174C436.111 299.083 435.382 299.023 434.643 298.993C436.77 298.903 438.908 298.813 441.036 298.723C443.293 299.113 445.751 299.795 448.308 300.867C456.549 304.334 463.043 313.283 467.638 326.17C467.638 326.18 467.638 326.19 467.638 326.2C467.638 326.21 467.648 326.23 467.658 326.25C467.588 326.099 467.518 325.959 467.448 325.809C467.008 324.897 466.559 324.015 466.099 323.143C462.593 316.55 458.298 311.018 453.473 306.93C451.764 305.487 449.996 304.214 448.178 303.142C447.549 302.761 446.92 302.42 446.28 302.1C445.991 301.959 445.691 301.819 445.391 301.679C445.082 301.538 444.772 301.398 444.452 301.258C444.133 301.128 443.823 300.997 443.503 300.867C443.184 300.737 442.864 300.627 442.544 300.516C442.225 300.406 441.895 300.296 441.575 300.206C440.926 299.995 440.277 299.815 439.627 299.675C439.108 299.544 438.588 299.444 438.059 299.364C437.929 299.334 437.799 299.314 437.669 299.294H437.679Z"
        fill="#878160" />
      <path
        d="M468.446 327.963C468.256 327.542 468.077 327.131 467.887 326.72C467.977 326.881 468.047 327.041 468.116 327.211C468.356 327.722 468.586 328.233 468.806 328.754C468.896 328.965 468.986 329.185 469.085 329.416C469.325 329.997 469.565 330.598 469.795 331.199C470.064 331.881 470.324 332.562 470.564 333.263C470.714 333.654 470.844 334.045 470.973 334.446C470.814 333.995 470.664 333.554 470.504 333.113C470.354 332.672 470.194 332.231 470.014 331.79C469.515 330.488 468.996 329.205 468.446 327.963Z"
        fill="#878160" />
      <path
        d="M472.203 338.375C471.953 337.503 471.694 336.641 471.424 335.799C471.544 336.13 471.644 336.461 471.743 336.801C471.863 337.152 471.963 337.513 472.073 337.874C472.143 338.104 472.203 338.324 472.263 338.555C472.583 339.657 472.882 340.779 473.162 341.922C473.172 341.952 473.182 341.982 473.182 342.002C473.302 342.493 473.412 342.984 473.522 343.475C473.572 343.655 473.602 343.826 473.641 344.006C473.711 344.297 473.771 344.587 473.831 344.888C473.931 345.339 474.021 345.8 474.111 346.251C474.261 347.002 474.401 347.754 474.521 348.515C474.571 348.806 474.62 349.106 474.66 349.397C474.71 349.647 474.74 349.898 474.78 350.148C474.551 348.655 474.291 347.182 474.001 345.739C473.572 343.625 473.072 341.561 472.523 339.547C472.413 339.156 472.313 338.755 472.203 338.365V338.375Z"
        fill="#878160" />
      <path
        d="M474.799 350.32C474.799 350.32 474.799 350.26 474.789 350.23C474.839 350.531 474.889 350.821 474.919 351.122C475.029 351.843 475.118 352.565 475.198 353.286C475.079 352.284 474.949 351.292 474.799 350.32Z"
        fill="#878160" />
      <path
        d="M475.369 354.83C475.319 354.319 475.259 353.798 475.199 353.287C475.199 353.287 475.203 353.293 475.209 353.307C475.249 353.607 475.279 353.898 475.309 354.198C475.359 354.669 475.409 355.13 475.449 355.601C475.489 355.952 475.519 356.313 475.549 356.673C475.599 357.205 475.638 357.746 475.668 358.287C475.738 359.229 475.788 360.181 475.828 361.143C475.838 361.473 475.828 361.794 475.848 362.125C475.838 361.794 475.838 361.473 475.818 361.143C475.738 359.008 475.579 356.904 475.369 354.83Z"
        fill="#878160" />
      <path
        d="M475.799 369.479C475.799 369.64 475.799 369.81 475.789 369.97C475.769 370.502 475.739 371.023 475.699 371.554C475.679 371.874 475.659 372.195 475.629 372.516C475.629 372.626 475.619 372.726 475.609 372.836C475.579 373.247 475.539 373.648 475.509 374.049C475.509 374.149 475.489 374.249 475.479 374.35C475.449 374.64 475.419 374.941 475.389 375.241C475.359 375.582 475.319 375.913 475.279 376.243C475.239 376.604 475.199 376.965 475.15 377.326C475.14 377.416 475.13 377.506 475.12 377.586C475.07 377.987 475.01 378.398 474.95 378.799C474.95 378.809 474.95 378.819 474.95 378.829C474.9 379.24 474.84 379.64 474.77 380.051C474.75 380.222 474.72 380.392 474.69 380.562C474.67 380.713 474.64 380.873 474.61 381.023C474.58 381.254 474.54 381.474 474.5 381.705C474.46 381.905 474.43 382.106 474.39 382.306C474.34 382.587 474.29 382.877 474.23 383.158C474.21 383.298 474.181 383.428 474.151 383.569C474.111 383.789 474.061 384.02 474.011 384.24C473.901 384.821 473.771 385.402 473.641 385.974C473.591 386.184 473.551 386.384 473.491 386.595C473.481 386.665 473.461 386.735 473.441 386.815C473.401 386.996 473.351 387.186 473.311 387.367C473.192 387.878 473.062 388.389 472.922 388.89C472.462 390.643 471.943 392.347 471.383 394.01C471.284 394.311 471.184 394.612 471.074 394.912C470.994 395.153 470.904 395.393 470.814 395.634C470.584 396.275 470.345 396.916 470.095 397.538C469.725 398.49 469.336 399.432 468.926 400.343C468.596 401.085 468.257 401.816 467.907 402.528C467.468 403.42 467.018 404.302 466.549 405.153C466.009 406.145 465.45 407.107 464.86 408.049C464.211 409.092 463.552 410.094 462.862 411.046C461.244 413.3 459.516 415.345 457.668 417.158C451.874 422.85 445.011 426.247 437.569 426.538C436.131 426.598 434.692 426.538 433.284 426.367C432.924 426.327 432.565 426.277 432.205 426.217C431.865 426.157 431.526 426.097 431.176 426.027C430.756 425.947 430.347 425.856 429.927 425.746C429.678 425.676 429.428 425.616 429.178 425.546C428.739 425.425 428.299 425.295 427.859 425.135C427.6 425.055 427.33 424.954 427.07 424.864C426.731 424.744 426.391 424.614 426.061 424.473C425.722 424.333 425.392 424.193 425.062 424.043C424.763 423.912 424.463 423.772 424.163 423.622C423.474 423.291 422.795 422.93 422.126 422.539C421.806 422.359 421.486 422.169 421.167 421.968C420.847 421.768 420.527 421.567 420.218 421.357C419.798 421.076 419.378 420.786 418.969 420.495C418.939 420.475 418.909 420.445 418.879 420.425C418.439 420.104 418 419.764 417.57 419.423C417.151 419.092 416.741 418.742 416.332 418.401C416.312 418.391 416.292 418.371 416.282 418.351C411.607 414.302 407.441 408.901 404.015 402.498C403.395 401.325 402.796 400.133 402.227 398.9C401.937 398.289 401.657 397.668 401.387 397.037C401.118 396.405 400.848 395.764 400.588 395.123C400.329 394.471 400.079 393.82 399.839 393.169C399.589 392.507 399.35 391.836 399.12 391.164C398.92 390.583 398.73 390.002 398.55 389.411C398.321 388.729 398.111 388.028 397.911 387.326C397.771 386.855 397.641 386.374 397.512 385.903C397.382 385.422 397.252 384.941 397.132 384.46C397.002 383.979 396.882 383.488 396.772 382.997C396.672 382.577 396.573 382.156 396.483 381.725C396.453 381.635 396.433 381.544 396.413 381.444C396.203 380.482 396.003 379.51 395.823 378.538C395.763 378.198 395.703 377.847 395.644 377.506C395.344 375.813 395.094 374.089 394.884 372.345C394.565 369.75 394.355 367.084 394.245 364.389C394.115 360.982 394.155 357.635 394.355 354.358C394.365 354.208 394.375 354.067 394.385 353.917C394.415 353.496 394.445 353.085 394.475 352.665C394.545 351.743 394.635 350.821 394.724 349.909C394.744 349.829 394.744 349.749 394.754 349.658C394.814 349.167 394.874 348.676 394.934 348.175C395.104 346.822 395.304 345.47 395.534 344.147C395.644 343.516 395.753 342.884 395.873 342.263C396.023 341.491 396.183 340.73 396.353 339.968C396.393 339.788 396.433 339.617 396.473 339.447C396.573 339.016 396.672 338.595 396.772 338.174C396.882 337.724 397.002 337.263 397.122 336.812C397.222 336.411 397.332 336.01 397.442 335.609C398.411 332.122 399.589 328.805 400.938 325.699C401.078 325.368 401.228 325.037 401.377 324.707C401.557 324.306 401.737 323.905 401.927 323.524C402.107 323.153 402.286 322.793 402.466 322.432C402.646 322.061 402.836 321.69 403.036 321.32C403.225 320.959 403.415 320.588 403.615 320.237C403.745 319.997 403.875 319.756 404.015 319.526C404.085 319.406 404.145 319.285 404.214 319.165C404.424 318.814 404.624 318.464 404.834 318.123C404.834 318.063 404.884 318.003 404.934 317.933C405.024 317.782 405.123 317.632 405.223 317.482C405.413 317.171 405.613 316.86 405.813 316.55C405.863 316.479 405.903 316.399 405.953 316.329C406.152 316.039 406.342 315.738 406.542 315.457C407.371 314.245 408.22 313.092 409.119 312.01C409.359 311.71 409.609 311.419 409.858 311.128C410.058 310.898 410.258 310.667 410.458 310.437C410.768 310.086 411.077 309.746 411.397 309.425C411.657 309.144 411.916 308.874 412.186 308.613C412.456 308.353 412.715 308.092 412.985 307.832C413.255 307.581 413.535 307.331 413.804 307.08C414.084 306.829 414.354 306.589 414.633 306.359C415.193 305.888 415.762 305.447 416.332 305.016C416.621 304.795 416.911 304.585 417.201 304.384C417.49 304.184 417.79 303.984 418.08 303.783C418.369 303.583 418.669 303.402 418.969 303.222C419.868 302.681 420.787 302.18 421.716 301.729C422.026 301.579 422.335 301.438 422.655 301.298C422.965 301.168 423.284 301.027 423.604 300.907C423.944 300.767 424.283 300.637 424.633 300.516C427.17 299.625 429.807 299.103 432.525 298.993C433.234 298.963 433.943 298.963 434.652 298.993C435.392 299.023 436.121 299.083 436.85 299.174C437.13 299.204 437.409 299.244 437.689 299.294C437.819 299.314 437.949 299.334 438.079 299.364C438.608 299.444 439.128 299.544 439.647 299.675C440.296 299.815 440.946 299.995 441.595 300.206C441.915 300.296 442.244 300.406 442.564 300.516C442.884 300.627 443.203 300.737 443.523 300.867C443.843 300.997 444.152 301.128 444.472 301.258C444.792 301.398 445.101 301.539 445.411 301.679C445.711 301.819 446.01 301.959 446.3 302.1C446.939 302.42 447.569 302.761 448.198 303.142C450.026 304.204 451.794 305.467 453.492 306.93C458.327 311.008 462.623 316.54 466.119 323.143C466.509 323.845 466.868 324.556 467.228 325.288C467.308 325.458 467.398 325.638 467.468 325.809C467.538 325.929 467.597 326.049 467.647 326.17C467.647 326.18 467.647 326.19 467.647 326.2C467.647 326.21 467.657 326.23 467.667 326.25C467.757 326.41 467.827 326.56 467.887 326.721C467.977 326.881 468.047 327.041 468.117 327.212C468.357 327.723 468.586 328.234 468.806 328.755C468.896 328.965 468.986 329.186 469.086 329.416C469.326 329.998 469.565 330.599 469.795 331.2C470.065 331.881 470.325 332.563 470.564 333.264C470.714 333.655 470.844 334.046 470.974 334.447C471.134 334.898 471.284 335.349 471.423 335.8C471.543 336.13 471.643 336.461 471.743 336.802C471.863 337.152 471.963 337.513 472.073 337.874C472.143 338.104 472.203 338.325 472.263 338.555C472.582 339.658 472.882 340.78 473.162 341.922C473.172 341.952 473.182 341.982 473.182 342.002C473.301 342.493 473.411 342.984 473.521 343.475C473.571 343.656 473.601 343.826 473.641 344.007C473.711 344.297 473.771 344.588 473.831 344.888C473.931 345.339 474.021 345.8 474.111 346.251C474.26 347.003 474.4 347.754 474.52 348.516C474.57 348.807 474.62 349.107 474.66 349.398C474.71 349.648 474.74 349.899 474.78 350.149C474.79 350.169 474.79 350.199 474.79 350.23C474.84 350.53 474.89 350.821 474.92 351.121C475.03 351.843 475.12 352.564 475.199 353.286C475.199 353.286 475.203 353.292 475.209 353.306C475.249 353.606 475.279 353.897 475.309 354.198C475.359 354.669 475.409 355.13 475.449 355.601C475.489 355.951 475.519 356.312 475.549 356.673C475.599 357.204 475.639 357.745 475.669 358.286C475.739 359.228 475.789 360.18 475.829 361.142C475.839 361.473 475.829 361.793 475.849 362.124C475.879 363.016 475.889 363.898 475.899 364.79C475.899 365.201 475.899 365.621 475.899 366.032C475.899 367.195 475.859 368.337 475.809 369.479H475.799Z"
        fill="#89846A" />
      <path
        d="M475.799 369.479C475.799 369.64 475.799 369.81 475.789 369.97C475.769 370.502 475.739 371.023 475.699 371.554C475.679 371.874 475.659 372.195 475.629 372.516C475.629 372.626 475.619 372.726 475.609 372.836C475.579 373.247 475.539 373.648 475.509 374.049C475.509 374.149 475.489 374.249 475.479 374.35C475.449 374.64 475.419 374.941 475.389 375.241C475.359 375.582 475.32 375.913 475.28 376.243C475.24 376.604 475.2 376.965 475.15 377.326C475.14 377.416 475.13 377.506 475.12 377.586C475.07 377.987 475.01 378.398 474.95 378.799C474.95 378.809 474.95 378.819 474.95 378.829C474.9 379.24 474.84 379.64 474.77 380.051C474.75 380.222 474.72 380.392 474.69 380.562C474.67 380.713 474.64 380.873 474.61 381.023C474.58 381.254 474.54 381.474 474.5 381.705C474.46 381.905 474.43 382.106 474.391 382.306C474.341 382.587 474.291 382.877 474.231 383.158C474.211 383.298 474.181 383.428 474.151 383.569C474.111 383.789 474.061 384.02 474.011 384.24C473.901 384.821 473.771 385.402 473.641 385.974C473.591 386.184 473.551 386.384 473.491 386.595C473.481 386.665 473.462 386.735 473.442 386.815C473.402 386.996 473.352 387.186 473.312 387.367C473.192 387.878 473.062 388.389 472.922 388.89C472.463 390.643 471.943 392.347 471.384 394.01C471.284 394.311 471.184 394.612 471.074 394.912C470.994 395.153 470.904 395.393 470.814 395.634C470.585 396.275 470.345 396.916 470.095 397.538C469.725 398.49 469.336 399.432 468.926 400.343C468.597 401.085 468.257 401.816 467.907 402.528C467.468 403.42 467.018 404.302 466.549 405.153C466.009 406.145 465.45 407.107 464.861 408.049C464.211 409.092 463.552 410.094 462.863 411.046C461.244 413.3 459.516 415.345 457.668 417.158C451.874 422.85 445.012 426.247 437.569 426.538C436.131 426.598 434.692 426.538 433.284 426.367C432.924 426.327 432.565 426.277 432.205 426.217C431.865 426.157 431.526 426.097 431.176 426.027C430.757 425.947 430.347 425.856 429.927 425.746C429.678 425.676 429.428 425.616 429.178 425.546C428.739 425.425 428.299 425.295 427.86 425.135C427.6 425.055 427.33 424.954 427.07 424.864C426.731 424.744 426.391 424.614 426.062 424.473C425.722 424.333 425.392 424.193 425.063 424.043C424.763 423.912 424.463 423.772 424.164 423.622C423.474 423.291 422.795 422.93 422.126 422.539C421.806 422.359 421.486 422.169 421.167 421.968C420.847 421.768 420.527 421.567 420.218 421.357C422.605 422.139 426.811 423.171 431.965 422.539C431.965 422.539 436.301 422.008 440.486 419.994C445.491 417.589 454.561 409.793 460.056 392.006C468.976 363.086 463.192 324.687 442.834 309.846C436.381 305.136 431.016 304.655 429.428 304.575C423.934 304.274 419.069 306.158 415.133 308.633C409.559 312.13 405.843 316.81 404.834 318.113C404.834 318.063 404.884 318.003 404.934 317.933C405.024 317.782 405.124 317.632 405.224 317.482C405.413 317.171 405.613 316.86 405.813 316.55C405.863 316.479 405.903 316.399 405.953 316.329C406.153 316.039 406.342 315.738 406.542 315.457C407.371 314.245 408.22 313.092 409.119 312.01C409.359 311.71 409.609 311.419 409.859 311.128C410.058 310.898 410.258 310.667 410.458 310.437C410.768 310.086 411.077 309.746 411.397 309.425C411.657 309.144 411.917 308.874 412.186 308.613C412.456 308.353 412.716 308.092 412.985 307.832C413.255 307.581 413.535 307.331 413.805 307.08C414.084 306.829 414.354 306.589 414.634 306.359C415.193 305.888 415.762 305.447 416.332 305.016C416.622 304.795 416.911 304.585 417.201 304.384C417.491 304.184 417.79 303.984 418.08 303.783C418.37 303.583 418.669 303.402 418.969 303.222C419.868 302.681 420.787 302.18 421.716 301.729C422.026 301.579 422.335 301.438 422.655 301.298C422.965 301.168 423.284 301.027 423.604 300.907C423.944 300.767 424.283 300.637 424.633 300.516C427.17 299.625 429.808 299.103 432.525 298.993C433.234 298.963 433.943 298.963 434.652 298.993C435.392 299.023 436.121 299.083 436.85 299.174C437.13 299.204 437.41 299.244 437.689 299.294C437.819 299.314 437.949 299.334 438.079 299.364C438.608 299.444 439.128 299.544 439.647 299.675C440.297 299.815 440.946 299.995 441.595 300.206C441.915 300.296 442.244 300.406 442.564 300.516C442.884 300.627 443.203 300.737 443.523 300.867C443.843 300.997 444.152 301.128 444.472 301.258C444.792 301.398 445.101 301.539 445.411 301.679C445.711 301.819 446.01 301.959 446.3 302.1C446.94 302.42 447.569 302.761 448.198 303.142C450.026 304.204 451.794 305.467 453.493 306.93C458.327 311.008 462.623 316.54 466.119 323.143C466.509 323.845 466.868 324.556 467.228 325.288C467.308 325.458 467.398 325.638 467.468 325.809C467.538 325.929 467.598 326.049 467.648 326.17C467.648 326.18 467.648 326.19 467.648 326.2C467.648 326.21 467.658 326.23 467.668 326.25C467.758 326.41 467.827 326.56 467.887 326.721C467.977 326.881 468.047 327.041 468.117 327.212C468.357 327.723 468.587 328.234 468.806 328.755C468.896 328.965 468.986 329.186 469.086 329.416C469.326 329.998 469.566 330.599 469.795 331.2C470.065 331.881 470.325 332.563 470.565 333.264C470.714 333.655 470.844 334.046 470.974 334.447C471.134 334.898 471.284 335.349 471.424 335.8C471.544 336.13 471.643 336.461 471.743 336.802C471.863 337.152 471.963 337.513 472.073 337.874C472.143 338.104 472.203 338.325 472.263 338.555C472.582 339.658 472.882 340.78 473.162 341.922C473.172 341.952 473.182 341.982 473.182 342.002C473.302 342.493 473.412 342.984 473.521 343.475C473.571 343.656 473.601 343.826 473.641 344.007C473.711 344.297 473.771 344.588 473.831 344.888C473.931 345.339 474.021 345.8 474.111 346.251C474.261 347.003 474.4 347.754 474.52 348.516C474.57 348.807 474.62 349.107 474.66 349.398C474.71 349.648 474.74 349.899 474.78 350.149C474.79 350.169 474.79 350.199 474.79 350.23C474.84 350.53 474.89 350.821 474.92 351.121C475.03 351.843 475.12 352.564 475.2 353.286C475.2 353.286 475.203 353.292 475.21 353.306C475.25 353.606 475.28 353.897 475.31 354.198C475.359 354.669 475.409 355.13 475.449 355.601C475.489 355.951 475.519 356.312 475.549 356.673C475.599 357.204 475.639 357.745 475.669 358.286C475.739 359.228 475.789 360.18 475.829 361.142C475.839 361.473 475.829 361.793 475.849 362.124C475.879 363.016 475.889 363.898 475.899 364.79C475.899 365.201 475.899 365.621 475.899 366.032C475.899 367.195 475.859 368.337 475.809 369.479H475.799Z"
        fill="#CEC69F" />
      <path
        d="M437.559 426.548C436.121 426.608 434.682 426.548 433.274 426.368C432.914 426.327 432.554 426.277 432.195 426.217C431.845 426.167 431.506 426.097 431.166 426.027C430.746 425.947 430.337 425.857 429.917 425.746C429.667 425.686 429.418 425.616 429.168 425.546C428.728 425.426 428.289 425.295 427.849 425.135C427.59 425.055 427.32 424.965 427.06 424.864C426.721 424.744 426.391 424.614 426.051 424.474C425.712 424.343 425.382 424.193 425.052 424.043C424.753 423.912 424.453 423.772 424.153 423.622C423.464 423.291 422.785 422.93 422.115 422.54C421.796 422.359 421.476 422.169 421.156 421.968C420.837 421.778 420.517 421.568 420.207 421.357C419.788 421.087 419.368 420.796 418.959 420.495C418.929 420.475 418.899 420.445 418.869 420.425C418.429 420.105 417.99 419.774 417.56 419.423C417.141 419.102 416.731 418.752 416.322 418.401C416.302 418.391 416.282 418.371 416.272 418.351C411.587 414.313 407.421 408.911 404.005 402.498C403.375 401.336 402.776 400.133 402.216 398.901C401.927 398.289 401.647 397.668 401.377 397.037C401.098 396.405 400.838 395.774 400.578 395.123C400.318 394.481 400.069 393.83 399.829 393.169C399.579 392.507 399.34 391.836 399.11 391.165C398.91 390.583 398.72 390.002 398.54 389.411C398.311 388.729 398.101 388.028 397.901 387.327C397.761 386.856 397.631 386.375 397.501 385.904C397.372 385.423 397.242 384.942 397.122 384.461C396.992 383.98 396.872 383.489 396.762 382.998C396.662 382.577 396.562 382.156 396.473 381.725C396.443 381.635 396.423 381.545 396.403 381.444C396.193 380.482 396.003 379.51 395.813 378.538C395.753 378.198 395.693 377.847 395.633 377.506C395.334 375.813 395.084 374.089 394.874 372.346C394.565 369.74 394.355 367.085 394.245 364.389C394.105 360.982 394.145 357.635 394.345 354.358C394.345 354.208 394.365 354.068 394.375 353.917C394.405 353.496 394.435 353.086 394.465 352.665C394.535 351.743 394.625 350.821 394.714 349.909C394.734 349.829 394.734 349.749 394.744 349.658C394.804 349.167 394.864 348.676 394.924 348.175C395.094 346.823 395.294 345.47 395.524 344.147C395.633 343.516 395.743 342.884 395.863 342.263C396.013 341.492 396.173 340.73 396.343 339.968C396.383 339.788 396.423 339.618 396.463 339.447C396.562 339.016 396.662 338.596 396.762 338.175C396.872 337.724 396.992 337.263 397.112 336.812C397.212 336.411 397.322 336.01 397.432 335.609C398.401 332.122 399.579 328.805 400.928 325.699C401.068 325.358 401.218 325.027 401.367 324.707C401.547 324.306 401.727 323.905 401.917 323.524C402.097 323.154 402.266 322.793 402.456 322.432C402.636 322.051 402.826 321.68 403.026 321.32C403.205 320.949 403.405 320.588 403.605 320.237C403.725 319.997 403.865 319.766 403.995 319.526L404.204 319.165C404.404 318.815 404.614 318.464 404.824 318.123C404.954 317.903 405.083 317.692 405.213 317.482C405.403 317.171 405.603 316.86 405.803 316.55C405.853 316.48 405.893 316.4 405.943 316.329C406.142 316.039 406.332 315.738 406.532 315.458C407.361 314.245 408.21 313.093 409.109 312.01C409.349 311.71 409.589 311.419 409.848 311.129C410.038 310.888 410.248 310.658 410.448 310.437C410.757 310.086 411.067 309.746 411.387 309.425C411.637 309.144 411.906 308.874 412.176 308.613C412.436 308.343 412.705 308.082 412.975 307.832C413.245 307.571 413.515 307.321 413.794 307.08C414.074 306.83 414.344 306.589 414.623 306.359C415.183 305.888 415.742 305.437 416.322 305.016C416.601 304.795 416.891 304.585 417.191 304.385C417.48 304.174 417.77 303.974 418.07 303.783C418.359 303.583 418.659 303.403 418.959 303.222C419.858 302.671 420.777 302.17 421.706 301.729C422.016 301.569 422.335 301.428 422.645 301.298C422.955 301.158 423.274 301.018 423.594 300.907C423.964 300.747 424.353 300.607 424.733 300.466C427.24 299.595 429.837 299.094 432.514 298.983"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M467.217 325.288C467.297 325.458 467.387 325.638 467.457 325.809C467.526 325.939 467.596 326.069 467.646 326.199C467.666 326.22 467.666 326.23 467.666 326.25C467.756 326.41 467.826 326.56 467.886 326.721C467.976 326.881 468.046 327.041 468.116 327.212C468.236 327.462 468.346 327.713 468.446 327.963C468.575 328.224 468.685 328.484 468.805 328.755C468.895 328.965 468.985 329.186 469.085 329.416C469.325 329.997 469.564 330.599 469.794 331.2C469.874 331.39 469.954 331.591 470.014 331.791C470.194 332.232 470.353 332.673 470.503 333.114C470.533 333.164 470.553 333.214 470.563 333.264C470.713 333.655 470.843 334.046 470.973 334.447C471.133 334.898 471.282 335.348 471.422 335.799C471.542 336.13 471.642 336.461 471.742 336.801C471.852 337.152 471.962 337.513 472.072 337.874C472.142 338.104 472.202 338.325 472.261 338.555C472.581 339.657 472.881 340.78 473.161 341.922C473.171 341.952 473.18 341.982 473.18 342.002C473.3 342.493 473.41 342.984 473.52 343.475C473.57 343.656 473.6 343.826 473.64 344.006C473.71 344.297 473.77 344.598 473.83 344.888C473.89 345.169 473.95 345.459 474 345.74C474.04 345.91 474.07 346.081 474.11 346.251C474.259 347.003 474.399 347.754 474.519 348.516C474.569 348.806 474.619 349.107 474.659 349.398C474.709 349.648 474.739 349.899 474.779 350.149C474.789 350.169 474.789 350.199 474.789 350.229C474.799 350.259 474.799 350.289 474.799 350.32C474.849 350.58 474.889 350.851 474.919 351.121C475.029 351.843 475.118 352.564 475.198 353.286C475.198 353.286 475.202 353.292 475.208 353.306C475.238 353.596 475.278 353.897 475.308 354.198C475.328 354.408 475.358 354.618 475.368 354.829C475.408 355.079 475.428 355.34 475.448 355.6C475.488 355.951 475.518 356.312 475.548 356.673C475.598 357.204 475.638 357.745 475.668 358.286C475.738 359.228 475.788 360.18 475.828 361.142C475.948 364.128 475.928 367.074 475.788 369.97C475.768 370.431 475.748 370.892 475.708 371.343C475.708 371.413 475.708 371.483 475.698 371.554C475.678 371.874 475.658 372.195 475.628 372.516C475.628 372.626 475.618 372.726 475.608 372.836C475.578 373.237 475.548 373.648 475.508 374.049V374.069C475.498 374.159 475.488 374.249 475.478 374.349C475.448 374.64 475.418 374.941 475.388 375.241C475.368 375.452 475.348 375.662 475.318 375.873C475.318 376.003 475.298 376.123 475.278 376.243C475.238 376.604 475.198 376.965 475.148 377.326C475.148 377.336 475.148 377.346 475.138 377.356C475.138 377.436 475.128 377.506 475.118 377.586C475.069 377.987 475.009 378.398 474.949 378.799C474.889 379.219 474.829 379.63 474.759 380.051C474.739 380.222 474.709 380.392 474.679 380.562C474.659 380.713 474.629 380.873 474.599 381.023C474.569 381.254 474.529 381.484 474.489 381.705C474.449 381.905 474.419 382.105 474.379 382.306C474.329 382.586 474.279 382.877 474.219 383.158C474.199 383.298 474.169 383.428 474.139 383.568C474.1 383.789 474.05 384.019 474 384.24C473.89 384.821 473.76 385.402 473.63 385.973C473.58 386.184 473.54 386.384 473.48 386.595C473.47 386.665 473.45 386.735 473.43 386.815C473.39 386.996 473.35 387.186 473.3 387.366C473.18 387.877 473.051 388.388 472.911 388.89C472.861 389.11 472.801 389.32 472.741 389.531"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M441.123 386.365C439.545 387.287 437.837 387.808 436.029 387.878C431.034 388.068 426.429 384.701 423.282 379.22C420.805 374.991 419.216 369.47 418.977 363.397C418.727 357.345 419.896 351.743 421.984 347.314C424.711 341.602 429.036 337.844 434.041 337.644C435.839 337.574 437.577 337.964 439.225 338.776C445.708 341.863 450.653 351.072 451.093 362.125C451.532 373.167 447.327 382.737 441.123 386.355V386.365Z"
        fill="#2E3D25" />
      <path
        d="M441.123 386.365C439.545 387.287 437.837 387.808 436.029 387.878C431.034 388.068 426.429 384.701 423.282 379.22C420.805 374.991 419.216 369.47 418.977 363.397C418.727 357.345 419.896 351.743 421.984 347.314C424.711 341.602 429.036 337.844 434.041 337.644C435.839 337.574 437.577 337.964 439.225 338.776C445.708 341.863 450.653 351.072 451.093 362.125C451.532 373.167 447.327 382.737 441.123 386.355V386.365Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M441.125 386.364C440.825 386.384 440.525 386.384 440.226 386.384C433.583 386.384 427.569 383.648 423.274 379.219C419.058 374.93 416.471 369.038 416.471 362.555C416.471 356.753 418.529 351.442 421.975 347.313C426.121 342.303 432.294 339.046 439.227 338.775C445.71 341.862 450.655 351.071 451.094 362.124C451.534 373.167 447.328 382.737 441.125 386.354V386.364Z"
        fill="#0E5B4C" />
      <path
        d="M441.125 386.364C440.825 386.384 440.525 386.384 440.226 386.384C433.583 386.384 427.569 383.648 423.274 379.219C419.058 374.93 416.471 369.038 416.471 362.555C416.471 356.753 418.529 351.442 421.975 347.313C426.121 342.303 432.294 339.046 439.227 338.775C445.71 341.862 450.655 351.071 451.094 362.124C451.534 373.167 447.328 382.737 441.125 386.354V386.364Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M734.536 388.148C654.66 392.598 574.774 397.057 494.899 401.516C488.405 400.103 481.902 398.7 475.409 397.287C477.497 348.286 467.777 309.505 448.308 301.308C437.09 296.579 427.839 299.625 427.839 299.625C426.751 299.986 425.712 300.417 424.733 300.908C424.353 301.048 423.964 301.188 423.594 301.348C423.274 301.459 422.955 301.599 422.645 301.739C422.335 301.87 422.016 302.01 421.706 302.17C420.777 302.611 419.858 303.112 418.959 303.663C418.659 303.844 418.359 304.024 418.07 304.224C417.77 304.415 417.48 304.615 417.191 304.826C416.891 305.026 416.601 305.237 416.322 305.457C415.742 305.878 415.183 306.329 414.623 306.8C414.344 307.03 414.074 307.271 413.794 307.521C413.515 307.762 413.245 308.012 412.975 308.273C412.705 308.523 412.436 308.784 412.176 309.054C411.906 309.315 411.637 309.586 411.387 309.866C411.067 310.187 410.757 310.528 410.448 310.878C410.248 311.099 410.038 311.329 409.848 311.57C409.589 311.86 409.349 312.151 409.109 312.451C408.21 313.534 407.361 314.686 406.532 315.899C406.332 316.179 406.142 316.48 405.943 316.77C405.893 316.841 405.853 316.921 405.803 316.991C405.603 317.302 405.403 317.612 405.213 317.923C405.083 318.133 404.954 318.344 404.824 318.554C404.614 318.905 404.404 319.256 404.204 319.606C401.367 324.847 398.211 331.992 396.163 340.83C392.986 354.519 393.875 366.213 395.054 373.638C324.279 349.999 253.494 326.36 182.718 302.721C179.062 290.185 175.096 271.326 175.926 248.268C176.795 224.088 182.598 204.788 187.413 192.332C202.078 166.188 216.752 140.044 231.417 113.9C235.972 105.783 244.173 100.392 253.414 99.4498C308.206 93.8281 370.26 90.7618 438.248 92.8962C526.935 95.682 605.652 106.705 672.111 120.293C681.472 122.207 689.064 129.051 691.971 138.18C702.559 171.439 713.158 204.708 723.757 237.967C732.797 245.713 746.283 259.702 753.975 280.946C773.235 334.116 738.232 383.138 734.536 388.148Z"
        fill="#FFAFC4" />
      <path
        d="M755.245 344.629C754.986 345.531 754.726 346.422 754.446 347.304V347.324C753.867 349.218 753.257 351.072 752.608 352.876C752.268 353.848 751.919 354.81 751.549 355.752C751.549 355.752 751.549 355.762 751.539 355.762C750.141 359.489 748.642 362.957 747.134 366.143C746.804 366.845 746.475 367.526 746.145 368.198C740.89 378.91 735.826 385.964 734.537 387.708C670.844 391.255 607.152 394.813 543.459 398.37C548.653 370.222 553.858 342.073 559.052 313.925C560.111 308.173 565.036 303.944 570.86 303.784C633.424 302 695.988 300.207 758.562 298.423C761.169 315.198 759.091 331.051 755.245 344.639V344.629Z"
        fill="#F28BAB" />
      <path
        d="M741.959 257.487C658.987 258.57 599.11 259.652 588.492 260.253C586.773 260.353 583.237 260.614 578.902 261.927C571.23 264.251 565.466 268.52 561.41 272.378C559.862 270.304 557.274 267.147 553.488 264.021C540.322 253.138 525.998 253.549 499.016 250.152C491.084 249.15 479.357 247.487 465.002 244.691C551.9 242.877 638.798 241.053 725.697 239.229C730.601 243.629 736.485 249.671 741.959 257.487Z"
        fill="#FFFDF3" />
      <path
        d="M678.025 121.816C635.999 117.106 589.678 114.2 539.671 114.491C504.069 114.701 470.534 116.505 439.297 119.361C436.2 119.642 433.094 119.581 430.007 119.161C412.885 116.836 395.453 114.691 377.732 112.727C331.251 107.577 286.329 104.139 243.154 102.095C246.301 100.442 249.767 99.3896 253.403 99.0188C308.206 93.3871 370.26 90.3208 438.248 92.4552C526.935 95.241 605.651 106.264 672.111 119.852C674.179 120.273 676.167 120.934 678.025 121.816Z"
        fill="#FFD9E5" />
      <path
        d="M487.088 399.382C483.192 398.54 479.296 397.688 475.41 396.846C477.498 347.845 467.778 309.064 448.309 300.867C446.061 299.925 443.893 299.284 441.865 298.883C438.549 296.328 434.473 293.803 429.479 291.498C435.892 291.428 448.758 292.25 460.696 300.597C473.622 309.646 478.227 322.452 482.183 333.956C490.654 358.637 489.835 382.156 487.088 399.382Z"
        fill="#FFD9E5" />
      <path
        d="M448.309 300.867C447.47 300.517 446.641 300.206 445.822 299.935C445.542 299.835 445.272 299.755 445.002 299.675C444.703 299.575 444.403 299.484 444.103 299.404C443.864 299.344 443.634 299.284 443.414 299.234C443.114 299.154 442.815 299.084 442.525 299.024C442.305 298.963 442.086 298.923 441.866 298.883C441.266 298.753 440.677 298.653 440.098 298.573C439.808 298.522 439.518 298.492 439.239 298.462C438.959 298.422 438.679 298.392 438.409 298.372C438.16 298.342 437.92 298.322 437.68 298.312C437.6 298.292 437.51 298.292 437.43 298.292C437.181 298.272 436.941 298.262 436.711 298.252C431.367 298.021 427.841 299.184 427.841 299.184C427.471 299.304 427.111 299.434 426.752 299.575C426.052 299.845 425.383 300.146 424.734 300.467C424.354 300.607 423.965 300.747 423.595 300.907C423.275 301.018 422.956 301.158 422.646 301.298C422.336 301.428 422.017 301.569 421.707 301.729C420.778 302.17 419.859 302.671 418.96 303.222C418.66 303.403 418.361 303.583 418.071 303.783C417.771 303.974 417.482 304.174 417.192 304.385C416.892 304.585 416.602 304.795 416.323 305.016C415.743 305.437 415.184 305.888 414.625 306.359C414.345 306.589 414.075 306.83 413.795 307.08C413.516 307.321 413.246 307.571 412.976 307.832C412.707 308.082 412.437 308.343 412.177 308.613C411.907 308.874 411.638 309.144 411.388 309.425C411.068 309.746 410.759 310.086 410.449 310.437C410.249 310.658 410.039 310.888 409.85 311.129C409.59 311.419 409.35 311.71 409.11 312.01C408.211 313.093 407.362 314.245 406.533 315.458C406.333 315.738 406.144 316.039 405.944 316.329C405.894 316.4 405.854 316.48 405.804 316.55C405.604 316.86 405.404 317.171 405.214 317.482L404.825 318.113C404.615 318.464 404.405 318.815 404.206 319.165C404.136 319.286 404.066 319.406 403.996 319.526C378.673 312.231 353.339 304.926 328.026 297.641C325.808 293.783 323.591 289.935 321.373 286.077C346.057 293.472 370.741 300.857 395.425 308.253C396.154 306.96 397.243 305.216 398.791 303.332C398.791 303.332 402.098 299.294 406.393 296.468C414.135 291.378 427.331 289.674 438.809 294.705C442.895 296.488 446.031 298.813 448.309 300.867Z"
        fill="#E8749E" />
      <path
        d="M572.767 351.461C569.39 351.461 566.513 348.495 566.284 344.707L566.164 342.733C566.134 342.182 566.503 341.701 567.003 341.661C567.512 341.641 567.922 342.042 567.962 342.593L568.082 344.567C568.252 347.383 570.449 349.567 572.977 349.447L749.24 340.869C751.708 340.749 753.686 338.495 753.736 335.739L753.806 332.292C753.816 331.751 754.215 331.31 754.705 331.31H754.725C755.224 331.32 755.614 331.781 755.604 332.332L755.534 335.779C755.464 339.587 752.737 342.703 749.32 342.863L573.057 351.441C572.967 351.441 572.867 351.441 572.777 351.441L572.767 351.461Z"
        fill="#2D2226" />
      <path
        d="M750.028 354.158C751.137 354.107 752.126 353.627 752.905 352.875C752.595 353.847 752.286 354.809 751.956 355.751V355.761C751.377 355.991 750.757 356.122 750.128 356.152L573.864 364.729C573.774 364.739 573.684 364.739 573.584 364.739C570.218 364.739 567.331 361.763 567.101 357.975L566.981 356.011C566.941 355.45 567.321 354.979 567.821 354.939C568.32 354.929 568.75 355.32 568.78 355.871L568.899 357.845C569.069 360.661 571.277 362.845 573.794 362.725L750.048 354.158H750.028Z"
        fill="#2D2226" />
      <path
        d="M755.273 344.627C755.044 345.529 754.804 346.421 754.555 347.303L754.595 345.579C754.595 345.118 754.894 344.738 755.273 344.627Z"
        fill="#2D2226" />
      <path
        d="M444.932 141.747C444.103 136.607 447.619 131.777 452.753 130.995C475.499 127.528 500.593 124.952 527.734 124.071C582.946 122.277 631.375 127.949 670.723 135.665C674.05 136.316 676.757 138.721 677.806 141.958C686.856 169.866 695.907 197.763 704.947 225.671C706.885 231.634 702.53 237.786 696.276 237.927C620.656 239.56 545.046 241.193 469.426 242.817C464.781 242.917 460.765 239.57 460.016 234.961C454.991 203.896 449.956 172.822 444.932 141.757V141.747Z"
        fill="#383A37" />
      <path opacity="0.42"
        d="M689.874 232.896C667.677 233.357 645.471 233.828 623.274 234.299C616.271 234.439 609.259 234.59 602.256 234.74C601.977 234.75 601.707 234.75 601.427 234.76C595.094 234.89 588.761 235.02 582.427 235.161C580.769 235.201 579.101 235.231 577.443 235.271C570.829 235.411 564.216 235.542 557.603 235.682C548.733 235.872 539.872 236.053 531.002 236.243C524.419 236.383 517.845 236.524 511.262 236.664C500.604 236.884 489.935 237.115 479.276 237.335C474.961 237.425 471.235 234.379 470.535 230.2C465.87 201.992 461.205 173.783 456.53 145.575C455.761 140.895 459.028 136.516 463.793 135.805C468.717 135.073 473.752 134.382 478.917 133.74C486.069 132.859 493.441 132.077 501.033 131.426C503.87 131.185 506.737 130.955 509.634 130.754C515.318 130.343 521.122 130.003 527.026 129.762C528.714 129.692 530.422 129.632 532.13 129.572C532.55 129.552 532.969 129.532 533.399 129.522C537.724 129.381 542.01 129.301 546.245 129.261C547.514 129.241 548.773 129.231 550.031 129.231C556.634 129.191 563.128 129.281 569.491 129.462C605.932 130.494 638.458 134.732 666.149 140.044C669.236 140.635 671.753 142.819 672.722 145.755C681.123 171.098 689.524 196.43 697.925 221.763C699.723 227.184 695.678 232.766 689.874 232.896Z"
        fill="#EDEBDA" />
      <path opacity="0.31"
        d="M557.603 235.682C548.732 235.872 539.872 236.053 531.001 236.243C524.418 236.383 517.845 236.524 511.262 236.664C501.602 222.304 492.432 204.517 486.298 183.183C481.114 165.176 479.166 148.361 478.916 133.741C486.068 132.859 493.441 132.077 501.033 131.426C503.87 131.185 506.737 130.955 509.634 130.754C510.652 139.222 512.321 148.211 514.868 157.57C523.988 191.059 540.99 216.903 557.603 235.682Z"
        fill="#EFF0EB" />
      <path
        d="M444.932 141.747C444.103 136.607 447.619 131.777 452.753 130.995C475.499 127.528 500.593 124.952 527.734 124.071C582.946 122.277 631.375 127.949 670.723 135.665C674.05 136.316 676.757 138.721 677.806 141.958C686.856 169.866 695.907 197.763 704.947 225.671C706.885 231.634 702.53 237.786 696.276 237.927C620.656 239.56 545.046 241.193 469.426 242.817C464.781 242.917 460.765 239.57 460.016 234.961C454.991 203.896 449.956 172.822 444.932 141.757V141.747Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M408.05 227.786C389.27 224.349 370.49 220.912 351.71 217.475C347.494 216.703 343.288 215.931 339.073 215.16C336.606 214.709 334.148 214.258 331.681 213.807C328.694 213.266 325.697 212.715 322.71 212.164C316.557 211.041 310.393 209.909 304.24 208.787C297.337 207.524 293.101 200.489 295.199 193.775C301.583 173.303 307.966 152.841 314.359 132.368C315.957 127.238 320.832 123.861 326.187 124.181L343.079 125.193L348.143 125.494L353.797 125.835L368.042 126.686L404.754 128.881C410.557 129.232 415.223 133.811 415.682 139.623C417.71 164.856 419.748 190.098 421.776 215.34C422.385 223.006 415.592 229.169 408.05 227.786Z"
        fill="#383A37" />
      <path opacity="0.31"
        d="M348.145 125.493C345.278 137.328 342.571 149.634 340.084 162.41C336.608 180.187 333.85 197.353 331.683 213.807C328.696 213.266 325.699 212.714 322.712 212.163C320.385 196.872 320.135 176.8 327.527 155.265C331.753 142.93 337.537 132.919 343.081 125.193L348.145 125.493Z"
        fill="#EFF0EB" />
      <path opacity="0.31"
        d="M368.044 126.686C365.536 137.268 363.159 148.22 360.951 159.534C357.015 179.686 353.998 199.046 351.711 217.474C347.495 216.702 343.29 215.931 339.074 215.159C341.272 195.158 344.319 174.194 348.394 152.399C350.083 143.33 351.891 134.472 353.799 125.834L368.044 126.686Z"
        fill="#EFF0EB" />
      <path
        d="M314.358 132.368C307.975 152.841 301.582 173.313 295.199 193.786C293.101 200.499 297.346 207.534 304.239 208.797C338.842 215.13 373.446 221.463 408.049 227.796C415.591 229.179 422.384 223.006 421.775 215.34C419.747 190.098 417.719 164.866 415.691 139.623C415.222 133.811 410.557 129.232 404.753 128.881L326.186 124.181C320.831 123.861 315.957 127.238 314.358 132.368Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M301.414 133.511C294.002 154.424 286.589 175.337 279.177 196.251C277.799 200.149 273.813 202.454 269.767 201.702L260.357 199.958L247.661 197.603L240.368 196.251L230.219 194.367L210.48 190.709C204.856 189.667 201.909 183.394 204.676 178.374C214.715 160.176 224.765 141.968 234.804 123.77C236.362 120.945 239.389 119.261 242.606 119.441L246.092 119.632L254.383 120.093L260.207 120.423L274.342 121.205L293.982 122.297C299.566 122.608 303.282 128.22 301.414 133.511Z"
        fill="#383A37" />
      <path opacity="0.31"
        d="M254.383 120.092C252.205 129.482 250.128 139.162 248.19 149.123C245.013 165.366 242.436 181.099 240.368 196.25L230.219 194.366C228.51 179.746 228.95 161.458 235.633 141.978C238.57 133.41 242.256 125.964 246.092 119.631L254.383 120.092Z"
        fill="#EFF0EB" />
      <path opacity="0.31"
        d="M274.342 121.205C272.494 129.342 270.726 137.689 269.058 146.247C265.421 164.865 262.574 182.803 260.357 199.958L247.66 197.603C249.818 178.895 252.715 159.364 256.501 139.112C257.68 132.779 258.918 126.546 260.207 120.423L274.342 121.205Z"
        fill="#EFF0EB" />
      <path
        d="M301.416 133.51C294.004 154.424 286.601 175.337 279.189 196.261C277.811 200.149 273.815 202.463 269.769 201.712L210.492 190.719C204.868 189.677 201.911 183.404 204.688 178.383C214.727 160.176 224.777 141.978 234.816 123.77C236.375 120.944 239.401 119.271 242.608 119.451L293.984 122.307C299.568 122.618 303.294 128.229 301.416 133.52V133.51Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M724.506 238.168C724.836 238.459 725.165 238.749 725.494 239.05C725.155 238.749 724.826 238.449 724.496 238.168C724.506 238.178 724.506 238.168 724.506 238.168Z"
        stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M726.854 240.281C727.633 240.993 728.432 241.754 729.241 242.546C728.422 241.754 727.633 240.993 726.854 240.281Z"
        stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M742.428 258.148C742.538 258.298 742.648 258.458 742.737 258.608C742.648 258.618 742.548 258.628 742.458 258.638C742.448 258.478 742.438 258.308 742.428 258.148Z"
        stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M443.114 212.463C443.983 213.355 445.531 215.219 446.24 218.035C447.449 222.784 445.341 226.662 444.822 227.554C440.127 228.135 435.422 228.706 430.727 229.287C430.377 224.187 430.027 219.087 429.678 213.986C434.153 213.475 438.628 212.974 443.104 212.463H443.114Z"
        fill="#FFAFC4" />
      <path
        d="M443.114 212.463C443.983 213.355 445.531 215.219 446.24 218.035C447.449 222.784 445.341 226.662 444.822 227.554C440.127 228.135 435.422 228.706 430.727 229.287C430.377 224.187 430.027 219.087 429.678 213.986C434.153 213.475 438.628 212.974 443.104 212.463H443.114Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M433.174 223.707C433.044 225.33 432.864 226.753 432.724 227.816C432.015 233.377 431.406 236.123 429.907 238.197C425.422 244.39 416.411 244.36 398.57 244.039C383.566 243.759 375.984 243.538 372.398 238.919C370.59 236.614 370.16 233.006 370.06 226.803C370.02 224.759 370.03 222.434 370.03 219.779C370.03 216.672 370.19 214.207 370.51 212.223C371.129 208.465 372.308 206.461 374.016 205.179C375.295 204.217 376.564 203.896 377.313 203.716C391.518 200.299 410.198 200.569 419.928 202.152C421.816 202.463 424.723 203.044 427.709 205.088C427.709 205.088 428.648 205.66 429.298 206.331C430.207 207.253 430.916 208.335 431.476 209.518C433.523 213.817 433.523 219.458 433.174 223.707Z"
        fill="#FFAFC4" />
      <path
        d="M431.477 209.517C415.404 207.874 402.198 208.435 392.429 209.437C383.158 210.389 375.347 211.902 370.512 212.223C371.131 208.465 372.31 206.461 374.018 205.178C375.297 204.217 376.565 203.896 377.315 203.715C391.52 200.299 410.2 200.569 419.93 202.152C421.818 202.463 424.724 203.044 427.711 205.088C427.711 205.088 428.65 205.659 429.3 206.331C430.209 207.253 430.918 208.335 431.477 209.517Z"
        fill="#FFD9E5" />
      <path
        d="M433.174 223.707C433.044 225.33 432.864 226.753 432.724 227.815C432.015 233.376 431.406 236.122 429.907 238.196C425.422 244.388 416.412 244.358 398.57 244.038C383.566 243.757 375.984 243.537 372.398 238.917C370.59 236.613 370.16 233.005 370.061 226.803C375.405 229.027 380.13 230.3 383.746 231.061C389.4 232.244 404.065 235.13 420.987 229.348C425.961 227.645 430.047 225.57 433.174 223.707Z"
        fill="#E8749E" />
      <path
        d="M370.031 219.779C370.031 210.781 371.41 207.133 374.017 205.179C375.296 204.217 376.564 203.896 377.314 203.716C391.529 200.299 410.209 200.559 419.939 202.153C421.827 202.463 424.733 203.045 427.72 205.089C427.72 205.089 428.649 205.66 429.309 206.331C434.773 211.883 433.314 223.256 432.735 227.816C432.026 233.377 431.416 236.123 429.918 238.197C425.433 244.39 416.422 244.36 398.581 244.04C383.577 243.769 375.995 243.538 372.399 238.919C370.011 235.853 370.031 230.491 370.031 219.779Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M290.406 216.943C299.507 219.037 308.597 221.131 317.697 223.225V226.272C317.697 230.791 313.492 234.127 309.106 233.085C304.621 232.023 300.146 230.961 295.661 229.889C292.464 229.127 290.226 226.242 290.286 222.945C290.326 220.941 290.356 218.937 290.396 216.933L290.406 216.943Z"
        fill="#E8749E" />
      <path
        d="M290.406 216.943C299.507 219.037 308.597 221.131 317.697 223.225V226.272C317.697 230.791 313.492 234.127 309.106 233.085C304.621 232.023 300.146 230.961 295.661 229.889C292.464 229.127 290.226 226.242 290.286 222.945C290.326 220.941 290.356 218.937 290.396 216.933L290.406 216.943Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M727.554 308.006L617.527 312.381C615.239 312.472 613.458 314.406 613.549 316.701C613.64 318.995 615.568 320.782 617.856 320.691L727.883 316.316C730.171 316.225 731.952 314.291 731.861 311.996C731.77 309.701 729.842 307.915 727.554 308.006Z"
        fill="#383A37" />
      <path
        d="M601.522 313.022L570.959 314.237C568.671 314.328 566.89 316.262 566.981 318.557C567.071 320.852 568.999 322.638 571.287 322.547L601.851 321.332C604.139 321.241 605.92 319.307 605.829 317.012C605.738 314.717 603.81 312.931 601.522 313.022Z"
        fill="#FFFDF3" />
      <path
        d="M601.522 313.022L570.959 314.237C568.671 314.328 566.89 316.262 566.981 318.557C567.071 320.852 568.999 322.638 571.287 322.547L601.851 321.332C604.139 321.241 605.92 319.307 605.829 317.012C605.738 314.717 603.81 312.931 601.522 313.022Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M734.536 388.148C654.66 392.598 574.774 397.057 494.899 401.516C488.405 400.103 481.902 398.7 475.409 397.287C477.497 348.286 467.777 309.505 448.308 301.308C437.09 296.579 427.839 299.625 427.839 299.625C426.751 299.986 425.712 300.417 424.733 300.908C424.353 301.048 423.964 301.188 423.594 301.348C423.274 301.459 422.955 301.599 422.645 301.739C422.335 301.87 422.016 302.01 421.706 302.17C420.777 302.611 419.858 303.112 418.959 303.663C418.659 303.844 418.359 304.024 418.07 304.224C417.77 304.415 417.48 304.615 417.191 304.826C416.891 305.026 416.601 305.237 416.322 305.457C415.742 305.878 415.183 306.329 414.623 306.8C414.344 307.03 414.074 307.271 413.794 307.521C413.515 307.762 413.245 308.012 412.975 308.273C412.705 308.523 412.436 308.784 412.176 309.054C411.906 309.315 411.637 309.586 411.387 309.866C411.067 310.187 410.757 310.528 410.448 310.878C410.248 311.099 410.038 311.329 409.848 311.57C409.589 311.86 409.349 312.151 409.109 312.451C408.21 313.534 407.361 314.686 406.532 315.899C406.332 316.179 406.142 316.48 405.943 316.77C405.893 316.841 405.853 316.921 405.803 316.991C405.603 317.302 405.403 317.612 405.213 317.923C405.083 318.133 404.954 318.344 404.824 318.554C404.614 318.905 404.404 319.256 404.204 319.606C401.367 324.847 398.211 331.992 396.163 340.83C392.986 354.519 393.875 366.213 395.054 373.638C324.279 349.999 253.494 326.36 182.718 302.721C179.062 290.185 175.096 271.326 175.926 248.268C176.795 224.088 182.598 204.788 187.413 192.332C202.078 166.188 216.752 140.044 231.417 113.9C235.972 105.783 244.173 100.392 253.414 99.4498C308.206 93.8281 370.26 90.7618 438.248 92.8962C526.935 95.682 605.652 106.705 672.111 120.293C681.472 122.207 689.064 129.051 691.971 138.18C702.559 171.439 713.158 204.708 723.757 237.967C732.797 245.713 746.283 259.702 753.975 280.946C773.235 334.116 738.232 383.138 734.536 388.148Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M437.559 426.548C436.121 426.608 434.682 426.548 433.274 426.368C432.914 426.327 432.554 426.277 432.195 426.217C431.845 426.167 431.506 426.097 431.166 426.027C430.746 425.947 430.337 425.857 429.917 425.746C429.667 425.686 429.418 425.616 429.168 425.546C428.728 425.426 428.289 425.295 427.849 425.135C427.59 425.055 427.32 424.965 427.06 424.864C426.721 424.744 426.391 424.614 426.051 424.474C425.712 424.343 425.382 424.193 425.052 424.043C424.753 423.912 424.453 423.772 424.153 423.622C423.464 423.291 422.785 422.93 422.115 422.54C421.796 422.359 421.476 422.169 421.156 421.968C420.837 421.778 420.517 421.568 420.207 421.357C419.788 421.087 419.368 420.796 418.959 420.495C418.929 420.475 418.899 420.445 418.869 420.425C418.429 420.105 417.99 419.774 417.56 419.423C417.141 419.102 416.731 418.752 416.322 418.401C416.302 418.391 416.282 418.371 416.272 418.351C411.587 414.313 407.421 408.911 404.005 402.498C403.375 401.336 402.776 400.133 402.216 398.901C401.927 398.289 401.647 397.668 401.377 397.037C401.098 396.405 400.838 395.774 400.578 395.123C400.318 394.481 400.069 393.83 399.829 393.169C399.579 392.507 399.34 391.836 399.11 391.165C398.91 390.583 398.72 390.002 398.54 389.411C398.311 388.729 398.101 388.028 397.901 387.327C397.761 386.856 397.631 386.375 397.501 385.904C397.372 385.423 397.242 384.942 397.122 384.461C396.992 383.98 396.872 383.489 396.762 382.998C396.662 382.577 396.562 382.156 396.473 381.725C396.443 381.635 396.423 381.545 396.403 381.444C396.193 380.482 396.003 379.51 395.813 378.538C395.753 378.198 395.693 377.847 395.633 377.506C395.334 375.813 395.084 374.089 394.874 372.346C394.565 369.74 394.355 367.085 394.245 364.389C394.105 360.982 394.145 357.635 394.345 354.358C394.355 354.208 394.365 354.068 394.375 353.917C394.405 353.496 394.435 353.086 394.465 352.665C394.535 351.743 394.625 350.821 394.714 349.909C394.734 349.829 394.734 349.749 394.744 349.658C394.804 349.167 394.864 348.676 394.924 348.175C395.094 346.823 395.294 345.47 395.524 344.147C395.633 343.516 395.743 342.884 395.863 342.263C396.013 341.492 396.173 340.73 396.343 339.968C396.383 339.788 396.423 339.618 396.463 339.447C396.562 339.016 396.662 338.596 396.762 338.175C396.872 337.724 396.992 337.263 397.112 336.812C397.212 336.411 397.322 336.01 397.432 335.609C398.401 332.122 399.579 328.805 400.928 325.699C401.068 325.358 401.218 325.027 401.367 324.707C401.547 324.306 401.727 323.905 401.917 323.524C402.097 323.154 402.266 322.793 402.456 322.432C402.636 322.051 402.826 321.68 403.026 321.32C403.205 320.949 403.405 320.588 403.605 320.237C403.725 319.997 403.865 319.766 403.995 319.526L404.204 319.165C404.404 318.815 404.614 318.464 404.824 318.123C404.954 317.903 405.083 317.692 405.213 317.482C405.403 317.171 405.603 316.86 405.803 316.55C405.853 316.48 405.893 316.4 405.943 316.329C406.142 316.039 406.332 315.738 406.532 315.458C407.361 314.245 408.21 313.093 409.109 312.01C409.349 311.71 409.589 311.419 409.848 311.129C410.038 310.888 410.248 310.658 410.448 310.437C410.757 310.086 411.067 309.746 411.387 309.425C411.637 309.144 411.906 308.874 412.176 308.613C412.436 308.343 412.705 308.082 412.975 307.832C413.245 307.571 413.515 307.321 413.794 307.08C414.074 306.83 414.344 306.589 414.623 306.359C415.183 305.888 415.742 305.437 416.322 305.016C416.601 304.795 416.891 304.585 417.191 304.385C417.48 304.174 417.77 303.974 418.07 303.783C418.359 303.583 418.659 303.403 418.959 303.222C419.858 302.671 420.777 302.17 421.706 301.729C422.016 301.569 422.335 301.428 422.645 301.298C422.955 301.158 423.274 301.018 423.594 300.907C423.964 300.747 424.353 300.607 424.733 300.466C427.24 299.595 429.837 299.094 432.514 298.983"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M568.151 276.457C568.191 277.038 568.261 277.639 568.361 278.25C568.861 281.126 570.039 283.381 571.228 285.024C572.727 287.099 575.094 288.281 577.581 288.231C589.998 287.981 602.415 287.73 614.832 287.49C616.051 287.47 617.19 286.808 617.869 285.736L617.889 285.716C618.089 285.405 618.408 285.245 618.718 285.245C618.768 285.245 618.808 285.245 618.858 285.245C619.078 285.275 619.287 285.385 619.457 285.576L620.166 286.367C620.506 286.748 620.986 286.958 621.475 286.938C627.229 286.748 632.993 286.558 638.747 286.367C671.023 285.305 703.299 284.243 735.575 283.171C736.254 283.151 736.903 282.94 737.463 282.559C737.512 282.519 737.572 282.489 737.622 282.449C737.672 282.419 737.712 282.379 737.762 282.349C737.842 282.289 737.912 282.219 737.992 282.149C737.992 282.149 738.012 282.138 738.012 282.128C738.142 282.008 738.252 281.878 738.362 281.738C738.412 281.668 738.471 281.597 738.511 281.527C738.511 281.527 738.511 281.517 738.521 281.507C738.571 281.437 738.611 281.367 738.651 281.297C738.651 281.297 738.651 281.287 738.661 281.277C738.701 281.207 738.731 281.146 738.771 281.076C738.901 280.816 739.011 280.545 739.091 280.255C739.161 280.235 739.201 280.235 739.231 280.225C739.281 280.214 739.321 280.204 739.44 280.174C739.91 280.726 740.389 281.267 740.869 281.808C741.548 282.589 742.527 283.01 743.536 282.97C747.892 282.8 752.247 282.63 756.602 282.449C757.561 282.409 758.36 281.668 758.51 280.675C758.94 277.91 759.21 272.649 756.193 268.059C751.887 261.516 742.647 258.95 734.016 262.668L732.538 261.947C731.119 261.255 729.561 260.914 727.993 260.965C704.318 261.676 680.653 262.378 656.978 263.089C647.458 263.37 637.948 263.66 628.428 263.941C626.799 263.991 625.241 264.622 624.002 265.724L623.753 265.945C623.553 266.115 623.333 266.236 623.103 266.286C622.973 266.316 622.834 266.336 622.704 266.326C622.294 266.316 621.895 266.135 621.595 265.785L621.515 265.694C620.786 264.843 619.737 264.372 618.648 264.402C604.933 264.863 591.217 265.314 577.501 265.775C572.087 265.955 567.772 270.755 568.121 276.437L568.151 276.457Z"
        fill="white" />
      <path
        d="M568.151 276.457C568.191 277.038 568.261 277.639 568.361 278.25C568.861 281.126 570.039 283.381 571.228 285.024C572.727 287.099 575.094 288.281 577.581 288.231C589.998 287.981 602.415 287.73 614.832 287.49C616.051 287.47 617.19 286.808 617.869 285.736L617.889 285.716C618.089 285.405 618.408 285.245 618.718 285.245C618.768 285.245 618.808 285.245 618.858 285.245C619.078 285.275 619.287 285.385 619.457 285.576L620.166 286.367C620.506 286.748 620.986 286.958 621.475 286.938C627.229 286.748 632.993 286.558 638.747 286.367C671.023 285.305 703.299 284.243 735.575 283.171C736.254 283.151 736.903 282.94 737.463 282.559C737.512 282.519 737.572 282.489 737.622 282.449C737.672 282.419 737.712 282.379 737.762 282.349C737.842 282.289 737.912 282.219 737.992 282.149C737.992 282.149 738.012 282.138 738.012 282.128C738.142 282.008 738.252 281.878 738.362 281.738C738.412 281.668 738.471 281.597 738.511 281.527C738.511 281.527 738.511 281.517 738.521 281.507C738.571 281.437 738.611 281.367 738.651 281.297C738.651 281.297 738.651 281.287 738.661 281.277C738.701 281.207 738.731 281.146 738.771 281.076C738.901 280.816 739.011 280.545 739.091 280.255C739.161 280.235 739.201 280.235 739.231 280.225C739.281 280.214 739.321 280.204 739.44 280.174C739.91 280.726 740.389 281.267 740.869 281.808C741.548 282.589 742.527 283.01 743.536 282.97C747.892 282.8 752.247 282.63 756.602 282.449C757.561 282.409 758.36 281.668 758.51 280.675C758.94 277.91 759.21 272.649 756.193 268.059C751.887 261.516 742.647 258.95 734.016 262.668L732.538 261.947C731.119 261.255 729.561 260.914 727.993 260.965C704.318 261.676 680.653 262.378 656.978 263.089C647.458 263.37 637.948 263.66 628.428 263.941C626.799 263.991 625.241 264.622 624.002 265.724L623.753 265.945C623.553 266.115 623.333 266.236 623.103 266.286C622.973 266.316 622.834 266.336 622.704 266.326C622.294 266.316 621.895 266.135 621.595 265.785L621.515 265.694C620.786 264.843 619.737 264.372 618.648 264.402C604.933 264.863 591.217 265.314 577.501 265.775C572.087 265.955 567.772 270.755 568.121 276.437L568.151 276.457Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M618.708 285.245C618.708 285.245 618.798 285.245 618.848 285.245C619.067 285.275 619.277 285.385 619.447 285.576L620.156 286.368C620.496 286.748 620.975 286.959 621.465 286.939C627.219 286.748 632.983 286.558 638.737 286.368C671.012 285.305 703.288 284.243 735.564 283.171C735.794 283.141 736.633 283.081 737.452 282.56C737.502 282.52 737.562 282.489 737.612 282.449C737.662 282.419 737.702 282.379 737.752 282.349C737.832 282.289 737.902 282.219 737.982 282.149C737.982 282.149 738.002 282.139 738.002 282.129C738.132 282.008 738.241 281.878 738.351 281.738C738.401 281.668 738.461 281.598 738.501 281.527C738.501 281.527 738.501 281.517 738.511 281.507C738.561 281.437 738.601 281.367 738.641 281.297C738.641 281.297 738.641 281.287 738.651 281.277C738.691 281.207 738.721 281.147 738.761 281.077C738.891 280.816 739.001 280.545 739.081 280.255C739.15 280.235 739.19 280.235 739.22 280.225C737.482 274.373 735.744 268.521 734.006 262.668L732.527 261.947C731.469 261.716 729.9 261.366 727.982 260.965C704.307 261.676 680.642 262.378 656.967 263.089C647.447 263.37 637.937 263.66 628.417 263.941C626.789 263.991 625.231 264.622 623.992 265.725L623.742 265.945C623.543 266.116 623.323 266.236 623.093 266.286C622.963 266.316 622.823 266.336 622.693 266.326C621.355 272.629 620.016 278.922 618.678 285.225L618.708 285.245Z"
        fill="#383A37" />
      <path
        d="M618.708 285.245C618.708 285.245 618.798 285.245 618.848 285.245C619.067 285.275 619.277 285.385 619.447 285.576L620.156 286.368C620.496 286.748 620.975 286.959 621.465 286.939C627.219 286.748 632.983 286.558 638.737 286.368C671.012 285.305 703.288 284.243 735.564 283.171C735.794 283.141 736.633 283.081 737.452 282.56C737.502 282.52 737.562 282.489 737.612 282.449C737.662 282.419 737.702 282.379 737.752 282.349C737.832 282.289 737.902 282.219 737.982 282.149C737.982 282.149 738.002 282.139 738.002 282.129C738.132 282.008 738.241 281.878 738.351 281.738C738.401 281.668 738.461 281.598 738.501 281.527C738.501 281.527 738.501 281.517 738.511 281.507C738.561 281.437 738.601 281.367 738.641 281.297C738.641 281.297 738.641 281.287 738.651 281.277C738.691 281.207 738.721 281.147 738.761 281.077C738.891 280.816 739.001 280.545 739.081 280.255C739.15 280.235 739.19 280.235 739.22 280.225C737.482 274.373 735.744 268.521 734.006 262.668L732.527 261.947C731.469 261.716 729.9 261.366 727.982 260.965C704.307 261.676 680.642 262.378 656.967 263.089C647.447 263.37 637.937 263.66 628.417 263.941C626.789 263.991 625.231 264.622 623.992 265.725L623.742 265.945C623.543 266.116 623.323 266.236 623.093 266.286C622.963 266.316 622.823 266.336 622.693 266.326C621.355 272.629 620.016 278.922 618.678 285.225L618.708 285.245Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1549.99 133.965V499.713C1532.95 504.634 1515.92 509.554 1498.87 514.474L1486.82 517.961L1476.6 520.907L1476.01 520.948L1475.12 520.998L1470.03 521.298C1473.1 509.454 1474.8 496.437 1474.8 482.768C1474.8 464.16 1471.65 446.744 1466.17 431.863C1461.62 419.527 1455.48 408.925 1448.19 400.828C1438.42 389.956 1426.6 383.603 1413.87 383.603C1405.56 383.603 1397.64 386.308 1390.42 391.228C1390.14 391.409 1389.87 391.589 1389.6 391.79C1389.49 391.87 1389.38 391.95 1389.27 392.03C1388.97 392.241 1388.67 392.461 1388.37 392.692C1388.03 392.932 1387.7 393.193 1387.36 393.463C1387.03 393.724 1386.7 393.994 1386.37 394.265C1386.06 394.505 1385.75 394.766 1385.45 395.036C1385.41 395.076 1385.37 395.107 1385.33 395.147C1385.02 395.397 1384.72 395.668 1384.42 395.938L1384.37 395.988C1383.73 396.56 1383.11 397.151 1382.49 397.762C1382.17 398.063 1381.86 398.383 1381.55 398.704C1381.23 399.025 1380.92 399.345 1380.61 399.676C1380.3 400.007 1379.99 400.337 1379.69 400.668C1379.08 401.339 1378.48 402.031 1377.89 402.742C1377.6 403.073 1377.33 403.414 1377.05 403.754C1376.35 404.626 1375.65 405.518 1374.97 406.44C1374.64 406.881 1374.32 407.332 1374 407.793C1373.63 408.304 1373.27 408.835 1372.91 409.366C1372.87 409.426 1372.82 409.486 1372.78 409.557C1372.46 410.027 1372.15 410.508 1371.84 410.989C1371.48 411.541 1371.13 412.092 1370.79 412.653C1370.44 413.214 1370.1 413.785 1369.77 414.356C1369.72 414.427 1369.68 414.497 1369.64 414.577C1369.35 415.078 1369.06 415.579 1368.77 416.1C1366.58 419.998 1364.59 424.197 1362.82 428.636C1362.62 429.107 1362.44 429.588 1362.25 430.069C1362.02 430.66 1361.79 431.262 1361.57 431.863C1361.21 432.835 1360.87 433.817 1360.53 434.809C1360.38 435.23 1360.24 435.651 1360.1 436.082C1359.89 436.723 1359.69 437.354 1359.49 438.006C1359.3 438.597 1359.12 439.178 1358.95 439.779C1358.79 440.28 1358.65 440.781 1358.51 441.292C1358.38 441.723 1358.26 442.164 1358.15 442.605C1357.65 444.419 1357.18 446.263 1356.76 448.126C1356.65 448.577 1356.55 449.028 1356.46 449.479C1356.34 449.97 1356.24 450.471 1356.14 450.962C1355.98 451.694 1355.84 452.425 1355.69 453.167C1355.58 453.758 1355.47 454.339 1355.37 454.931C1355.28 455.462 1355.19 456.013 1355.1 456.554C1354.44 460.422 1353.93 464.38 1353.58 468.419C1353.52 468.98 1353.48 469.541 1353.43 470.102V470.182C1353.36 470.994 1353.31 471.816 1353.26 472.627C1353.2 473.449 1353.16 474.281 1353.12 475.112V475.143C1353.08 475.914 1353.05 476.686 1353.03 477.467C1352.99 478.459 1352.97 479.451 1352.96 480.454C1352.95 481.215 1352.94 481.997 1352.94 482.768C1352.94 498.621 1355.22 513.592 1359.3 526.88C1359.38 527.18 1359.47 527.491 1359.57 527.792C1357.73 527.892 1355.88 528.002 1354.05 528.112H873.694C860.757 528.112 850.278 517.601 850.268 504.624C850.268 498.25 850.268 491.867 850.268 485.494C850.258 456.664 850.248 427.844 850.229 399.015V398.985C850.229 393.463 851.727 388.102 854.464 383.452C856.282 380.366 858.65 377.58 861.487 375.265V351.306C861.487 342.497 864.763 334.27 870.327 327.997C870.537 327.747 870.757 327.496 870.987 327.256C871.306 326.915 871.626 326.584 871.956 326.264C873.704 324.54 875.642 322.987 877.749 321.654C880.177 320.101 882.824 318.838 885.661 317.916C888.958 316.834 892.264 315.762 895.561 314.68C902.403 312.445 909.246 310.21 916.099 307.976H916.109C946.807 297.955 977.484 287.924 1008.17 277.903C1009.64 277.422 1011.12 276.941 1012.59 276.46C1016.63 275.138 1020.3 272.863 1023.29 269.827C1024.65 268.434 1026.03 267.041 1027.39 265.648C1041.64 251.188 1055.87 236.728 1070.1 222.268C1072.42 219.903 1074.75 217.548 1077.07 215.183C1094.35 197.637 1111.61 180.091 1128.88 162.544C1140.27 150.97 1154.07 142.312 1169.12 137.061C1179.04 133.594 1189.5 131.61 1200.19 131.249C1220.04 130.578 1240.06 130.047 1260.27 129.646C1360.87 127.692 1457.57 129.416 1550 133.965H1549.99Z"
        fill="#A18DE2" />
      <path
        d="M1549.99 133.965V142.843C1529.67 143.274 1513.27 143.624 1501.03 143.875C1483.64 144.246 1474.63 144.436 1474.63 144.436C1474.63 144.436 1385.13 135.448 1303.42 133.524C1230.23 131.79 1187.5 136.299 1169.11 137.061C1179.03 133.594 1189.49 131.61 1200.18 131.249C1220.03 130.578 1240.05 130.047 1260.26 129.646C1360.86 127.692 1457.56 129.416 1549.99 133.965Z"
        fill="#BFB2F9" />
      <path
        d="M1422.12 299.297C1397.49 308.226 1372.85 317.134 1348.23 326.063C1329.42 324.86 1301.28 323.157 1267.09 321.433C1185.83 317.345 1117.02 315.531 1068.48 314.719C1053.69 314.459 1040.79 314.309 1029.99 314.208C1020.93 314.118 1013.34 314.068 1007.37 314.048H1007.36C1006.78 314.038 1006.22 314.038 1005.67 314.038C1003.91 314.028 1002.13 314.028 1000.29 314.018C972.717 313.918 937.185 314.008 895.549 314.679C902.392 312.445 909.234 310.21 916.087 307.975H916.097C946.795 297.955 977.472 287.924 1008.16 277.903C1017.04 277.432 1027.39 276.951 1038.87 276.57C1066.88 275.648 1086.69 275.799 1112.36 276.64H1112.51C1119.33 276.871 1126.58 277.141 1134.53 277.452H1134.57C1135.98 277.512 1137.43 277.572 1138.91 277.622C1145.93 277.903 1153.49 278.214 1161.75 278.544C1176.38 279.136 1193.22 279.807 1213.19 280.518C1262.39 282.282 1311.56 287.613 1360.78 286.351C1366.57 286.2 1386.02 285.549 1411.24 289.808C1414.98 290.439 1418.45 291.11 1421.61 291.772C1425.46 292.594 1425.82 297.965 1422.12 299.297Z"
        fill="#BFB2F9" />
      <path opacity="0.79"
        d="M1134.57 277.453C1105.54 282.003 1072.2 289.659 1036.41 302.575C1026.25 306.243 1016.57 310.091 1007.37 314.049H1007.36C1006.78 314.039 1006.22 314.039 1005.67 314.039C1003.92 314.029 1002.13 314.029 1000.29 314.019C1005.17 310.241 1011.1 306.073 1018.03 301.974C1023.22 298.898 1049.73 283.596 1089.13 278.365C1095.48 277.533 1103.3 276.802 1112.36 276.642H1112.51C1119.33 276.872 1126.59 277.143 1134.53 277.453H1134.57Z"
        fill="#EFF0EB" />
      <path opacity="0.79"
        d="M1161.75 278.545C1149.82 281.591 1137.1 285.399 1123.77 290.189C1102.84 297.715 1084.38 306.242 1068.48 314.72C1053.7 314.459 1040.79 314.309 1029.99 314.209C1042.27 308.547 1055.56 302.976 1069.85 297.745C1094.52 288.706 1117.79 282.263 1138.92 277.623C1145.94 277.904 1153.49 278.214 1161.75 278.545Z"
        fill="#EFF0EB" />
      <path
        d="M1549.99 463.729V499.714C1532.95 504.634 1515.92 509.554 1498.87 514.475L1486.82 517.962C1482.92 518.974 1479.02 519.986 1475.12 520.998L1470.03 521.299C1473.1 509.454 1474.8 496.437 1474.8 482.769C1474.8 464.16 1471.65 446.744 1466.17 431.863C1461.62 419.528 1455.48 408.926 1448.19 400.829C1438.42 389.956 1426.6 383.603 1413.87 383.603C1405.56 383.603 1397.64 386.309 1390.42 391.229C1390.14 391.409 1389.87 391.59 1389.6 391.79C1389.49 391.87 1389.38 391.951 1389.27 392.031C1388.97 392.241 1388.67 392.462 1388.37 392.692C1388.03 392.933 1387.7 393.193 1387.36 393.464C1387.03 393.724 1386.7 393.995 1386.37 394.265C1386.06 394.506 1385.75 394.766 1385.45 395.037C1385.41 395.077 1385.37 395.107 1385.33 395.147C1385.02 395.398 1384.73 395.668 1384.43 395.939L1384.38 395.989C1383.74 396.56 1383.11 397.151 1382.49 397.763C1382.17 398.063 1381.86 398.384 1381.55 398.705C1381.23 399.025 1380.92 399.346 1380.61 399.677C1380.3 400.007 1379.99 400.338 1379.69 400.669C1379.08 401.34 1378.48 402.031 1377.89 402.743C1377.6 403.074 1377.33 403.414 1377.05 403.755C1376.35 404.627 1375.65 405.519 1374.98 406.441C1374.65 406.882 1374.32 407.332 1374 407.793C1373.63 408.304 1373.27 408.836 1372.91 409.367C1372.87 409.427 1372.82 409.487 1372.78 409.557C1372.46 410.028 1372.15 410.509 1371.84 410.99C1371.48 411.541 1371.13 412.092 1370.79 412.653C1370.44 413.215 1370.1 413.786 1369.77 414.357C1369.72 414.427 1369.68 414.497 1369.64 414.577C1369.35 415.079 1369.06 415.58 1368.77 416.101C1366.58 419.999 1364.59 424.197 1362.82 428.637C1362.62 429.108 1362.44 429.589 1362.25 430.07C1362.02 430.661 1361.79 431.262 1361.57 431.863C1361.21 432.835 1360.87 433.817 1360.53 434.809C1360.38 435.23 1360.24 435.651 1360.1 436.082C1359.89 436.723 1359.69 437.355 1359.49 438.006C1359.3 438.597 1359.12 439.178 1358.95 439.78C1358.79 440.281 1358.65 440.782 1358.51 441.293C1358.38 441.724 1358.26 442.165 1358.15 442.606C1357.65 444.419 1357.18 446.263 1356.76 448.127C1356.65 448.578 1356.55 449.029 1356.46 449.48C1356.35 449.971 1356.25 450.472 1356.15 450.963C1355.99 451.694 1355.85 452.426 1355.7 453.168C1355.59 453.759 1355.48 454.34 1355.38 454.931C1355.28 455.462 1355.19 456.013 1355.1 456.555C1354.44 460.423 1353.93 464.381 1353.58 468.419C1353.52 468.98 1353.48 469.541 1353.43 470.103V470.183C1353.36 470.994 1353.31 471.816 1353.26 472.628C1353.2 473.45 1353.16 474.281 1353.12 475.113V475.143C1353.08 475.915 1353.05 476.686 1353.03 477.468C1352.99 478.46 1352.97 479.452 1352.96 480.454C1352.95 481.216 1352.94 481.997 1352.94 482.769C1352.94 498.622 1355.22 513.593 1359.3 526.88C1350.76 527.241 1341.96 527.652 1332.91 528.113H873.695C860.758 528.113 850.28 517.601 850.27 504.624C850.27 498.251 850.27 491.868 850.27 485.495C923.133 490.435 998.303 494.303 1075.68 496.838C1163.7 499.724 1249.01 500.726 1331.43 500.155C1330.5 493.06 1329.61 482.518 1330.43 469.862C1333.04 429.609 1352.75 371.037 1392.99 359.804C1410.99 354.783 1428 360.656 1429.05 361.026C1443.32 366.147 1451.61 375.727 1456.09 380.898C1485.4 414.758 1488.88 482.749 1489.25 491.717C1509.5 482.378 1529.75 473.049 1550 463.729H1549.99Z"
        fill="#6D53AC" />
      <path
        d="M1417.71 349.783C1415.31 349.031 1404.52 345.814 1390.81 348.5C1370.3 352.518 1357.76 366.928 1351.02 374.664C1348.32 377.761 1345.91 380.907 1343.74 384.094C1316.79 383.593 1262.66 382.591 1244.7 382.26C1120.96 379.995 1050.93 378.803 1009.75 378.041C1009.57 378.031 1009.39 378.031 1009.21 378.031C975.417 377.39 961.231 377.049 952.661 376.618C952.601 376.618 952.551 376.618 952.491 376.608C948.575 376.408 945.828 376.197 942.891 375.927C936.138 375.305 910.245 372.73 875.952 373.842C871.167 373.993 866.921 374.203 863.505 374.394C862.795 374.434 862.116 374.474 861.477 374.514V375.265C858.64 377.58 856.272 380.366 854.454 383.452C851.717 388.102 850.219 393.463 850.219 398.985V404.306C850.379 404.636 850.518 404.907 850.628 405.117C850.998 404.175 851.637 402.702 852.756 401.129C863.235 386.288 894.112 391.599 902.593 392.882C955.847 400.999 1150.34 406.711 1237.13 403.514C1260.87 402.632 1317.94 399.566 1329.98 412.503C1326.41 423.515 1324.57 434.107 1322.99 443.327C1319.99 460.893 1317.23 490.955 1325.9 528.132C1329.55 528.132 1333.21 528.132 1336.88 528.132C1340.1 528.132 1343.31 528.122 1346.5 528.112C1340.25 508.391 1326.9 457.045 1349.12 408.013C1359.32 385.517 1376.91 363.701 1392.97 359.803C1405.44 356.767 1418.02 358.521 1418.02 358.521C1424.69 359.463 1429.03 361.026 1429.03 361.026C1435.77 363.451 1441.17 366.858 1445.48 370.335C1439.89 362.739 1430.95 353.971 1417.7 349.783H1417.71Z"
        fill="#BFB2F9" />
      <path
        d="M1549.99 133.965V499.713C1532.95 504.634 1515.92 509.554 1498.87 514.474L1476.6 520.907L1476.01 520.948L1470.03 521.298C1473.1 509.454 1474.8 496.437 1474.8 482.768C1474.8 464.16 1471.65 446.744 1466.17 431.863C1461.62 419.527 1455.48 408.925 1448.19 400.828C1438.42 389.956 1426.6 383.603 1413.87 383.603C1405.56 383.603 1397.64 386.308 1390.42 391.228C1390.14 391.409 1389.87 391.589 1389.6 391.79C1389.49 391.87 1389.38 391.95 1389.27 392.03C1388.97 392.241 1388.67 392.461 1388.37 392.692C1388.03 392.932 1387.7 393.193 1387.36 393.463C1387.03 393.724 1386.7 393.994 1386.37 394.265C1386.06 394.505 1385.75 394.766 1385.45 395.036C1385.41 395.076 1385.37 395.107 1385.33 395.147C1385.02 395.397 1384.72 395.668 1384.42 395.938L1384.37 395.988C1383.74 396.56 1383.11 397.151 1382.49 397.762C1382.17 398.063 1381.86 398.383 1381.55 398.704C1381.23 399.025 1380.92 399.345 1380.61 399.676C1380.3 400.007 1379.99 400.337 1379.69 400.668C1379.08 401.339 1378.48 402.031 1377.89 402.742C1377.6 403.073 1377.33 403.414 1377.05 403.754C1376.35 404.626 1375.65 405.518 1374.97 406.44C1374.64 406.881 1374.32 407.332 1374 407.793C1373.63 408.304 1373.27 408.835 1372.91 409.366C1372.87 409.426 1372.82 409.486 1372.78 409.557C1372.46 410.027 1372.15 410.508 1371.84 410.989C1371.48 411.541 1371.13 412.092 1370.79 412.653C1370.44 413.214 1370.1 413.785 1369.77 414.356C1369.72 414.427 1369.68 414.497 1369.64 414.577C1369.35 415.078 1369.06 415.579 1368.77 416.1C1366.58 419.998 1364.59 424.197 1362.82 428.636C1362.62 429.107 1362.44 429.588 1362.25 430.069C1362.02 430.66 1361.79 431.262 1361.57 431.863C1361.21 432.835 1360.87 433.817 1360.53 434.809C1360.38 435.23 1360.24 435.651 1360.1 436.082C1359.89 436.723 1359.69 437.354 1359.49 438.006C1359.3 438.597 1359.12 439.178 1358.95 439.779C1358.79 440.28 1358.65 440.781 1358.51 441.292C1358.38 441.723 1358.26 442.164 1358.15 442.605C1357.65 444.419 1357.18 446.263 1356.76 448.126C1356.65 448.577 1356.55 449.028 1356.46 449.479C1356.34 449.97 1356.24 450.471 1356.14 450.962C1355.98 451.694 1355.84 452.425 1355.69 453.167C1355.59 453.758 1355.48 454.339 1355.38 454.931C1355.28 455.462 1355.19 456.013 1355.1 456.554C1354.44 460.422 1353.93 464.38 1353.58 468.419C1353.52 468.98 1353.48 469.541 1353.43 470.102V470.182C1353.36 470.994 1353.31 471.816 1353.26 472.627C1353.2 473.449 1353.16 474.281 1353.12 475.112V475.143C1353.08 475.914 1353.05 476.686 1353.03 477.467C1352.99 478.459 1352.97 479.451 1352.96 480.454C1352.95 481.215 1352.94 481.997 1352.94 482.768C1352.94 498.982 1355.33 514.284 1359.57 527.792C1357.73 527.892 1355.88 528.002 1354.05 528.112H873.694C860.758 528.112 850.279 517.601 850.269 504.624C850.249 469.421 850.239 434.218 850.219 399.015V398.985C850.219 393.463 851.717 388.102 854.454 383.452C856.272 380.366 858.64 377.58 861.477 375.265V351.306C861.477 342.497 864.753 334.27 870.318 327.997C870.527 327.747 870.747 327.496 870.977 327.256C871.296 326.915 871.616 326.584 871.946 326.264C873.694 324.54 875.632 322.987 877.74 321.654C880.167 320.101 882.814 318.838 885.651 317.916C895.801 314.6 905.94 311.293 916.089 307.976H916.099C948.265 297.474 980.421 286.962 1012.58 276.46C1016.62 275.138 1020.29 272.863 1023.28 269.827C1024.64 268.434 1026.02 267.041 1027.38 265.648C1041.63 251.188 1055.86 236.728 1070.09 222.268C1072.41 219.903 1074.74 217.548 1077.06 215.183C1094.34 197.637 1111.6 180.091 1128.87 162.544C1147.77 143.344 1173.3 132.151 1200.18 131.249C1220.03 130.578 1240.05 130.047 1260.26 129.646C1360.86 127.692 1457.56 129.416 1549.99 133.965Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1402.71 254.726C1416.09 230.115 1429.48 205.504 1442.86 180.892C1450.01 167.755 1441.82 151.481 1427.03 149.507C1381.16 143.405 1328.41 139.827 1270.21 141.862C1236.97 143.024 1205.89 145.88 1177.24 149.758C1163.07 151.672 1149.85 158.025 1139.53 167.966C1108.98 197.377 1078.41 226.798 1047.85 256.209C1044.23 259.686 1046.61 265.809 1051.61 265.929C1157.71 268.514 1263.83 271.11 1369.94 273.695C1383.54 274.026 1396.18 266.71 1402.7 254.726H1402.71Z"
        fill="#0B1107" />
      <path
        d="M1426.96 183.487C1414.76 205.263 1402.58 227.028 1390.38 248.803C1384.44 259.405 1372.94 265.878 1360.55 265.588C1351.53 265.377 1342.5 265.157 1333.48 264.946C1320.38 264.636 1307.29 264.325 1294.19 264.014C1287.99 263.864 1281.77 263.724 1275.57 263.573C1270.48 263.453 1265.4 263.333 1260.32 263.213C1197.09 261.71 1133.86 260.216 1070.64 258.713C1066.08 258.603 1063.92 253.192 1067.21 250.116C1095.04 224.092 1122.87 198.068 1150.71 172.044C1160.11 163.255 1172.14 157.634 1185.06 155.94C1211.15 152.513 1239.45 149.978 1269.72 148.956C1296.32 148.054 1321.67 148.395 1345.6 149.647C1348.21 149.787 1350.8 149.938 1353.38 150.098C1358.86 150.429 1364.26 150.81 1369.58 151.241C1379.05 151.992 1388.28 152.884 1397.24 153.876C1402.43 154.457 1407.53 155.068 1412.54 155.72C1426.01 157.453 1433.46 171.863 1426.96 183.487Z"
        fill="#383A37" />
      <path
        d="M1402.71 254.726C1416.09 230.115 1429.48 205.504 1442.86 180.892C1450.01 167.755 1441.82 151.481 1427.03 149.507C1381.16 143.405 1328.41 139.827 1270.21 141.862C1236.97 143.024 1205.89 145.88 1177.24 149.758C1163.07 151.672 1149.85 158.025 1139.53 167.966C1108.98 197.377 1078.41 226.798 1047.85 256.209C1044.23 259.686 1046.61 265.809 1051.61 265.929C1157.71 268.514 1263.83 271.11 1369.94 273.695C1383.54 274.026 1396.18 266.71 1402.7 254.726H1402.71Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1357.55 359.182C1357.45 360.605 1357.28 362.068 1357.01 363.561C1356.76 364.934 1356.45 366.247 1356.07 367.499C1354.57 372.67 1352.15 376.849 1349.69 380.075C1345.86 385.136 1339.81 388.022 1333.47 387.902C1301.74 387.29 1270.02 386.689 1238.28 386.088C1235.15 386.028 1232.26 384.434 1230.53 381.819L1230.48 381.759C1229.97 381.007 1229.16 380.617 1228.35 380.607C1228.23 380.617 1228.11 380.617 1227.98 380.627C1227.41 380.707 1226.87 380.967 1226.44 381.428L1224.63 383.362C1223.86 384.194 1222.82 384.685 1221.71 384.755C1221.57 384.765 1221.42 384.765 1221.28 384.765C1206.57 384.304 1191.86 383.843 1177.15 383.382C1094.68 380.787 1012.21 378.191 929.725 375.596C927.986 375.546 926.328 375.025 924.9 374.103C924.76 374.013 924.62 373.933 924.48 373.832C924.36 373.752 924.25 373.672 924.13 373.582C923.931 373.432 923.741 373.271 923.551 373.101C923.531 373.091 923.511 373.071 923.491 373.051C923.301 372.88 923.122 372.7 922.962 372.51C922.832 372.379 922.712 372.239 922.592 372.099C922.452 371.939 922.322 371.768 922.203 371.598C922.193 371.588 922.183 371.568 922.173 371.558C922.053 371.387 921.943 371.217 921.833 371.047C921.823 371.027 921.813 371.017 921.803 370.997C921.703 370.836 921.613 370.676 921.523 370.516C921.184 369.884 920.904 369.213 920.694 368.501C920.514 368.461 920.414 368.441 920.335 368.421C920.195 368.391 920.115 368.371 919.795 368.291C918.586 369.624 917.368 370.946 916.149 372.279C914.401 374.183 911.923 375.215 909.346 375.115C898.218 374.694 887.08 374.273 875.951 373.842C873.504 373.752 871.466 371.939 871.077 369.514C870.587 366.497 870.177 362.278 870.557 357.529C871.037 351.636 872.725 344.943 877 338.75C887.999 322.797 911.614 316.534 933.67 325.602L937.436 323.839C941.073 322.145 945.048 321.324 949.044 321.434C1009.53 323.167 1070.02 324.891 1130.5 326.625C1154.83 327.316 1179.14 328.017 1203.46 328.709C1207.61 328.829 1211.6 330.362 1214.76 333.058L1215.39 333.589C1215.89 334.01 1216.46 334.29 1217.06 334.431C1217.4 334.511 1217.74 334.541 1218.08 334.521C1219.13 334.491 1220.15 334.05 1220.91 333.208L1221.11 332.978C1222.96 330.893 1225.65 329.741 1228.44 329.831C1263.48 330.944 1298.53 332.056 1333.58 333.178C1347.4 333.619 1358.45 345.333 1357.55 359.182Z"
        fill="#F3F0DE" />
      <path
        d="M929.235 355.083C928.816 358.16 927.517 365.424 922.962 372.509C922.832 372.378 922.712 372.238 922.592 372.098C922.452 371.937 922.322 371.767 922.203 371.597C922.193 371.587 922.183 371.567 922.173 371.557C922.053 371.386 921.943 371.216 921.833 371.046C921.823 371.026 921.813 371.016 921.803 370.996C921.703 370.835 921.613 370.675 921.523 370.515C921.184 369.883 920.904 369.212 920.694 368.5C920.514 368.46 920.414 368.44 920.335 368.42C920.195 368.39 920.115 368.37 919.795 368.29C918.586 369.623 917.368 370.945 916.149 372.278C914.401 374.182 911.923 375.214 909.346 375.114C898.218 374.693 887.08 374.272 875.951 373.841C873.504 373.751 871.466 371.937 871.077 369.513C870.587 366.496 870.177 362.278 870.557 357.528C872.205 359.081 874.363 359.973 876.561 359.883C880.107 359.733 883.364 357.047 884.452 353.209C888.228 355.183 893.523 357.378 900.106 358.48C913.332 360.695 924.091 357.178 929.235 355.083Z"
        fill="#DFDCEA" />
      <path
        d="M1357.55 359.182C1357.45 360.605 1357.28 362.068 1357.01 363.561C1355.74 370.586 1352.74 376.067 1349.69 380.075C1345.86 385.136 1339.81 388.022 1333.47 387.902C1301.74 387.29 1270.02 386.689 1238.28 386.088C1235.15 386.028 1232.26 384.434 1230.53 381.819L1230.48 381.759C1229.97 381.007 1229.16 380.617 1228.35 380.607C1228.23 380.617 1228.11 380.617 1227.98 380.627C1227.41 380.707 1226.87 380.967 1226.44 381.428L1224.63 383.362C1223.77 384.294 1222.55 384.805 1221.28 384.765C1206.57 384.304 1191.86 383.843 1177.15 383.382C1094.68 380.787 1012.21 378.191 929.726 375.596C927.987 375.546 926.329 375.025 924.901 374.103C924.761 374.013 924.621 373.933 924.481 373.832C924.361 373.752 924.251 373.672 924.132 373.582C923.932 373.432 923.742 373.271 923.552 373.101C923.532 373.091 923.512 373.071 923.492 373.051C923.173 372.75 922.873 372.44 922.593 372.099C922.453 371.939 922.323 371.768 922.204 371.598C922.194 371.588 922.184 371.568 922.174 371.558C922.054 371.387 921.944 371.217 921.834 371.047C921.824 371.027 921.814 371.017 921.804 370.997C921.704 370.836 921.614 370.676 921.524 370.516C921.185 369.884 920.905 369.213 920.695 368.501C920.515 368.461 920.415 368.441 920.336 368.421C920.196 368.391 920.116 368.371 919.796 368.291C918.587 369.624 917.369 370.946 916.15 372.279C914.402 374.183 911.924 375.215 909.347 375.115C898.219 374.694 887.081 374.273 875.952 373.842C873.505 373.752 871.467 371.939 871.078 369.514C869.979 362.77 869.28 349.953 877.001 338.75C888 322.797 911.615 316.534 933.671 325.602L937.438 323.839C941.074 322.145 945.049 321.324 949.045 321.434C1009.53 323.167 1070.02 324.891 1130.5 326.625C1154.83 327.316 1179.14 328.017 1203.46 328.709C1207.61 328.829 1211.6 330.362 1214.76 333.058L1215.39 333.589C1215.89 334.01 1216.46 334.29 1217.06 334.431C1217.4 334.511 1217.74 334.541 1218.08 334.521C1219.13 334.491 1220.15 334.05 1220.91 333.208L1221.11 332.978C1222.97 330.893 1225.65 329.741 1228.44 329.831C1263.48 330.944 1298.53 332.056 1333.58 333.178C1347.4 333.619 1358.45 345.333 1357.55 359.182Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1053.42 239.204C1047.55 245.166 1041.69 251.128 1035.81 257.091C1031.64 261.34 1027.45 265.578 1023.28 269.827C1011.41 272.202 1000.95 269.456 997.654 263.173C996.355 260.688 996.116 257.562 996.096 255.377C996.096 254.786 996.106 254.265 996.116 253.844C996.156 251.339 996.266 245.507 999.632 241.488C1003.12 237.33 1008.73 236.708 1013.87 236.428C1021.75 235.987 1035.05 235.977 1053.42 239.204Z"
        fill="#C7BCEC" />
      <path
        d="M1035.81 257.09C1031.64 261.339 1027.45 265.577 1023.28 269.826C1011.41 272.201 1000.95 269.455 997.654 263.172C996.355 260.687 996.116 257.561 996.096 255.376C1000.08 256.088 1004.34 256.679 1008.85 257.08C1018.81 257.982 1027.89 257.791 1035.81 257.09Z"
        fill="#8985B1" />
      <path
        d="M1053.41 239.214C1035.05 235.977 1021.75 235.997 1013.86 236.428C1008.73 236.708 1003.12 237.33 999.629 241.488C996.263 245.507 996.153 251.339 996.103 253.844C996.063 255.808 995.983 260.007 997.641 263.173C1000.94 269.456 1011.4 272.202 1023.26 269.827C1033.31 259.616 1043.36 249.415 1053.4 239.204L1053.41 239.214Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1366.43 379.806C1369.05 376.288 1381.22 360.756 1402.65 357.61C1422.7 354.664 1443.19 363.712 1456.08 380.898"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M1421.5 300C1398.46 307.565 1375.42 315.131 1352.39 322.707" stroke="#2D2226" stroke-width="2"
        stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1228.35 380.607C1228.23 380.617 1228.11 380.617 1227.98 380.627C1227.41 380.707 1226.87 380.968 1226.44 381.429L1224.63 383.363C1223.77 384.295 1222.55 384.806 1221.28 384.766C1206.57 384.305 1191.86 383.844 1177.15 383.383C1094.68 380.787 1012.21 378.192 929.726 375.597C929.137 375.526 926.989 375.366 924.901 374.103C924.761 374.013 924.621 373.933 924.482 373.833C924.362 373.753 924.252 373.673 924.132 373.582C923.932 373.432 923.742 373.272 923.553 373.101C923.533 373.091 923.513 373.071 923.493 373.051C923.173 372.751 922.873 372.44 922.594 372.099C922.454 371.939 922.324 371.769 922.204 371.598C922.194 371.588 922.184 371.568 922.174 371.558C922.054 371.388 921.944 371.217 921.834 371.047C921.824 371.027 921.814 371.017 921.804 370.997C921.704 370.837 921.615 370.676 921.525 370.516C921.185 369.885 920.905 369.213 920.696 368.502C920.516 368.462 920.416 368.442 920.336 368.422C922.803 360.485 925.271 352.559 927.748 344.632C929.716 338.289 931.694 331.946 933.672 325.603L937.438 323.839C939.016 323.108 941.154 322.306 943.771 321.835C945.779 321.474 947.577 321.394 949.046 321.434C1009.53 323.168 1070.02 324.891 1130.5 326.625C1154.83 327.316 1179.14 328.018 1203.46 328.709C1207.61 328.83 1211.6 330.363 1214.76 333.058L1215.39 333.589C1215.89 334.01 1216.46 334.291 1217.06 334.431C1217.4 334.511 1217.74 334.541 1218.08 334.521C1219.76 342.037 1221.44 349.553 1223.11 357.068C1224.85 364.914 1226.6 372.761 1228.35 380.607Z"
        fill="#535452" />
      <path
        d="M1228.35 380.606C1228.23 380.616 1228.11 380.616 1227.98 380.626C1227.41 380.707 1226.87 380.967 1226.44 381.428L1224.63 383.362C1223.77 384.294 1222.55 384.805 1221.28 384.765C1206.57 384.304 1191.86 383.843 1177.15 383.382C1094.68 380.787 1012.21 378.191 929.726 375.596C929.137 375.526 926.989 375.366 924.901 374.103C924.761 374.013 924.621 373.933 924.482 373.832C924.362 373.752 924.252 373.672 924.132 373.582C923.932 373.432 923.742 373.271 923.553 373.101C923.533 373.091 923.513 373.071 923.493 373.051C923.173 372.75 922.873 372.44 922.594 372.099C922.454 371.938 922.324 371.768 922.204 371.598C922.194 371.588 922.184 371.568 922.174 371.558C922.054 371.387 921.944 371.217 921.834 371.047C921.824 371.027 921.814 371.017 921.804 370.997C921.704 370.836 921.615 370.676 921.525 370.516C921.185 369.884 920.905 369.213 920.696 368.501C920.516 368.461 920.416 368.441 920.336 368.421C922.803 360.485 925.271 352.558 927.748 344.632C928.447 344.932 929.177 345.233 929.936 345.544C968.735 361.367 993.798 360.685 1067.47 360.685C1067.47 360.685 1129.45 362.158 1182.68 361.557C1182.68 361.557 1201.62 361.346 1218.11 358.16C1219.56 357.879 1221.28 357.499 1223.11 357.068C1224.85 364.914 1226.6 372.76 1228.35 380.606Z"
        fill="#454744" />
      <path
        d="M1228.35 380.607C1228.23 380.617 1228.11 380.617 1227.98 380.627C1227.41 380.707 1226.87 380.968 1226.44 381.428L1224.63 383.362C1223.77 384.294 1222.55 384.806 1221.28 384.765C1206.57 384.304 1191.86 383.844 1177.15 383.383C1094.68 380.787 1012.21 378.192 929.726 375.596C929.137 375.526 926.989 375.366 924.901 374.103C924.761 374.013 924.621 373.933 924.482 373.833C924.362 373.753 924.252 373.672 924.132 373.582C923.932 373.432 923.742 373.272 923.553 373.101C923.533 373.091 923.513 373.071 923.493 373.051C923.173 372.75 922.873 372.44 922.594 372.099C922.454 371.939 922.324 371.768 922.204 371.598C922.194 371.588 922.184 371.568 922.174 371.558C922.054 371.388 921.944 371.217 921.834 371.047C921.824 371.027 921.814 371.017 921.804 370.997C921.704 370.837 921.615 370.676 921.525 370.516C921.185 369.885 920.905 369.213 920.696 368.502C920.516 368.462 920.416 368.442 920.336 368.422C924.781 354.142 929.227 339.872 933.672 325.603L937.438 323.839C938.776 323.218 940.485 322.566 942.503 322.095C945.06 321.504 947.317 321.384 949.046 321.434C1009.53 323.168 1070.02 324.891 1130.5 326.625C1154.83 327.316 1179.14 328.018 1203.46 328.709C1207.61 328.829 1211.6 330.363 1214.76 333.058L1215.39 333.589C1215.89 334.01 1216.46 334.291 1217.06 334.431C1217.4 334.511 1217.74 334.541 1218.08 334.521C1221.51 349.883 1224.93 365.245 1228.35 380.607Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1505.91 512.44C1503.57 513.121 1501.22 513.792 1498.87 514.474C1500.64 489.442 1497.21 470.382 1494 458.017C1480.07 404.596 1474.93 374.343 1435.46 317.976C1433.21 314.76 1432.67 310.651 1433.98 306.954C1450.25 261.028 1466.54 215.103 1482.81 169.168C1484.55 164.278 1489.19 161.031 1494.37 161.091L1500.57 161.121C1484.77 210.564 1468.96 260.016 1453.16 309.459C1465.96 327.256 1479.96 350.865 1490.59 380.386C1508.77 430.871 1509.57 477.758 1505.91 512.44Z"
        fill="#BFB2F9" />
      <path
        d="M1549.99 161.352V499.713C1535.29 503.952 1520.61 508.201 1505.91 512.44C1503.57 513.121 1501.22 513.792 1498.87 514.474C1500.64 489.442 1497.21 470.382 1494 458.017C1480.07 404.596 1474.93 374.343 1435.46 317.976C1433.21 314.76 1432.67 310.651 1433.98 306.954C1450.25 261.028 1466.54 215.103 1482.81 169.168C1484.55 164.278 1489.19 161.031 1494.37 161.091L1500.57 161.121C1505.63 161.141 1510.7 161.171 1515.76 161.191C1527.17 161.241 1538.58 161.292 1549.99 161.352Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1470.44 272.593C1461.74 270.428 1453.04 268.264 1444.34 266.099C1443.64 265.328 1440.51 261.69 1440.63 256.179C1440.76 250.206 1444.59 246.559 1445.27 245.938C1453.97 246.779 1462.67 247.631 1471.37 248.473C1470.2 252.16 1469.76 255.537 1469.54 257.271C1468.6 264.576 1469.82 270.629 1470.44 272.593Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path opacity="0.63"
        d="M1353.38 150.099C1346.3 172.405 1333.25 202.247 1308.74 231.317C1297.77 244.334 1286.38 254.966 1275.57 263.574C1270.49 263.454 1265.4 263.334 1260.32 263.213C1271.68 249.415 1283.14 235.035 1294.63 220.054C1313.02 196.074 1329.98 172.535 1345.6 149.648C1348.21 149.788 1350.8 149.939 1353.38 150.099Z"
        fill="#EFF0EB" />
      <path opacity="0.63"
        d="M1397.24 153.876C1393.5 170.24 1387.22 189.139 1376.67 208.79C1363.92 232.549 1348.36 250.968 1333.48 264.947C1320.38 264.636 1307.29 264.325 1294.19 264.015C1310.77 247.711 1328.48 226.928 1344.44 200.994C1355.19 183.528 1363.35 166.653 1369.58 151.241C1379.05 151.992 1388.28 152.884 1397.24 153.876Z"
        fill="#EFF0EB" />
      <path
        d="M1193.79 345.223C1193.79 345.223 1193.74 345.223 1193.71 345.223L954.818 338.118C953.439 338.078 952.35 336.926 952.4 335.543C952.44 334.16 953.549 333.078 954.967 333.118L1193.86 340.223C1195.23 340.263 1196.32 341.415 1196.27 342.798C1196.23 344.151 1195.12 345.233 1193.78 345.233L1193.79 345.223Z"
        fill="#383A37" />
      <path
        d="M1188.86 359.162C1188.86 359.162 1188.81 359.162 1188.78 359.162L949.896 352.057C948.517 352.017 947.428 350.865 947.478 349.482C947.518 348.099 948.627 347.017 950.046 347.057L1188.93 354.162C1190.31 354.202 1191.4 355.354 1191.35 356.737C1191.31 358.09 1190.2 359.172 1188.85 359.172L1188.86 359.162Z"
        fill="#383A37" />
      <path
        d="M1190.46 372.81C1190.46 372.81 1190.41 372.81 1190.38 372.81L951.491 365.705C950.113 365.665 949.024 364.513 949.074 363.13C949.114 361.747 950.223 360.665 951.641 360.705L1190.53 367.81C1191.91 367.85 1193 369.002 1192.95 370.385C1192.91 371.738 1191.8 372.82 1190.45 372.82L1190.46 372.81Z"
        fill="#383A37" />
      <path
        d="M1322.88 341.987C1325.1 343.821 1328.88 347.518 1330.81 353.35C1335.23 366.728 1325.64 378.563 1324.87 379.475"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M893.292 333.108C891.074 334.782 887.288 338.159 885.36 343.49C880.945 355.715 890.535 366.538 891.304 367.379"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1044.73 276.631C1094.14 277.132 1144.28 278.074 1195.12 279.497C1258.22 281.26 1320.19 283.705 1381 286.761"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M80.4443 361.06C65.6 357.222 45.3913 364.287 43.9229 375.189C42.9639 382.334 50.3461 388.938 54.7514 391.673C66.0395 398.698 80.9238 394.74 88.9253 386.833C90.6835 385.09 96.9668 378.887 95.4484 372.183C93.7003 364.487 82.9417 361.711 80.4543 361.06H80.4443Z"
        fill="#0B1107" />
      <path
        d="M387.92 395.4C385.942 411.073 377.331 422.937 366.562 423.358C359.47 423.649 352.387 423.929 345.305 424.21C358.101 423.699 367.841 407.065 367.042 387.043C366.273 367.663 355.914 352.231 343.646 351.73C350.329 351.449 357.012 351.169 363.685 350.888C364.055 350.878 364.415 350.868 364.774 350.888C373.005 357.031 379.569 367.863 381.966 380.97C382.775 385.41 383.045 389.779 382.835 393.947L387.91 395.4H387.92Z"
        fill="#383A37" />
      <path
        d="M345.305 424.201C341.828 424.341 338.482 423.279 335.445 421.254C327.284 415.813 321.27 403.468 320.691 388.887C320.291 378.686 322.619 369.357 326.704 362.603C326.714 362.573 326.734 362.533 326.764 362.493C330.69 356.059 336.204 351.981 342.438 351.73C355.234 351.219 366.253 367.032 367.052 387.044C367.841 407.055 358.101 423.7 345.305 424.201Z"
        fill="#4F514E" />
      <path
        d="M345.304 424.201C341.827 424.341 338.481 423.279 335.444 421.254C336.803 421.705 339.19 422.287 342.117 421.926C342.117 421.926 344.574 421.625 346.952 420.483C349.799 419.11 354.954 414.681 358.07 404.58C363.135 388.146 359.848 366.331 348.291 357.903C344.624 355.228 341.578 354.957 340.669 354.907C333.117 354.496 327.662 361.35 326.693 362.603C326.703 362.573 326.723 362.533 326.753 362.493C330.679 356.059 336.193 351.981 342.427 351.73C355.223 351.219 366.242 367.032 367.041 387.044C367.83 407.055 358.09 423.7 345.294 424.201H345.304Z"
        fill="#828282" />
      <path
        d="M342.438 351.73C329.642 352.241 319.902 368.876 320.691 388.887C321.48 408.899 332.499 424.711 345.305 424.2"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M343.646 351.73C350.329 351.449 357.012 351.169 363.685 350.888C364.055 350.878 364.415 350.868 364.774 350.888C373.005 357.031 379.569 367.863 381.966 380.97C382.775 385.41 383.045 389.779 382.835 393.947L387.91 395.4C385.932 411.073 377.321 422.937 366.552 423.358C359.46 423.649 352.377 423.929 345.295 424.21"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M360.769 355.838C361.179 356.209 362.018 356.99 362.957 358.083C376.153 373.364 374.565 408.156 361.029 418.748C360.16 419.43 359.411 419.871 359.041 420.091"
        stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M366.363 355.417C366.772 355.788 367.612 356.57 368.551 357.662C381.747 372.944 380.158 407.736 366.623 418.328C365.754 419.009 365.004 419.45 364.635 419.671"
        stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M447.446 357.963V369.867C447.446 372.413 447.156 374.888 446.607 377.273C443.48 391.081 431.732 401.713 417.118 402.936L150.839 425.262C142.857 425.924 134.816 425.142 127.114 422.947L103.239 416.133C103.449 411.965 103.179 407.596 102.37 403.156C98.2746 380.78 82.0317 365.007 66.0886 367.933C53.7117 370.208 45.1507 383.075 43.8521 399.188L0.767578 386.903V198.602C44.2217 191.197 99.9928 186.036 164.325 190.836C207.17 194.023 245.07 200.987 277.096 208.964C294.318 238.906 311.529 268.838 328.751 298.78C360.328 307.869 391.914 316.968 423.491 326.066C426.238 326.858 428.815 327.98 431.193 329.403C432.681 330.275 434.1 331.267 435.418 332.36C442.861 338.532 447.446 347.832 447.446 357.963Z"
        fill="#F7D717" />
      <path
        d="M277.095 208.964C244.5 206.549 208.128 205.527 168.61 207.07C126.994 208.703 88.9742 212.902 55.1999 218.283C51.284 218.904 47.2982 218.614 43.5022 217.471C37.3987 215.638 31.0054 213.884 24.3425 212.25C16.231 210.266 8.34935 208.633 0.777344 207.28V198.602C44.2215 191.197 99.9925 186.036 164.325 190.836C207.169 194.023 245.069 200.987 277.095 208.964Z"
        fill="#FFF1B6" />
      <path
        d="M154.405 381.562C153.746 384.347 152.507 388.175 149.98 392.374C150.11 391.642 150.26 390.52 150.19 389.167C149.371 373.625 121.44 363.023 88.7147 352.331C66.648 345.126 36.9693 336.117 0.767578 327.049V317.779C68.7358 339.595 103.659 349.836 115.906 352.141C126.445 354.115 136.015 359.837 146.494 362.081C148.042 362.412 151.349 363.073 153.526 365.799C157.072 370.218 155.424 377.223 154.405 381.562Z"
        fill="#FFF1B6" />
      <path
        d="M435.418 332.36C345.403 338.022 255.379 343.683 165.364 349.345C165.034 348.994 164.544 348.463 163.925 347.852C157.252 341.198 150.22 338.192 146.134 336.488C138.182 333.171 117.254 326.508 88.4648 320.245C173.305 314.683 258.136 309.122 342.976 303.56C372.385 312.178 401.794 320.786 431.193 329.404C432.681 330.275 434.1 331.268 435.418 332.36Z"
        fill="#FFF1B6" />
      <path
        d="M253.69 355.768C287.914 353.152 322.138 350.547 356.372 347.932C357.291 353.674 358.21 359.415 359.129 365.157C322.288 368.775 285.437 372.392 248.596 376.01C250.294 369.266 251.992 362.522 253.69 355.768Z"
        fill="#A8A385" />
      <path
        d="M253.69 355.768C287.914 353.152 322.138 350.547 356.372 347.932C357.291 353.674 358.21 359.415 359.129 365.157C322.288 368.775 285.437 372.392 248.596 376.01C250.294 369.266 251.992 362.522 253.69 355.768Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M446.607 377.273C443.48 391.081 431.732 401.713 417.118 402.936L150.839 425.262C142.858 425.924 134.816 425.142 127.114 422.947L103.239 416.133C103.449 411.965 103.179 407.596 102.37 403.156C98.2746 380.78 82.0317 365.007 66.0886 367.933C53.7117 370.208 45.1507 383.075 43.8521 399.188L0.767578 386.903V374.146C12.685 377.613 24.6124 381.091 36.5298 384.568C37.309 382.373 42.8831 367.352 58.1769 362.101C77.3167 355.528 93.6095 370.449 95.4476 372.182C105.487 381.692 107.615 393.607 108.154 397.665C118.793 400.561 129.432 403.457 140.07 406.353C191.856 404.79 246.888 401.443 304.746 395.691C354.534 390.731 401.874 384.448 446.607 377.273Z"
        fill="#D3AF00" />
      <path
        d="M40.5458 225.428C41.1352 225.548 41.7245 225.669 42.3139 225.789C44.7513 226.29 46.6094 228.294 46.939 230.769C52.0237 268.598 57.1083 306.426 62.1829 344.254C62.8422 349.155 61.8233 354.135 59.306 358.384C51.6541 371.27 44.0021 384.157 36.3502 397.044C24.4828 393.657 12.6253 390.28 0.757812 386.893V217.842C13.8839 220.147 27.1499 222.672 40.5358 225.428H40.5458Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M447.446 357.963V369.867C447.446 387.123 434.26 401.503 417.118 402.936L150.839 425.262C142.858 425.924 134.816 425.142 127.114 422.947L103.239 416.133C103.449 411.965 103.179 407.596 102.37 403.156C98.2746 380.78 82.0317 365.007 66.0886 367.933C53.7117 370.208 45.1507 383.075 43.8521 399.188L0.767578 386.903V198.602C44.2217 191.197 99.9928 186.036 164.325 190.836C207.17 194.023 245.07 200.987 277.096 208.964C294.317 238.906 311.529 268.838 328.751 298.78C360.328 307.869 391.914 316.968 423.491 326.067C437.676 330.145 447.446 343.162 447.446 357.963Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M41.1949 312.219C27.7191 308.832 14.2433 305.445 0.767578 302.058V217.853C10.0478 219.617 19.328 221.39 28.6082 223.154C31.1854 223.645 33.7627 224.136 36.34 224.627C37.7385 224.898 39.147 225.158 40.5456 225.429C42.7133 252.695 44.881 279.972 47.0587 307.238C47.3184 310.475 44.3316 313.01 41.1949 312.219Z"
        fill="#383A37" />
      <path opacity="0.31"
        d="M16.6108 222.482C14.4331 231.871 12.3553 241.551 10.4174 251.512C7.24074 267.756 4.66346 283.488 2.59565 298.64L0.767578 298.299V236.782C3.07514 231.33 5.66241 226.41 8.3196 222.021L16.6108 222.482Z"
        fill="#EFF0EB" />
      <path opacity="0.31"
        d="M36.5822 223.594C34.7342 231.731 32.966 240.078 31.2978 248.636C27.6616 267.255 24.8146 285.192 22.597 302.347L9.90039 299.993C12.0581 281.284 14.9551 261.753 18.7411 241.501C19.9198 235.168 21.1585 228.935 22.4471 222.812L36.5822 223.594Z"
        fill="#EFF0EB" />
      <path
        d="M40.5456 225.428C42.7133 252.695 44.891 279.961 47.0587 307.238C47.3184 310.474 44.3316 313.01 41.1949 312.218C27.7191 308.831 14.2433 305.444 0.767578 302.057V217.842C14.0236 220.368 27.2796 222.893 40.5456 225.428Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M55.473 231.471C60.6176 257.726 65.7622 283.98 70.9067 310.245C71.4961 313.271 74.2232 315.385 77.29 315.215C153.879 310.806 230.468 306.387 307.057 301.977C311.573 301.717 314.27 296.807 312.082 292.838C300.434 271.735 288.787 250.621 277.149 229.517C274.272 224.306 269.067 220.839 263.174 220.168C229.809 216.36 191.439 214.215 149.054 215.759C116.778 216.941 87.1396 220.088 60.5676 224.196C57.1113 224.727 54.8037 228.044 55.473 231.481V231.471Z"
        fill="#0B1107" />
      <path
        d="M300.062 297.077C251.793 299.632 203.524 302.177 155.245 304.732C151.189 304.943 147.133 305.163 143.078 305.374C137.603 305.664 132.129 305.955 126.655 306.246C116.556 306.777 106.446 307.308 96.337 307.849C92.0116 308.069 87.6761 308.3 83.3507 308.53C80.4638 308.681 77.8965 306.847 77.3371 304.231C72.4822 281.514 67.6273 258.787 62.7725 236.07C62.1431 233.084 64.3208 230.228 67.5774 229.757C69.3755 229.506 71.1936 229.246 73.0316 229.005C79.325 228.154 85.7981 227.362 92.4411 226.631C96.2371 226.22 100.083 225.829 103.989 225.458C107.595 225.127 111.241 224.807 114.937 224.516C126.535 223.584 138.582 222.883 151.039 222.462C191.007 221.119 227.199 222.973 258.666 226.27C264.23 226.851 269.144 229.857 271.852 234.367C282.84 252.634 293.818 270.902 304.807 289.17C306.875 292.607 304.327 296.846 300.062 297.077Z"
        fill="#383A37" />
      <path
        d="M55.473 231.471C60.6176 257.726 65.7622 283.98 70.9067 310.245C71.4961 313.271 74.2232 315.385 77.29 315.215C153.879 310.806 230.468 306.387 307.057 301.977C311.573 301.717 314.27 296.807 312.082 292.838C300.434 271.735 288.787 250.621 277.149 229.517C274.272 224.306 269.067 220.839 263.174 220.168C229.809 216.36 191.439 214.215 149.054 215.759C116.778 216.941 87.1396 220.088 60.5676 224.196C57.1113 224.727 54.8037 228.044 55.473 231.481V231.471Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M59.4851 285.052C60.1844 285.783 61.453 287.297 62.0324 289.581C63.0114 293.449 61.3032 296.605 60.8836 297.327C57.0577 297.798 53.2417 298.269 49.4157 298.74C49.126 294.591 48.8463 290.443 48.5566 286.285C52.2028 285.874 55.839 285.463 59.4851 285.042V285.052Z"
        fill="#FFE161" />
      <path
        d="M59.4851 285.052C60.1844 285.783 61.453 287.297 62.0324 289.581C63.0114 293.449 61.3032 296.605 60.8836 297.327C57.0577 297.798 53.2417 298.269 49.4157 298.74C49.126 294.591 48.8463 290.443 48.5566 286.285C52.2028 285.874 55.839 285.463 59.4851 285.042V285.052Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M51.3356 294.903C51.2357 295.935 51.1158 296.847 51.0259 297.548C50.4465 302.077 49.957 304.302 48.7383 305.996C45.0822 311.036 37.7499 311.006 23.2352 310.745C11.0181 310.525 4.85465 310.335 1.92774 306.587C0.149618 304.282 0.00976562 300.404 0.00976562 292.999V291.004C0.00976562 283.689 1.12858 280.723 3.24635 279.13C4.29524 278.348 5.32415 278.088 5.93351 277.937C17.5013 275.152 32.6952 275.372 40.6169 276.665C42.1553 276.915 44.5128 277.386 46.9502 279.05C46.9502 279.05 47.7094 279.521 48.2388 280.062C51.845 283.719 51.7551 290.493 51.3356 294.903Z"
        fill="#F7D717" />
      <path
        d="M51.3356 294.902C51.2357 295.934 51.1158 296.846 51.0259 297.547C50.4465 302.076 49.957 304.301 48.7383 305.994C45.0822 311.035 37.7499 311.005 23.2352 310.744C11.0181 310.524 4.85465 310.333 1.92774 306.586C0.149618 304.281 0.00976562 300.403 0.00976562 292.998C3.72584 295.663 7.07231 297.217 9.42982 298.128C23.9944 303.79 37.67 299.642 43.374 297.918C46.4607 296.986 49.1379 295.914 51.3356 294.902Z"
        fill="#D3AF00" />
      <path
        d="M0.00999751 291.005C0.00999751 283.68 1.12882 280.713 3.25657 279.12C4.29547 278.338 5.33437 278.078 5.93374 277.928C17.5015 275.142 32.7055 275.362 40.6171 276.655C42.1555 276.905 44.513 277.376 46.9504 279.05C46.9504 279.05 47.7096 279.511 48.2391 280.062C52.6844 284.581 51.5056 293.831 51.0261 297.548C50.4467 302.078 49.9572 304.302 48.7385 305.996C45.0924 311.036 37.7601 311.006 23.2355 310.746C11.0184 310.525 4.85488 310.335 1.92797 306.577C-0.0199708 304.082 8.07206e-06 299.723 8.07206e-06 291.005H0.00999751Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M0.767578 225.778C14.2533 228.464 27.7291 231.159 41.2149 233.845C40.9951 231.039 40.7653 228.233 40.5456 225.428C27.2896 222.903 14.0336 220.377 0.767578 217.842V225.768V225.778Z"
        fill="#FFE161" />
      <path
        d="M0.767578 225.778C14.2533 228.464 27.7291 231.159 41.2149 233.845C40.9951 231.039 40.7653 228.233 40.5456 225.428C27.2896 222.903 14.0336 220.377 0.767578 217.842V225.768V225.778Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M171.808 356.52C197.171 354.646 222.534 352.772 247.897 350.908C253.022 350.527 257.497 354.415 257.787 359.556C257.867 361.039 257.847 362.632 257.687 364.316C257.507 366.11 257.188 367.763 256.798 369.246C255.799 373.024 252.483 375.72 248.597 376.02L173.446 381.742C168.761 382.103 164.575 378.866 163.676 374.246C163.556 373.605 163.447 372.934 163.357 372.242C163.007 369.477 163.057 366.931 163.327 364.687C163.836 360.278 167.402 356.87 171.818 356.54L171.808 356.52Z"
        fill="white" />
      <path
        d="M171.808 356.52C197.171 354.646 222.534 352.772 247.897 350.908C253.022 350.527 257.497 354.415 257.787 359.556C257.867 361.039 257.847 362.632 257.687 364.316C257.507 366.11 257.188 367.763 256.798 369.246C255.799 373.024 252.483 375.72 248.597 376.02L173.446 381.742C168.761 382.103 164.575 378.866 163.676 374.246C163.556 373.605 163.447 372.934 163.357 372.242C163.007 369.477 163.057 366.931 163.327 364.687C163.836 360.278 167.402 356.87 171.818 356.54L171.808 356.52Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M360.539 340.126C382.206 338.883 403.863 337.64 425.53 336.398C429.905 336.147 433.611 340.136 433.701 345.286C433.731 346.769 433.661 348.363 433.472 350.046C433.272 351.84 432.952 353.473 432.572 354.946C431.604 358.694 428.707 361.31 425.39 361.51L361.198 365.368C357.192 365.608 353.726 362.282 353.096 357.632C353.007 356.981 352.937 356.309 352.887 355.618C352.667 352.842 352.787 350.297 353.076 348.062C353.636 343.673 356.773 340.346 360.539 340.136V340.126Z"
        fill="white" />
      <path
        d="M360.539 340.126C382.206 338.883 403.863 337.64 425.53 336.398C429.905 336.147 433.611 340.136 433.701 345.286C433.731 346.769 433.661 348.363 433.472 350.046C433.272 351.84 432.952 353.473 432.572 354.946C431.604 358.694 428.707 361.31 425.39 361.51L361.198 365.368C357.192 365.608 353.726 362.282 353.096 357.632C353.007 356.981 352.937 356.309 352.887 355.618C352.667 352.842 352.787 350.297 353.076 348.062C353.636 343.673 356.773 340.346 360.539 340.136V340.126Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M73.4121 339.575C91.5629 344.946 109.714 350.307 127.865 355.678" stroke="#2D2226" stroke-width="2"
        stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M3.90625 319.022C19.2101 323.542 34.5039 328.071 49.8078 332.59" stroke="#2D2226" stroke-width="2"
        stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M143.488 359.236C144.647 359.466 150.101 360.659 153.528 365.799C158.323 373.004 154.597 381.141 154.397 381.562"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M208.048 319.022C222.213 324.543 236.368 330.075 250.533 335.596C253.2 336.638 252.021 340.646 249.214 340.075C245.488 339.324 241.692 338.492 237.846 337.58C218.357 332.981 200.905 327.189 185.612 321.076C183.254 320.134 183.873 316.637 186.401 316.557L192.544 316.356C197.839 316.186 203.103 317.098 208.038 319.022H208.048Z"
        fill="#FFFAE6" />
      <path
        d="M246.839 313.901C251.104 313.62 255.38 313.33 259.645 313.049C263.201 312.809 266.768 313.55 269.934 315.194C282.91 321.908 295.887 328.621 308.863 335.335C310.741 336.307 309.552 339.173 307.534 338.512C287.116 331.778 266.698 325.054 246.279 318.32C243.922 317.539 244.361 314.071 246.839 313.911V313.901Z"
        fill="#FFFAE6" />
      <path opacity="0.31"
        d="M155.246 304.732C151.19 304.942 147.135 305.163 143.079 305.373C138.384 301.706 133.639 297.327 129.114 292.096C108.825 268.657 104.56 241.601 103.99 225.458C107.596 225.127 111.243 224.806 114.939 224.516C117.606 236.531 122.041 250.8 129.513 265.952C137.395 281.935 146.625 294.771 155.246 304.732Z"
        fill="#EFF0EB" />
      <path opacity="0.31"
        d="M126.656 306.246C116.557 306.777 106.448 307.308 96.3384 307.849C89.2259 297.889 82.2732 285.172 77.7879 269.57C73.3826 254.268 72.5235 240.289 73.033 229.006C79.3263 228.154 85.7995 227.362 92.4425 226.631C92.862 234.537 94.0807 243.336 96.6281 252.685C102.981 276.013 115.139 293.72 126.656 306.246Z"
        fill="#EFF0EB" />
      <g clip-path="url(#clip0_593_25976)">
        <path
          d="M153.12 271.075C150.403 271.897 145.887 272.969 140.253 272.929C138.136 272.909 135.848 272.738 133.441 272.327C129.984 271.746 126.907 270.784 124.22 269.672C119.136 267.558 115.459 264.892 113.342 263.169C113.202 263.058 113.072 262.948 112.952 262.848C112.982 262.647 113.022 262.447 113.052 262.247C115.05 250.162 116.289 236.243 115.789 220.871C115.649 216.652 115.38 212.584 115.02 208.665C114.97 208.074 114.92 207.493 114.86 206.912C122.662 188.975 130.464 171.027 138.255 153.09C138.285 153.04 138.305 152.99 138.325 152.94C139.464 153.09 140.593 153.251 141.732 153.401C144.579 160.646 146.117 166.789 147.006 171.128C147.366 172.911 148.065 176.529 149.454 190.558C150.393 200.098 150.952 207.192 150.982 207.503C152.61 228.036 153.419 238.297 153.549 249.159C153.609 254.2 153.589 261.766 153.12 271.075Z"
          fill="#A9EAFF" />
        <path
          d="M127.108 250.683C128.167 257.096 129.945 261.185 127.567 265.714C126.728 267.317 125.55 268.62 124.221 269.672C119.136 267.558 115.46 264.892 113.342 263.169C113.253 262.868 113.153 262.557 113.053 262.247C115.051 250.162 116.289 236.243 115.79 220.871C115.65 216.652 115.38 212.584 115.021 208.666C115.91 207.243 116.899 205.86 117.998 204.537C120.315 201.741 123.402 198.845 127.567 196.27C128.826 204.597 129.096 211.391 129.116 215.961C129.196 235.371 124.93 237.536 127.108 250.683Z"
          fill="#89C1CE" />
        <path
          d="M153.12 271.075C150.403 271.897 145.887 272.969 140.253 272.929C138.136 272.909 135.848 272.738 133.441 272.327C123.031 270.564 116.019 265.403 112.952 262.848C115.01 250.622 116.299 236.493 115.789 220.871C115.629 216.021 115.3 211.371 114.86 206.912C122.662 188.975 130.464 171.027 138.255 153.09C138.285 153.04 138.305 152.99 138.325 152.94C139.464 153.09 140.593 153.251 141.732 153.401C144.579 160.646 146.117 166.789 147.006 171.128C147.366 172.911 148.065 176.529 149.454 190.558C150.393 200.098 150.952 207.192 150.982 207.503C152.61 228.036 153.419 238.297 153.549 249.159C153.609 254.2 153.589 261.766 153.12 271.075Z"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M171.611 255.032C168.993 255.583 165.767 256.044 162.061 256.104C158.824 256.154 155.957 255.884 153.57 255.513C153.57 255.493 153.56 255.473 153.56 255.453C153.58 253.058 153.57 250.943 153.55 249.16C153.42 238.297 152.611 228.036 150.982 207.503C150.952 207.193 150.393 200.098 149.454 190.558C148.065 176.529 147.366 172.912 147.007 171.128C146.177 167.09 144.789 161.498 142.312 154.904C144.539 160.275 148.355 164.003 152.621 164.404C153.39 164.474 156.107 164.735 158.185 162.921C160.273 161.087 160.962 157.81 160.013 154.483C162.35 162.189 164.478 170.396 166.276 179.094C172.09 207.133 172.969 232.936 171.611 255.032Z"
          fill="#CAFFB8" />
        <path
          d="M171.611 255.032C168.993 255.583 165.767 256.044 162.061 256.104C158.824 256.154 155.957 255.884 153.57 255.513C153.57 255.493 153.56 255.473 153.56 255.453C153.58 253.058 153.57 250.943 153.55 249.16C153.42 238.297 152.611 228.036 150.982 207.503C150.952 207.193 150.393 200.098 149.454 190.558C148.065 176.529 147.366 172.912 147.007 171.128C146.177 167.09 144.789 161.498 142.312 154.904C144.539 160.275 148.355 164.003 152.621 164.404C153.39 164.474 156.107 164.735 158.185 162.921C160.273 161.087 160.962 157.81 160.013 154.483C162.35 162.189 164.478 170.396 166.276 179.094C172.09 207.133 172.969 232.936 171.611 255.032Z"
          stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M153.12 271.075C150.403 271.897 145.888 272.969 140.254 272.929C140.883 247.215 140.853 220.44 140.004 192.662C139.594 179.224 139.015 166.017 138.256 153.09C138.286 153.04 138.306 152.99 138.326 152.94C139.465 153.09 140.593 153.251 141.732 153.401C144.579 160.646 146.118 166.789 147.007 171.128C147.366 172.911 148.065 176.529 149.454 190.558C150.393 200.098 150.952 207.192 150.982 207.503C152.611 228.036 153.42 238.297 153.55 249.159C153.61 254.2 153.59 261.766 153.12 271.075Z"
          fill="#F3F0DE" />
        <path
          d="M138.256 153.09C138.256 153.09 138.306 152.99 138.326 152.94C139.465 153.09 140.593 153.251 141.732 153.401C144.579 160.646 146.118 166.789 147.007 171.128C147.366 172.911 148.065 176.529 149.454 190.558C150.393 200.098 150.952 207.192 150.982 207.503C152.611 228.036 153.42 238.297 153.55 249.159C153.61 254.2 153.59 261.766 153.12 271.075C150.403 271.897 145.888 272.969 140.254 272.929"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M140.492 213.716C140.382 206.782 140.212 199.767 140.003 192.662C139.753 184.475 139.444 176.399 139.064 168.432"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M128.586 146.086C125.2 157.479 115.859 163.772 112.243 166.197C105.301 170.867 96.9794 173.633 89.9868 174.555C82.8343 175.497 77.0804 174.515 75.622 171.669C72.9748 166.528 87.0599 160.646 92.4042 141.707C93.8727 136.506 93.6729 128.038 93.2733 111.093C93.1335 105.101 92.9037 100.13 92.8138 95.8615C92.624 86.1613 93.1734 80.0487 97.1992 73.6955C101.135 67.4926 105.271 65.9695 106.359 65.6087C115.31 62.6326 124.091 70.0078 125.12 70.8897C124.4 71.5611 123.711 72.2625 123.062 72.994C121.074 75.2086 119.406 77.6637 118.097 80.2591C117.268 81.9025 116.579 83.606 116.049 85.3296C112.663 96.4727 116.798 105.892 117.578 107.576C119.456 111.684 121.963 114.811 124.4 117.136C127.507 128.84 131.673 135.704 128.586 146.086Z"
          fill="#2E3D25" />
        <path
          d="M128.586 146.086C125.199 157.479 115.859 163.772 112.243 166.197C105.3 170.867 96.9789 173.633 89.9863 174.555C96.8591 167.36 104.061 157.409 108.337 144.342C108.836 142.799 110.615 137.217 111.733 129.481C115.599 102.736 106.409 86.8229 113.272 81.6221C114.231 80.9006 115.709 80.2292 118.097 80.2593C117.268 81.9027 116.578 83.6062 116.049 85.3298C112.662 96.4729 116.798 105.892 117.577 107.576C119.455 111.684 121.963 114.811 124.4 117.136C127.507 128.84 131.672 135.704 128.586 146.086Z"
          fill="#212D19" />
        <path
          d="M125.119 70.8897C124.4 71.5611 123.711 72.2625 123.061 72.994C119.405 71.7314 114.011 70.6792 108.956 72.964C105.4 74.5773 103.192 77.293 98.3076 85.7906C96.6893 88.6064 94.8213 91.9734 92.8134 95.8615C92.6236 86.1613 93.1731 80.0487 97.1988 73.6955C101.135 67.4926 105.27 65.9695 106.359 65.6087C115.31 62.6326 124.09 70.0078 125.119 70.8897Z"
          fill="#52703E" />
        <path
          d="M128.586 146.096C125.2 157.489 115.859 163.783 112.243 166.208C98.2081 175.657 78.5089 177.311 75.622 171.679C72.9748 166.538 87.0599 160.656 92.4042 141.717C93.8727 136.516 93.6729 128.048 93.2733 111.103C92.8138 91.5127 91.3953 82.8647 97.1992 73.7058C101.135 67.5029 105.271 65.9797 106.359 65.619C115.31 62.6428 124.091 70.0181 125.12 70.8999C120.824 74.8982 117.678 80.0188 116.049 85.3399C112.663 96.483 116.798 105.903 117.578 107.586C119.456 111.695 121.963 114.821 124.4 117.146C127.507 128.85 131.673 135.714 128.586 146.096Z"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M149.114 240.592C145.628 243.909 139.824 248.949 131.753 253.659C113.772 264.171 81.5557 274.833 68.3696 261.345C64.9332 257.818 63.8544 253.759 63.265 251.525C62.9753 250.402 62.7655 249.33 62.6556 248.248C62.4858 246.594 62.5358 244.951 62.7955 243.207C63.8044 236.403 68.03 228.126 75.1225 212.033C79.8575 201.28 82.235 195.909 83.6235 192.161C89.727 175.757 90.3564 168.112 98.2181 159.634C100.496 157.179 103.622 153.872 108.747 151.607C117.158 147.9 125.749 149.262 131.583 151.096C134.65 152.068 136.947 153.151 138.056 153.712C138.056 153.982 138.056 154.443 138.036 155.024C137.766 163.943 135.309 174.044 117.997 204.788C117.068 206.441 114.361 211.231 111.314 217.845C110.505 219.598 109.886 221.021 109.516 221.883C117.018 219.278 129.665 216.332 143.29 220.55C145.308 221.172 147.186 221.903 148.935 222.705C148.205 224.899 147.346 228.377 147.546 232.675C147.706 235.972 148.435 238.678 149.114 240.592Z"
          fill="#A9EAFF" />
        <path
          d="M92.0146 227.945C94.3821 227.024 96.8296 226.102 99.3469 225.21C102.823 223.977 106.22 222.855 109.506 221.853"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M131.582 150.185C128.416 151.367 124.55 153.111 120.454 155.676C108.067 163.432 101.634 173.743 98.0777 179.576C93.5225 187.051 91.085 193.765 89.7065 197.643C87.3889 204.146 86.4599 208.716 85.8905 210.971C82.3742 224.809 70.1971 239.299 62.7949 243.428C63.8039 236.544 68.0294 228.156 75.1219 211.873C79.8569 200.99 82.2344 195.549 83.6229 191.761C89.7265 175.156 90.3558 167.41 98.2175 158.833C100.495 156.347 103.622 153 108.746 150.706C117.158 146.948 125.748 148.331 131.582 150.185Z"
          fill="#DCF8FF" />
        <path
          d="M149.114 240.782C145.628 244.139 139.824 249.24 131.752 254.01C113.771 264.652 81.5553 275.444 68.3692 261.786C64.9329 258.218 63.854 254.11 63.2646 251.845C62.9749 250.713 62.7652 249.62 62.6553 248.528C67.2105 246.113 73.0243 244.42 78.4586 244.45C85.8608 244.5 87.6589 247.737 97.0689 247.055C100.475 246.805 106.769 246.344 113.262 242.666C116.518 240.812 117.108 239.69 120.544 238.277C124.979 236.453 127.177 237.024 132.681 236.173C142.731 234.609 145.268 231.182 147.546 232.765C147.705 236.102 148.435 238.838 149.114 240.782Z"
          fill="#89C1CE" />
        <path
          d="M138.325 152.94C135.119 151.307 121.693 144.913 108.746 150.706C103.622 153 100.485 156.347 98.2076 158.832C90.3559 167.4 89.7266 175.146 83.623 191.751C82.2245 195.538 79.857 200.98 75.112 211.872C65.0127 235.05 60.7472 242.215 63.2645 251.845C63.8539 254.11 64.9327 258.218 68.3691 261.786C81.5552 275.444 113.771 264.652 131.752 254.02C139.824 249.25 145.628 244.149 149.114 240.782C148.435 238.848 147.705 236.103 147.555 232.776C147.356 228.427 148.215 224.899 148.944 222.675C147.196 221.863 145.308 221.122 143.29 220.49C129.664 216.221 117.018 219.208 109.516 221.843C109.885 220.981 110.505 219.528 111.314 217.755C114.61 210.53 117.527 205.389 118.007 204.537"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M177.574 89.5488C173.219 94.3989 171.801 100.942 173.998 106.384C175.826 110.913 179.552 113.148 180.941 113.899C185.966 111.985 189.362 107.436 189.512 102.526C189.702 96.3028 184.637 90.4106 177.574 89.5588V89.5488Z"
          fill="#231F20" />
        <path
          d="M174.737 135.805C173.918 136.847 172.879 138.17 171.571 139.472C169.353 141.687 166.386 143.831 162.47 144.423C154.988 145.555 148.595 140.324 144.489 136.977C140.853 134.011 138.446 130.935 136.987 128.81C135.609 129.231 133.541 129.612 131.843 128.61C130.334 127.718 130.254 126.395 128.776 123.359C126.238 118.168 124.45 117.928 124.51 115.402C124.56 113.248 125.939 110.242 128.416 109.911C130.564 109.62 133.041 111.404 133.8 114.36C135.389 114.16 137.217 113.819 139.195 113.248C141.792 112.506 144.649 111.364 147.526 109.6C157.575 103.458 161.921 93.477 163.769 86.9434C164.598 84.0274 164.928 81.7927 165.047 80.9009C166.376 83.0052 168.833 86.2921 172.959 88.9375C175.127 90.3204 177.195 91.1722 178.873 91.7133C179.232 92.6653 179.692 94.1383 179.912 95.9922C179.942 96.2527 179.962 96.5032 179.982 96.7437C180.082 98.1366 180.002 99.299 179.842 100.391C179.752 101.053 179.642 101.684 179.542 102.315C179.432 102.967 179.322 103.608 179.262 104.289C178.883 108.428 180.261 110.282 180.941 113.889C183.058 124.992 175.277 135.123 174.737 135.805Z"
          fill="#FFBF94" />
        <path
          d="M171.571 139.472C169.353 141.687 166.386 143.831 162.47 144.422C154.988 145.555 148.595 140.324 144.489 136.977C140.853 134.011 138.446 130.934 136.987 128.81C135.609 129.231 133.541 129.612 131.843 128.61C130.334 127.718 130.254 126.395 128.776 123.359C126.238 118.168 124.45 117.927 124.51 115.402C124.56 113.248 125.939 110.241 128.416 109.911C130.564 109.62 133.041 111.404 133.8 114.36C135.389 114.16 137.217 113.819 139.195 113.248C139.844 115.402 140.743 118.058 141.962 121.014C145.069 128.589 146.627 132.377 150.473 135.664C151.791 136.796 156.806 140.955 164.308 140.895C167.115 140.875 169.563 140.264 171.571 139.472Z"
          fill="#E29C6D" />
        <path
          d="M160.112 103.678C159.723 101.914 154.948 101.594 154.059 101.554C147.296 101.203 141.542 104.9 141.712 105.371C141.812 105.642 143.809 104.66 148.385 104.249C152.62 103.868 155.737 103.578 157.615 105.001C157.885 105.201 158.524 105.742 159.133 105.562C159.783 105.361 160.262 104.369 160.112 103.688V103.678Z"
          fill="#2E3D25" />
        <path
          d="M148.345 107.656C149.753 109.109 151.122 109.961 152.051 110.442C153.609 111.253 154.768 111.865 156.216 111.604C157.975 111.293 159.043 109.891 159.403 109.379C158.854 108.778 157.275 107.215 154.688 106.654C151.481 105.963 148.974 107.305 148.345 107.656Z"
          fill="white" />
        <path
          d="M179.981 96.743C178.333 95.8111 176.385 96.0115 174.447 95.7209C173.189 95.5105 169.363 94.6888 166.336 91.2819C165.097 89.8891 164.288 88.3861 163.769 86.9431C164.598 84.0272 164.927 81.7927 165.047 80.9009C166.376 83.0051 168.833 86.2918 172.959 88.9372C175.127 90.32 177.194 91.1717 178.873 91.7128C179.232 92.6647 179.692 94.1377 179.912 95.9915C179.941 96.252 179.961 96.5025 179.981 96.743Z"
          fill="#E29C6D" />
        <path
          d="M159.393 109.38C158.304 107.225 157.116 106.554 156.277 106.313C153.45 105.512 149.264 107.907 146.107 108.317C145.788 108.358 145.248 108.337 144.649 108.087C143.63 107.666 143.07 106.794 142.801 106.273C143.16 108.788 143.97 109.65 144.689 109.961C147.036 110.963 150.263 106.774 154.908 107.826C154.998 107.846 155.068 107.867 155.108 107.877C154.948 108.027 154.399 108.578 154.379 109.4C154.339 110.442 155.158 111.614 156.227 111.614C157.295 111.614 158.035 110.342 158.075 109.4C158.095 109.029 158.005 108.728 157.925 108.518C158.424 108.808 158.914 109.099 159.413 109.38H159.393Z"
          fill="#231F20" />
        <path
          d="M158.185 162.921C156.107 164.734 153.39 164.474 152.621 164.404C148.355 164.003 144.539 160.275 142.312 154.904C142.122 154.413 141.932 153.912 141.732 153.401C140.903 153.291 140.084 153.18 139.255 153.07C139.335 147.569 139.405 142.067 139.485 136.576C139.505 135.153 139.525 133.73 139.545 132.307C139.624 132.347 139.714 132.377 139.794 132.417C141.053 133.87 142.601 135.434 144.489 136.977C148.066 139.893 153.4 144.252 159.663 144.563C159.494 145.484 159.364 146.507 159.314 147.619C159.254 148.821 159.294 149.954 159.404 150.986C159.533 152.309 159.763 153.481 160.013 154.483C160.962 157.81 160.273 161.087 158.185 162.921Z"
          fill="#FFBF94" />
        <path
          d="M159.403 150.985C156.906 150.484 153.819 149.532 150.603 147.698C144.729 144.352 141.302 139.702 139.484 136.576C139.504 135.153 139.524 133.73 139.544 132.307C139.624 132.347 139.714 132.377 139.794 132.417C141.053 133.87 142.601 135.433 144.489 136.977C148.065 139.893 153.4 144.251 159.663 144.562C159.493 145.484 159.363 146.506 159.313 147.618C159.253 148.821 159.293 149.953 159.403 150.985Z"
          fill="#E29C6D" />
        <path
          d="M160.013 154.483C160.962 157.81 160.273 161.087 158.185 162.921C156.107 164.734 153.39 164.474 152.621 164.404C148.355 164.003 144.539 160.275 142.312 154.904C142.122 154.413 141.932 153.912 141.732 153.401C140.903 153.291 140.084 153.18 139.255 153.07C139.355 146.146 139.445 139.221 139.545 132.307C139.624 132.347 139.714 132.377 139.794 132.417C141.053 133.87 142.601 135.434 144.489 136.977C148.066 139.893 153.4 144.252 159.663 144.563C159.494 145.484 159.364 146.507 159.314 147.619C159.184 150.355 159.563 152.699 160.013 154.483Z"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M160.721 156.878C160.492 156.077 160.252 155.275 160.013 154.483C160.123 154.734 160.512 155.646 160.721 156.878Z"
          stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M195.585 101.884C191.319 110.793 182.429 113.468 180.94 113.889C181.53 113.338 188.093 107.045 187.124 100.401C187.004 99.5694 186.724 97.6655 185.355 95.7816C183.717 93.5369 181.46 92.5949 180.63 92.2542C179.931 91.9737 179.312 91.8133 178.872 91.7131C177.194 91.172 175.126 90.3202 172.959 88.9374C168.833 86.2919 166.376 83.0051 165.047 80.9007C164.657 83.7767 162.07 100.712 147.525 109.6C142.461 112.697 137.476 113.889 133.8 114.36C133.64 113.729 133.39 113.148 133.091 112.626C131.992 110.733 130.104 109.68 128.416 109.911C125.938 110.242 124.56 113.238 124.51 115.402C124.48 116.565 124.849 117.236 125.509 118.148C122.742 115.743 119.745 112.306 117.577 107.576C116.798 105.893 112.662 96.473 116.049 85.3299C119.395 74.3371 129.295 64.1961 142.371 62.8533C154.878 61.5806 163.918 69.0161 165.786 70.6294C175.146 67.1923 185.575 69.7676 191.909 77.0327C197.643 83.5963 199.6 93.5068 195.585 101.884Z"
          fill="#2E3D25" />
        <path
          d="M165.047 80.9009C164.657 83.7768 162.07 100.712 147.526 109.6C142.461 112.697 137.476 113.889 133.8 114.36C133.64 113.729 133.391 113.148 133.091 112.627C138.915 108.939 145.767 103.788 152.56 96.7137C157.885 91.1521 161.96 85.6808 165.047 80.9009Z"
          fill="#52703E" />
        <path
          d="M157.695 75.3995C151.731 74.207 147.726 75.4697 145.648 76.3916C135.608 80.8508 129.914 95.401 132.881 112.296C131.113 111.204 128.646 109.31 126.948 106.253C121.284 96.0123 127.277 77.9748 139.984 73.5156C147.726 70.8 155.138 74.1068 157.695 75.4095V75.3995Z"
          fill="#212D19" />
        <path
          d="M164.428 69.5171C159.952 67.4027 153.979 65.6691 147.026 66.3806C132.631 67.8536 121.723 79.0268 118.037 91.1319C116.328 96.7435 116.358 101.964 116.978 106.143C115.639 102.746 113.222 94.6392 116.049 85.3299C119.395 74.3371 129.295 64.196 142.371 62.8533C152.95 61.781 161.051 66.9317 164.428 69.5171Z"
          fill="#52703E" />
        <path
          d="M164.428 69.5171C165.077 69.8277 165.696 70.1484 166.276 70.459C166.116 70.5091 165.946 70.5692 165.786 70.6293C165.497 70.3788 165.047 69.9981 164.428 69.5171Z"
          fill="#2E3D25" />
        <path
          d="M195.585 101.894C191.319 110.802 182.429 113.478 180.94 113.899C181.53 113.348 188.093 107.055 187.124 100.411C187.004 99.5792 186.724 97.6752 185.356 95.7913C183.717 93.5467 181.46 92.6047 180.63 92.264C179.931 91.9834 179.312 91.8231 178.872 91.7229C177.194 91.1818 175.126 90.33 172.959 88.9471C168.833 86.3016 166.376 83.0148 165.047 80.9105C164.657 83.7864 162.07 100.722 147.525 109.61C142.461 112.706 137.476 113.899 133.8 114.37C133.041 111.414 130.563 109.63 128.416 109.921C125.938 110.251 124.56 113.248 124.51 115.412C124.48 116.574 124.849 117.246 125.509 118.158C122.742 115.753 119.745 112.316 117.577 107.586C116.798 105.902 112.662 96.4828 116.049 85.3396C119.395 74.3469 129.295 64.2058 142.371 62.863C154.878 61.5904 163.918 69.0258 165.786 70.6392C175.146 67.202 185.575 69.7774 191.909 77.0424C197.643 83.6061 199.6 93.5166 195.585 101.894Z"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M180.941 113.899C180.262 110.282 178.883 108.438 179.263 104.299C179.512 101.674 180.332 99.5494 179.912 96.002C179.692 94.1482 179.233 92.6751 178.873 91.7231C179.313 91.8234 179.932 91.9837 180.631 92.2643C181.46 92.605 183.718 93.5469 185.356 95.7916C186.725 97.6755 187.004 99.5794 187.124 100.411C188.093 107.055 181.53 113.348 180.941 113.899Z"
          stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M179.842 100.391C179.752 101.053 179.642 101.684 179.542 102.315C177.504 102.045 174.977 101.954 173.229 103.367C172.739 103.768 172.1 104.45 171.56 104.45C171.531 104.45 171.501 104.45 171.471 104.44C171.361 104.5 171.141 104.319 170.901 104.059C170.771 104.019 170.631 103.979 170.472 103.959C169.842 103.868 169.443 103.999 169.393 103.878C169.363 103.768 169.652 103.508 169.982 103.438C170.132 103.397 170.282 103.417 170.422 103.448C170.122 102.997 169.902 102.536 170.032 102.445C170.162 102.365 170.641 102.656 170.781 102.756C170.811 102.776 170.821 102.786 170.841 102.806C170.861 102.696 170.891 102.596 170.921 102.496C171.021 102.225 171.371 101.484 173.848 100.782C175.736 100.251 177.694 99.7099 179.842 100.391Z"
          fill="#2E3D25" />
        <path
          d="M167.805 105.532C168.554 109.149 169.513 112.706 170.911 116.103C171.501 117.576 172.65 119.37 171.76 121.063C171.221 122.065 170.092 122.426 169.103 122.506L169.483 122.406C167.825 123.037 166.206 123.178 164.428 122.576C162.43 121.795 162.84 119.079 164.059 117.837C164.368 117.456 164.978 117.907 164.698 118.318C164.328 118.889 164.089 119.57 164.119 120.172C164.138 122.186 167.715 121.214 168.774 120.512C169.313 120.542 170.092 120.392 170.192 120.131C170.382 119.931 170.392 119.3 170.222 118.668C169.832 117.366 169.223 115.823 168.893 114.44C168.114 111.534 167.595 108.578 167.225 105.622C167.175 105.261 167.745 105.151 167.815 105.522L167.805 105.532Z"
          fill="#231F20" />
        <path
          d="M155.577 124.531C156.117 125.714 158.194 129.942 162.57 131.305C163.499 131.596 165.017 132.046 166.745 131.485C170.112 130.403 171.161 126.485 171.261 126.064C170.671 126.285 169.762 126.575 168.613 126.786C165.377 127.357 162.74 126.746 160.482 126.205C159.253 125.904 157.545 125.413 155.577 124.541V124.531Z"
          fill="white" />
        <path
          d="M171.261 126.054C170.971 125.253 170.641 124.972 170.332 124.912C169.513 124.742 169.023 126.194 167.834 126.275C167.045 126.325 166.626 125.824 165.767 125.343C163.229 123.93 161.551 125.683 157.056 124.621C155.747 124.311 155.198 124 155.148 124.1C155.018 124.371 158.734 127.126 163.569 127.898C165.357 128.178 167.755 128.529 169.922 127.176C170.542 126.796 170.981 126.365 171.261 126.054Z"
          fill="#E77A5C" />
        <path
          d="M155.147 124.1C155.817 123.8 156.975 128.299 161.211 130.012C163.389 130.894 166.226 130.984 168.333 129.702C170.541 128.369 171.18 126.004 171.26 126.054C171.38 126.114 170.381 131.024 166.505 132.898C163.898 134.161 160.412 133.85 157.994 131.916C154.688 129.261 154.488 124.401 155.157 124.11L155.147 124.1Z"
          fill="#E77A5C" />
        <path
          d="M181.66 106.694C180.861 107.215 179.932 107.576 179.262 107.265C178.953 107.135 178.643 106.724 178.133 106.414C175.336 104.871 172.2 107.326 173.039 110.382C173.059 110.462 173.179 110.452 173.179 110.372C173.299 108.538 174.387 107.336 175.866 107.185C175.366 107.506 175.027 108.137 175.027 108.859C175.027 109.921 175.736 110.773 176.625 110.773C177.514 110.773 178.223 109.911 178.223 108.859C178.223 108.338 178.043 107.867 177.764 107.516C178.083 107.666 178.443 107.917 178.973 108.087C179.572 108.247 180.181 108.147 180.661 107.887C180.89 107.796 182.239 106.664 181.66 106.694Z"
          fill="#231F20" />
        <path
          d="M226.792 303.703C226.233 306.94 225.573 309.555 225.104 311.219C223.605 310.768 220.788 310.146 217.432 310.838C213.766 311.599 211.138 313.573 209.48 315.237C208.441 316.259 207.792 317.181 207.502 317.612C204.865 315.006 201.239 310.918 198.132 305.206C193.257 296.248 192.788 289.002 190.59 277.108C189.102 269.071 189.851 275.274 184.097 250.122C176.375 216.402 164.807 160.616 163.639 155.015C168.753 155.556 178.133 157.309 186.455 164.264C192.418 169.244 195.395 174.856 196.963 178.052C206.104 196.681 207.173 214.358 212.397 235.361C220.429 267.688 231.077 278.912 226.792 303.703Z"
          fill="#A9EAFF" />
        <path
          d="M226.792 303.703C226.233 306.94 225.573 309.555 225.104 311.219C223.605 310.768 220.788 310.146 217.432 310.838C213.766 311.599 211.138 313.573 209.48 315.237C208.441 316.259 207.792 317.181 207.502 317.612C204.865 315.006 201.239 310.918 198.132 305.206C193.257 296.248 192.788 289.002 190.59 277.108C189.102 269.071 189.851 275.274 184.097 250.122C176.375 216.402 164.807 160.616 163.639 155.015C168.753 155.556 178.133 157.309 186.455 164.264C192.418 169.244 195.395 174.856 196.963 178.052C206.104 196.681 207.173 214.358 212.397 235.361C220.429 267.688 231.077 278.912 226.792 303.703Z"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M190.51 211.011C190.191 217.183 188.692 219.578 186.904 227.966C186.035 232.014 185.646 234.93 185.126 238.828C184.317 244.871 183.588 253.378 183.967 263.99C181.92 265.153 179.432 266.355 176.525 267.398C174.318 268.179 172.25 268.74 170.402 269.131C173.119 244.229 173.379 213.335 166.276 179.094C164.478 170.396 162.35 162.189 160.013 154.483C161.891 154.574 163.929 154.794 166.066 155.185C166.945 155.345 167.834 155.536 168.743 155.756C169.543 155.946 170.312 156.157 171.051 156.377C176.545 170.186 180.881 179.305 184.237 185.628C185.676 188.334 188.602 193.675 189.901 201.3C190.74 206.231 190.56 210.159 190.51 211.011Z"
          fill="#A9EAFF" />
        <path
          d="M176.525 267.398C174.318 268.179 172.25 268.74 170.402 269.131C173.119 244.229 173.379 213.335 166.276 179.094C164.478 170.396 162.35 162.189 160.013 154.483C161.891 154.574 163.929 154.794 166.066 155.185C168.264 161.177 170.721 168.713 172.879 177.531C173.808 181.299 176.735 193.695 178.203 210.56C179.382 224.038 179.912 243.558 176.525 267.398Z"
          fill="#F3F0DE" />
        <path
          d="M184.237 185.628C185.676 188.334 188.602 193.675 189.901 201.3C190.74 206.231 190.56 210.159 190.51 211.011C190.191 217.183 188.692 219.578 186.904 227.966C186.035 232.014 185.646 234.93 185.126 238.828C184.317 244.871 183.588 253.378 183.967 263.99C181.92 265.153 179.432 266.355 176.525 267.398C174.318 268.179 172.25 268.74 170.402 269.131C173.119 244.23 173.379 213.335 166.276 179.094C164.478 170.396 162.35 162.189 160.013 154.483C161.891 154.574 163.929 154.794 166.066 155.185C166.945 155.345 167.834 155.536 168.743 155.756C169.543 155.946 170.312 156.157 171.051 156.377"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M176.525 267.398C174.318 268.179 172.25 268.74 170.402 269.131C173.119 244.23 173.379 213.335 166.276 179.094C164.478 170.396 162.35 162.189 160.013 154.483C161.891 154.574 163.929 154.794 166.066 155.185C168.264 161.177 170.721 168.713 172.879 177.531"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M219.43 451.068C219.43 460.648 218.151 467.763 217.532 471.32C215.134 484.969 212.387 503.116 208.981 527.707H168.224C168.004 521.003 167.984 514.961 168.064 509.71C168.324 493.737 168.444 485.75 170.751 475.639C173.029 465.689 174.607 465.759 175.406 458.714C176.775 446.669 173.209 437.169 171.461 432.339C166.626 418.992 160.582 399.541 153.11 374.64C153.07 374.52 153.04 374.389 153 374.269C151.731 370.05 150.423 365.701 149.074 361.182C149.174 359.949 149.274 358.727 149.374 357.494C149.873 351.231 150.383 344.968 150.882 338.695C153.11 311.128 155.328 283.541 157.535 255.974C158.564 256.054 159.653 256.104 160.792 256.114C161.201 256.114 161.631 256.114 162.061 256.104C165.767 256.044 168.993 255.583 171.61 255.032C171.311 259.922 170.891 264.622 170.402 269.131C172.25 268.74 174.318 268.179 176.525 267.397C179.432 266.355 181.92 265.153 183.967 263.99C188.982 278.27 194.356 296.257 198.522 317.381C203.427 342.263 200.969 342.724 206.833 373.387C210.349 391.715 213.356 410.133 217.052 428.431C217.762 431.919 219.43 440.116 219.43 451.068Z"
          fill="#0E5B4C" />
        <path
          d="M182.139 436.217C182.828 438.933 182.848 442.921 182.888 450.908C182.948 463.694 179.062 473.785 177.674 478.044C174.607 487.434 172.539 502.595 177.394 527.707H168.224C168.004 521.003 167.984 514.961 168.064 509.71C168.324 493.737 168.444 485.75 170.751 475.639C173.029 465.689 174.607 465.759 175.406 458.714C176.775 446.669 173.209 437.169 171.46 432.339C166.625 418.992 160.582 399.541 153.11 374.64C151.911 368.717 150.662 363.006 149.374 357.494C148.804 355.069 148.225 352.684 147.646 350.339C148.724 346.461 149.803 342.573 150.882 338.695C152.48 332.963 154.069 327.231 155.667 321.5C159.163 333.725 162.48 343.455 164.767 349.838C175.646 380.231 183.907 392.918 180.9 403.109C180.741 403.67 177.524 414.452 181.15 417.549C181.62 417.95 182.948 418.861 182.888 420.044C182.828 421.206 181.46 421.697 180.651 422.529C178.153 425.104 180.87 431.177 182.139 436.217Z"
          fill="#084439" />
        <path
          d="M219.43 451.068C219.43 460.648 218.151 467.763 217.532 471.32C215.134 484.969 212.387 503.116 208.981 527.707H168.224C168.004 521.003 167.984 514.961 168.064 509.71C168.324 493.737 168.444 485.75 170.751 475.639C173.029 465.689 174.607 465.759 175.406 458.714C176.775 446.669 173.209 437.169 171.461 432.339C166.606 418.922 160.522 399.351 153 374.269C151.731 370.05 150.423 365.701 149.074 361.182C151.901 326.119 154.728 291.036 157.535 255.974C158.564 256.054 159.653 256.104 160.792 256.114C161.201 256.114 161.631 256.114 162.061 256.104C165.767 256.044 168.993 255.583 171.61 255.032C171.311 259.922 170.891 264.622 170.402 269.131C172.25 268.74 174.318 268.179 176.525 267.397C179.432 266.355 181.92 265.153 183.967 263.99C188.982 278.27 194.356 296.257 198.522 317.381C203.427 342.263 200.969 342.724 206.833 373.387C210.349 391.715 213.356 410.133 217.052 428.431C217.762 431.919 219.43 440.116 219.43 451.068Z"
          stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path
          d="M160.792 256.114C158.145 287.639 155.897 319.886 154.099 352.845C153.709 360.009 153.34 367.154 153 374.259C150.433 427.109 149.194 478.295 149.054 527.707H105.92C100.575 493.747 100.366 478.134 101.534 470.448C101.554 470.328 101.574 470.178 101.604 469.997C101.624 469.897 101.634 469.787 101.654 469.667C101.654 469.637 101.664 469.617 101.664 469.587C101.684 469.456 101.704 469.316 101.734 469.166C101.734 469.146 101.734 469.116 101.744 469.086C101.754 468.985 101.774 468.875 101.794 468.765C101.794 468.715 101.804 468.665 101.814 468.615C101.824 468.494 101.844 468.364 101.864 468.234C101.894 468.033 101.914 467.833 101.944 467.643C101.984 467.362 102.014 467.071 102.054 466.761C102.104 466.4 102.144 466.049 102.184 465.729C102.224 465.338 102.264 464.937 102.314 464.506C102.343 464.115 102.383 463.714 102.423 463.294C102.453 462.973 102.473 462.752 102.483 462.632C102.833 458.634 104.271 454.415 104.881 451.77C106.229 445.918 105.031 441.178 104.002 436.117C102.913 430.746 101.854 424.353 100.855 417.449C96.5896 387.847 93.4429 348.766 93.333 340.108C93.333 331.4 93.333 326.079 93.9923 320.187C94.1521 318.734 94.3519 317.231 94.5917 315.647C98.118 292.8 107.558 275.544 114.501 265.043C114.81 264.952 115.12 264.852 115.43 264.762C116.529 265.554 117.827 266.415 119.336 267.277C122.922 269.321 127.657 271.346 133.441 272.328C135.848 272.738 138.136 272.909 140.253 272.929C145.888 272.969 150.403 271.897 153.12 271.075C153.43 265.083 153.539 259.812 153.559 255.473C153.559 255.483 153.569 255.493 153.569 255.513C154.778 255.703 156.097 255.863 157.535 255.974C158.564 256.054 159.653 256.104 160.792 256.114Z"
          fill="#0E5B4C" />
        <path
          d="M99.936 338.375C98.7773 355.841 99.966 363.888 100.625 383.699C100.915 392.407 101.115 403.801 100.855 417.449C96.5896 387.847 93.4429 348.766 93.333 340.108C93.333 331.4 93.333 326.079 93.9923 320.187C94.1521 318.734 94.3519 317.231 94.5917 315.648C98.118 292.8 107.558 275.545 114.501 265.043C114.81 264.953 115.12 264.852 115.43 264.762C116.529 265.554 117.827 266.416 119.336 267.277C115.55 274.072 111.144 283.21 107.508 294.434C106.139 298.642 101.604 313.303 99.936 338.375Z"
          fill="#1F9B83" />
        <path
          d="M160.792 256.114C159.653 256.114 158.564 256.054 157.535 255.974C156.097 255.863 154.778 255.703 153.57 255.513C153.57 255.493 153.57 255.483 153.57 255.473C153.55 259.812 153.44 265.083 153.13 271.075C150.413 271.897 145.898 272.969 140.264 272.929C138.146 272.909 135.858 272.738 133.451 272.328C125.249 270.935 119.146 267.437 115.44 264.762C115.13 264.852 114.82 264.952 114.511 265.043C107.568 275.544 98.1281 292.8 94.6018 315.647C94.3621 317.231 94.1623 318.734 94.0025 320.187C93.1933 327.282 93.2533 333.154 93.3432 340.108C93.483 350.79 98.238 407.748 104.012 436.117C105.041 441.178 106.24 445.918 104.891 451.77C104.282 454.415 102.843 458.634 102.494 462.632C102.484 462.752 102.464 462.973 102.434 463.294C102.414 463.614 102.374 464.015 102.324 464.506C102.284 464.867 102.244 465.278 102.194 465.729C102.154 466.049 102.114 466.4 102.064 466.761C102.034 467.041 101.994 467.342 101.954 467.643C101.924 467.833 101.904 468.033 101.874 468.234C101.854 468.364 101.834 468.494 101.824 468.615C101.814 468.665 101.804 468.715 101.804 468.765C101.784 468.875 101.764 468.985 101.754 469.086C101.744 469.116 101.744 469.146 101.744 469.166C101.714 469.316 101.694 469.456 101.674 469.587C101.674 469.617 101.664 469.637 101.664 469.667C101.644 469.787 101.624 469.897 101.614 469.998C101.584 470.178 101.564 470.328 101.545 470.448C100.376 478.134 100.586 493.747 105.93 527.707H149.064C149.204 478.295 150.443 427.109 153.01 374.269C153.35 367.154 153.719 360.009 154.109 352.845"
          stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path
          d="M236.262 363.116C235.623 363.397 234.833 363.256 234.294 362.946C232.496 361.914 232.536 358.807 232.436 356.853C232.286 354.047 231.617 350.099 229.269 345.209C229.539 347.223 230.818 356.843 230.148 361.473C229.889 363.257 229.359 364.118 228.64 364.459C227.911 364.8 226.922 364.629 226.222 364.239C225.543 363.858 225.194 363.307 225.054 363.036C224.814 363.166 224.265 363.427 223.565 363.347C223.565 363.347 223.116 363.297 222.686 363.086C221.827 362.635 221.248 360.872 221.368 358.637C221.168 358.737 220.818 358.887 220.359 358.907C220.359 358.907 219.669 358.938 218.99 358.537C217.751 357.805 217.981 354.208 217.811 351.041C217.721 349.358 217.582 346.873 216.712 344.177C215.674 340.96 214.765 341.07 213.326 337.463C212.277 334.838 211.938 332.703 211.438 329.577C211.128 327.623 210.869 325.408 210.759 322.973C210.079 320.608 209.39 318.233 208.711 315.868C210.04 314.515 213.646 311.219 219.09 310.667C220.898 310.487 222.496 310.647 223.765 310.898C224.225 313.473 224.694 316.059 225.154 318.634C226.702 321.109 227.691 323.234 228.31 324.757C228.73 325.789 228.79 326.119 229.489 327.833C230.318 329.867 230.927 331.09 231.847 333.425C232.985 336.331 234.404 339.948 235.013 342.994C237.331 348.927 237.83 353.647 237.89 356.683C238 362.084 236.741 362.906 236.262 363.116Z"
          fill="#FFBF94" />
        <path
          d="M236.262 363.116C235.623 363.397 234.833 363.256 234.294 362.946C232.496 361.914 232.536 358.807 232.436 356.853C232.286 354.047 231.617 350.099 229.269 345.209C229.539 347.223 230.818 356.843 230.148 361.473C229.889 363.257 229.359 364.118 228.64 364.459C227.911 364.8 226.922 364.629 226.222 364.239C225.543 363.858 225.194 363.307 225.054 363.036C224.814 363.166 224.265 363.427 223.565 363.347C223.565 363.347 223.116 363.297 222.686 363.086C221.827 362.635 221.248 360.872 221.368 358.637C221.168 358.737 220.818 358.887 220.359 358.907C220.359 358.907 219.669 358.938 218.99 358.537C217.751 357.805 217.981 354.208 217.811 351.041C217.721 349.358 217.582 346.873 216.712 344.177C215.674 340.96 214.765 341.07 213.326 337.463C212.277 334.838 211.938 332.703 211.438 329.577C211.128 327.623 210.869 325.408 210.759 322.973C210.079 320.608 209.39 318.233 208.711 315.868C210.04 314.515 213.646 311.219 219.09 310.667C220.898 310.487 222.496 310.647 223.765 310.898C224.225 313.473 224.694 316.059 225.154 318.634C226.702 321.109 227.691 323.234 228.31 324.757C228.73 325.789 228.79 326.119 229.489 327.833C230.318 329.867 230.927 331.09 231.847 333.425C232.985 336.331 234.404 339.948 235.013 342.994C237.331 348.927 237.83 353.647 237.89 356.683C238 362.084 236.741 362.906 236.262 363.116Z"
          stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path
          d="M221.367 358.636C221.627 356.932 221.806 354.988 221.796 352.834C221.796 349.137 221.257 345.96 220.648 343.475"
          stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path
          d="M225.053 363.035C225.013 362.985 224.953 362.895 224.893 362.785C224.664 362.314 224.724 361.853 224.744 361.723C224.794 361.292 225.882 351.532 224.075 344.548C223.995 344.227 223.915 343.956 223.865 343.786"
          stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path
          d="M215.137 230.04L204.698 224.549C203.403 223.868 201.803 224.368 201.124 225.667L191.295 244.472C190.616 245.771 191.115 247.376 192.41 248.057L202.849 253.548C204.144 254.229 205.744 253.728 206.423 252.429L216.253 233.624C216.931 232.326 216.432 230.721 215.137 230.04Z"
          fill="#0B1107" />
        <path
          d="M217.699 230.77C222.329 230.468 225.98 228.643 225.854 226.693C225.728 224.744 221.872 223.409 217.242 223.711C212.612 224.013 208.961 225.838 209.087 227.787C209.214 229.736 213.069 231.072 217.699 230.77Z"
          stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M219.45 224.639C219.47 225.32 218.991 225.952 218.541 226.252C216.983 227.294 214.036 225.38 212.148 224.268C209.481 222.695 205.595 220.781 200.241 219.238C208.282 223.146 214.096 226.262 215.225 227.284C215.434 227.475 215.994 227.986 216.044 228.697C216.044 228.697 216.084 229.449 215.404 230.21C214.106 231.643 202.998 226.733 197.294 224.098C198.382 224.879 206.334 230.601 207.463 233.207C207.623 233.567 207.982 234.419 207.613 235.091C207.213 235.822 206.184 235.912 206.074 235.922C204.826 236.023 203.827 235.081 203.277 234.58C200.241 231.794 197.983 229.719 195.506 229.138C194.387 228.878 193.498 228.978 192.169 229.178C184.447 230.371 181.61 232.796 175.716 232.856C174.608 232.856 172.849 232.786 170.672 232.235C170.242 232.405 169.803 232.575 169.373 232.746C162.61 235.421 155.867 238.097 149.115 240.782C148.445 238.878 147.686 236.053 147.556 232.585C147.516 231.734 147.516 230.842 147.566 229.92C147.726 226.984 148.325 224.529 148.935 222.675C155.468 220.941 162.001 219.218 168.534 217.484C171.051 216.221 175.067 214.217 181.061 211.231C183.488 210.029 186.365 208.225 190.541 207.844C191.26 207.784 192.209 207.804 194.127 207.834C195.156 207.854 200.65 207.984 203.997 209.157C204.746 209.417 205.445 209.738 205.445 209.738C206.254 210.109 207.013 210.53 207.912 211.091C215.934 216.071 219.96 218.606 219.44 220.27C219.3 220.721 218.861 220.971 218.681 221.072C217.203 221.923 214.935 220.5 213.986 219.919C211.549 218.426 209.391 217.354 207.693 216.582C211.429 218.667 216.603 221.833 218.002 222.755C218.451 223.046 219.42 223.707 219.45 224.639Z"
          fill="#FFBF94" />
        <path
          d="M170.102 230.922C169.862 231.533 169.622 232.134 169.373 232.746C162.61 235.421 155.867 238.096 149.114 240.782C148.445 238.878 147.686 236.052 147.556 232.585C155.068 232.034 162.59 231.473 170.102 230.922Z"
          fill="#E29C6D" />
        <path
          d="M148.934 222.675C155.467 220.951 162 219.218 168.534 217.494C171.041 216.231 175.057 214.217 181.06 211.241C183.488 210.039 186.365 208.235 190.54 207.854C191.25 207.794 192.209 207.804 194.117 207.844C195.145 207.864 200.64 207.994 203.986 209.167C204.735 209.427 205.435 209.748 205.435 209.748C206.254 210.119 207.003 210.54 207.902 211.101C215.924 216.081 219.949 218.616 219.43 220.28C219.29 220.731 218.85 220.981 218.671 221.092C217.202 221.943 214.935 220.52 213.976 219.939C207.792 216.161 203.447 215.059 203.607 214.708C203.886 214.097 215.754 221.292 217.991 222.765C218.441 223.056 219.41 223.717 219.44 224.649C219.46 225.33 218.97 225.962 218.531 226.262C216.972 227.304 214.016 225.39 212.128 224.278C209.46 222.705 205.584 220.791 200.22 219.248C208.262 223.166 214.075 226.272 215.204 227.294C215.424 227.485 215.983 227.996 216.023 228.717C216.023 228.717 216.063 229.459 215.384 230.22C214.085 231.653 202.977 226.753 197.283 224.118C198.372 224.899 206.324 230.621 207.442 233.217C207.602 233.587 207.972 234.429 207.592 235.111C207.193 235.842 206.164 235.932 206.054 235.942C204.815 236.043 203.806 235.101 203.257 234.6C200.22 231.814 197.963 229.75 195.485 229.158C194.366 228.898 193.467 228.998 192.149 229.198C184.417 230.391 181.58 232.816 175.696 232.876C174.587 232.886 172.829 232.806 170.641 232.255C163.459 235.101 156.277 237.947 149.084 240.802C148.255 238.438 147.276 234.64 147.536 229.95C147.696 227.014 148.295 224.549 148.914 222.695L148.934 222.675Z"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M235.013 342.994C235.782 345.258 235.582 347.443 234.344 348.545C234.114 348.755 233.555 349.246 232.885 349.176C231.617 349.036 230.987 346.982 230.088 344.767C229.419 343.124 228.35 340.819 226.692 338.124C226.072 338.194 224.224 338.324 222.406 337.182C219.669 335.468 219.34 332.332 219.31 331.951C222.976 331.23 226.652 330.508 230.318 329.797C231.137 331.641 231.936 333.615 232.705 335.739C233.634 338.284 234.384 340.719 235.013 343.004V342.994Z"
          fill="#FFBF94" />
        <path
          d="M230.318 329.787C231.137 331.63 231.936 333.604 232.705 335.729C233.634 338.274 234.384 340.709 235.013 342.993C235.782 345.258 235.582 347.442 234.344 348.545C234.114 348.755 233.555 349.246 232.885 349.176C231.617 349.036 230.987 346.982 230.088 344.767C229.419 343.124 228.35 340.819 226.692 338.124C226.072 338.194 224.224 338.324 222.406 337.182C219.669 335.468 219.34 332.332 219.31 331.951"
          stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path
          d="M228.237 224.03L221.881 226.807C219.327 227.923 218.158 230.904 219.27 233.467L220.179 235.561C221.291 238.124 224.264 239.296 226.818 238.181L233.174 235.404C235.729 234.288 236.898 231.307 235.786 228.744L234.876 226.65C233.764 224.087 230.792 222.915 228.237 224.03Z"
          fill="#0B1107" />
        <path
          d="M228.237 224.03L221.881 226.807C219.327 227.923 218.158 230.904 219.27 233.467L220.179 235.561C221.291 238.124 224.264 239.296 226.818 238.181L233.174 235.404C235.729 234.288 236.898 231.307 235.786 228.744L234.876 226.65C233.764 224.087 230.792 222.915 228.237 224.03Z"
          stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M238.749 256.775C237.77 257.205 236.631 256.755 236.212 255.773L228.28 237.506L231.817 235.962L239.748 254.229C240.178 255.211 239.728 256.354 238.749 256.775Z"
          fill="#F3F0DE" />
        <path
          d="M238.749 256.775C237.77 257.205 236.631 256.755 236.212 255.773L228.28 237.506L231.817 235.962L239.748 254.229C240.178 255.211 239.728 256.354 238.749 256.775Z"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M131.213 273.69C130.573 274.873 127.846 279.582 121.953 281.667C117.168 283.36 113.042 282.358 111.563 281.917"
          stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path
          d="M158.144 274.332C158.224 278.601 158.254 285.275 157.875 293.472C157.365 304.194 156.526 309.425 155.667 321.51C155.307 326.62 154.858 334.136 154.628 343.375"
          stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path
          d="M156.297 322.191C157.286 321.279 158.664 319.866 160.053 317.942C164.508 311.77 165.437 305.256 165.947 299.594C167.355 283.902 166.196 267.648 165.737 262.006"
          stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
        <path
          d="M178.873 91.7131C179.223 92.665 179.692 94.1381 179.912 95.9919C180.332 99.5393 179.512 101.674 179.263 104.289C178.883 108.428 180.262 110.272 180.941 113.889C183.049 124.992 175.277 135.123 174.737 135.804C172.51 138.63 168.674 143.48 162.46 144.422C158.734 144.984 155.278 143.971 152.241 142.398C149.204 140.825 146.537 138.66 144.479 136.977C142.452 135.323 140.813 133.63 139.495 132.097C138.456 130.874 137.627 129.752 136.977 128.81C135.599 129.241 133.531 129.622 131.833 128.61C130.324 127.718 130.254 126.395 128.766 123.359C126.229 118.158 124.441 117.917 124.5 115.392C124.55 113.238 125.929 110.241 128.406 109.901C130.554 109.61 133.041 111.394 133.791 114.35C137.457 113.879 142.452 112.687 147.516 109.59C162.061 100.702 164.648 83.7666 165.038 80.8906C166.356 82.995 168.824 86.2818 172.949 88.9273C175.117 90.3102 177.185 91.1619 178.863 91.703L178.873 91.7131Z"
          stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <path
        d="M1288.85 312.127C1286.29 311.375 1283.74 310.614 1281.19 309.862H1281.18C1265.5 305.223 1249.83 300.594 1234.16 295.954"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1232.04 328.362L1235.61 328.211C1235.58 328.462 1235.55 328.722 1235.52 328.973C1235.05 328.823 1234.57 328.702 1234.09 328.612C1233.96 328.582 1233.83 328.562 1233.71 328.542C1233.63 328.522 1233.56 328.512 1233.48 328.512C1233.17 328.452 1232.86 328.412 1232.54 328.402C1232.37 328.382 1232.21 328.372 1232.04 328.362Z"
        stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1234.59 309.595L1222.4 310.079C1220.11 310.17 1218.33 312.104 1218.42 314.399C1218.51 316.694 1220.44 318.481 1222.73 318.39L1234.91 317.905C1237.2 317.814 1238.98 315.88 1238.89 313.585C1238.8 311.29 1236.87 309.504 1234.59 309.595Z"
        fill="#C0F960" />
      <path
        d="M1234.59 309.595L1222.4 310.079C1220.11 310.17 1218.33 312.104 1218.42 314.399C1218.51 316.694 1220.44 318.481 1222.73 318.39L1234.91 317.905C1237.2 317.814 1238.98 315.88 1238.89 313.585C1238.8 311.29 1236.87 309.504 1234.59 309.595Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path opacity="0.83"
        d="M1354.66 261.282C1346.42 261.683 1338.19 262.094 1329.96 262.495C1311.99 240.278 1302.88 216.319 1298.37 195.576C1302.4 195.375 1306.49 195.215 1310.64 195.085C1314.06 194.975 1317.47 194.894 1320.84 194.844C1324.34 204.785 1328.65 215.216 1333.93 225.929C1340.4 239.056 1347.47 250.82 1354.66 261.282Z"
        fill="#EFF0EB" />
      <path opacity="0.83"
        d="M1309.72 263.496C1295.5 264.198 1281.28 264.899 1267.06 265.6C1261.88 255.439 1257.25 244.096 1253.65 231.55C1250.44 220.437 1248.46 209.775 1247.32 199.784C1257.94 198.541 1269.09 197.459 1280.74 196.627C1281.37 199.493 1282.09 202.399 1282.89 205.336C1289.09 228.123 1298.86 247.453 1309.72 263.496Z"
        fill="#EFF0EB" />
      <path
        d="M1215.17 304.212C1212.17 333.071 1211.32 356.69 1211.09 372.784C1210.64 404.49 1212.71 438.059 1216.87 503.906C1217.57 515.029 1218.18 524.128 1218.57 530C1246.07 529.669 1273.57 529.328 1301.06 528.998C1301.97 456.968 1302.87 384.939 1303.78 312.91C1292.35 307.138 1271.14 298.53 1244.03 299.532C1232.74 299.953 1222.98 301.937 1215.17 304.212Z"
        fill="#0E5B4C" />
      <path
        d="M1215.17 304.212C1212.17 333.071 1211.32 356.69 1211.09 372.784C1210.64 404.49 1212.71 438.059 1216.87 503.906C1217.57 515.029 1218.18 524.128 1218.57 530C1246.07 529.669 1273.57 529.328 1301.06 528.998C1301.97 456.968 1302.87 384.939 1303.78 312.91C1292.35 307.138 1271.14 298.53 1244.03 299.532C1232.74 299.953 1222.98 301.937 1215.17 304.212Z"
        stroke="#2D2226" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      <path
        d="M1288.31 137.005C1287.8 138.708 1286.79 141.023 1284.69 142.887C1283.19 144.21 1281.18 144.891 1277.15 146.254C1272.7 147.767 1270.58 148.037 1269.85 148.118C1267.17 148.418 1265.46 148.579 1263.8 147.556C1261.84 146.334 1261.15 144.169 1260.92 143.238C1260.89 143.258 1260.85 143.278 1260.82 143.298C1261.02 141.213 1261.22 139.139 1261.42 137.055C1261.57 135.512 1261.73 133.968 1261.88 132.415C1270.27 126.844 1278.65 121.282 1287.04 115.71C1286.98 120.3 1287.13 125.23 1287.59 130.461C1287.79 132.706 1288.03 134.89 1288.31 137.005Z"
        fill="#D88753" />
      <path
        d="M1287.04 115.71C1286.43 117.564 1280.74 133.988 1267.17 136.753C1265.6 137.084 1263.67 137.264 1261.42 137.054C1261.57 135.511 1261.73 133.967 1261.88 132.414C1270.27 126.843 1278.65 121.282 1287.04 115.71Z"
        fill="#AA5F2A" />
      <path
        d="M1284.68 142.888C1283.19 144.21 1281.18 144.892 1277.15 146.265C1272.7 147.778 1270.58 148.048 1269.85 148.128C1267.17 148.429 1265.46 148.589 1263.81 147.567C1261.84 146.345 1261.16 144.18 1260.93 143.248C1260.9 143.268 1260.86 143.288 1260.83 143.308C1261.17 139.671 1261.53 136.063 1261.89 132.426C1270.28 126.854 1278.66 121.293 1287.05 115.721C1286.99 120.311 1287.14 125.241 1287.6 130.472C1287.8 132.716 1288.04 134.901 1288.32 137.015C1287.81 138.719 1286.8 141.034 1284.69 142.898L1284.68 142.888Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1300.29 101.491C1300.35 104.166 1298.45 104.417 1295.76 109.938C1294.19 113.155 1294.11 114.558 1292.51 115.5C1291.68 115.991 1290.76 116.181 1289.87 116.181C1288.83 116.181 1287.83 115.951 1287.04 115.71C1286.91 116.031 1286.69 116.512 1286.4 117.083C1282.79 124.087 1276.14 127.304 1272.75 128.887C1267.29 131.443 1264.23 132.876 1260.01 132.284C1252.73 131.262 1248.38 125.099 1247 123.135C1244.35 119.398 1243.46 115.91 1242.75 113.014C1240.8 105.088 1242.23 100.488 1242.44 95.1474C1242.52 93.3236 1242.44 91.4196 1242.06 89.2652C1242.02 89.0046 1241.97 88.7441 1241.91 88.4836C1241.73 87.6518 1241.24 85.4773 1241.37 82.5813C1241.39 82.0502 1241.44 81.489 1241.51 80.8978C1241.59 80.2565 1241.7 79.6552 1241.82 79.1041C1242.37 79.064 1242.94 78.9638 1243.51 78.7935C1243.83 79.2244 1245.69 81.6995 1249.11 82.1404C1252.95 82.6414 1255.58 80.1964 1255.92 79.8657C1256.22 80.1863 1259.24 83.2828 1263.55 82.6214C1266.42 82.1805 1268.17 80.3367 1268.68 79.7454C1269.09 80.4769 1270.27 82.3408 1272.62 83.4631C1275.79 84.9763 1278.77 84.0343 1279.42 83.8139C1279.73 84.6957 1280.56 86.6197 1282.52 87.7721C1284.61 88.9946 1287.34 88.9746 1289.86 87.7921C1290.2 88.5637 1290.54 89.3353 1290.88 90.1069C1290.82 91.5299 1290.76 92.9428 1290.69 94.3658C1290.61 96.3699 1290.52 98.3841 1290.43 100.388C1291.05 97.9632 1292.76 96.2797 1294.57 95.7987C1294.82 95.7186 1295.08 95.6685 1295.34 95.6484C1295.61 95.6284 1295.87 95.6284 1296.14 95.6685C1296.31 95.6885 1296.48 95.7286 1296.65 95.7787C1298.96 96.4401 1300.24 99.3561 1300.29 101.491Z"
        fill="#D88753" />
      <path
        d="M1249.91 96.7002C1248.17 97.7424 1246.11 96.8205 1243.91 95.8285C1243.39 95.598 1242.9 95.3776 1242.44 95.1471C1242.52 93.3234 1242.44 91.4195 1242.06 89.2652C1242.68 88.8143 1243.38 88.4635 1244.08 88.2732C1247.28 87.3914 1251.5 89.5357 1251.88 92.5619C1252.08 94.0849 1251.3 95.8886 1249.91 96.7002Z"
        fill="#C1743D" />
      <path
        d="M1249.91 96.7009C1249.28 97.0316 1248.43 97.3522 1247.39 97.4424C1247.36 97.4424 1247.33 97.4524 1247.29 97.4524C1247.09 97.4625 1246.48 97.5126 1245.72 97.3923C1244.89 97.2621 1243.87 96.9514 1242.99 96.2099C1242.81 96.0596 1242.67 95.9193 1242.58 95.8292C1243.5 94.0255 1245.22 92.9834 1246.81 93.1938C1248.12 93.3742 1248.98 94.3461 1249.05 94.4263C1249.84 95.3582 1249.91 96.4003 1249.91 96.7009Z"
        fill="white" />
      <path
        d="M1262.72 96.6501C1262.59 95.9887 1262.43 94.7362 1262.97 93.3935C1264.03 90.7481 1266.87 89.9565 1267.4 89.8162C1271.48 88.6939 1276.22 91.4195 1277.65 95.137C1277.94 95.8985 1278.59 97.5619 1277.89 98.2633C1276.56 99.596 1272.23 95.4476 1265.98 95.9687C1264.56 96.0889 1263.43 96.4096 1262.71 96.6601L1262.72 96.6501Z"
        fill="#C1743D" />
      <path
        d="M1274.11 96.7913C1272.85 97.2823 1271.78 97.5528 1271.04 97.7132C1270.19 97.8935 1269.3 98.0839 1268.37 98.1641C1267.48 98.2543 1266.56 98.2442 1265.64 98.0438C1265.19 97.9536 1264.75 97.8134 1264.31 97.613C1263.58 97.2923 1263.04 96.9015 1262.72 96.651C1263.29 95.4886 1264 94.9075 1264.42 94.6269C1267.04 92.8934 1270.83 94.5067 1271.62 94.8373C1271.7 94.8774 1271.78 94.9075 1271.78 94.9075C1272.92 95.4385 1273.66 96.2001 1274.11 96.7913Z"
        fill="white" />
      <path
        d="M1289.86 87.7917C1290.2 88.5633 1290.54 89.3348 1290.88 90.1064C1290.82 91.5293 1290.76 92.9422 1290.69 94.365C1290.01 94.0644 1289.45 93.7438 1289.03 93.4933C1286.03 95.5875 1282.28 95.7679 1279.84 94.0945C1278.17 92.9522 1277.58 91.2587 1277.39 90.4872C1276.79 90.6174 1274.02 91.1385 1271.28 89.5753C1269.25 88.413 1268.35 86.7496 1268.04 86.0883C1267.54 86.5392 1265.81 87.942 1263.18 88.0522C1259.23 88.2126 1256.77 85.3267 1256.53 85.0361C1256.2 85.2866 1253.62 87.1103 1250.2 86.3388C1247.15 85.6574 1245.68 83.4028 1245.43 83.012C1243.96 83.2625 1242.53 83.1022 1241.37 82.5811C1241.39 82.0501 1241.44 81.4889 1241.51 80.8977C1241.59 80.2564 1241.7 79.6552 1241.82 79.1041C1242.37 79.064 1242.94 78.9638 1243.51 78.7935C1243.83 79.2243 1245.69 81.6994 1249.11 82.1402C1252.95 82.6413 1255.58 80.1963 1255.92 79.8656C1256.22 80.1863 1259.24 83.2826 1263.55 82.6212C1266.43 82.1803 1268.17 80.3366 1268.68 79.7454C1269.09 80.4769 1270.27 82.3407 1272.62 83.4629C1275.8 84.976 1278.77 84.0341 1279.42 83.8136C1279.73 84.6954 1280.56 86.6193 1282.52 87.7717C1284.61 88.9941 1287.34 88.9741 1289.86 87.7917Z"
        fill="#AA5F2A" />
      <path
        d="M1296.65 95.7786C1296.16 95.7487 1295.72 95.6988 1295.34 95.6489C1295.61 95.6289 1295.87 95.6289 1296.14 95.6688C1296.31 95.6888 1296.48 95.7287 1296.65 95.7786Z"
        fill="#AA5F2A" />
      <path
        d="M1300.29 101.491C1300.35 104.166 1298.45 104.417 1295.76 109.938C1294.18 113.154 1294.1 114.557 1292.51 115.499C1291.68 115.99 1290.76 116.181 1289.87 116.181C1290.53 114.738 1291.43 112.884 1292.54 110.77C1293.76 108.475 1293.93 108.305 1294.41 107.162C1295.26 105.108 1296.55 101.992 1295.77 98.655C1295.45 97.2822 1294.9 96.3904 1294.56 95.7992C1295.09 95.6388 1295.62 95.5988 1296.14 95.6689C1298.77 96.0196 1300.24 99.2061 1300.29 101.491Z"
        fill="#AA5F2A" />
      <path
        d="M1300.29 101.491C1300.35 104.166 1298.45 104.417 1295.76 109.938C1294.19 113.155 1294.11 114.558 1292.51 115.5C1290.71 116.572 1288.51 116.161 1287.04 115.71C1286.91 116.031 1286.69 116.512 1286.4 117.083C1282.79 124.087 1276.14 127.304 1272.75 128.887C1267.29 131.443 1264.23 132.876 1260.01 132.284C1252.73 131.262 1248.38 125.099 1247 123.135C1244.35 119.398 1243.46 115.91 1242.75 113.014C1240.06 102.062 1243.81 97.4722 1241.91 88.4836C1241.7 87.5015 1241.04 84.6155 1241.51 80.8978C1241.59 80.2565 1241.7 79.6552 1241.82 79.1041C1242.37 79.064 1242.94 78.9638 1243.51 78.7935C1243.83 79.2244 1245.69 81.6995 1249.11 82.1404C1252.95 82.6414 1255.58 80.1964 1255.92 79.8657C1256.22 80.1863 1259.24 83.2828 1263.55 82.6214C1266.42 82.1805 1268.17 80.3367 1268.68 79.7454C1269.09 80.4769 1270.27 82.3408 1272.62 83.4631C1275.79 84.9763 1278.77 84.0343 1279.42 83.8139C1279.73 84.6957 1280.56 86.6197 1282.52 87.7721C1284.61 88.9946 1287.34 88.9746 1289.86 87.7921C1290.2 88.5637 1290.54 89.3353 1290.88 90.1069C1290.73 93.534 1290.58 96.9611 1290.43 100.388C1291.23 97.2517 1293.87 95.3578 1296.14 95.6685C1298.77 96.0192 1300.24 99.2058 1300.29 101.491Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1290.88 90.1073C1290.86 93.0634 1290.7 97.3523 1290.07 102.493C1289.28 108.876 1288.88 112.073 1287.35 115.34C1284.4 121.693 1279.3 125.02 1275.35 127.605C1272.61 129.399 1266.73 133.137 1258.7 133.527C1255.85 133.668 1252.36 133.788 1249.84 131.523C1249.61 131.313 1249.42 131.122 1249.26 130.902C1248.38 129.709 1248.72 128.988 1247.92 127.735C1247.51 127.074 1247.33 127.154 1246.88 126.393C1246.4 125.571 1246.25 124.859 1246.19 124.619C1245.64 122.334 1243.67 120.791 1242.31 117.043C1242.12 116.532 1241.53 114.738 1241.33 112.323C1241.22 111.031 1241.26 109.938 1241.33 109.127C1241.83 109.938 1242.42 110.81 1243.13 111.712C1243.97 112.774 1244.81 113.686 1245.59 114.438C1245.69 113.857 1245.93 112.895 1246.64 111.963C1247.48 110.84 1248.53 110.359 1249 110.149C1252.16 108.756 1255.53 110.49 1260.77 110.149C1265.17 109.868 1266.79 108.666 1268.93 109.958C1270.26 110.76 1270.99 112.023 1271.4 113.005H1276.81C1278.42 111.852 1280.4 110.189 1282.3 107.894C1282.82 107.273 1283.34 106.591 1283.84 105.87C1288.76 98.7051 1289.08 91.2497 1289.02 88.1232C1289.21 88.053 1289.39 87.9729 1289.57 87.9027C1289.66 87.8626 1289.76 87.8326 1289.85 87.7925C1289.91 87.9228 1289.96 88.053 1290.02 88.1833C1290.3 88.8246 1290.59 89.466 1290.87 90.1073H1290.88Z"
        fill="#383A37" />
      <path
        d="M1290.88 90.1069C1290.86 93.063 1290.7 97.3519 1290.07 102.493C1289.28 108.876 1288.88 112.072 1287.35 115.339C1284.39 121.692 1279.3 125.019 1275.34 127.605C1272.61 129.398 1266.72 133.136 1258.7 133.527C1255.84 133.667 1252.36 133.787 1249.84 131.523C1248.95 130.721 1248.78 130.16 1247.92 127.735C1249.36 127.645 1251.52 127.785 1254.41 127.715C1258.95 127.605 1266.39 127.414 1273.01 123.827C1275.21 122.624 1278.56 120.74 1280.66 116.953C1282.13 114.317 1282.07 112.393 1282.31 107.894C1282.83 107.273 1283.34 106.591 1283.84 105.87C1288.77 98.7047 1289.09 91.2493 1289.03 88.1228C1289.22 88.0527 1289.4 87.9725 1289.58 87.9023C1289.74 87.9925 1289.89 88.0827 1290.03 88.1829C1290.31 88.8243 1290.6 89.4656 1290.88 90.1069Z"
        fill="#0B1107" />
      <path
        d="M1253.06 118.797C1254.36 120.089 1256.51 119.799 1257.5 119.659C1260.13 119.298 1261.93 117.875 1263.01 116.983C1264.87 115.46 1266.04 113.727 1266.77 112.344C1265.47 113.125 1263.62 114.037 1261.27 114.588C1257.12 115.57 1253.62 114.899 1251.77 114.398C1251.7 114.969 1251.66 116.001 1252.09 117.143C1252.23 117.504 1252.5 118.236 1253.06 118.787V118.797Z"
        fill="white" />
      <path
        d="M1242.06 86.6703C1243.87 85.8486 1245.54 85.9488 1248.7 86.8406C1251.18 87.532 1251.53 88.2835 1251.63 88.5541C1251.67 88.6543 1251.69 88.7545 1251.71 88.8647C1251.73 88.8447 1251.75 88.8347 1251.77 88.8146C1251.91 88.7144 1252.39 88.4238 1252.53 88.504C1252.66 88.5942 1252.44 89.0451 1252.13 89.506C1252.28 89.476 1252.43 89.4559 1252.58 89.486C1252.91 89.5561 1253.2 89.8267 1253.16 89.9369C1253.12 90.0571 1252.72 89.9168 1252.09 90.0171C1251.93 90.0371 1251.79 90.0772 1251.66 90.1173C1251.54 90.2475 1251.36 90.4179 1251.09 90.498C1250.45 90.6884 1249.78 90.2175 1249.58 90.0872C1247.77 88.8848 1244.1 88.8246 1243.27 88.8146C1240.9 88.7846 1239.67 89.486 1239.47 89.0751C1239.26 88.6342 1240.56 87.3516 1242.06 86.6703Z"
        fill="#383A37" />
      <path
        d="M1262.44 89.7266C1262.9 87.8929 1267.51 87.6524 1268.49 87.6023C1274.64 87.2816 1281.02 89.937 1280.84 91.42C1280.82 91.5904 1280.71 91.7106 1280.62 91.8108C1279.66 92.8429 1277.49 91.4701 1274.28 90.929C1272.49 90.6284 1267.94 89.8569 1265.2 91.5302C1264.9 91.7106 1264.21 92.1716 1263.56 91.9511C1262.79 91.6806 1262.25 90.5282 1262.44 89.7366V89.7266Z"
        fill="#383A37" />
      <path
        d="M1242.06 86.6703C1243.87 85.8486 1245.54 85.9488 1248.7 86.8406C1251.18 87.532 1251.53 88.2835 1251.63 88.5541C1251.67 88.6543 1251.69 88.7545 1251.71 88.8647C1251.73 88.8447 1251.75 88.8347 1251.77 88.8146C1251.91 88.7144 1252.39 88.4238 1252.53 88.504C1252.66 88.5942 1252.44 89.0451 1252.13 89.506C1252.28 89.476 1252.43 89.4559 1252.58 89.486C1252.91 89.5561 1253.2 89.8267 1253.16 89.9369C1253.12 90.0571 1252.72 89.9168 1252.09 90.0171C1251.93 90.0371 1251.79 90.0772 1251.66 90.1173C1251.54 90.2475 1251.36 90.4179 1251.09 90.498C1250.45 90.6884 1249.78 90.2175 1249.58 90.0872C1247.77 88.8848 1244.1 88.8246 1243.27 88.8146C1240.9 88.7846 1239.67 89.486 1239.47 89.0751C1239.26 88.6342 1240.56 87.3516 1242.06 86.6703Z"
        stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1262.44 89.7266C1262.9 87.8929 1267.51 87.6524 1268.49 87.6023C1274.64 87.2816 1281.02 89.937 1280.84 91.42C1280.82 91.5904 1280.71 91.7106 1280.62 91.8108C1279.66 92.8429 1277.49 91.4701 1274.28 90.929C1272.49 90.6284 1267.94 89.8569 1265.2 91.5302C1264.9 91.7106 1264.21 92.1716 1263.56 91.9511C1262.79 91.6806 1262.25 90.5282 1262.44 89.7366V89.7266Z"
        stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1269.1 96.3004C1269.1 97.0419 1268.82 97.7133 1268.37 98.1642C1267.48 98.2544 1266.57 98.2444 1265.65 98.044C1265.26 97.6031 1265.03 96.9818 1265.03 96.3004C1265.03 94.9477 1265.94 93.8555 1267.07 93.8555C1268.19 93.8555 1269.1 94.9477 1269.1 96.3004Z"
        fill="#231F20" />
      <path
        d="M1248.37 95.5381C1248.37 96.3698 1247.98 97.0913 1247.4 97.442C1247.36 97.442 1247.33 97.452 1247.29 97.452C1247.09 97.462 1246.48 97.5121 1245.72 97.3919C1245.18 97.0312 1244.82 96.3398 1244.82 95.5381C1244.82 94.3557 1245.61 93.4038 1246.6 93.4038C1247.59 93.4038 1248.37 94.3557 1248.37 95.5381Z"
        fill="#231F20" />
      <path
        d="M1249.77 96.7013C1249.57 95.1181 1248.47 93.5449 1246.78 93.6851C1245.11 93.7152 1243.78 94.9677 1242.36 95.7493C1242.18 95.8696 1241.95 95.6291 1242.09 95.4587C1243.68 93.2843 1247.32 91.2903 1249.37 94.0058C1249.95 94.8074 1250.15 95.7894 1250.05 96.6912C1250.03 96.8616 1249.79 96.8616 1249.77 96.6912V96.7013Z"
        fill="#231F20" />
      <path
        d="M1307.02 80.4167C1306.97 81.1082 1306.63 84.7858 1303.16 87.0906C1300.47 88.8743 1297.42 88.8242 1295.77 88.7941C1292.83 88.744 1290.59 87.9223 1289.38 87.3912C1286.61 89.5858 1282.9 90.0968 1280.31 88.7941C1279.61 88.4434 1279.07 88.0025 1278.66 87.5515C1278.01 86.8501 1277.66 86.1286 1277.5 85.7177C1276.92 85.8881 1274.22 86.6196 1271.33 85.4371C1269.2 84.5653 1268.14 83.1123 1267.77 82.5411C1267.31 83.0021 1265.73 84.4451 1263.12 84.7858C1259.21 85.2969 1256.47 82.8818 1256.21 82.6413C1255.9 82.8919 1253.51 84.7958 1250.04 84.415C1246.94 84.0643 1245.25 82.1403 1244.96 81.7996C1242.48 82.4309 1239.99 81.9098 1238.7 80.4969C1237.96 79.6952 1237.77 78.7934 1237.72 78.2322C1237.58 78.1621 1234.35 76.6489 1234.25 73.7329C1234.19 72.1095 1235.13 70.9371 1235.49 70.5262C1235.31 70.2657 1233.58 67.6102 1234.99 64.9647C1236.31 62.4896 1239.82 61.0566 1243.42 61.758C1243.6 60.4153 1244.13 58.0804 1246.03 55.8458C1250.67 50.3243 1259.05 50.665 1259.86 50.7051C1266.08 51.0458 1270.06 54.3427 1271.13 55.2846C1271.59 54.8938 1277.52 49.9536 1285.78 51.3966C1285.84 51.3966 1285.9 51.4166 1285.95 51.4266C1293.01 52.7393 1296.28 57.7698 1296.72 58.4812C1297.09 58.4311 1301.79 57.88 1304.94 60.9063C1307.18 63.0507 1307.2 65.6261 1307.18 66.2574C1307.63 66.4979 1311.32 68.6123 1311.71 72.5805C1312.01 75.6869 1310.19 78.7132 1307.02 80.4167Z"
        fill="#383A37" />
      <path
        d="M1307.02 80.4174C1306.97 81.1088 1306.63 84.7864 1303.15 87.0912C1300.47 88.8749 1297.42 88.8248 1295.76 88.7947C1292.83 88.7446 1290.59 87.9229 1289.38 87.3918C1286.6 89.5864 1282.9 90.0974 1280.31 88.7947C1279.61 88.444 1279.07 88.0031 1278.66 87.5522C1281.19 87.8929 1285.23 87.9129 1289.16 85.6182C1291.37 84.3255 1292.84 82.7021 1293.75 81.4695C1297.35 81.3593 1300.23 79.1648 1300.83 76.399C1301.29 74.2846 1300.27 72.4709 1299.91 71.8797C1300 71.5289 1300.55 69.144 1298.99 66.9094C1297.43 64.6747 1295 64.3741 1294.64 64.334C1294.75 63.4522 1294.74 62.6405 1294.64 61.899C1294.02 57.0489 1289.77 53.5917 1285.94 51.4272C1293.01 52.74 1296.27 57.7704 1296.72 58.4819C1297.09 58.4318 1301.79 57.8806 1304.93 60.9069C1307.18 63.0514 1307.2 65.6267 1307.18 66.258C1307.63 66.4985 1311.32 68.6129 1311.71 72.5811C1312 75.6876 1310.19 78.7138 1307.02 80.4174Z"
        fill="#0B1107" />
      <path
        d="M1243.42 61.7588C1239.82 61.0573 1236.31 62.4903 1234.99 64.9654C1233.58 67.6109 1235.31 70.2564 1235.49 70.5269C1235.13 70.9378 1234.19 72.1102 1234.25 73.7336C1234.36 76.6496 1237.59 78.1628 1237.72 78.2229C1237.77 78.7841 1237.96 79.6859 1238.69 80.4876C1239.99 81.9105 1242.47 82.4216 1244.96 81.7903C1245.25 82.131 1246.94 84.055 1250.04 84.4057C1253.52 84.7965 1255.9 82.8826 1256.21 82.632C1256.48 82.8725 1259.22 85.2875 1263.13 84.7765C1265.74 84.4358 1267.32 82.9928 1267.78 82.5419C1268.14 83.113 1269.21 84.556 1271.34 85.4278C1274.22 86.6103 1276.92 85.8788 1277.51 85.7084C1277.78 86.3898 1278.54 87.893 1280.31 88.7848C1282.9 90.0875 1286.61 89.5764 1289.39 87.3819C1290.59 87.913 1292.84 88.7347 1295.77 88.7848C1297.42 88.8149 1300.47 88.865 1303.17 87.0813C1306.64 84.7765 1306.98 81.0989 1307.03 80.4174C1310.2 78.7139 1312.02 75.6776 1311.72 72.5812C1311.33 68.6029 1307.63 66.4986 1307.19 66.2581C1307.21 65.6268 1307.19 63.0514 1304.95 60.907C1301.79 57.8907 1297.1 58.4419 1296.73 58.492C1296.29 57.7705 1292.97 52.6699 1285.79 51.4073C1277.53 49.9543 1271.59 54.9045 1271.14 55.2954C1270.07 54.3434 1266.09 51.0465 1259.87 50.7159C1259.06 50.6758 1250.68 50.3351 1246.03 55.8565C1244.14 58.1012 1243.6 60.426 1243.43 61.7688L1243.42 61.7588Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1299.96 87.7724C1299.44 89.3356 1298.94 90.9589 1298.45 92.6423C1298.11 93.8247 1297.79 94.9971 1297.5 96.1394C1297.09 95.8989 1296.64 95.7285 1296.14 95.6684C1293.87 95.3578 1291.23 97.2516 1290.43 100.388C1290.58 96.961 1290.73 93.5341 1290.88 90.1071C1290.54 89.3356 1290.2 88.564 1289.86 87.7924C1290.8 87.3415 1291.71 86.7303 1292.55 85.9688C1293.87 86.6501 1296.34 87.7023 1299.58 87.7724H1299.96Z"
        fill="#0B1107" />
      <path
        d="M1299.96 87.7727C1299.44 89.3358 1298.94 90.9591 1298.45 92.6425C1298.11 93.8249 1297.79 94.9973 1297.5 96.1396C1297.09 95.8991 1296.64 95.7288 1296.14 95.6687C1293.86 95.358 1291.23 97.2519 1290.43 100.388C1290.58 96.9613 1290.73 93.5343 1290.88 90.1074C1290.38 89.2056 1289.88 88.3037 1289.38 87.3919C1289.74 87.4019 1290.46 87.3718 1291.24 86.9911C1291.9 86.6704 1292.32 86.2295 1292.55 85.959C1293.31 86.3598 1294.24 86.7606 1295.34 87.0913C1297.15 87.6324 1298.75 87.7626 1299.96 87.7626V87.7727Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1262.55 96.5207C1265.31 91.5306 1271.3 93.0637 1274.44 96.7813C1274.58 96.9516 1274.35 97.1921 1274.18 97.0418C1270.64 94.176 1266.32 92.8934 1262.89 96.7612C1262.73 96.9416 1262.43 96.7211 1262.55 96.5107V96.5207Z"
        fill="#231F20" />
      <path
        d="M1251.78 114.397C1252.24 114.027 1252.95 113.586 1253.87 113.465C1254.91 113.335 1255.28 113.726 1256.47 113.696C1257.73 113.656 1257.82 113.185 1259.07 113.025C1260.63 112.824 1260.99 113.495 1262.56 113.566C1264.97 113.666 1266.74 112.263 1266.77 112.333C1266.8 112.403 1265.12 113.546 1262.56 114.347C1260.12 115.109 1258.05 115.189 1256.96 115.179C1254.86 115.159 1253.09 114.778 1251.78 114.387V114.397Z"
        fill="#CD8350" />
      <path
        d="M1251.78 114.398C1252.18 116.953 1253.26 117.865 1253.76 118.206C1256.45 119.989 1261.97 117.995 1266.77 112.344C1266.31 113.646 1265.38 115.761 1263.47 117.725C1262.87 118.336 1258.01 123.316 1254.48 121.472C1252.48 120.43 1251.54 117.514 1251.78 114.398Z"
        fill="#CD8350" />
      <path
        d="M1295.86 146.374C1291.11 196.719 1286.36 247.063 1281.61 297.407C1266.53 295.433 1251.46 293.469 1236.38 291.495C1238.57 269.88 1240.76 248.265 1242.96 226.641C1245.53 201.218 1248.1 175.795 1250.68 150.372C1251.01 150.242 1251.4 150.082 1251.82 149.901C1252.46 149.611 1253.19 149.26 1253.97 148.819C1255.77 147.787 1256.68 147.276 1257.32 146.494C1258.43 145.132 1258.52 143.829 1259.75 143.398C1260.18 143.248 1260.58 143.268 1260.82 143.298C1260.86 143.288 1260.89 143.278 1260.93 143.278C1261.17 144.23 1261.87 146.354 1263.8 147.557C1265.45 148.579 1267.17 148.418 1269.85 148.118C1270.58 148.038 1272.7 147.767 1277.15 146.254C1281.18 144.891 1283.19 144.21 1284.68 142.887C1286.79 141.023 1287.8 138.708 1288.31 137.005C1288.88 136.894 1289.65 136.844 1290.15 137.285C1290.92 137.967 1290.28 139.109 1290.88 140.652C1291.23 141.564 1291.68 141.735 1293.17 143.268C1293.85 143.969 1294.8 145.011 1295.86 146.374Z"
        fill="#009F03" />
      <path
        d="M1250.77 198.462C1249.88 206.538 1248.71 216.669 1247.23 228.414C1246.1 228.053 1244.61 227.502 1242.96 226.64C1245.53 201.217 1248.11 175.795 1250.68 150.372C1251.01 150.242 1251.4 150.081 1251.82 149.901C1252.36 154.2 1252.88 159.922 1253.01 166.646C1253.16 174.241 1252.74 180.574 1250.77 198.462Z"
        fill="#046004" />
      <path
        d="M1295.86 146.374C1291.11 196.719 1286.36 247.063 1281.61 297.407C1266.53 295.433 1251.46 293.469 1236.38 291.495C1241.15 244.458 1245.91 197.42 1250.68 150.372C1251.52 150.042 1252.67 149.551 1253.97 148.819C1255.77 147.787 1256.68 147.276 1257.32 146.494C1258.43 145.132 1258.52 143.829 1259.75 143.398C1260.18 143.248 1260.58 143.268 1260.82 143.298C1260.86 143.288 1260.89 143.278 1260.93 143.278C1261.17 144.23 1261.87 146.354 1263.8 147.557C1265.45 148.579 1267.17 148.418 1269.85 148.118C1270.58 148.038 1272.7 147.767 1277.15 146.254C1281.18 144.891 1283.19 144.21 1284.68 142.887C1286.79 141.023 1287.8 138.708 1288.31 137.005C1288.88 136.894 1289.65 136.844 1290.15 137.285C1290.92 137.967 1290.28 139.109 1290.88 140.652C1291.23 141.564 1291.68 141.735 1293.17 143.268C1293.85 143.969 1294.8 145.011 1295.86 146.374Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1258.29 148.369C1258.89 149.711 1260.17 152.036 1262.69 153.449C1265.36 154.952 1267.96 154.611 1272.35 154.02C1275.92 153.539 1279.35 153.088 1283.15 150.764C1286.45 148.749 1288.51 146.254 1289.66 144.621"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1260.46 147.266C1260.39 147.376 1260.32 147.476 1260.25 147.586" stroke="#2D2226" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1263.92 149.891C1263.74 150.402 1263.57 150.913 1263.39 151.434" stroke="#2D2226" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1270.17 150.263V152.106" stroke="#2D2226" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M1276.31 148.929C1276.53 149.52 1276.74 150.122 1276.96 150.713" stroke="#2D2226" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1282.32 146.845C1282.56 147.286 1282.8 147.727 1283.05 148.167" stroke="#2D2226" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1286.83 143.849C1286.95 144.039 1287.06 144.22 1287.18 144.41" stroke="#2D2226" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1321.67 305.865C1321.76 309.863 1321.79 313.851 1321.79 313.851C1321.81 316.176 1321.81 318.15 1321.8 319.663C1309.64 322.459 1294.73 324.714 1277.7 324.804C1269.24 324.844 1261.4 324.353 1254.27 323.551C1257 298.54 1261.22 271.574 1267.51 243.085C1271.02 227.232 1275.17 210.918 1280.06 194.213C1284.99 177.408 1290.31 161.465 1295.86 146.374C1300.87 147.096 1304.96 147.246 1307.78 147.246C1313.45 147.246 1316.48 146.655 1321.43 147.546C1324.73 148.148 1327.34 149.13 1329.02 149.861C1320.87 214.656 1319.52 243.876 1320.16 258.086C1321.07 278.378 1321.27 287.537 1321.67 305.865Z"
        stroke="#231F20" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1324.44 188.932C1320.36 227.222 1319.67 247.123 1320.16 258.086C1321.07 278.378 1321.27 287.537 1321.67 305.865C1321.67 306.506 1321.7 307.157 1321.71 307.789C1321.77 311.046 1321.79 313.851 1321.79 313.851C1321.8 316.176 1321.8 318.14 1321.8 319.663C1309.64 322.459 1294.73 324.714 1277.7 324.804C1269.24 324.844 1261.4 324.353 1254.27 323.551C1257 298.54 1261.22 271.574 1267.51 243.085C1271.02 227.232 1275.17 210.918 1280.06 194.213C1284.99 177.408 1290.31 161.465 1295.86 146.374C1300.87 147.096 1304.96 147.246 1307.78 147.246C1313.45 147.246 1316.48 146.655 1321.43 147.546C1324.73 148.148 1327.34 149.13 1329.02 149.861C1327.16 164.662 1325.65 177.599 1324.44 188.932Z"
        fill="#E5E4D5" />
      <path
        d="M1321.67 305.866C1321.67 306.507 1321.7 307.158 1321.71 307.79C1313.4 312.129 1300.36 312.66 1288.85 312.129C1292.05 309.022 1296.52 303.922 1299.71 296.616C1305.16 284.161 1304.26 271.314 1303.71 264.56C1302.67 251.713 1299.22 244.899 1303.49 236.061C1304.83 233.265 1305.78 232.714 1306.81 229.607C1309.24 222.322 1306.24 217.222 1305.26 208.684C1304.8 204.706 1304.65 199.044 1306.13 192.009C1313.36 185.446 1317.78 184.784 1320.58 185.757C1322.11 186.288 1323.38 187.38 1324.44 188.933C1320.36 227.223 1319.67 247.124 1320.16 258.087C1321.07 278.379 1321.27 287.538 1321.67 305.866Z"
        fill="#CBC9B9" />
      <path
        d="M1321.67 305.865C1321.76 309.863 1321.79 313.851 1321.79 313.851C1321.81 316.176 1321.81 318.15 1321.8 319.663C1309.64 322.459 1294.73 324.714 1277.7 324.804C1269.24 324.844 1261.4 324.353 1254.27 323.551C1257 298.54 1261.22 271.574 1267.51 243.085C1271.02 227.232 1275.17 210.918 1280.06 194.213C1284.99 177.408 1290.31 161.465 1295.86 146.374C1300.87 147.096 1304.96 147.246 1307.78 147.246C1313.45 147.246 1316.48 146.655 1321.43 147.546C1324.73 148.148 1327.34 149.13 1329.02 149.861C1320.87 214.656 1319.52 243.876 1320.16 258.086C1321.07 278.378 1321.27 287.537 1321.67 305.865Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1149.43 273.889C1147.17 274.911 1144.9 275.933 1142.64 276.955C1144.06 280.783 1145.61 284.721 1147.31 288.749C1148.44 291.415 1149.58 294.01 1150.73 296.526C1152.83 296.055 1154.94 295.584 1157.05 295.113C1157.6 294.181 1160.14 289.671 1158.73 284.07C1156.9 276.795 1150.05 274.119 1149.42 273.889H1149.43Z"
        fill="#009F03" />
      <path
        d="M1149.43 273.889C1147.17 274.911 1144.9 275.933 1142.64 276.955C1144.06 280.783 1145.61 284.721 1147.31 288.749C1148.44 291.415 1149.58 294.01 1150.73 296.526C1152.83 296.055 1154.94 295.584 1157.05 295.113C1157.6 294.181 1160.14 289.671 1158.73 284.07C1156.9 276.795 1150.05 274.119 1149.42 273.889H1149.43Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1239.23 154.852C1238.05 155.533 1236.19 156.626 1233.92 158.009C1230.59 160.033 1228.17 161.576 1228.1 161.626C1220.64 166.426 1211.92 205.798 1207.26 221.61C1205.18 228.665 1201.57 238.916 1195.12 250.841C1182.12 255.33 1168.48 261.223 1154.63 268.969C1152.49 270.161 1150.41 271.374 1148.37 272.596C1150.57 275.152 1154.01 279.851 1155.84 286.615C1156.98 290.824 1157.15 294.532 1157.05 297.257C1162.64 297.317 1168.89 297.007 1175.61 296.045C1193.03 293.57 1206.99 287.748 1216.83 282.507C1223.54 266.484 1230.68 245.45 1235.15 220.137C1239.64 194.645 1240.11 172.288 1239.25 154.852H1239.23Z"
        fill="#E5E4D5" />
      <path
        d="M1239.23 154.852C1238.05 155.533 1236.19 156.626 1233.92 158.009C1230.59 160.033 1228.17 161.576 1228.1 161.626C1220.64 166.426 1211.92 205.798 1207.26 221.61C1205.18 228.665 1201.57 238.916 1195.12 250.841C1182.12 255.33 1168.48 261.223 1154.63 268.969C1152.49 270.161 1150.41 271.374 1148.37 272.596C1150.57 275.152 1154.01 279.851 1155.84 286.615C1156.98 290.824 1157.15 294.532 1157.05 297.257C1162.64 297.317 1168.89 297.007 1175.61 296.045C1193.03 293.57 1206.99 287.748 1216.83 282.507C1223.54 266.484 1230.68 245.45 1235.15 220.137C1239.64 194.645 1240.11 172.288 1239.25 154.852H1239.23Z"
        fill="#E5E4D5" />
      <path
        d="M1239.23 154.852C1238.05 155.533 1236.19 156.626 1233.92 158.009C1230.59 160.033 1228.17 161.576 1228.1 161.626C1220.64 166.426 1211.92 205.798 1207.26 221.61C1205.18 228.665 1201.57 238.916 1195.12 250.841C1182.12 255.33 1168.48 261.223 1154.63 268.969C1152.49 270.161 1150.41 271.374 1148.37 272.596C1150.57 275.152 1154.01 279.851 1155.84 286.615C1156.98 290.824 1157.15 294.532 1157.05 297.257C1162.64 297.317 1168.89 297.007 1175.61 296.045C1193.03 293.57 1206.99 287.748 1216.83 282.507C1223.54 266.484 1230.68 245.45 1235.15 220.137C1239.64 194.645 1240.11 172.288 1239.25 154.852H1239.23Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1250.68 150.373C1246.68 152.117 1242.68 153.85 1238.68 155.594C1235.06 168.35 1230.7 187.38 1229.2 211.229C1228.48 222.613 1229.19 222.753 1228.2 230.559C1225.37 252.856 1218.32 261.744 1211.33 288.54C1210.07 293.42 1208.17 301.286 1206.52 311.287C1210.05 313.541 1215.03 316.207 1221.37 318.131C1226.44 319.664 1230.99 320.305 1234.62 320.546C1239.97 263.818 1245.33 207.101 1250.68 150.373Z"
        fill="#E5E4D5" />
      <path
        d="M1230.05 201.047C1229.72 204.344 1229.43 207.731 1229.2 211.219C1228.47 222.482 1229.2 222.622 1228.2 230.549C1225.37 252.845 1218.32 261.733 1211.33 288.529C1210.07 293.409 1208.17 301.275 1206.52 311.276C1210.05 313.531 1215.03 316.196 1221.37 318.12C1226.44 319.653 1230.99 320.295 1234.62 320.535C1239.97 263.808 1245.33 207.09 1250.68 150.362C1249.14 150.763 1247.5 151.264 1245.77 151.906C1243.07 152.908 1240.71 154.03 1238.72 155.142"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1289.82 261.933C1288.32 263.346 1286.81 264.769 1285.32 266.182L1297.11 284.44L1304.51 282.365C1304.61 280.812 1304.83 274.73 1300.54 269.078C1296.63 263.937 1291.43 262.364 1289.82 261.943V261.933Z"
        fill="#009F03" />
      <path
        d="M1289.82 261.933C1288.32 263.346 1286.81 264.769 1285.32 266.182L1297.11 284.44L1304.51 282.365C1304.61 280.812 1304.83 274.73 1300.54 269.078C1296.63 263.937 1291.43 262.364 1289.82 261.943V261.933Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1280.16 301.495C1264.71 303.379 1249.24 305.283 1233.79 307.167C1232.43 307.337 1231.07 307.498 1229.71 307.668C1228.34 307.838 1227.04 306.987 1226.65 305.654C1218.91 279.409 1211.17 253.175 1203.44 226.941C1202.95 225.287 1204.03 223.584 1205.73 223.323L1252.34 216.018L1256.51 215.367C1257.92 215.146 1259.28 216.018 1259.67 217.401C1267.3 244.226 1274.93 271.052 1282.55 297.878C1283.03 299.561 1281.9 301.275 1280.16 301.495Z"
        fill="#C0F960" />
      <path
        d="M1280.16 301.495C1264.7 303.379 1249.24 305.283 1233.79 307.167C1242.46 303.87 1246.97 299.2 1249.11 296.575C1257.65 286.083 1257.14 272.836 1255.79 247.203C1255.13 234.747 1253.72 224.125 1252.34 216.018L1256.5 215.367C1257.91 215.146 1259.28 216.018 1259.67 217.401C1267.29 244.226 1274.92 271.052 1282.55 297.878C1283.03 299.561 1281.9 301.275 1280.16 301.495Z"
        fill="#A3D83A" />
      <path
        d="M1259.67 217.401C1267.3 244.226 1274.93 271.052 1282.55 297.878C1283.03 299.561 1281.89 301.275 1280.16 301.485C1263.35 303.549 1246.53 305.604 1229.71 307.668C1228.34 307.838 1227.04 306.987 1226.65 305.644C1218.92 279.409 1211.18 253.175 1203.44 226.941C1202.95 225.287 1204.03 223.584 1205.73 223.313L1256.51 215.367C1257.93 215.146 1259.28 216.018 1259.67 217.401Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1270.64 266.243C1270.17 266.172 1263.86 266.273 1251.25 266.463C1247.42 266.523 1242.89 266.633 1242.21 268.617C1242.06 269.068 1242.15 269.469 1242.17 269.579C1242.94 272.796 1252.8 272.606 1252.82 272.596C1252.85 272.596 1252.49 272.616 1252.18 272.626C1249.75 272.726 1248.89 273.718 1248.89 273.718C1248.19 274.51 1247.94 275.963 1248.52 276.905C1249.31 278.207 1251.52 278.257 1254.19 278.328C1255.72 278.368 1256.76 278.388 1256.59 278.388C1256.02 278.408 1250.89 278.658 1250.33 280.692C1249.89 281.574 1250.83 282.877 1251.02 283.148C1253.22 286.204 1266.68 284.44 1266.93 284.43C1268.61 284.39 1270.02 284.18 1270.02 284.15C1270.02 284.1 1267.2 284.571 1262.86 284.751C1258.28 284.951 1256.17 284.681 1255.01 286.154C1254.92 286.274 1254.22 287.176 1254.46 288.128C1254.68 289.04 1255.65 289.521 1256.2 289.791C1257.34 290.363 1258.41 290.383 1258.65 290.383C1270.59 290.473 1281.48 287.527 1281.48 287.527C1284.83 286.625 1286.39 286.044 1287.11 285.773C1288.82 285.122 1289.86 284.571 1292.68 283.498C1293.39 283.228 1295.07 282.586 1295.77 282.326L1285.32 266.172C1284.66 266.303 1283.64 266.493 1282.39 266.643C1277.08 267.285 1273.19 266.583 1270.65 266.233L1270.64 266.243Z"
        fill="#D88753" />
      <path
        d="M1270.64 266.243C1270.17 266.172 1263.86 266.273 1251.25 266.463C1247.42 266.523 1242.89 266.633 1242.21 268.617C1242.06 269.068 1242.15 269.469 1242.17 269.579C1242.94 272.796 1252.8 272.606 1252.82 272.596C1252.85 272.596 1252.49 272.616 1252.18 272.626C1249.75 272.726 1248.89 273.718 1248.89 273.718C1248.19 274.51 1247.94 275.963 1248.52 276.905C1249.31 278.207 1251.52 278.257 1254.19 278.328C1255.72 278.368 1256.76 278.388 1256.59 278.388C1256.02 278.408 1250.89 278.658 1250.33 280.692C1249.89 281.574 1250.83 282.877 1251.02 283.148C1253.22 286.204 1266.68 284.44 1266.93 284.43C1268.61 284.39 1270.02 284.18 1270.02 284.15C1270.02 284.1 1267.2 284.571 1262.86 284.751C1258.28 284.951 1256.17 284.681 1255.01 286.154C1254.92 286.274 1254.22 287.176 1254.46 288.128C1254.68 289.04 1255.65 289.521 1256.2 289.791C1257.34 290.363 1258.41 290.383 1258.65 290.383C1270.59 290.473 1281.48 287.527 1281.48 287.527C1284.83 286.625 1286.39 286.044 1287.11 285.773C1288.82 285.122 1289.86 284.571 1292.68 283.498C1293.39 283.228 1295.07 282.586 1295.77 282.326L1285.32 266.172C1284.66 266.303 1283.64 266.493 1282.39 266.643C1277.08 267.285 1273.19 266.583 1270.65 266.233L1270.64 266.243Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1252.82 272.595C1257.13 272.525 1261.46 272.456 1265.77 272.386" stroke="#2D2226" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1256.58 278.388L1267.26 277.696" stroke="#2D2226" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M1142.65 276.965C1137.69 278.077 1134.73 277.145 1132.98 276.133C1129.49 274.119 1128.3 270.431 1125.3 270.612C1124.91 270.632 1123.17 270.812 1122.38 272.075C1121.96 272.746 1121.98 273.458 1121.99 273.778C1122.08 276.865 1126.79 280.502 1127.31 280.893C1122.95 280.953 1119.43 280.502 1116.97 280.061C1112.55 279.26 1099.72 276.344 1096.29 277.466C1095.9 277.596 1094.91 277.927 1094.36 278.859C1093.95 279.55 1093.96 280.282 1094 280.693C1093.77 280.643 1092.19 280.292 1090.83 281.324C1089.61 282.256 1089.27 283.769 1089.42 284.851C1089.7 286.805 1091.74 288.479 1094.39 288.549C1094.12 288.87 1093.57 289.631 1093.51 290.714C1093.51 290.714 1093.46 291.565 1093.85 292.467C1094.52 294.01 1097.84 295.363 1102.35 295.664C1102.1 295.994 1101.71 296.606 1101.72 297.387C1101.72 297.387 1101.72 297.818 1101.89 298.249C1103.17 301.536 1120.58 301.225 1120.58 301.225C1128.54 301.085 1133.72 300.965 1140.87 299.392C1144.93 298.5 1148.29 297.427 1150.75 296.536C1148.05 290.012 1145.35 283.489 1142.66 276.965H1142.65Z"
        fill="#D88753" />
      <path
        d="M1142.65 276.965C1137.69 278.077 1134.73 277.145 1132.98 276.133C1129.49 274.119 1128.3 270.431 1125.3 270.612C1124.91 270.632 1123.17 270.812 1122.38 272.075C1121.96 272.746 1121.98 273.458 1121.99 273.778C1122.08 276.865 1126.79 280.502 1127.31 280.893C1122.95 280.953 1119.43 280.502 1116.97 280.061C1112.55 279.26 1099.72 276.344 1096.29 277.466C1095.9 277.596 1094.91 277.927 1094.36 278.859C1093.95 279.55 1093.96 280.282 1094 280.693C1093.77 280.643 1092.19 280.292 1090.83 281.324C1089.61 282.256 1089.27 283.769 1089.42 284.851C1089.7 286.805 1091.74 288.479 1094.39 288.549C1094.12 288.87 1093.57 289.631 1093.51 290.714C1093.51 290.714 1093.46 291.565 1093.85 292.467C1094.52 294.01 1097.84 295.363 1102.35 295.664C1102.1 295.994 1101.71 296.606 1101.72 297.387C1101.72 297.387 1101.72 297.818 1101.89 298.249C1103.17 301.536 1120.58 301.225 1120.58 301.225C1128.54 301.085 1133.72 300.965 1140.87 299.392C1144.93 298.5 1148.29 297.427 1150.75 296.536C1148.05 290.012 1145.35 283.489 1142.66 276.965H1142.65Z"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1093.99 280.693C1095.34 280.973 1096.71 281.254 1098.08 281.525C1104.12 282.687 1109.98 283.599 1115.68 284.29"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1093.75 289.611C1093.8 289.471 1093.89 289.26 1094.05 289.02C1095.67 286.645 1100.87 287.988 1108.75 288.909C1110.79 289.15 1113.72 289.441 1117.29 289.621"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1101.93 296.345C1102 296.185 1102.13 295.925 1102.34 295.654C1103.9 293.73 1107.54 294.542 1112.14 295.143C1114.24 295.423 1117.37 295.754 1121.28 295.904"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1370.33 256.071C1369.01 258.537 1366.36 262.124 1349.3 269.429C1338.25 274.169 1322.81 279.761 1303.35 283.729C1302.81 281.564 1301.99 279.109 1300.73 276.534C1296.94 268.838 1291.24 264.248 1287.73 261.904C1290.82 259.499 1294.12 257.084 1297.65 254.699C1306.85 248.486 1315.78 243.686 1323.96 239.958C1318.8 232.543 1318.32 229.807 1319.17 228.845C1319.55 228.424 1320.11 228.424 1320.54 227.803C1321.68 226.119 1319.79 222.973 1319.33 222.181C1317.21 218.504 1312.77 208.232 1306.13 192.009C1307.08 187.459 1308.65 181.196 1311.31 173.981C1314.81 164.441 1320.42 149.23 1327.15 149.41C1330.14 149.5 1332.52 152.597 1334.09 154.651C1335.34 156.285 1336.24 157.978 1336.87 159.581C1338.18 162.878 1338.39 165.724 1338.47 166.606C1338.66 168.74 1339.13 170.775 1339.85 172.829C1342.65 180.966 1349.26 189.483 1357.48 206.679C1369.52 231.851 1376.01 245.409 1370.33 256.071Z"
        fill="#E5E4D5" />
      <path
        d="M1339.85 172.829C1337.92 174.672 1335.77 177.137 1333.94 180.334C1328.32 190.144 1329.55 200.065 1328.54 200.075C1327.67 200.075 1325.76 192.61 1326.63 184.002C1327.71 173.249 1332.68 164.942 1336.87 159.581C1338.18 162.878 1338.39 165.724 1338.47 166.606C1338.66 168.74 1339.13 170.774 1339.85 172.829Z"
        fill="#CBC9B9" />
      <path
        d="M1306.13 191.999C1312.77 208.223 1317.21 218.504 1319.33 222.172C1319.79 222.963 1321.68 226.11 1320.53 227.793C1320.1 228.425 1319.54 228.414 1319.17 228.835C1318.31 229.797 1318.79 232.523 1323.96 239.948C1315.78 243.676 1306.85 248.476 1297.65 254.689C1294.13 257.074 1290.82 259.489 1287.74 261.884C1291.25 264.229 1296.95 268.818 1300.73 276.514C1302 279.09 1302.82 281.545 1303.35 283.709C1322.81 279.741 1338.25 274.149 1349.3 269.41C1366.36 262.094 1369.01 258.517 1370.32 256.052C1376.01 245.4 1369.52 231.832 1357.48 206.659C1347.18 185.135 1339.44 177.208 1338.47 166.586C1338.35 165.274 1337.94 159.632 1334.1 154.621C1332.52 152.567 1330.15 149.471 1327.16 149.391"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1253.91 92.1608C1253.63 95.8082 1252.91 99.4356 1251.7 102.913C1250.66 106.179 1248.11 109.466 1253.38 108.444L1253.66 108.394C1254.64 108.825 1256.18 108.995 1257.12 108.634C1258.09 108.243 1257.94 106.891 1257.52 106.009C1257.29 105.598 1257.88 105.197 1258.18 105.548C1259.39 106.7 1259.58 109.145 1257.93 110.077C1256.35 110.889 1254.83 110.839 1253.23 110.338L1253.77 110.378C1251.72 110.929 1248.23 110.658 1248.24 107.752C1248.31 105.568 1249.42 104.165 1250.11 102.301C1251.48 99.0047 1252.48 95.5577 1253.33 92.0706C1253.41 91.7299 1253.95 91.8101 1253.92 92.1608H1253.91Z"
        fill="#231F20" />
      <path
        d="M1250.99 62.149C1248.48 64.9948 1249.01 68.7824 1249.27 70.0049C1247.86 68.0109 1245.15 67.3495 1243.03 68.572C1240.7 69.9147 1239.94 73.0411 1241.44 75.3458C1241.42 74.8548 1241.39 72.9208 1242.78 71.4278C1244.37 69.7244 1247.15 69.3135 1249.62 70.516C1249.55 70.3857 1249.46 70.2855 1249.39 70.1653C1249.49 69.033 1249.93 65.9768 1252.45 63.5218C1256.64 59.4435 1262.57 60.9466 1262.89 61.0367C1258.77 58.4415 1253.69 59.0928 1250.99 62.149Z"
        fill="#606060" />
      <path
        d="M1270.83 65.1454C1270.39 65.0352 1266.47 64.1033 1263.73 66.8589C1261.56 69.0333 1261.69 71.9192 1261.72 72.4101C1262.06 71.7388 1263.54 68.9531 1266.83 67.7808C1271.7 66.0472 1275.88 69.4441 1276.08 69.6145C1275.88 69.1836 1274.37 66.0673 1270.82 65.1554L1270.83 65.1454Z"
        fill="#606060" />
      <path
        d="M1299.57 154.04C1300.34 162.307 1301.67 168.77 1302.8 173.299C1303.85 177.508 1304.92 180.845 1303.16 183.02C1300.65 186.096 1294.68 184.112 1293.83 186.256C1293.15 187.97 1296.62 190.074 1298.13 192.379C1302.79 199.494 1290.64 211.118 1274.63 237.913C1273.59 239.657 1272.76 241.07 1272.3 241.872"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M1245.94 157.828C1241.52 168.119 1238.43 173.23 1236.3 175.995C1235.89 176.526 1234.23 178.641 1234.89 179.733C1235.7 181.096 1239.37 179.703 1239.9 180.765C1240.47 181.908 1236.45 183.902 1234.64 187.72C1233.07 191.026 1233.87 194.173 1234.77 198.412C1235.73 202.951 1236.94 209.425 1237.98 217.872"
        stroke="#2D2226" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <defs>
        <clipPath id="clip0_593_25976">
          <rect width="179.351" height="466.998" fill="white" transform="translate(61.5566 61.7109)" />
        </clipPath>
      </defs>
    </svg>
    <!--   <img class="relative mt-6 md:absolute w-full bottom-0 " :src="bucket + 'public/svg/bannerpeople.svg'" alt=""> -->
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
