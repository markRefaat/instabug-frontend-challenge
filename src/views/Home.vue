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
    <button v-if="this.data.length > 0" id="loadMore" @click="loadMore">Load more</button>
  </div>
</template>

<style>
#loadMore {
  font-size: 20px;
  width: 95%;
  margin:0 auto;
  display:block;
  padding: 5px;
}
</style>

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
  props: {
    searchText: String,
  },
  data() {
    return {
      data: [],
      nextPageToken: "",
      q: "",
    };
  },
  methods: {
    async fetchSearch(q) {
      this.q = q;
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&maxResults=10&pageToken=${this.nextPageToken}&type=video%2Cchannel%2Cplaylist&key=${process.env.VUE_APP_API_KEY}`
      );
      const data = await res.json();
      this.nextPageToken = data['nextPageToken'];
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
    async loadMore() {
      let moreData = await this.fetchSearch(this.q);
      this.data = this.data.concat(moreData);
    },
  },
  watch: {
    "searchText": {
      handler: async function (q) {
        this.data = await this.fetchSearch(q);
      },
      deep: true,
    },
  }
};
</script>