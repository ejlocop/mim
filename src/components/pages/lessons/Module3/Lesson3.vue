<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Mirror Left-Right Reversal and Multiple Images
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<strong>
					Mirror Left-Right Reversal
				</strong>
				<div class="card lesson-card">
					<img src="/statics/images/m3l3.jpg" alt="">
					<div class="card-content text-right">
						The figure shows a girl combing her hair with her left hand. However, in her image, you will notice that she is combing her hair with her right hand. This effect is known as the mirror left-right reversal. The left side of the object appears as the right side of the image and the right side appears as the left. This also explains why the word “AMBULANCE” in an ambulance car is flipped.
					</div>
				</div>

				<strong>
					Multiple Images
				</strong>
				<div class="card lesson-card">
					<div class="card-content">
						Multiple images are formed by the reflection that happens when arranging at least two mirrors. The figure shows three images of a toy car in front of two mirrors at 90o. The number of images, N, can be determined using the formula N = (360/angle between the mirror) -1. Parallel mirrors on the other hand produce infinite number of images.
					</div>
					<img src="/statics/images/m3l3-2.jpg" alt="">
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