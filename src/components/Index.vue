<template>
  <q-layout>
    <!-- Header -->
    <div slot="header" class="toolbar">
      <button class="hide-on-drawer-visible" @click="drawerOpen">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1">
        MIM
      </q-toolbar-title>
    </div>
    <!-- Left-side Drawer -->
    <menu-drawer ref="drawer"></menu-drawer>

    <!-- IF USING subRoutes only: -->
    <!-- <router-view class="layout-view">
      wew
    </router-view> -->
    <!-- OR ELSE, IF NOT USING subRoutes: -->
    <div class="layout-view">
      <module v-for="module in modules" 
        key="module.key"
        :module="module">    
      </module>
    </div>
    <!-- Footer -->
    <!-- <button v-back-to-top.animate="{offset: 1000, duration: 200}"
      class="primary circular fixed-bottom-right animate-pop"
      style="margin: 0 20px 20px 0">
      <i>keyboard_arrow_up</i>
    </button> -->
  </q-layout>
</template>

<script>
import MenuDrawer from './partials/Menu'
import DrawerMixin from '../assets/js/mixins/Drawer'
import ModuleComponent from './Module'

import modules from '../assets/modules.json'

export default {
  mixins: [DrawerMixin],
  components: {
    'menu-drawer': MenuDrawer,
    'module': ModuleComponent
  },
  data () {
    return {
      modules,
    }
  },
  mounted () {
    console.log(this.modules)
  },
  methods: {

  },
}
</script>

<style>
.layout-view {
  padding: 10px;
}
</style>

