import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins/ionic.js'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
