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
				<p>
					In the course of the centuries, much of the mystery that once surrounded magnetism has been dispelled. Today, the lodestone or the natural magnet is no longer familiar in the study of magnetism because practically all magnets nowadays are artificial. This lesson discusses the different types of magnets, their properties and magnetic fields.
				</p>
				
				<strong>
					3.a Magnetic Substances
				</strong>
				<p>
					A substance that possesses magnetic properties is a <strong>magnet</strong>. It attracts iron and faces the same direction when moving freely. All materials have the property of being attracted or repelled. Substances like iron and steel are strongly attracted to magnets. These substances are called <strong>ferromagnetic</strong>. Nickel and cobalt are also ferromagnetic. These materials are often called magnetic materials. Some substances, such as wood, aluminum, platinum and oxygen, are just slightly attracted by strong magnets. These substances are called <strong>paramagnetic</strong>. Substances that are slightly repelled by magnets are diamagnetic. Table salt, mercury, zinc and gold are <strong>diamagnetic</strong> substances.
				</p>
				<p>
					Substances that are already magnetized are called magnetite. These are called natural or <strong>permanent magnets</strong>. Lodestones are permanent magnets. Materials that can be made into magnets are called <strong>artificial magnets</strong>. Artificial magnets are made by <strong>induced magnetism</strong>. This is done by stroking ferromagnetic materials in the same direction several times with a magnet. This process is called <strong>magnetization</strong>. <strong>ALNICO</strong> magnet is permanent magnet containing aluminum, nickel and cobalt. Temporary magnets are those of soft iron that are easy to magnetize and loses their magnetic property very easily. Electromagnet is an example of temporary magnet. It is a magnet that can be switched on and off. It is used to lift heavy objects in industrial sites and forwarding businesses. Permanet magnets are used in radio speakers, audio-video devices and other electrical appliances.
				</p>
				
				<strong>3.b Magnets and Magnetic Forces</strong>
				<div class="card lesson-card">
					<img src="/statics/images/m1l3.jpg">
				</div>
				<p>
					Look at the pictures above. The areas of greatest magnetic force are called magnetic poles.
				</p>
				<p>
					Every magnet has two poles. You cannot produce a magnet with only one pole.
				</p>
				<p>
					The end of the magnet that points north is called the <strong>north magnetic pole</strong>, (N pole), and the end that points south is the <strong>south magnetic pole</strong>, (S pole).
				</p>
				<strong>Rules of Magnets</strong>
				<p>
					The diagrams below illustrate the rules of magnets. Refer to the diagrams below:
				</p>
				<div class="card lesson-card">
					<img src="/statics/images/m1l3-2.jpg">
				</div>

				<strong>
					3.c Magnetic Domains, Magnetic Fields and Magnetic Lines of Force
				</strong>
				<p>
					Most materials cannot be magnetized. Iron and a few other materials such as steel, nickel and cobalt can be magnetized. These materials have regions called <strong>magnetic domains</strong>. Magnetic domains, which are clusters of many atoms, can be thought of as tiny magnets.
				</p>
				<div class="card lesson-card">
					<img src="/statics/images/m1l3-3.jpg">
				</div>
				<blockquote>
					Substances that can be magnetized can be thought of as consisting of many tiny magnets. How does the arrangement of the “tiny magnets” differ between the unmagnetized and magnetized substances?
				</blockquote>

				<strong>LOOK AT THIS!</strong>

				<div class="card lesson-card">
					<img src="/statics/images/m1l3-4.jpg">
				</div>
				<blockquote>
					<strong>BEFORE:</strong> When the material is unmagnetized, the domains are not lined up in a definite way. They are randomly arranged.ets” differ between the unmagnetized and magnetized substances?
				</blockquote>

				<div class="card lesson-card">
					<img src="/statics/images/m1l3-5.jpg">
				</div>
				<blockquote>
					<strong>AFTER:</strong> When the material is magnetized, the domains line up in a definite pattern. All the north poles point in one direction, and the south poles in the other.
				</blockquote>
				
				<p>
					So, if you cut a magnet in half, the cut ends become poles. You then have two similar magnets, each with an N pole and an S pole. Breaking a magnet does not greatly affect the alignment of domains in the pieces, so each piece is still a magnet.
				</p>

				<p>
					The closer you bring two magnets together, the stronger the force between them becomes. Move them apart and the force gets weaker. If you move them apart farther, you will eventually feel no force. The force changes strength as you move within the magnet’s magnetic field. A <strong>magnetic field</strong> is the space around a magnet in which its force affects objects. A good picture of a magnetic field can be made by sprinkling iron filings around a magnet. (See figure below.)
				</p>

				<div class="card lesson-card">
					<img src="/statics/images/m1l3-6.jpg">
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