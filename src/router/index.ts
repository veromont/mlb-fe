import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/movie-search",
    name: "MovieSearch",
    component: () => import("../views/MovieSearchView.vue"),
  },
  {
    path: "/session-search",
    name: "SessionSearch",
    component: () => import("../views/SessionSearchView.vue"),
  },
  {
    path: "/sessions",
    name: "sessions",
    component: () => import("../views/SessionsView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/add-movie",
    name: "addMovie",
    component: () => import("../views/AddMovieView.vue"),
  },
  {
    path: "/add-session",
    name: "addSession",
    component: () => import("../views/AddSessionView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
