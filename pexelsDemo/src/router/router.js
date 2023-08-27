import { createRouter, createWebHistory } from 'vue-router'

import Main from '../components/Main.vue'
import Details from '../components/Details.vue'


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/Details/:id',
        component: Details
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
