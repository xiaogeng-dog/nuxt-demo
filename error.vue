<script lang="ts" setup>
const props = defineProps({
  error: Object,
});
console.log(11111, props.error);
// 会首页
function onGoHomeclick() {
  // 清空错误信息，再跳转
  clearError({ redirect: "/" });
}
</script>

<template>
  <div>Page error {{ error }}</div>
  <div>
    <button @click="onGoHomeclick">go Home</button>
  </div>
</template>

<style scoped></style>
