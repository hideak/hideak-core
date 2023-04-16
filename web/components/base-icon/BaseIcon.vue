<template>
  <i :class="`bi bi-${icon}`"></i>
</template>

<script setup lang="ts">
defineProps({
  icon: { type: String }
});
</script>