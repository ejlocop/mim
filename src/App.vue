<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
  	<q-layout>
	  	<div slot="header" class="toolbar">
	  		<button class="hide-on-drawer-visible" @click="drawerOpen">
	  			<i>menu</i>
	  		</button>
	  		<q-toolbar-title :padding="1">
	  			<span class="text-faded">Science 101</span>
	  		</q-toolbar-title>
	  	</div>
	  	<menu-drawer ref="drawer"></menu-drawer>

	    <router-view></router-view>
    </q-layout>
  </div>
</template>

<script>
import MenuDrawer from './components/partials/Menu'
export default {
	components: {
		'menu-drawer': MenuDrawer
	},
	methods: {
		drawerOpen () {
      this.$refs.drawer.open()
    }
	}
}
</script>

<style>
.layout-header {
	background: #FFF176;
}
.toolbar {
	background: #FFF176;
}
.layout-view {
  background: #FFF59D;
  color: #444;
}
</style>
