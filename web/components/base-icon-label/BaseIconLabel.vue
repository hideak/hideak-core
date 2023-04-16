<script setup lang="ts">
const props = defineProps({
  icon: { type: String },
  label: { type: String },
});

const marginClass = useBsIconMargin(props.label);
</script>

<template>
  <span>
    <BaseIcon v-if="icon" :icon="icon" :class="marginClass" />
    <span>{{ label }}</span>
  </span>
</template>