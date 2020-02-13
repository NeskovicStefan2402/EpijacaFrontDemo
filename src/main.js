import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

export const eventBus=new Vue();
export const korpa=new Vue();
Vue.use(VueResource);
Vue.http.options.root='http://127.0.0.1:5000';
new Vue({
  el: '#app',   
  render: h => h(App)
})
