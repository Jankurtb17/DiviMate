<template>
  <div class="q-pa-lg">
    <q-page class=" full-height">

      <div class="row text-center q-gutter-md q-mt-xl">
        <span class="text-h5 full-width text-primary text-bold">Create a new password</span>
        <p class="full-width">Your new password must be different <br />
          from your previous passwords. </p>
      </div>

      <q-form class="row form" @submit="resetPassword">
        <q-input label="New Password" class="col-12" v-model="registerForm.newPassword" outlined
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
          <q-btn push size="lg" type="submit" class="full-width" color="indigo-6" label="Submit" text-color="white"
            no-caps />
        </div>
      </q-form>

    </q-page>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { useRules } from '../composables/useRules';
import { useRoute } from 'vue-router';
import { confirmResetPassword } from '../api/index'
import { useQuasar } from 'quasar';
// Initialize Quasar
const $q = useQuasar();
const route = useRoute()
const token = route.query.token
const { passwordRules, confirmPasswordRules } = useRules();
const isPassword = ref(true);
const isConfirmPassword = ref(true);
const isLoading = ref(false)
interface Form {
  newPassword: string;
  confirmPassword: string;
}

interface ErrorArray {
  ctx: [key: string],
  input: string,
  loc: Array<string>,
  msg: string,
  type: string
}

interface ApiErrorResponse {
  response: {
    data: {
      detail: string | Array<ErrorArray>
    };
  };
}

const registerForm = reactive<Form>({
  newPassword: '',
  confirmPassword: '',
});

if (typeof token !== 'string') {
  throw new Error('Token is not a string or is missing');
}

const resetPassword = () => {
  isLoading.value = true

  confirmResetPassword({
    token: token,
    ...registerForm
  }).then(() => {
    isLoading.value = false
    $q.notify({
      type: 'positive',
      message: 'Reset password successfully',
    });
  }).catch((error) => {
    isLoading.value = false
    const apiError = error as ApiErrorResponse;
    let errorMessage = ''
    console.log(apiError.response?.data?.detail)
    if (typeof(apiError.response?.data?.detail) === 'string')  {
      errorMessage = apiError.response?.data?.detail
    } else {
      errorMessage = apiError.response.data.detail![0].msg as string
    }
    $q.notify({
      type: 'negative',
      message: errorMessage,
    });
  })

}

onMounted(() => {

})
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
