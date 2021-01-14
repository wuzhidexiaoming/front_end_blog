<template>
  <div class="flex relative bg-blue-400 h-full text-center">
    <router-link
        class="px-1 mx-1 h-2 hover:bg-gray-800"
        v-for="route in formatRoutes"
        :to="route.path"
    >
      {{ route.title }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { routes } from "../../router";
export default defineComponent({
  name: "mg_header",
  setup() {
    const formatRoutes = routes
        .filter((ele) => {
          if (ele.meta) {
            return ele.meta.isShow !== false;
          } else {
            return !!ele.name;
          }
        })
        .map((ele) => {
          let title: string;
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

<style scoped></style>
