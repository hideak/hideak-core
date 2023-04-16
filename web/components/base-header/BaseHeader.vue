<script setup lang="ts">
const isMenuVisible = ref(false);
</script>

<template>
  <div class="py-2 container-xxl">
    <div class="d-flex justify-content-between align-items-center">
      <BaseHeaderBrand />
      <BaseHeaderMenuToggle />
    </div>
    <BaseHeaderMenu :isVisible="isMenuVisible" @toggled="isMenuVisible = !isMenuVisible" />
  </div>
</template>