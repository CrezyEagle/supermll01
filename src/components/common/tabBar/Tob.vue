<template>
  <div class="hz">
    <slot></slot>
  </div>
</template>

<script>
export default {
name:'Tob'
}
</script>

<style >
.hz{
  z-index: 9;
  display: flex;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right:0 ;
  box-shadow: 2px 0px 1px 1px rgba(98, 86, 86, 0.335);
  background-color: #f5f5f500;
}
</style>