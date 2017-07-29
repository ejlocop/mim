<template>
  <q-layout>
    <!-- Header -->
    <div slot="header" class="toolbar">
      <button class="hide-on-drawer-visible" @click="drawerOpen">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="1">
        Module 1
      </q-toolbar-title>
    </div>
    <!-- Left-side Drawer -->
    <menu-drawer ref="drawer"></menu-drawer>

    <!-- IF USING subRoutes only: -->
    <router-view class="layout-view"></router-view>
    <!-- OR ELSE, IF NOT USING subRoutes: -->
    <div class="layout-view"></div>
    <!-- Footer -->
  </q-layout>
</template>

<script>
export default {
}
</script>

<style>
</style>
