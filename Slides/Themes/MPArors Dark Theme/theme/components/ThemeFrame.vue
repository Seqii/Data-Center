<script setup lang="ts">
import TeamBrand from './TeamBrand.vue'
withDefaults(defineProps<{ kind: string; brand?: boolean }>(), { brand: true })
</script>

<template>
  <div class="slidev-layout mparors" :class="`mparors--${kind}`">
    <div class="mparors__content"><slot /></div>
    <template v-if="brand">
      <TeamBrand v-if="kind === 'title'" variant="footer" />
      <TeamBrand v-else-if="kind === 'section-description'" variant="half" />
      <TeamBrand v-else variant="corner" />
      <TeamBrand v-if="kind === 'section'" variant="top" />
    </template>
  </div>
</template>
