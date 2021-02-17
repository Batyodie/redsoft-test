<template>
  <header class="header">
    <VNavBar />
    <template v-if="searchForm">
      <VSearch />
    </template>
    <template v-if="connectionForm">
      <VConnection />
    </template>
  </header>
</template>

<script>
import VConnection from "../VConnection/VConnection.vue";
import VSearch from "../VSearch/VSearch.vue";
import VNavBar from "../VNavBar/VNavBar.vue";

export default {
  props: {
    searchForm: {
      type: Boolean,
      required: true
    },
    connectionForm: {
      type: Boolean,
      required: true
    }
  },
  name: "VHeader",
  components: { VNavBar, VSearch, VConnection }
};
</script>
