<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Magnets and Magnetic Fields
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>Study the following figures:</p>
				<div class="card lesson-card">
					<img :src="'./statics/images/m1l3-8.jpg'" alt="">
					<div class="card-content">
						Trace the path of the iron filings in each figure. Explain your observations.
					</div>
				</div>
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