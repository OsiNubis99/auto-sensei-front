<template>
    <footer v-if="path != 'login' && path != 'signup'">
        <div class="flex flex-col bg-[#1D2228]  relative">

            <div class="grid relative p-5 lg:p-14 lg:pb-20  lg:grid-cols-2">
                <div class="flex flex-col gap-7">
                    <RouterLink to="/">
                        <LogoIcon />
                        <!--   <LogoBlack v-else /> -->
                    </RouterLink>
                    <p class=" text-base font-normal font-OpenSauce-footer text-white">
                        AutoSensei revolutionizes car selling, providing a fast, <br>
                        stress-free process and top value via local dealership bids.
                    </p>
                </div>
                <div class="grid pt-10  grid-cols-1  md:p-0 md:grid-cols-3">
                    <div class="flex flex-col">
                        <p class="text-md my-2 uppercase font-medium font-OpenSauce-footer text-[#ffffff66]">AUCTIONS
                        </p>
                        <!--  <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-base my-2">
                            Sold
                            Auctions</RouterLink> -->
                        <RouterLink to="/login/dealers" class="text-base my-2 text-white">
                            Dealer Page</RouterLink>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-md my-2 text-[#ffffff66] font-bold">
                            Company
                        </p>
                        <RouterLink to="/about" class="text-base my-2 font-medium text-white font-OpenSauce-footer">
                            About Us</RouterLink>
                        <RouterLink to="/how-it-works"
                            class="text-base my-2 text-white font-medium font-OpenSauce-footer">
                            How
                            It Works?</RouterLink>
                        <RouterLink to="/contact-us"
                            class="text-base my-2 text-white font-medium font-OpenSauce-footer">
                            Contact Us</RouterLink>
                        <!--  <RouterLink to="" :class="path == 'about' ? 'text-black' : 'text-white'" class="text-base my-2">
                            Customer Reviews</RouterLink> -->
                    </div>
                    <div class="flex flex-col">
                        <p class="text-md my-2 font-medium font-OpenSauce-footer text-[#ffffff66]">
                            SOCIAL
                        </p>
                        <div class="flex gap-3 items-center py-2">
                            <a href="https://www.facebook.com/profile.php?id=61558003370710&mibextid=LQQJ4d"
                                target="_blank" rel="noopener noreferrer">
                                <iconFacebook :color="'#fff'" />
                            </a>
                            <p class="text-white  font-medium font-OpenSauce-footer  ">Facebook</p>
                        </div>
                        <div class="flex gap-3 items-center py-2">
                            <a href="https://www.instagram.com/autosenseiauction/?igsh=MXA3MnNvc25pa2d0YQ%3D%3D&utm_source=qr"
                                target="_blank" rel="noopener noreferrer">
                                <iconInstagram :color="'#fff'" />
                            </a>
                            <p class="text-white  font-medium font-OpenSauce-footer  ">Instagram</p>
                        </div>
                        <div class="flex gap-3 items-center py-2">
                            <a href="https://x.com/autosensei_inc?t=pAr1rD9pRasGjX_9S4_mGg&s=09" target="_blank"
                                rel="noopener noreferrer">
                                <iconTwitter :color="'#fff'" />
                            </a>
                            <p class="text-white  font-medium font-OpenSauce-footer  ">Twitter</p>
                        </div>
                        <div class="flex gap-3 items-center py-2">
                            <a href="https://www.linkedin.com/company/autosensei/" target="_blank"
                                rel="noopener noreferrer">
                                <iconLinkedin :color="'#fff'" />
                            </a>
                            <p class="text-white  font-medium font-OpenSauce-footer  ">Linkedin</p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="flex w-full border-t-[1px]  flex-col-reverse overflow-hidden  border-[#393E45]  gap-5 items-start md:flex-row p-5 md:py-6 md:px-14  justify-between relative md:items-center">
                <p class="text-sm font-normal text-white">© 2023
                    AutoSensei.
                    All Rights Reserved.</p>
                <div class="custom-footer-border flex flex-col md:flex-row lg:gap-20">
                    <RouterLink to="/terms-conditions" class="font-OpenSauce-footer text-white ">
                        <p>Terms of Service</p>
                    </RouterLink>
                    <RouterLink to="/terms-conditions" class="font-OpenSauce-footer text-white ">
                        <p> Privacy Policy</p>
                    </RouterLink>
                    <RouterLink to="" class="font-OpenSauce-footer text-white ">
                        <p>Cookie Policy</p>
                    </RouterLink>
                    <RouterLink to="" class="font-OpenSauce-footer text-white ">
                        <p>Sitemap</p>
                    </RouterLink>

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
import iconLinkedin from '@/components/icons/redes/iconLinkedin.vue'
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
        LogoBlack,
        iconLinkedin
    },
    setup() {
        const route = useRoute();
        const path = ref(computed(() => route.name))
        const bucket = ref(computed(() => import.meta.env.VITE_BASE_URL_ASSETS))
        return {
            iconInstagram,
            iconFacebook,
            iconTwitter,
            iconYoutube,
            LogoIcon,
            path,
            LogoBlack,
            bucket
        };
    },
};
</script>