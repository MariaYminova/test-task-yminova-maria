import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    likeProducts: JSON.parse(localStorage.getItem("likeProducts")) || [],
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    setLikeProducts(state, newList) {
      state.likeProducts = newList;
      localStorage.setItem("likeProducts", JSON.stringify(newList));
    },
  },

  actions: {
    fetchProducts: async ({ commit }) => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/women's%20clothing`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }

        const data = await response.json();
        commit("setProducts", data);
      } catch (error) {
        console.error(error.message);
      }
    },

    addLike: ({ commit, state }, { productId }) => {
      if (!productId) {
        return;
      }

      const product = state.products.find(
        (product) => product.id === productId
      );

      commit("setLikeProducts", [...state.likeProducts, product]);
    },

    removeLike: ({ commit, state }, { productId }) => {
      if (!productId) {
        return;
      }

      const newLikeProducts = state.likeProducts.filter((product) => {
        return product.id !== productId;
      });

      commit("setLikeProducts", newLikeProducts);
    },

    toggleLike: ({ state, dispatch }, { productId }) => {
      const like = state.likeProducts.find((like) => like.id === productId);

      if (like) {
        dispatch("removeLike", { productId });
      } else {
        dispatch("addLike", { productId });
      }
    },
  },
});
