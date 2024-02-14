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
    if (res?.status == 200) {
      localStorage.setItem('password', to.query.token)
      next();
    }
  } catch (error) {
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

      {
        path: "/action-details-admin",
        name: "action-details-admin",
        component: () => import('../views/Dashboard/action-details/Main.vue'),
        props: true,
        meta: {
          hideNavbar: true,
        }
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
      {
        path: "/account-seller",
        name: "account-seller",
        component: () => import('../views/Dashboard/my-account/Main.vue'),
        meta: {
          hideNavbar: true,
        }
      },
      {
        path: "/upcoming-auctions",
        name: "upcoming-auctions",
        component: () => import('../views/Dashboard/upcoming-auctions/Main.vue'),
      },
      {
        path: "/live",
        name: "live",
        component: () => import('../views/Dashboard/live/Main.vue'),
      },
      {
        path: "/completed",
        name: "completed",
        component: () => import('../views/Dashboard/completed/Main.vue'),
      },
      {
        path: "/inbox-seller",
        name: "inbox-seller",
        component: () => import('../views/Dashboard/chat/Main.vue'),
        meta: {
          hideNavbar: true,
        }
      },
      {
        path: "/all/create",
        name: "create",
        component: () => import('../views/Dashboard/All/createAuction/Main.vue'),
        meta: {
          hideNavbar: true,
        }
      },
      {
        path: "/action-details-seller/:id",
        name: "action-details-seller",
        component: () => import('../views/Dashboard/action-details/Main.vue'),
        props: true,
        meta: {
          hideNavbar: true,
        }
      },
      {
        path: '/photos-details/:id',
        name: 'photos-details-seller',
        props: true,
        component: () => import('../views/Dashboard/photos-details/Main.vue')
      },
      {
        path: "/faqs-seller",
        name: "faqs-seller",
        component: () => import('../views/Dashboard/faqsSeller/Main.vue'),
        props: true,
        meta: {
          hideNavbar: true,
        }
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
      {
        path: "/current-bits",
        name: "current-bits",
        component: () => import('../views/Dashboard/current-bits/Main.vue')

      },
      {
        path: "/liveDealer",
        name: "liveDealer",
        component: () => import('../views/Dashboard/liveDealer/Main.vue')

      },
      {
        path: "/completed-buyer",
        name: "completed-buyer",
        component: () => import('../views/Dashboard/completed-dealer/Main.vue')

      },
      {
        path: "/action-details-dealer/:id",
        name: "action-details-dealer",
        component: () => import('../views/Dashboard/action-details/Main.vue'),
        props: true,
        meta: {
          hideNavbar: true,
        }
      },
      {
        path: '/photos-details/:id',
        name: 'photos-details-dealer',
        props: true,
        component: () => import('../views/Dashboard/photos-details/Main.vue'),
        meta: {
          hideNavbar: false,
        }
      },

      {
        path: "/inbox-dealer",
        name: "inbox-dealer",
        component: () => import('../views/Dashboard/chat/Main.vue'),
        meta: {
          hideNavbar: true,
        }
      },
      {
        path: "/faqs-dealers",
        name: "faqs-dealers",
        component: () => import('../views/Dashboard/faqsDealers/Main.vue'),
        props: true,
        meta: {
          hideNavbar: true,
        }
      },
      {
        path: "/account-dealer",
        name: "account-dealer",
        component: () => import('../views/Dashboard/my-account/Main.vue'),
        meta: {
          hideNavbar: true,
        }
      },
      {
        path: "/how-it-works-dealer",
        name: "how-it-works-dealer",
        component: () => import('../views/Dashboard/howItWorksDealer/Main.vue'),
        props: true,
        meta: {
          hideNavbar: true,
        }
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
        path: '/resend-email',
        name: 'resend-email',
        props: true,
        component: () => import('../views/Auth/ResendEmail/Main.vue')
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

