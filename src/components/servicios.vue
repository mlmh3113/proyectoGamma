<template>
    <div class="flex flex-col max-w-7xl mx-auto ">
 <div class="flex flex-col items-center">
        <h1 class="text-6xl font-bold text-center my-5" >Conocé todos los servicios que tenemos para llevar tu negocio a otro nivel</h1>
    </div>
    <div class=" flex justify-center mx-auto bg-red-500 h-[4px] w-[50px]"></div>
    <div class="grid grid-cols-3 gap-3 px-40  mt-50 mx-auto max-w-7xl">
        <CardServicio id="card-1" class="col-span-1" title="landing page" descripcion="Servicio de landing page" />
        <CardServicio id="card-2" class="col-span-1" title="landing page" descripcion="Servicio de landing page" />
        <CardServicio id="card-3" class="col-span-1" title="landing page" descripcion="Servicio de landing page" />

    </div>
    </div>
   
</template>

<script setup>
import CardServicio from './cardServicio.vue'

</script>

