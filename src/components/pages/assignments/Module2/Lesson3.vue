<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Simple Spectroscope
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					Use your spectroscope to analyze the colors of light given off by different sources. Reproduce the spectra you observe with crayons or colored markers. Identify the light sources. (When using the Sun as a light source, do not look at it directly with your spectroscope. You can harm your eye. Instead, look at sunlight reflected from a white cloud or a sheet of white paper)
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