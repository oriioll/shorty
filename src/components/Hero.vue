<script setup lang="ts">
import { shortenUrl } from '@/services/shortener.ts';
import { ref } from 'vue';
const oldUrl = ref('')
const newUrl = ref('')
const errorMsg = ref('')

const cleanUrl = (old: string) => {
    let cleanUrl = old.trim();
    if (!/^https?:\/\//i.test(cleanUrl)) {
        cleanUrl = `https://${cleanUrl}`
    }
    return cleanUrl;
}
async function getUrl(long: string) {
    try {
        const cleanedUrl = cleanUrl(long)
        newUrl.value = await shortenUrl(cleanedUrl)
    } catch (e: any) {
        errorMsg.value = e.message;
    }
}

</script>

<template>
    <h1>Shorty - Your fast URL shortener</h1>
    <aside>
        <input v-model="oldUrl" type="text" placeholder="Type your URL...">
    </aside>
</template>

<style scoped></style>
