<script setup lang="ts">
import { getImageFormat } from "@/utils/helpers";
</script>

<template>
  <!-- BEGIN ABOUT US SECTION -->
  <section id="about-us">
    <div class="container">
      <div class="row about-elems-wrapper">
        <div
          class="element col-md-6 col-xl-4 offset-xl-2"
          data-animation-direction="from-left"
          data-animation-delay="300"
        >
          <div class="image">
            <img :src="getImageFormat('600x600')" alt="Mélaine" />
            <div class="hover-info neela-style">
              <div class="content">
                <h3>Mélaine<small>La mariée</small></h3>
                <p>
                  Je suis incroyablement bénie et excitée de passer tous les
                  jours pour le reste de ma vie avec lui !
                </p>
                <ul class="sn-icons">
                  <li>
                    <a href="#"><i class="fab fa-instagram-square"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          class="divider-about-us"
          data-animation-direction="fade"
          data-animation-delay="500"
        >
          <i class="icon-two-hearts"></i>
        </div>

        <div
          class="element col-md-6 col-xl-4"
          data-animation-direction="from-right"
          data-animation-delay="400"
        >
          <div class="image">
            <img :src="getImageFormat('600x600')" alt="Michel" />
            <div class="hover-info neela-style">
              <div class="content">
                <h3>Michel<small>Le marié</small></h3>
                <p>
                  Elle est tout ce dont j'ai toujours rêvé et j'ai tellement
                  hâte de passer le reste de ma vie avec elle !
                </p>
                <ul class="sn-icons">
                  <li>
                    <a href="#"><i class="fab fa-instagram-square"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="about-us-desc col-lg-8 offset-lg-2"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <h3>Nous allons nous marier pour la vie!</h3>
          <p>
            « La famille ce n'est pas qu'une question de sang… Ma maison c'est
            là où tu seras… Alors je n'ai qu'une hâte, continuer de passer
            chaque jour à tes côtés. » - Mélaine
          </p>
          <p>
            « Aujourd'hui et toujours, au-delà de demain, j'ai besoin de toi à
            mes côtés, toujours comme ma meilleure amie, amante et âme sœur pour
            toujours. » - Michel
          </p>
          <img
            src="/src/assets/images/wedding_mm/signature.png"
            alt="Signature"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- END ABOUT US SECTION -->
</template>

<style scoped></style>
