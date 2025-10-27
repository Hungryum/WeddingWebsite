<script setup lang="ts">
import { computed } from "vue";
import { getQueryParam, KEY_QUERY_PARAM } from "../forms/helpers";

const weddingKey = computed(() => {
  const key = getQueryParam(KEY_QUERY_PARAM);
  return key ?? null;
});
</script>

<template>
  <!-- BEGIN WEDDING LOCATION SECTION -->
  <section id="location" class="no-padding-bottom">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="section-title">Localisation & déroulement</h2>
        </div>
      </div>
    </div>

    <div class="gmap" id="map_canvas_full"></div>

    <div
      class="map_pins_full"
      data-animation-direction="fade"
      data-animation-delay="200"
    >
      <ul class="pins">
        <li><i class="fas fa-praying-hands"></i>Cérémonie Cambodgienne</li>
        <li><i class="fas fa-church"></i>Cérémonie Eglise</li>
        <li><i class="fas fa-glass-cheers"></i>Réception Domaine</li>
        <li><i class="fas fa-utensils"></i>Brunch</li>
      </ul>
    </div>
  </section>
  <!-- END WEDDING LOCATION SECTION -->

  <section id="wedding-details">
    <div class="container">
      <div class="row mt-5">
        <div
          class="col-md-3 my-5 wedding-details"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <i class="fas fa-praying-hands fa-xs"></i>
          <br />
          <h4>
            Cérémonie Cambodgienne
            <small>Le DD MM YYYY</small>
            <small>08H30 - 16H00</small>
          </h4>
          <p>Paris, France <br /></p>
          <a
            :href="'/khmer-ceremony?key=' + weddingKey"
            class="btn btn-primary"
          >
            Le déroulement de la cérémonie
          </a>
        </div>

        <div
          class="col-md-3 my-5 wedding-details"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <i class="fas fa-church fa-xs"></i>
          <br />
          <h4>
            Cérémonie Eglise
            <small>Le DD MM YYYY</small>
            <small>13H30 - 15H00</small>
          </h4>
          <p>Paris, France <br /></p>
          <a href="#location" class="btn btn-primary">
            Plus de détails à venir
          </a>
        </div>

        <div
          class="col-md-3 my-5 wedding-details"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <i class="fas fa-glass-cheers fa-xs"></i>
          <br />
          <h4>
            Réception Domaine
            <small>Le DD MM YYYY</small>
            <small>17H30 - 03H00</small>
          </h4>
          <p>Paris, France <br /></p>
          <a href="#" class="btn btn-primary">Hébergements aux alentours</a>
        </div>

        <div
          class="col-md-3 my-5 wedding-details"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <i class="fas fa-utensils fa-xs"></i>
          <br />
          <h4>
            Brunch
            <br /><br />
            <small>Le DD MM YYYY</small>
            <small>11h-14h au Domaine</small>
          </h4>
          <p>Paris, France <br /></p>
          <a href="#" class="btn btn-primary">Voir le site du Domaine</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
