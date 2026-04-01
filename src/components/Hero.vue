<script setup lang="ts">
import { shortenUrl } from '@/services/shortener.ts';
import { ref } from 'vue';
import UrlResult from './UrlResult.vue';
const oldUrl = ref('');
const newUrl = ref('');
const errorMsg = ref('');
const isLoading = ref(false);

const cleanUrl = (old: string) => {
    let cleanUrl = old.trim();
    if (!/^https?:\/\//i.test(cleanUrl)) {
        cleanUrl = `https://${cleanUrl}`
    }
    return cleanUrl;
}
async function getUrl(long: string) {
    try {
        isLoading.value = true;
        errorMsg.value = '';
        newUrl.value = '';
        const cleanedUrl = cleanUrl(long)
        newUrl.value = await shortenUrl(cleanedUrl)
    } catch (e: any) {
        errorMsg.value = e.message;
    } finally {
        isLoading.value = false
    }
}

</script>

<template>
    <main>
        <h1>Shorty - Your fast URL shortener</h1>
        <h3>Paste your long link and get a shorted one in seconds.</h3>
        <form @input="errorMsg = ''" @submit.prevent="getUrl(oldUrl)">
            <input v-model="oldUrl" type="text" placeholder="Type your URL...">
            <button v-if="!isLoading" type="submit" class="submitBtn" aria-label="Shorten Url">
                <span id="btnText">Shorten</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 640 640">
                    <path fill="#f8fafc"
                        d="m256 320l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5c-61.9 0-112 50.1-112 112s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5l282.7-282.7c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L320 256l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5c0-61.9-50.1-112-112-112S64 114.1 64 176s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5zm97.9 97.9l106.9 106.9c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L417.9 353.9zM128 176c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48m48 240c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48" />
                </svg>
            </button>
            <button v-if="isLoading" class="loadingBtn" type="submit" aria-label="Shorten Url">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="#f8fafc"
                        d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                        opacity=".5" />
                    <path fill="#f8fafc" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
                        <animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite"
                            to="360 12 12" type="rotate" />
                    </path>
                </svg>
            </button>
        </form>
        <UrlResult :newUrl="newUrl" :errorMsg="errorMsg" />
    </main>

</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    padding: 2rem;
}

form {
    display: flex;
    gap: .5rem;
}

input {
    color: var(--text-main);
    font-family: var(--font-primary);
    border: solid 2px var(--primary);
    border-radius: var(--radius);
    padding: .25rem .5rem;
    padding-right: 1rem;
    background-color: transparent;
    outline: none;
    transition: var(--transition);
    width: 300px;
}

input::placeholder {
    color: var(--text-muted);
    font-family: var(--font-primary);
}

input:hover {
    border: solid 2px var(--primary-hover);
}

input:active,
input:focus {
    border: solid 2px var(--accent);
}

button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .25rem;
    font-family: var(--font-primary);
    padding: .5rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    color: var(--text-main);
    border: solid 2px transparent;
    background-color: var(--primary);
    pointer-events: all;
}

button:hover {
    background-color: var(--primary-hover);
    transform: translateY(-2px);
    filter: brightness(1.2);
}

button svg {
    color: var(--text-main);
}

button.loadingBtn {
    pointer-events: none;
    transition: var(--transition);
}

#btnText {
    display: none;
}

@media(min-width: 800px) {
    #btnText {
        display: inline;
    }

    input {
        width: 500px
    }
}
</style>
