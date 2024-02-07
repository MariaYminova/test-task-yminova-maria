<template>
  <section class="container">
    <div class="row">
      <div
        class="catalog col-xs-12 col-sm-6 col-md-4 col-lg-3"
        v-for="product in products"
        :key="product.id"
      >
        <CatalogCard :product="product" />
      </div>
    </div>
  </section >
</template>

<script>
import CatalogCard from "@/components/CatalogCard.vue";

export default {
  name: "CatalogProducts",

  components: {
    CatalogCard,
  },

  created() {
    this.$store.dispatch("fetchProducts");
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
