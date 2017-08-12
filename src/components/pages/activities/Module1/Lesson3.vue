<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Magnets and Magnetic Fields
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>
					3.a Making an Artificial Magnet by Induced Magnetism
				</strong>
				<p>
					<strong>Problem: </strong> How to make an artificial magnet
				</p>
				<strong>
					Materials: 
				</strong>
				<ul>
					<li>Materials: </li>
					<li>magnet (circular magnet from defective radio speaker)</li>
					<li>pins, clips and nails</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Gather all the materials needed.
					</li>
					<li>
						Stroke the end of a screwdriver with the magnet. (Do it in one direction only)
					</li>
					<li>
						Place the screwdriver near pieces of paper clips, pins or nails. Observe what happens.
					</li>
				</ol>

				<strong>
					3.b Studying Bar Magnets
				</strong>
				<p>
					The diagram below illustrates a bar magnet that is suspended by a string. Another bar magnet is brought near it. Study the arrows in the diagram and answer the questions below.
				</p>
				<div class="card lesson-card">
					<img src="/statics/images/m1l3-7.jpg" alt="">
				</div>
				<strong>Answer the following questions:</strong>
				<ul>
					<li>
						What happens to the suspended magnet when the S pole of the other magnet is brought near its N pole?
					</li>
					<li>
						What happens to the suspended magnet when the N pole of the other magnet is brought near its N pole?
					</li>
					<li>
						What happens to the suspended magnet when the N pole of the other magnet is brought near its S pole?
					</li>
					<li>
						What happens to the suspended magnet when the S pole of the other magnet is brought near its S pole?
					</li>
				</ul>

				<strong>
					3.c Drawing Magnetic Lines of Force
				</strong>
				<strong>Materials:</strong>
				<ul class="unstyled">
					<li>bar magnet (2)</li>
					<li>iron filings</li>
					<li>plain sheet of paper</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Place two bar magnets flat on the table with the N poles about 2 cm apart.
					</li>
					<li>
						Cover the magnets with a thin sheet of plain paper.
					</li>
					<li>
						Sprinkle the iron filings on the paper gently until the filings line up.
					</li>
					<li>
						Make a sketch showing how the magnetic lines of force are arranged.
					</li>
					<li>
						Where is the magnetic field strongest?
					</li>
				</ol>

				<strong>3.d Self-Test</strong>
				<strong>
					Arrange the jumbled letters to form the word(s),  that best fits the statement.
				</strong>

				<ol>
					<li>
						Natural magnets
						<strong class="text-italic">COILAN</strong>
					</li>
					<li>
						Clusters of many atoms that act as tiny magnets in a material
						<strong class="text-italic">MAINODS</strong>
					</li>
					<li>
						A region around a magnet
						<strong class="text-italic">SFILEDGENAMICT</strong>
					</li>
					<li>
						Imaginary lines that represent magnetic field 
						<strong class="text-italic">SLIENSOFGENTMICFOECR</strong>
					</li>
					<li>
						Materials that are strongly attracted to magnet
						<strong class="text-italic">GENTAMICORREF</strong>
					</li>
					<li>
						Materials that are repelled by magnet 
						<strong class="text-italic">GENTAMICIAD</strong>
					</li>
					<li>
						Materials that are slightly attracted by magnet 
						<strong class="text-italic">GENTAMICARAP</strong>
					</li>
					<li>
						A substance that possesses magnetic properties
						<strong class="text-italic">NETGAM</strong>
					</li>
					<li>
						Iron and other elements can become strongly magnetized 
						<strong class="text-italic">NETGAMITAZIONT</strong>
					</li>
					<li>
						A magnet has two : 
						<strong class="text-italic">SLOPES</strong>
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