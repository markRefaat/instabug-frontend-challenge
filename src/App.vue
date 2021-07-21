<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Header :loading="this.loading" @search="search" />
  <router-view @loading="updateLoading" :searchText="searchText" />
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
      loading: false,
    }
  },
  methods: {
    search(q) {
      this.searchText = q;
    },
    updateLoading(l) {
      this.loading = l;
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
