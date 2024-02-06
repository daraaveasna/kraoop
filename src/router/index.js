import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProductPage from "../views/ProductPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", name: "home", component: HomePage},
    {path: "/product", name: "product", component: ProductPage},
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return {top: 0, behavior: "smooth"};
    }
  },
});

export default router;