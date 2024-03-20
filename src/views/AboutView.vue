<template>
  <div class="w-full pt-20 relative z-10 h-full md:h-screen  bg-blue-dark ">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <h1 class="text-3xl md:text-6xl lg:text-8xl font-bold mb-7 text-center text-white">AutoSensei is Revolutionizing
        <br>
        The Car-Selling Experience
      </h1>
      <p class=" text-xs text-center md:text-base text-base-white p-5">Our mission is to streamline and simplify the
        process of selling your car.</p>
    </div>
    <img class="absolute object-cover left-0 w-full h-full -z-10 top-0" src="../assets/svg/lines/lineAbout.svg" alt="">
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
        <img class="w-full object-contain h-full" src="../assets/svg/about/Frame.svg" alt="">
      </div>
    </div>
  </div>



  <div class="md:py-14 py-4">
    <div class="grid lg:grid-cols-2 gap-6 md:gap-20 px-5 place-items-center  lg:px-20 lg:pb-0 h-full">
      <div class="w-full lg:h-[570px] h-full rounded-2xl relative">
        <img class="w-full object-cover h-full" src="../assets/svg/car-communities.svg" alt="">
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
        <img class="w-full object-cover h-[200px] md:h-auto" src="../assets/svg/about/Frame2.svg"
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
        <img class="w-full object-cover h-[200px] md:h-auto" src="../assets/svg/about/Frame3.svg"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
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

export default {
  components: {
    iconArrow,
    Heanding,
  },
  setup() {
    const route = useRouter();
    const redirectLogin = (redirect) => {
      route.push({ name: 'signup', params: { rol: redirect } })
    }
    return {
      iconArrow,
      Heanding,
      redirectLogin,
    };
  },
};
</script>
