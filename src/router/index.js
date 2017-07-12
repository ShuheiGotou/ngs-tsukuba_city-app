import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import AllProblems from '../components/AllProblems.vue';
import ProblemDetail from '../components/ProblemDetail.vue';
import Responses from '../components/Response.vue';

Vue.use(Router);

export default new Router({
  base: '/vue-test/',
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
      path: '/responses',
      name: 'responses',
      component: Responses,
    },
  ],
});
