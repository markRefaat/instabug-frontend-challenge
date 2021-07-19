<template>
  <div class="channel">
    <img
      class="image-cover"
      :src="details.cover"
      alt=""
    />
    <img
      class="image-profile"
      :src="details.thumbnail"
      alt=""
    />
    <div class="channel-details">
      <div class="channel-title">{{ details.title }}</div>
      <div class="channel-data">
        Subscribe <br />
        {{ details.subscribers }} subscribers
      </div>
    </div>
    <hr />
    <div v-for="d in data" :key="d.id">
      <PlaylistTile v-if="d.type == 'youtube#playlist'" :playlist="d" />
      <VideoTile v-if="d.type == 'youtube#video'" :video="d" />
    </div>
    <button v-if="data.length > 0" id="loadMore" @click="loadMore">Load more</button>
  </div>
</template>

<script>
import VideoTile from '../components/VideoTile'
import PlaylistTile from '../components/PlaylistTile'
export default {
  name: "Channel",
  data() {
    return {
      details: {},
      data: [],
      nextPageToken: "",
    }
  },
  methods: {
    async fetchChannelDetails() {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics%2CbrandingSettings&id=${this.$route.params.id}&key=${process.env.VUE_APP_API_KEY}`
      );
      const data = await res.json();
      
      const selectedData = {
        title: data["items"][0]["snippet"]["title"],
        thumbnail: data["items"][0]["snippet"]["thumbnails"]["medium"]["url"],
        cover: data["items"][0]["brandingSettings"]["image"]["bannerExternalUrl"],
        subscribers: this.kFormatter(data["items"][0]["statistics"]["subscriberCount"]),
      };
      console.log(selectedData);
      return selectedData;
    },
    kFormatter(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },

    async fetchChannelVideosAndPlaylists() {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${this.$route.params.id}&pageToken=${this.nextPageToken}&maxResults=10&type=video%2Cplaylist&key=${process.env.VUE_APP_API_KEY}`
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
      let moreData = await this.fetchChannelVideosAndPlaylists();
      this.data = this.data.concat(moreData);
    },
  },
  async created() {
    this.details = await this.fetchChannelDetails();
    this.data = await this.fetchChannelVideosAndPlaylists();
  },
  components: {
    VideoTile,
    PlaylistTile,
  },
  watch: {
    "$route.params.id": {
      handler: async function (id) {
        if (id != null) {
          this.details = await this.fetchChannelDetails();
          this.data = await this.fetchChannelVideosAndPlaylists();
        }
      },
    },
  },
};
</script>

<style scoped>
.image-cover {
  width: 100%;
  height: 150px;
  object-fit: cover;
  padding-bottom: 80px;
}

.image-profile {
  position: absolute;
  top: 160px;
  left: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.channel-details {
  display: inline;
  position: absolute;
  top: 220px;
  left: 130px;
}

.channel-title {
  font-size: 20px;
  color: black;
}

.channel-data {
  color: #555;
}
</style>
