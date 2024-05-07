// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    component: () =>
        import ('@/layouts/default/Default.vue'),
    children: [{
            path: '/',
            name: 'Home',
            component: () =>
                import ('@/views/Home.vue'),
        }, {
            path: 'About',
            name: 'About',
            component: () =>
                import ('@/views/About.vue'),
        },
        {
            path: '/Skills',
            name: 'Skills',
            component: () =>
                import ('@/views/Skills.vue'),
        },
        {
            path: '/Project',
            name: 'Project',
            component: () =>
                import ('@/views/Project.vue'),
        }, {
            path: 'Contact',
            name: 'Contact',
            component: () =>
                import ('@/views/ContactMe.vue'),
        },
    ],
}, ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router