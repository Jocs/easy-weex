<template>
  <div append="tree">
	<bar-top
		:showFresh="true"
		:showReturn="false"
		:showEdit="false"
	></bar-top>
	<card></card>
	<bar-bottom></bar-bottom>
  </div>
</template>

<style>
</style>

<script>

	import BarTop from '../components/barTop.vue'
	import Card from '../components/card.vue'
	import BarBottom from '../components/barBottom.vue'

	export default {
	components: {
		BarTop, Card, BarBottom
	},
	methods:{
		hideAlert() {
			this.$store.commit('setAlertStatus', false)
		}
	}
  }
</script>
