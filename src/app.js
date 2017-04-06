/**
 * create by JOCS 2017-04-05
 */
// import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from './app.vue'
import store from './store'
import router from './router'
import mixin from './mixins'

sync(store, router)

Vue.mixin(mixin)

const app = new Vue(Vue.util.extend({el: '#root', store, router}, App))
console.log(app)

router.push('/home')
