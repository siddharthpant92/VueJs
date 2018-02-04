import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

//data is the node in firebase. Can be named to anything though
Vue.http.options.root = 'https://vuejs-http-da062.firebaseio.com/';

//Executed on each request
Vue.http.interceptors.push((request, next)=>{
	console.log(request);
	if(request.method == 'POST')
	{
		request.method = 'PUT'
	}
	//Proceeding with the request
	next(response =>
	{
		// modifying the reponse to get back an object because in above code, 
		// PUT request changes the way it is stored in firebase
		response.json = () => { return {messages: response.body}}
	}); 
});



new Vue({
  el: '#app',
  render: h => h(App)
})
