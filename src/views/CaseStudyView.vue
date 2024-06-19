<template>
    <div class="top-section">
        <Header />
        <section class="container case-study">
            <div class="title-container">
                <div class="title-content">
                    <h1 class="title">{{ title }}</h1>
                    <p class="description">{{ description }}</p>
                </div>
                <img class="img" :src=img alt="">
            </div>
            <div class="timeline">
                <div class="checkpoint" v-for="day in days" :key="day">
                    <div>
                        <h2 class="timeline-title">{{ day.title }}</h2>
                        <p>{{ day.description }}</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

import { useCaseStudyStore } from '@/stores/CaseStudyStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useCaseStudyStore();

console.log(route.params.id)

const caseStudy = store.caseStudies[parseInt(route.params.id) - 1];
const title = caseStudy.title;
const description = caseStudy.description;
const img = caseStudy.img;
const days = caseStudy.days;

console.log(days[0].title);

</script>

<style scoped>
.case-study {
    position: relative;
}

.back-btn {
    color: rgb(219, 104, 3);
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 5rem;
    display: block;
    text-decoration: none;

}

* {
    color: #fff;
}

.timeline {
    margin: 3em auto;
    max-width: 34.15em;
}

.timeline h2 {
    margin-bottom: 0.5em;
}

.checkpoint {
    max-width: 34em;
    padding-top: 2em;
    padding-bottom: 2em;
    position: relative;
}

.checkpoint div {
    border: 2px solid #888;
    border-radius: 1em;
    padding: 1.5em
}

.checkpoint p {
    line-height: 27px;
    color: #ccc;
}

.checkpoint:nth-child(odd) {
    border-left: 3px solid #888;
    padding-left: 3em;
    transform: translateX(17em)
}

.checkpoint:nth-child(even) {
    border-right: 3px solid #888;
    padding-right: 3em;
    transform: translateX(-16.85em)
}

.checkpoint:nth-child(odd)::before,
.checkpoint:nth-child(even)::before {
    content: '';
    background: #888;
    width: 3em;
    height: 3px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
}

.checkpoint:nth-child(odd)::before {
    left: 0
}

.checkpoint:nth-child(even)::before {
    right: 0
}

.checkpoint:nth-child(odd) div::before,
.checkpoint:nth-child(even) div::before {
    content: '';
    background: #fff;
    box-shadow: 0 0 0.5em #0d71fc;
    width: 0.8em;
    height: 0.8em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%
}

.checkpoint:nth-child(odd) div::before {
    left: -0.4em
}

.checkpoint:nth-child(even) div::before {
    right: -0.46em
}

.title .back-btn {
    color: rgb(219, 104, 3);
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 5rem;
    display: block;
    text-decoration: none;
}

.title {
    color: white;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
}

.description {
    color: white;
    font-size: 1.125rem;
    text-align: center;
    margin-top: 0.5rem;
    max-width: 40ch;
    font-weight: 300;
    margin: auto;
}

.img {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    object-fit: cover;

    opacity: .99;
    border-radius: 0.2em;
}

.top-section {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: #232020;
}

.title-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

@media screen and (max-width:1300px) {

    .img {
        display: none;
    }

    .title-container {
        flex-direction: column;
    }


    .timeline {
        width: 80vw;
    }

    .timeline .checkpoint {
        width: 100%;
        transform: none;
        padding-inline: 0;
        border: none;
    }

    .timeline .checkpoint::before {
        width: 3px;
        height: 4em;
        top: -2em;
        left: 50%;
        transform: translateX(-50%);
    }

    .timeline .checkpoint div::before {
        top: -0.4em;
        left: 50%;
        transform: translateX(-50%);
    }


}
</style>