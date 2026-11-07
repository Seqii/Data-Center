<script setup lang="ts">
import logo from '../assets/mparor-logo.png'
withDefaults(defineProps<{ variant?: 'corner' | 'top' | 'footer' | 'half' }>(), { variant: 'corner' })
</script>

<template>
  <div class="team-brand" :class="`team-brand--${variant}`" aria-hidden="true">
    <div v-if="variant === 'corner' || variant === 'top'" class="team-brand__crop">
      <img :src="logo" alt="" class="team-brand__penguin" />
    </div>
    <img v-else :src="logo" alt="" class="team-brand__full" />
  </div>
</template>
