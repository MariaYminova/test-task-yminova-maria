<template>
  <div class="breadcrumb-component">
    <RouterLink v-for="(route, index) in routes" :key="index" :to="route.to">
      {{ route.label }}
      <span
        class="breadcrumb-component__ui-element"
        v-if="index !== routes.length - 1"
      >
        >
      </span>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbComponent",

  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.breadcrumb-component {
  font-size: 12px;
  font-weight: 400;
  margin: 32px 0;
  color: #464c58;

  &__ui-element {
    margin: 0 5px;
  }
}
</style>
