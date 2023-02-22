<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth,
      techs: [
        {
          tech: 'Vue.js',
          ex: 'Newbie',
        },
        {
          tech: 'Vite',
          ex: 'Newbie',
        },
        {
          tech: 'Firebase',
          ex: 'Intermidiet',
        },
        {
          tech: 'Railway',
          ex: 'Pro',
        },
        {
          tech: 'Express.js',
          ex: 'Pro',
        },
        {
          tech: 'Node.js',
          ex: 'Pro',
        },
        {
          tech: 'Linux',
          ex: 'Pro',
        },
      ],
    }
  }
}
</script>

<template>
  <div id="stack" class="center">
    <div class="container">
      <h1>My Stack</h1>
      <ul class="desktop" v-if="screenWidth > 600">
        <li v-for="(obj) in techs">
          {{ obj.tech }} - {{ obj.ex }} Level
        </li>
      </ul>
      <ul v-else>
        <li v-for="(obj) in techs">
          {{ obj.tech }} - {{ obj.ex }} Level
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 { text-align: center; }

ul { list-style: none; }
li:before { content: '👉 '; }
ul.desktop li { font-size: 1.3rem; }
</style>
