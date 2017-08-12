<template>
<div class="layout-view layout-padding">
	hehehe
	<keep-alive>
		<component :is="view"></component>
	</keep-alive>
</div>
</template>

<script>
export default {
	props: {
		module: {
			type: Object
		}
	},
	data () {
		return {
			view: null
		}
	},
	mounted () {
		console.log(this.module)
	}
}	
</script>

<style></style>