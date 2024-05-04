<script setup>


</script>
<template>

    <div class="grid grid-cols-2 p-5 mx-auto max-w-7xl my-10">

        <div class="col-span-1 flex flex-col gap-28">
            <h2 class="text-4xl font-bold ">Nuestros especialistas en diseño web están esperando tu mensaje</h2>
            <div class="flex flex-col gap-3">
                <h3 class="font-bold">Ubicacion</h3>
                <p>Buenos Aires, Argentina</p>
            </div>
            <div class="flex flex-col gap-3">
                <h4 class="font-bold">Contactanos</h4>
                <div class="flex flex-col">
                    <a href="#">1164946486</a>
                    <a href="#">mlmh3113@hotmail.com</a>
                </div>

            </div>
        </div>
        <div class="col-span-1">
            <div class="flex flex-col">
                <div>
                    <h1 class="text-4xl font-bold ">Contacto</h1>
                </div>
                <form class="flex flex-col py-5">
                    <label class="font-bold" for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required>

                    <label class="font-bold" for="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" required>

                    <label class="font-bold" for="email">Email</label>
                    <input type="email" id="email" name="email" required>

                    <label class="font-bold" for="telefono">Telefono</label>
                    <input type="tel" id="telefono" name="telefono">

                    <label class="font-bold" for="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" rows="5" cols="30" required></textarea>

                    <button class="bg-red-500 text-white p-2 rounded-lg my-5" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    </div>
</template>
