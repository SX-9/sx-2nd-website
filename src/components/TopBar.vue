<script setup>
defineProps({
  name: String,
});
</script>

<script>
fetch('https://api.lanyard.rest/v1/users/882595027132493864')
  .then(r => r.json())
  .then(d => document.querySelector('img#pfp').classList.add(d.data.discord_status));

export default {
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  methods: {
    showOrHide() {
      let el = document.getElementById("socials");
      if (el.style.display === "none") {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    },
  },
};
</script>

<template>
  <img class="top left bg" id="pfp" src="../assets/avatar.png" alt="Pfp" />
  <p class="top center bg" v-if="screenWidth > 600">
    <a href="#about">👋 About Me</a>
    <a href="#stack">📚 My Stack</a>
    <a href="#work">🖌️ Side Projects</a>
  </p>
  <p class="top center bg" v-else>
    <a>Hello World</a>
  </p>
  <h2
    class="top right bg"
    id="menu"
    @click="showOrHide()"
    title="Click For Socials"
  >
    {{ name }}
  </h2>
  <ul class="top right" id="socials">
    <li class="bg"><a href="https://github.com/SX-9">Github</a></li>
    <li class="bg"><a href="https://discord.st/sx-aircraft">Discord</a></li>
    <li class="bg"><a href="https://twitter.com/SX_Discord">Twitter</a></li>
    <li class="bg"><a href="mailto:hello@mail.sx9.is-a.dev">Email</a></li>
  </ul>
</template>

<style scoped>
.top {
  position: fixed;
  padding: 0.5em;
  animation: fadeIn 2s ease-in-out;
}
h2.top.right {
  top: 1em;
  cursor: pointer;
  right: 1em;
}
ul.top.right {
  display: none;
  top: 5em;
  right: 1em;
  list-style: none;
}
.top.left {
  top: 1em;
  left: 1.5em;
}

.bg {
  background: #0000003d;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
}
li { margin-bottom: 1em; padding: .5em; }

#menu:hover {
  color: white;
}

.top.center {
  top: 2em;
  left: 7em;
  right: 7em;
  text-align: center;
  animation: goWide 2s ease-in-out;
}
a {
  text-decoration: none;
  padding: 1em;
}

.online { --color: lime; }
.dnd { --color: red; }
.idle { --color: yellow; }
.offline { --color: grey; }
img {
  padding: 0;
  height: 3.2em;
  border: .1em solid var(--color);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes goWide {
  from {
    top: 0;
  }
  to {
    top: 2em;
  }
}
</style>
