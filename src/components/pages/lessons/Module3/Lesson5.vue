<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Images Formed By Curved Mirrors
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					In locating the image formed in curved mirror graphically, three important points are considered. The following important points are enumerated below.
				</p>
				<ul>
					<li>
						Center of Curvature, <strong class="text-italic">C</strong> - the center of the sphere of which the mirror is part. Its distance from the mirror is known as the radius.
					</li>
					<li>
						Vertex, <strong class="text-italic">V</strong> - the center of the mirror.
					</li>
					<li>
						Focal Point/ Focus, <strong class="text-italic">F</strong> – the point between the center of the curvature and vertex. Its distance from the mirror is known as the focal length, <strong class="italic">f</strong>.
					</li>
				</ul>
				<div class="card lesson-card">
					<img src="/statics/images/m3l5.jpg" alt="">
					<img src="/statics/images/m3l5-2.jpg" alt="">
				</div>

				<strong>The ‘Four Principal Rays’ in Curved Mirrors</strong>
				<p>
					Images formed in a curved mirror can be located and described throughnray diagramming. The P– F ray, F – P ray, C – C ray, and the V ray are the ‘Four Principal Rays’ in curve mirrors. These rays, applied for concave and convex mirrors, are presented in the table below.
				</p>
				<div class="card lesson-card">
					<img src="/statics/images/m3l5-3.jpg" alt="">
				</div>
				<div class="card lesson-card">
					<img src="/statics/images/m3l5-4.jpg" alt="">
				</div>

				<p>
					In determining the position and nature of the image graphically, the ‘Four Principal Rays’ are used. Ray diagramming is used in the graphical method of locating the image. The following are ray diagramming steps using the ‘Four Principal Rays’ in determining the position and the nature of the image of an object formed by concave mirror and convex mirror.
				</p>
				<ol>
					<li>
						From the object, draw the first ray (P – F ray). From the same point on the object, draw the second (F – P ray), third (C – C ray), and fourth (V ray) rays.
					</li>
					<li>
						The intersection of the four rays is the image point corresponding to the object point. For example, if you started diagramming from the tip of the arrow-shaped object, the intersection of the reflected rays is also the tip of the arrow-shaped image. Thus, you can determine completely the position and characteristics of the image.
					</li>
					<li>
						For a convex mirror, light rays diverge after reflection and converge from a point that seems to be behind the mirror (virtual focus); but the procedure for locating images is the same as for concave mirror.
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