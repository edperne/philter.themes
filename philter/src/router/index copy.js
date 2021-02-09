import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Images from '../views/Images.vue';
import Account from '../views/Account.vue';
import Upload from '../views/Upload.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  // component: () => import('./views/Home.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    // component: () => import('./views/Account.vue'),
  },
  {
    path: '/images',
    name: 'Images',
    component: Images,
    // component: () => import('views/Images.vue'),
  },
  {
    path: '/image/add',
    name: 'Upload',
    component: Upload,
    // component: () => import('views/AddImage.vue'),
    // page tha requires authentication needs this line:
    // meta: {
    // requiresAuth: true,
    // },
    // component: () => import('.views/Addimage.vue'),
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});

// added this code to handle Unauthorizee access
/* router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
*/
export default router;
