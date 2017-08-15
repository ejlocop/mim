<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Module 2: Pre-Test
			</q-toolbar-title>

			<button :disabled="!canSubmit || submitted" 
				class="white right text-primary"
				@click="submit">
				{{ submitText }}
			</button>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<strong>A. Choose the letter of the correct answer.</strong>
				<ol :class="submitted ? 'submitted' : ''">
					
					<li :class="status_1.item1">
						Which two waves lie at the ends of the visible spectrum?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item1" 
									val="a"></q-radio>
								<strong>A</strong>
								<span>
									Infrared and Ultra-violet rays
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item1" 
									val="b"></q-radio>
								<strong>B</strong>
								<span>
									Radio waves and Microwaves
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item1" 
									val="c"></q-radio>
								<strong>C</strong>
								<span>
									Radio waves and X-rays
								</span>
							</label>
							<label>
								<q-radio :disable="submitted" 
									v-model="choices_1.item1" 
								 	val="d"></q-radio>
								<strong>D</strong>
								<span>
									X-rays and Gamma rays
								</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item2">
						In the visible spectrum, which color has the longest wavelength?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item2" 
									val="a"></q-radio>
								<strong>A</strong>
								<span>
									Blue 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item2" 
									val="b"></q-radio>
								<strong>B</strong>
								<span>
									Green 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item2" 
									val="c"></q-radio>
								<strong>C</strong>
								<span>
									Red 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item2" 
									val="d"></q-radio>
								<strong>D</strong>
								<span>
									Violet
								</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item3">
						Which property spells the difference between infra-red and ultra-violet radiation?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item3" 
									val="a"></q-radio>
								<strong>A</strong>
								<span>
									Color 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item3" 
									val="b"></q-radio>
								<strong>B</strong>
								<span>
									Speed in vacuum 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item3" 
									val="c"></q-radio>
								<strong>C</strong>
								<span>
									Wavelength 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item3" 
									val="d"></q-radio>
								<strong>D</strong>
								<span>
									None of the above
								</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item4">
						A certain radio station broadcasts at a frequency of 675 kHz. What is the wavelength of the radio waves?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item4" 
									val="a"></q-radio>
								<strong>A</strong>
								<span>
									280 m  
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item4" 
									val="b"></q-radio>
								<strong>B</strong>
								<span>
									324 m 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item4" 
									val="c"></q-radio>
								<strong>C</strong>
								<span>
									400 m
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item4" 
									val="d"></q-radio>
								<strong>D</strong>
								<span>
									444 m
								</span>
							</label>
						</div>
					</li>
					
					<li :class="status_1.item5">
						What type of electromagnetic waves is used in radar?
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item5" 
									val="a"></q-radio>
								<strong>A</strong>
								<span>
									Infrared rays 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item5" 
									val="b"></q-radio>
								<strong>B</strong>
								<span>
									Microwaves 
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"   
									v-model="choices_1.item5" 
									val="c"></q-radio>
								<strong>C</strong>
								<span>
									Radio waves
								</span>
							</label>
							<label>
								<q-radio :disable="submitted"  
									v-model="choices_1.item5" 
									val="d"></q-radio>
								<strong>D</strong>
								<span>
									Ultra-violet rays
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
						Camera autofocusing - 
						<input  :disabled="submitted" 
							type="text" 
							v-model="choices_2.item1">
					</li>
					<li :class="status_2.item2">
						Radio broadcasting - 
						<input  :disabled="submitted" 
							type="text" 
							v-model="choices_2.item2">
					</li>
					<li :class="status_2.item3">
						Diagnosis of bone fractures - 
						<input  :disabled="submitted" 
							type="text" 
							v-model="choices_2.item3">
					</li>
					<li :class="status_2.item4">
						Sterilization of water in drinking fountains - 
						<input  :disabled="submitted" 
							type="text" 
							v-model="choices_2.item4">
					</li>
					<li :class="status_2.item5">
						Sterilization of medical instruments - 
						<input :disabled="submitted" 
							type="text" 
							v-model="choices_2.item5">
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
			storageKey: 'm2-quiz-pre',
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
				item1: ['a', 'A'],
				item2: ['c', 'C'],
				item3: ['c', 'C'],
				item4: ['d', 'D'],
				item5: ['b', 'B'],
			},
			answers_2: {
				item1: ['Infrared', 'infrared', 'infra red', 'infra-red'],
				item2: ['Radio wave', 'radio-wave', 'radio wave', 'radiowave'],
				item3: ['X-ray', 'x-ray', 'xray', 'X Ray', 'X ray'],
				item4: ['Ultraviolet Rays', 'ultra-violet rays', 'ultra-violet', 'Ultra Violet Rays'],
				item5: ['Gamma Rays', 'GammaRay', 'gamma', 'Gamma', 'GammaRay', 'Gamma Rays', 'Gamma-Ray'],
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