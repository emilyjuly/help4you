<script setup lang="ts">
const props = defineProps({
    label: String,
})
</script>

<template>    
        <a class="link" href="https://wa.me/5522998388466?text=Ol%C3%A1%2C%20quero%20participar%20do%20projeto%20Help%204%20you!" target="_blank">
            <button class="main-button" :title="props.label">
                {{ props.label }}
            </button>
        </a>
</template>

<style scoped>
.main-button {
    background-color: #263238;
    font-family: "Roboto", sans-serif;
    transition: .2s;
    font-size: 16px;
    font-weight: 600;
    color: white;
    border: none;
    padding: 15px 70px;
    cursor: pointer;
    border-radius: 10px;
    width: 100%;
}

.main-button:hover {
    background-color: #38464D;
    transition: .2s
}

.link {
    color: white;
    text-decoration: none;
    width: 100%;
}
</style>