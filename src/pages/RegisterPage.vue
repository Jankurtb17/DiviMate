<template>
  <div class="q-pa-lg">
    <q-page class="login-page window-height">
      <div class="logo">
        <div class="logo-container">
          <img
            src="../assets/svg/LogoLogin.svg"
            class="indigo-5"
            alt="App logo"
          />
        </div>
      </div>

      <div class="flex justify-start full-width">
        <span class="text-grey-9 login-account-txt">Create an account</span>
      </div>

      <div class="row form">
        <q-input
          class="col-12"
          outlined
          type="email"
          v-model="registerForm.username"
          label="Email"
          :rules="emailRules"
        />
        <q-input
          label="Password"
          class="col-12"
          v-model="registerForm.password"
          outlined
          :type="isPassword ? 'password' : 'text'"
          :rules="passwordRules"
        >
          <template v-slot:append>
            <q-icon
              :name="isPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPassword = !isPassword"
            />
          </template>
        </q-input>

        <q-input
          label="Confirm Password"
          class="col-12"
          v-model="registerForm.confirmPassword"
          outlined
          :type="isConfirmPassword ? 'password' : 'text'"
          :rules="confirmPasswordRules"
        >
          <template v-slot:append>
            <q-icon
              :name="isConfirmPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isConfirmPassword = !isConfirmPassword"
            />
          </template>
        </q-input>

        <div class="full-width">
          <q-btn
            push
            size="lg"
            class="full-width"
            color="indigo-6"
            label="Register"
            text-color="white"
          />
        </div>
      </div>

      <div class="row items-center full-width">
        <q-separator class="col" />
        <div class="col-grow q-mx-sm">or register with</div>
        <q-separator class="col" />
      </div>

      <div class="full-width">
        <q-btn
          push
          size="lg"
          class="full-width"
          color="white"
          label="Sign with google"
          text-color="orange"
          icon="logo-google"
        />
      </div>

      <div>
        <span
          >Already had an account?.
          <router-link to="/login">Login here</router-link>
        </span>
      </div>
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRules } from '../composables/useRules';
const { emailRules, passwordRules, confirmPasswordRules } = useRules();
const isPassword = ref(true);
const isConfirmPassword = ref(true);

interface Form {
  username: string;
  password: string;
  confirmPassword: string;
}

const registerForm = reactive<Form>({
  username: '',
  password: '',
  confirmPassword: '',
});
</script>

<style scoped>
.logo {
  max-width: 150px;
  max-height: 150px;
}

.login span {
  text-align: left;
}

.login-account-txt {
  font-size: 18px;
}

.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.form {
  gap: 5px;
}
</style>
