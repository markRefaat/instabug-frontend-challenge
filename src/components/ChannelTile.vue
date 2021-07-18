<template>
    <a href="#/channel/123" class="channel-container">
        <img class="channel-icon" src="http://unsplash.it/36/36?gravity=center" />
        <div class="channel-details">
            <div class="channel-title">SpongeBob SquarePants</div>
            <div class="channel-data">149 Videos <br> 23,858 subscribers</div>
        </div>    
    </a>
</template>

<script>
export default {
  name: "ChannelTile"
}
</script>


<style scoped>

.channel-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  text-decoration: none;
}

.channel-icon {
  margin-right: 15px;
  border-radius: 50%;
  background-color: #AAA;
  width: 100px;
  height: 100px;
}

.channel-details {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.channel-title {
  font-size: 20px;
  color: black;
}

.channel-data {
  color: #555;
}
</style>