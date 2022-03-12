<template>
  <div class="contents">

  <Home>
    <template v-slot:content>
      <h1>Estudantes</h1>
    </template>
  </Home>
  </div>
</template>
<script>
import Home from './Home.vue'
export default{
  name: 'Show',
  components:{
        Home,
  },
}
</script>
