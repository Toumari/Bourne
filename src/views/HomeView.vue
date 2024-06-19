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

import { onBeforeMount } from 'vue'




</script>

<template>
  <KeepAlive>
    <main class="main">
      <Hero />
      <AboutUs />
      <Offering />
      <CaseStudy />
      <CaseStudyAlternate />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  </KeepAlive>
</template>

<style scoped>
/* Hide slider image until page is fully loaded*/

html,
body {
  overscroll-behavior-y: none;
}


html,
body,
section {
  scroll-behavior: smooth;
}
</style>