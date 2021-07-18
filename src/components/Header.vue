<template>
    <header>
        <a href="#"><img id="youtube_mobile_icon" alt="Youtube Icon" src="../assets/youtubeMobileIcon.png" /></a>

        <p v-if="!state">{{text}}</p>
        <input v-if="state" type="text" placeholder="Search" name="search" v-model="text"/>
        <img @click="toggleSearchInput" id="search_icon" alt="Search Icon" src="../assets/search.png" />

    </header>
</template>



<script>
export default {
    name: "Header",
    data() {
        return {
            state: false,
            text: ""
        }
    },
    methods: {
        toggleSearchInput(){
            this.state = !this.state
        }
    }
}
</script>

<style scoped>
header {
    width: 100%;
    height: 60px;
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 20px; */
}
#youtube_mobile_icon {
    padding-left: 15px;
    padding-right: 15px;
    width: 50px;
}
input {
    font-size: 23px;
    margin-right:  auto;
    width: 60%;
}
p {
    font-size: 23px;
    margin-right:  auto;
    color: white;
}
#search_icon {
    padding-right: 15px;
    width: 25px;
}
</style>