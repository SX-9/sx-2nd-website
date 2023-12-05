<script setup>
import "https://www.googletagmanager.com/gtag/js?id=G-73LS2TE653";
import AboutMe from "./components/AboutMe.vue";
import TopBar from "./components/TopBar.vue";
import Background from "./components/Background.vue";
import SideProjects from "./components/SideProjects.vue";
import PalestineBanner from "./components/PalestineBanner.vue";
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

fetch('https://api.lanyard.rest/v1/users/882595027132493864')
  .then(r => r.json())
  .then(d => {
    let statusEl = document.getElementById("status");
    let status = d.data.discord_status;
    if (status === 'offline') return statusEl.remove();

    let { song, artist } = d.data.spotify || {};
    let statusText = song ? `listening to ${song} by ${artist}` : `im ${status}`;

    statusEl.innerText = statusText;
    statusEl.classList.add(status);
  });

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
      <p style="text-align: center" class="blink" id="status"></p>
      <h1 id="page-title">
        <span id="typing"></span><span class="blink">|</span>
      </h1>
      <p style="text-align: center"><a href="#about">Scroll Down 👇</a></p>
      <PalestineBanner class="footer" />
    </div>
  </div>
  <AboutMe />
  <SideProjects />
</template>

<style>

.online { color: rgb(95, 255, 95); }
.dnd { color: rgb(255, 93, 93); }
.idle { color: rgb(255, 255, 99); }

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
  cursor: pointer;
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
