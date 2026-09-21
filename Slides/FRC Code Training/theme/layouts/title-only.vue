<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="title-only" :brand="$frontmatter.brand !== false">
    <div class="standard-flow"><slot /></div>
  </ThemeFrame>
</template>
