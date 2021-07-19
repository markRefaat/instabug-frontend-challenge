<template>
  <div class="home">
    <span>
      <FilterButton />
      <FilterButton />
    </span>
    <div v-for="d in this.data" :key="d.id">
      <PlaylistTile v-if="d.type == 'youtube#playlist'" :playlist="d" />
      <ChannelTile v-if="d.type == 'youtube#channel'" :channel="d" />
      <VideoTile v-if="d.type == 'youtube#video'" :video="d" />
    </div>
  </div>
</template>

<script>
import ChannelTile from "../components/ChannelTile";
import VideoTile from "../components/VideoTile";
import FilterButton from "../components/FilterButton";
import PlaylistTile from "../components/PlaylistTile";

export default {
  name: "Home",
  components: {
    ChannelTile,
    VideoTile,
    FilterButton,
    PlaylistTile,
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async fetchTasks() {
      const res = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=الدحيح&maxResults=50&type=video%2Cchannel%2Cplaylist&key=" +
          process.env.VUE_APP_API_KEY
      );
      const data = await res.json();
      const selectedData = data["items"].map((e) => {
        if (e["id"]["kind"] == "youtube#video") {
          return {
            type: e["id"]["kind"],
            id: e["id"]["videoId"],
            title: e["snippet"]["title"],
            thumbnail: e["snippet"]["thumbnails"]["medium"]["url"],
            channelName: e["snippet"]["channelTitle"],
          };
        } else if (e["id"]["kind"] == "youtube#channel") {
          return {
            type: e["id"]["kind"],
            id: e["id"]["channelId"],
            title: e["snippet"]["title"],
            thumbnail: e["snippet"]["thumbnails"]["medium"]["url"],
            channelName: e["snippet"]["channelTitle"],
          };
        } else {
          return {
            type: e["id"]["kind"],
            id: e["id"]["playlistId"],
            title: e["snippet"]["title"],
            thumbnail: e["snippet"]["thumbnails"]["medium"]["url"],
            channelName: e["snippet"]["channelTitle"],
            videosCount: 3,
          };
        }
      });
      return selectedData;
    },
  },
  async created() {
    this.data = await this.fetchTasks();
  },
};
</script>
