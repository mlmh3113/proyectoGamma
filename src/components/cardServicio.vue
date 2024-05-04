<template>
    <div class="flex flex-col items-center text-center gap-5 transition-transform duration-500 transform hover:scale-105">
        <img src="https://res.cloudinary.com/dkoocayxp/image/upload/v1714839591/Dise%C3%B1o%20Web%20Gamma/diseno-web-profesional-card_gqxvdx.png" alt="">
        <h2 class="text-3xl font-bold">{{ title }}</h2>
        <h4 class="text-2xl font-bold">{{ descripcion }}</h4>
        <a href="#" 
        class="bg-red-500 text-white pt-2 pb-3 px-3 rounded-full w-fit border border-black
        hover:bg-white hover:text-red-500 hover:border hover:border-red-500 " 
        >Quiero empezar ahora</a>
     
    </div>
</template>

<script setup>

defineProps({
    title: String,
    descripcion: String
})

</script>
