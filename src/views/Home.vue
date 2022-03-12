<template>
  <div class="main">
    <div class="nav-bar">
      <MenuBarComponent />
    </div>
    <div id="filter-bar">
      <FilterBarComponent />
    </div>
    <div class="content">
      <slot name="content">Teste</slot>
    </div>
<!--  <router-view/> -->
  </div>
</template>

<script>
import MenuBarComponent from '../components/MenuBarComponent.vue'
import FilterBarComponent from '../components/FilterBarComponent.vue'
export default{
  name: 'Home',
  components: {
      MenuBarComponent,
      FilterBarComponent
    }
  }
</script>

<style>
  @media (min-width: 992px){
  .main{
    max-width: 80%;
    min-height: 100%;
    height: 100vh;
    margin: auto;
    background-color: yellow;
}}
.content{
  justify-content: center;
  align-items: center;
  background-color: red;
  min-height: 75%;
  max-height: 500px;
  overflow: auto;
  padding:40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#filter-bar {
  padding: 30px;
}

#filter-bar a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 10px;
  padding:10px;
}

#filter-bar a.router-link-exact-active {
  color: #42b983;
  background-color: white;
}
.navbar-brand {
  padding:50px;
}
@media (min-width: 992px){
    .navbar li {
        margin-left : 2em;
        margin-right : 10em;
    }
}
</style>
