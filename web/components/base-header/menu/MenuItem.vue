<script setup lang="ts">
defineProps({
  label: { type: String, required: true },
  path: { type: String }
});

</script>
<template>
  <NuxtLink class="w-100 py-1" :to="path">
    <BaseButton class="w-100" color="light" :label="label" />
  </NuxtLink>
</template>
