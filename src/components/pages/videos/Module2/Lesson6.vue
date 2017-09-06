<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Infrared
			</q-toolbar-title>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<div class="video-wrapper">
					<p class="text-center"><strong>Infrared</strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m2l6.mp4'">
					</v-video>
					<a href="https://www.youtube.com/watch?v=i8caGm9Fmh0&list=PL09E558656CA5DF76&index=4">
						<i>link</i> https://www.youtube.com/watch?v=i8caGm9Fmh0&list=PL09E558656CA5DF76&index=4
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