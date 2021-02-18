import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { getProducts } from "@/api/products.api";

import { galery1, galery2, galery3, galery4 } from "@/assets/";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paintings: [
      {
        id: 0,
        logo: galery1,
        title: "«Рождение Венеры» Сандро Боттичелли",
        oldPrice: "2 000 000",
        currentPrice: "1 000 000",
        sold: false,
        added: false
      },
      {
        id: 1,
        logo: galery2,
        title: "«Тайная вечеря»  Леонардо да Винчи",
        oldPrice: "",
        currentPrice: "3 000 000",
        sold: false,
        added: false
      },
      {
        id: 2,
        logo: galery3,
        title: "«Сотворение Адама» Микеланджело",
        oldPrice: "6 000 000",
        currentPrice: "5 000 000",
        sold: false,
        added: false
      },
      {
        id: 3,
        logo: galery4,
        title: "«Урок анатомии»  Рембрандт",
        oldPrice: "",
        currentPrice: "",
        sold: true,
        added: false
      }
    ]
  },
  plugins: [createPersistedState()],
  mutations: {
    setUpdateCartItem(state, payload) {
      state.paintings[payload.id].added = payload.data;
    }
  },
  actions: {
    async updateToCart({ commit, state }, payload) {
      try {
        await getProducts();
        if (state.paintings[payload.id].added) {
          setTimeout(() => {
            commit("setUpdateCartItem", payload);
          }, 100);
        } else {
          setTimeout(() => {
            commit("setUpdateCartItem", payload);
          }, 1000);
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  getters: {
    getPaintings: ({ paintings }) => paintings
  },

  strict: process.env.NODE_ENV !== "production"
});
