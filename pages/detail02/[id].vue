<script lang="ts" setup>
const route = useRoute();
const id = route.params.id;

definePageMeta({
  validate: (route) => {
    console.log(/^\d+$/.test(route.params.id as string));
    return /^\d+$/.test(route.params.id as string);
    // if (
    //   route.path.includes("/detail02") &&
    //   /^\d+$/.test(route.params.id as string)
    // ) {
    //   return true;
    // } else {
    //   return {
    //     statusCode: 401,
    //     statusMessage: "validate router error",
    //   };
    // }
  },
});
</script>

<template>
  <div>Page: detail02/{{ id }}</div>
</template>

<style scoped></style>
