<script setup lang="ts">
import { ref } from 'vue';
defineProps<{
    newUrl: string
    errorMsg: string
}>()

let copied = ref(false)

/**
 * Function that copies a text to the clipboard and changes a reactive variable to change the svg for 2 seconds
 * @param txt - the txt you want to copy
 * @author Oriol Plazas León
 * @since 27/02/2026
 * @see navigator.clipboard.writeText()
 * @see changeSvg()
 */
function cpText(txt: string): void {
    navigator.clipboard.writeText(txt).then(changeSvg)
}


/**
 * Function that changes a reactive variable to change the svg for 2 seconds
 * @author Oriol Plazas León
 * @since 27/02/2026
 * @see cpText()
 */
const changeSvg = (): void => {
    copied.value = true;
    setTimeout(() => {
        copied.value = false;
    }, 2000);
}
</script>

<template>
    <div :class="{ 'copied': copied, 'newUrlDiv': !copied }" v-if="newUrl">
        <a :class="{ 'textCopied': copied, 'newUrl': !copied }" :href="newUrl" target="_blank">{{ newUrl }}</a>
        <span :class="{ 'barCopied': copied, 'sepBar': !copied }"></span>
        <svg v-if="!copied" class="copy" @click="cpText(newUrl)" xmlns="http://www.w3.org/2000/svg" width="20"
            height="20" viewBox="0 0 24 24">
            <g fill="none" stroke="#22d3ee" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path
                    d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z" />
                <path d="M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1" />
            </g>
        </svg>
        <svg v-if="copied" class="successSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            width="20" height="20" stroke="var(--success)" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
        </svg>
    </div>
    <p id="errorMsg" v-if="errorMsg">{{ errorMsg }}</p>
</template>

<style scoped>
#errorMsg {
    color: var(--error);
    font-weight: 600;
    padding: 1rem 0;
}

.newUrlDiv {
    padding: .5rem 0.75rem;
    border: solid 2px var(--accent);
    border-radius: var(--radius);
    background-color: var(--bg-surface);
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    transition: var(--transition);
}

.copied {
    padding: .5rem 0.75rem;
    border-radius: var(--radius);
    background-color: var(--bg-surface);
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    border: solid 2px var(--success);
    transition: var(--transition);
}

.newUrl {
    color: var(--accent);
    font-weight: 500;
    text-decoration: underline;
    transition: var(--transition);
}

.textCopied {
    color: var(--success);
    font-weight: 500;
    text-decoration: underline;
    transition: var(--transition);
}

.sepBar {
    padding: 10px 0;
    border-left: solid 1px var(--accent);
    transition: var(--transition);
}

.barCopied {
    padding: 10px 0;
    border-left: solid 1px var(--success);
    transition: var(--transition);
}

.copy {
    cursor: pointer;
    transition: var(--transition);
}

.copy:hover {
    filter: brightness(1.2);
}

@media (min-width: 800px) {
    .newUrlDiv {
        padding: 0.75rem 1rem;
        width: 600px;
        justify-content: space-between;
    }

    .copied {
        padding: 0.75rem 1rem;
        width: 600px;
        justify-content: space-between;
    }

    .sepBar {
        padding: 10px 0;
        border-left: none;
    }

    .barCopied {
        padding: 10px 0;
        border-left: none;
    }
}
</style>
