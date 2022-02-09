<template>
  <div class="filter_control">
    <div class="select" v-for="item in filterList" :key="item">
      {{ item.text }} <i class="iconfont icon-fanhui"></i>
    </div>

    <!-- <div class="sort">
      <div class="sort_item"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "FilterControl",
  data() {
    return {};
  },
  props: {
    filterList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.filter_control {
  width: 100%;
  height: 0.44rem;
  display: flex;
  position: relative;
  .select {
    flex: 1;
    line-height: 0.44rem;
    text-align: center;
    font-size: 0.14rem;
    color: #555555;
    i {
      display: inline-block;
      transform: rotate(-90deg);
    }
  }
  .sort {
    position: absolute;
    left: -0.15rem;
    right: 0;
    top: 100%;
    background: pink;
    width: 100vw;
    height: 100vh;
    // .sort_item {
      
    // }
  }
}
</style>