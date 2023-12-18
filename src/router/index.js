import { createRouter, createWebHistory, useRouter, useRoute } from 'vue-router'
import MenuHome from '../layout/MenuHome.vue'
import MenuDasboard from '../layout/MenuDasboard.vue'
import { useAuthStore } from "@/stores/auth";
const beforeEnterGuard = (to, from, next) => {
  if (to.params.rol === undefined || to.params.rol !== 'sellers' && to.params.rol !== 'dealers') {
    next('/');
  } else {
    next();
  }
};
const beforeEnterTokenEmail = async (to, from, next) => {
  const store = useAuthStore();
  const router = useRouter()
  try {
    let res = await store.authProfile(to.query)
    console.log('res', res)
    if (res?.status == 200) {
      localStorage.setItem('password', to.query.token)
      next();
    }
    console.log('res', res)
  } catch (error) {
    console.log('error', error)
    if (error?.response?.data?.statusCode == 401) {
      next({ name: 'recover-password' })
    } else {
      next({ name: 'home' })
    }
  }
};

const routes = [
  {
    path: "/admin",
    component: MenuDasboard,
    meta: { requiresAuth: true, adminAuth: true, sellerAuth: false, dealersAuth: false },
    children: [
      //RUTAS DEL ADMINITRADOR
      {
        path: "/inicio",
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
      {
        path: "/faqs",
        name: "faqs",
        component: () => import('../views/Dashboard/faqs/Main.vue')

      },
    ],
  },
  {
    path: "/sellers",
    component: MenuDasboard,

    meta: { requiresAuth: true, adminAuth: false, sellerAuth: true, dealersAuth: false },
    children: [
      //RUTAS DEL Sellers
      {
        path: "/all",
        name: "all",
        component: () => import('../views/Dashboard/All/Main.vue')

      },
    ],
  },
  {
    path: "/dealers",

    component: MenuDasboard,
    meta: { requiresAuth: true, adminAuth: false, sellerAuth: false, dealersAuth: true },
    children: [
      //RUTAS DEL Dealers
      {
        path: "/upcoming",
        name: "upcoming",
        component: () => import('../views/Dashboard/upcoming/Main.vue')

      },
    ],
  },
  {
    path: "/",
    component: MenuHome,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/sold-auctions',
        name: 'sold-auctions',
        component: () => import('../views/SoldAuctions.vue')
      },
      {
        path: '/how-it-works',
        name: 'how-it-works',
        component: () => import('../views/HowItWorks.vue')
      },
      {
        path: '/contact-us',
        name: 'contact-us',
        component: () => import('../views/ContactUs.vue')
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
      },
      {
        path: '/recover-password',
        name: 'recover-password',
        props: true,
        component: () => import('../views/Auth/EmailChangePassword/Main.vue')
      },
      {
        path: '/auth/recover-password',
        name: 'recover-password-auth',
        props: true,
        beforeEnter: beforeEnterTokenEmail,
        component: () => import('../views/Auth/Recover-Password/Main.vue')
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
    ],
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {

  const authStore = localStorage.getItem("token");
  let token = null;
  let rol = null
  if (authStore) {
    token = authStore;
    rol = localStorage.getItem('rol')
  }
  if (to.meta.requiresAuth) {
    if (!authStore) {
      next({ name: 'home' })
    } else if (to.meta.adminAuth) {
      if (rol == 0) {
        next()
      } else {
        next({ name: 'home' })
      }
    } else if (to.meta.sellerAuth) {
      if (rol == 1) {
        next()
      } else {
        next({ name: 'home' })
      }
    } else if (to.meta.dealersAuth) {
      if (rol == 2) {
        next()
      } else {
        next({ name: 'home' })
      }
    } else {
      next()
    }
  } else {
    next()
  }
  /* if ((
    to.name !== 'login' &&
    to.name !== 'signup' &&
    to.name !== 'home' &&
    to.name !== 'about' &&
    to.name !== 'recover-password' &&
    to.name !== 'recover-password-auth' &&
    to.name !== 'test'
  )
    && !token) next({ name: 'home' })
  else next() */
})
export default router

