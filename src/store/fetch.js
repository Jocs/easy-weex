/**
 * create by Jocs
 */

const stream = weex.requireModule('stream')

export const fetchList = () => {
	return new Promise((resolve, reject) => {
		stream.fetch({
			method: 'GET',
			url: '/api/lists',
			type: 'json'
		}, res => {
			if (res.status === 200) {
				resolve(JSON.parse(res.data))
			} else reject(res)
		}, () => {})
	})
}
