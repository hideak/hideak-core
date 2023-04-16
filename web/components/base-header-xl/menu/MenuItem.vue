<template>
  <NuxtLink :to="path">
    <div class="menu-container">
      <h6 class="menu-item m-0 px-3" :class="{ 'is-route-activated': isRouteActivated }">{{ label }}</h6>
      <div class="menu-pill" :class="{ 'is-route-activated': isRouteActivated }"></div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, required: true },
  path: { type: String }
});

const route = useRoute();

/**
 * Computes if a specific route is activated accordingly with
 * the menu item path property
 */
const isRouteActivated = computed(() =>
  props.path ? route.path.startsWith(props.path) : false
);
</script>

<style scoped lang="scss">
@import 'styles/variables';

a {
  color: inherit;
  text-decoration: none;
}

.menu-container {
  position: relative;
}

.menu-pill {
  z-index: 1;
  position: absolute;
  border-radius: 1rem;
  background-color: $primary-accent;
  height: 2rem;
  left: 0.25rem;
  right: 0.25rem;
  top: 50%;
  opacity: 0;
  transition: all 180ms ease;
}

.menu-item {
  cursor: pointer;
  z-index: 2;
  position: relative;
  transition: all 180ms ease;
}

.menu-item:hover+.menu-pill,
.menu-pill.is-route-activated {
  top: -0.25rem;
  opacity: 1;
}

.menu-item:hover,
.menu-item.is-route-activated {
  color: white;
}
</style>