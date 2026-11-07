<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="code-split" :brand="$frontmatter.brand !== false">
    <header class="standard-heading"><slot /></header><div class="code-split-content"><div class="code-explanation"><slot name="left" /></div><div class="code-example"><slot name="right" /></div></div>
  </ThemeFrame>
</template>
