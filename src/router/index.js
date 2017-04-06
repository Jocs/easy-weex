/**
 * create by Jocs
 */

import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import Detail from '../views/detail.vue'
import Lists from '../views/lists.vue'
import About from '../views/about.vue'

Vue.use(VueRouter)

const routes = [{
	path: '/home', component: Home, name: 'home'
}, {
	path: '/lists', component: Lists, name: 'lists'
}, {
	path: '/about', component: About, name: 'about'
}, {
	path: '/detail/:id', component: Detail, name: 'detail'
}]

export default new VueRouter({routes})
