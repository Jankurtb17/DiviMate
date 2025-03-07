<template>
  <div class="q-pa-lg">
    <q-page class="platform-android platform-ios login-page window-height">
      <div class="logo">
        <div class="logo-container">
          <img src="../assets/svg/LogoLogin.svg" class="indigo-5" alt="App logo" />
        </div>
      </div>

      <div class="flex justify-start full-width">
        <span class="text-grey-9 login-account-txt">Login to your account</span>
      </div>

      <div class="row form">
        <q-input class="col-12" outlined type="email" v-model="loginForm.username" label="Email" :rules="emailRules" />
        <q-input label="Password" class="col-12" v-model="loginForm.password" outlined
          :type="isPwd ? 'password' : 'text'" :rules="passwordRules">
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>

        <div class="full-width">
          <q-btn push size="lg" class="full-width" color="indigo-6" label="Login" text-color="white" />
        </div>
      </div>

      <div class="flex justify-end full-width text-subtitle2 text-indigo-9">
        <span>Forgot password</span>
      </div>
      <div class="row items-center full-width">
        <q-separator class="col" />
        <div class="col-grow q-mx-sm">OR</div>
        <q-separator class="col" />
      </div>

      <div class="full-width">
        <GoogleSignin />
      </div>

      <div>
        <span>Don't have an account?
          <router-link to="register">Register here</router-link></span>
      </div>
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRules } from '../composables/useRules';
import GoogleSignin from '../components/GoogleLogin/GoogleSignin.vue';
const { emailRules, passwordRules } = useRules();
const isPwd = ref(true);

interface Form {
  username: string;
  password: string;
}

const loginForm = reactive<Form>({
  username: '',
  password: '',
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
