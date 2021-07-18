<template>
  <div class="channel">
    <img class="image-cover" src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="">
    <img class="image-profile" src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="">
    <div class="channel-details">
        <div class="channel-title">SpongeBob SquarePants</div>
        <div class="channel-data">Subscribe <br> 23,858 subscribers</div>
    </div>   
    <div v-for="n in 10" :key="n">
    <VideoTile />
    </div>
  </div>
</template>


<script>
import VideoTile from '../components/VideoTile'

export default {
  name: "Channel",
  components: {
    VideoTile,
  }
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
