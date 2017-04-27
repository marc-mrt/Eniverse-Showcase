// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import { sync } from 'vuex-router-sync';
import 'buefy/lib/buefy.css';

import App from './App';
import store from './store';
import router from './router';


Vue.use(Buefy);

Vue.config.productionTip = false;

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
