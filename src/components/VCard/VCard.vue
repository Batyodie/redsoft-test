<template>
  <a
    :class="{
      'galery-card_disabled': painting.sold
    }"
    href="#"
    class="galery-card galery-card__link"
  >
    <article class="galery-card__card">
      <img
        width="280px"
        height="168px"
        :src="painting.logo"
        alt="galery card image logo"
        class="galery-card__image"
        :class="{
          'galery-card__image_margin_bottom': !painting.oldPrice,
          'galery-card__image_margin_fix': painting.sold
        }"
      />
      <div class="galery-card__card-information">
        <div class="galery-card__title">
          <h2 class="galery-card__title-text">
            {{ painting.title }}
          </h2>
        </div>
        <template v-if="painting.sold !== true">
          <div class="galery-card__pay-menu">
            <div class="galery-card__price">
              <span
                v-if="painting.oldPrice"
                class="galery-card__price-text galery-card__price-text_old"
              >
                {{ painting.oldPrice }} $
              </span>
              <span
                class="galery-card__price-text galery-card__price-text_current"
              >
                {{ painting.currentPrice }} $
              </span>
            </div>
            <VButton class="btn_buy_color btn_size_buy">
              <template slot="btn-body">
                Купить
              </template>
            </VButton>
          </div>
        </template>
        <template v-else>
          <div class="galery-card__pay-menu">
            <div class="galery-card__price">
              <p class="galery-card__sold">
                Продана на аукционе
              </p>
            </div>
          </div>
        </template>
      </div>
    </article>
  </a>
</template>

<script>
import VButton from "../VButton/VButton.vue";

import galeryImage from "@/assets/galery-1.png";

export default {
  props: {
    painting: {
      type: Object,
      required: true
    }
  },
  name: "Vcard",
  components: { VButton },
  data() {
    return {
      icon: galeryImage
    };
  }
};
</script>
