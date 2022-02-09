<template>
  <div class="detailVideo">
    <VideoNav></VideoNav>
    <VideoHeader :detailObj="detailObj" :embedquote="embedquote"></VideoHeader>
    <HotList :hotlist="hotlist"></HotList>
    <Loading v-show="isShowLoad" class="Loading"></Loading>
  </div>
</template>

<script>
import VideoNav from "./videoChild/VideoNav.vue";
import VideoHeader from "./videoChild/VideoHeader.vue";
import HotList from "components/contents/detail/HotList.vue";
import Loading from "components/common/loading/Loading.vue";

import { getData } from "common/utils";

export default {
  name: "Video",
  data() {
    return {
      paeams: "",
      detailObj: {},
      guess: {},
      hotlist: [],
      embedquote: {},
      isShowLoad: false,
    };
  },
  props: {},
  components: {
    VideoNav,
    VideoHeader,
    HotList,
    Loading,
  },
  methods: {
    /* 
      请求数据相关
    */
    getData() {
      this.paeams = this.$route.params.path;
      this.isShowLoad = true;
      getData(this.paeams, (res) => {
        console.log(res);
        this.detailObj = res.data.showVideodetail;
        this.embedquote = res.data.showEmbedquote;
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
.detailVideo {
  .Loading {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>