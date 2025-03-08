<template>
  <div class="q-pa-lg ">
    <div class="sucessfully-forgot-page ">
      <img src="../assets/svg/email-sent.svg" />
      <span class="text-h5 text-primary text-bold">Check your email</span>
      <p class="text-center">We have sent a password recover <br />
        instruction to your email.</p>

      <div class="row full-width ">
        <q-btn @click="redirectToLogin" push size="lg" type="submit" class="col-12" color="indigo-6"
          label="Back to login" text-color="white" no-caps />
      </div>

      <div class="row flex q-gutter-xs q-mt-xl">
        <span>Online illustrations by</span> <a style="text-decoration: none;" href="https://storyset.com/online"
          class="text-decoration-none">Storyset</a>
      </div>

    </div>


  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()

const redirectToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
.sucessfully-forgot-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  min-height: 88vh;
}

.token-input {
  height: 70px;
}

.token-verification-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>