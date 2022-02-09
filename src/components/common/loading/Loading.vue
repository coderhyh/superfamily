<template>
  <div class="loading">
    <div v-if="!loadText" class="pic"></div>
    {{loadText || '正在加载...'}}
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    loadText: String
  }
};
</script>

<style lang="less" scoped>
.loading {
  margin-top: 0.3rem;
  height: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.14rem;
  color: #999999;
  .pic {
    width: 0.3rem;
    height: 0.3rem;
    background: url("~assets/imgs/common/loading.gif") no-repeat center / 2.5rem;
  }
}
</style>