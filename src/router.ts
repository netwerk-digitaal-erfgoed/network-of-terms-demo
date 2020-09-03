import {createRouter, createWebHistory} from 'vue-router'
import Faq from './components/Faq.vue'
import Home from './components/Home.vue'

export const router = createRouter({
    history: createWebHistory(),
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
