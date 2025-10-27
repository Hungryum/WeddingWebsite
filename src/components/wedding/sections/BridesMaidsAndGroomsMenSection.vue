<script setup lang="ts">
import { getImageFormat } from "@/utils/helpers";

enum type {
  BRIDESMAID = "Demoiselle d'honneur",
  GROOMSMAN = "Garçon d'honneur",
}

const BRIDESMAIDS = [
  {
    name: "BRIDESMAID 1",
    image: "600x600",
    type: type.BRIDESMAID,
  },
  {
    name: "BRIDESMAID 2",
    image: "600x600",
    type: type.BRIDESMAID,
  },
  {
    name: "BRIDESMAID 3",
    image: "600x600",
    type: type.BRIDESMAID,
  },
  {
    name: "BRIDESMAID 4",
    image: "600x600",
    type: type.BRIDESMAID,
  },
];

const GROOMSMEN = [
  {
    name: "GROOMSMAN1",
    image: "600x600",
    type: type.GROOMSMAN,
  },
  {
    name: "GROOMSMAN2",
    image: "600x600",
    type: type.GROOMSMAN,
  },
  {
    name: "GROOMSMAN3",
    image: "600x600",
    type: type.GROOMSMAN,
  },
  {
    name: "GROOMSMAN4",
    image: "600x600",
    type: type.GROOMSMAN,
  },
];
</script>

<template>
  <!-- BEGIN BRIDESMAIDS & GROOMSMEN SECTION -->
  <section id="bmiadsgmen" class="parallax-background bg-color-overlay">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="section-title">
            Demoiselles d'honneur & garçons d'honneur
          </h2>
        </div>
      </div>

      <!-- BRIDESMAIDS -->
      <div class="row center">
        <div
          v-for="(value, index) in BRIDESMAIDS"
          :key="index"
          class="element bmaid-gmen col-sm-6 col-md-3 col-lg-3"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <div class="image">
            <img :src="getImageFormat(value.image)" :alt="value.name" />
            <div class="hover-info neela-style">
              <div class="content center">
                <h5>
                  {{ value.name }}<small>{{ value.type }}</small>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- GROOMSMEN -->
      <div class="row center">
        <div
          v-for="(value, index) in GROOMSMEN"
          :key="index"
          class="element bmaid-gmen col-sm-6 col-md-3 col-lg-3"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <div class="image">
            <img :src="getImageFormat(value.image)" :alt="value.name" />
            <div class="hover-info neela-style">
              <div class="content center">
                <h5>
                  {{ value.name }}<small>{{ value.type }}</small>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END BRIDESMAIDS & GROOMSMEN SECTION -->
</template>

<style scoped></style>
../../../utils/helpers