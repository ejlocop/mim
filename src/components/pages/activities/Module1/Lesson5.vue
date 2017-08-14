<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Motors, Generators, and Transformers
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>
					5.a Diagram Analysis
				</strong>
				<p>
					Examine the pictures of the two types of transformers, the step up and the step down transformers. Differentiate a step-up transformer and the step-down transformer in terms of the number of turns in the coil.
				</p>
				<div class="card lesson-card">
					<div class="card-content">
						<strong>Step-up Transformer</strong>
					</div>
					<img :src="'./statics/images/m1l5-7.jpg'" alt="">
					<div class="card-content">
						<strong>Step-down Transformer</strong>
					</div>
					<img :src="'./statics/images/m1l5-8.jpg'" alt="">
				</div>

				<strong>
					5.b Self-test
				</strong>
				<p>
					Match the phrase in COLUMN A with the term being described in COLUMN B
				</p>

				
				<strong>Column A</strong>
				<ol>
					<li>
						A small region in a piece of iron where atomic magnetic line up in the same direction 
					</li>
					<li>
						Ends of bar magnet 
					</li>
					<li>
						Rotating coil in an electric motor 
					</li>
					<li>
						A device that converts mechanical energy into electric energy
					</li>
					<li>
						A device that converts electrical energy into induction mechanical energy	
					</li>
					<li>
						The production of current in a wire that is moving across a magnetic field 
					</li>
					<li>
						A device that regulates or controls the flow of current 
					</li>
					<li>
						Current that reverses the direction of flow 
					</li>
					<li>
						Increase the voltage supply 	
					</li>
					<li>
						Measures small amounts of electric current 
					</li>
					<li>
						A property of some materials in which there is a force of repulsion or attraction between like or unlike poles 
					</li>
					<li>
						A temporary magnet made of a wire coil through which an electric current passes 
					</li>
					<li>
						Current that flows in only one direction 
					</li>
					<li>
						The branch of physical science that involves the combined effects of electricity and magnetism
					</li>
					<li>
						Induced magnetism
					</li>
				</ol>

				<strong>Column B</strong>
				<ol>
					<li>electromagnetism</li>
					<li>armature</li>
					<li>circuit breaker</li>
					<li>commutator</li>
					<li>electromagnet</li>
					<li>electromagnetic</li>
					<li>generator</li>
					<li>magnetic domain</li>
					<li>magnetic field</li>
					<li>rectifier</li>
					<li>transformer</li>
					<li>magnetic</li>
					<li>transistor</li>
					<li>temporary magnetism</li>
					<li>motor</li>
					<li>magnetic poles</li>
					<li>generator</li>
					<li>galvanometer</li>
					<li>alternating current</li>
					<li>direct current</li>
					<li>step down transformer</li>
					<li>step-up transformer</li>
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
