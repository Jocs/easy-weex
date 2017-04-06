<template>
	<div class="footer">
		<div class="home-wrapper" @click="jump('home')">
			<text class="icon-nav font-home" :style="{fontFamily: 'iconfont'}" :class="{active: activePath === '/home'}">&#xe605;</text>
			<text class="text" :class="{active: activePath === '/home'}">主页</text>
		</div>
		<div class="lists-wrapper" @click="jump('lists')">
			<text class="icon-nav font-list" :style="{fontFamily: 'iconfont'}" :class="{active: activePath === '/lists'}">&#xe606;</text>
			<text class="text" :class="{active: activePath === '/lists'}">列表</text>
		</div>
		<div class="set-wrapper" @click="jump('about')" >
			<text class="icon-nav font-personal" :style="{fontFamily: 'iconfont'}" :class="{active: activePath === '/about'}">&#xe607;</text>
			<text class="text" :class="{active: activePath === '/about'}">个人</text>
		</div>
	</div>
</template>

<style>
	.footer {
		flex-direction: row;
		background-color: #1ABC9C;
		height: 100px;
		justify-content: space-between;
		padding-left: 50px;
		padding-right: 50px;
	}
	.text {
		color: #eee;
		font-size: 25px;
	}
	.icon-nav {
		font-size: 36px;
		margin-top: 20px;
		text-align: center;
		color: #eee;
	}
	.active {
		color: orange;
	}
</style>

<script>
	export default {
		data() {
			return {
				activePath: ''
			}
		},
		created() {
			console.log(this.$route)
			this.activePath = this.$route.path
		}
	}
</script>