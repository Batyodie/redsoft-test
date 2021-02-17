<template>
  <form @submit.prevent class="search-form">
    <input
      type="text"
      class="search-form__input"
      placeholder="Поиск по названию картины"
    />
    <VButton class="btn_size_d">
      <template slot="btn-body">
        Найти
      </template>
    </VButton>
  </form>
</template>

<script>
import VButton from "../VButton/VButton.vue";

export default {
  name: "VSearch",
  components: { VButton }
};
</script>
