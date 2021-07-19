<template>
  <a :href="'#/video/' + video.id" class="video-container">
    <img class="video-icon" :src="video.thumbnail" />
    <div class="video-details">
      <div class="video-title">{{ video.title }}</div>
      <div class="video-data">{{ video.channelName }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: "VideoTile",
  props: {
    video: Object,
  },
};
</script>

<style scoped>
.video-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  text-decoration: none;
}

.video-icon {
  margin-right: 10px;
  background-color: #aaa;
  max-width: 300px;
  height: 100px;
}

.video-details {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.video-title {
  font-size: 20px;
  color: black;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 2.6em;
}

.video-data {
  color: #555;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 1.2em;
}
</style>
