<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Screen the UV Out
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					<strong>Extension Activity:</strong> For a more noticeable result, continue exposing the material for several days.
				</p>
				<p>
					Perform the same activity during a cloudy day or inside the house. Observe and compare the degree of effect to that during a bright sunny day.
				</p>
			</div>
		</div>
	</q-layout>
</template>
<script>
import page from '../../../../assets/js/mixins/Page.js'
export default {
	mixins: [page]
}
</script>
<style lang="scss"></style>