<script setup lang="ts">
defineProps({
  icon: { type: String },
  title: { type: String },
  description: { type: String },
  path: { type: String }
});
</script>

<template>
  <div>
    <h2>
      <BaseIconLabel :icon="icon" :label="title" />
    </h2>
    <p>
      {{ description }}
    </p>
    <BaseLink icon="box-arrow-up-right" label="Acessar" :path="path" />
  </div>
</template>