<template>
  <button
    :class="{
      btn_disable: loaderIsActive
    }"
    @click="AddToCart"
    class="btn"
  >
    <template v-if="getActiveLoader()">
      <RingLoader :color="'#F4F6F9'" :size="30" />
    </template>
    <template v-else>
      <span class="btn__body">
        <slot name="btn-body">
          Button
        </slot>
      </span>
    </template>
  </button>
</template>

<script>
import { RingLoader } from "vue-spinners-css";

export default {
  props: {
    cardID: {
      type: Number,
      required: false,
      default: null
    },
    loader: {
      type: Boolean,
      required: false
    }
  },
  name: "VButton",
  components: {
    RingLoader
  },
  data() {
    return {
      loaderIsActive: false
    };
  },
  computed: {
    getActiveLoader() {
      return () =>
        this.loader ? (this.loaderIsActive = false) : this.loaderIsActive;
    }
  },
  methods: {
    AddToCart() {
      if (this.cardID !== null) {
        this.$emit("buy-product");
        this.loaderIsActive = !this.loaderIsActive;
      } else {
        return;
      }
    }
  }
};
</script>
