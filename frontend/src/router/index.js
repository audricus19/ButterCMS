import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "root",
      components: {
        default: () => import("@/components/index.vue"),
      },
    },
    {
      path: "/blog/:slug",
      name: "blog",
      components: {
        default: () => import("@/components/Blog.vue"),
      },
    },
  ],
});

export default router;
