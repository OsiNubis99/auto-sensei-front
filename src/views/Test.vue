
<template>
  <div class="w-full h-screen mt-20 gap-4">
    <button class="p-4 bg-base-black text-white" @click="testDate('9')">9</button>
    <button class="p-4 bg-base-black text-white" @click="testDate(10)">10</button>
    <button class="p-4 bg-base-black text-white" @click="testDate(11)">11</button>
    <button class="p-4 bg-base-black text-white" @click="testDate(12)">12</button>
    <button class="p-4 bg-base-black text-white" @click="testDate(13)">13</button>
    <button class="p-4 bg-base-black text-white" @click="testDate(14)">14</button>
    <button class="p-4 bg-base-black text-white" @click="testDate(15)">15</button>
  </div>
</template>

<script >
import { ref, onMounted, computed } from "vue";
import iconArrow from '../components/icons/iconArrow.vue'
import Heanding from '../components/Headings/Heanding.vue'
import { useRouter, useRoute } from 'vue-router'
import { useFaqStore } from "@/stores/faq";
export default {
  components: {
    iconArrow,
    Heanding,
  },
  setup() {
    function getDateAndMinutes(hours) {
      var days = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 0
      };
      if (typeof hours !== 'number' || hours < 0 || hours > 24) {
        return new Error(hours + " is not a valid hour");
      }
      var currDate = new Date(new Date().setHours(19, 0, 0));
      var dayMillDiff = 0;
      var dayInMill = 1000 * 60 * 60 * 24;
      while (currDate.getDay() != 6 || dayMillDiff == 0) {
        dayMillDiff += dayInMill;
        currDate = new Date(currDate.getTime() + dayInMill);
      }
      var monday = new Date(currDate.getTime() + dayInMill * 2).setHours(hours);
      var diff = monday - currDate;

      return {
        startDate: currDate,
        monday: new Date(monday),
        duration: Math.floor(((monday - currDate) / 1000) / 60)
      };
    }
    function timeToStart(startDate) {
      if (!startDate) return 0;
      return startDate.valueOf() - Date.now();
    }

    function timeToEnd(startDate, duration) {
      if (!startDate || !duration) return 0;
      return (
        new Date(startDate.getTime() + duration * 1000 * 60).valueOf() - Date.now()
      );
    }

    const testDate = (horas) => {
      console.log('horas', horas)
      var data = getDateAndMinutes(+horas);
      console.log({ data, startAt: timeToStart(data.startDate), endAt: timeToEnd(data.startDate, data.duration) })
    }
    onMounted(() => {

    });
    return {
      testDate
    };
  },
};
</script>

  
