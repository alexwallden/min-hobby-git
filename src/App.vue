<script setup lang="ts">
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
console.log('Hej');
</script>
<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
@import './style/variables';
main {
  height: calc(100vh - $header-height);
  background-color: $yellow;
}
</style>
