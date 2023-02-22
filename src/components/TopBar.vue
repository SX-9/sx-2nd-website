<script setup>
defineProps({
  name: String,
});

</script>

<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth
    }
  }
}
</script>

<template>
  <img class="top left" src="../assets/avatar.png" alt="Pfp">
  <p class="top center" v-if="screenWidth > 600">
    <a href="#about">👋 About Me</a>
    <a href="#stack">📚 My Stack</a>
    <a href="#work">🖌️ Side Projects</a>
    <a href="#socials">📧 Contacts</a>
  </p>
  <p class="top center" v-else>
    <a>Hello World</a>
  </p>
  <h2 class="top right">{{ name }}</h2>
</template>

<style scoped>
.top {
  position: fixed;
  top: 1em;
  background: #0000003d;
  padding: .5em;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
}
.top.right { right: 1em; }
.top.left { left: 1em; }

.top.center {
  top: 2em;
  left: 7em;
  right: 7em;
  text-align: center;
}
.top.center a { padding: 1em; }

img { height: 3em; }
</style>
