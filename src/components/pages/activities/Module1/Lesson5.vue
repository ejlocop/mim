<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Motors, Generators, and Transformers
			</q-toolbar-title>

			<button :disabled="!canSubmit" 
				class="white right text-primary"
				@click="submit">
				{{ submitText }}
			</button>
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
				<ol :class="submitted ? 'submitted' : ''">
					<li :class="status_1.item1">
						A small region in a piece of iron where atomic magnetic line up in the same direction 
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item1"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item2">
						Ends of bar magnet 
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item2"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item3">
						Rotating coil in an electric motor 
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item3"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item4">
						A device that converts mechanical energy into electric energy
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item4"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item5">
						A device that converts electrical energy into induction mechanical energy	
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item5"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item6">
						The production of current in a wire that is moving across a magnetic field 
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item6"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item7">
						A device that regulates or controls the flow of current 
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item7"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item8">
						Current that reverses the direction of flow 
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item8"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item9">
						Increase the voltage supply 	
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item9"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item10">
						Measures small amounts of electric current 
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item10"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item11">
						A property of some materials in which there is a force of repulsion or attraction between like or unlike poles 
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item11"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item12">
						A temporary magnet made of a wire coil through which an electric current passes 
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item12"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item13">
						Current that flows in only one direction 
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item13"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item14">
						The branch of physical science that involves the combined effects of electricity and magnetism
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item14"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item15">
						Induced magnetism
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item15"
						  :options="test2Choices"
						></q-select>
					</li>
				</ol>

				<strong>Column B</strong>
				<ol type="a">
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
import QuizMixin from '../../quizzes/mixin'

export default {
	mixins: [QuizMixin],
	data () {
		return {
			storageKey: 'm1l5-activity',
			choices_1: {
				item1: '',
				item2: '',
				item3: '',
				item4: '',
				item5: '',
				item6: '',
				item7: '',
				item8: '',
				item9: '',
				item10: '',
				item11: '',
				item12: '',
				item13: '',
				item14: '',
				item15: '',
			},
			answers_1: {
				item1: ['h'],
				item2: ['p'],
				item3: ['b'],
				item4: ['q'],
				item5: ['o'],
				item6: ['f'],
				item7: ['k'],
				item8: ['s'],
				item9: ['u'],
				item10: ['r'],
				item11: ['l'],
				item12: ['e'],
				item13: ['t'],
				item14: ['a'],
				item15: ['n'],
			},
			test2Choices: [
				{
					value: 'a',
					label: 'electromagnetism',
				},
				{
					value: 'b',
					label: 'armature',
				},
				{
					value: 'c',
					label: 'circuit breaker',
				},
				{
					value: 'd',
					label: 'commutator',
				},
				{
					value: 'e',
					label: 'electromagnet',
				},
				{
					value: 'f',
					label: 'electromagnetic',
				},
				{
					value: 'g',
					label: 'generator',
				},
				{
					value: 'h',
					label: 'magnetic domain',
				},
				{
					value: 'i',
					label: 'magnetic field',
				},
				{
					value: 'j',
					label: 'rectifier',
				},
				{
					value: 'k',
					label: 'transformer',
				},
				{
					value: 'l',
					label: 'magnetic',
				},
				{
					value: 'm',
					label: 'transistor',
				},
				{
					value: 'n',
					label: 'temporary magnetism',
				},
				{
					value: 'o',
					label: 'motor',
				},
				{
					value: 'p',
					label: 'magnetic poles',
				},
				{
					value: 'q',
					label: 'generator',
				},
				{
					value: 'r',
					label: 'galvanometer',
				},
				{
					value: 's',
					label: 'alternating current',
				},
				{
					value: 't',
					label: 'direct current',
				},
				{
					value: 'u',
					label: 'step down transformer',
				},
				{
					value: 'v',
					label: 'step-up transformer',
				}
			]
		}
	},

	computed: {
		status_1 () {
			return {
				item1: this.compute(this.answers_1.item1, this.choices_1.item1),
				item2: this.compute(this.answers_1.item2, this.choices_1.item2),
				item3: this.compute(this.answers_1.item3, this.choices_1.item3),
				item4: this.compute(this.answers_1.item4, this.choices_1.item4),
				item5: this.compute(this.answers_1.item5, this.choices_1.item5),
				item6: this.compute(this.answers_1.item6, this.choices_1.item6),
				item7: this.compute(this.answers_1.item7, this.choices_1.item7),
				item8: this.compute(this.answers_1.item8, this.choices_1.item8),
				item9: this.compute(this.answers_1.item9, this.choices_1.item9),
				item10: this.compute(this.answers_1.item10, this.choices_1.item10),
				item11: this.compute(this.answers_1.item11, this.choices_1.item11),
				item12: this.compute(this.answers_1.item12, this.choices_1.item12),
				item13: this.compute(this.answers_1.item13, this.choices_1.item13),
				item14: this.compute(this.answers_1.item14, this.choices_1.item14),
				item15: this.compute(this.answers_1.item15, this.choices_1.item15),
			}
		},
		totalScore () {
			let status1 = Object.keys(this.status_1)
			let correct1 = status1.filter((item) => {
				return this.status_1[item] == 'correct'
			})

			return correct1.length
		},

		totalItems () {
			let answers1 = Object.keys(this.answers_1)
			return answers1.length
		},
	}
}
</script>
<style lang="scss"></style>
