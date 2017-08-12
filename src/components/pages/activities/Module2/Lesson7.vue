<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				What’s Your Wavelength
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					The sun produces white light (the visible part of the spectrum), which is made up of many different colors. When the sun’s light shines through the earth’s atmosphere, it collides with air molecules, which scatter some of the light. Some colors scatter more completely than others. In this activity you’ll create a model to investigate the scattering effects of the earth’s atmosphere on different wavelengths.
				</p>
				<strong>Materials:</strong>
				<ul>
					<li>prism</li>
					<li>
						transparent plastic or glass container (about 30 cm (12 in) long, 20 cm (8 in) wide, and 15 cm (6 in) high)
					</li>
					<li>water</li>
					<li>flashlight</li>
					<li>powdered milk</li>
					<li>spoon or stirring rod</li>
					<li>blank white card for image screen</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						With your group, shine a flashlight through a prism. Turn the prism until a spectrum appears. What colors do you see? Record the different colors, the order in which they appear, and their wavelengths.
					</li>
					<li>
						Fill a container with water and shine a flashlight so that the light beam shines through the water. Turn the lights off and observe the light beam from the side and the end of the container. You can view the light beam directly or project the light onto a white card that you hold at the end of the tank. What color is the light?
					</li>
					<li>
						Add small amounts of powdered milk and mix until you can see the beam shining through the liquid. Observe the light again from the side and the end of the container. What color(s) do you see now? Compare the colors viewed from the side and the end. If you do not see any changes, add more powdered milk, stir, and observe.
					</li>
					<li>
						Light travels at different wavelengths—the shorter the wavelength, the more completely it is scattered by collisions with air molecules in the atmosphere.
					</li>
				</ol>

				<p>
					<strong>Question:</strong> In your own words write how this model explains why we see a blue sky and a yellowish orange sun. Why do you think the sun appears white at noon and orange or red at sunset?
				</p>
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