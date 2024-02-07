<template>
  <footer class="footer">
    <div class="footer__container">
      <RouterLink :to="`/favorites`">
        <div class="footer__favorites">Избранное</div></RouterLink
      >
      <a class="footer__telephone" href="tel:88008880088"
        >8 800 888 00 88</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style lang="scss">
.footer {
  background-color: #0a1e32;
  padding: 32px 0;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
  }

  &__favorites {
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
  }

  &__telephone {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
  }
}

@media (max-width: 1400px) {
  .footer {
    &__container {
      padding: 0 20px;
    }
  }
}
</style>
