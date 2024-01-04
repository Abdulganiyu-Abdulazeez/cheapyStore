import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name:'Home',
            component: () => import('./components/landing-page.vue')
        },
        {
            path: '/clothing/men',
            name: 'men"s clothing',
            component: () => import('./components/clothings.vue')
        },
        {
            path: '/clothing/men/:title',
            name: 'mensClothingFullDetails',
            component: () => import('./components/clothings.vue')
        },
        {
            path: '/jewelery',
            name: 'Jewelery',
            component: () => import('./components/jewelery.vue')
        },
        {
            path: '/electronics',
            name: 'Electronics',
            component: () => import('./components/electronics.vue')
        },
        {
            path: '/electronics/:title',
            name: 'electronicsFullDetails',
            component: () => import('./components/electronics.vue')
        },
        {
            path: '/clothing/women',
            name: "women's clothing",
            component: () => import('./components/womenClothings.vue')
        },
        {
            path: '/clothing/women/:title',
            name: "womensclothingFullDetails",
            component: () => import('./components/womenClothings.vue')
        },
        {
            path: '/cart',
            name: "Cart",
            component: () => import('./components/cart.vue')
        }
    ]
})

export default router