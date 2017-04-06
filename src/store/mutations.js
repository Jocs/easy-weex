/**
 * create by jocs
 */

export const updateList = (state, payload) => { console.log(payload); state.lists = payload }

export const addList = (state, payload) => { state.lists = [...state.lists, ...payload] }

export const setLoadingStatus = (state, payload) => { state.isLoading = payload }

export const setAlertStatus = (state, payload) => { state.alertStatus = payload }
