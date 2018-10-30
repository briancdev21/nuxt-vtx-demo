import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome.vue'
import store from '../store/index.js'
// import Main from '@/components/Main.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'LandingPage',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/main',
      name: 'Main',
      component: require('@/components/Main').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: require('@/components/Home').default
    },
    {
      path: '/settings',
      name: 'Settings',
      component: require('@/components/Settings').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/checkforupdates',
      name: 'CheckForUpdates',
      component: require('@/components/CheckForUpdates').default
    },
    {
      path: '/newversionisavailable',
      name: 'NewVersionIsAvailable',
      component: require('@/components/NewVersionIsAvailable').default
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/transactiondetails',
      name: 'TransactionDetails',
      component: require('@/components/TransactionDetails').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/downloadversion',
      name: 'DownloadVersion',
      component: require('@/components/DownloadVersion').default
    },
    {
      path: '/congratsscreen',
      name: 'CongratsScreen',
      component: require('@/components/CongratsScreen').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/displaykey',
      name: 'DisplayKey',
      component: require('@/components/DisplayKey').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/generatekey',
      name: 'GenerateKey',
      component: require('@/components/GenerateKey').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/getvtx',
      name: 'GetVtx',
      component: require('@/components/GetVtx').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/keepyourkeyssafe',
      name: 'KeepYourKeysSafe',
      component: require('@/components/KeepYourKeysSafe').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/savetofile',
      name: 'SaveToFile',
      component: require('@/components/SaveToFile').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/savetofileprocess',
      name: 'SaveToFileProcess',
      component: require('@/components/SaveToFileProcess').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/saveyourkeys',
      name: 'SaveYourKeys',
      component: require('@/components/SaveYourKeys').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signupwithgatewayprovider',
      name: 'SignUpWithGatewayProvider',
      component: require('@/components/SignUpWithGatewayProvider').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/storekeys',
      name: 'StoreKeys',
      component: require('@/components/StoreKeys').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/termsconditions',
      name: 'TermsConditions',
      component: require('@/components/TermsConditions').default
    },
    {
      path: '/usercredentials',
      name: 'UserCredentials',
      component: require('@/components/UserCredentials').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/writedownprocess',
      name: 'WriteDownProcess',
      component: require('@/components/WriteDownProcess').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/writeyourkey',
      name: 'WriteYourKey',
      component: require('@/components/WriteYourKey').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/choosepassword',
      name: 'ChoosePassword',
      component: require('@/components/ChoosePassword').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createwalletpassword',
      name: 'createwalletpassword',
      component: require('@/components/CreateWalletPassword').default
    },
    {
      path: '/selectkey',
      name: 'selectkey',
      component: require('@/components/SelectKey').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/whitelist',
      name: 'whitelist',
      component: require('@/components/Whitelist').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/zixipay',
      name: 'zixipay',
      component: require('@/components/Zixipay').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/failure',
      name: 'failure',
      component: require('@/components/Failure').default
    },
    {
      path: '/success',
      name: 'success',
      component: require('@/components/Success').default
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.loggedin === false) {
      next({
        path: '/welcome',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next();
    }
  } else {
    next();
  }
})
export default router;
