<script setup lang="ts">
defineEmits(['toggled']);
</script>

<template>
  <BaseButton class="text-nowrap" icon="list" label="Menu" color="dark" @click="$emit('toggled')" />
</template>