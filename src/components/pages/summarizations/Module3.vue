<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Let's Summarize!
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<ol>
					<li>
						Reflection is the bouncing of light when it hits a surface.
					</li>
					<li>
						Two Laws of Reflection:
						<ul>
							<li>
								The normal line, incident ray, and the reflected ray lie on the same plane.
							</li>
							<li>
								The angle of incidence is equal to the angle of reflection.
							</li>
						</ul>
					</li>
					<li>
						The reversal effect is the inversion of the image from left to right.
					</li>
					<li>
						Mirrors at an angle produce multiple images.
					</li>
					<li>
						Two Types of Reflection:
						<ul>
							<li>
								Specular/ Regular Reflection – reflection of light on smooth surfaces such as mirrors or a calm body of water.
							</li>
							<li>
								Diffuse/ Irregular Reflection – reflection of light on rough surfaces such as clothing, paper, and the asphalt roadway.
							</li>
						</ul>
					</li>
					<li>
						A curved mirror is a reflecting surface in which its surface is a section of a sphere.
					</li>
					<li>
						Two Kinds of Spherical Mirrors:
						<ul>
							<li>
								The Concave Mirror or Converging Mirror
							</li>
							<li>
								The Convex Mirror or Diverging Mirror
							</li>
						</ul>
					</li>
					<li>
						Important Points in Ray Diagramming:
						<ul>
							<li>
								Center of Curvature, C – the center of the sphere in which the mirror is part. Its distance from the mirror is known as the radius.
							</li>
							<li>
								Vertex, V – the center of the mirror.
							</li>
							<li>
								Focal Point/ Focus, F – the point between the center of curvature and vertex. Its distance from the mirror is known as the focal length, f.
							</li>
						</ul>
					</li>
					<li>
						The ‘Four Principal Rays’ in Curved Mirrors
						<ul>
							<li>
								The P – F Ray is ray of light parallel to the principal axis, is reflected passing through the principal focus, F (concave mirror), and as if passing through the principal focus, F(convex mirror).
							</li>
							<li>
								The F – P Ray is a ray of light passing through F (concave mirror) or directed towards F (convex mirror), is reflected parallel to the principal axis.
							</li>
							<li>
								The C – C Ray is ray of light passing through the center of curvature, C (concave mirror) or directed towards the center of curvature, C (convex mirror) reflects back along its own path.
							</li>
							<li>
								V Ray is a ray of light directed to the vertex reflects at equal angle from the principal axis
							</li>
						</ul>
					</li>
					<li>
						A lens is a transparent material made of glass or plastic that refracts and focuses (or that appears to focus) light rays at a point.
					</li>
					<li>
						Two Types of Lenses:
						<ul>
							<li>
								Convex Lens or Converging Lens
							</li>
							<li>
								Concave Lens or Diverging Lens
							</li>
						</ul>
					</li>
					<li>
						The ‘Three Most Useful Rays’ in Lenses:
						<ul>
							<li>
								The P – F Ray is ray of light parallel to the principal axis is refracted passing through the principal focus, F behind the lens (convex) or as if passing through the principal focus, F in front of the lens (concave).
							</li>
							<li>
								F – P Ray. A ray of light passing through F in front of the lens(convex) or directed towards F behind the lens(concave) is refracted parallel to the principal axis.
							</li>
							<li>
								V-Ray. A ray of light passing through the exact center of the lens (Vertex) continue to travel in the same direction.
							</li>
						</ul>
					</li>
				</ol>
			</div>
		</div>
	</q-layout>
</template>
<script>
import page from '../../../assets/js/mixins/Page.js'

export default {
	mixins: [page]
}
</script>
<style></style>