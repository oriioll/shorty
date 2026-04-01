<script setup lang="ts">
import Hero from './components/Hero.vue';
import ShortyFooter from './components/ShortyFooter.vue';

</script>

<template>
  <div class="app-layout">
    <header></header>
    <Hero />
    <ShortyFooter />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
}

header {
  height: 100px;
}
</style>
