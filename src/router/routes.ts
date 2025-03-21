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
    props: true
  },
  {
    path: '/forgot-password',
    components: {
      Login: () => import('pages/ForgotPassword.vue'),
    },
  },
  {
    path: '/successfully-forgot-password',
    name: 'successfully-forgot-password',
    components: {
      Login: () => import('pages/SuccessfullyForgotPassword.vue'),
    },
    props: true
  },
  {
    path: '/reset-password',
    components: {
      Login: () => import('pages/ResetPassword.vue'),
    },
  },
  {
    path: '/dashboard',
    components: {
      AuthenticatedUser: () => import('pages/auth/MainDashboard.vue')
    }
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
