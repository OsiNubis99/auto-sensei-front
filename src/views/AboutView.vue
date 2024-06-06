<template>
  <div class="w-full pt-20 relative z-10 h-full md:h-screen  bg-blue-dark ">
    <div class="w-full h-full flex flex-col pt-[100px] sm:pt-0 justify-center items-center">
      <h1 class=" mb-7 text-center text-white">AutoSensei is Revolutionizing
        <br>
        The Car-Selling Experience
      </h1>
      <p class=" text-xs text-center md:text-base text-base-white p-5">Our mission is to streamline and simplify the
        process of selling your car.</p>
    </div>
    <img class="absolute object-cover left-0 w-full h-full -z-10 top-0" :src="bucket + 'public/svg/lines/lineAbout.svg'"
      alt="">
  </div>
  <div class="md:py-14 py-4">
    <div class="grid lg:grid-cols-2 gap-6 md:gap-20 px-5  lg:px-20 lg:pb-0 h-full">
      <div class="flex w-full flex-col items-start  md:gap-10">
        <h3 class="text-left  text-3xl md:text-5xl font-bold leading-[58px] p ">
          Our Journey
        </h3>
        <p class=" text-sm md:text-lg font-normal ">
          AutoSensei was born from the need to simplify the car-selling process in today's fast-paced world. We
          understand
          that our busy lives no longer afford us the time and patience to visit multiple dealerships in search of the
          best offer for our vehicles. Selling on platforms like Facebook Marketplace can be a mixed bag, often
          involving
          frustrating negotiations with potential buyers.
        </p>
        <p class=" text-sm md:text-lg font-normal ">
          With this in mind, we crafted a user-friendly software platform where customers can auction their vehicles,
          connecting them with eager dealers ready to offer top dollar. We've effectively eliminated the need for
          extensive comparison shopping, reducing your effort by 90%, with the remaining 10% involving you simply
          dropping
          off your car.
        </p>
        <p class=" text-sm md:text-lg font-normal ">
          The best part? We've made our platform 100% free for customers, with no hidden fees. It's a straightforward
          and
          supportive solution in today's competitive vehicle market.
        </p>
      </div>
      <div class="w-full lg:h-[570px] h-full rounded-2xl relative">
        <img class="w-full object-contain h-full" :src="bucket + 'public/svg/about/Frame.svg'" alt="">
      </div>
    </div>
  </div>



  <div class="md:py-14 py-4">
    <div class="grid lg:grid-cols-2 gap-6 md:gap-20 px-5 place-items-center  lg:px-20 lg:pb-0 h-full">
      <div class="w-full lg:h-[570px] h-full rounded-2xl relative">
        <img class="w-full object-cover h-full" :src="bucket + 'public/svg/car-communities.svg'" alt="">
      </div>
      <div class="flex w-full flex-col items-start  md:gap-10">
        <h3 class="text-left  text-3xl md:text-5xl font-bold leading-[58px] p ">
          Join AutoSensei and Make a Difference in Children's Lives!
        </h3>
        <p class=" text-sm md:text-lg font-normal ">
          At AutoSensei, we believe in making a positive impact in the world, especially in the lives of those
          who need it most. That's why we are proud to announce that a portion of our income is dedicated to
          supporting the SickKids nonprofit organization. By using our platform, you are indirectly
          contributing towards providing better healthcare and support for sick children in our community.
        </p>
      </div>

    </div>
  </div>
  <div class="bg-blue-dark relative py-14">
    <div class="relative">
      <Heanding :type="'h2'" :msg="'Benefits of AutoSensei'" />
    </div>
    <div class="grid md:grid-cols-2 p-5 gap-5 relative lg:p-20 h-full">
      <div class=" rounded bg-white overflow-hidden shadow-lg" @click="redirectLogin('sellers')">
        <img class="w-full object-cover h-[200px] md:h-auto" :src="bucket + 'public/svg/about/Frame2.svg'"
          alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class=" text-2xl md:text-4xl font-bold mb-2">For Sellers</div>
          <p class="text-gray-700 text-sm md:text-base">
            We created our platform to ensure clients have the ability to get the best value for their vehicle with
            their
            busy days & schedules. No more going dealer to dealer looking to see who offers the best price.
          </p>
        </div>
      </div>
      <div class=" rounded bg-white overflow-hidden shadow-lg" @click="redirectLogin('dealers')">
        <img class="w-full object-cover h-[200px] md:h-auto" :src="bucket + 'public/svg/about/Frame3.svg'"
          alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="text-2xl md:text-4xl font-bold mb-2">For Dealers</div>
          <p class="text-gray-700 text-sm md:text-base">
            Dealers are able to increase their inventory without having to go to their local auctions, or online
            auctions
            bidding on vehicles that dealers don’t want to sell themselves. Get the best vehicles with a simple
            application.
          </p>
        </div>
      </div>

    </div>
    <div class="grid p-5 lg:p-20 pt-0  lg:grid-cols-2 gap-5">
      <div class="rounded flex flex-col gap-5 relative  h-full overflow-hidden">
        <p class="text-base text-base-gray-light ">Seller Benefits</p>
        <div>
          <div
            class="group outline-none h-fit accordion-section mb-5 border-[1px] rounded-xl bg-[#191F26] border-[#4D5865]"
            tabindex="1">
            <div
              class="group bg-gray-900 flex justify-between  px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-primary text-sm md:text-lg font-medium transition ease duration-500">
                Find the Best Value Without the Hassle
              </div>
              <div
                class="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <iconArrow />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2  text-sm md:text-base text-white text-justify">

              </p>
            </div>
          </div>
          <div class="group outline-none accordion-section mb-5 border-[1px] rounded-xl bg-[#191F26] border-[#4D5865]"
            tabindex="2">
            <div
              class="group bg-gray-900 flex justify-between  px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-primary text-sm md:text-lg font-medium transition ease duration-500">
                Attract a Network of Dealers to Bid on Your Vehicle
              </div>
              <div
                class="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <iconArrow />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2  text-sm md:text-base text-white text-justify">
                We created our platform to ensure clients have the ability to get the best value for their vehicle with
                their busy days & schedules. No more going dealer to dealer looking to see who offers the best price,
                getting tired of the whole process, and possibly settling for a number that may not be the best.
              </p>
            </div>
          </div>
          <div class="group outline-none accordion-section mb-5 border-[1px] rounded-xl bg-[#191F26] border-[#4D5865]"
            tabindex="2">
            <div
              class="group bg-gray-900 flex justify-between  px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-primary text-sm md:text-lg font-medium transition ease duration-500">
                Effortless Access to High-Quality Vehicles
              </div>
              <div
                class="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <iconArrow />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2  text-sm md:text-base text-white text-justify">

              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded flex flex-col gap-5 relative  h-full overflow-hidden">
        <p class="text-base text-base-gray-light ">Dealers Benefits</p>
        <div>
          <div
            class="group outline-none h-fit accordion-section mb-5 border-[1px] rounded-xl bg-[#191F26] border-[#4D5865]"
            tabindex="1">
            <div
              class="group bg-gray-900 flex justify-between  px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-primary text-sm md:text-lg font-medium transition ease duration-500">
                Find the Best Value Without the Hassle
              </div>
              <div
                class="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <iconArrow />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2  text-sm md:text-base text-white text-justify">

              </p>
            </div>
          </div>
          <div class="group outline-none accordion-section mb-5 border-[1px] rounded-xl bg-[#191F26] border-[#4D5865]"
            tabindex="2">
            <div
              class="group bg-gray-900 flex justify-between  px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-primary text-sm md:text-lg font-medium transition ease duration-500">
                Attract a Network of Dealers to Bid on Your Vehicle
              </div>
              <div
                class="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <iconArrow />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2  text-sm md:text-base text-white text-justify">

              </p>
            </div>
          </div>
          <div class="group outline-none accordion-section mb-5 border-[1px] rounded-xl bg-[#191F26] border-[#4D5865]"
            tabindex="2">
            <div
              class="group bg-gray-900 flex justify-between  px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-primary text-sm md:text-lg font-medium transition ease duration-500">
                Effortless Access to High-Quality Vehicles
              </div>
              <div
                class="h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <iconArrow />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2  text-sm md:text-base text-white text-justify">
                We created our platform to ensure clients have the ability to get the best value for their vehicle with
                their busy days & schedules. No more going dealer to dealer looking to see who offers the best price,
                getting tired of the whole process, and possibly settling for a number that may not be the best.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <div class="bg-[#1D2228] overflow-hidden z-10 relative p-2 md:p-12 ">
    <div class="back-block">
      <div v-for="(item, index) in 50" :key="index"></div>
    </div>
    <div
      class="w-full flex flex-col md:flex-row relative z-50 justify-center rounded-xl  p-4 md:p-10 bg-white items-center">
      <div class=" max-w-3xl m-auto  ">
        <h2 class=" text-center">
          Revolutionizing Car Sales: Introducing AutoSensei
        </h2>
        <p class="   text-center ">
          In a world where every moment counts and convenience reigns supreme, the
          automotive industry has been longing for a game-changer. Enter AutoSensei, the
          dynamic platform poised to revolutionize how private sellers connect with local dealers,
          ensuring they secure top value for their vehicles without the headaches of traditional
          selling methods.
        </p>
      </div>
      <div class=" max-w-3xl m-auto mt-10 ">
        <h2 class=" text-center">
          Embracing Change in Car Sales
        </h2>
        <p class="   text-center ">
          Gone are the days of frustrating negotiations and endless market listings. AutoSensei is
          here to disrupt the norm and inject excitement into the car-selling experience. With
          lightning-fast transactions and a user-friendly interface, AutoSensei is turning heads and
          redefining what it means to sell a car
          <br>
          Recent statistics paint a picture of an industry in flux. As technology advances and
          consumer preferences evolve, the demand for innovative car-selling solutions has
          skyrocketed. AutoSensei isn't just meeting this demand—it's exceeding it, providing a
          platform that's as thrilling as it is effective
        </p>
      </div>
    </div>

    <div class=" m-auto mt-10 ">
      <div>
        <h2 class="text-white text-center">
          The AutoSensei Advantage: Driving Success
        </h2>
        <p class="  text-white text-center ">
          What sets AutoSensei apart? Hold onto your seats, because the excitement is just
          getting started:
        </p>
      </div>
      <div class="p-5  grid grid-cols-1 md:grid-cols-3 2xl:flex gap-6 items-baseline justify-center">
        <div class="flex items-center md:max-w-sm w-full  justify-center flex-col ">
          <div
            class="bg-white w-full   duration-500  cursor-pointer rounded-xl py-6 overflow-hidden relative flex justify-center items-center">
            <svg class=" absolute left-0 w-full top-0  " xmlns="http://www.w3.org/2000/svg" width="340" height="192"
              viewBox="0 0 340 192" fill="none">
              <path
                d="M119.964 -121.692L-5.1401 25.9068C-8.4269 29.7846 -2.83739 35.8206 1.35258 32.9423C56.8308 -5.16843 136.849 -50.0551 169.479 -31.6807C219.261 -3.6475 33.4169 71.5223 65.9444 110.958C91.9665 142.507 217.901 45.2908 277.615 -7.26062C235.312 52.6536 158.006 177.781 187.206 198.976C223.707 225.47 325.163 43.4544 350.889 60.055"
                stroke="#ecfdcf" stroke-width="44" />
            </svg>
            <div
              class="w-[80px] border-4 border-primary bg-white h-[80px] shadow-xl 2xl:w-[111px] 2xl:h-[111px] flex justify-center items-center relative object-cover rounded-full ">
              <svg class="w-20" viewBox="0 0 50 50" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <path class="cls-1  "
                    d="M8.513,25.5h9.875a3.1,3.1,0,0,0,3.058,2.608h7.108A3.1,3.1,0,0,0,31.612,25.5h9.875A4.017,4.017,0,0,0,45.5,21.487V16.833a4.007,4.007,0,0,0-3.784-3.99,3.105,3.105,0,0,0-3.057-2.6H31.551A3.107,3.107,0,0,0,28.5,12.82H22.2V11.492a.5.5,0,0,0-.43-.5l-2.047-.289,1.243-1.65a.5.5,0,0,0-.045-.654L18.292,5.779a.5.5,0,0,0-.654-.046L15.987,6.977,15.7,4.93A.5.5,0,0,0,15.2,4.5H11.492a.5.5,0,0,0-.5.43l-.289,2.047L9.058,5.733a.5.5,0,0,0-.654.046L5.779,8.4a.5.5,0,0,0-.046.654l1.244,1.65L4.93,11a.5.5,0,0,0-.43.5V15.2a.5.5,0,0,0,.43.495l2.047.288L5.733,17.638a.5.5,0,0,0,.046.654L8.4,20.917a.5.5,0,0,0,.654.046l1.65-1.243L11,21.766a.5.5,0,0,0,.5.43H15.2a.5.5,0,0,0,.495-.43l.288-2.047,1.651,1.244a.5.5,0,0,0,.654-.046l2.625-2.625a.5.5,0,0,0,.045-.654l-1.243-1.651,2.047-.288a.5.5,0,0,0,.43-.495V13.82H28.49a3.1,3.1,0,0,0,3.061,2.636h7.108a3.1,3.1,0,0,0,3.058-2.613,3.008,3.008,0,0,1,2.783,2.99v4.654A3.017,3.017,0,0,1,41.487,24.5H31.612a3.1,3.1,0,0,0-3.058-2.608H21.446A3.1,3.1,0,0,0,18.388,24.5H8.513A4.017,4.017,0,0,0,4.5,28.513v4.654a4.007,4.007,0,0,0,3.784,3.99,3.105,3.105,0,0,0,3.057,2.6h7.108A3.107,3.107,0,0,0,21.5,37.18h6.142a8.958,8.958,0,1,0-.012-1H21.51a3.1,3.1,0,0,0-3.061-2.636H11.341a3.1,3.1,0,0,0-3.058,2.613A3.008,3.008,0,0,1,5.5,33.167V28.513A3.017,3.017,0,0,1,8.513,25.5Zm4.835-8.582a3.57,3.57,0,1,1,3.57-3.57A3.574,3.574,0,0,1,13.348,16.918Z">
                  </path>
                  <path class="cls-2 fill-[#c1f861]"
                    d="M38.659,15.456H31.551a2.108,2.108,0,1,1,0-4.216h7.108a2.108,2.108,0,1,1,0,4.216Z"></path>
                  <path class="cls-2 fill-[#c1f861]"
                    d="M21.446,22.892h7.108a2.108,2.108,0,0,1,2.105,2.076c0,.011-.006.021-.006.032s.006.021.006.032a2.108,2.108,0,0,1-2.105,2.076H21.446a2.108,2.108,0,0,1-2.105-2.076c0-.011.006-.021.006-.032s-.006-.021-.006-.032A2.108,2.108,0,0,1,21.446,22.892Z">
                  </path>
                  <path class="cls-2 fill-[#c1f861]"
                    d="M11.341,34.544h7.108a2.108,2.108,0,1,1,0,4.216H11.341a2.108,2.108,0,0,1,0-4.216Z"></path>
                  <circle class="cls-1" cx="22.482" cy="25" r="0.502"></circle>
                  <circle class="cls-1" cx="25.024" cy="25" r="0.502"></circle>
                  <circle class="cls-1" cx="27.518" cy="25" r="0.502"></circle>
                  <circle class="cls-1" cx="32.587" cy="13.348" r="0.502"></circle>
                  <circle class="cls-1" cx="35.129" cy="13.348" r="0.502"></circle>
                  <circle class="cls-1" cx="37.622" cy="13.348" r="0.502"></circle>
                  <circle class="cls-1" cx="17.413" cy="36.652" r="0.502"></circle>
                  <circle class="cls-1" cx="14.871" cy="36.652" r="0.502"></circle>
                  <circle class="cls-1" cx="12.378" cy="36.652" r="0.502"></circle>
                  <path class="cls-3" d="M36.557,28.615a7.943,7.943,0,1,1-7.942,7.942A7.952,7.952,0,0,1,36.557,28.615Z">
                  </path>
                  <path class="cls-4 fill-[#6eb1e1] "
                    d="M18.74,15.115,21.2,14.77V11.927l-2.456-.346a.5.5,0,0,1-.33-.8L19.9,8.8l-2.01-2.011L15.911,8.286a.5.5,0,0,1-.8-.33L14.77,5.5H11.926l-.345,2.456a.5.5,0,0,1-.8.33L8.8,6.793,6.793,8.8l1.493,1.981a.5.5,0,0,1-.33.8L5.5,11.927V14.77l2.456.345a.5.5,0,0,1,.33.8L6.793,17.892,8.8,19.9l1.981-1.493a.5.5,0,0,1,.8.33l.345,2.456H14.77l.345-2.456a.5.5,0,0,1,.8-.33L17.892,19.9l2.01-2.011L18.41,15.911a.5.5,0,0,1,.33-.8Zm-5.392,1.8a3.57,3.57,0,1,1,3.57-3.57A3.574,3.574,0,0,1,13.348,16.918Z">
                  </path>
                  <path class="cls-1 fill-[#c1f861] "
                    d="M13.348,8.778a4.57,4.57,0,1,0,4.57,4.57A4.575,4.575,0,0,0,13.348,8.778Zm0,8.14a3.57,3.57,0,1,1,3.57-3.57A3.574,3.574,0,0,1,13.348,16.918Z">
                  </path>
                  <path class="cls-1 fill-[#c1f861] "
                    d="M35.751,38.763a.5.5,0,0,0,.707,0l4.124-4.124a.5.5,0,0,0-.707-.707L36.1,37.7,34.272,35.87a.5.5,0,0,0-.707.707Z">
                  </path>
                </g>
              </svg>
            </div>
          </div>
          <div class="mt-4 p-2 text-center">
            <p class="font-bold text-xl text-white "> Streamlined Auction Process</p>
            <p class="mt-4 text-white">
              AutoSensei puts sellers in the driver's seat with a
              streamlined auction process that's as efficient as it is effective. From creating
              eye-catching listings to setting reserve prices, sellers have all the tools they need to take
              control of their sale. And when the auction concludes, the top bidder gains direct access
              to the seller, ensuring a smooth and transparent transaction.

            </p>
          </div>

        </div>
        <div class="flex items-center md:max-w-sm w-full  justify-center flex-col ">
          <div class="bg-white w-full rounded-xl py-6 overflow-hidden relative flex justify-center items-center">
            <svg class=" absolute left-0 w-full top-0  " xmlns="http://www.w3.org/2000/svg" width="340" height="192"
              viewBox="0 0 340 192" fill="none">
              <path
                d="M119.964 -121.692L-5.1401 25.9068C-8.4269 29.7846 -2.83739 35.8206 1.35258 32.9423C56.8308 -5.16843 136.849 -50.0551 169.479 -31.6807C219.261 -3.6475 33.4169 71.5223 65.9444 110.958C91.9665 142.507 217.901 45.2908 277.615 -7.26062C235.312 52.6536 158.006 177.781 187.206 198.976C223.707 225.47 325.163 43.4544 350.889 60.055"
                stroke="#ecfdcf" stroke-width="44" />
            </svg>
            <div
              class="w-[80px] border-4 border-primary bg-white h-[80px] shadow-xl 2xl:w-[111px] 2xl:h-[111px] flex justify-center items-center relative object-cover rounded-full ">
              <svg class="w-20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 393.568 393.568" xml:space="preserve"
                fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <circle style="fill:#6EB1E1;" cx="196.784" cy="196.784" r="196.784"></circle>
                  <path style="fill:#FCFCFD;"
                    d="M333.576,223.483h31.677c-11.442,72.857-68.913,130.457-141.705,142.028v-31.935h19.394 l-46.093-46.093l-46.093,46.093h19.394v32C96.97,354.198,39.24,296.533,27.798,223.483h32.259v19.394l46.093-46.093l-46.093-46.093 v19.394H27.798C39.24,97.034,97.034,39.37,170.085,27.992v32h-19.394l46.093,46.093l46.093-46.093h-19.394V28.057 c72.857,11.572,130.327,69.172,141.77,142.028h-31.677v-19.394l-46.158,46.093l46.093,46.093v-19.394H333.576z">
                  </path>
                  <rect x="179.265" y="188.638" style="fill:#F0BA7A;" width="34.327" height="25.147"></rect>
                  <circle style="fill:#4F5565;" cx="196.525" cy="149.592" r="38.788"></circle>
                  <polygon style="fill:#DEDEDF;"
                    points="174.222,204.929 196.525,205.964 218.828,204.929 213.527,277.463 179.523,277.463 "></polygon>
                  <polygon style="fill:#F0582F;"
                    points="191.289,221.414 185.018,262.788 196.525,277.463 208.032,262.788 201.762,221.414 "></polygon>
                  <path style="fill:#4B5AA7;"
                    d="M173.964,204.929c-1.552,0.517-50.554,22.562-50.554,22.562l-11.766,50.036h84.881L173.964,204.929z">
                  </path>
                  <polygon style="fill:#257DC0;"
                    points="173.964,204.929 164.267,209.067 149.075,232.145 163.491,236.865 150.691,251.539 179.523,277.463 196.525,277.463 ">
                  </polygon>
                  <path style="fill:#4B5AA7;"
                    d="M219.087,204.929c1.552,0.517,50.554,22.562,50.554,22.562l11.766,50.036h-84.881L219.087,204.929z">
                  </path>
                  <polygon style="fill:#257DC0;"
                    points="219.087,204.929 228.784,209.067 243.976,232.145 229.56,236.865 242.36,251.539 213.527,277.463 196.525,277.463 ">
                  </polygon>
                  <polygon style="fill:#D54232;"
                    points="199.176,206.222 193.875,206.222 185.018,215.143 191.289,221.414 201.762,221.414 208.032,215.143 ">
                  </polygon>
                  <g>
                    <polygon style="fill:#F1F3F7;"
                      points="174.222,204.929 178.941,196.525 196.525,205.964 183.661,223.224 "></polygon>
                    <polygon style="fill:#F1F3F7;"
                      points="218.828,204.929 214.109,196.525 196.525,205.964 209.39,223.224 "></polygon>
                  </g>
                  <path style="fill:#4F5565;"
                    d="M170.085,148.816c0,0,27.281,1.552,38.788-15.192c0,0,3.426,9.956,12.865,13.64v13.64h4.719 c0-1.293,0.259-2.651,0.259-3.943c0-21.98-13.382-39.564-29.867-39.564s-29.867,17.842-29.867,39.564c0,1.293,0,2.651,0.259,3.943 h3.426v-12.024h-0.582V148.816z">
                  </path>
                  <path style="fill:#F7CFA2;"
                    d="M221.673,160.905v-13.64c-9.438-3.943-12.865-13.64-12.865-13.64 c-11.507,16.743-38.788,15.192-38.788,15.192v12.024h-3.426c1.551,20.17,14.158,35.62,29.867,35.62 c15.451,0,28.315-15.709,29.867-35.62h-4.655V160.905z">
                  </path>
                </g>
              </svg>
            </div>
          </div>
          <div class="mt-4 p-2 text-center">
            <p class="font-bold text-xl text-white ">Targeted Audience</p>
            <p class="mt-4 text-white"> Say goodbye to tire-kickers and hello to serious buyers. By
              connecting sellers directly with local dealers, AutoSensei ensures that every bid counts.
              Sellers can rest easy knowing they're reaching a targeted audience of buyers who are
              ready to make competitive offers.

            </p>
          </div>

        </div>
        <div class="flex items-center md:max-w-sm w-full  justify-center flex-col ">
          <div class="bg-white w-full rounded-xl py-6 overflow-hidden relative flex justify-center items-center">
            <svg class=" absolute left-0 w-full top-0  " xmlns="http://www.w3.org/2000/svg" width="340" height="192"
              viewBox="0 0 340 192" fill="none">
              <path
                d="M119.964 -121.692L-5.1401 25.9068C-8.4269 29.7846 -2.83739 35.8206 1.35258 32.9423C56.8308 -5.16843 136.849 -50.0551 169.479 -31.6807C219.261 -3.6475 33.4169 71.5223 65.9444 110.958C91.9665 142.507 217.901 45.2908 277.615 -7.26062C235.312 52.6536 158.006 177.781 187.206 198.976C223.707 225.47 325.163 43.4544 350.889 60.055"
                stroke="#ecfdcf" stroke-width="44" />
            </svg>
            <div
              class="w-[80px] bg-white h-[80px]  border-4 border-primary shadow-xl 2xl:w-[111px] 2xl:h-[111px] flex justify-center items-center relative object-cover rounded-full ">
              <img class="w-[50%] h-[70%] object-contain " src="../assets/img/png/secure-payment.png" alt="">
            </div>

          </div>
          <div class="mt-4 p-2 text-center">
            <p class="font-bold text-xl text-white ">Secure Transaction Management</p>
            <p class="mt-4 text-white">When a bid is accepted, AutoSensei kicks into gear,
              managing the transaction process with precision and speed. While it may not handle
              drop-off arrangements or transaction processing directly, AutoSensei provides sellers
              and buyers with a structured framework to navigate their deal securely and efficiently.
              It's a smooth ride from start to finish.
            </p>
          </div>

        </div>
      </div>
    </div>
    <div class=" m-auto mt-10 ">
      <div>
        <h2 class="text-white text-center">
          Accelerating Towards Success: Data-Driven Results
        </h2>
        <p class="  text-white text-center ">
          But don't just take our word for it—let the data do the talking:
        </p>
      </div>
      <div class="p-5  grid grid-cols-1 md:grid-cols-3 2xl:flex gap-6 items-baseline justify-center">
        <div class="flex items-center md:max-w-sm w-full  justify-center flex-col ">
          <div
            class="bg-white w-full   duration-500  cursor-pointer rounded-xl py-6 overflow-hidden relative flex justify-center items-center">
            <svg class=" absolute left-0 w-full top-0  " xmlns="http://www.w3.org/2000/svg" width="340" height="192"
              viewBox="0 0 340 192" fill="none">
              <path
                d="M119.964 -121.692L-5.1401 25.9068C-8.4269 29.7846 -2.83739 35.8206 1.35258 32.9423C56.8308 -5.16843 136.849 -50.0551 169.479 -31.6807C219.261 -3.6475 33.4169 71.5223 65.9444 110.958C91.9665 142.507 217.901 45.2908 277.615 -7.26062C235.312 52.6536 158.006 177.781 187.206 198.976C223.707 225.47 325.163 43.4544 350.889 60.055"
                stroke="#ecfdcf" stroke-width="44" />
            </svg>
            <div
              class="w-[80px] bg-white h-[80px] border-4 border-primary  shadow-xl 2xl:w-[111px] 2xl:h-[111px] flex justify-center items-center relative object-cover rounded-full ">
              <img class="w-[50%] h-[70%] object-contain " src="../assets/img/png/rendimiento.png" alt="">
            </div>
          </div>
          <div class="mt-4 p-2 text-center">
            <p class="font-bold text-xl text-white ">Efficient Sales</p>
            <p class="mt-4 text-white">
              Sellers using AutoSensei report spending 40% less time managing
              their listings compared to traditional methods. With speed like that, there's no slowing
              down.
            </p>
          </div>

        </div>
        <div class="flex items-center md:max-w-sm w-full  justify-center flex-col ">
          <div class="bg-white w-full rounded-xl py-6 overflow-hidden relative flex justify-center items-center">
            <svg class=" absolute left-0 w-full top-0  " xmlns="http://www.w3.org/2000/svg" width="340" height="192"
              viewBox="0 0 340 192" fill="none">
              <path
                d="M119.964 -121.692L-5.1401 25.9068C-8.4269 29.7846 -2.83739 35.8206 1.35258 32.9423C56.8308 -5.16843 136.849 -50.0551 169.479 -31.6807C219.261 -3.6475 33.4169 71.5223 65.9444 110.958C91.9665 142.507 217.901 45.2908 277.615 -7.26062C235.312 52.6536 158.006 177.781 187.206 198.976C223.707 225.47 325.163 43.4544 350.889 60.055"
                stroke="#ecfdcf" stroke-width="44" />
            </svg>
            <div
              class="w-[80px] bg-white h-[80px]  border-4 border-primary shadow-xl 2xl:w-[111px] 2xl:h-[111px] flex justify-center items-center relative object-cover rounded-full ">
              <img class="w-[50%] h-[70%] object-contain " src="../assets/img/png/sello.png" alt="">
            </div>

          </div>
          <div class="mt-4 p-2 text-center">
            <p class="font-bold text-xl text-white ">Seller Satisfaction</p>
            <p class="mt-4 text-white">An impressive 85% of sellers surveyed rave about their experience
              with AutoSensei, citing clear communication and hassle-free transactions as key
              factors.

            </p>
          </div>

        </div>
        <div class="flex items-center md:max-w-sm w-full  justify-center flex-col ">
          <div class="bg-white w-full rounded-xl py-6 overflow-hidden relative flex justify-center items-center">
            <svg class=" absolute left-0 w-full top-0  " xmlns="http://www.w3.org/2000/svg" width="340" height="192"
              viewBox="0 0 340 192" fill="none">
              <path
                d="M119.964 -121.692L-5.1401 25.9068C-8.4269 29.7846 -2.83739 35.8206 1.35258 32.9423C56.8308 -5.16843 136.849 -50.0551 169.479 -31.6807C219.261 -3.6475 33.4169 71.5223 65.9444 110.958C91.9665 142.507 217.901 45.2908 277.615 -7.26062C235.312 52.6536 158.006 177.781 187.206 198.976C223.707 225.47 325.163 43.4544 350.889 60.055"
                stroke="#ecfdcf" stroke-width="44" />
            </svg>
            <div
              class="w-[80px] bg-white h-[80px]  border-4 border-primary shadow-xl 2xl:w-[111px] 2xl:h-[111px] flex justify-center items-center relative object-cover rounded-full ">
              <img class="w-[50%] h-[70%] object-contain " src="../assets/img/png/coche.png" alt="">
            </div>
          </div>
          <div class="mt-4 p-2 text-center">
            <p class="font-bold text-xl text-white ">Maximized Profits</p>
            <p class="mt-4 text-white"> Vehicles listed on AutoSensei consistently attract more
              competitive bids, resulting in higher sale prices and increased profitability for sellers.
            </p>
          </div>

        </div>

      </div>
    </div>
    <div class="flex mt-10 flex-col max-w-7xl bg-primary p-10 rounded-lg justify-center items-center  m-auto ">
      <h1>Buckle Up for the Future</h1>
      <p>
        As the automotive industry hurtles towards the future, AutoSensei is leading the charge.
        With a commitment to innovation and a passion for driving results, AutoSensei is
        redefining the car-selling experience one transaction at a time. So strap in, hold on tight,
        and get ready for a smooth ride with AutoSensei.
      </p>
    </div>
  </div>
</template>

<script>
import iconArrow from '../components/icons/iconArrow.vue'
import Heanding from '../components/Headings/Heanding.vue'
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue';

export default {
  components: {
    iconArrow,
    Heanding,
  },
  setup() {
    const route = useRouter();
    const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
    const redirectLogin = (redirect) => {
      route.push({ name: 'signup', params: { rol: redirect } })
    }
    return {
      iconArrow,
      Heanding,
      redirectLogin,
      bucket
    };
  },
};
</script>
