<script setup lang="ts">
import weddingLogo from "../../../assets/images/peter-&-elaina-logo.png";
</script>

<template>
  <!-- BEGIN HEADER -->
  <header id="header">
    <div class="nav-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <a href="#hero" class="nav-logo">
              <img :src="weddingLogo" alt="Peter & Elaina" />
            </a>

            <!-- BEGIN MAIN MENU -->
            <nav class="navbar">
              <ul class="nav navbar-nav">
                <li><a href="#loveline">Our love story</a></li>

                <li class="dropdown">
                  <a
                    href="#the-wedding"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    >The Marriage<b class="caret"></b
                  ></a>
                  <ul class="dropdown-menu">
                    <li><a href="#the-wedding">RSVP</a></li>
                    <li><a href="#location">Location & Directions</a></li>
                    <li>
                      <a href="#bmiadsgmen">Bridesmaids & Groomsmen</a>
                    </li>
                    <li><a href="#giftregistry">Projet après Mariage</a></li>
                    <li><a href="#countdown">Countdown</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                  </ul>
                </li>
              </ul>

              <button id="nav-mobile-btn">
                <i class="fas fa-bars"></i>
              </button>
              <!-- Mobile menu button -->
            </nav>
            <!-- END MAIN MENU -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- END HEADER -->
</template>

<style scoped></style>
