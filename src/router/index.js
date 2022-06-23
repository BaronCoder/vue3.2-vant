import { def } from "@vue/shared";
import { createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        pacth: "/login",
        name: "login",
        component: () => import("@/views/login/index.vue")
    }
]

const router = createRouter({
    routes,
    hash: createWebHashHistory()
})

export default router;