<template>
  <div class="progress">
    <div class="progress-bar"></div>
  </div>
</template>

<script>
export default {
  name: "HorizontalLoading",
};
</script>

<style scoped>
.progress {
  display: block;
  height: 5px;
  background-color: #e9ecef;
  position: relative;
}

.progress .progress-bar {
  position: absolute;
  height: 100%;
  background-color: red;
  animation: progress-animation 4s infinite;
}

@keyframes progress-animation {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
