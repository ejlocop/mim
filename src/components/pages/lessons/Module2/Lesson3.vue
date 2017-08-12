<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				The Electromagnetic Spectrum
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					The electromagnetic spectrum is a continuum of electromagnetic waves arranged according to frequency and wavelength. It is a gradual progression from the waves of lowest frequencies to the waves of highest frequencies. According to increasing frequency, the EM spectrum includes: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays. These waves do not have exact dividing region.
				</p>
				<p>
					The different types of electromagnetic waves are defined by the amount of energy carried by/possessed by the photons. Photons are bundles of wave energy. The energy of a photon is given by the equation:
				</p>
				<h5 class="text-center text-italic">
					<strong>E=hf</strong>
				</h5>
				<p>
					where <strong class="text-italic">h</strong> is the Planck’s Constant and <strong class="text-italic">f</strong> is the frequency of the EM wave. The value of the Planck’s constant is 6.63 x 10-34 joules per second. From among the EM waves, the gamma rays have photons of high energies while radio waves have photons with the lowest energies. With regards to wavelength, radio waves can be likened to the size of a football field while gamma rays are as small as the nuclei of an atom.
				</p>
				<div class="card lesson-card">
					<div class="card-content">
						Figure below will give you a clearer idea of the characteristics of the electromagnetic waves as their sizes are compared with visible materials.
					</div>
					<img src="/statics/images/m2l3.jpg" alt="">
				</div>
				<p>
					Table below shows the relative wavelength, frequency, and energy of each of the different types of electromagnetic waves.
				</p>
				<div class="card lesson-card">
					<div class="card-content">
						Table 1: The electromagnetic waves' wavelengths, frequencies, and energies
					</div>
					<img src="/statics/images/m2l3-2.jpg" alt="">
					<!-- <table border="1" cellpadding="5" cellspacing="0" class="text-center">
						<thead>
							<tr>
								<td>EM Wave</td>
								<td>Wavelength (m)</td>
								<td>Frequency (Hz)</td>
								<td>Energy (J)</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Radio</td>
								<td> > 1 x 10 <sup>-1</sup> </td>
								<td> < 3 x 10 <sup>9</sup> </td>
								<td> < 2 x 10 <sup>-24</sup> </td>
							</tr>
							<tr>
								<td>Microwave</td>
								<td class="small"> 1 x 10 <sup>-3</sup> - 1 x 10 <sup>-1</sup> </td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table> -->
				</div>
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