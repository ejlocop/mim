import Loading from '../../partials/mixins/Loading'
import { Dialog, LocalStorage } from 'quasar'
export default {
	mixins: [Loading],
	data () {
		return {
			choices_1: {
			},
			choices_2: {
			},
			answers_1: {
			},
			answers_2: {
			},
			submitted: false,
		}
	},
	mounted () {
		let storage = this.getFromStorage(this.storageKey)
		if (storage) {
			this.choices_1 = storage.choices_1
			this.choices_2 = storage.choices_2
			this.submitted = storage.submitted
			console.log(storage)
		}
	},
	methods: {
		checkUnansweredQuestions (choices) {
			let _choices = Object.keys(choices)
			return _choices.filter(choice => {
				return choices[choice] == ''
			})
		},
		close () {

			this.$emit('closed')
		},
		submit () {
			let self = this
			self.showLoading('Please wait...')
			if (!this.submitted) {
				setTimeout ( () => {
					self.hideLoading()
					self.saveAnswers()	
					self.showResults()
				}, 2000); 	
			}
			else {
				self.reset()
			}
		},
		reset () {
			let self = this
			setTimeout ( () => {
					self.hideLoading()
					LocalStorage.clear(self.storageKey)
					Dialog.create({
						title: '<p>Clear</p>',
					  message: `
							<p>Results Cleared!</p>
					  `,
					  buttons: [
							{
								label: "Close",
								handler: () => {	
								}
							},
							// { // Retake Quiz?
							// 	label: "Close",
							// 	handler: () => {	
							// 	}
							// },
					  ]
					})
				}, 2000);
		},
		showResults () {
			let self = this;
			self.submitted = true
			console.log(self.submitted)
			Dialog.create({
				title: '<p>Quiz</p>',
			  message: `
					<p>You scored ${this.totalScore} / ${this.totalItems} !.</p>
			  `,
			  buttons: [
					{
						label: "Close",
						handler: () => {	
						}
					},
					// { // Retake Quiz?
					// 	label: "Close",
					// 	handler: () => {	
					// 	}
					// },
			  ]
			})
		},
		saveAnswers () {
			this.saveToStorage(this.storageKey)
		},
		saveToStorage (key) {
			let obj = {
				submitted: true,
				choices_1: this.choices_1,
				choices_2: this.choices_2,
				totalScore: this.totalScore,
				totalItems: this.totalItems,
				submitted_at: new Date().getTime()
			}
			
			LocalStorage.set(key, obj)
			
			console.log(`${key} saved to storage!`)
		},
		getFromStorage (key) {
			let storage = LocalStorage.get.item(key)
			console.log(`get ${key}`)
			return storage;
		},
		compute (key, answer) {
			let status = key.includes(answer)
			return status ? 'correct' : 'wrong'
		},
	},
	computed: {
		canSubmit () {
			return !this.unansweredChoices1.length && !this.unansweredChoices2.length
		},
		totalScore () {
			let status1 = Object.keys(this.status_1)
			let status2 = Object.keys(this.status_2)
			let correct1 = status1.filter((item) => {
				return this.status_1[item] == 'correct'
			})
			let correct2 = status2.filter((item) => {
				return this.status_2[item] == 'correct'
			})

			return correct1.length + correct2.length
		},
		submitText () {
			return this.submitted ? 'Reset' : 'Submit'
		},
		totalItems () {
			let answers1 = Object.keys(this.answers_1)
			let answers2 = Object.keys(this.answers_1)
			return answers1.length + answers2.length
		},
		unansweredChoices1 () {
			return this.checkUnansweredQuestions(this.choices_1)
		},
		unansweredChoices2 () {
			return this.checkUnansweredQuestions(this.choices_2)
		},
	}
}