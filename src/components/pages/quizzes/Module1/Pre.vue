<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Module 1: Pre-Test
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
					I. Choose the letter(s) of the BEST ANSWER. Write your answers on a separate sheet of paper
				</strong>
				<ol :class="submitted ? 'submitted' : ''">
					<li :class="status_1.item1">
						The N pole of a compass needle points to the north magnetic pole of the earth because that pole is
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item1" val="a"></q-radio> 
								<strong>A</strong> 
								<span>an S pole</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item1" val="b"></q-radio> 
								<strong>B</strong> 
								<span>an N pole</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item1" val="c"></q-radio> 
								<strong>C</strong> 
								<span>a large iron deposit</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item1" val="d"></q-radio> 
								<strong>D</strong> 
								<span>near the north geographic pole</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item2">
						If the poles of two magnets repel each other
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item2" val="a"></q-radio> 
								<strong>A</strong> 
								<span>both poles must be S poles. </span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item2" val="b"></q-radio> 
								<strong>B</strong> 
								<span>both poles must be N poles.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item2" val="c"></q-radio> 
								<strong>C</strong> 
								<span>one pole is an S and the other is an N.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item2" val="d"></q-radio> 
								<strong>D</strong> 
								<span>both poles are of the same kind</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item3">
						Magnetizing a piece of iron is a process by which
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item3" val="a"></q-radio> 
								<strong>A</strong> 
								<span>magnetic atoms are added to the iron.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item3" val="b"></q-radio> 
								<strong>B</strong> 
								<span>magnetic lines of force are brought into line.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item3" val="c"></q-radio> 
								<strong>C</strong> 
								<span>existing atomic magnets are brought into line.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item3" val="d"></q-radio> 
								<strong>D</strong> 
								<span>each atom in the iron is converted into a magnet</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item4">
						A magnetic field can make a compass needle turn because the field
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item4" val="a"></q-radio> 
								<strong>A</strong> 
								<span>attracts N poles.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item4" val="b"></q-radio> 
								<strong>B</strong> 
								<span>is produced by a magnet.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item4" val="c"></q-radio> 
								<strong>C</strong> 
								<span>comes from the center of the earth.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item4" val="d"></q-radio> 
								<strong>D</strong> 
								<span>exerts forces on the atomic currents in the compass needle</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item5">
						A primary solenoid connected to a battery is inside a secondary solenoid. It is not possible to induce a current into the secondary coil by
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item5" val="a"></q-radio> 
								<strong>A</strong> 
								<span>turning the primary current off.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item5" val="b"></q-radio> 
								<strong>B</strong> 
								<span>moving a core into the primary coil.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item5" val="c"></q-radio> 
								<strong>C</strong> 
								<span>pulling the primary out of the secondary coil</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item5" val="d"></q-radio> 
								<strong>D</strong> 
								<span>running a steady current through the primary coil</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item6">
						A magnet will attract a wire if
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item6" val="a"></q-radio> 
								<strong>A</strong> 
								<span>the wire is long.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item6" val="b"></q-radio> 
								<strong>B</strong> 
								<span>the wire has a small mass.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item6" val="c"></q-radio> 
								<strong>C</strong> 
								<span>the wire exerts an electric force.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item6" val="d"></q-radio> 
								<strong>D</strong> 
								<span>the wire has current flowing through it.</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item7">
						The iron atom acts as a magnet because
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item7" val="a"></q-radio> 
								<strong>A</strong> 
								<span>it has an equal number of protons and electrons.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item7" val="b"></q-radio> 
								<strong>B</strong> 
								<span>the electrons have a spinning motion.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item7" val="c"></q-radio> 
								<strong>C</strong> 
								<span>the electrons have negative charge.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item7" val="d"></q-radio> 
								<strong>D</strong> 
								<span>the neutrons have no charge.</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item8">
						A steel sewing needle can be made into a magnet by
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item8" val="a"></q-radio> 
								<strong>A</strong> 
								<span>banging it on a table.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item8" val="b"></q-radio> 
								<strong>B</strong> 
								<span>soaking it in mercury.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item8" val="c"></q-radio> 
								<strong>C</strong> 
								<span>placing it near a compass.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item8" val="d"></q-radio> 
								<strong>D</strong> 
								<span>stroking it with a magnet in one direction only.</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item9">
						stroking it with a magnet in one direction only
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item9" val="a"></q-radio> 
								<strong>A</strong> 
								<span>copper cannot be charged.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item9" val="b"></q-radio> 
								<strong>B</strong> 
								<span>the domains are already aligned.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item9" val="c"></q-radio> 
								<strong>C</strong> 
								<span>the copper atoms have no charge.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item9" val="d"></q-radio> 
								<strong>D</strong> 
								<span>electrons spinning in opposite directions in copper cancel each other.</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item10">
						To increase the strength of an electromagnet,	
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item10" val="a"></q-radio> 
								<strong>A</strong> 
								<span>increase the current in the coil.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item10" val="b"></q-radio> 
								<strong>B</strong> 
								<span>add an iron center in the coil.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item10" val="c"></q-radio> 
								<strong>C</strong> 
								<span>increase the number of loops in the wire.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item10" val="d"></q-radio> 
								<strong>D</strong> 
								<span>all of the above.</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item11">
						If a magnet is brought near a magnet suspended on a string, the
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item11" val="a"></q-radio> 
								<strong>A</strong> 
								<span>N poles attract each other.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item11" val="b"></q-radio> 
								<strong>B</strong> 
								<span>N poles attract the S poles.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item11" val="c"></q-radio> 
								<strong>C</strong> 
								<span>S poles attract each other.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item11" val="d"></q-radio> 
								<strong>D</strong> 
								<span>N poles repel the S poles.</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item12">
						A device that turns electric energy into sound energy is
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item12" val="a"></q-radio> 
								<strong>A</strong> 
								<span>a speaker.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item12" val="b"></q-radio> 
								<strong>B</strong> 
								<span>a generator.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item12" val="c"></q-radio> 
								<strong>C</strong> 
								<span>a VCD player.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item12" val="d"></q-radio> 
								<strong>D</strong> 
								<span>a transformer.</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item13">
						Substances that are slightly attracted by strong magnets are said to be
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item13" val="a"></q-radio> 
								<strong>A</strong> 
								<span>diamagnetic.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item13" val="b"></q-radio> 
								<strong>B</strong> 
								<span>ferromagnetic.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item13" val="c"></q-radio> 
								<strong>C</strong> 
								<span>paramagnetic.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item13" val="d"></q-radio> 
								<strong>D</strong> 
								<span>none of these.</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item14">
						The lines of force of unlike poles placed near each other
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item14" val="a"></q-radio> 
								<strong>A</strong> 
								<span>curve away from each other.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item14" val="b"></q-radio> 
								<strong>B</strong> 
								<span>connect the poles.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item14" val="c"></q-radio> 
								<strong>C</strong> 
								<span>cancel each other.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item14" val="d"></q-radio> 
								<strong>D</strong> 
								<span>none of these.</span>
							</label>
						</div>
					</li>

					<li :class="status_1.item15">
						The scientist who discovered that an electric current can affect the action of a magnetic needle was
						<div class="quizzes-card">
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item15" val="a"></q-radio> 
								<strong>A</strong> 
								<span>Ampere.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item15" val="b"></q-radio> 
								<strong>B</strong> 
								<span>Oersted.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item15" val="c"></q-radio> 
								<strong>C</strong> 
								<span>Faraday.</span>
							</label>
							<label>
								<q-radio :disable="submitted"  v-model="choices_1.item15" val="d"></q-radio> 
								<strong>D</strong> 
								<span>Gilbert.</span>
							</label>
						</div>
					</li>
				</ol>

				<strong>
					II. Complete each statement by supplying the correct term or phrase.
				</strong>
				<ol :class="submitted ? 'submitted' : ''">
					<li :class="status_1.item16">
						The N pole of a magnet will be attracted to the 
						<input :disabled="submitted"  type="text" v-model="choices_2.item1"> 
						pole of another magnet.
					</li>
					<li :class="status_1.item17">
						Alloys and ceramics are used to make 
						<input :disabled="submitted"  type="text" v-model="choices_2.item2"> 
						magnets.
					</li>
					<li :class="status_1.item18">
						The S pole of the earth’s magnetic field is located in 
						<input :disabled="submitted"  type="text" v-model="choices_2.item3">
					</li>
					<li :class="status_1.item19">
						Many magnetic lines of force go into a magnet at its 
						<input :disabled="submitted"  type="text" v-model="choices_2.item4">
					</li>
					<li :class="status_1.item20">
						A suspended solenoid will rotate until it is lined up with the earth’s 
						<input :disabled="submitted"  type="text" v-model="choices_2.item5">
					</li>
					<li :class="status_1.item21">
						Regions containing groups of atoms that act like small magnets are called 
						<input :disabled="submitted"  type="text" v-model="choices_2.item6">
					</li>
					<li :class="status_1.item22">
						The relationship and interaction between electricity and magnetism is called 
						<input :disabled="submitted"  type="text" v-model="choices_2.item7">
					</li>
					<li :class="status_1.item23">
						Like poles of magnets 
						<input :disabled="submitted"  type="text" v-model="choices_2.item8">
						each other
					</li>
					<li :class="status_1.item24">
						<input :disabled="submitted"  type="text" v-model="choices_2.item9">
						are objects that attract material containing iron and they always face the same direction when moving freely.
					</li>
					<li :class="status_1.item25">
						Natural magnets are made of iron ore called 
						<input :disabled="submitted"  type="text" v-model="choices_2.item10">
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
			storageKey: 'm1-quiz-pre',
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
			answers_1: {
				item1: ['d'],
				item2: ['a', 'b', 'd'],
				item3: ['c'],
				item4: ['b'],
				item5: ['b'],
				item6: ['d'],
				item7: ['b'],
				item8: ['d'],
				item9: ['d'],
				item10: ['d'],
				item11: ['b'],
				item12: ['a'],
				item13: ['c'],
				item14: ['b'],
				item15: ['b'],
			},
			answers_2: {
				item1: ['south'],
				item2: ['permanent'],
				item3: ['south-seeking pole', 'south seeking pole'],
				item4: ['poles'],
				item5: ['magnetic field', 'magnetic-field'],
				item6: ['domains'],
				item7: ['electromagnetism'],
				item8: ['repel'],
				item9: ['ferromagnetic'],
				item10: ['lodestone'],
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
