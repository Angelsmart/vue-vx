<template>
	<div id="income">
		income
		<router-link to="/adminIncome">去adminIncome</router-link>
		<p>
			本地数据：
			<span v-for="(item,index) in list" :key="index">{{item}}</span>
		</p>
		
	</div>
</template>

<script>
	export default {
		name:"income",
		data(){
			return {
				list:[1,2,3,4,5]
				}
		},
		beforeDestroy(){
				this.$bus.$emit("income",this.list)
		},
		methods:{
		}
	}
</script>

<style>
	#income{
		width: 100%;
		height: 100px;
		background: #402B2E;
		color: #EEEEEE;
		margin-top: 10px;
	}
</style>