<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Magnets and Magnetic Fields
			</q-toolbar-title>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<div class="video-wrapper">
					<p class="text-center"><strong></strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m1l3.mp4'">
					</v-video>
					<a href="https://www.youtube.com/watch?v=5C-RM4fh5Xg">
						<i>link</i> https://www.youtube.com/watch?v=5C-RM4fh5Xg
					</a>
				</div>
				<hr>
				<div class="video-wrapper">
					<p class="text-center"><strong></strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m1l3-2.mp4'">
					</v-video>
					<a href="https://www.youtube.com/watch?v=4I1WqXHkVgs">
						<i>link</i> https://www.youtube.com/watch?v=4I1WqXHkVgs
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