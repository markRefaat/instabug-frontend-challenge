<template>
    <a href="#" class="video-container">
        <img class="video-icon" src="http://unsplash.it/36/36?gravity=center" />
        <div class="video-details">
            <div class="video-title">SpongeBob in Real Life Episode 2</div>
            <div class="video-data">JChaseFilms <br> 54,013,577 views</div>
        </div>    
    </a>
</template>

<script>
export default {
  name: "VideoTile"
}
</script>



<style scoped>

.video-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  text-decoration: none;
}

.video-icon {
  margin-right: 15px;
  background-color: #AAA;
  width: 300px;
  height: 100px;
}

.video-details {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.video-title {
  font-size: 20px;
  color: black;
}

.video-data {
  color: #555;
}
</style>