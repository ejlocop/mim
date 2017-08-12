<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Module 2: Post-Test
			</q-toolbar-title>

			<button :disabled="!canSubmit || submitted" 
				class="white right text-primary"
				@click="submit">
				Submit <i>send</i>
			</button>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<strong>
					A. Multiple Choice. Choose the letter of the correct answer.
				</strong>
				<ol :class="submitted ? 'submitted' : ''">
					
					<li :class="status_1.item1">
						Which electromagnetic wave carries more energy than the others?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item1" val="a"></q-radio>
								<strong>A</strong>
								<span>
									microwaves
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item1" val="b"></q-radio>
								<strong>B</strong>
								<span>
									radio waves
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item1" val="c"></q-radio>
								<strong>C</strong>
								<span>
									UV radiation
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item1" val="d"></q-radio>
								<strong>D</strong>
								<span>
									visible light
								</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item2">
						What electromagnetic wave is sometimes called heat rays?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item2" val="a"></q-radio>
								<strong>A</strong>
								<span>
									gamma rays 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item2" val="b"></q-radio>
								<strong>B</strong>
								<span>
									infrared 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item2" val="c"></q-radio>
								<strong>C</strong>
								<span>
									radio waves 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item2" val="d"></q-radio>
								<strong>D</strong>
								<span>
									visible light
								</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item3">
						What is the frequency range of UV radiation?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item3" val="a"></q-radio>
								<strong>A</strong>
								<span>
									3.5 x 109 -3 x 1011 Hz 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item3" val="b"></q-radio>
								<strong>B</strong>
								<span>
									3.5 x 1011 - 3 x 10114 Hz
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item3" val="c"></q-radio>
								<strong>C</strong>
								<span>
									7.5 x 1014 - 3 x 1016 Hz 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item3" val="d"></q-radio>
								<strong>D</strong>
								<span>
									7.5 x 1016 - 3 x 1019 Hz
								</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item4">
						What is the range of frequencies are our eyes sensitive to?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item4" val="a"></q-radio>
								<strong>A</strong>
								<span>
									3 x 109 - 3 x 1011 Hz  
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item4" val="b"></q-radio>
								<strong>B</strong>
								<span>
									3 x 1011 - 4 x 1014 Hz
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item4" val="c"></q-radio>
								<strong>C</strong>
								<span>
									4 x 1014 - 7.5 x 1014 Hz
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item4" val="d"></q-radio>
								<strong>D</strong>
								<span>
									7.5 x 1014 - 3 x 1016 Hz
								</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item5">
						What is the wavelength of the wave with a frequency of 3 x 109 Hz?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item5" val="a"></q-radio>
								<strong>A</strong>
								<span>
									1.0 x 10-1 m 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item5" val="b"></q-radio>
								<strong>B</strong>
								<span>
									1.0 x 101 m 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item5" val="c"></q-radio>
								<strong>C</strong>
								<span>
									1.0 x 10-2 m
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" v-model="choices_1.item5" val="d"></q-radio>
								<strong>D</strong>
								<span>
									1.0 x 102 m
								</span>
							</label>
						</div>
					</li>
				</ol>

				<strong>
					B. Below are the applications of electromagnetic waves. State the type of electromagnetic wave used in each application.
				</strong>

				<ol :class="submitted ? 'submitted' : ''">
					<li :class="status_2.item1">
						Satellite communications - 
						<input :disabled="submitted" type="text" v-model="choices_2.item1">
					</li>
					<li :class="status_2.item2">
						Texting - 
						<input :disabled="submitted" type="text" v-model="choices_2.item2">
					</li>
					<li :class="status_2.item3">
						TV broadcasting - 
						<input :disabled="submitted" type="text" v-model="choices_2.item3">
					</li>
					<li :class="status_2.item4">
						Radar - 
						<input :disabled="submitted" type="text" v-model="choices_2.item4">
					</li>
					<li :class="status_2.item5">
						Checking bankbook signature - 
						<input :disabled="submitted" type="text" v-model="choices_2.item5">
					</li>
				</ol>
			</div>
		</div>
	</q-layout>
</template>
<script>
import mixin from '../mixin'
export default {
	mixins: [mixin],
	data () {
		return {
			storageKey: 'm2-quiz-post',
			choices_1: {
				item1: '',
				item2: '',
				item3: '',
				item4: '',
				item5: '',
			},
			choices_2: {
				item1: '',
				item2: '',
				item3: '',
				item4: '',
				item5: '',
			},
			answers_1: {
				item1: ['c', 'C'],
				item2: ['b', 'B'],
				item3: ['c', 'C'],
				item4: ['c', 'C'],
				item5: ['a', 'A'],
			},
			answers_2: {
				item1: ['Microwave', 'microwave', 'micro wave', 'Micro Wave', 'micro-wave', 'Micro-wave'],
				item2: ['Microwave', 'microwave', 'micro wave', 'Micro Wave', 'micro-wave', 'Micro-wave'],
				item3: ['Radio wave', 'radio-wave', 'radio wave', 'radiowave'],
				item4: ['Microwave', 'microwave', 'micro wave', 'Micro Wave', 'micro-wave', 'Micro-wave'],
				item5: ['Ultraviolet Rays', 'ultra-violet rays', 'ultra-violet', 'Ultra Violet Rays'],
			},
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
			}
		},
		status_2 () {
			return {
				item1: this.compute(this.answers_2.item1, this.choices_2.item1),
				item2: this.compute(this.answers_2.item2, this.choices_2.item2),
				item3: this.compute(this.answers_2.item3, this.choices_2.item3),
				item4: this.compute(this.answers_2.item4, this.choices_2.item4),
				item5: this.compute(this.answers_2.item5, this.choices_2.item5),
			}
		},
	}
}
</script>
<style lang="scss"></style>