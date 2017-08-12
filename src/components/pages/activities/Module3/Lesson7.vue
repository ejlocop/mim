<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Are you L-O-S-T after Refraction?
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>Materials:</strong>
				<ul>
					<li>paper</li>
					<li>ruler</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						Copy each of the diagrams (A–H) below on a clear sheet of paper. Construct ray diagram using, as much as possible, the ‘three most useful rays’ for each of the following cases to determine the location, orientation, size, and type of the image.

						<div class="card lesson-card">
							<img src="/statics/images/m3l7-5.jpg" alt="">
						</div>
						<div class="card lesson-card">
							<img src="/statics/images/m3l7-6.jpg" alt="">
						</div>
						<div class="card lesson-card">
							<img src="/statics/images/m3l7-7.jpg" alt="">
						</div>
						<div class="card lesson-card">
							<img src="/statics/images/m3l7-8.jpg" alt="">
						</div>
						<div class="card lesson-card">
							<img src="/statics/images/m3l7-9.jpg" alt="">
						</div>
					</li>
					<li>
						Use a table similar the table below to summarize the characteristics and location of the images formed.

						<div class="card lesson-card">
							<img src="/statics/images/m3l7-10.jpg" alt="">
						</div>
					</li>
				</ol>

				<strong>Guide Questions:</strong>
				<ol>
					<li>
						Refer to the table. How does the image change in its size and location, as the object comes nearer the convex lens? Concave lens?
					</li>
					<li>
						Why is it impossible for a concave lens to form a real image?
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