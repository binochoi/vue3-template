<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';

useHead({
  titleTemplate: (t) => `vue3-template :: ${t}`,
});
</script>
<template>
  <RouterView page />
  <ModalsContainer />
</template>
