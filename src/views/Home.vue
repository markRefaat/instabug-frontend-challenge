<template>
  <div class="home">
    <ChannelTile />
    <VideoTile />
  </div>
</template>


<script>
import ChannelTile from '../components/ChannelTile'
import VideoTile from '../components/VideoTile'

export default {
  name: "Home",
  components: {
    ChannelTile,
    VideoTile
  }
};
</script>
