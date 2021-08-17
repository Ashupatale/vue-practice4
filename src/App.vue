<template>
  <div id="app">
     <TodoList/>
     <RefModel/>
     <h3 style="marginTop:5%;backgroundColor:green;color:white">Routing in Vue js</h3>
     <div class="navbardiv">
       <router-link to="/">Home</router-link>
       <router-link to="/tasks">Tasks</router-link>
       <router-link to="/services">Services</router-link>
       <router-link to="/contact">Contact</router-link>

     </div>
     <router-view></router-view>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import RefModel from './components/RefModel.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    RefModel,

  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 600px;
  margin: 0 auto;
}

.navbardiv{
  display:flex;
  justify-content:space-around;
  margin-top: 2%;
  margin-bottom: 5%;

}
</style>
