<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Check Your Understanding
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					I. Problem Solving
				</p>
				<p class="text-italic">
					(Assume that the waves propagate in a vacuum.)
				</p>
				<ol>
					<li>
						What is the frequency of radio waves with wavelength of 20 m?
					</li>
					<li>
						What is the frequency of light waves with wavelength of 5 X 10-7 m?
					</li>
				</ol>

				<p>
					II. Write True if the statements are true? If not, correct them.
				</p>
				<ol>
					<li>
						Electromagnetic waves transfer energy through vacuum.
					</li>
					<li>
						A wave is a disturbance that transfers energy.
					</li>
					<li>
						Most EM waves are invisible and undetectable.
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