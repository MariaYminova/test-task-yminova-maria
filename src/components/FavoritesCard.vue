<template>
  <div class="favorites-card">
    <ButtonDelete :likeId="likeProduct.id" />

    <RouterLink class="favorites-card__link" :to="`/card/${likeProduct.id}`">
      <img
        class="favorites-card__img"
        :src="likeProduct.image"
        :alt="likeProduct.title"
      />
      <p class="favorites-card__title">{{ likeProduct.title }}</p>
      <div class="favorites-card__price">{{ likeProduct.price }}</div>
    </RouterLink>
  </div>
</template>

<script>
import ButtonDelete from "@/components/ButtonDelete.vue";

export default {
  name: "FavoritesCard",

  components: {
    ButtonDelete,
  },

  props: {
    likeProduct: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.favorites-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 418px;
  text-align: center;
  margin-bottom: 39px;
  padding-bottom: 14px;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }

  &__img {
    position: relative;
    height: 336px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 16px;
  }

  &__title {
    height: 12px;
    max-width: 297px;
    font-size: 12px;
    font-weight: 400;
    color: #0a1e32;
    overflow: hidden;
    margin: 0 25px 8px;
  }

  &__price {
    font-size: 16px;
    font-weight: 700;
    color: #464c58;
  }

  &__link {
    width: 100%;
  }
}
</style>
