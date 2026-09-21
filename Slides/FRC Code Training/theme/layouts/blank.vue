<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="blank" :brand="$frontmatter.brand !== false">
    <div class="blank-content"><slot /></div>
  </ThemeFrame>
</template>
