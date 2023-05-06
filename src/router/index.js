import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/site/home"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/site/about"),
      },
      {
        path: "/job",
        name: "job",
        component: () => import("../views/site/job"),
      },
      {
        path: "/vacance",
        name: "vacance",
        component: () => import("../views/site/vacance"),
      },
      {
        path: "/practice",
        name: "practice",
        component: () => import("../views/site/practice"),
      },
      {
        path: "/news",
        name: "news",
        component: () => import("../views/site/News/news.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
