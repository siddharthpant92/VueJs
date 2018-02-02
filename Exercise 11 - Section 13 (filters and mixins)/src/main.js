import Vue from 'vue'
import App from './App.vue'

Vue.filter('string-length', function(value) {
    return value.length;
});

new Vue({
  el: '#app',
  render: h => h(App)
})
