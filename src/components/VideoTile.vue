<template>
    <a href="#/video/123" class="video-container">
        <img class="video-icon" src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
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
  margin-right: 10px;
  background-color: #AAA;
  max-width: 300px;
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