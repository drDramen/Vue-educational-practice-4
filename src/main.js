import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BCardGroup, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('b-card-group', BCardGroup)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
