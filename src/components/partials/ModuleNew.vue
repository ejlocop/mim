<template>
<div class="layout-view layout-padding">
	<h5 class="text-center">{{ header }}</h5>

	<q-modal ref="lessonModal" 
		id="lessonModal" 
		:content-css="{minWidth: '80vw', minHeight: '80vh'}">
		<keep-alive>
			<component :is="lessonView" @closed="lessonView = ''">
			</component>
		</keep-alive>
	</q-modal>

	<q-modal ref="videoModal" 
			id="videoModal"
			:content-css="{minWidth: '80vw'}">
			<keep-alive>
				<component :is="lessonVideo" @closed="lessonVideo = ''">
				</component>
			</keep-alive>
	</q-modal>

	<q-modal ref="assignmentModal" 
			id="assignmentModal"
			:content-css="{minWidth: '80vw'}">
			<keep-alive>
				<component :is="lessonAssignment" @closed="lessonAssignment = ''">
				</component>
			</keep-alive>
	</q-modal>

	<q-modal ref="activityModal" 
			id="activityModal"
			:content-css="{minWidth: '80vw'}">
			<keep-alive>
				<component :is="lessonActivity" @closed="lessonActivity = ''">
				</component>
			</keep-alive>
	</q-modal>

	<q-modal ref="summaryModal" 
			id="summaryModal"
			:content-css="{minWidth: '80vw'}">
			<keep-alive>
				<component :is="moduleSummary" @closed="moduleSummary = ''">
				</component>
			</keep-alive>
	</q-modal>

	<q-modal ref="quizzesModal" 
			id="quizzesModal"
			@open="loadQuizzes"
			:content-css="{minWidth: '80vw'}">
			<keep-alive>
				<component :is="moduleQuizzes" @closed="moduleQuizzes = ''">
				</component>
			</keep-alive>
	</q-modal>

	<compentencies :competencies="module.competencies" 
		:opened="compentenciesOpen"
		@closed="compentenciesOpen = false">		
	</compentencies>
	
	<button class="btn block mb-20"
		@click="compentenciesOpen = true">
		Learning Competencies
	</button>

  <div class="timeline layout-padding">
  	<div class="timeline-label">
  		<p class="bg-white text-italic">
  		Lessons
  		</p>
  	</div>
	  <lesson v-for="(lesson,index) in module.lessons" 
	  	@read="loadLesson"
	  	@watch="watchLesson"
	  	@activity="openActivity"
	  	@assignment="openAssignment"
	  	:lesson="lesson"
	  	key="index">
	  </lesson>
	</div>

  <button class="btn block mt-20"
  	@click="openSummary">
  	Let's Summarize!
  </button>

  <button class="btn block mt-20"
  	@click="openQuizzes">
  	Quizzes
  </button>

	<button v-back-to-top.animate="{offset: 500, duration: 200}"
	  class="back-to-top shadow-3 hoverable-3 shadow-transition circular fixed-bottom-right animate-pop"
	  style="margin: 0 15px 15px 0">
	  <i>keyboard_arrow_up</i>
	</button>
</div>
</template>

<script>
import Lesson from './Lesson'
import Competencies from './Competencies'
import mixinLessons from './mixins/Lessons'
import Dialog from '../../assets/js/mixins/Dialog'
import mixinLoading from './mixins/Loading'
export default {
	mixins: [mixinLessons, Dialog, mixinLoading],
	components: {
		'lesson': Lesson,
		'compentencies': Competencies
	},
	props: {
		module: {
			type: Object,
			required: true
		}
	},
	data () {
		return {
			compentenciesOpen: false,
			lessonView: null,
			lessonVideo: null,
			lessonAssignment: null,
			lessonActivity: null,
			moduleSummary: null,
			moduleQuizzes: null,
		}
	},
	methods: {
		loadLesson (lesson) {
			let file = this.getFile(lesson)
			this.lessonView = `${file}-lesson`
		},
		watchLesson (lesson) {
			let file = this.getFile(lesson)
			this.lessonVideo = `${file}-video`
		},
		loadQuizzes () {
			// this.showLoading('Please wait...')
		},
		openActivity (lesson) {
			let file = this.getFile(lesson)
			this.lessonActivity = `${file}-activity`
		},
		openAssignment (lesson) {
			let file = this.getFile(lesson)
			this.lessonAssignment = `${file}-assignment`
		},
		openSummary () {
			this.moduleSummary = `m${this.module.key}-summarize`
		},
		openQuizzes () {
			let self = this;
			let _dialog = {
				title: '<p>Select Type</p>',
				buttons: [
					{
						label: "Pre-Test",
						handler: () => {
							let type = `m${self.module.key}-pre`
							self.quizPrompt(type)
						}
					},
					{
						label: "Post-Test",
						handler: () => {
							let type = `m${self.module.key}-post`
							self.quizPrompt(type)
						}
					}
				]
			}
			this.Dialog(_dialog)
		},
		quizPrompt (type) {
			let self = this
			let _dialog = {
				title: "<p>You won't be able to go back once the Quiz has started, Do you want to Continue?</p>",
				buttons: [
					{
						label: "Cancel",
						handler: () => {
							return;
						}
					},
					{
						label: "Continue",
						handler: () => {
							self.moduleQuizzes = type
						}
					}
				]
			}
			this.Dialog(_dialog)
		},
		getFile (lesson) {
			let module = this.module
			return `m${module.key}l${lesson.index}`
		}
	},	
	watch: {
		moduleSummary (module) {
			if (module) {
				this.$refs.summaryModal.open()
			}
			else {
				this.$refs.summaryModal.close()
				this.$refs.summaryModal.active = false
			}
			console.log(`${module} from summarize`)
		},

		moduleQuizzes (module) {
			if (module) {
				this.$refs.quizzesModal.open()
			}
			else {
				this.$refs.quizzesModal.close()
				this.$refs.quizzesModal.active = false
			}
			console.log(`${module} from quizzes`)
		},
		
		lessonView (lesson) {
			if (lesson)
				this.$refs.lessonModal.open()			
			else {
				this.$refs.lessonModal.close()
				this.$refs.lessonModal.active = false
			}
			console.log(`${lesson} from lesson`)
		},
		lessonVideo (lesson) {
			if (lesson)
				this.$refs.videoModal.open()
			else {
				this.$refs.videoModal.close()
				this.$refs.videoModal.active = false
			}
			console.log(`${lesson} from video`)
		},
		lessonAssignment (lesson) {
			if (lesson)
				this.$refs.assignmentModal.open()
			else {
				this.$refs.assignmentModal.close()
				this.$refs.assignmentModal.active = false
			}
			console.log(`${lesson} from assignment`)
		},
		lessonActivity (lesson) {
			if (lesson)
				this.$refs.activityModal.open()
			else {
				this.$refs.activityModal.close()
				this.$refs.activityModal.active = false
			}
			console.log(`${lesson} from activity`)
		}
	},
	computed: {
		header () {
			let module = this.module
			return `Module ${module.key} : ${module.title}`
		},
	}
}
</script>
<style lang="scss">
	button.btn {
		background: #FFEB3B;
		box-shadow: 0 1px 3px #FFEB3B, 0 1px 2px #FBC02D !important;
		color: rgba(100, 100, 100, 1);

		&:active, &:hover {
			background: #FFF59D;
		}
	}
	.header {
		h5 {
			color: #666;
		}
	}
	.timeline {
		background: white;
		.timeline-label {
  		background: #F2C037;
			h5 {
				font-size: 1.5rem;
			}
		}
		.timeline-title {
			margin-bottom: 0;
		}
	}
	.block {
		display: block;
		width: 100%;
	}
	.mb-20 {
		margin-bottom: 20px
	}
	.mt-20 {
		margin-top: 20px
	}
	.timeline-content {
		button {
			margin-bottom: 5px;
			width: 100%;
			text-align: left;
			background: #FFF9C4;
			box-shadow: 0 1px 3px #FFEB3B, 0 1px 2px #FDD835 !important;

			&:active, &:hover {
				background: #FFF59D;
			}

			&:not(:last-children) {
				margin-bottom: 0;
			}
		}
		p {
			font-size: .8rem;
		}
	}
	.q-collapsible {
		.q-collapsible-sub-item {
			background: white;
		}
		.item {
			@extend .btn;
			background: #027be3;
		}
	}

	.back-to-top {
		background: #FFF176;
	}

	.small {
		font-size: .75em;
	}

	.video-wrapper {
		border: 1px solid #444;
		&:not(:last-child) {
			margin-bottom: 5px;
		}

		a {
			word-wrap: break-word;
		}
	}

	.modal {
		&#quizzesModal, &#activityModal {
			ol {
				&.submitted {
					li {
						list-style: none;	
						&::before { 
							margin-left: -1.3em;
							width: 1.3em;
							display: inline-block;
							font-weight: bold;
					    font-family: "Material Icons";
					    font-size: 1.3em;
					    transition: all .3s linear;
					    position: relative;
					    top: .3em;
						}
						&.correct::before {
							color: green;
							content: '\e876';
						}
						&.wrong::before {
							color: red;
							content: '\e5cd';
						}
					}
				}
				li {
					margin-bottom: 10px;
					.quizzes-card {
						margin-top: 5px;
						label {
							display: block;
							width: 100%;
							&:not(:last-child) {
								margin-bottom: 5px;
							}
						}
					}
				}
			}
		}
		.layout-view > .layout-padding {
			background: white;
			min-height: 100%;
		}
		.lesson-card {
			.card-content {
				font-size: .85em;
				color: #444;	
			}
		}
	}

	.btn {
		user-select:: none;
	  outline: 0;
	  border: 0;
	  cursor: pointer;
	  text-decoration: none;
	  position: relative;
	  font-style: normal;
	  text-align: center;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  vertical-align: middle;
	  color: inherit;
	  background: transparent;
	  line-height: 1;
	  transition: all .12s ease-in;
	  -webkit-appearance: button;
	}
</style>