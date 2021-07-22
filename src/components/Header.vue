<template>
  <div v-if="loading" class="horizontal-loading">
    <HorizontalLoading />
  </div>
  <header>
    <a href="#"
      ><img
        id="youtube_mobile_icon"
        alt="Youtube Icon"
        src="../assets/youtubeMobileIcon.png"
    /></a>
    <a href="#"
      ><img
        id="youtube_desktop_icon"
        alt="Youtube Icon"
        src="../assets/youtubeDesktopIcon.png"
    /></a>
    <p v-if="!state">{{ text }}</p>
    <input
      v-if="state"
      type="text"
      placeholder="Search"
      name="search"
      v-model="text"
    />
    <img
      @click="toggleSearchInput"
      id="search_mobile_icon"
      alt="Search Icon"
      src="../assets/searchMobileIcon.png"
    />
    <img
      @click="toggleSearchInput"
      id="search_desktop_icon"
      alt="Search Icon"
      src="../assets/searchDesktopIcon.png"
    />
  </header>
  <div v-if="loading" class="circular-loading">
    <CircularLoading />
  </div>
</template>

<script>
import CircularLoading from "./CircularLoading.vue";
import HorizontalLoading from "./HorizontalLoading.vue";
export default {
  name: "Header",
  components: {
    CircularLoading,
    HorizontalLoading,
  },
  data() {
    return {
      state: false,
      text: "",
    };
  },
  props: {
    loading: Boolean,
  },
  methods: {
    toggleSearchInput() {
      this.state = !this.state;
    },
  },
  watch: {
    text: function (value) {
      this.$emit("search", value);
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  max-width: 1400px;
  margin: auto;
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
#youtube_desktop_icon {
  display: none;
  padding-left: 15px;
  padding-right: 15px;
  width: 50px;
}
input {
  font-size: 23px;
  margin-right: auto;
  width: 60%;
}
p {
  font-size: 23px;
  margin-right: auto;
  color: white;
}
#search_mobile_icon {
  padding-right: 15px;
  width: 25px;
}
#search_desktop_icon {
  display: none;
  padding-right: 15px;
  width: 50px;
}

.horizontal-loading {
  display: none;
}

@media (min-width: 992px) {
  header {
    position: fixed;
    background-color: white;
    left: 0;
    right: 0;
    margin: 0 auto;
    box-shadow: 1px 1px 5px grey;
  }
  #youtube_mobile_icon {
    display: none;
  }
  #youtube_desktop_icon {
    display: inline;
  }
  #search_mobile_icon {
    display: block;
  }
  #search_desktop_icon {
    display: inline;
  }
  .circular-loading {
    display: none;
  }
  .horizontal-loading {
    display: block;
  }
}
</style>
