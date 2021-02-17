<template>
  <nav class="nav-bar">
    <VLogo />
    <ul class="nav-bar__list">
      <li class="nav-bar__item">
        <a href="#" class="nav-bar__link">Каталог</a>
      </li>
      <li class="nav-bar__item">
        <a href="#" class="nav-bar__link">Доставка</a>
      </li>
      <li class="nav-bar__item">
        <a href="#" class="nav-bar__link">Оплата</a>
      </li>
      <li class="nav-bar__item">
        <a href="#" class="nav-bar__link">Контакты</a>
      </li>
      <li class="nav-bar__item">
        <a href="#" class="nav-bar__link">О галерее</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import VLogo from "../VLogo/VLogo.vue";
export default {
  name: "VNavBar",
  components: { VLogo }
};
</script>
