<template>
  <div class="fitment_nav_bar">
    <NavBar>
      <template #left>
        <div class="left" @click="$emit('showCity')">
          <p>{{selectCity.name}}</p>
          <i class="iconfont icon-fanhui"></i>
        </div>
      </template>
      <template #center>
        <div class="center">找装修</div>
      </template>
      <template #right>
        <div class="right" @click="$router.push('/page')"></div>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "FitmentNavBar",
  components: {
    NavBar,
  },
  props: {
    selectCity: {
      type: Object,
      default() {
        return {}
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("~assets/less/themeConfig.less");
.fitment_nav_bar {
  .left {
    display: flex;
    line-height: 0.44rem;
    padding-left: 0.15rem;
    p:extend(.snh) {
      max-width: 0.6rem;
      margin-right: 0.02rem;
      font-size: 0.13rem;
    }
    i {
      display: inline-block;
      transform: rotate(-90deg);
    }
  }
  .center {
    font-size: 0.16rem;
    color: #333333;
    font-weight: 700;
  }
  .right {
    width: 100%;
    height: 100%;
    background: url("~assets/imgs/tabbar/home.png") no-repeat 0.6rem center /
      0.21rem;
  }
}
</style>