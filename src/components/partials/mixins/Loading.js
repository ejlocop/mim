import { Loading } from 'quasar'
export default {
	methods: {
		showLoading (message) {
			Loading.show({
			  message,
			  messageColor: '#fff',
			  spinnerColor: '#027be3',
			  spinner: 'circles',
			  spinnerSize: 200, // in pixels
			})
		},
		hideLoading () {
			Loading.hide()
		}
	}
}