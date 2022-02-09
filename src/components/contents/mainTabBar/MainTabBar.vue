<!-- MainTabBar -->
<template>
  <tab-bar>
    <tab-bar-item v-for="item in TabBarList" :key="item.path" :path="item.path" :activeColor="'#FF4196'">
      <template #item-icon>
        <img :src="item.img" alt="" />
      </template>
      <template #item-icon-active>
        <img :src="item.img_active" alt="" />
      </template>
      <template #item-name>
        <p>{{ item.name }}</p>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {
      TabBarList: [
        {
          path: "/page/home",
          img: require("assets/imgs/tabbar/home.png"),
          img_active: require("assets/imgs/tabbar/home-active.png"),
          name: "首页",
        },
        {
          path: "/page/strategy",
          img: require("assets/imgs/tabbar/strategy.png"),
          img_active: require("assets/imgs/tabbar/strategy.active.png"),
          name: "攻略",
        },
        {
          path: "/page/fitment",
          img: require("assets/imgs/tabbar/fitment.png"),
          img_active: require("assets/imgs/tabbar/fitment-active.png"),
          name: "装修",
        },
        {
          path: "/page/profile",
          img: require("assets/imgs/tabbar/profile.png"),
          img_active: require("assets/imgs/tabbar/profile-active.png"),
          name: "我的",
        },
      ],
    };
  },
};
</script>
<style scoped lang="less">
#tab-bar {
  display: flex;
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid #E6E6E6;
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 0.12rem;
  height: 0.45rem;
  /* line-height: 49px; */

  img {
    width: 0.20rem;
    height: 0.20rem;
    margin-top: 0.05rem;
  }
}
</style>