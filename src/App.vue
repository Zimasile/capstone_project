<template>
  <NavBar/>
  <router-view/>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>


<style>
#app {
  font-family: cursive;
  text-align: center;
}
.navbar {
  margin: 0;
  padding: 0;
}
/*nav {
  display: inline-block;
}*/
/*
nav a {
  font-weight: bold;
  color: #2c3e50;
}
*/
nav a.router-link-exact-active {
  color:hsl(124, 52%, 12%);
}

</style>
