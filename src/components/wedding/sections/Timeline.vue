<script setup lang="ts"></script>

<template>
	<div class="timeline-wedding" id="timeline">
		<div class="timeline-header">
			<h1>Timeline</h1>
		</div>
		<div class="container">
			<div class="timeline-times">
				<div class="holder clip">
					<div class="circle circle1"></div>
					<div class="circle circle2"></div>
				</div>
				<h5>2:00pm</h5>
				<h5>2:30pm</h5>
				<h5>3:30pm</h5>
				<h5>4:00pm</h5>
				<h5>4:30pm</h5>
				<h5>6:30pm</h5>
				<h5>11:30pm</h5>
			</div>
			<div class="timeline-content">
				<h5>• Bus departs Perth</h5>
				<h5>• Bus departs Cockburn</h5>
				<h5>• Guests to arrive</h5>
				<h5>• Ceremony</h5>
				<h5>• Cocktail hour</h5>
				<h5>• Reception</h5>
				<h5>• Bus departs Millbrook</h5>
			</div>
		</div>
	</div>
</template>

<style scoped lang="sass">
.timeline-wedding
    padding: 10vw 10vw

.timeline-header
    float: none
    text-align: center
    margin: 0 auto 5vw
    position: relative
    font-family: Magical Rhymes
    line-height: 0.7
    margin-bottom: 10vw

.container
    position: relative
    display: flex
    flex-direction: row
    align-items: center
    gap: 60px
    background-color: white
    outline: 0.5vw solid #FF7032
    border-radius: 5vw
    max-width: 1200px
    width: 100%
    padding: 10vw 0
    overflow: hidden

.timeline-times, .timeline-content
    display: flex
    flex-direction: column
    gap: 2.5rem

.timeline-times
    position: relative
    text-align: right
    flex: 1

.timeline-content
    flex: 2
    padding-left: 5vw

.holder
    position: absolute
    top: -40px
    right: -80px
    width: 50px
    height: 600px
    opacity: 0.5
    transform: scale(1.5)

.clip
    overflow: hidden

.circle
    position: absolute
    width: 20px
    height: 600px
    background: radial-gradient(16px, transparent, transparent 4px, orange 4px, orange 10px, transparent 11px)
    background-size: 40px 30px

.circle2
    top: 15px
    left: 20px
    background-position: -20px 0px
</style>
