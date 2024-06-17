<template>
    <div class="wrapper" id="about">
        <section class="about-us container">
            <h2 class="about-para">The world was made for adventurers, from mountain peaks to jungle valleys. There's so
                much to see, <br /> <span class="empha">That's where we come in.</span> </h2>
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

        gsap.from(".about-para", {
            scrollTrigger: {
                trigger: ".about-para",
                start: "top 100%",
                end: "bottom 70%",
                scrub: 1,
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 100,
            duration: 1,
        });

    });


});

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

.wrapper {
    background-color: #232020;
}

.about-us {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10vh;
}

.about-para {

    font-size: calc(1.25remrem + 0.2vw);
    text-align: center;
    line-height: 1.5;
    font-weight: 700;
    color: #a8a7a7;
}

.empha {
    color: #fff;
    font-weight: 700;
    border-bottom: 2px solid rgb(219, 104, 3);
}

/* xs */
/* @media (min-width: 475px) {} */

/* sm */
/* @media (min-width: 640px) {} */

/* md */
@media (min-width: 768px) {

    .about-us {

        min-height: 40vh;
    }

    .about-para {
        font-size: calc(2.25rem + 0.2vw);
        max-width: 50ch;
    }
}

/* lg */
/* @media (min-width: 1024px) {} */

/* xl */
/* @media (min-width: 1280px) {} */

/* xxl */
/* @media (min-width: 1536px) {} */
</style>