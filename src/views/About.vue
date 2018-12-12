<template>
  <div class="about">
  	父组件：
    <div> 接收的子级的值：{{message}}</div>
    <loop :list="list" @send="change"></loop>
    <page1></page1>
    <page2></page2>
     <router-link to="/income">去income</router-link>
  </div>
</template>
<script>
		import loop from '../components/loop';
		import page1 from '../components/page1';
		import page2 from '../components/page2';
		export default {
				name: 'About',
				data(){
						return {
							list:[1,2,3,4,5],
							message:""
						}
				},
				methods:{
					change(msg){
							this.message = msg
					}
				},
				components:{
					loop,
					page1,
					page2
				}
		}
</script>
<style lang="scss" scoped>
	
</style>
