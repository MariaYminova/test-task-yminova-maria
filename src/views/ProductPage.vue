<template>
  <div class="container">
    <BreadcrumbComponent :routes="breadcrumb" />
    <div class="product-page">
      <img class="product-page__img" :src="product.image" alt="#" />
      <div class="product-page__info">
        <p class="product-page__title">{{ product.title }}</p>
        <p class="product-page__description">{{ product.description }}</p>
        <div class="product-page__price">{{ product.price }}</div>
        <ButtonFavorites v-if="product?.id" :productId="product.id" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonFavorites from "@/components/ButtonFavorites.vue";
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";

export default {
  name: "ProductPage",

  components: {
    ButtonFavorites,
    BreadcrumbComponent,
  },

  data() {
    return {
      product: {},
    };
  },

  mounted() {
    this.fetchProduct();
  },

  computed: {
    breadcrumb() {
      return [
        { label: "Главная", to: "/" },
        { label: this.product.title, to: `/card/${this.product.id}` },
      ];
    },
  },

  methods: {
    async fetchProduct() {
      const productId = this.$route.params.productId;
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }
      const data = await response.json();
      this.product = data;
      this.$store.commit("setProducts", [data]);
    },
  },
};
</script>

<style lang="scss">
.product-page {
  display: flex;
  margin-bottom: 112px;

  &__img {
    width: 680px;
    height: 715px;
    border: 1px solid #e5e5e5;
    object-fit: contain;
    margin-right: 40px;
    padding: 5px;
  }

  &__info {
    width: 680px;
  }

  &__title {
    font-size: 40px;
    font-weight: 500;

    margin-bottom: 24px;
    color: #0a1e32;
  }

  &__description {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 24px;
    color: #464c58;
  }

  &__price {
    font-size: 32px;
    font-weight: 700;

    margin-bottom: 24px;
    color: #464c58;
  }
}

@media (max-width: 1400px) {
  .product-page {
    display: flex;
    flex-direction: column;
    margin-bottom: 112px;

    &__info {
      width: 100%;
    }

    &__img {
      width: 100%;
      height: 450px;
      border: 1px solid #e5e5e5;
      object-fit: contain;
      margin-bottom: 40px;
      padding: 5px;
    }
  }
}
</style>
