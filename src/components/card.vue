<template>
	<list @loadmore="fetchData" loadmoreoffset="50">
		<cell class="row" v-for="(result, index) in results" :key="index" @click="jump('detail', index)">
			<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492088137&di=d93d2851ebc29c6d2bfe3c0cc439e0ca&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-10-01%2F010657850.jpg" class="image"></image>
			<div class="text">
				<text class="media-body">Item{{index}}</text>
				<text class="text-body">{{result.content}}</text>	
			</div>
			<text class="font arrow-right"
				:style="{fontFamily: 'iconfont'}"
			>&#xe601;</text>
		</cell>	
	</list>
</template>

<style scoped>
	.row {
		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-bottom-color: #bbbbbb;
		flex-direction: row;
	}
	.font {
		align-self: center;
		margin-left: 20px;
	}
	.text {
		padding: 20px;
		width: 550px;
	}
	.media-body {
		margin-bottom: 5px;
		font-size: 35px;
		line-height: 40px;
		color: #999;
	}
	.text-body {
		color: #666;
		font-size: 28px;
	}
	.image {
		width: 80px;
		height: 80px;
		margin: 20px;
	}
</style>

<script>
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState({
				results: 'lists',
				isLoading: state => state.isLoading
			})
		},
		mounted() {
			this.$nextTick(() => this.fetchData())
		},
		methods: {
			fetchData() {
				console.log('dd')
				this.$store.dispatch('getData', {
					refresh: false
				})
			}
		}
	}
</script>