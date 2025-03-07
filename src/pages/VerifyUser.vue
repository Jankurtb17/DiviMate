<template>
  <div class="q-pa-md ">
    <q-icon name="keyboard_backspace" size="20px" color="grey-8" @click="returnBack" />
    <div class="verify-page ">
      <span class="text-h5 text-primary text-bold">Verification</span>
      <p class="text-center">Please enter the one-time PIN(OTP) that we sent on <br /> your registered email address</p>

      <q-form @submit="verifyToken" class="token-verification-form">
        <div class="row q-gutter-sm justify-center">
          <!-- Six input boxes for the token -->
          <q-input v-for="(digit, index) in tokenDigits" :key="index" v-model="tokenDigits[index]" ref="tokenInputs"
            outlined maxlength="1" class="col token-input" @input="onInput(index)" @keydown="onKeydown($event, index)"
            input-style="text-align: center;" type="tel" inputmode="numeric" pattern="^[0-9]*$" />
        </div>

        <span class="text-red-5" v-if="invalidToken">Invalid OTP. Please try again</span>

        <q-btn push type="submit" class="q-mt-md full-width" color="indigo-6" label="Verify" text-color="white"
          :disable="isTokenIncomplete" />

        <p class="text-center q-ma-md text-grey-8" v-if="timer > 0">
          Resend Code in {{ timer }}
        </p>
        <p class="text-center q-ma-md text-indigo-5 text-weight-medium cursor-pointer" v-else>
          Resend code
        </p>

      </q-form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
const router = useRouter()
const timer = ref(120)
// Initialize Quasar
const $q = useQuasar();

// Array to hold the 6 digits of the token
const tokenDigits = ref(['', '', '', '', '', '']);

// References to the input elements
const tokenInputs = ref([]);
const invalidToken = ref(false)
// Check if the token is fully filled
const isTokenIncomplete = computed(() => {
  return tokenDigits.value.some(digit => !digit);
});

const returnBack = () => {
  router.go(-1)
}

// Handle input to move focus to the next box
const onInput = (index) => {
  if (tokenDigits.value[index] && index < 5) {
    tokenInputs.value[index + 1].focus();
  }
};

// Handle backspace and navigation
const onKeydown = (event, index) => {
  if (event.key === 'Backspace' && !tokenDigits.value[index] && index > 0) {
    tokenInputs.value[index - 1].focus();
  }
};

// Verify the token
const verifyToken = async () => {
  const token = tokenDigits.value.join('');
  if (token.length !== 6) {
    $q.notify({
      type: 'negative',
      message: 'Please enter a 6-digit token.',
    });
    return;
  }

  // Simulate API call to verify token
  try {
    // Replace this with your actual API call
    console.log('Verifying token:', token);
    invalidToken.value = false
    $q.notify({
      type: 'positive',
      message: 'Token verified successfully!',
    });
    // Reset the form or redirect user
    tokenDigits.value = ['', '', '', '', '', ''];
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Invalid token. Please try again.',
    });
    invalidToken.value = true
  }
};

const countDownTimer = () => {
  if (timer.value > 0) {
    setTimeout(() => {
      timer.value -= 1
      countDownTimer()
    }, 1000)
  }
}
onMounted(() => {
  countDownTimer()
})
</script>

<style scoped>
.verify-page {
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