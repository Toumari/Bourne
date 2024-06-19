<template>
    <div class="wrapper" id="casestudy">
        <section class="container case-study">
            <div class="case-text">
                <p class="testimonial-small">Amazon Explorer</p>
                <h2 class="title">Jasmine Smith</h2>
                <img class="img img1 img-mob" src="@/assets/jungle3.webp" alt="">
                <h3 class="case-study-desc">
                    Follow the exciting story of Jasmine as she travels to the deepest parts of the Amazon
                </h3>
                <p class="case-study-para">
                    We follow the story of Jasmine Smith, a pioneer in the world of exploration. Jasmine was born in the
                    City of Talin. She grew up exploring the forests of Estonia and quickly became one of the best
                    explorers in the world. Jasmine is known for her daring expeditions to some of the world's most
                    remote locations. In this case study, we follow Jasmine as she travels to the deepest parts of the
                    Amazon. We'll see how Jasmine prepares for the challenge.
                </p>
                <router-link to="case-study/2" class="learn-more-btn">Learn More</router-link>
            </div>
            <div class="grid-container">
                <div class="img-grid">
                    <div class="img img1"></div>
                    <div class="img img2"></div>
                    <div class="img img3"></div>
                    <div class="img img4"></div>
                </div>
            </div>



        </section>
    </div>
</template>

<script setup>




</script>

<style scoped>
.img {
    border-radius: 8px;
}

.testimonial-small {
    font-size: calc(1rem + 0.2vw);
    color: rgb(219, 104, 3);
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: center;
}

.learn-more-btn {
    border-bottom: 2px solid rgb(219, 104, 3);
    display: block;
    width: fit-content;
    margin: 0 auto;
    font-size: calc(1.rem + 0.1vw);
    font-weight: bold;
    color: rgb(219, 104, 3);
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
}

.img-grid {
    display: none;
}

.img-mob {
    height: 400px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 2rem;
}

.wrapper {
    color: #333;
}

.title {
    color: #333;
    margin-bottom: .75rem;
}

.case-study-desc {
    font-size: calc(1.125rem + 0.2vw);
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: 600;
}

.case-study-para {
    font-size: 1rem;
    text-align: center;
    line-height: 2;
    margin-bottom: 2rem;
    font-weight: 300;
}

.main-img {
    height: 300px;
    width: 100%;
    object-fit: cover;
}

/* xs */
/* @media (min-width: 475px) {} */

/* sm */
/* @media (min-width: 640px) {} */

/* md */
/* @media (min-width: 768px) {} */

/* lg */
@media (min-width: 1024px) {

    .testimonial-small {

        text-align: left;
    }

    .learn-more-btn {
        margin: unset;
    }

    .title {
        text-align: left;
        font-size: calc(3rem + 0.2vw);
    }

    .case-study-desc {

        text-align: left;
        max-width: 40ch;
    }

    .case-study-para {
        font-size: calc(0.75rem + 0.2vw);
        text-align: left;
        max-width: 50ch;
    }

    .case-study {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        gap: 4rem;
        align-items: center;
    }

    .case-text {
        max-width: 70ch;
    }


    .img-mob {
        display: none;
    }

    .img-grid {
        display: grid;
        grid-template-columns: repeat(3, 150px);
        grid-template-rows: repeat(3, minmax(200px, 1fr));
        justify-items: center;
        align-items: center;
        gap: 1rem;
    }



    .img1 {
        height: 100%;
        width: 100%;
        background-image: url("@/assets/jungle3.avif");
        background-size: cover;
        background-position: center;
        grid-column: 2 / 4;
        grid-row: 1 / 3;
    }

    .img2 {
        height: 100%;
        width: 100%;
        background-image: url("@/assets/jungle2.avif");
        background-size: cover;
        background-position: center;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }

    .img3 {
        height: 100%;
        width: 100%;
        background-image: url("@/assets/jungle1.avif");
        background-size: cover;
        background-position: center;

        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }

    .img4 {
        width: 100%;
        background-image: url("@/assets/jungle4.avif");
        background-size: cover;
        background-position: center;

        grid-column: 1 / 4;
        grid-row: 3 / 4;
        height: 100%;
    }
}

/* xl */
@media (min-width: 1280px) {

    .img-grid {
        grid-template-columns: repeat(3, 200px);
    }
}

/* xxl */
@media (min-width: 1536px) {

    .img-grid {
        grid-template-columns: repeat(3, 250px);
    }
}
</style>