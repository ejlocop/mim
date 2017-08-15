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
				<p>
					Have you ever used a compass to find a direction? If you have, you are doing something that was first done by the Chinese in the twelfth century. Historians believe that the Chinese were the first to build compasses to help them navigate. They made use of a property of certain materials that had been discovered centuries before – Magnetism
				</p>
				<p class="small">
					To know more about the discovery of magnetism, do this activity.
				</p>
				<p class="text-center">
					<strong>
						Read the history of magnetism and answer the questions after the selection:
					</strong>
				</p>
				<div class="card lesson-card">
					<img :src="'./statics/images/m1l1.jpg'">
					<div class="card-content">
						Pins, needles and nails areattracted to the lodestone
					</div>
				</div>
				<p>
					Magnetism, the natural force that causes magnets to function as they do, became known to people many centuries ago. They knew that the black metallic ore are called loadstone. It has the property of drawing particles of iron to it. The Greek philosopher named Thales, who lived during the sixth century B.C., is said to have been the first to observe this property. After his time, the lodestone was often mentioned in ancient writings. It was given the name “magnet” after Magnesia, a district in the Asia Minor where large magnetic deposits are found. Years later, they found out that the thing they called magnet does not only attract iron rings but also attract other rings suspended from one another forming a long chain. The Roman Lucretius, who lived in the first century B.B., tried to explain magnetism in terms of his atomic theory.
				</p>
				<p>
					There are many legendary accounts of the properties of magnet. The <span class="text-italic">Arabian Nights</span> contains the story of ship that approached an island made of magnetic rock. The ship fell completely to pieces because all the iron nails were pulled out of it through the attraction of the rock. Another tale was based on the story of a shepherd named Magnes. One day when he was tending his flock of sheep on the slopes of Mount Ida in Asia Minor, he noticed that the iron tip of his staff was being pulled toward the ground. He dug up the ground and found out that the large deposit of lodestone w	 as attracting his staff. Thereafter the lodestone was called magnet in honor of the shepherd who had discovered it, and later was called magnetite. Scholars have pointed out that this story originated long after the word “magnet” was commonly used.
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