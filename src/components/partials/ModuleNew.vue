<template>
<div class="layout-view layout-padding">
	<h5>{{ header }}</h5>

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
	
	<button class="primary block mb-20"
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

  <button class="primary block mt-20"
  	@click="openSummary">
  	Let's Summarize!
  </button>
  <button class="primary block mt-20">Quizzes</button>

	<button v-back-to-top.animate="{offset: 500, duration: 200}"
	  class="warning circular fixed-bottom-right animate-pop"
	  style="margin: 0 15px 15px 0">
	  <i>keyboard_arrow_up</i>
	</button>

	<compentencies :competencies="module.competencies" 
		:opened="compentenciesOpen"
		@closed="compentenciesOpen = false">		
	</compentencies>
</div>
</template>

<script>
import Lesson from './Lesson'
import Competencies from './Competencies'
import mixinLessons from './mixins/Lessons'
export default {
	mixins: [mixinLessons],
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

	.small {
		font-size: .75em;
	}

	.modal {
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