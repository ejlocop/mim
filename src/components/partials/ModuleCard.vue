<template>
	<div class="card module-wrapper">
		<div class="card-title">
			<router-link :to="moduleLink">
				{{ title }}
			</router-link>
		</div>
		<q-parallax :src="module.header_image" :height="150">
			<div slot="loading">Loading...</div>
		</q-parallax>
		<div class="card-content">
			<p>Current Lesson: {{ currentLesson }}</p>
			<p>Quiz Score: {{ score }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			module: {
				type: Object,
				required: true,
			}
		},
		computed: {
			title () {
				return `Module ${this.module.key}: ${this.module.title}`
			},

			currentLesson () {
				return this.module.lessons[0].title
			},

			score () {
				return `0 / 20`;
			},

			moduleLink () {
				return {
					path: `modules-${this.module.key}`,
					exact: true
				}
			}
		}
	}
</script>

<style>
.card {
	background: white;
}
.card-title {
	color: white;
	padding: 8px 16px;
}
.card-content {
	font-size: .9rem;
}
.card-content p {
	margin-bottom: 1px;
}
</style>