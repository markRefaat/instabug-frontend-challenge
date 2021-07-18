<template>
<div class="video">
  <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/qZXt1Aom3Cs"></iframe>
  </div>
  <div class="video-details">
    <div class="video-title">SpongeBob in Real Life Episode 2</div>
    <div class="video-data">JChaseFilms 54,013,577 views</div>
  </div>    
  <div class="video-footer-buttons">
      <div>
      <i class="fa fa-thumbs-up"></i> 149k
      <i class="fa fa-thumbs-down"></i> 25K
      </div>

      <div>
      <i class="fa fa-plus"></i>
      <i class="fa fa-share"></i>
      <i class="fa fa-flag"></i>
      </div>
  </div>
  <hr>
  <div v-for="n in 10" :key="n">
    <VideoTile />
  </div>
</div>
  <!-- <br> -->
</template>


<script>
import VideoTile from "../components/VideoTile.vue"
export default {
  name: "Video",
  components: {
    VideoTile,
  }
};
</script>


<style scoped>
.video {
    max-width: 1400px;
    margin: auto;
}
i {
    font-size: 30px;
    padding-left: 15px;
}
.fa-flag {
    padding-right: 20px;
}

.video-wrapper {
  max-width: 99%;
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
