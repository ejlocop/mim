<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Laws of Reflection
			</q-toolbar-title>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<div class="video-wrapper">
					<p class="text-center"><strong>Laws of Reflection</strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m3l2.mp4'">
					</v-video>
					<a href="https://www.youtube.com/watch?v=vt-SG7Pn8UU">
						<i>link</i> https://www.youtube.com/watch?v=vt-SG7Pn8UU
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