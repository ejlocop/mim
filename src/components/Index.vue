<template>
  <div class="layout-view text-center layout-padding"> 
    <h2>Science 101</h2>
    <h4>FORCES, MOTION and ENERGY</h4>
    <q-gallery-slider :src="gallery"
      :infinite="true"
      :autoplay="5000">
    </q-gallery-slider>
    <router-link
      to="/modules">
      <button class="primary start-button">Start</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gallery: [
        "../statics/1.jpg",
        "../statics/2.jpg",
        "../statics/3.jpg"
      ]
    }
  }
}
</script>

<style lang="scss">
.start-button {
  margin-top: 20px;
}
</style>

