<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Check Your Understanding
			</q-toolbar-title>

			<button :disabled="!canSubmit" 
				class="white right text-primary"
				@click="submit">
				{{ submitText }}
			</button>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					I. Problem Solving
				</p>
				<p class="text-italic">
					(Assume that the waves propagate in a vacuum.)
				</p>
				<ol :class="submitted ? 'submitted' : ''">
					<li :class="status_1.item1">
						What is the frequency of radio waves with wavelength of 20 m?
						<input type="text" class="full-width" v-model="choices_1.item1" :disabled="submitted">
					</li>
					<li :class="status_1.item2">
						What is the frequency of light waves with wavelength of 5 X 10-7 m?
						<input type="text" class="full-width" v-model="choices_1.item2" :disabled="submitted">
					</li>
				</ol>

				<p>
					II. Write True if the statements are true? If not, correct them.
				</p>
				<ol :class="submitted ? 'submitted' : ''">
					<li :class="status_2.item1">
						Electromagnetic waves transfer energy through vacuum.
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_2.item1"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_2.item2">
						A wave is a disturbance that transfers energy.
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_2.item2"
						  :options="test2Choices"
						></q-select>
					</li>
					<li :class="status_2.item3">
						Most EM waves are invisible and undetectable.
						<q-select :disable="submitted"
						  type="radio"
						  v-model="choices_2.item3"
						  :options="test2Choices"
						></q-select>
					</li>
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
			storageKey: 'm2l2-activity',
			choices_1: {
				item1: '',
				item2: '',
			},
			choices_2: {
				item1: '',
				item2: '',
				item3: '',
			},
			answers_1: {
				item1: ['1.5 x 107 Hz', '1.5 x 107 Hz', '1.5x107Hz', '1.5X107HZ', '1.5 X107HZ'],
				item2: ['6 x 1014 Hz', '6 X 1014 HZ', '6x1014Hz', '6X1014HZ', '6 X1014 Hz']
			},
			answers_2: {
				item1: 'true',
				item2: 'true',
				item3: 'false'
			},
			test2Choices: [
				{
					value: 'true',
					label: 'true',
				},
				{
					value: 'false',
					label: 'false'
				}
			],

		}
	},

	computed: {
		status_1 () {
			return {
				item1: this.compute(this.answers_1.item1, this.choices_1.item1),
				item2: this.compute(this.answers_1.item2, this.choices_1.item2),
			}
		},
		status_2 () {
			return {
				item1: this.compute(this.answers_2.item1, this.choices_2.item1),
				item2: this.compute(this.answers_2.item2, this.choices_2.item2),
				item3: this.compute(this.answers_2.item3, this.choices_2.item3),
			}
		}
	}
}
</script>
<style lang="scss"></style>