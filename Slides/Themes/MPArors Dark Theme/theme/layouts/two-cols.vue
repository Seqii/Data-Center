<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="two-cols" :brand="$frontmatter.brand !== false">
    <header class="standard-heading"><slot /></header><div class="two-columns"><div><slot name="left" /></div><div><slot name="right" /></div></div>
  </ThemeFrame>
</template>
