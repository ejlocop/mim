<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Mirror Left-Right Reversal
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>Materials:</strong>
				<ul>
					<li>alphabet chart</li>
					<li>1 plane mirror</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Place the alphabet chart in front of the plane mirror. Identify all capital letters in the alphabet that can be read properly in front of the mirror.
					</li>
					<li>
						Write at least 3 words (all in capital letters) that can be read properly both with a mirror and without a mirror in front of it.
					</li>
				</ol>

				<strong>Guide Questions:</strong>
				<ol>
					<li>
						What are the letters of the alphabet (in capital) that can be read properly in front of a mirror?
					</li>
					<li>
						Think of words (in capital letters) that can be read properly both with a mirror and without a mirror. What are these words?
					</li>
					<li>
						Write the sentence below on a clear sheet of paper in such a way that it can be read properly in front of a mirror: Honesty is the best policy.
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