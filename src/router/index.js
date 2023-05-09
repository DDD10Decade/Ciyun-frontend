import {createRouter, createWebHistory} from 'vue-router'
import WordCloud from "@/components/WordCloud.vue";

const routes = [
    {
        path: "/",
        redirect: "/index"
    },
    {
        path: "/index",
        name: "index",
        component: WordCloud,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
