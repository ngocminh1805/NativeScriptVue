import VueDevtools from 'nativescript-vue-devtools'
import Vue from 'nativescript-vue'
import App from './components/App.vue'


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

Vue.use(VueDevtools, { host: '192.168.1.42' })

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
