<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <nav class="absolute inset-0 w-3/4 md:w-1/3 mt-10 mx-auto border rounded-xl border-white h-fit text-center md:text-3xl p-5 z-10">
      <RouterLink to="/showcase">Showcase</RouterLink>
      <RouterLink class="mx-8" to="/">Home</RouterLink>
      <RouterLink to="/schedule">Schedule</RouterLink>
    </nav>
    
    <div id="particles-js" class="flex-grow relative">
    </div>
    <RouterView />
  </div>
</template>

<style>
#particles-js {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

canvas {
  display: block;
  vertical-align: bottom;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
