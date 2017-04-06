/**
 * create by Jocs
 */
export default {
	methods: {
		jump(name, id) {
			this.$router && (id !== undefined ? this.$router.push({name, params: {id}}) : this.$router.push(name))
		}
	}
}
