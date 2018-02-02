import Vue from 'vue'
import App from './App.vue'
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';
import ServerItem from './components/Server/ServerItem.vue';

export const eventBus = new Vue(
{
	methods:
	{
		displayServerItem(serverItem)
		{
			this.$emit('addServerItem', serverItem);
		}
	}
});

Vue.component('appHeader', Header);
Vue.component('servers', Servers);
Vue.component('app-server-details', ServerDetails);
Vue.component('app-footer', Footer);
Vue.component('server-item', ServerItem);



new Vue({
  el: '#app',
  render: h => h(App)
})
