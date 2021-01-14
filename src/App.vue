<template>
  <div id="app">
    <div class="h-1/6">
      <mg-header />
    </div>
    <div class="w-9/12 mx-auto bg-blue-700 h-5/6 p-1" id="center">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mgHeader from "./components/header/index.vue";

export default defineComponent({
  name: "App",
  components: { mgHeader },
  setup() {},
});
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
