<template>
	<div>
		<router-view style="flex:1"></router-view>		
	</div>
</template>

<script>
	export default {
		created() {
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
				'fontFamily': 'iconfont',
				'src': 'url(\'http://at.alicdn.com/t/font_1491465994_9105067.ttf\')'
			})
		}
	}
	// <!-- <text class="icon" :style="{fontFamily: 'iconfont', color: 'red'}">&#xe603;</text> -->
</script>

<style scoped>
</style>