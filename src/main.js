import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import OnScroll from './directives/OnScroll'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.directive('onscroll', OnScroll);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
