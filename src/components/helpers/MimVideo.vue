<template>
	<div class="video">
		<div class="controls" v-show="!isPlaying">
			<i id="control"
				@click="isPlaying = !isPlaying" 
				ref="control">
				{{ control }}
			</i>
		</div>
		<video ref="video" @click="isPlaying = false">
			<source type="video/mp4" :src="src">
		</video>
	</div>
</template>
<script>
export default {
	props: {
		src: [String,Object],
		playing: Boolean
	},
	data () {
		return {
			isPlaying: this.playing
		}
	},
	watch: {
		isPlaying (val) {
			let video = this.$refs.video;
			if (val) {
				this.$refs.video.play()
			}
			else {
				this.$refs.video.pause()
			}
		}
	},
	computed: {
		control () {
			return !this.isPlaying ? 'play_circle_outline' : 'pause_circle_outline'
		}
	}
}
</script>
<style lang="scss">
.video {
	video {
		position: relative;
		display: block;
		width: 100%;
		min-height: 100px;
	}
	.controls {
		width: 100%;
		height: 100%;
		z-index: 9;
		background: rgba(255,255,255,.2);
		position: absolute;
		display: table;
		text-align: center;

		#control {
			cursor: pointer;
			font-size: 3em;
			color: white;
			display: table-cell;
		}
	}
}	
</style>