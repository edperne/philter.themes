import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/styles.scss';
import ApiRequest from './classes/ApiRequest';

Vue.prototype.$request = ApiRequest;
Vue.config.productionTip = false;
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
