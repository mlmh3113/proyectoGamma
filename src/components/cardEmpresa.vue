<template>
    <div class="flex flex-col items-center text-center gap-5 transition-transform duration-500 transform hover:scale-105
    rounded-lg shadow shadow-slate-700 mx-5 hover:cursor-pointer">
    <a :href=link target="_blank">

         <img class=" border-b-2 rounded-t-md " :src=imagen alt="">

        <div class="flex flex-col items-center text-center gap-5 pt-5 pb-10">
            <h2 class="text-3xl font-bold">{{ nombre }}</h2>
            <h4 class="text-2xl font-bold">{{ ubicacion }}</h4>

        </div>
    </a>
       



    </div>
</template>

<script setup>

defineProps({
    nombre: String,
    ubicacion: String,
    imagen: String,
    link: String
})

</script>
