<template>
  <a :href="'#/channel/' + channel.id" class="channel-container">
    <img class="channel-icon" :src="channel.thumbnail" />
    <div class="channel-details">
      <div class="channel-title">{{ channel.title }}</div>
      <!-- <div class="channel-data">149 Videos <br> 23,858 subscribers</div> -->
    </div>
  </a>
</template>

<script>
export default {
  name: "ChannelTile",
  props: {
    channel: Object,
  },
};
</script>

<style scoped>
.channel-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  text-decoration: none;
}

.channel-icon {
  margin-right: 15px;
  border-radius: 50%;
  background-color: #aaa;
  width: 100px;
  height: 100px;
}

.channel-details {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.channel-title {
  font-size: 20px;
  color: black;
}

.channel-data {
  color: #555;
}
</style>
