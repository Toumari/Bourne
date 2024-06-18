<script setup>

import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Offering from '@/components/Offering.vue'
import CaseStudy from '@/components/CaseStudy.vue'
import CaseStudyAlternate from '@/components/CaseStudyAlternate.vue'
import AboutUs from '@/components/AboutUs.vue'
import FAQ from '@/components/FAQ.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import Lenis from 'lenis'


import { onMounted, ref } from 'vue'
import { watchEffect } from 'vue'

onMounted(() => {
  console.log("navigated To Home")
})

// const lenis = new Lenis()

// watchEffect(() => {
//   function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
//   }

//   requestAnimationFrame(raf)
// })

</script>

<template>
  <main>
    <div class="top-section">
      <Header />
      <Hero />
    </div>
    <AboutUs />
    <Offering />
    <CaseStudy />
    <CaseStudyAlternate />
    <FAQ />
    <Contact />


    <Footer />

  </main>

</template>

<style scoped>
.top-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(248, 249, 98, 0) 25%, rgba(35, 32, 32, 1) 93%), url("../assets/mountain5.jpg");
  background-position: center;
  background-size: cover;
  height: 100%;
}

html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}







html,
body,
section {
  scroll-behavior: smooth;
}
</style>