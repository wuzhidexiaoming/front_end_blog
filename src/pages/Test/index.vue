<template>
  <Card/>
</template>

<script lang="ts">
import Card from "../../components/Card/index.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Test",
  components: {
    Card,
  },
});
</script>

<style scoped></style>
