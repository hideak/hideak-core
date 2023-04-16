<template>
  <NuxtLink :to="path">
    <BaseIconLabel :icon="icon" :label="label" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: { type: String },
  label: { type: String },
  path: { type: String }
});

/**
 * Evaluates the Bootstrap margin when between the icon
 * and the label when the label is present
 */
const iconMargin = computed(() => {
  return props.label ? 'me-2' : '';
});
</script>