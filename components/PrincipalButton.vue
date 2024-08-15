<script setup lang="ts">
const props = defineProps({
    label: String,
})
</script>

<template>
    <button class="main-button" :title="props.label">{{ props.label }}</button>
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
}

.main-button:hover {
    background-color: #38464D;
    transition: .2s
}
</style>