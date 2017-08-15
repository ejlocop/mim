<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Radio Waves
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					Radio waves have the longest wavelength in the electromagnetic spectrum. They are produced by making electrons vibrate in an antenna. They are used to transmit sound and picture information over long distances.
				</p>
				<p>
					Radio waves have a very wide range of wavelengths. The whole region of the radio waves is divided into smaller regions or wavebands. Each waveband is allocated by law to a specific radio service. The wavelengths and frequencies of the different wavebands and their uses are shown in the table.
				</p>
				<div class="card lesson-card">
					<img :src="'./statics/images/m2l4.jpg'" alt="">
				</div>
				<p>
					Low frequency waves are suitable for communication over great distances. But the curvature of the earth limits the range to about 80 kilometers. To extend the range, a repeater is used. The repeater receives the signal and re-transmits it to the receiving station.
				</p>
				<p>
					High frequency waves can be reflected by the ionosphere. This enables the waves to be transmitted over great distances.
				</p>
				<p>
					Medium and high frequency waves are used for broadcasting by local radio stations. In a radio station, sound is converted by a microphone into patterns of electric current variations called audio-frequency (AF) signals. High frequency radio waves called radio-frequency (RF) carriers can be modulated to match the electronic signal. In amplitude modulation, the amplitude of the radio waves (RF carrier) changes to match that of the audio-frequency signal. This is used in standard broadcasting because it can be sent over long distances. Very high frequency waves provide a higher quality broadcasting including stereo sound. In this process, instead of the amplitude of the RF carrier, it is the frequency of the waves that changes to match that of the signal. This is called frequency modulation.
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