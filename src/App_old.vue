<script setup lang="ts">
import { shortenUrl } from '@/services/shortener.ts';
import { ref } from 'vue';
const nombre = ref('')
const newUrl = ref('')
const errorMsg = ref('')

async function getUrl(long: string) {
  try {
    newUrl.value = await shortenUrl(long)
  } catch (e: any) {
    errorMsg.value = e.message;
  }
}
</script>

<template>
  <h1>shortener</h1>
  <input v-model="nombre" type="text" placeholder="Escribe algo" />
  <button @click="getUrl(nombre)">Get tiny URL</button>
  <p v-if="newUrl">Nueva URL: <a href={{ newUrl }}>{{ newUrl }}</a></p>
  <p v-if="errorMsg">{{ errorMsg }}</p>

</template>

<style scoped></style>
