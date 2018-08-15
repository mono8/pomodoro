// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {MdButton, MdToolbar, MdProgress, MdContent, MdList, MdField, MdCheckbox, MdLayout, MdDivider, MdSubheader} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdToolbar)
Vue.use(MdField)
Vue.use(MdProgress)
Vue.use(MdList)
Vue.use(MdCheckbox)
Vue.use(MdLayout)
Vue.use(MdSubheader)
Vue.use(MdDivider)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
