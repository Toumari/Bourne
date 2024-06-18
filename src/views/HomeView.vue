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


</script>

<template>
  <main>
    <Hero />
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
/* Hide slider image until page is fully loaded*/


Header {
  z-index: 1000;
}


.top-section {
  position: relative;

}


html,
body,
section {
  scroll-behavior: smooth;
}
</style>