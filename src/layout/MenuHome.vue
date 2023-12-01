<template>
    <HeaderHome />
    <router-view />
    <FooterHome />
</template>
<script setup>
import HeaderHome from '../components/Header/HeaderHome.vue';
import FooterHome from '../components/Footer/FooterHome.vue';
</script>