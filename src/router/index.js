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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/video/123",
    name: "Video",
    component: Video,
  },
  {
    path: "/channel/123",
    name: "Channe;",
    component: Channel,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
