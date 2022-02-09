<template>
  <div class="MainTabItem" ref="wrapper">
    <div ref="content" class="content">
      <div
        class="item"
        v-for="(item, index) in sceneGroup"
        :key="index"
        @click="itemClick(index)"
      >
        <img :src="item.thumbPath" alt="" />
        <p>{{ item.name == "未命名" ? "" : item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { iScroll } from "common/iscroll4";

export default {
  name: "FullTabItem",
  props: {
    sceneGroup: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      iScroll: null,
    };
  },
  watch: {
    // sceneGroup: {
    //   handler() {
    //     // this.iScroll.refresh();
    //   },
    //   deep: true,
    //   // immediate: true,
    // },
  },
  methods: {
    itemClick(index) {
      this.$emit("itemClick", index);
    },
  },
  mounted() {
    this.iScroll = new iScroll(this.$refs.wrapper, {
      vScroll: false,
      hScrollbar: false,
      vScrollbar: false,
    });
    this.iScroll.refresh();
  },
  updated() {
    this.iScroll.refresh();
  },
};
</script>

<style lang="less" scoped>
@import url("~assets/less/themeConfig.less");
.MainTabItem {
  width: 100%;
  height: 0.75rem;
  position: relative;
  overflow: hidden;

  .content {
    // width: 2000px;
    display: flex;
    list-style: none;
    position: absolute;
    .item {
      width: 1.1rem;
      height: 0.75rem;
      margin: 0 0.03rem;
      border-radius: .1rem;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
      p:extend(.snh) {
        width: 100%;
        height: 0.18rem;
        position: absolute;
        bottom: 0;
        text-align: center;
        line-height: 0.18rem;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
      }
    }
  }
}
</style>