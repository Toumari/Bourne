<template>
    <div class="wrapper">
        <section class="container">
            <h4 class="title">FAQ's</h4>
            <div v-for="(item, index ) in data" :key="index" class="accordions">
                <Accordian :title="item.title" :content="item.content" class="accordion" />
            </div>
        </section>
    </div>
</template>

<script setup>



import Accordian from '@/components/Accordian.vue'

const data = ref([
    {
        title: 'What do we offer?',
        content: 'We offer a wide range of adventures and experiences. From hiking to camping, we have it all.'
    },
    {
        title: 'How do I book a trip?',
        content: 'You can book a trip by visiting our website and selecting the trip you want to go on.'
    },
    {
        title: 'Do you offer group discounts?',
        content: 'Yes, we offer group discounts for groups of 10 or more. Please contact us for more information.'
    }
])

import { ref } from 'vue'
</script>

<style scoped>
.wrapper {}

.accordions:last-child .accordion-menu {
    margin-bottom: 0;
}
</style>