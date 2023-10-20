<template>
  <div></div>
</template>

<style scoped>
div {
  animation: fadeIn 0.7s ease-in-out;
  background: linear-gradient(
    #00000000, 
    #000913
  ), url(../assets/bg1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(1em);
  -webkit-filter: blur(1em);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
@keyframes fadeIn {
  from {
    transform: scale(2) translateY(10em);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}
</style>
