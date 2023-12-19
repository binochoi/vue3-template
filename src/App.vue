<script lang="ts" setup>
import { ModalsContainer } from 'vue-final-modal';

const config = useConfigStore();
useHead({
  titleTemplate: (t) => `${config.value.APP_NAME} :: ${t}`,
});
</script>
<template>
  <RouterView page />
  <ModalsContainer />
</template>
