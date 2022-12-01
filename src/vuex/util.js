/*
 * @Author: Sunny
 * @Date: 2022-11-25 22:26:25
 * @LastEditors: Suuny
 * @LastEditTime: 2022-11-25 22:27:32
 * @Description:
 * @FilePath: /Demo/src/vuex/util.js
 */

// 获取到对象属性和值
export let foreachV = (obj, callback) => {
    Object.keys(obj).forEach(key => {
        callback(key, obj[key])
    }) 
}