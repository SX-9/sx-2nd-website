<script>
import { ref } from 'vue';
export default {
  data() {
    return {
      screenWidth: ref(window.innerWidth),
      description: 'I\'m Satria, a web developer from Indonesia. I started programming in 2021 and initially wanted to learn Python scripting through a tutorial series on YouTube. However, I quit because the series was taking too long to finish. Later, I made my own Discord server and became interested in making Discord bots. Since Discord API updates frequently, it became challenging to learn the new features, so I switched to web development. I started with HTML, CSS, and JavaScript, and now I consider myself an intermediate web developer.',
    }
  }
}
</script>

<template>
  <div id="about" class="center">
    <div class="container">
      <h1>About Me</h1>
      <p class="desktop" v-if="screenWidth > 600">{{ description }}</p>
      <p v-else>{{ description }}</p>
      <img v-if="screenWidth > 600" alt="Skills" src="https://skillicons.dev/icons?i=vite,vue,firebase,linux,nodejs,vscode&perline=6&theme=dark">
      <img v-else class="big" alt="Skills" src="https://skillicons.dev/icons?i=vite,vue,firebase,linux,nodejs,vscode&perline=6&theme=dark">
    </div>
  </div>
</template>

<style scoped>
p { text-indent: 1.5em; margin: 1em; }
p.desktop { font-size: 1.3rem; }
img.big { width: 100%; }
</style>
