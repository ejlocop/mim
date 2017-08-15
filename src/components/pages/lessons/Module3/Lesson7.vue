<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Images Formed by Lenses
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					In locating the image formed in lenses graphically, two important points are considered. The following important points are enumerated below.
				</p>
				<ul>
					<li>
						Vertex, V – The geometric center of the lens.
					</li>
					<li>
						Focal point/ Focus, F – A point where light rays converge (or appears to converge) when parallel light rays pass through a lens. Its distance from the vertex is called the focal length.
					</li>
				</ul>
				<div class="card lesson-card">
					<img :src="'./statics/images/m3l7.jpg'" alt="">
					<img :src="'./statics/images/m3l7.jpg'" alt="">
				</div>

				<strong>The ‘Three Most Useful Rays’ in Lenses</strong>
				<p>
					Images formed in a lens can be located and described through ray diagramming. The following three most useful rays for convex and concave lenses are presented below.
				</p>
				<div class="card lesson-card">
					<img :src="'./statics/images/m3l7-3.jpg'" alt="">
				</div>
				<div class="card lesson-card">
					<img :src="'./statics/images/m3l7-4.jpg'" alt="">
				</div>

				<p>
					To graphically determine the position and kind of the image formed, the ray diagram can be used. Consider the following steps using the three major rays described above:
				</p>
				<ol>
					<li>
						From the object, draw the first ray (P–F ray). From the same point on the object, draw the second (F–P ray), and third (V ray) rays.
					</li>
					<li>
						The intersection of the rays is the image point corresponding to the object point. For example, if you started diagramming from the tip of the arrow-shaped object, the intersection of the refracted rays is also the tip of the arrow-shaped image. Thus, you can determine completely the position and characteristics of the image.
					</li>
					<li>
						For a concave lens, light rays diverge from a virtual focus; but the procedure for locating images is the same as for convex lenses.
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