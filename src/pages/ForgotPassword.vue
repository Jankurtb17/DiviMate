<template>
  <div class="q-pa-lg ">
    <q-icon name="keyboard_backspace" size="20px" color="grey-8" @click="returnBack" />
    <div class="forgot-page ">
      <img src="../assets/svg/forgot-password.svg" />
      <span class="text-h5 text-primary text-bold">Forgot Password</span>
      <p class="text-center">Enter the email associated with your
        account</p>

      <div class="row">
        <q-input v-model="userEmail" outlined type="email" class="col-12" label="Email address" :rules="emailRules" />
        <q-btn @click="redirectToSuccessForgotPassword" push size="lg" type="submit" class="q-mt-md  col-12"
          color="indigo-6" label="Send Instruction" text-color="white" :disable="validateEmail" no-caps />
      </div>

      <div class="row flex q-gutter-xs q-mt-xl">
        <span>Online illustrations by</span> <a style="text-decoration: none;" href="https://storyset.com/online"
          class="text-decoration-none">Storyset</a>
      </div>

    </div>


  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRules } from '../composables/useRules';
const { emailRules } = useRules()
const router = useRouter()
const userEmail = ref('')

const validateEmail = computed(() => {
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (userEmail.value === '') {
    return true
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.value)) {
    return true
  }
  return false
})

const returnBack = () => {
  router.push('/login')
}

const redirectToSuccessForgotPassword = () => {
  router.push('/successfully-forgot-password')
}
</script>

<style scoped>
.forgot-page {
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