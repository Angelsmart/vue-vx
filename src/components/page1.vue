<template>
	<div id="page1">
		page1
		<p>{{urseList.id}}---{{urseList.name}}</p>
		<button @click="send">发送</button>
		<!--axios-->
		<form action="">
			<input v-model="objList.id" placeholder="ID" />
			<input v-model="objList.userName" placeholder="请输入用户名" />
			<input v-model="objList.age" placeholder="请输入年龄" />
			<button type="button" @click="addData">提交数据</button>
		</form>
	</div>
</template>

<script>
	export default {
		name:"page1",
		data(){
			return {
				urseList:{
					id:1,
					name:'孙悟空'
				},
				objList:{
			        id:'',
			        userName:'',
			        age:''
			      }
			}
		},
		methods:{
			send(){
				this.$bus.$emit("sendpage",this.urseList)
			},
			//往后台提交数据
			addData(){
				const params = {
					id:this.objList.id,
					userName:this.objList.userName,
					age:this.objList.age
				}
				this.$http.post('/addUser',params).then(res=>{
					console.log(params)
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			}
		},
		mounted(){
			this.$http.get('/hot').then(res=>{
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style>
	#page1{
		width: 100%;
		height: 200px;
		background: #0060BF;
		color: #EEEEEE;
	}
</style>