<template>
  <div class="toas">
    {{neir}}
  </div>
</template>

<script>
export default {
data() {
  return {
    neir:"默认信息"
  }
},
}
</script>

<style>
.toas{
  position: fixed;
  color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0,0.5);
  padding: 5px 10px;
}
</style>