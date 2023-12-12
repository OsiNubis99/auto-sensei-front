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
  console.log('to', to.query.token)
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
const beforeGetProfileAdmin = async (to, from, next) => {
  let token = null;
  let store = useAuthStore()
  token = localStorage.getItem('token')
  if (token) {
    try {
      await store.authProfile({ token: token })
      console.log('BeforeGuardia', store?.userData)
      if (

        (!to.name == 'inicio' &&
          !to.name == 'action-list' &&
          !to.name == 'dealer-list' &&
          !to.name == 'seller-list' &&
          !to.name == 'config-setting') &&
        !store.userData.type == 0
      ) {
        next({ name: 'home' })
      } else next()

    } catch (error) {
      localStorage.clear()
      router.push({ path: '/' })
    }
  } else {
    localStorage.clear()
    router.push({ path: '/' })
  }
}
const beforeGetProfileSeller = async (to, from, next) => {
  let token = null;
  let store = useAuthStore()
  token = localStorage.getItem('token')
  if (token) {
    try {
      await store.authProfile({ token: token })
      if (!to.name == 'all' && store.userData.type !== 1 && !store.userData.type !== 0 && !store.userData.type !== 2) {
        next({ name: 'home' })
      } else next()

    } catch (error) {
      localStorage.clear()
      router.push({ path: '/' })
    }
  } else {
    localStorage.clear()
    router.push({ path: '/' })
  }
}
const beforeGetProfileDealers = async (to, from, next) => {
  let token = null;
  let store = useAuthStore()
  token = localStorage.getItem('token')
  if (token) {
    try {
      await store.authProfile({ token: token })
      if (to.name == 'upcoming' && store?.userData.type == 2) {
        next()
      } else next({ name: 'home' })

    } catch (error) {
      localStorage.clear()
      router.push({ path: '/' })
    }
  } else {
    localStorage.clear()
    router.push({ path: '/' })
  }
}
const routes = [
  {
    path: "/admin",
    component: MenuDasboard,
    beforeEnter: beforeGetProfileAdmin,
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
    beforeEnter: beforeGetProfileSeller,
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
    beforeEnter: beforeGetProfileDealers,
    children: [
      //RUTAS DEL Sellers
      {
        path: "/upcoming",
        name: "upcoming",
        component: () => import('../views/Dashboard/upcoming/Main.vue')
      },
    ],
  },
  {
    path: "/home",
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
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});


router.beforeEach((to, from, next) => {
  const authStore = localStorage.getItem("token");
  let token = null;
  if (authStore) {
    token = authStore;
  }
  if ((
    to.name !== 'login' &&
    to.name !== 'signup' &&
    to.name !== 'home' &&
    to.name !== 'about' &&
    to.name !== 'recover-password' &&
    to.name !== 'recover-password-auth' &&
    to.name !== 'test'
  )
    && !token) next({ name: 'home' })
  else next()
})
export default router
