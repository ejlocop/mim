<template>
	<q-layout>
		<div slot="header" class="toolbar">
			<button @click="close">
				<i>keyboard_arrow_left</i>
			</button>
			<q-toolbar-title :padding="1">
				Laws of Reflection
			</q-toolbar-title>
		</div>
		
		<div class="layout-view">
			<div class="layout-padding">
				<ol>
					<li>
						Angle of incidence <strong class="text-italic">(Өi)</strong> is equal to the angle of reflection <strong class="text-italic">(Өr)</strong>. In symbols: <strong class="text-italic">Өi = Өr</strong>
					</li>
					<li>
						The normal line, incident ray, and the reflected ray lie on the same plane.
					</li>
				</ol>
				<p>
					 Reflection of light is employed significantly in making optical instruments like periscopes. Periscopes allow sea navigators in a submarine to see the surface of the water.
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