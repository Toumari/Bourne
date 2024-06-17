<template>
    <div @click="toggleActive" class="accordion-menu" ref="accordionMenu">
        <div class="accordion-header">
            <h4>{{ title }}</h4>
            <span v-if="isActive">-</span>
            <span v-else>+</span>
        </div>


        <div class="accordion-content" :class="{ 'active': isActive }" ref="accordionContent">
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script setup>

import { gsap } from 'gsap'

const accordionMenu = ref(null);
const accordionContent = ref(null);

const props = defineProps({
    title: String,
    content: String
})

const isActive = ref(false);

const toggleActive = () => {
    isActive.value = !isActive.value
    gsap.to(accordionContent.value, {
        duration: 0.5,
        height: isActive.value ? 'auto' : 0
    })
}

import { onMounted, ref } from 'vue'



onMounted(() => {
})


</script>

<style scoped>
.accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    gap: 1rem;

}

.accordion-menu {
    border-radius: 8px;
    margin-inline: auto;
    margin-bottom: 1rem;
    font-size: calc(0.8rem + 0.1vw);
    background: rgb(219, 104, 3);
    color: white;
    padding: 15px;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26);
}


h4 {
    cursor: pointer;
}

.accordion-content {
    height: 0;
    display: block;
    transform-origin: top;
    transition: height 0.1s linear;
    overflow: hidden;
    font-size: calc(0.9rem + 0.1vw);
}

p {
    margin: 10px;
}
</style>