<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Module 1: Post-Test
			</q-toolbar-title>

			<button :disabled="!canSubmit" 
				class="white right text-primary"
				@click="submit">
				{{ submitText }}
			</button>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<strong>I. Encircle the letter of the BEST ANSWER.</strong>
				<ol :class="submitted ? 'submitted' : ''">
				
					<li :class="status_1.item1">
						Materials that are strongly attracted to magnets are _________.
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item1" val="a"></q-radio>
								<strong>A</strong>
								<span>
									diamagnetic
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item1" val="b"></q-radio>
								<strong>B</strong>
								<span>
									ferromagnetic
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item1" val="c"></q-radio>
								<strong>C</strong>
								<span>
									paramagnetic
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item1" val="d"></q-radio>
								<strong>D</strong>
								<span>
									All of the above
								</span>
							</label>
						</div>
					</li>
				
					<li :class="status_1.item2">
						What did Michael Faraday discovered?
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item2" val="a"></q-radio>
								<strong>A</strong>
								<span>
									magnetic field produces current
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item2" val="b"></q-radio>
								<strong>B</strong>
								<span>
									current produces magnetic field
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item2" val="c"></q-radio>
								<strong>C</strong>
								<span>
									current is always present in a magnetic field
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item2" val="d"></q-radio>
								<strong>D</strong>
								<span>
									wire carrying current produces magnetic field
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item3">
						How do you weaken a magnet?
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item3" val="a"></q-radio>
								<strong>A</strong>
								<span>
									By heating it
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item3" val="b"></q-radio>
								<strong>B</strong>
								<span>
									By banging it on a table
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item3" val="c"></q-radio>
								<strong>C</strong>
								<span>
									By soaking it on a mercury
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item3" val="d"></q-radio>
								<strong>D</strong>
								<span>
									By placing it near a compass
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item4">
						A piece of copper cannot be made into a magnet because ___________.
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item4" val="a"></q-radio>
								<strong>A</strong>
								<span>
									copper cannot be charged.
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item4" val="b"></q-radio>
								<strong>B</strong>
								<span>
									copper atoms have no charge
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item4" val="c"></q-radio>
								<strong>C</strong>
								<span>
									the domains are already aligned.
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item4" val="d"></q-radio>
								<strong>D</strong>
								<span>
									electrons spinning in opposite direction in copper cancel each other
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item5">
						How will you decrease the strength of an electromagnet?
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item5" val="a"></q-radio>
								<strong>A</strong>
								<span>
									add iron center to the coil.
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item5" val="b"></q-radio>
								<strong>B</strong>
								<span>
									decrease the number of loops of wire in the coil.	
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item5" val="c"></q-radio>
								<strong>C</strong>
								<span>
									increase the number of loops of wire in the coil.
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item5" val="d"></q-radio>
								<strong>D</strong>
								<span>
									All of the above
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item6">
						If the N pole of a magnet is brought near a magnet suspended on a string, the _________.
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item6" val="a"></q-radio>
								<strong>A</strong>
								<span>
									N poles attract each other
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item6" val="b"></q-radio>
								<strong>B</strong>
								<span>
									N poles attract the S poles
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item6" val="c"></q-radio>
								<strong>C</strong>
								<span>
									S poles attract each other
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item6" val="d"></q-radio>
								<strong>D</strong>
								<span>
									N poles repel the S poles
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item7">
						In sending electric energy over long distance, the main cause of energy loss is __________.
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item7" val="a"></q-radio>
								<strong>A</strong>
								<span>
									the use of transformer.
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item7" val="b"></q-radio>
								<strong>B</strong>
								<span>
									the size of the wires
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item7" val="c"></q-radio>
								<strong>C</strong>
								<span>
									the high current
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item7" val="d"></q-radio>
								<strong>D</strong>
								<span>
									the use of direct current.
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item8">
						A material that allows the electromagnet in a motor to move is the ____________. 						
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item8" val="a"></q-radio>
								<strong>A</strong>
								<span>
									amplifier
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item8" val="b"></q-radio>
								<strong>B</strong>
								<span>
									armature
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item8" val="c"></q-radio>
								<strong>C</strong>
								<span>
									commutator
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item8" val="d"></q-radio>
								<strong>D</strong>
								<span>
									semiconductor
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item9">
						A device that turns electric energy into a sound energy is ___________.	<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item9" val="a"></q-radio>
								<strong>A</strong>
								<span>
									a speaker
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item9" val="b"></q-radio>
								<strong>B</strong>
								<span>
									a transformer
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item9" val="c"></q-radio>
								<strong>C</strong>
								<span>
									a CRT.
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item9" val="d"></q-radio>
								<strong>D</strong>
								<span>
									generator
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item10">
						A material that is slightly repelled by a magnet is called ______________. 
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item10" val="a"></q-radio>
								<strong>A</strong>
								<span>
									diamagnetic
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item10" val="b"></q-radio>
								<strong>B</strong>
								<span>
									paramagnetic
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item10" val="c"></q-radio>
								<strong>C</strong>
								<span>
									ferromagnetic
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item10" val="d"></q-radio>
								<strong>D</strong>
								<span>
									all of these
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item11">
						In a magnet the regions of greatest magnetic force are the _______________.
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item11" val="a"></q-radio>
								<strong>A</strong>
								<span>
									magnetic domains
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item11" val="b"></q-radio>
								<strong>B</strong>
								<span>
									lodestones 
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item11" val="c"></q-radio>
								<strong>C</strong>
								<span>
									magnetic poles
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item11" val="d"></q-radio>
								<strong>D</strong>
								<span>
									magnetic field
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item12">
						A compass needle points to the ________ pole.
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item12" val="a"></q-radio>
								<strong>A</strong>
								<span>
									magnetic 
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item12" val="b"></q-radio>
								<strong>B</strong>
								<span>
									geographic  
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item12" val="c"></q-radio>
								<strong>C</strong>
								<span>
									closer 
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item12" val="d"></q-radio>
								<strong>D</strong>
								<span>
									at any point
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item13">
						Clusters of many atoms that can be thought of as tiny magnets are ______________.
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item13" val="a"></q-radio>
								<strong>A</strong>
								<span>
									insulators 
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item13" val="b"></q-radio>
								<strong>B</strong>
								<span>
									magnetic domains  
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item13" val="c"></q-radio>
								<strong>C</strong>
								<span>
									magnetic poles 
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item13" val="d"></q-radio>
								<strong>D</strong>
								<span>
									geographic poles
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item14">
						In a household electric circuit, a short circuit occurs when ______________.
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item14" val="a"></q-radio>
								<strong>A</strong>
								<span>
									two hot wires touch 
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item14" val="b"></q-radio>
								<strong>B</strong>
								<span>
									a hot wire is grounded.  
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item14" val="c"></q-radio>
								<strong>C</strong>
								<span>
									a fuse blows or a circuit breaker trips the circuit. 
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item14" val="d"></q-radio>
								<strong>D</strong>
								<span>
									a ground wire touches the metal shell of an appliance.
								</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item15">
						High potentials are used in long-distance transmission of electricity because ___________
						<div class="quizzes-card">
							<label>
								<q-radio v-model="choices_1.item15" val="a"></q-radio>
								<strong>A</strong>
								<span>
									they are safer to use 
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item15" val="b"></q-radio>
								<strong>B</strong>
								<span>
									there is no other way to make current flow.
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item15" val="c"></q-radio>
								<strong>C</strong>
								<span>
									there is less loss of power when currents are small.
								</span>
							</label>
							<label>
								<q-radio v-model="choices_1.item15" val="d"></q-radio>
								<strong>D</strong>
								<span>
									generators produce high potentials with greater efficiency.
								</span>
							</label>
						</div>
					</li>

				</ol>

				<strong>
					II. Match column A with column B
				</strong>

				<ol :class="submitted ? 'submitted' : ''">
					<li :class="status_2.item1">
						The combined effects of electricity and magnetism 
						<q-select placeholder="Select Answer" 
							class="full-width"
							key="value"
							type="radio" 
							:options="test2Choices" 
							v-model="choices_2.item1"
							value="choices_2.item1">							
						</q-select>
					</li>
					<li :class="status_2.item2">
						A magnet in which magnetism is produced by an electric current

						<q-select placeholder="Select Answer" 
							class="full-width"
							key="value"
							type="radio" 
							:options="test2Choices" 
							v-model="choices_2.item2"
							value="choices_2.item2">							
						</q-select>
					</li>
					<li :class="status_2.item3">
						The creation of a current by a changing magnetic field

						<q-select placeholder="Select Answer" 
							class="full-width"
							key="value"
							type="radio" 
							:options="test2Choices" 
							v-model="choices_2.item3"
							value="choices_2.item3">							
						</q-select>
					</li>
					<li :class="status_2.item4">
						A machine that changes kinetic energy into electric energy 

						<q-select placeholder="Select Answer" 
							class="full-width"
							key="value"
							type="radio" 
							:options="test2Choices" 
							v-model="choices_2.item4"
							value="choices_2.item4">							
						</q-select>
					</li>
					<li :class="status_2.item5">
						A machine that changes electric energy into kinetic energy

						<q-select placeholder="Select Answer" 
							class="full-width"
							key="value"
							type="radio" 
							:options="test2Choices" 
							v-model="choices_2.item5"
							value="choices_2.item5">							
						</q-select>
					</li>
					<li :class="status_2.item6">
						A device that increases or decreases voltage

						<q-select placeholder="Select Answer" 
							class="full-width"
							key="value"
							type="radio" 
							:options="test2Choices" 
							v-model="choices_2.item6"
							value="choices_2.item6">							
						</q-select>
					</li>
					<li :class="status_2.item7">
						Tiny permanent magnets

						<q-select placeholder="Select Answer" 
							class="full-width"
							key="value"
							type="radio" 
							:options="test2Choices" 
							v-model="choices_2.item7"
							value="choices_2.item7">							
						</q-select>
					</li>
					<li :class="status_2.item8">
						Magnets made from alloys of aluminum, cobalt and nickel 	

						<q-select placeholder="Select Answer" 
							class="full-width"
							key="value"
							type="radio" 
							:options="test2Choices" 
							v-model="choices_2.item8"
							value="choices_2.item8">
						</q-select>
					</li>
					<li :class="status_2.item9">
						Region in the space around a magnet in which a magnetic force acts on other magnet brought into the region 

						<q-select placeholder="Select Answer" 
							class="full-width"
							key="value"
							type="radio" 
							:options="test2Choices" 
							v-model="choices_2.item9"
							value="choices_2.item9">							
						</q-select>
					</li>
					<li :class="status_2.item10">
						magnet made mostly of iron, with little neodynmium and boron 

						<q-select placeholder="Select Answer" 
							class="full-width"
							key="value"
							type="radio" 
							:options="test2Choices" 
							v-model="choices_2.item10"
							value="choices_2.item10">							
						</q-select>
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
			storageKey: 'm1-quiz-post',
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
			choices_2: {
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
			},
			test2Choices: [
				{
					value: 'a',
					label: 'electromagnetic induction',
				},
				{
					value: 'b', 
					label: 'magnetic poles',
				},
				{
					value: 'c',
					label: 'battery',
				},
				{
					value: 'd',
					label: 'electromagnetism',
				},
				{
					value: 'e',
					label: 'electric motor',
				},
				{
					value: 'f',
					label: 'electromagnet',
				},
				{
					value: 'g',
					label: 'electric generator',
				},
				{
					value: 'h',
					label: 'voltage',
				},
				{
					value: 'i',
					label: 'transformer',
				},
				{
					value: 'j',
					label: 'magnetism',
				},
				{
					value: 'k',
					label: 'magnequench',
				},
				{
					value: 'l',
					label: 'magnetic field',
				},
				{
					value: 'm',
					label: 'temporary magnetism',
				},
				{
					value: 'n',
					label: 'magnetic lines of force',
				},
				{
					value: 'o',
					label: 'magnetites',
				},
				{
					value: 'p',
					label: 'permanent magnets',
				},
				{
					value: 'q',
					label: 'alnico magnet',
				}
			],
			answers_1: {
				item1: ['b'],
				item2: ['d'],
				item3: ['c'],
				item4: ['d'],
				item5: ['b'],
				item6: ['b'],
				item7: ['b'],
				item8: ['c'],
				item9: ['a'],
				item10: ['a'],
				item11: ['b'],
				item12: ['b'],
				item13: ['b'],
				item14: ['a'],
				item15: ['c'],
			},
			answers_2: {
				item1: ['d'],
				item2: ['f'],
				item3: ['a'],
				item4: ['g'],
				item5: ['e'],
				item6: ['i'],
				item7: ['o'],
				item8: ['q'],
				item9: ['b'],
				item10: ['k'],
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
				item6: this.compute(this.answers_1.item6, this.choices_1.item6),
				item7: this.compute(this.answers_1.item7, this.choices_1.item7),
				item8: this.compute(this.answers_1.item8, this.choices_1.item8),
				item9: this.compute(this.answers_1.item9, this.choices_1.item9),
				item10: this.compute(this.answers_1.item10, this.choices_1.item10),
				item11: this.compute(this.answers_1.item11, this.choices_1.item11),
				item12: this.compute(this.answers_1.item12, this.choices_1.item12),
				item13: this.compute(this.answers_1.item13, this.choices_1.item13),
				item14: this.compute(this.answers_1.item14, this.choices_1.item14),
				item15: this.compute(this.answers_1.item15, this.choices_1.item15)
			}
		},
		status_2 () {
			return {
				item1: this.compute(this.answers_2.item1, this.choices_2.item1),
				item2: this.compute(this.answers_2.item2, this.choices_2.item2),
				item3: this.compute(this.answers_2.item3, this.choices_2.item3),
				item4: this.compute(this.answers_2.item4, this.choices_2.item4),
				item5: this.compute(this.answers_2.item5, this.choices_2.item5),
				item6: this.compute(this.answers_2.item6, this.choices_2.item6),
				item7: this.compute(this.answers_2.item7, this.choices_2.item7),
				item8: this.compute(this.answers_2.item8, this.choices_2.item8),
				item9: this.compute(this.answers_2.item9, this.choices_2.item9),
				item10: this.compute(this.answers_2.item10, this.choices_2.item10),
			}
		},
	}
}
</script>
<style lang="scss"></style>