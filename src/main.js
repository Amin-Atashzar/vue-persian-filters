import Vue from 'vue'
import App from './App.vue'
import toPersianNumber from './filters/toPersianNumber'
import toPersianDate from './filters/toPersianDate'
import toRelativeDate from './filters/toRelativeDate'
import toPersianCurrency from './filters/toPersianCurrency'

Vue.config.productionTip = false

let VuePlugin = {
  install: function () {
    Vue.filter('toPersianNumber', toPersianNumber)
    Vue.filter('toPersianDate', toPersianDate)
    Vue.filter('toRelativeDate', toRelativeDate)
    Vue.filter('toPersianCurrency', toPersianCurrency)
  }
}
Vue.use(VuePlugin)

export default VuePlugin

new Vue({
  render: h => h(App)
}).$mount('#app')
