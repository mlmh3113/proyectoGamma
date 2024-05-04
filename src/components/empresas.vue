<template>
    <div class="space-y-10 my-10 py-10">
        <h2 class="text-6xl font-bold text-center my-5" >
            Algunas de las empresas que confian en nosotros</h2>

            <div class=" flex justify-center mx-auto bg-purple-500 h-[4px] w-[50px]"></div>

        <div class="grid grid-cols-3 gap-5 px-40  mt-50 mx-auto max-w-7xl">
            <CardEmpresa id="card-1" class="col-span-1" link="https://live-seguros.vercel.app/" nombre="Live Seguros" ubicacion="Buenos Aires, Argentina" imagen="https://res.cloudinary.com/dkoocayxp/image/upload/v1714838235/Dise%C3%B1o%20Web%20Gamma/liveSeguros_amdl40.png" />
            <CardEmpresa id="card-2" class="col-span-1" link="https://estudio-casa.vercel.app/" nombre="Estudio casa" ubicacion="Montevideo, Uruguay" imagen="https://res.cloudinary.com/dkoocayxp/image/upload/v1714838226/Dise%C3%B1o%20Web%20Gamma/estudioCasa_uwrc8a.png"/>
            <CardEmpresa id="card-3" class="col-span-1" link="https://personal-fit-front.vercel.app/" nombre="Get Fit" ubicacion="Buenos Aires, Argentina" imagen="https://res.cloudinary.com/dkoocayxp/image/upload/v1714838216/Dise%C3%B1o%20Web%20Gamma/getFit_xycvij.png" />
        </div>

    </div>
</template>

<script setup>
import CardEmpresa from './cardEmpresa.vue'

</script>

