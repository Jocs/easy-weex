/**
 * create by Jocs
 */

import { fetchList } from './fetch'

export const getData = ({ commit }, {refresh}) => {
	commit('setLoadingStatus', true)
	fetchList()
	.then(res => {
		if (refresh) commit('updateList', res)
		else commit('addList', res)
	})
	.catch(() => {
		commit('setLoadingStatus', false)
	})
}
