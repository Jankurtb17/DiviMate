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
  {
    path: '/register',
    components: {
      Login: () => import('pages/RegisterPage.vue'),
    },
  },
  {
    path: '/verify-user',
    components: {
      Login: () => import('pages/VerifyUser.vue'),
    },
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    components: {
      Login: () => import('pages/ErrorNotFound.vue'),
    },
  },
];

export default routes;
