import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/views/MainPage.vue";
import ProductPage from "@/views/ProductPage.vue";
import FavoritesPage from "@/views/FavoritesPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainPage,
  },

  {
    path: "/card/:productId",
    component: ProductPage,
  },

  {
    path: "/favorites",
    component: FavoritesPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
