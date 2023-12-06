<template>
    <div class="palestine-banner" :class="{ 'fade-slide': showBanner }">
        <h1>🇵🇸 Support Palestine 🇵🇸</h1>
        <p>Stand in solidarity with the people of Palestine.</p>
        <button @click="donate">Donate Now</button>
        <a @click="close" @keydown="close" role="button" tabindex="0">Close</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showBanner: false
        };
    },
    methods: {
        donate() {
            window.open("https://donate.unrwa.org/");
        },
        close() {
            this.showBanner = false;
        }
    },
    mounted() {
        setTimeout(() => {
            this.showBanner = true;
        }, 100);
    }
}
</script>

<style scoped>
.palestine-banner {
    background: linear-gradient(
        to right bottom,
        green, white, white, red
    );
    opacity: 0.9;
    padding-top: 1em;
    padding-bottom: 1em;
    text-align: center;
    transform: translateY(150%);
    transition: opacity 0.5s, transform 0.5s;
}

.fade-slide {
    opacity: 1;
    transform: translateY(0);
}

h1 {
    color: #00cc1b;
    font-size: 24px;
}

p {
    color: #000000;
    font-size: 16px;
    margin-bottom: 20px;
}

a {
    color: #000000;
    text-decoration: underline;
    padding-left: 1em;
}

a:hover {
    color: #292929;
    text-decoration: underline;
}

button {
    background-color: #cc9600;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 700;
}
</style>
