<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				It’s Getting Hotter
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>Materials:</strong>
				<ul>
					<li>prism</li>
					<li>3 alcohol thermometers with blackened bulb</li>
					<li>sunlight</li>
				</ul>

				<strong>
					Procedure:
				</strong>
				<ol>
					<li>
						This experiment must be done in sunlight. 
					</li>
					<li>
						Take the initial readings of the three thermometers while in the shade. Record your readings in a data table similar to the table below.
					</li>
					<li>
						Let the sunlight pass through the prism to split the sun’s white light into its component colors.
					</li>
					<li>
						Position one thermometer in the blue region.
					</li>
					<li>
						Position another thermometer in the yellow region.
					</li>
					<li>
						Position the last thermometer just below the red region.
					</li>
					<li>
						Measure the temperature every after 2 minutes for 10 minutes.
					</li>
					<li>
						Record the temperature readings in the three regions in the table below.
					</li>
				</ol>
				<div class="card lesson-card">
					<img :src="'.statics/images/m2l6-2.jpg'" alt="">
				</div>

				<strong>Guide Questions:</strong>
				<ol>
					<li>
						Did you see any trend? Explain if there is any.
					</li>
					<li>
						What did you notice about the temperature readings?
					</li>
					<li>
						In which region have you recorded the highest temperature after 10 minutes?
					</li>
					<li>
						What do you think exists just beyond the red part of the spectrum?
					</li>
					<li>
						Discuss any other observations or problems.
					</li>
				</ol>
			</div>
		</div>
	</q-layout>
</template>
<script>
import page from '../../../../assets/js/mixins/Page.js'
export default {
	mixins: [page]
}
</script>
<style lang="scss"></style>