<script>
import AboutMe from './components/AboutMe.vue';
import TopBar from './components/TopBar.vue';
export default {
  components: {
    TopBar,
    AboutMe,
  }
}

let text = "Programming Is Painful And Fun";
let delay = 150;
let i = 1;
const updateText = () => {
  document.getElementById('typing').innerText = text.substring(0, i);
  i++;
  if (i <= text.length) {
    setTimeout(updateText, delay);
  }
};
setTimeout(updateText, 1700);
</script>

<template>
  <TopBar name="SX-9"/>
  <div class="center">
    <div class="container">
      <h1><span id="typing"></span><span class="blink">|</span></h1>
      <p style="text-align: center;">Scroll Down 👇</p>
    </div>
  </div>
  <AboutMe/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@400&display=swap');

* {
  font-family: 'Encode Sans', sans-serif;
  color: #6bb0c6;
}
body { background: #022530; }
h1, h2, h3, h4, h5, h6, p { margin: 0; }
h1 { font-size: 2.5rem; text-align: center; }

.blink { animation: blink 750ms infinite; }

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
