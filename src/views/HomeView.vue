<script setup>

import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import AboutUs from '@/components/AboutUs.vue'
import Offering from '@/components/Offering.vue'
import CaseStudy from '@/components/CaseStudy.vue'
import CaseStudyAlternate from '@/components/CaseStudyAlternate.vue'
import Team from '@/components/Team.vue'
import FAQ from '@/components/FAQ.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

import { onBeforeMount } from 'vue'




</script>

<template>

  <Hero />
  <AboutUs />
  <Offering />
  <CaseStudy />
  <CaseStudyAlternate />
  <Team />
  <FAQ />
  <Contact />
  <Footer />
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