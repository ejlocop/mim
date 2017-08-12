<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Refraction of Light in Lenses
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					Refraction is the bending of light when it travels from one medium to another of different optical densities. The ancient Greeks used the concept of light refraction in their living like using a lens to focus light rays. A lens is a transparent material made of glass or plastic that refracts light rays and focuses (or appear to focus) them at a point.
				</p>
				<strong>
					Types of Lenses
				</strong>

				<ol>
					<li>
						Convex Lens
						<ul>
							<li>
								It is thicker in the center than edges.
							</li>
							<li>
								It forms real images and virtual images depending on position of the object.
							</li>
							<li>
								It is also called Converging Lens because the light that passes through it tends to converge at a particular point called the focal point
							</li>
						</ul>
						<li>
							Concave Lens
							<ul>
								<li>
									It is thicker at the edges and thinner in the center.
								</li>
								<li>
									It forms upright and reduced images.
								</li>
								<li>
									It is also called Diverging Lens because the light that passes through it tends to diverge at a particular point called the focal point.
								</li>
							</ul>
						</li>
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