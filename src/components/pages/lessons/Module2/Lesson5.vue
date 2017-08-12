<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Microwaves
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					Microwaves have smaller wavelengths than radio waves. They are used in satellite communications, radar, television transmission and cooking.
				</p>
				<strong>
					Applications of Microwaves
				</strong>
				<div class="card lesson-card">
					<div class="card-content">
						Satellite Communications
					</div>
					<img src="/statics/images/m2l5.jpg" alt="">
					<div class="card-content">
						<p>
							Microwaves can penetrate the atmosphere of the earth. This is the reason why they are used for satellite communications. Communication satellites travel around the earth at an altitude of 35, 000 km above the equator. They move at a speed of 11 300 km/h and revolve around the earth every 24 hours, the same rate as the rotation of the earth. This makes them appear to be stationary when seen on Earth. Antennae are mounted to point in fixed directions towards these satellites. Microwaves signals are transmitted by an antenna to a satellite which amplifies and re-transmits the signal to an antenna in other parts of the world. This is how we communicate with the rest of the world.
						</p>
					</div>
				</div>

				<div class="card lesson card">
					<div class="card-content">
						<strong>Radar</strong>
					</div>
					<img src="/statics/images/m2l5-2.jpg" alt="">
					<div class="card-content">
						<p>
							Microwaves have short wavelengths and are reflected by small objects. This property is used in radars. Radar is the acronym of radio detection and ranging. A radar system is consists of an antenna, transmitter, and a receiver. The antenna whirls around continuously to scan the surrounding area. The transmitter sends out a narrow beam of microwaves in short pulses. A distant object reflects some of the signal back to the receiver. The direction to which the signal was received gives the direction of the object. The distance of the object can be calculated from the time lag between the transmitted pulse and the reflected pulse.
						</p>
						<p>
							Microwaves have short wavelengths and are reflected by small objects. This property is used in radars. Radar is the acronym of radio detection and ranging. A radar system is consists of an antenna, transmitter, and a receiver. The antenna whirls around continuously to scan the surrounding area. The transmitter sends out a narrow beam of microwaves in short pulses. A distant object reflects some of the signal back to the receiver. The direction to which the signal was received gives the direction of the object. The distance of the object can be calculated from the time lag between the transmitted pulse and the reflected pulse.
						</p>
					</div>
				</div>
					
				<div class="card lesson-card">
					<div class="card-content">
						<strong>
							Terrestrial Communication
						</strong>
					</div>
					<img src="/statics/images/m2l5-3.jpg" alt="">
					<div class="card-content">
						<p>
							Microwaves are used to transmit television news coverage from mobile broadcast vehicles back to the station. The news crew can also set up a small antenna to send signals to a communication satellite. This is how news are broadcasted and watched live around the world.
						</p>
						<p>
							A cell phone is a radio transmitter and receiver that uses microwaves. Cellular phones depend on overlapping network of cells or areas of land several kilometres in diameter. Each cell has its tower that receives and sends microwave signals. The figure below will give you further understanding on the process.
						</p>
					</div>
				</div>

				<div class="card lesson-card">
					<div class="card-content">
						<strong>Microwave Oven</strong>
					</div>
					<img src="/statics/images/m2l5-4.jpg" alt="">
					<div class="card-content">
						<p>
							In a microwave oven, foods absorb certain microwave frequencies very strongly. The microwaves penetrate the food being heated. It will agitate the water molecules within the food, thus creating molecular friction which then produces heat that will cook it.
						</p>
					</div>
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