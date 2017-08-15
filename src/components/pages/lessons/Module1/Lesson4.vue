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
				<p>
					If you saw or heard these devices or machines, you observed the combined effects of electricity and magnetism at work. Scientists learned how to use the relationship between electricity and magnetism to produce electric currents and to make machines that would make these devices function. These scientists and inventors have made amazing changes in the way you live.
				</p>
				<p>
					Read this lesson and you will appreciate the convenience of life because of electricity and magnetism.
				</p>

				<div class="card lesson-card">
					<img :src="'./statics/images'/m1l4.jpg" alt="">
					<div class="card-content">
						Hans Christian Oersted
					</div>
				</div>
				<strong>A. Electricity Makes Magnetism</strong>
				<p>
					On the morning of February 16, 1820, an important discovery was made by accident. Professor Hans Christian Oersted in Denmark was giving a lecture on electricity to his students. He closed a switch to demonstrate the flow of current. There happened to be a compass nearby. Every time the professor closed the switch, the compass needle turned. Oersted had discovered that an electric current is surrounded by a magnetic field.
				</p>
				<p>
					His discovery made him conclude that a current carrying wire produces a magnetic field. This led to the principle of electromagnet. An electromagnet is a magnet that can be switched on and off. It is a solenoid with a core. The strength of an electromagnet can be made stronger by increasing the number of turns on the core.
				</p>

				<p>
					<strong>B. Magnetic Field and Electric Current</strong>
					Shortly after Oersted’s discovery that electricity produces magnetic field, scientists experimented with the opposite possibility. In 1831, Michael Faraday, an English scientist, discovered that a moving wire through a magnetic field could cause an electric current. At about the same time, an American scientist named Joseph Henry made a similar discovery. A current produced by a magnetic field is an induced current.
				</p>
				<div class="card lesson-card">
					<img :src="'./statics/images/m1l4-2.jpg'" height="150" alt="">
					<img :src="'./statics/images/m1l4-3.jpg'" height="150" alt="">
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