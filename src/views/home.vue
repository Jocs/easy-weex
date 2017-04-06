<template>
  <div append="tree">
	<bar-top
		:showFresh="true"
		:showReturn="false"
		:showEdit="true"
	></bar-top>
	<card></card>
	<div class="mask" v-if="showAlert">
		<div class="alert" v-if="showAlert">
			<text class="confirm">编辑点什么呢？</text>
			<text @click="hideAlert" class="btn">确定</text>
		</div>
	</div>
	<bar-bottom></bar-bottom>
  </div>
</template>

<style>
	.mask {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .5);
		justify-content: center;
		flex-direction: row;
		align-items: center;
	}
	.alert {
		width: 400px;
		height: 200px;
		border-radius: 10px;
		background-color: rgba(255, 255, 255, .9);
		position: relative;
	}
	.confirm {
		padding-top: 10px;
		padding-left: 20px;
	}
	.btn {
		width: 400px;
		height: 80px;
		position: absolute;
		bottom: 0;
		right: 0;
		text-align: center;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: rgb(91, 150, 143);
		line-height: 70px;
		color: #FFFFFF;
	}
</style>

<script>

	import BarTop from '../components/barTop.vue'
	import Card from '../components/card.vue'
	import BarBottom from '../components/barBottom.vue'
	import { mapState } from 'vuex'

	export default {
	components: {
		BarTop, Card, BarBottom
	},
	computed: {
		...mapState({
			showAlert: state => state.alertStatus
		})
	},
	methods:{
		hideAlert() {
			this.$store.commit('setAlertStatus', false)
		}
	}
  }
</script>
