<script setup lang="ts">
import Layout from './title.vue'
</script>
<template>
  <Layout>
    <slot />
    <template #subtitle><slot name="subtitle" /></template>
  </Layout>
</template>
