<script setup lang="ts">
import starsBackground from "@/assets/images/saveTheDate/stars-background.png";
import cloudsBackground from "@/assets/images/saveTheDate/clouds-background.png";
import saveTheDateTitle from "@/assets/images/saveTheDate/save-the-date-title.png";
import hillBackground from "@/assets/images/saveTheDate/hill-background.png";
import flowerDate from "@/assets/images/saveTheDate/flower-date.png";

window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  const titleImage = document.getElementById("save-the-date");
  if (!titleImage) {
    return;
  }
  titleImage.style.transform =
    "translate(-50%, " + -scrollPosition * 0.4 + "px)";

  const cloudsImage = document.getElementById("clouds-background");
  if (!cloudsImage) {
    return;
  }
  cloudsImage.style.transform = "translateY(" + -scrollPosition * 0.2 + "px)";
});
</script>

<template>
  <div class="parallax-section">
    <img
      class="save-the-date-background"
      :src="starsBackground"
      alt="Stars Background"
    />
    <img
      class="save-the-date-background"
      id="clouds-background"
      :src="cloudsBackground"
      alt="Clouds Background"
    />
    <img
      class="title-img"
      id="save-the-date"
      :src="saveTheDateTitle"
      alt="Title Image"
    />
    <img class="hill-background" :src="hillBackground" alt="Hill Background" />
    <img class="flower-date" :src="flowerDate" alt="Flower Date" />
    <!-- <div class="parallax-content"></div> -->
  </div>
</template>

<style scoped lang="sass">
$parallax-height: 500px
$parallax-image: url('@/assets/images/saveTheDate/sunset-background.png')

.save-the-date-background
    position: fixed
    top: 0
    left: 0
    object-fit: cover
    object-position: center
    width: 100%
    height: auto

.hill-background, .flower-date
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: auto

.title-img
    position: fixed
    top: 120px
    left: 50%
    transform: translateX(-50%)
    pointer-events: none

.parallax-section
  background-image: $parallax-image
  height: $parallax-height
  background-attachment: fixed
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  position: relative
  height: 200vw


// Optional: Media query for mobile devices, as background-attachment: fixed can be problematic
@media only screen and (max-device-width: 1024px)
  .parallax-section
    background-attachment: scroll // Disable parallax on smaller screens
</style>
