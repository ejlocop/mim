import Vue from 'vue'
import VueRouter from 'vue-router'
import modules from './assets/modules.json'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

function filterModule (route) {
  const module = modules.filter((module) => {
    return module.key == route.params.id
  })[0]
  
  return {
    module
  }
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { 
      path: `/modules/:id([1-${modules.length}]+)`, 
      component: load('partials/ModuleNew'),
      props: filterModule
    },
    // { path: '/modules/2', component: load('pages/Module2') },
    // { path: '/modules/2', component: load('pages/Module3') },
    { path: '/modules', component: load('Modules') },
    { path: '/', component: load('Index') },
    { path: '*', component: load('Error404') }
  ]
})
