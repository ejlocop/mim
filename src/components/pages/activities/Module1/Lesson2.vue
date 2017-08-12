<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Testing for Evidence of Magnetism
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">

				<strong>Materials:</strong>
				<ul>
					<li>
						pair of 3”- 6” bar magnets
					</li>
					<li>
						6-10 objects made of different materials from inside the room
					</li>
					<li>
						science notebook and pen
					</li>
				</ul>

				<strong>Safety Precautions:</strong>
				<ul>
					<li>
						Handle magnets with care so as not to drop those. These might break, chip off, and weaken upon impact.
					</li>
					<li>
						Keep magnets away from computer units/screens, memory storage drives and disks, magnetic tapes, mechanical watches, and the like.
					</li>
				</ul>

				<strong>Procedure:</strong>
				<div>
					<p>
						1. Use a bar magnet and explore the possible effect/s it can have on the other magnet when made to interact. On your science notebook, make a table similar to Table below and record the observed force effect/s. Answer also the guide questions.
					</p>
					<strong class="text-center">
						Interaction between two permanent bar magnets
					</strong>
					<table border="1" cellpadding="3" cellspacing="0" >
						<tr>
							<td>
								<strong>
									What I did to the pair of magnets to cause interaction…
								</strong>
							</td>
							<td>
								<strong>
									Observed effect/s (attracted/ repelled)
								</strong>
							</td>
						</tr>
						<tr>
							<td><p></p></td>
							<td><p></p></td>
						</tr>
						<tr>
							<td><p></p></td>
							<td><p></p></td>
						</tr>
					</table>
				</div>
				<div>
					<p>
						2. This time, use only one bar magnet and explore its possible effect/s on six to ten different objects found inside the classroom. Record the observed effect/s on a table similar to Table below. (Exclude record on objects with no observed interaction with the magnet.)
					</p>
					<strong class="text-center">
						Interaction of a bar magnet with other objects
					</strong>
					<table border="1" cellpadding="3" cellspacing="0" >
						<tr>
							<td>
								<strong>
									Objects that interacted with the magnet…
								</strong>
							</td>
							<td>
								<strong>
									Observed effect/s (attracted or repelled)
								</strong>
							</td>
						</tr>
						<tr>
							<td><p></p></td>
							<td><p></p></td>
						</tr>
						<tr>
							<td><p></p></td>
							<td><p></p></td>
						</tr>
					</table>
				</div>

				<strong>Guide Questions:</strong>
				<ol>
					<li>
						What conditions with observable effects make magnets interact with another magnet?
					</li>
					<li>
						In general, what conditions with observable effects make magnets interact with non-magnet materials?
					</li>
					<li>
						What type/s of force can a magnet exert on another magnet?
					</li>
					<li>
						What type/s of force can a magnet exert on non-magnet objects?
					</li>
					<li>
						How will you distinguish magnets from non-magnetized magnetic materials?
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