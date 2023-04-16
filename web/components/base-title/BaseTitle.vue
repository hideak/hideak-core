<script setup lang="ts">
defineProps({
  title: { type: String },
  subtitle: { type: String }
});
</script>

<template>
  <div class="container-xxl">
    <h2 v-if="title">{{ title }}</h2>
    <h6 v-if="subtitle">{{ subtitle }}</h6>
  </div>
</template>
