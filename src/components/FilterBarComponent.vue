<template>
  <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>

  </div>
  <router-view/>
</template>

<script>
export default {
    name: 'FilterBarComponent'
}
</script>

<style src="./styleComponents.css"/>