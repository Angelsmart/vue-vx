<template>
  <div class="hello">
    <!--<p>{{count}}</p>-->
    <p>{{username}}</p>
    <p>{{$store.state.user.username}}</p>
    <button @click="add" class="btn">修改用户名</button>
  </div>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
export default {
  name: 'HelloWorld',
  computed:{
  	 /*...mapState({
  	 	 username : state => state.user.username,
  	 	 count : state => state.count
  	 })*/
  	...mapState('user',{
  		 //如果在这写了user，底下直接写state.username即可
  	 	  username : state => state.username
  	 })
  },
  methods:{
  		add(){
  			//namespaced: true 如果有
  			this.$store.commit('user/minucount','明明')
  		}
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
