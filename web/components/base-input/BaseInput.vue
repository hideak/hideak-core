<script setup lang="ts">
defineProps({
  label: { type: String },
  leftLabel: { type: String },
  rightLabel: { type: String },
  buttonLabel: { type: String },
  leftIcon: { type: String },
  rightIcon: { type: String },
  buttonIcon: { type: String },
  buttonColor: { type: String },
  type: { type: String, required: true },
  placeholder: { type: String, required: true }
})

</script>

<template>
  <BaseInputGroup>
    <BaseLabel v-if="label">{{ label }}</BaseLabel>
    <BaseIconLabel v-if="leftLabel || leftIcon" class="input-group-text" :icon="leftIcon" :label="leftLabel" />
    <input class="form-control" :type="type" :placeholder="placeholder">
    <BaseIconLabel v-if="rightLabel || rightIcon" class="input-group-text" :icon="rightIcon" :label="rightLabel" />
    <BaseButton v-if="buttonLabel || buttonIcon" :icon="buttonIcon" :label="buttonLabel" :color="buttonColor" />
  </BaseInputGroup>
</template>