<template>
  <div class="contents">

  <Home>
    <template v-slot:content>
      <h1>Here might be a page title</h1>
    </template>
  </Home>
  </div>
</template>
<script>
import Home from '../views/Home.vue'
export default{
  name: 'About',
  components:{
        Home,
  },
}
</script>
