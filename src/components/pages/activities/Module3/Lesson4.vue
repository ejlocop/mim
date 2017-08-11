<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Images Formed by Curved Mirrors
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>Materials:</strong>
				<ul>
					<li>Improvised optical bench apparatus</li>
					<li>Curved mirror (concave and convex)</li>
					<li>Mirror stand</li>
					<li>Screen or white cardboard</li>
					<li>Flashlight</li>
					<li>Meter stick</li>
					<li>Sheet of paper (colored black)</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Cut a U-shaped object from a cartolina with a size that fits the glass cover of the flashlight. Attach the U-shaped object to the cover of the flashlight.
					</li>
					<li>
						Position the concave mirror intact with the mirror stand at the center of two meter sticks.
					</li>
					<li>
						Mark the improvised optical bench or meter sticks at the following points: the focal point F (see the specified focal length on label of the mirror), and the center of curvature, C which is equal to 2F.
					</li>
					<li>
						Place the flashlight at a distance farther than the center of curvature, C in front of the mirror.
					</li>
					<li>
						Allow the light rays coming from the flashlight to strike the mirror.
					</li>
					<li>
						Place a screen (a white cardboard) at a distance in front of the mirror. Move the screen in different distances in front of the mirror until a clear and sharp image of the U-shape is formed on the screen. Note the size and location of the image formed (on the screen).
					</li>
					<li>
						Do the same thing in different location of the object by moving the flashlight at the center of curvature C, near the focal point, F at the focal point, and between the focal point and the mirror.
					</li>
					<li>
						Repeat steps 3, 5, and 7 using a convex mirror. This time, you will not use the screen. Look through the convex mirror to see the image.
					</li>
				</ol>

				<strong>Guide Questions:</strong>
				<ol>
					<li>
						What happens to the size and location of the image when you bring the flashlight nearer to the concave mirror?
					</li>
					<li>
						What is the generalization from the nature of images formed by convex mirror and concave mirror?
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