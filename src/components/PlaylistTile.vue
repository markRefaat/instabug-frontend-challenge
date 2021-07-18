<template>
    <a href="#/playlist/123" class="playlist-container">
        <div class="playlist-icon-wrapper">
        <div class="playlist-icon-overlay">37</div>
        <img class="playlist-icon" src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        </div>

        <div class="playlist-details">
            <div class="playlist-title">SpongeBob PlayListSpongeBob PlayListSpongeBob PlayListSpongeBob PlayListSpongeBob PlayListSpongeBob PlayListSpongeBob PlayListSpongeBob PlayList</div>
            <div class="playlist-data">JChaseFilms</div>
        </div>    
    </a>
</template>

<script>
export default {
  name: "PlaylistTile"
}
</script>



<style scoped>

.playlist-icon-wrapper {
  position: relative;
}


.playlist-icon-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: white;

  position: absolute;
  top: 0;
  right: 10px;
  width: 40%;
  height: 95%;
  background-color: rgba(128,128,128,0.75);
}


.playlist-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  text-decoration: none;
}

.playlist-icon {
  margin-right: 10px;
  background-color: #AAA;
  max-width: 300px;
  height: 100px;
}

.playlist-details {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.playlist-title {
  font-size: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 3.6em;
  color: black;
}

.playlist-data {
  color: #555;
}
</style>