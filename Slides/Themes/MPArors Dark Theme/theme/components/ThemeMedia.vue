<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{ src?: string; alt?: string; fit?: 'contain' | 'cover'; background?: string }>(), {
  alt: '', fit: 'contain',
})
// Keep public/ assets valid when the built deck is served from a subfolder.
const resolved = computed(() => {
  if (!props.src) return undefined
  if (/^(?:[a-z]+:|\/\/)/i.test(props.src)) return props.src
  return `${import.meta.env.BASE_URL}${props.src.replace(/^\.?\//, '')}`
})
</script>

<template>
  <img v-if="resolved" class="theme-media" :src="resolved" :alt="alt" :style="{ objectFit: fit, background, padding: background ? '20px' : undefined }" />
  <slot v-else />
</template>
