<script>
import { ref } from 'vue';
export default {
  data() {
    return {
      screenWidth: ref(window.innerWidth),
      description: 'Hi, I\'m Satria, a self-taught web developer from Indonesia. I\'ve been coding since 2021 and have experience with Node.js, web development, and Linux. As a student, I love spending my free time coding and experimenting with new technologies. My interests include machine learning, low-level systems, and circuitry. I\'m an introvert by nature and prefer to spend most of my time working on personal projects. Thanks for taking the time to learn a little more about me!',
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
      <img v-else alt="Skills" src="https://skillicons.dev/icons?i=vite,vue,firebase,linux,nodejs,vscode&perline=6&theme=dark">
    </div>
  </div>
</template>

<style scoped>
p { text-indent: 1.5em; margin: 1em; }
p.desktop { font-size: 1.3rem; }
</style>
