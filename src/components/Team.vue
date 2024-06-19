<template>
    <div class="wrapper">


        <section class="team container">
            <h2 class="title">Meet the team</h2>
            <div class="cards">
                <div class="card">
                    <div class="card-img">
                        <img src="@/assets/me.jpg" alt="">
                    </div>

                    <h2 class="card-title">Jack Williams</h2>
                    <small class="card-small">Lead Developer</small>
                    <h3 class="card-about">About Me</h3>
                    <p class="card-desc">With a background in Testing, I aim to provide the ultimate experience to users
                    </p>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="@/assets/jungle1.avif" alt="">
                    </div>

                    <h2 class="card-title">Bob Smith</h2>
                    <small class="card-small">Lead UI/UX</small>
                    <h3 class="card-about">About Me</h3>
                    <p class="card-desc">Music lover, known to design and implement the best UI in town</p>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="@/assets/mountain5.avif" alt="">
                    </div>

                    <h2 class="card-title">Clive Jenson</h2>
                    <small class="card-small">Software Engineer</small>
                    <h3 class="card-about">About Me</h3>
                    <p class="card-desc">Most famous for finding 10 bugs in 10 minutes in our app.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped>
.wrapper {
    background-color: #232020;
    color: #fff;
}

.cards {
    margin-inline: auto;
    margin-top: 3em;
    gap: 2em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}

.card {
    max-width: 35em;
    min-height: 25em;
    position: relative;
    margin: 3em 1em 1em 1em;
    background: #332f2f;
    padding: 2em;
    text-align: center;

    box-shadow: 0 0 0.5em rgba(66, 66, 66, 0.9);
    border: 1px solid #555;
    /* backdrop-filter: blur(4px); */
}

.card-img {
    width: 9em;
    height: 9em;
    margin: -4.5em auto 0 auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0 0.8em #232020;
    background: linear-gradient(rgb(219, 104, 3), rgb(219, 104, 3));

}

.card-img img {
    width: 90%;
    height: 90%;
    border-radius: inherit;
    object-fit: cover;
}

.card small {
    margin: 1em 0 0 0;
    font-size: 1em;
    color: #e09620;
    font-weight: 300;
}

.card h2 {
    margin: 1em 0 0 0;
    font-size: 2em;
    font-weight: 700;
}

.card h3 {
    margin: 2em 0 0.25em 0;
    font-size: 1.5em;
}

.card p {
    margin: 0em 0 0 0;
    font-size: 1em;
    max-width: 20em;
}
</style>