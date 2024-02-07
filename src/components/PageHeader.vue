<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__wrap">
        <RouterLink :to="`/`">
          <img class="page-header__logo" src="@/assets/icon/logo.svg" alt="#"
        /></RouterLink>
        <RouterLink class="page-header__icon" :to="`/favorites`">
          <img src="@/assets/icon/icon-favourites.svg" alt="#" />
          <div class="page-header__counter-bg">
            <div class="page-header__counter">{{ likeCounter }}</div>
          </div></RouterLink
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",

  computed: {
    likeProducts() {
      return this.$store.state.likeProducts;
    },

    likeCounter() {
      return this.$store.state?.likeProducts?.length;
    },
  },
};
</script>

<style lang="scss">
.page-header {
  border-bottom: 1px solid #000;

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
  }

  &__logo {
    width: 161px;
    height: 40px;
    margin: 11px 0 24px 0;
  }

  &__icon {
    position: relative;
    margin-right: 10px;
    width: 30px;
    height: 21px;
  }

  &__counter {
    font-size: 8px;
    font-weight: 700;
    color: #fff;
  }
  
  &__counter-bg {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
    background-color: #eb4c47;
    border-radius: 50%;
    right: 1px;
    top: -2px;
  }
}
</style>
