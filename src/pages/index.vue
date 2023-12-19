<script lang="ts" setup>
import { greeting } from '@global/index';

definePage({
  name: 'Home',
});
useHead({
  title: 'Home',
});
</script>
<template>
  {{ greeting }}
</template>
<style lang="scss" scoped>
</style>
