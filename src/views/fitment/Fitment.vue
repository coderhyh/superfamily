<template>
  <div id="fitment">
    <FitmentNavBar
      @showCity="setShowCity(true)"
      :selectCity="selectCity"
    ></FitmentNavBar>

    <Scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      @pullingUp="pullingUp"
      :pull-up-load="true"
    >
      <FitmentHeader
        :headerList="headerList"
        :headerPlate="headerPlate"
      ></FitmentHeader>
      <FitmentContent :goodsList="shoplist.list" ref="content">
        <template #filterControl>
          <FilterControl :filterList="filterData.result"></FilterControl>
        </template> </FitmentContent
    ></Scroll>
  </div>
</template>

<script>
import FitmentNavBar from "./fitmentChild/FitmentNavBar.vue";
import FitmentHeader from "./fitmentChild/FitmentHeader.vue";
import FitmentContent from "./fitmentChild/FitmentContent.vue";
import FilterControl from "./fitmentChild/FilterControl.vue";

import { getData } from "common/utils";
import { mapMutations, mapState } from "vuex";
import Scroll from "components/common/scroll/Scroll.vue";

export default {
  name: "Fitment",
  components: {
    FitmentNavBar,
    FitmentHeader,
    FitmentContent,
    FilterControl,

    Scroll,
  },
  data() {
    return {
      headerList: [],
      headerPlate: [],
      filterData: {},
      shoplist: {},
      nextPageUrl: "",
      locationCity: {},
    };
  },
  computed: {
    ...mapState(["isShowCity", "selectCity"]),
  },
  methods: {
    ...mapMutations(["setShowCity", "setSelectCity"]),
    contentScroll(position) {},
    pullingUp() {
      console.log("end");
      const url = this.nextPageUrl.path + "?" + this.nextPageUrl.params;
      getData(url, (res) => {
        if (!res.data.showShoplist.list.length) {
          this.$refs.content.loadText = "已经没有更多了~";
        }
        this.shoplist.list.push(...res.data.showShoplist.list);
        this.nextPageUrl = this.shoplist.nextPageUrl;
        this.$refs.scroll.finishPullUp();
      });
    },

    /* 
      请求相关
    */
    getData() {
      const url = `/decoration/shop/list?version=6&zxjv=47.0&jzts=1642044626223_0.36409948117646707&reqfr=h5&selectArea=${this.selectCity.code}&gpsSelectArea=131`;
      getData(url, (res) => {
        this.headerList = res.data.showDiamondzone.result;
        this.headerPlate = res.data.showRecommendzone.result;
        this.filterData = res.data.showFilter;
        this.shoplist = res.data.showShoplist;
        this.nextPageUrl = this.shoplist.nextPageUrl;
        if (!this.shoplist.list.length) {
          this.$refs.content.loadText = "已经没有更多了~";
        }
      });
    },
  },
  watch: {
    selectCity: {
      handler() {
        this.getData();
      },
      deep: true,
      immediate: true
    },
  },
  created() {
    // this.getData();
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  overflow: hidden;
  width: 100vw;
  position: fixed;
  top: 0.44rem;
  bottom: 0.46rem;
}
</style>