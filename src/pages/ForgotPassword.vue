<template>
  <div class="q-pa-lg ">
    <q-icon name="keyboard_backspace" size="20px" color="grey-8" @click="returnBack" />
    <div class="forgot-page ">
      <img src="../assets/svg/forgot-password.svg" />
      <span class="text-h5 text-primary text-bold">Forgot Password</span>
      <p class="text-center">Enter the email associated with your
        account</p>

      <q-form @submit="forgotUserPassword" class="row">
        <q-input v-model="form.email" outlined type="email" class="col-12" label="Email address" :rules="emailRules" />
        <q-btn push size="lg" type="submit" class="q-mt-md  col-12" color="indigo-6" label="Send Instruction"
          text-color="white" :disable="validateEmail" no-caps :loading="isLoading" />
      </q-form>

      <div class="row flex q-gutter-xs q-mt-xl">
        <span>Online illustrations by</span> <a style="text-decoration: none;" href="https://storyset.com/online"
          class="text-decoration-none">Storyset</a>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useRules } from '../composables/useRules';
import { forgotPassword } from '../api/index';
const { emailRules } = useRules()
const router = useRouter()
const isLoading = ref(false)
type Form = {
  email: string
}

const form = reactive<Form>({
  email: ''
})

const validateEmail = computed(() => {
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (form.email === '') {
    return true
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    return true
  }
  return false
})

const returnBack = () => {
  router.push('/login')
}

const forgotUserPassword = () => {
  isLoading.value = true
  forgotPassword(form)
    .then(() => {
      isLoading.value = false
      setTimeout(() => {
        router.push({ name: 'successfully-forgot-password' })
      }, 1500)
    })
    .catch((error) => {
      {
        isLoading.value = false
        throw error
      }
    })
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