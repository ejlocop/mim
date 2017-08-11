<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Sound Check
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>Materials:</strong>
				<ul>
					<li>Two - 25 cm copper wire</li>
					<li>C or D battery</li>
					<li>Electrical tape</li>
					<li>Metal fork</li>
					<li>Portable Radio</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Tape one end of the first wire to one end of the battery. Tape one end of the second wire to the other end of the battery.
					</li>
					<li>
						Wrap the loose end of one of the wires tightly around the handle of the fork.
					</li>
					<li>
						Turn on the radio to the AM band and move the selector past all stations until you reach static
					</li>
					<li>
						Hold the fork close to the radio. Stroke the free end of wire across the fork’s prongs.
					</li>
					<li>
						At a distance of 15 cm from the radio stroke again the free end of the wire across the forks’ prongs.
					</li>
					<li>
						Repeat step 5 at a distance 20 cm from the radio.
					</li>
				</ol>

				<strong>Guide Questions:</strong>
				<ol>
					<li>
						What happens when you stroke the prongs with the wire?
					</li>
					<li>
						How does changing the position affect the results?
					</li>
					<li>
						What might be the cause when you sometimes hear static sound in your radio? What can be done to resolve it?
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