<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Simple Spectroscope
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>Materials:</strong>
				<ul>
					<li>Diffraction grating, 2-cm square </li>
					<li>Paper tube (tube from toilet paper roll)</li>
					<li>Poster board square (5 by 10-cm)	</li>
					<li>Masking tape</li>
					<li>Scissors</li>
					<li>Razor blade knife</li>
					<li>2 single-edge razor blades</li>
					<li>
						Spectrum tubes and power supply (See management and tips section.)
					</li>
					<li>Pencil</li>
				</ul>
				<strong>Procedure:</strong>
				<ol>
					<li>
						 Using the pencil, trace around the end of the paper tube on the poster board. Make two circles and cut them out. The circles should be just larger than the tube’s opening.
					</li>
					<li>
						Cut a 2-centimeter square hole in the center of one circle. Tape the diffraction grating square over the hole. If students are making their own spectroscopes, it may be better if an adult cuts the squares and the slot in step 4 below. 
					</li>
					<li>
						Tape the circle with the grating inward to one end of the tube. 
					</li>
					<li>
						Make a slot cutter tool by taping two single-edge razor blades together with a piece of poster board between. Use the tool to make parallel cuts about 2 centimeters long across the middle of the second circle. Use the razor blade knife to cut across the ends of the cuts to form a narrow slot across the middle of the circle. 
					</li>
					<li>
						Place the circle with the slot against the other end of the tube. While holding it in place, observe a light source such as a fluorescent tube. Be sure to look through the grating end of the spectroscope. The spectrum will appear off to the side from the slot. Rotate the circle with the slot until the spectrum is as wide as possible. Tape the circle to the end of the tube in this position. The spectroscope is complete
					</li>
					<li>
						Examine various light sources with the spectroscope. If possible, examine nighttime street lighting. Use particular caution when examining sunlight. Do not look directly into the Sun.
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