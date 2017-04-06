/**
 * create by Jocs
 */
import Vuex from 'vuex'

import * as actions from './actions'
import * as mutations from './mutations'

if (WXEnvironment.platform !== 'Web') {
	Vue.use(Vuex)
}

const state = {
	lists: [],
	isLoading: false,
	alertStatus: false
}

const getters = {}

export default new Vuex.Store({state, getters, actions, mutations})

