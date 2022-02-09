<template>
  <div class="CaseNavBar">
    <NavBar class="nav_bar">
      <template #left>
        <div class="left" @click="$router.back()"><i class="iconfont icon-fanhui"></i></div>
      </template>
      <!-- <template #center>
        <div class="center" @click="$router.push('/search')"><i class="iconfont icon-sousuo"></i></div>
      </template> -->
      <template #right>
        <div class="right" @click="$router.push('/page')"><i class="iconfont icon-fangzi"></i></div>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "CaseNavBar",
  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.CaseNavBar {
  transition: all .3s ease;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  color: rgb(255, 255, 255);
  background-color: transparent;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  font-size: 0.22rem;
  color: #ffffff;
  .nav_bar {
    box-shadow: none;
    .left {
      padding-left: .15rem;
    }
    .right {
      width: 100%;
      text-align: right;
      padding-right: .15rem;
    }
  }
  .center {
    text-align: left;
  }
}
</style>