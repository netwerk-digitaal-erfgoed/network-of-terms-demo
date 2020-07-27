import {createRouter, createWebHistory} from 'vue-router'
import Faq from './components/Faq.vue'
import Home from './components/Home.vue'

export const routerHistory = createWebHistory()
export const router = createRouter({
    history: routerHistory,
    strict: true,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            props: true,
        },
        {
            path: '/faq',
            name: 'faq',
            components: { default: Faq },
        }
    ]
})
