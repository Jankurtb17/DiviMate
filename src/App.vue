<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view name="MainPage" />
      <router-view name="Login" v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component" />
        </transition>
      </router-view>
      <router-view name="AuthenticatedUser" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'App',
});
</script>


<style scoped>
/* Transition styles */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

/* Incoming page slides in from the right */
.slide-enter-from {
  transform: translateX(100%);
}

/* Outgoing page slides out to the left */
.slide-leave-to {
  transform: translateX(-100%);
}

/* Starting point for entering and ending point for leaving */
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>