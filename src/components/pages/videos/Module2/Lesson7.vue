<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Visible Spectrum
			</q-toolbar-title>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<div class="video-wrapper">
					<p class="text-center"><strong>Visible Spectrum</strong></p>
					<v-video :playing="isPlaying" 
						:src="'./statics/videos/m2l7.mp4'">
					</v-video>
					<a href="https://www.youtube.com/watch?v=PMtC34pzKGc&list=PL09E558656CA5DF76&index=5">
						<i>link</i> https://www.youtube.com/watch?v=PMtC34pzKGc&list=PL09E558656CA5DF76&index=5
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