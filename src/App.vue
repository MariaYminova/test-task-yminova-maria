<template>
  <div class="app" id="app">
    <div class="flex-container">
      <PageHeader class="wrap-header" />
      <RouterView class="wrap-main" />
      <PageFooter class="wrap-footer" />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "App",

  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style lang="scss">
.app {
  height: 100%;
}
.flex-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.wrap-header {
  flex: 0 0 auto;
}

.wrap-main {
  flex: 1 0 auto;
}

.wrap-footer {
  flex: 0 0 auto;
}
</style>
