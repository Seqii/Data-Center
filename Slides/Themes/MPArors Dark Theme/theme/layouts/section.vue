<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="section" :brand="$frontmatter.brand !== false">
    <div class="section-heading"><slot /></div><div class="section-rule" aria-hidden="true" />
  </ThemeFrame>
</template>
