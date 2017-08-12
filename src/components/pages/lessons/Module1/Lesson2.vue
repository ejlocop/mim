<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Basic Principles of Magnetism
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					<strong>THE NATURE OF MAGNETISM: ELECTRICITY’S SILENT PARTNER</strong>
				</p>
				<p>
					Magnetism is a property of a material that enables to attract or repel other materials. The presence and strength of the material’s magnetic properties can be observed by the effect of the forces of attraction and repulsion on other materials. Its polarity, three-dimensional field form, strength, and direction can also be detected by the deflection of a magnetic pointer within its field, like that in a compass or the arrangement of iron filings in magnetic boards. A material’s individual protons and electrons are basically considered tiny magnets due to the intrinsic magnetic moments of charges. But the magnetism of an electron is a thousand times bigger than that of a proton. So in an atom, the intrinsic magnetic field is mostly due to the ever-moving electrons in the half- filled orbital shell where electrons are unpaired and their tiny intrinsic magnetic moments point in the same direction, thus orbital magnetic field arise.
				</p>
				<p>
					But not all materials that contain magnetic atoms in the half-filled region of the Periodic Table become magnetic. Only atoms of metals such as iron, nickel, and cobalt have half-filled shells that have many domains pointing mostly in one direction. When these are placed within an external magnetic field, the weaker domains unify with the stronger domains. These line up more uniformly inducing greater magnetic field strength. Materials made from these elements and its alloys are classified as ferromagnetic and make strong permanent magnets. Thus, magnets brought near materials that contain one of the ferromagnetic metals will induce magnetism in the object and thus attract it. Magnetic induction also makes iron filings and compass pointers align themselves along the magnetic field lines that caused induction. The magnetic field lines go out of the north-seeking poles and loops back continuously going to the other south-seeking end of the magnet closing the loop inside out.
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