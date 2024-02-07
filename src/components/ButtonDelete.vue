<template>
  <div>
    <button class="button-delete" @click="removeFromLikes"></button>
  </div>
</template>

<script>
export default {
  name: "ButtonDelete",

  props: {
    likeId: {
      type: Number,
      required: true
    },
  },

  methods: {
    removeFromLikes() {
      this.$store.dispatch("removeLike", {
        productId: this.likeId,
      });
    },
  },
};
</script>

<style lang="scss">
.button-delete {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 19px;
  height: 19px;
  background-image: url("@/assets/icon/icon-delete.svg");
  z-index: 2;
}
</style>
