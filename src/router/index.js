import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Video from "../views/Video.vue";
import Channel from "../views/Channel.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/video/:id",
    name: "Video",
    component: Video,
  },
  {
    path: "/channel/:id",
    name: "Channe;",
    component: Channel,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
