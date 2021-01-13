<template>
  <button :disabled="count > 0" @click="getData({})">
    下一个 {{ count || "" }}
  </button>
  <div>
    {{ hitokotoData.data.data && hitokotoData.data.data.hitokoto }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { getHitokoto } from "../../api/data";

export default defineComponent({
  name: "task",
  setup() {
    let timer: number;
    let count = ref(0);
    let hitokotoData = reactive({
      data: {},
    });
    const getData = async (options: Object) => {
      clearInterval(timer);
      count.value = 0;
      let obj = {
        size: 10,
        c: ["d", "i"],
      };
      console.log(obj);
      options = Object.assign(obj, options);
      let responseData = await getHitokoto(options);
      count.value = 3;
      timer = setInterval(() => {
        if (count.value === 0) {
          clearInterval(timer);
        } else {
          count.value--;
        }
      }, 1000);
      console.log(responseData);
      hitokotoData.data = responseData;
      console.log(hitokotoData);
    };
    getData();
    return {
      count,
      hitokotoData,
      getData,
    };
  },
});
</script>

<style scoped></style>
