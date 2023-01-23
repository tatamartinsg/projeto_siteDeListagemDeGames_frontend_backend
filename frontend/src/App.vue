<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
    name: 'App',
    components: {
      'navbar-header': Header,
      'navbar-footer': Footer
    }
  }
</script>

<template>
  <div style="width:100%;">
    <navbar-header/>
  </div>
  <RouterView />
  <div>
    <navbar-footer/>
  </div>
</template>

<style>
.RouterLink, a{ /*Tirar o padrão CSS do RouterLink*/
  text-decoration: none; 
  color: inherit
}
body{
  background-color: rgb(2, 2, 2);
  max-width: 100%;
  min-width: 300px;
}
p{
  margin: 0;
}
</style>
