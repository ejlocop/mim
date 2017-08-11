<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Discovery of Magnetism
			</q-toolbar-title>
		</div>

		<div class="layout-view">
			<div class="layout-padding">
				<p>Testing Your Understanding</p>
				<strong>Test your understanding by completing the blanks.</strong>
				<ol>
					<li>
						The black metallic ore that has the property of attracting pieces of iron are called ______________.
					</li>
					<li>
						The natural force of attracting pieces of iron is called ___________.
					</li>
					<li>
						The word magnet was believed to have been derived from the name of a shepherd named ______________.
					</li>
					<li>
						Lodestone was later called ____________ for its magnetic property.
					</li>
					<li>
						_________ was a Greek philosopher who first discovered the magnetic property of lodestone.
					</li>
				</ol>
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