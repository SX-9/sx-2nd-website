<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <img class="top left" src="../assets/avatar.png" alt="Pfp">
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

img { height: 3em; }
</style>
