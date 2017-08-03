<template>
<div class="layout-view layout-padding">
	<h5>{{ header }}</h5>
	<button class="primary block">Learning Competencies</button>
	<q-collapsible group="somegroup" opened icon="content_paste" label="Lessons">
	  <div class="timeline yellow">
		  <div class="timeline-item" v-for="(lesson, index) in module.lessons">
		    <div class="timeline-badge">
		      <!-- <strong>{{ index+1 }}</strong> -->
		      <i>check</i>
		    </div>
		    <div class="timeline-title">
		      {{ lesson.title }}
		    </div>
	      <div class="timeline-content">
	      	<p class="small">Last read: August 29, 2017 07:30pm</p>
		      <button class="primary small">
						Begin Reading
					</button>
	      </div>
		  </div>
		</div>
  </q-collapsible>

	<button v-back-to-top.animate="{offset: 500, duration: 200}"
	  class="primary circular fixed-bottom-right animate-pop"
	  style="margin: 0 15px 15px 0">
	  <i>keyboard_arrow_up</i>
	</button>
</div>
</template>

<script>
export default {
	props: {
		module: {
			type: Object,
			required: true
		}
	},
	mounted () {

	},
	watch: {
		'$route' (to, from) {
			console.log(to,from)
		}
	},
	computed: {
		header () {
			let module = this.module;
			return `Module ${module.key} : ${module.title}`
		}
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
	}
	.timeline-content {
		
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