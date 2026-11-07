<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
import ThemeMedia from '../components/ThemeMedia.vue'
withDefaults(defineProps<{ image?: string; alt?: string; fit?: 'contain' | 'cover'; imageBackground?: string }>(), { fit: 'contain' })
</script>

<template>
  <ThemeFrame kind="image" :brand="$frontmatter.brand !== false">
    <header class="standard-heading"><slot /></header><div class="image-media"><ThemeMedia :src="image" :alt="alt" :fit="fit" :background="imageBackground"><slot name="image" /></ThemeMedia></div><div class="image-caption"><slot name="caption" /></div>
  </ThemeFrame>
</template>
