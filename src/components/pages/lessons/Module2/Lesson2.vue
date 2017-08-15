<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Electric and Magnetic Fields Together
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					Accelerating electrons produce electromagnetic waves. These waves are a combination of electric and magnetic fields. A changing magnetic field produces an electric field and a changing electric field produces a magnetic field. As accelerated electrons produce an electric field of a wave, the varying electric field produces the wave’s magnetic field. Both the electric field and the magnetic field oscillate perpendicular to each other and to the direction of the propagating wave.
				</p>
				<div class="card lesson-card">
					<img :src="'./statics/images/m2l2.jpg'" alt="">
				</div>
				<p>
					All electromagnetic waves can travel through a medium but unlike other types of waves, they can also travel in vacuum. They travel in vacuum at a speed of 3X108 m/s and denoted as c, the speed of light. The wave speed, frequency, and wavelength are related by the following equation:
				</p>
				<h5 class="text-center text-italic">
					<strong>v=λf</strong>
				</h5>
				<p>
					where <strong class="text-italic">v</strong> is the wave speed, or <strong class="text-italic">c</strong> (speed of light) expressed in meters per second, the frequency <strong class="text-italic">f</strong> is expressed in Hertz and the wavelength <strong class="text-italic">λ</strong> is expressed in meters.
				</p>
				<p>
					Since all the EM waves have the same speed and that is equal to the speed of light, as wavelength decreases, the frequency of the wave increases. Through the years, the advancement on the knowledge about electromagnetic waves led us to a modern technological world.
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