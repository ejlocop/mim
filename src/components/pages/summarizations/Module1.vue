<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Let's Summarize!
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<ol>
					<li>
						Magnets are objects that attract materials containing iron and that always face the same direction when moving freely
					</li>
					<li>
						Natural magnets are made of an iron ore called magnetite, or lodestone. They are permanent magnets. Artificial magnets, which are made by induced magnetism, are either permanent or temporary, depending upon the material they are made of. Materials such as iron that are strongly attracted by magnets are called ferromagnetic substances. Paramagnetic substances are only slightly attracted by magnets. Diamagnetic substances are slightly repelled by magnets.
					</li>
					<li>
						Magnetic lines of force indicate the presence and strength of magnetic force field. They extend from the magnetic north pole to the magnetic South Pole. Like poles of magnet repel, unlike poles attract. The cause of magnetism is explained by the idea of magnetic domains.
					</li>
					<li>
						Magnetic and electric fields may induce one another. Coiling a conductor around an iron core makes electromagnets.
					</li>
					<li>
						Motors used electromagnetism to convert electrical energy to mechanical energy.
					</li>
					<li>
						Transformers and generators are based on electromagnetic induction. A conductor cutting magnetic lines of force induces a current. A step-up transformer increases the voltage. A step-down transformer decreases the voltage.
					</li>
					<li>
						Generators used electromagnetism to convert mechanical energy into electrical energy.
					</li>
					<li>
						A coil of wire with a current through it is an electromagnet that reverses when the current reverses direction. Alternating current and direct current are two types of current.
					</li>
				</ol>
			</div>
		</div>
	</q-layout>
</template>
<script>
import page from '../../../assets/js/mixins/Page.js'

export default {
	mixins: [page]
}
</script>
<style></style>