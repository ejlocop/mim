<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				How It Came About
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>Materials:</strong>
				<ul>
					<li>1 white cartolina</li>
					<li>1 marker pen</li>
					<li>1 pencil with eraser</li>
					<li>coloring materials (optional)</li>
				</ul>
				<strong>Procedure:</strong>
				<p>
					I. Match the scientists given below with their contributions.
				</p>
				<table>
					<tr>
						<td><strong>Scientist</strong></td>
						<td><strong>Contributions</strong></td>
					</tr>
					<tr>
						<td>______1. Ampere </td>
						<td>
							<strong>A.</strong> Contributed in developing equations that showed the relationship of electricity and magnetism
						</td>
					</tr>
					<tr>
						<td>
							______2. Faraday 
						</td>
						<td>
							<strong>B.</strong> Showed experimental evidence of electromagnetic waves and their link to light
						</td>
					</tr>
					<tr>
						<td>______3. Hertz</td>
						<td>
							<strong>C.</strong> Demonstrated the magnetic effect based on the direction of current
						</td>
					</tr>
					<tr>
						<td>
							______4. Maxwell 
						</td>
						<td>
							<strong>D.</strong> Formulated the principle behind electromagnetic induction.
						</td>
					</tr>
					<tr>
						<td>
							______5. Oersted
						</td>
						<td>
							<strong>E.</strong> Showed how a current carrying wire behaves like a magnet
						</td>
					</tr>
				</table>
				<p>
					II. Using the information you gathered previously, make a concept web/comic strips of the contributions of the following scientists.
				</p>
				<ol>
					<li>Ampere</li>
					<li>Faraday</li>
					<li>Hertz</li>
					<li>Hertz</li>
					<li>Oersted</li>
				</ol>
				<p>
					<strong>Question:</strong> What new insights/learning did you get about our natural world? How did it change your view about light?
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