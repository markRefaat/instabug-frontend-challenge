<template>
  <div class="video">
    <div class="video-wrapper">
      <iframe
        :src="'https://www.youtube.com/embed/' + id"
      ></iframe>
    </div>
    <div class="video-details">
      <div class="video-title">{{ details.title }}</div>
      <div class="video-data">
        {{ details.channelName }} <br />
        {{ details.views }} views
      </div>
    </div>
    <div class="video-footer-buttons">
      <div>
        <i class="fa fa-thumbs-up"></i> {{ details.likes }}
        <i class="fa fa-thumbs-down"></i> {{ details.dislikes }}
      </div>

      <div>
        <i class="fa fa-plus"></i>
        <i class="fa fa-share"></i>
        <i class="fa fa-flag"></i>
      </div>
    </div>
    <hr />
    <div v-for="d in videos" :key="d.id">
      <VideoTile :video="d" />
    </div>
    <button v-if="videos.length > 0" id="loadMore" @click="loadMore">Load more</button>
  </div>
</template>

<script>
import VideoTile from "../components/VideoTile.vue";
export default {
  name: "Video",
  components: {
    VideoTile,
  },
  data() {
    return {
      videos: [],
      details: {},
      nextPageToken: "",
      id: ""
    };
  },
  methods: {
    async fetchRelatedVideos() {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.$route.params.id}&pageToken=${this.nextPageToken}&maxResults=5&type=video&key=${process.env.VUE_APP_API_KEY}`
      );
      const data = await res.json();
      this.nextPageToken = data['nextPageToken'];
      const selectedData = data["items"].map((e) => {
        return {
          type: e["id"]["kind"],
          id: e["id"]["videoId"],
          title: e["snippet"]["title"],
          thumbnail: e["snippet"]["thumbnails"]["medium"]["url"],
          channelName: e["snippet"]["channelTitle"],
        };
      });
      return selectedData;
    },
    kFormatter(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
    async fetchVideoDetails(id) {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${id}&key=${process.env.VUE_APP_API_KEY}`
      );
      const data = await res.json();
      const selectedData = {
        title: data["items"][0]["snippet"]["title"],
        thumbnail: data["items"][0]["snippet"]["thumbnails"]["medium"]["url"],
        channelName: data["items"][0]["snippet"]["channelTitle"],
        likes: this.kFormatter(data["items"][0]["statistics"]["likeCount"]),
        dislikes: this.kFormatter(
          data["items"][0]["statistics"]["dislikeCount"]
        ),
        views: this.kFormatter(data["items"][0]["statistics"]["viewCount"]),
      };
      return selectedData;
    }, 
    async fetchPlaylistVideos() {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken=${this.nextPageToken}&playlistId=${this.$route.params.id}&maxResults=5&key=${process.env.VUE_APP_API_KEY}`
      );
      const data = await res.json();
      this.nextPageToken = data['nextPageToken'];
      const selectedData = data["items"].map((e) => {
        return {
          type: e["snippet"]["resourceId"]["kind"],
          id: e["snippet"]["resourceId"]["videoId"],
          title: e["snippet"]["title"],
          thumbnail: e["snippet"]["thumbnails"]["medium"]["url"],
          channelName: e["snippet"]["channelTitle"],
        };
      });
      return selectedData;
    },
    async loadMore() {
      if (this.$route.params.id.length == 11) 
      {
        let moreVideos = await this.fetchRelatedVideos();
        this.videos = this.videos.concat(moreVideos);
      } else {
        let moreVideos = await this.fetchPlaylistVideos();
        this.videos = this.videos.concat(moreVideos);
      }
    },
  },
  async created() {
    if (this.$route.params.id.length == 11) 
    {
      this.id = this.$route.params.id;
      this.videos = await this.fetchRelatedVideos();
      this.details = await this.fetchVideoDetails(this.$route.params.id);
    } else {
      this.videos = await this.fetchPlaylistVideos();
      this.details = await this.fetchVideoDetails(this.videos[0].id);
      this.id = this.videos[0].id;
    }

  },
  watch: {
    "$route.params.id": {
      handler: async function (id) {
        if (id != null) {
          if (this.$route.params.id.length == 11) 
          {
            this.id = this.$route.params.id;
            this.videos = await this.fetchRelatedVideos();
            this.details = await this.fetchVideoDetails(this.$route.params.id);
          } else {
            this.videos = await this.fetchPlaylistVideos();
            this.details = await this.fetchVideoDetails(this.videos[0].id);
            this.id = this.videos[0].id;
          }
        }
      },
    },
  },
};
</script>

<style scoped>
.video {
  max-width: 1400px;
  margin: auto;
}
i {
  font-size: 25px;
  padding-left: 15px;
}
.fa-flag {
  padding-right: 20px;
}

.video-wrapper {
  max-width: 99.8%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.video-wrapper iframe {
  width: 200px;
  height: 200px;
  background: hsla(336, 100%, 85%, 0.88);
  position: absolute;
  width: 100%;
  height: 100%;
}
.video-details {
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 10px;
}

.video-title {
  font-size: 20px;
  color: black;
}

.video-data {
  color: #555;
}

.video-footer-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
