<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth,
      texts: [ '🤔 Newbie', '😌 Intermediate', '😎 Pro', '🤑 Expert' ],
      techs: [
        {
          tech: '⚙️ Node.js',
          ex: 3,
        },
        {
          tech: '🚆 Railway',
          ex: 2,
        },
        {
          tech: '⏩ Express.js',
          ex: 2,
        },
        {
          tech: '🐧 Linux',
          ex: 2,
        },
        {
          tech: '🔥 Firebase',
          ex: 1,
        },
        {
          tech: '🌐 Vue.js',
          ex: 0,
        },
        {
          tech: '🏃 Vite',
          ex: 0,
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
      <table class="desktop round" v-if="screenWidth > 600">
        <tr>
          <th class="nopadding">N</th>
          <th class="nopadding">Tech</th>
          <th class="nopadding">Experience</th>
        </tr>
        <tr v-for="(obj, index) in techs">
          <td class="nopadding n">{{ index + 1 }}</td>
          <td>{{ obj.tech }}</td>
          <td>{{ texts[obj.ex] }}</td>
        </tr>
      </table>
      <table v-else class="round">
        <tr>
          <th class="nopadding">N</th>
          <th class="nopadding">Tech</th>
          <th class="nopadding">Experience</th>
        </tr>
        <tr v-for="(obj, index) in techs">
          <td class="nopadding n">{{ index + 1 }}</td>
          <td>{{ obj.tech }}</td>
          <td>{{ texts[obj.ex] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
table, th, td {
  border: .1em solid #6bb0c6;
}
td.n { text-align: center; }
table:not(.desktop) { font-size: 0.8em; }
table:not(.desktop) td { padding-right: 1em; }
th, td { padding: .5em; }
th:not(.nopadding), td:not(.nopadding) { padding-right: 5em; }
.desktop td { font-size: 1.3rem; }
</style>
