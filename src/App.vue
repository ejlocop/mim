<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
  	<q-layout>
	  	<div slot="header" class="toolbar">
	  		<button class="hide-on-drawer-visible" @click="drawerOpen">
	  			<i>menu</i>
	  		</button>
	  		<q-toolbar-title :padding="1">
	  			MIM
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

<style></style>
