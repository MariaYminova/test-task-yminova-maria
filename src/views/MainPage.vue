<template>
  <div>
    <img class="banner" src="@/assets/icon/img-banner.webp" alt="#" />
    <CatalogProducts class="catalog-products" />
  </div>
</template>

<script>
import CatalogProducts from "@/components/CatalogProducts.vue";

export default {
  name: "MainPage",

  components: {
    CatalogProducts,
  },
};
</script>

<style>
.banner {
  width: 100%;
  max-height: 505px;
  margin-bottom: 112px;
}

@media (max-width: 1400px) {
  .banner {
    width: 100%;
    object-fit: cover;
  }
}

@media (max-width: 850px) {
  .banner {
    display: none;
  }

  .catalog-products {
    margin-top: 40px;
  }
}
</style>
