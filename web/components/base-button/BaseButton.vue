<script setup lang="ts">
const props = defineProps({
  icon: { type: String },
  label: { type: String },
  color: { type: String }
});

const emit = defineEmits(['click']);

const buttonColorClass = useBsButtonColor(props.color);
</script>

<template>
  <button class="btn" :class="buttonColorClass" @click="$emit('click')">
    <BaseIconLabel :icon="icon" :label="label" />
  </button>
</template>
