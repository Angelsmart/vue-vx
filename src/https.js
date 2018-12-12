import Vue from 'vue'
import axios from 'axios'
//全称：queryString
//Json。parse()
import qs from 'qs';
//一共写三部，就可以完成
//1.写请求的公共部分
//2.请求拦截
//3.响应拦截

//axios:基于promise封装的前后端交互工具(获取后台数据)和ajax有一样的作用
//interceptors:是固定不变的，就是axios里面封装的键名

//这是公共的部分
axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.timeout = 4000;
//防止多次发送token到后台
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
//request：请求
//这是请求拦截
axios.interceptors.request.use(config=>{
	console.log(config)
	if(config.method == 'get'||config.method == 'delete'){
		//var token = localStorange.getItem('ming')
		config.headers = {
			'Content-Type': 'application/json;charset=utf-8',
			//相当于自定义的token
			//'ming':`${token}`
			//'ming':'admin-vue-test-axios'
		}
		//将请求的数据转换为字符串
		config.data = qs.stringify(config.data);
	}else if(config.method == 'post'){
		config.headers = {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		}
		config.data = qs.stringify(config.data);
	}
	return config;
})
//response：响应
//这是响应拦截
axios.interceptors.response.use(response=>{
	const data = response.data;
	if(data){
		return data;
	}else{
		const err = new Error('获取数据失败')
		throw err;
	}
	return response
},
//处理失败的回调函数
//请求数据时，要么就是你的请求地址出错
error => {
	console.log(error)
	return Promise.reject('请求失败')
})

export default axios;