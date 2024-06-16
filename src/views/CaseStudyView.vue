<template>
    <div class="top-section">
        <Header />
        <h1>Case Study</h1>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
</script>

<style scoped>
.top-section {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #333;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
}
</style>