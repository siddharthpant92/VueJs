import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

//data is the node in firebase. Can be named to anything though
Vue.http.options.root = 'https://vuejs-http-da062.firebaseio.com/data.json';

new Vue({
  el: '#app',
  render: h => h(App)
})
