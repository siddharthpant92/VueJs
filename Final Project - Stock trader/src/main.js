import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

import {routes} from './routes';
import store from './store/store';

Vue.http.options.root = "https://vuejs-stock-trader-f1692.firebaseio.com/";

Vue.filter('currency', function(value)
{
	return '$' + value.toLocaleString();
})

const router = new VueRouter({
	mode: 'history',
	routes: routes
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
