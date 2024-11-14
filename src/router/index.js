import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontHome.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/frontend/HomeView.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/frontend/AboutView.vue'),
      },
      {
        path: '/space',
        name: 'space',
        component: () => import('../views/frontend/SpaceView.vue'),
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('../views/frontend/ServiceView.vue'),
      },
      {
        path: '/news',
        name: 'news',
        component: () => import('../views/frontend/NewsView.vue'),
      },
      {
        path: '/faq',
        name: 'faq',
        component: () => import('../views/frontend/FaqView.vue'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/frontend/ContactView.vue'),
      },
      {
        path: '/reserve',
        name: 'reserve',
        component: () => import('../views/frontend/ReservePage.vue'),
      },
      {
        path: '/login',
        component: () => import('../views/LoginAdmin.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/backend/ProductsView.vue'),
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('../views/backend/ArticleView.vue'),
      },
    ],
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
