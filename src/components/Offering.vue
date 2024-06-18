<template>
    <div class="wrapper">
        <section class="offering container">
            <h2 class="title">Latest Offers</h2>
            <div class="cards">
                <Card class="card" title="Mountain Adventures" description="Embark on the journey of a life time on one of our exciting Mountain adventures. 
                Experience the beauty of the mountains and the thrill of the climb." image="./images/mountain.avif"
                    :isOnSale="true" rating="4.9" />
                <Card class="card" title="Jungle Adventures"
                    description="Embark on a life-changing expedition into the heart of the wild. Explore hidden temples, encounter exotic wildlife, and discover the secrets of the jungle."
                    image="./images/jungle.avif" rating="4.8" />
                <Card class="card" title="Underwater Adventures"
                    description="Descend beneath the waves on an unforgettable underwater adventure. Explore vibrant coral reefs, encounter majestic marine life, and discover the hidden wonders of the deep."
                    image="./images/underwater.avif" rating="4.9" />
            </div>
        </section>
    </div>
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