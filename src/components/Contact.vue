<template>
    <section class="section container contact" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title" class="title">Contact Us</h2>
        <p class="contact__description">Get in touch with me via email and I'll reply as fast as I can to your enquiry!
        </p>
        <!-- <form action="https://api.web3forms.com/submit" method="POST" aria-label="Contact Form" netlify> -->
        <form method="POST" target="_blank" action="https://tubular-moxie-46f1e2.netlify.app/" aria-label="Contact Form"
            netlify data-netlify="true">
            <!-- <input type="hidden" name="access_key" value="7364cf4f-a2d8-4e74-87fd-8f078b9b10a4"> -->
            <label for="name">Name</label>
            <input class="contact__name" type="text" name="name" id="name" required aria-required="true">
            <label for="email">Email</label>
            <input class="contact__email" type="email" name="email" id="email" required aria-required="true">
            <label for="message">Message</label>
            <textarea class="contact__message" name="message" id="message" required aria-required="true"></textarea>
            <!-- <div class="h-captcha" data-captcha="true" aria-label="hCaptcha Spam Protection"></div> -->
            <button class="contact__submit" type="submit">Submit</button>
        </form>
    </section>

</template>

<script setup>

</script>

<style scoped>
* {
    font-family: 'Switzer', sans-serif;
}

.contact {
    width: 100%;
    max-width: 800px;
    margin: auto;
    text-align: center;
}

.contact__description {
    font-size: calc(var(--fs-base) * 0.95);
    font-weight: 500;
    line-height: 1.6;
    max-width: 25ch;
    margin-inline: auto;
    color: #4d4d4d;
    letter-spacing: 0.2px;
    margin-bottom: 2rem
}

.contact__name {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.contact__email {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.contact__message {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    height: 200px;
}

.contact__submit {
    background-color: rgb(219, 104, 3);
    padding: 0.5rem 1.1rem;
    border-radius: 3px;
    font-weight: bold;
    color: #fff;
    display: block;
    font-size: var(--fs-sm);
    margin-inline: auto;
    transition: all 0.3s ease;
}

textarea {
    resize: none;
}

form {
    max-width: 800px;
}

@media (min-width: 768px) {

    .contact__description {
        max-width: 40ch;
    }
}
</style>