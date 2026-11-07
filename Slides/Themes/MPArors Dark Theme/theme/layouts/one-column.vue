<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="one-column" :brand="$frontmatter.brand !== false">
    <div class="narrow-column"><slot /></div><div class="one-column-visual"><slot name="right" /></div>
  </ThemeFrame>
</template>
