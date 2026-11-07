<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
</script>

<template>
  <ThemeFrame kind="section-description" :brand="$frontmatter.brand !== false">
    <div class="section-description-title"><slot /></div><div class="section-description-subtitle"><slot name="subtitle" /></div><div class="section-description-body"><slot name="right" /></div>
  </ThemeFrame>
</template>
