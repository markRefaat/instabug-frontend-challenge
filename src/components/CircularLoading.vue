<template>
  <div class="loading">
    <div class="spinner">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="bar4"></div>
      <div class="bar5"></div>
      <div class="bar6"></div>
      <div class="bar7"></div>
      <div class="bar8"></div>
      <div class="bar9"></div>
      <div class="bar10"></div>
      <div class="bar11"></div>
      <div class="bar12"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CircularLoading",
};
</script>

<style scoped>
div.loading {
  width: 54px;
  height: 54px;
  margin: 0 auto;
  padding-top: 10px;
}
div.spinner div {
  width: 3px;
  height: 12px;
  background: #000;
  position: absolute;
  top: 100px;
  animation: fade 1s linear infinite;
}
@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.25;
  }
}
div.spinner div.bar1 {
  transform: rotate(0deg) translate(0, -130%);
  animation-delay: 0s;
}
div.spinner div.bar2 {
  transform: rotate(30deg) translate(0, -130%);
  animation-delay: -0.9167s;
}
div.spinner div.bar3 {
  transform: rotate(60deg) translate(0, -130%);
  animation-delay: -0.833s;
}
div.spinner div.bar4 {
  transform: rotate(90deg) translate(0, -130%);
  animation-delay: -0.7497s;
}
div.spinner div.bar5 {
  transform: rotate(120deg) translate(0, -130%);
  animation-delay: -0.667s;
}
div.spinner div.bar6 {
  transform: rotate(150deg) translate(0, -130%);
  animation-delay: -0.5837s;
}
div.spinner div.bar7 {
  transform: rotate(180deg) translate(0, -130%);
  animation-delay: -0.5s;
}
div.spinner div.bar8 {
  transform: rotate(210deg) translate(0, -130%);
  animation-delay: -0.4167s;
}
div.spinner div.bar9 {
  transform: rotate(240deg) translate(0, -130%);
  animation-delay: -0.333s;
}
div.spinner div.bar10 {
  transform: rotate(270deg) translate(0, -130%);
  animation-delay: -0.2497s;
}
div.spinner div.bar11 {
  transform: rotate(300deg) translate(0, -130%);
  animation-delay: -0.167s;
}
div.spinner div.bar12 {
  transform: rotate(330deg) translate(0, -130%);
  animation-delay: -0.0833s;
}
</style>
