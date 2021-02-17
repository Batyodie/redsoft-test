<template>
  <button class="btn ">
    <slot name="btn-body-icon">
      <!-- <img class="btn__icon" :src="icon" alt="check icon" /> -->
    </slot>
    <span class="btn__body">
      <slot name="btn-body">
        Button
      </slot>
    </span>
  </button>
</template>

<script>
import checkIcon from "@/assets/feather_check.svg";
export default {
  name: "VButton",
  data() {
    return {
      icon: checkIcon
    };
  }
};
</script>
