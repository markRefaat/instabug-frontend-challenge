<template>
  <div class="home">
    <span>
      <Filters v-if="this.data.length > 0" @uploadDate="updateUploadDate" @type="updateType" @sortBy="updateSortBy"/>
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
.home {
  max-width: 1400px;
  margin: auto;
}
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
import Filters from "../components/Filters";
import PlaylistTile from "../components/PlaylistTile";

export default {
  name: "Home",
  components: {
    ChannelTile,
    VideoTile,
    PlaylistTile,
    Filters
  },
  props: {
    searchText: String,
  },
  data() {
    return {
      data: [],
      nextPageToken: "",
      q: "",
      uploadDate: "",
      type: "video%2Cchannel%2Cplaylist",
      sortBy: "relevance"
    };
  },
  methods: {
    updateUploadDate(q) {
      this.uploadDate = q;
    },
    updateType(q) {
      this.type = q;
    },
    updateSortBy(q) {
      this.sortBy = q;
    },
    async fetchSearch() {
      let link = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=${this.type}&order=${this.sortBy}&maxResults=10&key=${process.env.VUE_APP_API_KEY}`;
      if(this.q != "")
        link += `&q=${this.q}`;
      if(this.nextPageToken != "")
        link += `&pageToken=${this.nextPageToken}`;
      if(this.uploadDate) 
        link += `&publishedAfter=${this.uploadDate}`;
      const res = await fetch(link);
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
        this.q = q;
        this.nextPageToken = "";
        this.data = await this.fetchSearch();
      },
      deep: true,
    },
    "uploadDate": {
      handler: async function (q) {
        this.uploadDate = q;
        this.nextPageToken = "";
        this.data = await this.fetchSearch();
      },
      deep: true,
    },
    "type": {
      handler: async function (q) {
        this.type = q;
        this.nextPageToken = "";
        this.data = await this.fetchSearch();
      },
      deep: true,
    },
    "sortBy": {
      handler: async function (q) {
        this.sortBy = q;
        this.nextPageToken = "";
        this.data = await this.fetchSearch();
      },
      deep: true,
    },
  }
};
</script>