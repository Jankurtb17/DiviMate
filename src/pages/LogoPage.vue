<template>
  <LogoComponent />
</template>

<script lang="ts" setup>
import LogoComponent from 'src/components/LogoComponent.vue';
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #445ec1;
}

.logo {
  max-width: 150px;
  max-height: 150px;
}
</style>
