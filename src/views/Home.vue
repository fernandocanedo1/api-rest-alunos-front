<template>
  <div class="main">
    <div class="nav-bar">
      <MenuBarComponent />
    </div>
    <div id="filter-bar">
      <FilterBarComponent />
    </div>
    <div class="content">
      <slot name="content"></slot>
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

<style src="../components/styleComponents.css"/>
 
