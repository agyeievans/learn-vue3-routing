// Define our routing rules

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import CarView from "../views/CarView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            nmae: "home",
            component: HomeView
        },
        {
            path: "/about",
            nmae: "about",
            component: AboutView
        },
        {
            path: "/cars/:id",
            nmae: "car",
            component: CarView
        }
    ]
})

export default router