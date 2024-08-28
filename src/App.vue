<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <nav class="absolute inset-0 w-3/4 md:w-1/3 mt-10 mx-auto border rounded-xl border-white font-thin h-fit text-center text-xs md:text-2xl p-5 z-10 text-neoncyan-light">
  <!-- <RouterLink 
    to="/aku"
    class=" hover:text-3xl hover:text-neonpurple-light mx-8"
    :class="{ 'text-neonpurple-soft font-thin md:text-3xl': $route.path === '/aku', 'text-neoncyan-light': $route.path !== '/showcase' }">
    AKU
  </RouterLink> -->
  <RouterLink 
    to="/showcase"
    class=" md:hover:text-3xl hover:text-neonpurple-light"
    :class="{ 'text-neonpurple-soft font-thin md:text-3xl': $route.path === '/showcase', 'text-neoncyan-light': $route.path !== '/showcase' }">
    Showcase
  </RouterLink>
  <RouterLink 
    to="/" 
    class="mx-8 md:hover:text-3xl hover:text-neonpurple-light"
    :class="{ 'text-neonpurple-soft font-thin md:text-3xl': $route.path === '/', 'text-neoncyan-light': $route.path !== '/' }">
    Home
  </RouterLink>
  <RouterLink 
    to="/schedule"
    class=" md:hover:text-3xl hover:text-neonpurple-light"
    :class="{ 'text-neonpurple-soft font-thin md:text-3xl': $route.path === '/schedule', 'text-neoncyan-light': $route.path !== '/schedule' }">
    Schedule
  </RouterLink>
  <!-- <RouterLink 
    to="/srk"
    class=" hover:text-3xl hover:text-neonpurple-light mx-8"
    :class="{ 'text-neonpurple-soft font-thin md:text-3xl': $route.path === '/srk', 'text-neoncyan-light': $route.path !== '/schedule' }">
    SRK
  </RouterLink> -->
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
  /* vertical-align: bottom; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
