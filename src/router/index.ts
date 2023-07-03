import {createRouter, createWebHistory } from "vue-router";
import Home from '../pages/home.vue';
import Consultant from '../pages/consultant.vue';
import Farmer from '../pages/farmer.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/request-access', component: () => import('../pages/request.vue') },
    { path: '/request-access/as-a-consultant', component: Consultant },
    { path: '/request-access/as-a-farmer', component: Farmer },
]

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;