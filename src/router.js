import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HelloWorld from './views/HelloWorld.vue';
import About from './views/About.vue';
import income from './components/income.vue';
import adminIncome from './components/adminIncome.vue';


Vue.use(Router);

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/income',
      name: 'income',
      component: income,
    },
    {
      path: '/adminIncome',
      name: 'adminIncome',
      component: adminIncome,
    }
  ],
});
