import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { y: 0 };
  },
  routes: [
    {
      path: '/',
    },
  ],
});
