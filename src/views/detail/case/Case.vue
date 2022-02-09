<template>
  <div class="detailCase">
    <CaseNavBar :class="{ bacWhite: isBacWhite }"></CaseNavBar>
    <Scroll
      class="wrap"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      @pullingUp="pullingUp"
      :pull-up-load="true"
      v-if="Object.keys(detailObj).length"
    >
      <CaseHeader :caseDetail="detailObj" :type="type"></CaseHeader>
      <CaseContent :article="article"></CaseContent>
      <GuessList :guess="guess"></GuessList>
      <HotList :hotlist="hotlist"></HotList>
    </Scroll>
    <BackTop
      :scrollTop="scrollTop"
      @backTop="$refs.scroll.scrollTo(0, 0)"
    ></BackTop>

    <Loading v-show="isShowLoad" class="Loading"></Loading>
  </div>
</template>

<script>
import CaseNavBar from "./caseChild/CaseNavBar.vue";
import CaseHeader from "./caseChild/CaseHeader.vue";
import CaseContent from "./caseChild/CaseContent.vue";
import GuessList from "components/contents/detail/GuessList.vue";
import HotList from "components/contents/detail/HotList.vue";

import BackTop from "components/common/backTop/BackTop.vue";
import Loading from "components/common/loading/Loading.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import { getData } from "common/utils";

export default {
  name: "Case",
  data() {
    return {
      paeams: "",
      type: "",
      detailObj: {},
      article: [],
      guess: {},
      hotlist: [],
      isShowLoad: false,
      isBacWhite: false,
      scrollTop: 0,
    };
  },
  components: {
    CaseNavBar,
    CaseHeader,
    CaseContent,
    GuessList,
    HotList,

    BackTop,
    Loading,
    Scroll,
  },
  methods: {
    contentScroll(position) {
      this.isBacWhite = -position.y > 400;
      this.scrollTop = -position.y;
    },
    pullingUp() {},

    /* 
      请求数据相关
    */
    getData() {
      this.paeams = this.$route.params.path;
      this.type = this.$route.params.type;
      this.isShowLoad = true;
      getData(this.paeams, (res) => {
        console.log(res);
        if (this.type == "case" || this.type == "case3d") {
          this.detailObj = res.data.showCasedetail;
          this.article = res.data.showCasedetail.article;
        }else if (this.type == 'walkthrough') {
          this.detailObj = res.data.showWalkthroughdetail;
          this.article = res.data.showWalkthroughdetail.list[0].article;
        }else if (this.type == 'recommendation') {
          this.detailObj = res.data.showRecarticledetail;
          this.article = res.data.showRecarticledetail.article;
        }
        this.guess = res.data.showContentshoprec;
        this.hotlist = res.data.showHotlist.list;
        this.isShowLoad = false;
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
}
.Loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.bacWhite {
  background: #fff;
  color: #5d5d5d;
}
</style>