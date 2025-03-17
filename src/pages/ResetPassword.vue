<template>
  <div class="q-pa-lg">
    <q-page class=" full-height">

      <div class="row text-center q-gutter-md q-mt-xl">
        <span class="text-h5 full-width text-primary text-bold">Create a new password</span>
        <p class="full-width">Your new password must be different <br />
          from your previous passwords. </p>
      </div>

      <div class="row form">
        <q-input label="New Password" class="col-12" v-model="registerForm.password" outlined
          :type="isPassword ? 'password' : 'text'" :rules="passwordRules">
          <template v-slot:append>
            <q-icon :name="isPassword ? 'visibility_off' : 'visibility'" class="cursor-pointer"
              @click="isPassword = !isPassword" />
          </template>
        </q-input>

        <q-input label="Confirm Password" class="col-12" v-model="registerForm.confirmPassword" outlined
          :type="isConfirmPassword ? 'password' : 'text'" :rules="confirmPasswordRules">
          <template v-slot:append>
            <q-icon :name="isConfirmPassword ? 'visibility_off' : 'visibility'" class="cursor-pointer"
              @click="isConfirmPassword = !isConfirmPassword" />
          </template>
        </q-input>

        <div class="full-width">
          <q-btn push size="lg" class="full-width" color="indigo-6" label="Submit" text-color="white" no-caps />
        </div>
      </div>

    </q-page>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRules } from '../composables/useRules';
const { passwordRules, confirmPasswordRules } = useRules();
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
.create-new-password-page {
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
