<template>
  <a :href="'#/playlist/' + playlist.id" class="playlist-container">
    <div class="playlist-icon-wrapper">
      <div class="playlist-icon-overlay">37</div>
      <img class="playlist-icon" :src="playlist.thumbnail" />
    </div>
    <div class="playlist-details">
      <div class="playlist-title">{{ playlist.title }}</div>
      <div class="playlist-data">{{ playlist.channelName }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: "PlaylistTile",
  props: {
    playlist: Object,
  },
};
</script>

<style scoped>
.playlist-icon-wrapper {
  position: relative;
}

.playlist-icon-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: white;

  position: absolute;
  top: 0;
  right: 10px;
  width: 40%;
  height: 95%;
  background-color: rgba(128, 128, 128, 0.75);
}

.playlist-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  text-decoration: none;
}

.playlist-icon {
  margin-right: 10px;
  background-color: #aaa;
  max-width: 300px;
  height: 100px;
}

.playlist-details {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.playlist-title {
  font-size: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 3.6em;
  color: black;
}

.playlist-data {
  color: #555;
}
</style>
