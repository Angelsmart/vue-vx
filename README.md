 ##### vuex使用
    把vuex当作一个局部组件
    state   相当于组建的data 通过
    $store.state.value  (value:你要取的值)
    acitions、mutations 相当于组件的methods
    acitions    是异步的    通过$store.dispatch
    mutations   是同步的    通过$store.commit触发


    <!-- 同步的写法 -->
    组件commit--->mutations--->state操作

    组件触发commit（写法：this.$store.state.commit('事件名'，参数(可选项)）
    --->
    mutations写和commit事件名相同的函数，参数state（必须）和传的值（可选）
    --->
    mutations事件里面操作state


    <!-- 异步的流程 -->
    组件(或者去全局)触发dispatch（写法：this.$store.state.dispatch('事件名'，参数（可选项)）
    --->
    actions  写一个与dispatch事件名相同函数，参数是(commit)和传的值
    --->
    通过commit提交给mutations（写法：commit（’事件名一般回合actions的方法同名）
    --->
    mutations事件里面操作state

    辅助函数运用时的特点：
    值 (包括：mapState、mapGetters)  放在computed里面
    函数 (包括：mapActions、mapMutations)    放在methods里面

  module注意事项：
    有命名空间的mapState的时候，可以传递模块名
    没有命名空间的不能传递模块名

 拆分流程：
 	默认导出  export default
 	引入  用import引入
 	挂载  放在Vuex.Store实例对象上
 	
mapMutations 和 mapActions 会把 他们里面的方法直接映射到实例上面(this) 可以通过 this.method直接调用
示例：
mapMutations = {
	add(state){
		执行逻辑
	}
} 	
import {mapMutations} from 'vuex';
组件里调用
	this.add()
	
	
	
template永远都是本地的值
父传子：
加：则传什么数据子级接收什么数据
不加：则以字符串的方式接收

子传父：
	子级中的数据传递到父级中，子级中用$emit() 发送
	$emit是vue实例化下面的方法
	const vue = new Vue()
	vue.proptype.$emit = function(){
	
	}
	父组件绑定子级组件的发送监听函数的事件,相当于click事件，绑定的函数是父级组件的监听响应函数
	
同级传值：
	eventBus:是中间转换器，思想来源于JAVA
	$emit():只负责发送数据，接收两个参数，分别是发送数据的监听函数
						第二个是需要发送的数据
							
	$on():只负责接收数据，只在同级传值中才能用到
	
	$off(): 当数据发送完成后，立即释放当前接收数据的监听函数	
	
	页面销毁前可以发送数据
	beforeDestroy 和 destroyed
	页面挂在前接收可以接收数据
	beforecreated、created、beforeMount
	
  
