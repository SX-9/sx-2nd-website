<script setup>
import "https://www.googletagmanager.com/gtag/js?id=G-73LS2TE653";
import AboutMe from "./components/AboutMe.vue";
import TopBar from "./components/TopBar.vue";
import Background from "./components/Background.vue";
import SideProjects from "./components/SideProjects.vue";
</script>

<script>

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-73LS2TE653");

let text = "hi, i make random stuff 4 fun!";
let delay = 150;
let i = 1;
const updateText = () => {
  document.getElementById("typing").innerText = text.substring(0, i);
  i++;
  if (i <= text.length) {
    setTimeout(updateText, delay);
  }
};
setTimeout(updateText, 1700);
</script>

<template>
  <Background />
  <TopBar name="Satr14" />
  <div class="center" id="home">
    <div class="container">
      <h1 id="page-title">
        <span id="typing"></span><span class="blink">|</span>
      </h1>
      <p style="text-align: center"><a href="#about">Scroll Down 👇</a></p>
      <p class="footer">&#169; {{ new Date().getFullYear() }} Satria - All Rights Reserved.</p>
    </div>
  </div>
  <AboutMe />
  <SideProjects />
</template>

<style>
body {
  background-color: #000913;
}
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
h1 {
  font-size: 2.5rem;
}
h1#page-title {
  text-align: center;
}
a:hover {
  color: white;
}

.blink {
  animation: blink 750ms infinite;
}

.footer {
  position: fixed;
  bottom: 1em;
  left: 0;
  width: 100%;
  text-align: center;
}

img {
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
