<template>
  <div class="flex justify-between items-center h-full bg-blue-800">
    <!--logo-->
    <div class="w-2"></div>
    <!--nav导航栏-->
    <div class="w-3/4 self-end">
      <mg-nav></mg-nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mgNav from "../nav/index.vue";
export default defineComponent({
  name: "mg_header",
  components: {
    mgNav,
  },
});
</script>

<style scoped></style>
