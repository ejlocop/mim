<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Electromagnetism
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>
					4.a Make your own electromagnet
				</strong>
				<p>
					<strong>
						Materials:
					</strong> Large nail, copper wire, dry cell and paper clips
				</p>

				<p>Procedure:</p>
				<ol>
					<li>
						Gather all the materials needed.
					</li>
					<li>
						Wrap the copper wire around the large nail.
					</li>
					<li>
						Connect the free ends of the wire to a dry cell.
					</li>
					<li>
						Place the iron nail coil near pieces of nail, paper clips and pins.
					</li>
					<li>
						Observe what happens.
					</li>
					<li>
						Disconnect the wire from the dry cell. What happens? 
					</li>
				</ol>
				<div class="card lesson-card">
					<img src="/statics/images/m1l4-4.jpg" alt="">
				</div>

				<strong>4.b Diagram Analysis</strong>
				<p>
					The set up shows a wire that is bent and the ends were attached to a galvanometer.
				</p>
				<div class="card lesson-card">
					<img src="/statics/images/m1l4-5.jpg" alt="">
				</div>

				<strong>Guide Questions:</strong>
				<ol>
					<li>
						In diagram A, the coil is moved down the space between the north and south poles (see arrow) of the two magnets. What happens to the galvanometer needle?
					</li>
					<li>
						In diagram B, the coil is moved up the space between the north and south poles (see arrow) of the two magnets. What happens to the galvanometer needle?
					</li>
					<li>
						If a galvanometer is an instrument used to measure very small electric currents, what is produced by the coil of wire inserted between the poles of the magnet?
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