<script setup>
defineProps({
  name: String,
});
</script>

<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  mounted() {
    setInterval(() => {
      this.screenWidth = window.innerWidth;
    }, 1000);
  },
  methods: {
    showOrHide() {
      let el = document.getElementById("socials");
      let style = el.style.display
      if (style === "none" || !style) {
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
  <div class="top center no">
    <ul class="top bg">
      <li v-if="screenWidth > 800"><a href="#home">Home</a></li>
      <li v-if="screenWidth > 800"><a href="#about">About Me</a></li>
      <li v-if="screenWidth > 800"><a href="#work">Side Projects</a></li>
      <li><a href="https://satr14.tech">TTY</a></li>
    </ul>
  </div>
  <h2 
    class="top right bg"
    id="menu"
    @click="showOrHide()"
    @keydown="showOrHide()"
    title="Click For Socials"
    tabindex="0"
    role="button"
  >
    {{ name }}
  </h2>
  <ul class="top right noanim" id="socials">
    <li class="bg"><a href="https://github.com/SX-9">Github</a></li>
    <li class="bg"><a href="https://discordapp.com/users/882595027132493864">Discord</a></li>
    <li class="bg"><a href="mailto:hello@mail.sx9.is-a.dev">Email</a></li>
  </ul>
</template>

<style scoped>
img, ul, li, h2, p {
  overflow: hidden;
}

li { display: inline; }

.top {
  position: fixed;
  padding: 0.5em;
}
.top:not(.noanim) { animation: fadeIn 2s ease-in-out; }

div.top.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1em;
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
  background: #00000085;
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
  left: 8em;
  right: 8em;
  text-align: center;
  animation: goWide 2s ease-in-out;
}
a {
  text-decoration: none;
  padding: 1em;
}

img {
  padding: 0;
  height: 3.2em;
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
