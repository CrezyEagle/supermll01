<template>
  <div class="navbar" >
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
 
};
</script>

<style>
.navbar {
  display: flex;
  text-align: center;
  height: 44px;
  box-shadow: 1px 0px 1px 1px rgba(0, 0, 0, 0.2);
  line-height: 44px;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>