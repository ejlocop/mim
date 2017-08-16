<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Types of Reflection and Reflection on Spherical Mirrors
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					Reflection not only happens on a smooth surface like plane mirrors, but also happens on rough surfaces. 
				</p>
				<strong>
					Types of Reflection:
				</strong>
				<div class="card lesson-card">
					<img :src="'./statics/images/m3l4.jpg'" alt="">
					<div class="card-content">
						Specular/ Regular Reflection. This is a reflection of light on smooth surfaces such as mirrors or a calm body of water. An example of this is the image of the Mayon volcano on a calm water shown in figure below.
					</div>
				</div>
				<div class="card lesson-card">
					<img :src="'./statics/images/m3l4-2.jpg'" alt="">
					<div class="card-content">
						Diffused/Irregular Reflection. This is a reflection of light on rough surfaces such as clothing, paper, wavy water, and the asphalt roadway. An example of this is the image of a mountain on a wavy body of water as shown in figure below.
					</div>
				</div>

				<strong>Reflection on Spherical Mirrors</strong>
				<p>
					Look at your reflection on a shiny metal spoon. Is your reflection the same on the two surfaces of the spoon? How will you compare your reflection on the two surfaces of the spoon? This is a reflection on curved mirrors. A curved mirror is a reflecting surface in which its surface is a section of sphere. There are two kinds of curved mirrors, the concave and the convex mirrors. A spoon is a kind of a curved mirror with both concave and convex surfaces
				</p>
				<strong>Two Kinds of Spherical Mirrors:</strong>
				<ol>
					<li>

						<div class="card lesson-card">
							<img :src="'./statics/images/m3l4-3.jpg'" alt="">
							<div class="card-content">
								<strong>The Concave Mirror</strong>
								<ul>
									<li>
										It is a curved mirror in which the reflective surface bulges away from the light source.
									</li>
									<li>
										It is called Converging Mirror because the parallel incident rays converge or meet/intersect at a focal point after reflection. 
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div class="card lesson-card">
							<img :src="'./statics/images/m3l4-4.jpg'" alt="">
							<div class="card-content">
								<strong>The Convex Mirror</strong>
								<ul>
									<li>
										It is a curved mirror in which the reflective surface bulges towards the light source.
									</li>
									<li>
										It is called Diverging Mirror because the parallel incident rays diverge after reflection. When extending the reflected rays behind the mirror, the rays converge at the focus behind the mirror.
									</li>
								</ul>
							</div>
						</div>
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