<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Ray Diagram
			</q-toolbar-title>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<div class="video-wrapper">
					<p class="text-center"><strong>Ray Diagram Part 1</strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m3l7.mp4'">
					</v-video>
					<a href="https://www.youtube.com/watch?v=c6mLLaqLdvg">
						<i>link</i> https://www.youtube.com/watch?v=c6mLLaqLdvg
					</a>
				</div>
				<div class="video-wrapper">
					<p class="text-center"><strong>Ray Diagram Part 2</strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m3l7-2.mp4'">
					</v-video>
					<a href="https://www.youtube.com/watch?v=7iK1nIJs49Y">
						<i>link</i> https://www.youtube.com/watch?v=7iK1nIJs49Y
					</a>
				</div>
			</div>
		</div>
	</q-layout>
</template>
<script>
import mixin from '../../../../assets/js/mixins/Video.js'
export default {
	mixins: [mixin]
}
</script>
<style lang="scss"></style>