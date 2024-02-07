<template>
  <section class="container">
    <BreadcrumbComponent :routes="meta.breadcrumb" />
    <div class="favorites-page__heading">Избранное</div>
    <div v-if="likeProducts.length" class="row">
      <div
        class="catalog col-xs-12 col-sm-6 col-md-4 col-lg-3"
        v-for="likeProduct in likeProducts"
        :key="likeProduct.id"
      >
        <FavoritesCard :likeProduct="likeProduct" />
      </div>
    </div>
    <div v-else class="favorites-page__no-favorites">
      Список избранного пуст
    </div>
  </section>
</template>

<script>
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";
import FavoritesCard from "@/components/FavoritesCard.vue";

export default {
  name: "FavoritesPage",

  components: {
    BreadcrumbComponent,
    FavoritesCard,
  },

  data() {
    return {
      meta: {
        breadcrumb: [
          { label: "Главная", to: "/" },
          {
            label: "Избранное",
            to: "/favorites",
          },
        ],
      },
    };
  },

  computed: {
    likeProducts() {
      return this.$store.state.likeProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.favorites-page {
  width: 100%;

  &__heading {
    font-size: 40px;
    font-weight: 500;
    color: #0a1e32;
    margin-bottom: 32px;
  }

  &__no-favorites {
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    margin: 123px auto;
    color: #464c58;
  }
}
</style>
