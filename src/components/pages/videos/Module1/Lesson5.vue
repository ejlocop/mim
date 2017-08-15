<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Motors, Generators, and Transformers
			</q-toolbar-title>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<div class="video-wrapper">
					<p class="text-center"><strong></strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m1l5.mp4'">
					</v-video>
				</div>
				<div class="video-wrapper">
					<p class="text-center"><strong></strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m1l5-2.mp4'">
					</v-video>
				</div>
				<div class="video-wrapper">
					<p class="text-center"><strong></strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m1l5-3.mp4'">
					</v-video>
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