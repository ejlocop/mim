<template>
  <!-- root node required -->
  <div class="layout-view layout-padding modules-container">
    <module v-for="module in modules" 
      :module="module"
      :key="module.key">    
    </module>
  </div>
</template>

<script>
import modules from '../assets/modules.json';
import Module from './partials/ModuleCard'
export default {
  components: {
    'module': Module,
  },
  data () {
    return {
      modules
    }
  },
  mounted () {
  },
}
</script>

<style>
</style>
