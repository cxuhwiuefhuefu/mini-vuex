/*
 * @Author: Sunny
 * @Date: 2022-11-23 20:15:26
 * @LastEditors: Suuny
 * @LastEditTime: 2022-11-25 15:48:49
 * @Description: 
 * @FilePath: /Demo/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false
// console.log(store)
new Vue({
  name: 'root',
  store, // 注意：给我们每一个使用实例 添加一个 $store 属性
  render: h => h(App),
}).$mount('#app')
