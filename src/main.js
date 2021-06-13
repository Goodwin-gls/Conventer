import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Loader from '@/components/Loader'

Vue.config.productionTip = false

Vue.component('Loader', Loader)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
