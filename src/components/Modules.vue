<template>
  <!-- root node required -->
  <div class="layout-view layout-padding modules-container">
    <module v-for="module in modules" 
      :module="module"
      :key="module.key">    
    </module>
    <div class="card module-wrapper">
      <div class="card-title text-black">
        Reference and Links
      </div>
      <div class="card-content">
        <p>1. Grade 10 Science Module</p>
        <p>2. DepEd LRMDS </p>
          <p>
            • 
            <a href="http://lrmds.deped.gov.ph/pdf-view/6704">
              EASE Module 8: Electromagnetism
            </a>
          </p>
      </div>
    </div>
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
