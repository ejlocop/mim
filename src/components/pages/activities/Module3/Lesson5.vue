<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Are you L-O-S-T after Reflection?
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>Materials:</strong>
				<ul>
					<li>Protractor and ruler</li>
					<li>Sheets of paper</li>
				</ul>

				<strong>Procedure:</strong>
				<ol>
					<li>
						<p>
							Using the protractor and the ruler, copy each of the diagrams (A – G) below on a separate sheet of paper. As much as possible, use the four principal rays to locate the image formed in a curved mirror.
						</p>
						<div class="card lesson-card">
							<img :src="'./statics/images/m3l5-5.jpg'" alt="">
							<img :src="'./statics/images/m3l5-6.jpg'" alt="">
							<img :src="'./statics/images/m3l5-7.jpg'" alt="">
							<img :src="'./statics/images/m3l5-8.jpg'" alt="">
							<img :src="'./statics/images/m3l5-9.jpg'" alt="">
							<div class="card-content">
								Concave Mirror
							</div>
						</div>
						<div class="card lesson-card">
							<img :src="'./statics/images/m3l5-10.jpg'" alt="">
							<img :src="'./statics/images/m3l5-11.jpg'" alt="">
							<div class="card-content">
								Convex Mirror
							</div>
						</div>
					</li>
					<li>
						<p>
							Use a table similar to the table below to summarize the characteristics and location of the images formed.
						</p>
						<div class="card lesson-card">
							<img :src="'./statics/images/m3l5-12.jpg'" alt="">
						</div>
					</li>
				</ol>

				<strong>Guide Questions:</strong>
				<ol>
					<li>
						Refer to Table 6. How does the location of the object affect the characteristics and location of the image formed in a concave mirror? Convex mirror?
					</li>
					<li>
						What type of mirror do dentists usually use to clearly see the images of our teeth? Why?
					</li>
					<li>
						What kind of curved mirror do you see in most of the department stores? Why do they use such kind of mirror?
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