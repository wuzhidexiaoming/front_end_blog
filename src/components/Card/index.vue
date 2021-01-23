<template>
  <div></div>
</template>

<script lang="ts">
import { reactive, ref, defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  setup(props, ctx) {
    console.log(props);
    console.log(ctx);
  },
});
</script>

<style scoped></style>
