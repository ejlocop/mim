<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Ultraviolet Radiation, X-rays, Gamma Rays
			</q-toolbar-title>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<div class="video-wrapper">
					<p class="text-center"><strong>Part 1</strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m2l8.mp4'">
					</v-video>
					<a href="https://www.youtube.com/watch?v=QW5zeVy8aE0&index=6&list=PL09E558656CA5DF76">
						<i>link</i> https://www.youtube.com/watch?v=QW5zeVy8aE0&index=6&list=PL09E558656CA5DF76
					</a>
				</div>
				<div class="video-wrapper">
					<p class="text-center"><strong>Part 2</strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m2l8-2.mp4'">
					</v-video>
					<a href="https://www.youtube.com/watch?v=CCAYcuCWOnM&index=7&list=PL09E558656CA5DF76">
						<i>link</i> https://www.youtube.com/watch?v=CCAYcuCWOnM&index=7&list=PL09E558656CA5DF76
					</a>
				</div>
				<div class="video-wrapper">
					<p class="text-center"><strong>Part 3</strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m2l8-3.mp4'">
					</v-video>
					<a href="https://www.youtube.com/watch?v=TA5SLDiIUWs&list=PL09E558656CA5DF76&index=8">
						<i>link</i> https://www.youtube.com/watch?v=TA5SLDiIUWs&list=PL09E558656CA5DF76&index=8
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