<template>
	<div class="timeline-item">
		<div class="timeline-badge">
			<strong>{{ lesson.index }}</strong>
		</div>
		<div class="timeline-title">
			{{ lesson.title }}
		</div>
		<div class="timeline-content">
			<button class="shadow-1 small begin" 
				@click="read">
				<i>library_books</i> Begin Reading
			</button>
			<button v-if="lesson.has_video" 
				class="shadow-1 small" 
				@click="watch">
				<i>play_circle_outline</i> Watch Video Lesson
			</button>
			<button v-if="lesson.has_activity" 
				class="shadow-1 small" 
				@click="activity">
				<i>mode_edit</i> Begin Activity
			</button>
			<button  v-if="lesson.has_assignment" 
				class="shadow-1 small" 
				@click="assignment">
				<i>school</i> Check Assignment
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		lesson: {
			type: Object
		}
	},
	data () {
		return {}
	},
	methods: {
		read () {
			this.$emit('read', this.lesson)
		},
		watch () {
			this.$emit('watch', this.lesson)
		},
		activity () {
			this.$emit('activity', this.lesson)
		},
		assignment () {
			this.$emit('assignment', this.lesson)
		}
	}
}
</script>

<style>
	.begin a {
		color: white;
	}
</style>