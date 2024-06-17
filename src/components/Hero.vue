<template>
    <div class="hero__wrapper container">
        <section class="hero" role="region" aria-label="Hero Section" ref="hero">
            <div class="hero-content">
                <h1 class="hero-title">Bourne</h1>
                <p class="hero-text">
                    Adventure is a click away.
                </p>
                <a class="hero-btn" href="#about">Learn More </a>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


onMounted(() => {




    let ctx = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger);


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

    gsap.to(".hero-content", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top 20%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play none none none",
        },
        opacity: 1,
        y: -300,
        duration: 1,
    });



});

</script>

<style scoped>
@import url('https://api.fontshare.com/v2/css?f[]=switzer@300,700,900&display=swap');

section {
    padding-top: 0;
}

.hero {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 90vh;
}

.hero-title {
    font-size: calc(6rem + 1vw);
    font-weight: 900;
    color: ghostwhite;
    font-family: "Switzer", serif;
    text-align: left;
    line-height: 0.9
}

.hero-text {
    font-family: "Switzer", serif;
    font-size: calc(1.2rem + 0.2vw);
    color: ghostwhite;
    font-weight: 300;
    margin-bottom: 2rem;
    max-width: 65ch;
    line-height: 1.6;
}

.hero-btn {
    /* border-bottom: 2px solid #fca311; */
    background-color: rgba(219, 104, 3, 1);
    ;
    border: 2px solid rgb(219, 104, 3);
    padding: 0.5rem 1.5rem;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    width: fit-content;
    font-size: calc(1.15rem + 0.1vw);
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    margin-inline: auto;
}

.hero-btn:hover {
    background-color: rgba(219, 104, 3, 0.8);
    transition: all 0.3s ease;
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
        font-size: calc(7.5rem + 1vw);

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
