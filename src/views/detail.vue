<template>
  <div append="tree" class="detail-page">
	<bar-top
		:showFresh="false"
		:showReturn="true"
		:showEdit="false"
	></bar-top>
	<div class="detail">
		<text class="detail-text">Params.id: {{id}}</text>
	</div>
  </div>
</template>

<style>
	.detail {
		flex: 1;
		justify-content: center;
		align-items: center;
	}
</style>

<script>

	import BarTop from '../components/barTop.vue'

	export default {
		data() {
			return {id: 'loading'}
		},
		created() {
			this.setId()
		},
		watch: {
			'$route' : 'setId'
		},
		components: {
			BarTop
		},
		methods: {
			setId() {
				this.id = this.$route.params.id
			}
		}
  }
</script>
