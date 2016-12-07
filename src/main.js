// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vui from 'vue-ui'
console.log(Vui)
Vue.use(Vui)

// import Input from 'vui/input/Input'
// console.log(Input)
// Vue.component(Input.name, Input)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><App/> <vui-input/></div>',
  components: { App }
})
