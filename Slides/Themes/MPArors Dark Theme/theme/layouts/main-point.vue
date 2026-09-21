<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="main-point" :brand="$frontmatter.brand !== false">
    <div class="main-point-content"><slot /></div>
  </ThemeFrame>
</template>
