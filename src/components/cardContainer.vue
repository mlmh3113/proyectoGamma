<template>

    <div class="flex flex-col w-screen mx-auto  text-center relative bg-slate-200 pb-10 my-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,170.7C384,192,480,224,576,234.7C672,245,768,235,864,229.3C960,224,1056,224,1152,218.7C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
        <div class="absolute top-0 left-1/2 text-black w-full -translate-x-1/2 ">
            <h2 class="text-6xl font-bold text-center my-5">Somos Comunicacion</h2>

            <div class=" flex justify-center mx-auto bg-slate-200 h-[4px] w-[50px]"></div>

            <div class="grid grid-cols-2 gap-3 px-40  mt-50 mx-auto max-w-7xl">
                <p class="col-span-1">Valoramos la transparencia, la colaboración y la comunicación abierta. Nos
                    esforzamos por establecer relaciones sólidas y duraderas con nuestros clientes, y nos enorgullece
                    brindar un excelente servicio al cliente en cada interacción. Tu éxito es nuestro éxito, y nos
                    comprometemos a trabajar arduamente para ayudarte a alcanzar tus metas y superar tus expectativas
                </p>
                <p class="col-span-1">Si estás listo para llevar tu presencia en línea al siguiente nivel, daktilar está
                    aquí para ayudarte. Explora nuestros servicios de diseño web y marketing digital, y contáctanos hoy
                    mismo para comenzar tu viaje hacia el éxito en línea. ¡Estamos emocionados de ser tu socio digital
                    confiable y llevar tus ideas al mundo digital de manera excepcional!</p>
            </div>

        </div>



    </div>


    <h2 class="text-6xl font-bold text-center my-5">
        Algunas de las empresas que confian en nosotros</h2>

    <div class=" flex justify-center mx-auto bg-fuchsia-800 h-[4px] w-[50px]"></div>

    <div class="grid grid-cols-3 gap-3 px-40  mt-50 mx-auto max-w-7xl">
        <Card id="card-1" class="col-span-1" title="landing page" price="100.000" />
        <Card id="card-2" class="col-span-1" title="Gamma Simple" price="120.000" />
        <Card id="card-3" class="col-span-1" title="Gamma tienda" price="180.000" />

    </div>
</template>

<script setup>
import Card from './card.vue'

</script>

<style lang="scss" scoped></style>