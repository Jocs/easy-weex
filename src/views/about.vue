<template>
  <div append="tree" class="personal-page">
	<bar-top
		:showFresh="false"
		:showReturn="false"
		:showEdit="false"
	></bar-top>
	<list class="info">
		<cell v-for="(item, index) in [1, 2, 3]" class="info-row" @click="jump('detail', index)">
			<text class="icon-item" :style="{fontFamily: 'iconfont'}">&#xe604;</text>
			<text class="item-text">item {{index + 1}}</text>
			<text class="arrow-right" :style="{fontFamily: 'iconfont'}">&#xe601;</text>
		</cell>
	</list>
	<bar-bottom></bar-bottom>
  </div>
</template>

<style>
	.personal-page {
		justify-content: space-between;
	}
	.info {
		flex: 1;
	}
	.info-row {
		flex-direction: row;
		height: 100px;
		border-bottom-width: 2px;
		border-bottom-style: solid;
		border-bottom-color: #bbb;
		padding-left: 30px;
		padding-right: 30px;
		justify-content: space-between;
		padding-top: 30px;
	}
	.item-text {
		align-self: top;
		flex: 1;
		color: #999;
		margin-top: -2px;
		margin-left: 30px;
	}
</style>

<script>

	import BarTop from '../components/barTop.vue'
	import BarBottom from '../components/barBottom.vue'

	export default {
	components: {
		BarTop, BarBottom
	},
  }
</script>
