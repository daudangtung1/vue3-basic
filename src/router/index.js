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
    //author with api --TODO: add author api later
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
      path: '/author/:slug',
      children: [
        {
          path: '',
          name: 'author_home',
          component: () => import('../views/Author/Home.vue')
        },
        {
          path: '/gallery',
          name: 'author_gallery',
          component: () => import('../views/Author/Gallery.vue')
        },
        {
          path: '/favourites',
          name: 'author_favourites',
          component: () => import('../views/Author/Favourite.vue')
        },
        {
          path: '/posts',
          name: 'author_post',
          component: () => import('../views/Author/Posts.vue')
        },
        {
          path: 'about',
          name: 'author_about',
          component: () => import('../views/Author/About.vue')
        },

      ]
    },

    //Post: mock data
    {
      path: '/posts',
      children: [
        {
          path: '',
          name: 'post',
          component: () => import('../views/Post/List.vue')
        },
        {
          path: ':slug',
          name: 'post_detail',
          component: () => import('../views/Post/Detail.vue')
        }
      ],
    },
    {
      path: '/faq/create',
      name: 'faq-create',
      component: () => import('../views/Faq/Create.vue'),
    },

  ],
})

export default router
