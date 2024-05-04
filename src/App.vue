<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/nav.vue'
import Footer from './components/footer.vue'
import WspBtn from './components/wspBtn.vue'
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite'

onMounted(() => {
        initFlowbite();
    })





</script>

<template>
  <Nav />
  <RouterView />
  <WspBtn />
  <Footer />

</template>

<style scoped>


</style>
