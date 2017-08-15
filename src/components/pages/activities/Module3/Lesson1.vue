<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Mirror, Mirror, On the Wall…
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>Materials:</strong>
				<ul>
					<li>1 (10 cm x 15 cm) plane mirror</li>
					<li>1 graphing paper</li>
					<li>10 one–peso coins</li>
					<li>modeling clay</li>
					<li>pen</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Let the mirror stand vertically along a line on a graphing paper as shown in Figure. Use the modeling clay to support the plane mirror.
						<div class="card lesson-card">
							<img :src="'.statics/images/m3l1-3.jpg'" alt="">
						</div>
					</li>
					<li>
						Using a pen, make three (3) different marks along the intersections on the graphing paper in front of a mirror.
					</li>
					<li>
						Measure the distance of each mark from the mirror by counting the number of parallel lines between the mark and the base of the plane mirror. Record your data in a table similar to Table 1 below.
					</li>
					<li>
						Look at the images of the marks formed by the mirror. Measure the distance of each image from the mirror by counting the number of parallel lines between the image and the base of the mirror. Record this also in Table 1.
						<div class="card lesson-card">
							<img :src="'.statics/images/m3l1-4.jpg'" alt="">
							<div class="card-content">
								<strong>Q1:</strong> Refer to Table 1, compare the distance (number of parallel lines) from the mirror of the object with that of the image.
							</div>
						</div>
					</li>
					<li>
						Stack 10 pieces of one-peso coin in front of the plane mirror as in Figure 2. Using a ruler, measure the height and width of the stack of coins. Measure also the height and width of the image as seen on the mirror. Enter your measurements in a table similar to Table 2.
						<div class="card lesson-card">
							<img :src="'.statics/images/m3l1-5.jpg'" alt="">
							<div class="card-content">
								Table 2. Height and Weight of Object and Image
							</div>
							<table border="1" cellspacing="0" cellpadding="5" style="width: 100%">
								<tr>
									<td>Description</td>
									<td>Object</td>
									<td>Image</td>
								</tr>
								<tr>
									<td>Height (cm)</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>Weight (cm)</td>
									<td></td>
									<td></td>
								</tr>
							</table>
							<div class="card-content">
								<strong>Q2.</strong> How do the height and width of the object compare with the height and width of the image?
							</div>
						</div>
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