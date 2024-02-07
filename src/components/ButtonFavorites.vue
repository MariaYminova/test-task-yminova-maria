<template>
  <div>
    <button
      v-if="productId"
      :class="[
        'button-favorites',
        {
          'button-favorites--like': likeView,
          'button-favorites--active': isLiked,
        },
      ]"
      @click="toggleLike"
    >
      <template v-if="!likeView">
        <div class="button-favorites__icon"></div>
        <div class="button-favorites__name">ИЗБРАННОЕ</div>
      </template>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonFavorites",

  props: {
    productId: {
      type: Number,
      required: true,
    },

    likeView: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isLiked() {
      return Boolean(
        this.$store.state.likeProducts.find(
          (like) => like.id === this.productId
        )
      );
    },
  },

  methods: {
    toggleLike() {
      this.$store.dispatch("toggleLike", { productId: this.productId });
    },
  },
};
</script>

<style lang="scss">
.button-favorites {
  display: flex;
  border: 1px solid #0a1e32;
  border-radius: 4px;
  padding: 8px 34px 8px 37px;

  &--like {
    border: 0;
    padding: 0;
    width: 24px;
    height: 22px;
    background-image: url("@/assets/icon/icon-like-off.svg");
    z-index: 2;
  }

  &--active {
    .button-favorites__icon {
      background-image: url("@/assets/icon/icon-favorites-on.svg");
    }

    &.button-favorites--like {
      background-image: url("@/assets/icon/icon-like-on.svg");
    }
  }

  &__icon {
    height: 18px;
    width: 20px;
    margin-right: 7px;
    background-image: url("@/assets/icon/icon-favorites-off.svg");
  }

  &__name {
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
