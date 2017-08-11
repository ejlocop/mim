<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Reflection of Light in Mirrors
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<p>
					Reflection is the bouncing off of light rays when it hits a surface like a plane mirror. In the activity, you used plane mirrors and located the object distance, <strong class="text-italic">p</strong> and the image distance, <strong class="text-italic">q</strong> and found out that p is equal to q. In plane mirrors, the image appears as if it is behind the mirror but actually not, so the image is virtual. The value therefore of image distance, q is negative. The height of the image, <strong class="text-italic">h’</strong> in plane mirrors is always the same as the height of the object, thus its magnification, <strong class="text-italic">M</strong> is 1. The magnification formula is written below:
				</p>
				<div class="card lesson-card">
					<img src="/statics/images/m3l1.jpg" alt="">
				</div>
				<div class="card lesson-card">
					<img src="/statics/images/m3l1-2.jpg" alt="">
				</div>
				
				<strong>Incident Ray</strong>
				<blockquote>
					The ray of light approaching the mirror represented by an arrow approaching an optical element like mirrors.
				</blockquote>

				<strong>Reflected Ray</strong>
				<blockquote>
					The ray of light which leaves the mirror and is represented by an arrow pointing away from the mirror.
				</blockquote>

				<strong>Normal Ray</strong>
				<blockquote>
					An imaginary line that can be drawn perpendicular to the surface of the mirror at the point of incidence where the ray strikes the mirror
				</blockquote>

				<p>
					The angle between the incident ray and the normal line is known as the angle of incidence, <strong class="text-italic">Өi</strong>. The angle between the reflected ray and the normal is known as the angle of reflection, <strong class="text-italic">Өr</strong>. 
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