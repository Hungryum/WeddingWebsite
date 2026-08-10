<script setup lang="ts">
import BusWestLogo from '@/assets/images/buswest-logo.png'
</script>

<template>
	<div id="bus-schedule" class="bus-schedule">
		<div class="bus-schedule-container">
			<div class="bus-schedule-title">
				<h2>Bus Schedule</h2>
				<img class="bus-schedule-logo" :src="BusWestLogo" alt="BusWest Logo" />
			</div>
			<div class="bus-schedule-location-container">
				<div class="bus-schedule-location">
					<h4 class="bus-schedule-location-header">Perth</h4>
					<h5>Pick up: 2:00 PM</h5>
					<h5>
						Location: Bus bays on Beaufort Street between Museum Boolabardip and
						The Court
					</h5>
				</div>
				<div class="bus-schedule-location">
					<h4 class="bus-schedule-location-header">Cockburn</h4>
					<h5>Pick up: 2:30 PM</h5>
					<h5>Location: Cockburn Central Pickup zone on Junction Boulevard</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="sass" scoped>
.bus-schedule
    display: flex
    flex-direction: column
    align-items: center
    padding: 10vw 10vw

.bus-schedule-title
    align-items: left
    width: 100%
    padding-left: 5vw

.bus-schedule-container
    position: relative
    display: flex
    background-color: white
    flex-direction: column
    align-items: center
    outline: 0.5vw solid #FF7032
    border-radius: 5vw
    max-width: 1200px
    width: 100%
    padding: 5vw 0
    gap: 5vw

.bus-schedule-location-container
    display: flex
    gap: 5vw
    padding: 0 5vw

.bus-schedule-location-header
    margin-bottom: 2vw
    color: #FF7032
    font-weight: bold
    text-decoration: underline

.bus-schedule-location
    display: flex
    flex-direction: column
    font-size: 1.25rem
    gap: 2vw

.bus-schedule-logo
    position: absolute
    top: 5vw
    right: 5vw
    width: 18vw
    max-width: 200px
    height: auto
</style>
