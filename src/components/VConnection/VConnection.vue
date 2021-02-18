<template>
  <div class="connection-blog">
    <ul class="connection-blog__list">
      <li class="connection-blog__item">
        <img
          width="16px"
          height="16px"
          class="connection-blog__image-icon"
          :src="tel"
          alt="phone icon"
        />
        <a href="tel:+74955555555" class="connection-blog__link">
          +7 (495) 555-55-55</a
        >
      </li>
      <li class="connection-blog__item">
        <img
          width="16px"
          height="16px"
          class="connection-blog__image-icon"
          :src="adress"
          alt="adress-icon"
        />
        <a href="#" class="connection-blog__link">
          г. Москва, ул. Расплетина, 24</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { adress, tel } from "@/assets/";
export default {
  name: "VConnection",
  data() {
    return {
      adress,
      tel
    };
  }
};
</script>
