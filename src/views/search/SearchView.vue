<template>
  <div class="SearchView">
    <NavBarView></NavBarView>
    <Scroll
      class="content"
      ref="scroll"
      @pullingUp="pullingUp"
      :pull-up-load="true"
    >
      <SearchControl
        v-model="iptValue"
        @startSearch="startSearch"
        @empty="
          randomTex();
          searchInfo = {};
        "
        ref="SearchControl"
      ></SearchControl>

      <SearchText
        v-if="historyList.length"
        v-show="isSearch"
        :list="historyList"
        isHistory
        :name="'搜索历史'"
        @delSucceed="emptyHistory"
        @textSearch="textSearch"
      ></SearchText>

      <SearchText
        v-show="isSearch"
        :list="hotlist"
        :name="'大家都在搜'"
        @textSearch="textSearch"
      ></SearchText>

      <SearchContent v-show="!isSearch" :searchInfo="searchInfo">
        <WaterfallLayout :totalList="totalList"></WaterfallLayout>
        <Loading></Loading>
      </SearchContent>
    </Scroll>
  </div>
</template>

<script>
import NavBarView from "./searchChild/NavBarView.vue";
import SearchControl from "./searchChild/SearchControl.vue";
import SearchText from "./searchChild/SearchText.vue";
import SearchContent from "./searchChild/SearchContent.vue";
import WaterfallLayout from "components/contents/waterfallLayout/WaterfallLayout.vue";
import Loading from "components/common/loading/Loading.vue";

import { getData } from "common/utils";
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  name: "SearchView",
  data() {
    return {
      historyList: [],
      hotlist: [],
      iptValue: "",
      searchUrl: "",
      totalList: [],
      searchInfo: {},
      isSearch: true,
      nextPageUrl: "",
    };
  },
  components: {
    NavBarView,
    SearchControl,
    SearchText,
    SearchContent,
    WaterfallLayout,
    Loading,
    Scroll,
  },
  methods: {
    pullingUp() {
      console.log("end");
      getData(this.nextPageUrl, (res) => {
        console.log(res);
        const { showSearchList } = res.data;
        const { path, params } = showSearchList.nextPageUrl;
        this.totalList.push(showSearchList.list);
        this.nextPageUrl = path + "?" + params;
        this.$refs.scroll.finishPullUp();
      });
    },
    randomTex() {
      const index = parseInt(Math.random() * this.hotlist.length);
      this.iptValue = this.hotlist[index].word;
    },
    getHistory() {
      const historyList = localStorage.getItem("historyList");
      historyList && (this.historyList = JSON.parse(historyList));
    },
    emptyHistory() {
      this.historyList = [];
      localStorage.setItem("historyList", JSON.stringify(this.historyList));
    },
    textSearch(item) {
      this.iptValue = item;
      this.$refs.SearchControl.val = item;
      this.startSearch();
    },

    /* 请求数据相关 */
    startSearch() {
      const url =
        this.searchUrl.path +
        "?" +
        this.searchUrl.params +
        "&query=" +
        this.iptValue;
      this.isSearch = false;
      getData(url, (res) => {
        console.log(res);
        const { showSearchList, showKnowledgeinfo } = res.data;
        const { path, params } = showSearchList.nextPageUrl;
        this.totalList = showSearchList.list;
        this.searchInfo = showKnowledgeinfo;
        this.nextPageUrl = path + "?" + params;

        const index = this.historyList.indexOf(this.iptValue);
        if (index == -1) {
          this.historyList.unshift(this.iptValue);
          localStorage.setItem("historyList", JSON.stringify(this.historyList));
        }
      });
    },
    getData(url) {
      getData(url, (res) => {
        this.hotlist = res.data.showHotlist.list;

        this.searchUrl = res.data.showSearchinfo.searchUrl;
        this.randomTex();
      });
    },
  },
  computed: {},
  created() {
    const url = decodeURIComponent(this.$route.params.url);
    this.getData(url);
    this.getHistory();
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  position: fixed;
  top: 0.44rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>