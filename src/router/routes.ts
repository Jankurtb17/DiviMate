import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    components: {
      MainPage: () => import('pages/WelcomePage.vue'),
    },
  },
  {
    path: '/login',
    components: {
      Login: () => import('pages/LoginPage.vue'),
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
