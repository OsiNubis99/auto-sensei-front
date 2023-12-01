import { createRouter, createWebHistory } from 'vue-router'
import MenuHome from '../layout/MenuHome.vue'
const beforeEnterGuard = (to, from, next) => {
  if (to.params.rol === undefined || to.params.rol !== 'sellers' && to.params.rol !== 'dealers') {
    next('/');
  } else {
    next();
  }
};
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MenuHome,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/login/:rol',
          name: 'login',
          props: true,
          beforeEnter: beforeEnterGuard,
          component: () => import('../views/Auth/Login/Main.vue')
        },
        {
          path: '/signup/:rol',
          name: 'signup',
          props: true,
          beforeEnter: beforeEnterGuard,
          component: () => import('../views/Auth/SignUp/Main.vue')
        }
      ],
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/Error/Main.vue"),
    },

  ]
})

export default router
