<template>
  <div id="strategy">
    <StrategyNavBar></StrategyNavBar>
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      @pullingUp="pullingUp"
      :pull-up-load="true"
    >
      <HeadNavigation
        :guidetab="guidetab"
        @getData="navSelectClick"
      ></HeadNavigation>
      <StrategyContent :learnarticle="learnarticle">
        <WaterfallLayout :totalList="totalList"></WaterfallLayout>
        <Loading></Loading>
      </StrategyContent>
    </Scroll>
  </div>
</template>

<script>
import StrategyNavBar from "./strategyChild/StrategyNavBar.vue";
import HeadNavigation from "./strategyChild/HeadNavigation.vue";
import StrategyContent from "./strategyChild/StrategyContent.vue";
import WaterfallLayout from "components/contents/waterfallLayout/WaterfallLayout.vue";
import Loading from "components/common/loading/Loading.vue";

import { getData } from "common/utils";
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  name: "Strategy",
  data() {
    return {
      guidetab: [],
      learnarticle: [],
      totalList: [],
      nextPageUrl: "",
    };
  },
  components: {
    StrategyNavBar,
    HeadNavigation,
    StrategyContent,
    WaterfallLayout,
    Loading,
    Scroll,
  },
  methods: {
    /* 
      事件相关
    */
    navSelectClick(url) {
      this.learnarticle = [];
      this.totalList = [];
      this.getData(url);
    },
    contentScroll(position) {},
    pullingUp() {
      console.log("end");
      getData(this.nextPageUrl, res => {
        console.log(res);
        const { showMixrec } = res.data;
        const { path, params } = showMixrec.nextPageUrl;
        this.totalList.push(showMixrec.list);
        this.nextPageUrl = path + "?" + params;
        this.$refs.scroll.finishPullUp();
      })
    },

    /* 
      请求相关
    */
    getData(url) {
      getData(url, (res) => {
        console.log(res);
        const { showGuidetab, showLearnarticle, showMixrec } = res.data;
        const { path, params } = showMixrec.nextPageUrl;
        this.guidetab = showGuidetab;
        this.learnarticle = showLearnarticle.list;
        this.totalList = showMixrec.list;
        this.nextPageUrl = path + "?" + params;
      });
    },
  },
  created() {
    const url = `/decoration/guide?version=6&zxjv=47.0&jzts=1642234944490_0.5976537632316203&reqfr=h5&selectArea=131&gpsSelectArea=131`;
    this.getData(url);
  },
};
</script>

<style lang="less" scoped>
#strategy {
  overflow: hidden;
  .content {
    width: 100%;
    position: fixed;
    top: 0.44rem;
    bottom: 0.46rem;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
</style>