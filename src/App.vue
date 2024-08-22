<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

</script>

<script>

</script>

<template>
  <div class="relative h-screen w-full bg-black overflow-hidden">
    <div id="particles-js" class="w-full h-full"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <h1 class="text-white md:text-4xl text-2xl">Searching for the Stars<span id="dots"></span></h1> <br>
      <h1 class="text-white md:text-xl text-center">“Our explorer hasn’t discovered any stars yet. Please wait a moment.”</h1>
    </div>
  </div>
  <!-- <RouterView /> -->
</template>

<style>
/* #dots {
  display: inline-block;
  width: 1.5em; 
  text-align: left;
  overflow: hidden;
} */

@keyframes dotCycle {
  0% {
    content: "";
  }
  25% {
    content: ".";
  }
  50% {
    content: "..";
  }
  75% {
    content: "...";
  }
  100% {
    content: "";
  }
}

#dots::after {
  content: "";
  animation: dotCycle 1.5s steps(4, end) infinite;
}
</style>

