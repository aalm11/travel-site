import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Booking from "../views/Booking.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/booking", name: "Booking", component: Booking },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
