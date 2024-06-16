<template>
    <section class="offering container">
        <h2 class="title">What we offer</h2>
        <div class="cards">
            <Card class="card" title="Mountain Adventures" description="Embark on the journey of a life time on one of our exciting Mountain adventures. 
                Experience the beauty of the mountains and the thrill of the climb." image="./images/mountain.jpg"
                isOnSale="true" rating="4.9" />
            <Card class="card" title="Jungle Adventures" description="Embark on the journey of a life time on one of our exciting Jungle adventures.
                Experience the beauty of the jungle and the thrill of the climb." image="./images/jungle.jpg"
                rating="4.8" />
            <Card class="card" title="Underwater Adventures" description="Embark on the journey of a life time on one of our exciting Underwater adventures.
                Experience the beauty of the underwater world and the thrill of the climb."
                image="./images/underwater.jpg" rating="4.9" />
        </div>
    </section>
</template>

<script setup>
import Card from "@/components/Card.vue";

</script>

<style scoped>
.card:last-of-type {
    margin-bottom: 0;
}

.cards:last-child {
    margin-bottom: 0;
}

/* xs */
/* @media (min-width: 475px) {} */

/* sm */
/* @media (min-width: 640px) {} */

/* md */
@media (min-width: 768px) {}

/* lg */
@media (min-width: 1024px) {
    .cards {
        display: flex;
        gap: 2rem;
        justify-content: space-between;
        align-items: stretch;
    }

    .card {
        margin-bottom: 0;
    }
}

/* xl */
/* @media (min-width: 1280px) {} */

/* xxl */
/* @media (min-width: 1536px) {} */
</style>