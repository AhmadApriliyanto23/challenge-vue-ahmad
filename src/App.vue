<template>
  <div>
    <div class="app container">
      <router-link to="/">LOGIN</router-link> | <router-link to="/pin">PIN</router-link>
      <router-view />
    </div>
    <vue3-snackbar bottom :duration="2000"></vue3-snackbar>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped></style>
