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
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/images',
    name: 'Images',
    component: Images,
  },
  {
    path: '/image/add',
    name: 'Upload',
    component: Upload,
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});
export default router;
