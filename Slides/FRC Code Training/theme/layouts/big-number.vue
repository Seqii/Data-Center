<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="big-number" :brand="$frontmatter.brand !== false">
    <div class="big-number-value"><slot /></div><div class="big-number-caption"><slot name="caption" /></div>
  </ThemeFrame>
</template>
