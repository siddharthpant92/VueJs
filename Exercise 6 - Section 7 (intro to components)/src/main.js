import Vue from 'vue'
import App from './App.vue'
import ServerList from "./ServerList.vue"
import ServerDetails from "./serverDetails.vue"
import ServerFooter from "./ServerFooter.vue"

Vue.component('server-list', ServerList);
Vue.component('server-details', ServerDetails);
Vue.component('server-footer', ServerFooter);

new Vue({
  el: '#app',
  render: h => h(App)
})
