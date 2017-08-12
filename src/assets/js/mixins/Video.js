import Video from '../../../components/helpers/MimVideo'
export default {
	components: {
		'v-video': Video
	},
	data () {
		return {
			isPlaying: false
		}
	},
	methods: {
		close () {
			this.isPlaying = false
			this.$emit('closed')
		}
	}
}