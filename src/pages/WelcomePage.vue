<template>
  <q-page class="welcome-page q-pa-md">
    <img src="../assets/svg/checklist.svg" />
    <span class="text-h3 text-weight-bolder text-indigo-5">Welcome</span>
    <p class="text-h6 text-center text-weight-medium">Effortlessly split your bill <br />with your friends
    </p>
    <q-btn @click="redirectToLogin" label="login" class="q-pa-sm full-width bg-indigo-5 text-white"></q-btn>
    <q-btn @click="redirectToRegister" outline label="register" color="indigo-5 full-width"></q-btn>

    <span>Illustration by storyset</span>
  </q-page>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const redirectToLogin = () => router.push('/login')
const redirectToRegister = () => router.push('/register')
</script>

<style scoped>
.welcome-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  min-height: 88vh;
}
</style>