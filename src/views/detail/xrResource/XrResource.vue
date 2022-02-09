<template>
  <div class="detailXrResource">
    <MainView :showPanodetail="showPanodetail" ref="MainView"></MainView>
    <ItemView :recommendUrl="recommendUrl" @moreClick="moreClick"></ItemView>
    <Loading class="loading" v-show="isShowLoading"></Loading>
  </div>
</template>

<script>
import MainView from "./xrResourceChild/MainView.vue";
import ItemView from "./xrResourceChild/ItemView.vue";
import Loading from "components/common/loading/Loading.vue";

import { getData } from "common/utils";

export default {
  name: "XrResource",
  components: {
    MainView,
    ItemView,
    Loading,
  },
  data() {
    return {
      params: this.paramsProp,
      showPanodetail: {},
      recommendUrl: {},
      isShowLoading: false,
    };
  },
  props: ['paramsProp'],
  methods: {
    moreClick(path) {
      this.params = path.path + "?" + path.params;
      this.getData();
      this.$refs.MainView.itemIndex = 0;
      this.$refs.MainView.resetMarT();
    },
    getData() {
      this.isShowLoading = true;
      getData(this.params, (res) => {
        this.showPanodetail = res.data.showPanodetail;
        this.recommendUrl = this.showPanodetail.recommendUrl;
        this.isShowLoading = false;
      });
    },
  },
  created() {
    this.params && this.getData();
  },
};
</script>

<style lang="less" scoped>
.detailXrResource {
  height: 100vh;
  overflow: hidden;
}
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 0.05rem;
  border-radius: 0.05rem;
}
</style>