<template>
  <div class="logo-company logo-company_margin_right">
    <a class="logo-company__link" href="#">
      <img
        class="logo-company__image"
        width="48px"
        height="48px"
        :src="logo"
        alt="Logo company"
      />
    </a>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  name: "VLogo",
  data() {
    return {
      logo
    };
  }
};
</script>
