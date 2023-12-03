import { createRouter, createWebHistory } from 'vue-router'
import MenuHome from '../layout/MenuHome.vue'
import MenuDasboard from '../layout/MenuDasboard.vue'
const beforeEnterGuard = (to, from, next) => {
  if (to.params.rol === undefined || to.params.rol !== 'sellers' && to.params.rol !== 'dealers') {
    next('/');
  } else {
    next();
  }
};
const beforeEnterDasborad = (to, from, next) => {
  const authStore = localStorage.getItem("authStore");
  let token = null;

  if (authStore) {
    token = JSON.parse(authStore).token;
    console.log('REVISAAAAAAAAAAAAA', token)
  }
  if (token) next({ name: 'dashboard' })
  else  next({ name: 'home' })
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
      path: '/dashboard',
      component: MenuDasboard,
    
      children: [
        {
          path: "/dashboard",
          name: "inicio",
          component: () => import('../views/Dashboard/Main.vue')
          
        },
        {
          path: "/action-list",
          name: "action-list",
          component: () => import('../views/Dashboard/action-list/Main.vue')
          
        },
        {
          path: "/dealer-list",
          name: "dealer-list",
          component: () => import('../views/Dashboard/dealer-list/Main.vue')
          
        },
        {
          path: "/seller-list",
          name: "seller-list",
          component: () => import('../views/Dashboard/seller-list/Main.vue')
          
        },
        {
          path: "/settings",
          name: "config-setting",
          component: () => import('../views/Dashboard/config-setting/Main.vue')
          
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/Error/Main.vue"),
    },

  ]
})

export default router
