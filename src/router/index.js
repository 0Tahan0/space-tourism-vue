import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/TechnologyView",
    name: "Technology",
    component: () => import("../views/TechnologyView.vue"),
  },
  {
    path: "/CrewView",
    name: "Crew",
    component: () => import("../views/CrewView.vue"),
  },
  {
    path: "/DestinationView",
    name: "Destination",
    component: () => import("../views/DestinationView.vue"),
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
