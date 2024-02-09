import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProductPage from "../views/ProductPage.vue";
import ContactInfo from "../views/ContactInfo.vue";
import ShippingVue from "../views/Shipping.vue";
import PaymentVue from "../views/Payment.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", name: "home", component: HomePage},
    {path: "/product", name: "product", component: ProductPage},
    {path: "/contactinfo", name:"contactinfo", component:ContactInfo},
    {path: "/shipping" , name: "shipping", component: ShippingVue},
    {path: "/payment" , name: "payment", component: PaymentVue}
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
