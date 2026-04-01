<script setup lang="ts">

</script>

<template>
    <footer>
        <a href="https://github.com/oriioll/shorty" target="_blank">
            <span>GitHub Repo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="var(--primary)"
                    d="M12 2.249c-5.484 0-10 4.452-10 10c0 4.387 2.871 8.13 6.871 9.484c.516.097.677-.226.677-.452s0-.87-.032-1.742c-2.774.645-3.355-1.355-3.355-1.355c-.451-1.129-1.129-1.451-1.129-1.451c-.903-.645.033-.645.033-.645c1 .032 1.548 1.032 1.548 1.032c.87 1.548 2.355 1.097 2.903.806c.097-.645.355-1.096.645-1.354c-2.193-.226-4.548-1.097-4.548-4.904c0-1.096.42-1.967 1.032-2.645c-.097-.226-.451-1.258.097-2.645c0 0 .87-.258 2.774 1.032a9.3 9.3 0 0 1 2.516-.355c.871 0 1.742.097 2.516.355c1.904-1.258 2.742-1.032 2.742-1.032c.549 1.355.226 2.42.097 2.645c.645.678 1.032 1.58 1.032 2.645c0 3.807-2.355 4.678-4.548 4.904c.355.322.677.967.677 1.87c0 1.355-.032 2.42-.032 2.742c0 .259.194.549.678.452C19.129 20.314 22 16.604 22 12.185c-.032-5.484-4.516-9.936-10-9.936" />
            </svg>
        </a>
        <a href="https://tinyurl.com/app/dev" target="_blank">
            <span>TinyURL API</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                <path fill="none" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="4"
                    d="m37 22l-3 3l-11-11l3-3c1.5-1.5 7-4 11 0s1.5 9.5 0 11m5-16l-5 5M11 26l3-3l11 11l-3 3c-1.5 1.5-7 4-11 0s-1.5-9.5 0-11m12 6l4-4M6 42l5-5m5-12l4-4" />
            </svg>
        </a>
    </footer>
</template>

<style scoped>
footer {
    border-top: solid 2px var(--primary);
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
}

a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    text-decoration: none;
}

a span {
    color: var(--text-muted);
    text-decoration: none;
    transition: var(--transition);
}

a svg {
    transition: var(--transition);
}

a:hover span {
    color: var(--accent);
}

a:hover svg {
    fill: var(--accent);
}

a:hover svg path {
    stroke: var(--accent);
}
</style>
