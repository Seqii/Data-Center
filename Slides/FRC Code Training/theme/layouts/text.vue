<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="text" :brand="$frontmatter.brand !== false">
    <div class="standard-flow text-flow"><slot /></div>
  </ThemeFrame>
</template>
