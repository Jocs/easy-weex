<template>
	<div class="bar bar-nav bar-top">
		<text class="icon icon-refresh pull-left" v-if="showFresh" @click="refresh"
			:style="{fontFamily: 'iconfont'}"
		>&#xe602;</text>
		<text class="icon icon-left-nav pull-left" v-if="showReturn" @click="back"
			:style="{fontFamily: 'iconfont'}"
		>&#xe608;</text>
		<text class="icon icon-compose pull-right" v-if="showEdit" @click="setAlertStatus(true)"
			:style="{fontFamily: 'iconfont'}"
		>&#xe600;</text>
		<text class="title">简单的Weex Demo</text>
	</div>
</template>

<script>
	import { mapActions, mapMutations } from 'vuex'
	const modal = weex.requireModule('modal')

	export default {
		props: {
			showFresh: {
				default: true
			},
			showReturn: {
				default: false
			},
			showEdit: {
				default: true
			}
		},
		methods: {
			refresh() {
				modal.toast({
					message: 'refresh',
					duration: 2
				})
				this.$store.dispatch('getData', {refresh: true})
			},
			back() {
				this.$router.back()
			},
			...mapMutations(['setAlertStatus'])
		}
	}
</script>

<style>
	.icon {
		color: #FFFFFF;
		position: absolute;
		top: 20px;
		font-size: 34px;
	}

	.title {
		color: #FFFFFF;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20px;

	}
	.pull-right {
		right: 20px;
	}
	.pull-left {
		left: 20px;
	}
	.bar-top {
		background-color: #1ABC9C;
		height: 80px;
	}
	.bar-top h1, .bar-top a {
		color: #FFFFFF;
	}
</style>