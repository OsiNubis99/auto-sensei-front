<template>
    
    <div id="container1">
        <div id="container2">
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            hello<br />I<br />am<br />here<br />
            good<br />bye.
        </div>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

// import Swiper core and required modules
import { Pagination, Navigation, Virtual } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        // Create array with 500 slides
        const slides = ref(
            Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
        );
        let swiperRef = null;
        let appendNumber = 500;
        let prependNumber = 1;

        const setSwiperRef = (swiper) => {
            swiperRef = swiper;
        };
        const slideTo = (index) => {
            swiperRef.slideTo(index - 1, 0);
        };
        const append = () => {
            slides.value = [...slides.value, 'Slide ' + ++appendNumber];
        };
        const prepend = () => {
            slides.value = [
                `Slide ${prependNumber - 2}`,
                `Slide ${prependNumber - 1}`,
                ...slides.value,
            ];
            prependNumber -= 2;
            swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
        };
        onMounted(() => {
            var parent = document.getElementById('container1');
var child = document.getElementById('container2');
child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";
        })
        return {
            slides,
            swiperRef: null,
            appendNumber,
            prependNumber,
            setSwiperRef,
            slideTo,
            append,
            prepend,
            modules: [Pagination, Navigation, Virtual],
        };
    },
};
</script>
'
<style>
* {
    margin: 0;
}

#container1 {
    height: 100%;
    width: 100%;
    border: 1px solid green;
    overflow: hidden;
}

#container2 {
    width: 100%;
    height: 99%;
    border: 1px solid blue;
    overflow: auto;
    padding-right: 0px;
    /* exact value is given in JavaScript code */
}

html,
body {
    height: 99%;
    border: 1px solid red;
    overflow: hidden;
}

/* html {
    height: 100%;
}

html,
body {
    height: 100%;
} */</style>
  