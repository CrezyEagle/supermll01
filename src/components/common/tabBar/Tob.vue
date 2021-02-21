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
  display: flex;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right:0 ;
  box-shadow: 1px 0px 1px 1px rgba(0, 0, 0, 0.2);
  background-color: #d8d8d8e5;
}
</style>