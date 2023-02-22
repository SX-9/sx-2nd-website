<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth,
      description: 'Hi, Im A Web Developer 🌐 From Indonesia 🇮🇩. My Name Is Satria, && Ive Been A Programmer 💻 Since 2021 ➡️ && When I 1st Started My Journey ⛰️ I Originally Wanted To Be A Developer Because I Wanna Make My Own Discord Bots 🤖. Now Since Discord API Updated ⬆️ A Lot Its Really Hard 😡 For Me To Learn 📚 The New Features ⚙️, So I Changed ⬅️ My Journey To Web Development. I Originally Started With Plain HTML, CSS, && JavaScript. Now Im An Intermidiet 😎 Web Developer.',
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
    </div>
  </div>
</template>

<style scoped>
h1 { text-align: center; }
p { text-indent: 0; }
p.desktop { font-size: 1.3rem; text-indent: 2em; }
</style>
