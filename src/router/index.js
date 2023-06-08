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
        path: "/vacancies/vacancy-list",
        name: "vacancy-list",
        component: () => import("../views/site/job"),
      },
      {
        path: "/vacancies/vacancy-detail/:vacancy_id",
        name: "vacancy-detailed",
        component: () => import("../views/site/vacancy-detailed"),
      },
      {
        path: "/practice",
        name: "practice",
        component: () => import("../views/site/practice"),
      },
      {
        path: "/club",
        name: "club",
        component: () => import("../views/site/Club"),
      },
      {
        path: "/news",
        name: "news",
        component: () => import("../views/site/News/news.vue"),
      },
      {
        path: "/news/:newsId",
        name: "detailed-news",
        component: () => import("../views/site/News/detailed-news.vue"),
      },
      {
        path: "/place-of-practice",
        name: "amaliyot-joyi",
        component: () => import("@/components/pages/PlaceOfPractice.vue"),
      },
    ],
  },
  {
    path: "/sign-in",
    component: () => import("../layouts/Auth"),
    children: [
      {
        path: "/sign-in",
        name: "login",
        component: () => import("../components/layouts/auth/login"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
