<script setup lang="ts">
import ThemeFrame from '../components/ThemeFrame.vue'
import ThemeMedia from '../components/ThemeMedia.vue'
withDefaults(defineProps<{ image?: string; alt?: string; fit?: 'contain' | 'cover'; imageBackground?: string }>(), { fit: 'contain' })
</script>

<template>
  <ThemeFrame kind="caption" :brand="$frontmatter.brand !== false">
    <div class="caption-media"><ThemeMedia :src="image" :alt="alt" :fit="fit" :background="imageBackground"><slot name="image" /></ThemeMedia></div><div class="caption-text"><slot /></div>
  </ThemeFrame>
</template>
