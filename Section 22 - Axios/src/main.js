import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-68d9c.firebaseio.com'

const reqInt = axios.interceptors.request.use(config => {
	console.log("request interceptor", config)
	return config;
})

axios.interceptors.response.use(res => {
	console.log("response interceptor",res)
	return res;
})

axios.interceptors.response.eject(reqInt)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
