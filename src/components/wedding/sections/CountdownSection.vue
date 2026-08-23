<script setup lang="ts"></script>

<template>
	<!-- BEGIN CONTACTS SECTION -->
	<div id="countdown">
		<div class="container">
			<div class="row">
				<div
					class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3"
				>
					<div class="form-wrapper">
						<span class="v-lines"></span>
						<span class="h-lines"></span>

						<h2 class="section-title">The Big Day!</h2>

						<div class="row justify-content-md-center">
							<div class="text-center">
								<!-- Countdown container Use the data attribute "date" to set the countdown date.
                      E.g.: data-date="2022/09/20 3:00 PM" -->
								<div
									class="countdown"
									data-date="2026/10/03 4:00 PM"
									data-animation-direction="from-bottom"
									data-animation-delay="500"
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- END CONTACTS SECTION -->
</template>

<style scoped lang="sass">
.section-title
	font-family: Palmer Lake
	line-height: 1
	margin-bottom: 30px

.countdown
	font-family: Palmer Lake

.container
	position: relative
	&::before
		content: ""
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100%
		z-index: -1
		background-image: url(/src/assets/images/millbrook-winery.webp)
		background-size: cover
		background-position: center
		opacity: 0.4
</style>
