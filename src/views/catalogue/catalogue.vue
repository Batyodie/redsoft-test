<template>
  <div class="catalog-page">
    <div class="catalog-page__container  catalog-page__header">
      <div class="catalog-page__wrapper catalog-page__border-bottom">
        <VBar :tagHeader="true" :searchForm="true" :connectionForm="false" />
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
    <div class="catalog-page__container catalog-page__main-content">
      <div class="catalog-page__wrapper">
        <div class="catalog-page__content-list">
          <VCard
            v-for="painting in paintings"
            :key="painting.id"
            :painting="painting"
            :class="['catalog-page__content-item']"
          />
        </div>
      </div>
    </div>
    <div
      style="background-color:#ECEAEA"
      class="catalog-page__container catalog-page__footer"
    >
      <div class="catalog-page__wrapper ">
        <VBar :tagHeader="false" :searchForm="false" :connectionForm="true" />
      </div>
    </div>
  </div>
</template>

<script>
import VCard from "@/components/VCard/VCard.vue";
import VBar from "@/components/VBar/VBar.vue";

import { mapGetters } from "vuex";

export default {
  name: "catalogue",
  components: {
    VBar,
    VCard
  },
  computed: {
    ...mapGetters({
      paintings: "getPaintings"
    })
  }
};
</script>
