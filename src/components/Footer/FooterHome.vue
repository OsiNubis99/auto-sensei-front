<template>
    <footer v-if="path != 'login' && path != 'signup'">
        <div :class="path === 'about' ? 'bg-white  ' : 'bg-blue-dark  '" class="flex flex-col relative">
            <img v-if="path !== 'about'" class="absolute  left-0 w-full h-full top-0"
                src="../../assets/svg/lines/lineFooter.svg" alt="">
            <div class="grid relative p-5 lg:p-14 lg:pb-52  lg:grid-cols-2">
                <div class="flex flex-col gap-7">
                      <RouterLink to="/">
                        <LogoIcon v-if="path !== 'about'" />
                        <LogoBlack v-else />
                    </RouterLink>
                  <!--   <p class="text-sm font-normal text-white"> Join AutoSensei and Make a Difference in Children's Lives!</p>
                    <p class="text-sm font-normal text-white">
                        At AutoSensei, we believe in making a positive impact in the world, especially in the lives of those <br>
                        who need it most. That's why we are proud to announce that a portion of our income is dedicated to <br>
                        supporting the SickKids nonprofit organization. By using our platform, you are indirectly <br>
                        contributing towards providing better healthcare and support for sick children in our community. <br>
                    </p> -->
                    <p :class="path == 'about' ? 'text-black' : 'text-white'" class="text-sm font-normal">
                        AutoSensei revolutionizes car selling, providing a fast, <br>
                        stress-free process and top value via local dealership bids.
                    </p>
                    <div class="flex gap-5 items-center">
                        <RouterLink to="">
                            <iconFacebook :color="path === 'about' ? '#000' : '#fff'" />
                        </RouterLink>
                        <RouterLink to="">
                            <iconInstagram :color="path === 'about' ? '#000' : '#fff'" />
                        </RouterLink>
                        <RouterLink to="">
                            <iconTwitter :color="path === 'about' ? '#000' : '#fff'" />
                        </RouterLink>
                        <RouterLink to="">
                            <iconYoutube :color="path === 'about' ? '#000' : '#fff'" />
                        </RouterLink>
                    </div>
                </div>
                <div class="grid pt-10 grid-cols-2  md:p-0 lg:grid-cols-3">
                    <div class="flex flex-col">
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'"
                            class="text-base my-2 font-medium">Car Auctions</RouterLink>
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-base my-2">
                            Sold
                            Auctions</RouterLink>
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-base my-2">
                            Dealer Page</RouterLink>
                    </div>
                    <div class="flex flex-col">
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'"
                            class="text-base my-2 font-medium">Company</RouterLink>
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-base my-2">
                            About Us</RouterLink>
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-base my-2">
                            How
                            It Works?</RouterLink>
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-base my-2">
                            Contact Us</RouterLink>
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-base my-2">
                            Customer Reviews</RouterLink>
                    </div>
                    <div class="flex flex-col">
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'"
                            class="text-base my-2 font-medium">Account</RouterLink>
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-base my-2">
                            Sign
                            Up</RouterLink>
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-base my-2">
                            Login</RouterLink>
                        <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-base my-2">
                            Password Recovery</RouterLink>
                    </div>
                </div>
            </div>

            <div :class="path == 'about' ? 'border-black' : 'border-white'"
                class="flex w-full border-t-[1px]  flex-col-reverse   gap-5 items-start md:flex-row p-5 md:py-6 md:px-14  justify-between relative md:items-center">
                <div :class="path == 'about' ? 'text-black' : 'text-white'" class="text-sm font-normal">© 2023 AutoSensei.
                    All Rights Reserved.</div>
                <div class="flex flex-col md:flex-row gap-5">
                    <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-sm font-normal ">
                        Terms of Service</RouterLink>
                    <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-sm font-normal ">
                        Privacy Policy</RouterLink>
                    <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-sm font-normal ">
                        Cookie Policy</RouterLink>
                    <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-sm font-normal ">
                        Sitemap</RouterLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import iconInstagram from '../../components/icons/redes/iconInstagram.vue'
import iconFacebook from '../../components/icons/redes/iconFacebook.vue'
import iconTwitter from '../../components/icons/redes/iconTwitter.vue'
import iconYoutube from '../../components/icons/redes/iconYoutube.vue'
import { useRoute } from 'vue-router'
import LogoIcon from '../../assets/svg/logo.vue'
import LogoBlack from '../../assets/svg/logoBlack.vue'
export default {
    components: {
        iconInstagram,
        iconFacebook,
        iconTwitter,
        iconYoutube,
        LogoIcon,
        LogoBlack
    },
    setup() {
        const route = useRoute();
        const path = ref(computed(() => route.name))
        return {
            iconInstagram,
            iconFacebook,
            iconTwitter,
            iconYoutube,
            LogoIcon,
            path,
            LogoBlack
        };
    },
};
</script>