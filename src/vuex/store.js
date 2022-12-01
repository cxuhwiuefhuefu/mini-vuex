/*
 * @Author: Sunny
 * @Date: 2022-11-25 14:55:35
 * @LastEditors: Suuny
 * @LastEditTime: 2022-12-01 17:04:35
 * @Description: 
 * @FilePath: /Demo/src/vuex/Store.js
 */

import {foreachV} from './util.js'
let Vue;
// let that = null;
export class Store { // 容器
    constructor (options) { 
        console.log(600, options)
        // this.state = options.state
        
        // getters  getters.名称  {属性: fns} 变成 {属性: 值}    具有缓存机制 
        let getters = options.getters;
        this.getters = {};
        let computed = {};
        // Object.keys(getters).forEach(key => {
        //     Object.defineProperty(this.getters, key, {
        //         get: () => {
        //             return getters[key](this.state);
        //         }
        //     })
        // })
        foreachV(getters, (key, fn) => {
            // 把 getters 里面的每个属性都变成计算属性里的每一个属性
            computed[key] = () => {
                return fn(this.state)
            }
            Object.defineProperty(this.getters, key, {
                get: () => {
                    // return fn(this.state)
                    return this.vm[key]
                }
            })
        })

        
        this.vm = new Vue({
            data: {
                state: options.state
            },
            computed
        })
        // mutation 和 action
        let mutations = options.mutations
        this.mutations = {}
        const that = this;
        foreachV(mutations, (key, fn) => { // 发布订阅模式
            this.mutations[key] = (data) => {
                fn(this.state, data) // addAge ()
            }
        })

        let actions = options.actions
        this.actions = {}
        foreachV(actions, (key, fn) => { // 发布订阅模式
            this.actions[key] = (data) => {
                console.log("fn", fn)
                console.log("this", this)
                console.log("data", data)
                fn(this, data) 
            }
        })


        // 改变 this 指向  ！！！ 重要
        // this.commit = this.commit.bind(this);
        // this.dispatch = this.dispatch.bind(this);
        
    }
    // 监听属性监听
    get state() {
        return this.vm.state
    }

    // commit (name, data) {
    //     // console.log('同步出发', this, Vue.$store)
    //     this.mutations[name](data);
    // }
    // dispatch (name, data) {
    //     console.log('异步触发', this, Vue.$store)

    //     this.actions[name](data);
    // }
    // 箭头函数 改变 this 指向
    commit = (name, data) => {
        // console.log('同步出发', this, Vue.$store)
        this.mutations[name](data);
    }
    dispatch = (name, data) => {
        console.log('异步触发', this, Vue.$store)

        this.actions[name](data);
    }
}


// 给 Vue 所有的使用实例添加一个属性：$store
export const install = function(_Vue) { // 注册插件 可以帮我们传递参数 就是我们的 vue 的构造函数
    Vue = _Vue
    Vue.mixin({ // 混入全局的方法和数据 
         beforeCreate() { // Vue 组件渲染的关系 父子关系
            let options = this.$options // 每个实例的配置项
            if(options.store) { // 根实例
                this.$store = options.store
            }else {
                this.$store = this.$parent && this.$parent.$store
                // console.log("this.$parent.$store -->", this.$parent.$store, this.$store)
            }
            console.log(this.$store )
         },
    })
}


