<template>
  <div class="recommendv">
    <div v-for="(item, id) in recommend.list" :key="id" class="re-div">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div class="re-text">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommendv {
  display: flex;
  width: 100%;
  text-align: center;
  border-bottom: 10px solid #eee;
  text-decoration: none;
}
.recommendv .re-div {
  flex: 1;
  padding: 10px 0 20px;
  text-decoration: none;
}
.recommendv img {
  width: 75%;
}
a {
  color: #666;
  text-decoration: none;
  font-size: 10px;
  height: 20px;
  
}
.re-text{
  margin-top: 10px;
}
</style>