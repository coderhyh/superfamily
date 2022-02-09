<template>
  <div class="search">
    <div class="search_icon"></div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
};
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: .35rem;
  line-height: .35rem;
  text-align: center;
  border-radius: .2rem;
  background: #fff;
  display: flex;
  font-size: .15rem;
  color: #999999;
  overflow: hidden;
  
  .search_icon {
    background: url("~assets/imgs/common/search.svg") no-repeat center / .17rem !important;
  }

  .search_icon,.right {
    width: .35rem;
    height: 100%;
  }

  .center {
    flex: 1;
  }

  .right {
    width: .5rem;
  }
}
</style>