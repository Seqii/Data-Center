<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="code" :brand="$frontmatter.brand !== false">
    <header class="standard-heading"><slot /></header><div class="code-content"><slot name="code" /></div><div class="code-note"><slot name="note" /></div>
  </ThemeFrame>
</template>
