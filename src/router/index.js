import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import AllProblems from '../components/AllProblems.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/problems',
      name: 'AllProblems',
      component: AllProblems,
    },
  ],
});
