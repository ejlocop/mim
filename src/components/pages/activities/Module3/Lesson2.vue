<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Laws of Reflection
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<h5>
					Angle of Incidence vs. Angle of Reflection
				</h5>
				<strong>Materials:</strong>
				<ul>
					<li>1 plane mirror</li>
					<li>1 low – frequency laser/ laser pen/laser pointer</li>
					<li>1 paper protractor</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Let the mirror stand vertically along the edge of the paper protractor as shown in Figure. Use the clay to support the plane mirror.
						<div class="card lesson-card">
							<img :src="'./statics/images/m3l2.jpg'" alt="">
						</div>
					</li>
					<li>
						Position the laser beam such that it hits the mirror at an angle of 10o with the normal line. Measure the angle between the reflected ray and the normal line. Record your measurement in a table similar to Table.
					</li>
					<li>
						Make three trials and get the average.
					</li>
					<li>
						Repeat steps 2 to 4 for angles 200, 300, 400, and 500. Enter all your measurements in Table.
						<div class="card lesson-card">
							<img :src="'./statics/images/m3l2-2.jpg'" alt="">
						</div>
					</li>
				</ol>

				<strong>Guide Questions: </strong>
				<ol>
					<li>
						How does the angle of incidence compare with the angle of reflection?
					</li>
					<li>
						A periscope is an instrument for observation over, around or through an obstacle. Explain how light travels in a periscope. Diagram the light rays as these pass through the periscope.
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