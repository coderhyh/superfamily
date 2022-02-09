<template>
  <div id="homeContent">
    <TabControl
      class="abControl"
      :titles="controlList"
      ref="tabControl1"
      @tabClick="tabClick"
    ></TabControl>

    <MainGoods :goods="goodsList"></MainGoods>
  </div>
</template>

<script>
import TabControl from "components/contents/tabControl/TabControl.vue";
import MainGoods from "components/contents/goodsCon/MainGoods.vue";

// import { getData } from "common/utils";

export default {
  name: "HomeContent",
  components: {
    TabControl,
    MainGoods,
  },
  data() {
    return {
      goodsList: [],
    };
  },
  props: {
    controlList: {
      type: Array,
      default() {
        return [];
      },
    },
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabClick(path, index) {
      // const { path, params } = item.tabUrl;
      this.$emit("tabControlClick", path, index)
      // getData(path + "?" + params, (res) => {
      //   this.goodsList = res.data.showMixrec.list;
      //   // this.$store.commit("setHomeData", res.data);
      // });
    },
  },
  watch: {
    goods: {
      deep: true,
      immediate: true,
      handler: function (newval) {
        this.goodsList = newval;
      },
    },
  },
};
</script>

<style lang="less" scoped>
#homeContent {
  width: 100%;
  min-height: 150vh;
  background: #fff;
  border-radius: 0.15rem 0.15rem 0 0;
  overflow: hidden;

  .abControl {
    font-size: 0.14rem;
    color: #999999;
  }
}
</style>