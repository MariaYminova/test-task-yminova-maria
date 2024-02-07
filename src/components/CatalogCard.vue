<template>
  <div class="catalog-card">
    <ButtonFavorites
      :productId="product.id"
      likeView
      class="catalog-card__like-button"
    />

    <RouterLink class="catalog-card__link" :to="`/card/${product.id}`">
      <img class="catalog-card__img" :src="product.image" alt="" />
      <div class="catalog-card__title">{{ product.title }}</div>
      <div class="catalog-card__price">{{ product.price }}</div></RouterLink
    >
  </div>
</template>

<script>
import ButtonFavorites from "@/components/ButtonFavorites.vue";

export default {
  name: "CatalogCard",

  components: {
    ButtonFavorites,
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.catalog-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 418px;
  margin-bottom: 39px;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }

  &__like-button {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 2;
  }

  &__img {
    position: relative;
    height: 336px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 16px;
    padding: 5px;
  }

  &__title {
    height: 15px;
    font-size: 12px;
    font-weight: 400;
    margin: 0 25px 8px;
    overflow: hidden;
    color: #0a1e32;
  }

  &__price {
    font-size: 16px;
    font-weight: 700;
    color: #464c58;
  }

  &__link {
    width: 100%;
    height: 100%;
  }
}
</style>
