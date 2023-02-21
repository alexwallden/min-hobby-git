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
  <header>
    <h1>Min hobby</h1>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/live-footage">Live footage</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import '../style/variables';

header {
  background-color: $green;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;

}
h1 {
  display: flex;
  align-items: center;
  margin: 0;
}
nav {
  width: 50%;
}
ul {
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: space-around;
  font-size: 1.5rem;
}
</style>
