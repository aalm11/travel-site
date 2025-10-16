"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("../views/Home.vue");
var Booking_vue_1 = require("../views/Booking.vue");
var routes = [
    { path: "/", name: "Home", component: Home_vue_1.default },
    { path: "/booking", name: "Booking", component: Booking_vue_1.default },
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: routes,
});
exports.default = router;
