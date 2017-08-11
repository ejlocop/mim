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
				<strong>Materials:</strong>
				<ul>
					<li>Ziploc snack bag</li>
					<li>newspaper</li>
					<li>sunscreen/sunblock</li>
					<li>black construction paper</li>
					<li>permanent marker</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Cut a piece of newspaper to fit snugly inside a Ziploc snack bag.
					</li>
					<li>
						Outside the snack bag, draw two lines with a marker dividing the bag into three equal parts from the top of the bag to the bottom.
					</li>
					<li>
						Apply a thin coat of sunscreen in the leftmost part.
					</li>
					<li>
						Cover the middle part with black construction paper.
					</li>
					<li>
						The right part should be left fully exposed.
					</li>
					<li>
						Place the snack bags in a place fully exposed to sunlight.
					</li>
					<li>
						Recover the snack bags in the afternoon.
					</li>
				</ol>

				<strong>Guide Questions:</strong>
				<ol>
					<li>
						 How does the newsprint vary in the three divisions of the newspaper?
					</li>
					<li>
						What does this indicate?
					</li>
					<li>How does this realization impact to your personal life?</li>
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