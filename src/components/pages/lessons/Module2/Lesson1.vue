<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Electromagnetic Wave Theory
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					About 150 years ago, <strong>James Clerk Maxwell</strong>, an English scientist, developed a scientific theory to explain electromagnetic waves. He noticed that electrical fields and magnetic fields can couple together to form electromagnetic waves. Neither an electrical field (like the static which forms when you rub your feet on a carpet), nor a magnetic field (like the one that holds a magnet onto your refrigerator) will go anywhere by themselves. But, Maxwell discovered that a CHANGING magnetic field will induce a CHANGING electric field and vice-versa. 
				</p>
				<p>
					An electromagnetic wave exists when the changing magnetic field causes a changing electric field, which then causes another changing magnetic field, and so on forever. Unlike a STATIC field, a wave cannot exist unless it is moving. Once created, an electromagnetic wave will continue on forever unless it is absorbed by matter.
				</p>
				<p>
					<strong>Heinrich Hertz</strong>, a German physicist, applied Maxwell's theories to the production and reception of radio waves. The unit of frequency of a radio wave -- one cycle per second -- is named the hertz, in honor of Heinrich Hertz. 
				</p>
				<p>
					Hertz proved the existence of radio waves in the late 1880s. He used two rods to serve as a receiver and a spark gap as the receiving antennae. Where the waves were picked up, a spark would jump. Hertz showed in his experiments that these signals possessed all of the properties of electromagnetic waves. 
				</p>
				<p>
					With this oscillator, Hertz solved two problems. First, timing Maxwell's waves. He had demonstrated, in the concrete, what Maxwell had only theorized - that the velocity of radio waves was equal to the velocity of light! (This proved that radio waves were a form of light!) Second, Hertz found out how to make the electric and magnetic fields detach themselves from wires and go free as Maxwell's waves.
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