/*
 * @Author: Sunny
 * @Date: 2022-11-23 20:29:26
 * @LastEditors: Suuny
 * @LastEditTime: 2022-12-01 12:25:13
 * @Description: 
 * @FilePath: /Demo/src/store/index.js
 */
import Vue from "vue";
// import Vuex from 'vuex'
import Vuex from '@/vuex/index.js'
// import vuex from "../vuex";
Vue.use(Vuex); // 注册插件 install mixin


const store = new Vuex.Store({
    state: { // 存放数据 响应式
        age: 10
    },
    getters: { // vue 计算属性   具有缓存
        changeAge (state) {
            console.log("触发 getters")
            return state.age  * 2;
        }
    },
    mutations: { // 同步
        addAge (state, data) {
            state.age += data 
        }
    },
    actions: {
        ayChange({ commit }, data) { // 异步
           
            setTimeout(() => {
                commit('addAge', data)
            }, 1000);
        }
    }
})

export default store



