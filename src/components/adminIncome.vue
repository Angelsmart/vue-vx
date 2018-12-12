<template>
	<div id="adminIncome">
		adminIncome
		<p>
			
			<span v-for="(item,index) in list" :key="index">{{item}}</span>
		</p>
	</div>
</template>

<script>
	export default {
		name:"adminIncome",
		data(){
			return {
				list:[]
			}
		},
		beforeMount(){
			let that = this
			this.$bus.$on('income',function(list){
					that.list = list
					//当数据发送完成后，立即释放当前接收数据的监听函数
					this.$bus.$off('income')
				})
		},
		methods:{
		}
	}
</script>

<style>
	#adminIncome{
		width: 100%;
		height: 100px;
		background: #402B2E;
		color: #EEEEEE;
		margin-top: 10px;
	}
</style>