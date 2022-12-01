<!--
 * @Author: Sunny
 * @Date: 2022-11-23 20:15:26
 * @LastEditors: Suuny
 * @LastEditTime: 2022-11-26 17:13:05
 * @Description: 
 * @FilePath: /Demo/src/App.vue
-->
<template>
  <div id="app">
    <h2>
      我的年龄：{{$store.state.age}}
      <button @click="$store.state.age = 20">点击</button>
    </h2>
    <h2>我的年龄：{{$store.getters.changeAge}}</h2>
    <h2>我的年龄：{{$store.getters.changeAge}}</h2>
    <h2><button @click="$store.commit('addAge', 10)">同步</button></h2>
    <h2><button @click ="$store.dispatch('ayChange', 100)">异步</button></h2>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted() {
    console.log(this.$store);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
