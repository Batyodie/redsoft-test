<template>
  <div v-if="tagHeader">
    <header class="header">
      <VNavBar />
      <template v-if="searchForm">
        <VSearch />
      </template>
      <template v-if="connectionForm">
        <VConnection />
      </template>
    </header>
  </div>
  <div v-else>
    <footer class="header">
      <VNavBar />
      <template v-if="searchForm">
        <VSearch />
      </template>
      <template v-if="connectionForm">
        <VConnection />
      </template>
    </footer>
  </div>
</template>

<script>
import VConnection from "../VConnection/VConnection.vue";
import VSearch from "../VSearch/VSearch.vue";
import VNavBar from "../VNavBar/VNavBar.vue";

export default {
  props: {
    tagHeader: {
      type: Boolean,
      required: true
    },
    searchForm: {
      type: Boolean,
      required: true
    },
    connectionForm: {
      type: Boolean,
      required: true
    }
  },
  name: "VBar",
  components: { VNavBar, VSearch, VConnection }
};
</script>
