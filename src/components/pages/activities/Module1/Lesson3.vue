<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Magnets and Magnetic Fields
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
					3.a Making an Artificial Magnet by Induced Magnetism
				</strong>
				<p>
					<strong>Problem: </strong> How to make an artificial magnet
				</p>
				<strong>
					Materials: 
				</strong>
				<ul>
					<li>Materials: </li>
					<li>magnet (circular magnet from defective radio speaker)</li>
					<li>pins, clips and nails</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Gather all the materials needed.
					</li>
					<li>
						Stroke the end of a screwdriver with the magnet. (Do it in one direction only)
					</li>
					<li>
						Place the screwdriver near pieces of paper clips, pins or nails. Observe what happens.
					</li>
				</ol>

				<strong>
					3.b Studying Bar Magnets
				</strong>
				<p>
					The diagram below illustrates a bar magnet that is suspended by a string. Another bar magnet is brought near it. Study the arrows in the diagram and answer the questions below.
				</p>
				<div class="card lesson-card">
					<img :src="'./statics/images/m1l3-7.jpg'" alt="">
				</div>
				<strong>Answer the following questions:</strong>
				<ul>
					<li>
						What happens to the suspended magnet when the S pole of the other magnet is brought near its N pole?
					</li>
					<li>
						What happens to the suspended magnet when the N pole of the other magnet is brought near its N pole?
					</li>
					<li>
						What happens to the suspended magnet when the N pole of the other magnet is brought near its S pole?
					</li>
					<li>
						What happens to the suspended magnet when the S pole of the other magnet is brought near its S pole?
					</li>
				</ul>

				<strong>
					3.c Drawing Magnetic Lines of Force
				</strong>
				<strong>Materials:</strong>
				<ul class="unstyled">
					<li>bar magnet (2)</li>
					<li>iron filings</li>
					<li>plain sheet of paper</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Place two bar magnets flat on the table with the N poles about 2 cm apart.
					</li>
					<li>
						Cover the magnets with a thin sheet of plain paper.
					</li>
					<li>
						Sprinkle the iron filings on the paper gently until the filings line up.
					</li>
					<li>
						Make a sketch showing how the magnetic lines of force are arranged.
					</li>
					<li>
						Where is the magnetic field strongest?
					</li>
				</ol>

				<strong>3.d Self-Test</strong>
				<strong>
					Arrange the jumbled letters to form the word(s),  that best fits the statement.
				</strong>

				<ol :class="submitted ? 'submitted' : ''">
					<li :class="status_1.item1">
						Natural magnets
						<strong class="text-italic">COILAN</strong>
						<input type="text" v-model="choices_1.item1" :disabled="submitted" class="full-width">
					</li>
					<li :class="status_1.item2">
						Clusters of many atoms that act as tiny magnets in a material
						<strong class="text-italic">MAINODS</strong>
						<input type="text" v-model="choices_1.item2" :disabled="submitted" class="full-width">
					</li>
					<li :class="status_1.item3">
						A region around a magnet
						<strong class="text-italic">SFILEDGENAMICT</strong>
						<input type="text" v-model="choices_1.item3" :disabled="submitted" class="full-width">
					</li>
					<li :class="status_1.item4">
						Imaginary lines that represent magnetic field 
						<strong class="text-italic">SLIENSOFGENTMICFOECR</strong>
						<input type="text" v-model="choices_1.item4" :disabled="submitted" class="full-width">
					</li>
					<li :class="status_1.item5">
						Materials that are strongly attracted to magnet
						<strong class="text-italic">GENTAMICORREF</strong>
						<input type="text" v-model="choices_1.item5" :disabled="submitted" class="full-width">
					</li>
					<li :class="status_1.item6">
						Materials that are repelled by magnet 
						<strong class="text-italic">GENTAMICIAD</strong>
						<input type="text" v-model="choices_1.item6" :disabled="submitted" class="full-width">
					</li>
					<li :class="status_1.item7">
						Materials that are slightly attracted by magnet 
						<strong class="text-italic">GENTAMICARAP</strong>
						<input type="text" v-model="choices_1.item7" :disabled="submitted" class="full-width">
					</li>
					<li :class="status_1.item8">
						A substance that possesses magnetic properties
						<strong class="text-italic">NETGAM</strong>
						<input type="text" v-model="choices_1.item8" :disabled="submitted" class="full-width">
					</li>
					<li :class="status_1.item9">
						Iron and other elements can become strongly magnetized 
						<strong class="text-italic">NETGAMITAZIONT</strong>
						<input type="text" v-model="choices_1.item9" :disabled="submitted" class="full-width">
					</li>
					<li :class="status_1.item10">
						A magnet has two : 
						<strong class="text-italic">SLOPES</strong>
						<input type="text" v-model="choices_1.item10" :disabled="submitted" class="full-width">
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
			storageKey: 'm1l3-activity',
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
			},
			answers_1: {
				item1: ['ALNICO'],
				item2: ['DOMAINS'],
				item3: ['MAGNETIC FIELD'],
				item4: ['MAGNETIC LINES OF FORCE'],
				item5: ['FERROMAGNETIC'],
				item6: ['DIAMAGNETIC'],
				item7: ['PARAMGANETIC'],
				item8: ['MAGNET'],
				item9: ['MAGNETIZATION'],
				item10: ['POLES'],
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