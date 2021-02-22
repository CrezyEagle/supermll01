<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物车</div>
      </template>
    
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
components:{
  NavBar
}
}
</script>

<style>
.home-nav{
  background-color: var(--color--pink);
  color: var(--color--baise);
}
</style>