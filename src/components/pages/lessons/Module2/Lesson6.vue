<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Infrared 
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					Infrared radiation lies beyond the red end of the visible light. It is emitted by all objects. The amount and wavelength of radiation depend on temperature. Below 500oC, an object emits only infrared radiation. Above 5000C, an object glows and emits both infrared and some visible light.
				</p>
				<p>
					Our bodies radiate infrared and under infrared camera or a night vision goggle, our images appear in variety of colors. The differences in color determine the differences in temperature. For example, shades of blue and green indicate regions of colder temperature; and red and yellow indicate warmer temperature.
				</p>
				<p>
					In the figure, the dog is covered with thick coat of fur that prevents the heat generated by the dog’s body from escaping. Notice that the dog’s nose is cold while the eyes and mouth areas are warm.
				</p>
				<div class="card lesson-card">
					<img :src="'./statics/images/m2l6.jpg'" alt="">
				</div>
				<p>
					The following are some useful applications of IR radiation:
				</p>
				<ol>
					<li>
						Infrared photographs taken from a satellite with special films provide useful details of the vegetation on the Earth’s surface.
					</li>
					<li>
						Infrared scanners are used to show the temperature variation of the body. This can be used for medical diagnosis.
					</li>
					<li>
						Infrared remote controls are used in TVs, video, cassette recorders, and other electronic appliances.
					</li>
					<li>
						Some night-vision goggles use IR.
					</li>
					<li>
						Some autofocus cameras have transmitter that sends out infrared pulses. The pulses are reflected by the object to be photographed back to the camera. The distance of the object is calculated by the time lag between the sending and receiving of pulses. The lens is then driven by a built-in motor to adjust to get the correct focus of the object.
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