<template>
  <div class="NavBarView">
    <NavBar class="navBar">
      <template #left>
        <div class="left" @click="$router.back()">
          <i class="iconfont icon-fanhui"></i>
        </div>
      </template>
      <template #center>
        <div class="center">装馨家</div>
      </template>
      <template #right>
        <div class="right" @click="$router.replace('/page')"></div>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "VideoNav",
  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.navBar {
  font-size: 0.16rem;
  color: #333333;
  font-weight: 700;
  .left {
    padding-left: .18rem;
    font-size: .16rem;
  }
  .right {
    width: 100%;
    height: 100%;
    background: url("~assets/imgs/tabbar/home.png") no-repeat .6rem center / 0.21rem;
  }
}
</style>