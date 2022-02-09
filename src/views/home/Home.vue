<template>
  <div id="home">
    <nav-bar class="home-nav-bar" ref="navBar" :style="{ background: navBgc }">
      <template #left>
        <div class="nav-bar-left" @click="goSearch"></div>
      </template>
      <template #center>
        <div class="nav-bar-center">装馨家</div>
      </template>
    </nav-bar>
  
    <TabControl
      class="abControl"
      :titles="controlList"
      ref="tabControl2"
      v-show="isGoUp"
      @tabClick="tabControlClick"
    ></TabControl>

    <BackTop
      :scrollTop="scrollTop"
      @backTop="$refs.scroll.scrollTo(0, 0)"
    ></BackTop>

    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      @pullingUp="pullingUp"
      :pull-up-load="true"
    >
      <HomeHander :list="handList" :banner="banner"></HomeHander>

      <HomeContent
        :controlList="controlList"
        :goods="goods"
        @tabControlClick="tabControlClick"
        ref="homeContent"
      ></HomeContent>
    </Scroll>
  </div>
</template>
 
<script>
import NavBar from "components/common/navbar/NavBar";
import HomeHander from "./homeChild/HomeHander";
import HomeContent from "./homeChild/HomeContent.vue";
import TabControl from "components/contents/tabControl/TabControl.vue";
import BackTop from "components/common/backTop/BackTop.vue";

import Scroll from "components/common/scroll/Scroll.vue";

import { getData } from "common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeHander,
    HomeContent,
    BackTop,
    Scroll,
  },
  data() {
    return {
      handList: [],
      banner: [],
      controlList: [],
      goods: [],
      nextPageUrl: {},
      searchUrl: "",
      isGoUp: false,
      navBgc: "#f3f5fb",
      scrollTop: 0
    };
  },
  methods: {
    /* 事件相关 */
    contentScroll(position) {
      const el = this.$refs.homeContent.$refs.tabControl1.$el;
      this.isGoUp = -position.y >= el.offsetTop;
      this.navBgc = this.isGoUp ? "#fff" : "#f3f5fb";
      this.scrollTop = -position.y;
    },
    pullingUp(isClick) {
      console.log("end");
      const url = this.nextPageUrl.path + "?" + this.nextPageUrl.params;
      getData(url, (res) => {
        const list = res.data.showMixrec.list;
        isClick ? (this.goods = list) : this.goods.push(...list);
        this.nextPageUrl = res.data.showMixrec.nextPageUrl;
        // 重置上拉刷新
        this.$refs.scroll.finishPullUp();
        this.$refs.scroll.scroll.refresh();
      });
    },
    tabControlClick(path, index) {
      this.goods = [];
      const tabControl1 = this.$refs.homeContent.$refs.tabControl1;
      this.$refs.scroll.scrollTo(0, -(tabControl1.$el.offsetTop + 2));
      tabControl1.curIndex = this.$refs.tabControl2.curIndex = index;

      this.nextPageUrl = path;
      this.pullingUp(true);
    },
    goSearch() {
      let path = this.searchUrl.path + "?" + this.searchUrl.params;
      path = encodeURIComponent(path);
      this.$router.push("/searchview/" + path);
    },

    /* 请求数据相关 */
    getData() {
      const url =
        "/decoration/home?version=6&zxjv=47.0&jzts=1640941220837_0.8081685037304187&reqfr=h5&selectArea=268&gpsSelectArea=268";
      getData(url, (res) => {
        const data = res.data;

        this.handList = data.showDiamondzone.result;
        this.banner = data.showUniversaladentrance.result;
        this.controlList = data.showHometab;
        this.goods = data.showMixrec.list;
        this.nextPageUrl = data.showMixrec.nextPageUrl;
        this.searchUrl = data.showSearchinfo.searchinfoUrl;
        this.$refs.scroll.scroll.refresh();
      });
    },
  },
  created() {
    this.getData();
  },
  activated() {
    this.$refs.scroll.scroll.refresh();
  },
  unmounted() {
    console.log("销毁");
  },
};
</script>

<style lang="less" scoped>
#home {
  background: #f3f5fb;
  height: 100vh;
}
.content {
  width: 100%;
  position: fixed;
  top: 0.39rem;
  bottom: 0.46rem;
  left: 0;
  right: 0;
  // height: calc(100vh - 0.44rem - 0.49rem);
  // margin-top: 0.44rem;
  overflow: hidden;
}
.home-nav-bar {
  background: #f3f5fb;
  height: 0.39rem;
  position: relative;
  z-index: 999;
  transition: all 0.5s ease;
  .nav-bar-left {
    width: 100%;
    height: 100%;
    background: url("~assets/imgs/common/search.svg") no-repeat .18rem center / 0.22rem;
  }
  .nav-bar-center {
    font-size: 0.16rem;
    font-weight: 700;
    color: #333333;
    font-weight: 700;
  }
}
.abControl {
  position: relative;
  z-index: 999;
  font-size: 0.14rem;
  color: #999999;
}
</style>