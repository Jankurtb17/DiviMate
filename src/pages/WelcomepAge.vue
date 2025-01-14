<template>
  <div
    class="q-pa-md text-center"
    style="
      display: flex;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      gap: 8px;
    "
  >
    <!-- Image Section -->
    <div class="row">
      <q-img src="../assets/svg/checklist.svg" no-native-menu />
    </div>

    <!-- Welcome Text -->
    <div class="row">
      <div class="col text-h2 text-weight-bolder text-indigo-5">Welcome</div>
    </div>

    <!-- Description -->
    <div class="row">
      <div class="col text-h5">
        Effortlessly track and <br />
        manage your bills
      </div>
    </div>

    <!-- Login Button -->
    <div class="row full-width q-mt-md">
      <div class="col">
        <q-btn
          rounded
          size="lg"
          class="full-width"
          color="indigo-5"
          label="LOGIN"
        />
      </div>
    </div>

    <!-- Register Button -->
    <div class="row full-width q-mt-sm">
      <div class="col">
        <q-btn
          size="lg"
          rounded
          class="full-width"
          outline
          color="black"
          label="Register"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// No script setup code is needed for this component
</script>
