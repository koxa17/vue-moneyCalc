import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Main from "../views/Main.vue";

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/',
    name: 'Main',
    component: Main
  },

];

const router = createRouter({
  history: createWebHistory(),
  hashbang: false,
  routes,
});

export default router;
