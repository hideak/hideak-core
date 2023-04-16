<script setup lang="ts">
defineProps({
  isVisible: { type: Boolean }
})
</script>

<template>
  <div :class="{ 'is-visible': isVisible }" class="menu py-1 d-flex flex-column align-items-center">
    <BaseHeaderMenuItem label="Início" path="/home" />
    <BaseHeaderMenuItem label="Projetos" path="/projects" />
    <BaseHeaderMenuItem label="Blog" path="/blog" />
    <BaseHeaderMenuItem label="Currículo" path="/resume" />
    <BaseHeaderMenuItem label="Contato" path="/contact" />
  </div>
</template>

<style lang="scss" scoped>
div.menu {
  height: 0;
  transition: height 180ms ease;
}

div.menu.is-visible {
  height: auto;
}
</style>