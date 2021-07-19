<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Header @search="search" />
  <router-view :searchText="searchText" />
</template>

<script>
import Header from "./components/Header"
export default {
  components: {
    Header,
  },
  data() {
    return {
      searchText: "",
    }
  },
  methods: {
    search(q) {
      this.searchText = q;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
</style>
