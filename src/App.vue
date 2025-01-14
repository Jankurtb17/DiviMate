<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view name="MainPage" />
      <router-view name="Login" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'App',
});
</script>
