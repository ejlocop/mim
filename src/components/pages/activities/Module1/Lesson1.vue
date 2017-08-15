<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Discovery of Magnetism
			</q-toolbar-title>

			<button :disabled="!canSubmit" 
				class="white right text-primary"
				@click="submit">
				{{ submitText }}
			</button>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<p>Testing Your Understanding</p>
				<strong>Test your understanding by completing the blanks.</strong>
				<ol :class="submitted ? 'submitted' : ''">
					<li :class="status_1.item1">
						The black metallic ore that has the property of attracting pieces of iron are called <input type="text" v-model="choices_1.item1" :disabled="submitted">.
					</li>
					<li :class="status_1.item2">
						The natural force of attracting pieces of iron is called <input type="text" v-model="choices_1.item2" :disabled="submitted">.
					</li>
					<li :class="status_1.item3">
						The word magnet was believed to have been derived from the name of a shepherd named <input type="text" v-model="choices_1.item3" :disabled="submitted">.
					</li>
					<li :class="status_1.item4">
						Lodestone was later called <input type="text" v-model="choices_1.item4" :disabled="submitted"> for its magnetic property.
					</li>
					<li :class="status_1.item5">
						<input type="text" v-model="choices_1.item5" :disabled="submitted"> was a Greek philosopher who first discovered the magnetic property of lodestone.
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
			storageKey: 'm1l1-activity',
			choices_1: {
				item1: '',
				item2: '',
				item3: '',
				item4: '',
				item5: '',
			},
			answers_1: {
				item1: ['lodestone', 'Lodestone'],
				item2: ['magnetic', 'Magnetic'],
				item3: ['Magnes', 'magnes'],
				item4: ['magnet', 'Magnet'],
				item5: ['Thales', 'thales'],
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