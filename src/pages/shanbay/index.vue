<template>
  <div>今日</div>
  <div>
    <img :src="shanbayData.src" />
    <p>
      {{ shanbayData.title }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { getShanbay } from "../../api/data";

export default defineComponent({
  name: "shanbay",
  setup() {
    const shanbayData = reactive({
      title: "",
      src: "",
    });
    let date = new Date();
    const y = date.getFullYear();
    const m =
      date.getMonth() + 1 < 9
        ? `0${date.getMonth() + 1}`
        : `date.getMonth() + 1`;
    const d = date.getDate();
    let requestData = `${y}-${m}-${d}`;
    console.log(requestData);
    getShanbay(requestData).then((value) => {
      shanbayData.src = value.data.origin_img_urls[0];
      shanbayData.title = value.data.translation;
    });
    return {
      shanbayData,
    };
  },
});
</script>

<style scoped></style>
