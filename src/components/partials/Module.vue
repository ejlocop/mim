<template>
	<div class="card">
	  <div class="card-title bg-light-blue text-white">
	    {{ header }}
	  </div>
	  <div class="card-content card-force-top-padding">
	  	<a href="#" 
	  		@click.prevent.stop="openCompetencies">
	  		Learning Competencies
	  	</a>
	  </div>
	  <q-collapsible :opened="opened" icon="content_paste" label="Lessons">
	  	<div v-if="!module.lessons.length">
	  		Lessons Unavailable
	  	</div>
      <div class="lessons-wrapper" v-for="(lesson,index) in module.lessons">
        <a href="#">Lesson {{ index+1 }}: {{ lesson.title }}</a>
      </div>
    </q-collapsible>
    <div class="card-content card-force-top-padding">
	  	<a href="#" @click.prevent.stop="openDialog(header)">Quizzes</a>
	  </div>

	  <!-- Modals -->
		<q-modal ref="modalCompetencies" :content-css="{padding: '10px'}">
		  <h5>Learning Competencies</h5>
		  <p>After going through this module, you are expected to:</p>
		  <ol>
		    <li v-for="(competency,index) in module.competencies">
		        {{ competency }}
		    </li>
		  </ol>
		  <button class="primary" 
		  	@click="$refs.modalCompetencies.close()">
		  	Close
		  </button>
		</q-modal>
	</div>	
</template>
<script>
import Dialog from '../../assets/js/mixins/Dialog'
export default {
	mixins: [Dialog],
	props: {
		module: {
			type: Object,
			required: true,
		}
	},
	data () {
		return {};
	},

	methods: {
		openCompetencies () {
			this.$refs.modalCompetencies.open()
		},

		openDialog (title) {
			let _dialog = {
				title,
				buttons: [
					{
						label: "Pre-Test",
						handler () {
							console.log("Pre-Test")
						}
					},
					{
						label: "Post-Test",
						handler () {
							console.log("Post-Test")
						}
					}
				]
			}
			this.Dialog(_dialog)
		}
	},

	computed: {
		header () {
			let module = this.module;
			return `Module ${module.key} : ${module.title}`
		},
		opened () {
			return this.module.key <= 1;
		},
	}
}
</script>

<style>
.lessons-wrapper:not(:last-child) {
	margin-bottom: 7px;
}
</style>