<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="title" :brand="$frontmatter.brand !== false">
    <div class="title-heading"><slot /></div><div class="title-subtitle"><slot name="subtitle" /></div>
  </ThemeFrame>
</template>
