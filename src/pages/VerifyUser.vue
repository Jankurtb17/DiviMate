<template>
  <div class="q-pa-md">
    <div class="verify-page window-height">
      <h5 class="text-h5 text-primary text-bold">Verification</h5>
      <p class="text-center">Enter the code we sent on your registered <br /> email address</p>

      <q-form @submit="verifyToken" class="token-verification-form">
        <div class="row q-gutter-sm justify-center">
          <!-- Six input boxes for the token -->
          <q-input v-for="(digit, index) in tokenDigits" :key="index" v-model="tokenDigits[index]" ref="tokenInputs"
            outlined dense maxlength="1" class="token-input" @input="onInput(index)" @keydown="onKeydown($event, index)"
            input-style="text-align: center;" type="tel" inputmode="numeric" pattern="[0-9]*" />
        </div>

        <q-btn push type="submit" class="q-mt-md full-width" color="indigo-6" label="Login" text-color="white"
          :disable="isTokenIncomplete" />
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

// Initialize Quasar
const $q = useQuasar();

// Array to hold the 6 digits of the token
const tokenDigits = ref(['', '', '', '', '', '']);

// References to the input elements
const tokenInputs = ref([]);

// Check if the token is fully filled
const isTokenIncomplete = computed(() => {
  return tokenDigits.value.some(digit => !digit);
});

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
  }
};
</script>

<style scoped>
.verify-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.token-input {
  width: 50px;
  height: 100px;
}

.token-verification-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>