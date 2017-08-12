<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Electromagnetism
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					Make a graphic organizer that will compare and contrast the concepts you learned about:
				</p>
				<ol type="letter">
					<li>
						the electric and magnetic field patterns (directions and strengths)
					</li>
					<li>
						the electric and magnetic forces acting within the electric and magnetic fields
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