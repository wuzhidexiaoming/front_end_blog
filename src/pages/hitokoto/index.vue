<template>
  <button
    class="w-2 h-1 border rounded-sm bg-gray-50"
    :class="{ 'cursor-not-allowed': count > 0 }"
    :disabled="count > 0"
    @click="getData({})"
  >
    下一个 {{ count || "" }}
  </button>
  <div
    class="2xl:bg-gray-50 mt-1 h-2 leading-2 text-center md:text-text-normal"
  >
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
