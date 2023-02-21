<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  setup() {
    return {};
  },
  components: { RouterLink },
});
</script>

<template>
  <div>
    <h1>Min hobby</h1>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/live-footage">Live footage</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
}
</style>
