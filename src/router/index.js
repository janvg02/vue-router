import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component: HomeView },
        {path:'/', redirect: HomeView},
        {path: "/:notFound(.*)", component: NotFound}
    ]
    })

export default router