<template>
  <div v-if="Object.keys(paramInfo).length !== 0" class="parm">
    <table v-for="(item, index) in paramInfo.sizes" :key="index" class="tab1">
      <tr v-for="tritem in item" :key="tritem" class="tr1">
        <td  class="td1" v-for="tditem in tritem" :key="tditem">{{ tditem }}</td>
      </tr>

    </table>
    <table class="tab2">
      <tr class="tr2" v-for="(item, index) in paramInfo.info" :key="index">
        <td class="td2">{{ item.key }}</td>
        <td class="td2">{{ item.value }}</td>
      </tr>
    </table>
    <div v-if="paramInfo.image.length!==0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.parm{
  margin-top: 30px;
  padding-top: 50px;
  border-top: 5px solid #F1F1F1;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border-bottom: 5px solid #F1F1F1;
}
.tab1{
  padding: 0px 10px;
  width: 100%;

}
.tab2{
  padding: 0px 10px;
  width: 100%;
    
     color: rgb(255, 112, 136);
}
.tr1{
  width: 100%;
  display: flex;
  position: relative;
justify-content: space-around;
  padding-bottom: 5px;
  margin-bottom: 10px;
  padding-top: 15px;
  border-top: 0.5px solid rgb(212, 212, 212);
}
.tr2{
    width: 100%;
  display: flex;
  position: relative;

  padding-bottom: 5px;
  margin-bottom: 10px;
  padding-top: 15px;
  border-top: 0.5px solid rgb(212, 212, 212);
}
.td1{
  margin-right: 5px;
}

.td1:first-child{

  position: absolute;
  left: 0px;

 margin-right: 50px;
}
.td1:nth-child(2){
  margin-left: 120px;

}
.td2{
  margin-right: 5px;
}

.td2:first-child{
  color: #000;
  position: absolute;
  left: 0px;

 margin-right: 50px;
}
.td2:nth-child(2){
  margin-left: 140px;
}
</style>