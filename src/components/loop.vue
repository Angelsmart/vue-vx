<template>
	<div id="loop">
		子组件：
		<p>接收的父级组件的值：<span v-for="(item,index) in list" :key="index">{{item}}</span></p>
		<p>发送的父组件值：{{msg}}</p>
	</div>
</template>

<script>
	export default {
		name:"loop",
		props:['list'],
		data(){
			return {
				msg:"明明"
			}
		},
		mounted(){
			this.$emit("send",this.msg)		
		},
	}
</script>

<style>
</style>