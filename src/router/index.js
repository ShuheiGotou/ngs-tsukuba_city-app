import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import AllProblems from '../components/AllProblems.vue';
import ProblemDetail from '../components/ProblemDetail.vue';

Vue.use(Router);

export default new Router({
  base: '/vue-test/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/problems',
      name: 'AllProblems',
      component: AllProblems,
      // children: [
      //   {
      //     path: ':id',
      //     name: 'problem-detail',
      //     component: ProblemDetail,
      //   },
      // ],
    },
    {
      path: '/problems/:id',
      name: 'problem-detail',
      component: ProblemDetail,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
