<script>
import AboutMe from "./components/AboutMe.vue";
import TopBar from "./components/TopBar.vue";
import Background from "./components/Background.vue";
import MyStack from './components/MyStack.vue';
import SideProjects from './components/SideProjects.vue';

let text = "Programming Is Painful And Fun";
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

document.querySelector('title').innerText = "SX's Website";
document.querySelector('link[rel="icon"]').href = "assets/favicon.svg";

export default {
  name: 'SX\'s Website',
  metaInfo: {
    title: 'SX\'s Website',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Programming Is Painful And Fun!' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  components: {
    TopBar,
    AboutMe,
    Background,
    MyStack,
    SideProjects,
  },
}
</script>

<template>
  <Background />
  <TopBar name="SX-9" />
  <div class="center">
    <div class="container">
      <h1 id="page-title"><span id="typing"></span><span class="blink">|</span></h1>
      <p style="text-align: center"><a href="#about">Scroll Down 👇</a></p>
    </div>
  </div>
  <AboutMe />
  <MyStack />
  <SideProjects />
</template>

<style>
* {
  font-family: "Encode Sans", sans-serif;
  color: #6bb0c6;
  scroll-behavior: smooth;
}
body {
  background-color: #022530;
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
h1#page-title { text-align: center; }
a:hover { color: white; }

.blink {
  animation: blink 750ms infinite;
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
