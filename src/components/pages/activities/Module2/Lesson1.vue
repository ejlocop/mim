<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				How It Came About
			</q-toolbar-title>

			<button :disabled="!canSubmit" 
				class="white right text-primary"
				@click="submit">
				{{ submitText }}
			</button>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>Materials:</strong>
				<ul>
					<li>1 white cartolina</li>
					<li>1 marker pen</li>
					<li>1 pencil with eraser</li>
					<li>coloring materials (optional)</li>
				</ul>
				<strong>Procedure:</strong>
				<p>
					I. Match the scientists given below with their contributions.
				</p>
				<ol type="a" :class="submitted ? 'submitted' : ''">
					<li :class="status_1.item1">
						Contributed in developing equations that showed the relationship of electricity and magnetism
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item1"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item2">
						Showed experimental evidence of electromagnetic waves and their link to light
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item2"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item3">
						Demonstrated the magnetic effect based on the direction of current
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item3"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item4">
						Formulated the principle behind electromagnetic induction.
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item4"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_1.item5">
						Showed how a current carrying wire behaves like a magnet
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_1.item5"
						  :options="test2Choices"
						></q-select>
					</li>

				</ol>

				<p>
					II. Using the information you gathered previously, make a concept web/comic strips of the contributions of the following scientists.
				</p>
				<ol>
					<li>Ampere</li>
					<li>Faraday</li>
					<li>Hertz</li>
					<li>Hertz</li>
					<li>Oersted</li>
				</ol>
				<p>
					<strong>Question:</strong> What new insights/learning did you get about our natural world? How did it change your view about light?
				</p>
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
			storageKey: 'm2l1-activity',
			test2Choices: [
				{
					value: 'a',
					label: 'Ampere ',
				},
				{
					value: 'b',
					label: 'Faraday ',
				},
				{
					value: 'c',
					label: 'Hertz ',
				},
				{
					value: 'd',
					label: 'Maxwell ',
				},
				{
					value: 'e',
					label: 'Oersted',
				}
			],
			choices_1: {
				item1: '',
				item2: '',
				item3: '',
				item4: '',
				item5: '',
			},
			answers_1: {
				item1: ['c'],
				item2: ['d'],
				item3: ['b'],
				item4: ['a'],
				item5: ['a'],
			}
		}
	},

	computed: {
		status_1 () {
			return {
				item1: this.compute(this.answers_1.item1, this.choices_1.item1),
				item2: this.compute(this.answers_1.item2, this.choices_1.item2),
				item3: this.compute(this.answers_1.item3, this.choices_1.item3),
				item4: this.compute(this.answers_1.item4, this.choices_1.item4),
				item5: this.compute(this.answers_1.item5, this.choices_1.item5)
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