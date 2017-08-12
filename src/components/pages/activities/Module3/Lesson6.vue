<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				You Can Be Magnified!
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>Materials:</strong>
				<ul>
					<li>convex lens or magnifying glass</li>
					<li>lens holder e.g. clay</li>
					<li>meterstick</li>
					<li>index card</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Hold the convex lens under a ceiling light. A projection screen (e.g. the floor or the surface table) should be placed under the convex lens.
					</li>
					<li>
						Move the convex lens up and down until a sharp image of the ceiling light is projected on the screen.
					</li>
					<li>
						Measure the distance between the lens and the projection surface using a ruler.
					</li>
					<li>
						Mount the convex lens on a clay. Draw a U–shaped object on an index card and mount the index card on another clay. Initially place the index card beside the zero (0) mark on the meter stick, and place the lens in front of the index card.
					</li>
					<li>
						Look through the lens and move the lens until you can clearly see an enlarged and upright image of the U-shaped object
					</li>
					<li>
						Measure the distance between the convex lens and the card using a meter stick. Record your observation on the second column of a table similar to the table below.
					</li>
					<li>
						Measure the distance between the lens and your eye. Record your observation on the third column of a table similar to the table.
					</li>
					<li>
						Move again the convex lens back and forth, until you can clearly see, this time, an enlarged and inverted image of the U-shaped object. Then, repeat steps 6 and 7.
					</li>
					<li>
						Move again the convex lens so that you can clearly see a reduced and upside down image of the U-shaped object. Repeat steps 6 and 7.
					</li>
				</ol>
				<div class="card lesson-card">
					<table>
						<tr>
							<td>Description of Image</td>
							<td>Distance Between the Object and the Lens (cm)</td>
							<td>Distance Between the Eye and the Lens (cm)</td>
						</tr>
						<tr>
							<td>Enlarged and upright</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Enlarged and Inverted</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Reduced and Inverted</td>
							<td></td>
							<td></td>
						</tr>
					</table>
				</div>

				<strong>Guide Questions:</strong>
				<ol>
					<li>
						What is the focal length of the convex lens?
					</li>
					<li>
						How would you describe the image formed if a distant object is used?
					</li>
					<li>
						What kind of lenses are magnifying glasses? When a magnifying glass produces a sharp clear image, where is the object located in relation to the lens?
					</li>
					<li>
						Where should a magnifying glass be placed to produce an e larged and upright image, closer to the eye or nearer to the object? Why?
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