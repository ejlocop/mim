<template>
  <q-drawer ref="drawer">
    <div class="toolbar">
      <q-toolbar-title>
        Menu
      </q-toolbar-title>
    </div>
    <div class="list no-border platform-delimiter">
      <q-drawer-link :to="{path: '/', exact: true}">
        Home
      </q-drawer-link>
      <q-drawer-link :to="{path: '/modules', exact: true}">
        Modules
      </q-drawer-link>
      <hr>
      <q-drawer-link :to="{path: '/modules/1', exact: true}">
        Module 1
      </q-drawer-link>
      <q-drawer-link :to="{path: '/modules/2', exact: true}">
        Module 2
      </q-drawer-link>
      <q-drawer-link :to="{path: '/modules/3', exact: true}">
        Module 3
      </q-drawer-link>
    </div>
  </q-drawer>
</template>
<script>
export default {
  methods: {
    open () {
      this.$refs.drawer.open()
    }
  }
}
</script>
