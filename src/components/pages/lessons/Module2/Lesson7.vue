<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Visible Spectrum
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					When white light passes through a prism, it is separated into its constituent colors: the red, orange, yellow, green, blue, indigo and violet. These colors do not distinctly separate but they continuously change from red to violet. Red color has the longest wavelength from among these colors and violet has the shortest.
				</p>
				<div class="card lesson-card">
					<img :src="'./statics/images/m2l7.jpg'" alt="">
				</div>
				<p>
					Our eyes are sensitive to electromagnetic waves of wavelengths that ranges from 4x10-7 m to 7x10-7 m. This is the range of wavelengths of white light. Thus, the spectrum of white light is therefore called the visible spectrum. Table shows the wavelengths of the different colors that constitute the white light.
				</p>
				<table>
					<thead>
						<tr>
							<td>Color</td>
							<td>Wavelength (nm)</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Violet - Indigo</td>
							<td>390 to 455</td>
						</tr>
						<tr>
							<td>Blue</td>
							<td>455 to 492</td>
						</tr>
						<tr>
							<td>Green</td>
							<td>492 to 577</td>
						</tr>
						<tr>
							<td>Yellow</td>
							<td>577 to 597</td>
						</tr>
						<tr>
							<td>Orange</td>
							<td>597 to 622</td>
						</tr>
						<tr>
							<td>Red</td>
							<td>622 to 700</td>
						</tr>
					</tbody>
				</table>
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