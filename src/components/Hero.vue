<template>
    <div class="hero__wrapper container">
        <section class="hero" role="region" aria-label="Hero Section" ref="hero">
            <div class="hero-content">
                <h1 class="hero-title">Bourne</h1>
                <p class="hero-text">
                    We are a team of experienced adventurers who have traveled the world. We are here to help you plan
                    your next adventure. Whether you are looking for a relaxing beach vacation or a challenging mountain
                    climb, we have you covered.
                </p>
                <a class="hero-btn" href="#about">Learn More <svg class="arrow" width="800px" height="800px" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#fca311" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg></a>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

import { gsap } from "gsap";

onMounted(() => {

    let ctx = gsap.context(() => {
        let tl = gsap.timeline();
        tl.from(".hero-title", {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: "power4.out",
        })
            .from(".hero-text", {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power4.out",
            }, "-=0.75")
            .from(".hero-btn", {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power4.out",
            }, "-=0.75");
    });

});

</script>

<style scoped>
@import url('https://api.fontshare.com/v2/css?f[]=switzer@300,700,900&display=swap');

.hero {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 90vh;
}

.hero-title {
    font-size: calc(5rem + 1vw);
    font-weight: 900;
    color: #fff;
    margin-bottom: 1rem;
    font-family: "Switzer", serif;
    text-align: left;
    opacity: 0.35;
}

.hero-text {
    font-family: "Switzer", serif;
    font-size: calc(1rem + 0.2vw);
    color: #fff;
    margin-bottom: 2rem;
    max-width: 65ch;
    line-height: 1.6;
}

.hero-btn {
    border-bottom: 2px solid #fca311;
    display: flex;
    align-items: center;
    width: fit-content;
    font-size: calc(1.25rem + 0.1vw);
    font-weight: bold;
    color: #fca311;
    cursor: pointer;
}

.hero-btn .arrow {
    margin-top: 0.2rem;
    margin-left: 1rem;
    transition: all 0.3s ease;
    height: 1.5rem;
    width: 1.5rem;
    display: inline-block;
}

/* xs */
/* @media (min-width: 475px) {} */

/* sm */
/* @media (min-width: 640px) {} */

/* md */
@media (min-width: 768px) {}

/* lg */
@media (min-width: 1024px) {
    .hero {
        height: 100vh;
        width: 100%;

    }

    .hero-title {
        font-size: calc(15rem + 1vw);
        opacity: 0.35;
    }

    .hero-text {
        font-size: calc(1.25rem + 0.2vw);
        max-width: 60ch;
    }
}

/* xl */
/* @media (min-width: 1280px) {} */

/* xxl */
/* @media (min-width: 1536px) {} */
</style>
