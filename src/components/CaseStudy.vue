<template>
    <div class="wrapper" id="casestudy">


        <section class="container case-study">
            <div class="case-text">
                <h1 class="title">Case Study</h1>
                <img class="img img1 img-mob" src="@/assets/skii1.jpg" alt="">
                <h2 class="case-study-desc">Follow the story of reknowned Pioneer Johaan Svornikan</h2>
                <p class="case-study-para">
                    We follow the story of Johaan Svornikan, a pioneer in the world of skiing. Johaan was born in the
                    small town of Voss, Norway. He grew up skiing the mountains of Norway and quickly became one of the
                    best skiers in the world. Johaan was known for his daring jumps and his ability to ski down the
                    steepest mountains with ease.
                </p>
                <router-link :to="{ name: 'casestudy' }" class="learn-more-btn">Learn More</router-link>
            </div>
            <div class="grid-container">
                <div class="img-grid">
                    <div class="img1"></div>
                    <div class="img2"></div>
                    <div class="img3"></div>
                    <div class="img4"></div>
                </div>
            </div>



        </section>
    </div>
</template>

<script setup>




</script>

<style scoped>
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
    background-color: #232020;
    color: #fff;
}

.title {
    color: #fff;

}

.case-study-desc {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 2rem;
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

    .learn-more-btn {
        margin: unset;
    }

    .title {
        text-align: left;
        font-size: calc(3rem + 0.2vw);
    }

    .case-study-desc {
        font-size: calc(1.2rem + 0.2vw);
        text-align: left;
        max-width: 30ch;
    }

    .case-study-para {
        font-size: calc(0.75rem + 0.2vw);
        text-align: left;
        max-width: 50ch;
    }

    .case-study {
        display: flex;
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
        background-image: url("@/assets/skii1.jpg");
        background-size: cover;

        grid-column: 2 / 4;
        grid-row: 1 / 4;
    }

    .img2 {
        height: 100%;
        width: 100%;
        background-image: url("@/assets/skii2.jpg");
        background-size: cover;
        background-position: center;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }

    .img3 {
        height: 100%;
        width: 100%;
        background-image: url("@/assets/skii3.jpg");
        background-size: cover;
        background-position: center;

        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }

    .img4 {
        width: 100%;
        background-image: url("@/assets/skii4.jpg");
        background-size: cover;
        background-position: center;

        grid-column: 1 / 2;
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