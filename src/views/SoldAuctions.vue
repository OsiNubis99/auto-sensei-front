
<template>
  <div class="w-full pt-10 relative z-10 h-[60vh] bg-blue-dark ">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <h1 class="text-4xl md:text-6xl  font-bold mb-7 text-center text-white">Auction your car to dealers <br> right
        from your home
      </h1>
      <p class="text-base-white p-5">Our mission is to streamline and simplify the process of selling your car.</p>
    </div>
    <img class="absolute object-cover left-0 w-full h-full -z-10 top-0" src="../assets/img/png/sould.png" alt="">
  </div>
  <div class="py-2 px-20" >
    <div>
      <div class=" w-full flex p-5 justify-between items-center">
        <p class=" font-semibold  ">Showing 4.937 successful auctions</p>
        <div class="flex items-center justify-center">
          <div class="container mx-auto py-4">
            <div class="group relative">
              <svg width="20" height="20" fill="#C2C2C2"
                class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
              <input
                class="rounded-l-lg appearance-none w-full border border-[#C2C2C2] text-sm leading-6 text-slate-900 placeholder-slate-400  py-2  pl-10 pr-4 truncate"
                type="text" aria-label="Filter projects" placeholder="Filter projects...">
            </div>
          </div>
          <button
            class="h-full py-2  pl-2 pr-4 border rounded-r-lg flex gap-2 items-center border-[#C2C2C2] !text-[#858585]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4.11301 12.0003C4.25074 11.61 4.50617 11.272 4.84407 11.0329C5.18198 10.7938 5.58573 10.6654 5.99967 10.6654C6.41362 10.6654 6.81737 10.7938 7.15527 11.0329C7.49318 11.272 7.74861 11.61 7.88634 12.0003H14.6663V13.3337H7.88634C7.74861 13.724 7.49318 14.062 7.15527 14.3011C6.81737 14.5402 6.41362 14.6686 5.99967 14.6686C5.58573 14.6686 5.18198 14.5402 4.84407 14.3011C4.50617 14.062 4.25074 13.724 4.11301 13.3337H1.33301V12.0003H4.11301ZM8.11301 7.33367C8.25074 6.94331 8.50617 6.60529 8.84407 6.36619C9.18198 6.12709 9.58573 5.9987 9.99967 5.9987C10.4136 5.9987 10.8174 6.12709 11.1553 6.36619C11.4932 6.60529 11.7486 6.94331 11.8863 7.33367H14.6663V8.667H11.8863C11.7486 9.05735 11.4932 9.39538 11.1553 9.63447C10.8174 9.87357 10.4136 10.002 9.99967 10.002C9.58573 10.002 9.18198 9.87357 8.84407 9.63447C8.50617 9.39538 8.25074 9.05735 8.11301 8.667H1.33301V7.33367H8.11301ZM4.11301 2.667C4.25074 2.27664 4.50617 1.93862 4.84407 1.69952C5.18198 1.46043 5.58573 1.33203 5.99967 1.33203C6.41362 1.33203 6.81737 1.46043 7.15527 1.69952C7.49318 1.93862 7.74861 2.27664 7.88634 2.667H14.6663V4.00033H7.88634C7.74861 4.39069 7.49318 4.72871 7.15527 4.96781C6.81737 5.2069 6.41362 5.3353 5.99967 5.3353C5.58573 5.3353 5.18198 5.2069 4.84407 4.96781C4.50617 4.72871 4.25074 4.39069 4.11301 4.00033H1.33301V2.667H4.11301ZM5.99967 4.00033C6.17649 4.00033 6.34605 3.93009 6.47108 3.80507C6.5961 3.68005 6.66634 3.51048 6.66634 3.33366C6.66634 3.15685 6.5961 2.98728 6.47108 2.86226C6.34605 2.73724 6.17649 2.667 5.99967 2.667C5.82286 2.667 5.65329 2.73724 5.52827 2.86226C5.40325 2.98728 5.33301 3.15685 5.33301 3.33366C5.33301 3.51048 5.40325 3.68005 5.52827 3.80507C5.65329 3.93009 5.82286 4.00033 5.99967 4.00033ZM9.99967 8.667C10.1765 8.667 10.3461 8.59676 10.4711 8.47174C10.5961 8.34671 10.6663 8.17714 10.6663 8.00033C10.6663 7.82352 10.5961 7.65395 10.4711 7.52893C10.3461 7.4039 10.1765 7.33367 9.99967 7.33367C9.82286 7.33367 9.65329 7.4039 9.52827 7.52893C9.40325 7.65395 9.33301 7.82352 9.33301 8.00033C9.33301 8.17714 9.40325 8.34671 9.52827 8.47174C9.65329 8.59676 9.82286 8.667 9.99967 8.667ZM5.99967 13.3337C6.17649 13.3337 6.34605 13.2634 6.47108 13.1384C6.5961 13.0134 6.66634 12.8438 6.66634 12.667C6.66634 12.4902 6.5961 12.3206 6.47108 12.1956C6.34605 12.0706 6.17649 12.0003 5.99967 12.0003C5.82286 12.0003 5.65329 12.0706 5.52827 12.1956C5.40325 12.3206 5.33301 12.4902 5.33301 12.667C5.33301 12.8438 5.40325 13.0134 5.52827 13.1384C5.65329 13.2634 5.82286 13.3337 5.99967 13.3337Z"
                fill="#858585" />
            </svg>
            <p> Filter</p>
          </button>
        </div>
      </div>
    </div>
    <div class="contents sm:grid md:grid-cols-2 lg:grid-cols-4 md:p-5  gap-4 ">
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
      <div class="w-full  p-5 sm:p-0">
        <swiper pagination :modules="modules" :slides-per-view="1" class="mySwiperHome bg-white ">
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_978610-MLV73175181347_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_693606-MLV73175191335_112023-O.webp" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="w-full" src="https://http2.mlstatic.com/D_NQ_NP_899275-MLV73092445294_112023-O.webp" alt="">
          </swiper-slide>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">2008 BMW 528 I</div>
            <p class="text-gray-700 text-base">
              La Grange, KY 40031
            </p>
          </div>
          <div class="px-6 flex pb-2">
            <div
              class="flex bg-base-gray-light w-min  items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <iconCheckbox />
              <p> photography</p>
            </div>
            <div class="bg-base-gray-light rounded-full w-7 h-7 ">
              +1
            </div>
          </div>
          <div class="flex px-6 pb-4 gap-6">
            <div class="flex flex-col gap-1 pr-5 border-r-2 border-base-gray">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class=" text-xs font-normal ">Final Bid</p>
              <p class=" text-base font-semibold ">$100,000</p>
            </div>
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script >
import iconArrow from '../components/icons/iconArrow.vue'
import Heanding from '../components/Headings/Heanding.vue'
import { useRouter, useRoute } from 'vue-router'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
  components: {
    iconArrow,
    Heanding,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const route = useRouter();
    const redirectLogin = (redirect) => {
      console.log('redirect', route)
      route.push({ name: 'signup', params: { rol: redirect } })
    }
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      modules: [Navigation, Pagination, Scrollbar, A11y],
      iconArrow,
      Heanding,
      redirectLogin,
    };
  },
};
</script>

  
