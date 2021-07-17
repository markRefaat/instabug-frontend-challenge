<template>
  <div class="home">
    <span>
    <FilterButton />
    <FilterButton />
    </span>
    <ChannelTile />
    <VideoTile />
  </div>
</template>


<script>
import ChannelTile from '../components/ChannelTile'
import VideoTile from '../components/VideoTile'
import FilterButton from '../components/FilterButton'

export default {
  name: "Home",
  components: {
    ChannelTile,
    VideoTile,
    FilterButton
  }
};
</script>
