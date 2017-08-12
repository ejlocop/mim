<template>
<q-modal ref="modalCompetencies" :content-css="{padding: '10px'}">
  <h5>Learning Competencies</h5>
  <p>After going through this module, you are expected to:</p>
  <ol>
    <li v-for="(competency,index) in competencies">
        {{ competency }}
    </li>
  </ol>
  <button class="primary" 
  	@click="close">
  	Close
  </button>
</q-modal>
</template>
<script>
export default {
	props: {
		competencies: {
			type: [Object,Array]
		},
		opened: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		close () {
			// this.isOpened = false;
			this.$emit('closed')
		}
	},
	watch: {
		opened (val) {
			if (val) {
				this.$refs.modalCompetencies.open()
			}
			else {
				this.$refs.modalCompetencies.close()	
			}
		}
	}
}
</script>
<style></style>