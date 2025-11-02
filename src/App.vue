<script setup lang="ts">
import { RouterView } from "vue-router";
import PreLoader from "./components/wedding/PreLoader.vue";
</script>

<template>
  <div id="wedding-mm">
    <pre-loader />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/style/style.scss";

@font-face {
  font-family: "Playfair Display";
  src: url("/src/assets/webfonts/playfairdisplay-regular.woff2") format("woff2"),
    url("/src/assets/webfonts/playfairdisplay-regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Magical Rhymes";
  src: url("/src/assets/webfonts/magical-rhymes.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Palmer Lake";
  src: url("/src/assets/webfonts/palmer-lake-regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
</style>
