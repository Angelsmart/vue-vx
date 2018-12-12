<template>
	<div id="page2">
		page2
		<p>{{userList.id}}---{{userList.name}}</p>
	</div>
</template>

<script>
	export default {
		name:"page2",
		data(){
			return {
				userList:{}
			}
		},
		mounted(){
			this.change()
		},
		methods:{
			change(){
				let that = this
				this.$bus.$on('sendpage',function(userList){
					that.userList = userList
				})
			}
		}
	}
</script>

<style>
	#page2{
		width: 100%;
		height: 100px;
		background: #61A214;
		color: #EEEEEE;
		margin-top: 10px;
	}
</style>