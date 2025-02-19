<template>
  <GoogleLogin
    class="full-width"
    :client-id="clientId"
    :button-config="buttonConfig"
    :callback="handleGoogleSignIn"
    prompt
  />
</template>

<script lang="ts" setup>
import { useGoogleSign } from './hooks/useGoogleSignin';
import { GoogleLogin } from 'vue3-google-login';

const clientId = process.env.VITE_GOOGLE_CLIENT_ID;
const { handleGoogleSignIn } = useGoogleSign();
const buttonConfig = {
  logo_alignment: 'center',
  size: 'large',
};
</script>

<style scoped>
.custom-google-btn {
}
</style>
