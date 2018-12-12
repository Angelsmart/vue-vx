<template>
  <div class="vuexbox">
  	  <button class="btn" @click="increase">+</button>
  	  <span>{{count}}</span>
  	  <button class="btn" @click="minus">-</button>
  	  <p>{{conutType}}</p>
  </div>
</template>

<script>
	
import {mapState,mapMutations,mapGetters} from 'vuex'
	export default {
	  name: 'Demo',
	  data () {
	    return {
	    }
	  },
	  components:{
	  	
	  },
	  computed:{
	  	//拿到初始值(两种方法)
	  	//...mapState({count: state => state.count}),
	  	count(){
	  		return this.$store.state.count
	  	},
	  	//拿到getters的值(两种方法)
	  	//...mapGetters(['conutType'])
	  	conutType(){
	  		return this.$store.getters.conutType
	  	}
	  },
	  methods:{
	  	//可以传多个方法名
	  	//...mapMutations(['increase','minus'])
	  	increase(){//加
	  		//这个参数是提交到mutations的方法名
	  		//this.$store.commit('addcount',{a:10,b:20})
	  		this.$store.commit({
	  			type:'addcount',
	  			a:10,
	  			b:20
	  		})
	  	},
	  	minus(){//减
	  		//这个参数是提交到mutations的方法名
	  		//this.$store.commit('removecount')
	  		//通过actions 要用dispatch
	  		this.$store.dispatch('removecount',9)
	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.vuexbox{
		text-align: center;
		button,span{
			display: inline-block;
			width: 100px;
			height: 50px;
			font-size: 18px;
		}
		button:active{
			background-color: #5599FF;
		}
	}
</style>
