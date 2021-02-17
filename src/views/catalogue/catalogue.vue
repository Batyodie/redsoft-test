<template>
  <div class="catalog-page">
    <div class="catalog-page__container">
      <div class="catalog-page__wrapper catalog-page__border-bottom">
        <VHeader :searchForm="true" :connectionForm="false" />
      </div>
    </div>
    <div class="catalog-page__container">
      <div class="catalog-page__wrapper">
        <div class="catalog-page__title">
          <h1 class="catalog-page__title-text">
            Картины эпохи Возрождения
          </h1>
        </div>
      </div>
    </div>
    <div class="catalog-page__container">
      <div class="catalog-page__wrapper">
        <div class="catalog-page__content-list">
          <VCard
            v-for="painting in paintings"
            :key="painting.id"
            :painting="painting"
          />
        </div>
      </div>
    </div>
    <div class="catalog-page__container">
      <div class="catalog-page__wrapper ">
        <VHeader :searchForm="false" :connectionForm="true" />
      </div>
    </div>
  </div>
</template>

<script>
import VCard from "../../components/VCard/VCard.vue";
import VHeader from "../../components/VHeader/VHeader.vue";

import { galery1, galery2, galery3, galery4 } from "@/assets/";
export default {
  name: "catalogue",
  components: {
    VHeader,
    VCard
  },
  data() {
    return {
      paintings: [
        {
          id: 0,
          logo: galery1,
          title: "«Рождение Венеры» Сандро Боттичелли",
          oldPrice: "2 000 000",
          currentPrice: "1 000 000",
          sold: false
        },
        {
          id: 1,
          logo: galery2,
          title: "«Тайная вечеря»  Леонардо да Винчи",
          oldPrice: "",
          currentPrice: "3 000 000",
          sold: false
        },
        {
          id: 2,
          logo: galery3,
          title: "«Сотворение Адама» Микеланджело",
          oldPrice: "6 000 000",
          currentPrice: "5 000 000",
          sold: false
        },
        {
          id: 3,
          logo: galery4,
          title: "«Урок анатомии»  Рембрандт",
          oldPrice: "",
          currentPrice: "",
          sold: true
        }
      ]
    };
  }
};
</script>

<style></style>
