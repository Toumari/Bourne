<template>

    <div class="card">
        <div v-if="isOnSale" class="bookmark">Up to 30% off</div>
        <img class="card-img" :src="props.image" alt="">
        <div class="card-text">
            <div class="card-header">
                <h3 class="card-title">
                    {{ props.title }}
                </h3>
                <div class="rating">
                    <span class="star">★ </span>
                    <p>{{ props.rating }} </p>
                </div>
            </div>
            <p class="card-desc">{{ props.description }}</p>
            <a class="learn-more" href="">Learn More</a>
        </div>
    </div>

</template>

<script setup>

const props = defineProps({
    title: String,
    description: String,
    image: String,
    isOnSale: Boolean,
    rating: String
})

</script>

<style scoped>
.rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    font-size: 1.1rem;
}

.star {
    font-family: 'switzer', sans-serif;
    font-size: 1.1rem;
    display: inline;
    color: #fca311;
}

.card {
    position: relative;
    margin-bottom: 2rem;
    border-radius: 8px !important;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: repeat(1, 1fr);
    flex: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
}

.bookmark {
    font-family: 'switzer', sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(219, 104, 3);
    width: 150px;
    height: 30px;
    border-radius: 8px 0 8px 0;
    color: #fff;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
}

.card-text {
    background-color: #fff;
    color: #333;
    padding: 0rem 1rem 1rem 1rem;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    padding-inline: .5rem;
    padding-top: 1rem;
    margin-bottom: 1rem;
}

.card-desc {
    padding-inline: .5rem;
    margin-bottom: 2rem;
}

.card-img {
    width: 100%;
    min-height: 200px;
    max-height: 200px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    object-fit: cover;
    justify-self: flex-end;
}


.learn-more {
    border-bottom: 2px solid rgb(219, 104, 3);
    width: fit-content;
    margin-left: 0.5rem;
    margin-top: auto;
    font-size: calc(1.rem + 0.1vw);
    font-weight: bold;
    color: rgb(219, 104, 3);
    cursor: pointer;
    transition: all 0.3s ease;
}

/* xs */
/* @media (min-width: 475px) {} */

/* sm */
/* @media (min-width: 640px) {} */

/* md */
@media (min-width: 768px) {}

/* lg */
/* @media (min-width: 1024px) {} */

/* xl */
/* @media (min-width: 1280px) {} */

/* xxl */
/* @media (min-width: 1536px) {} */
</style>