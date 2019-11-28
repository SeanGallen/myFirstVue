import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TextMatch from '../views/TextMatch.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/textMatch',
    name: 'textMatch',
    component: TextMatch,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
