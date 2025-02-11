import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/Register.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/Faq/List.vue'),
    },
    // {
    //   path: '/authors',
    //   children: [
    //     {
    //       path: '',
    //       name: 'authors',
    //       component: () => import('../views/AuthorView.vue'),
    //     },
    //     {
    //       path: 'create',
    //       name: 'author_create',
    //       component: () => import('../views/Author/Create.vue')
    //     },
    //     {
    //       path: ':slug',
    //       name: 'author_detail',
    //       component: () => import('../views/Author/Detail.vue')
    //     }
    //   ]
    // },
    {
      path: '/faq/create',
      name: 'faq-create',
      component: () => import('../views/Faq/Create.vue'),
    },

  ],
})

export default router
