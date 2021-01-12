<template>
  <div id="app">
    <div class="header">
      <router-link v-for="route in formatRoutes" :to="route.path">
        {{ route.title }}
      </router-link>
    </div>
    <div id="center">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { routes } from "./router/index";
export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const formatRoutes = routes.map((ele) => {
      let title = "";
      if (ele.meta && ele.meta.title) {
        title = ele.meta.title;
      } else {
        title = ele.name;
      }
      return {
        path: ele.path,
        name: ele.name,
        title: title,
      };
    });
    return {
      formatRoutes,
    };
  },
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
#center {
  max-width: 630px;
  margin: 0 auto;
  width: 630px;
  background-color: gray;
  height: calc(100% - 100px);
}
.header {
  height: 100px;
  line-height: 100px;
  text-align: center;
}
</style>
