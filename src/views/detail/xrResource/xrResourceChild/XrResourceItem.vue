<template>
  <div class="FullViewItem" ref="FullView"></div>
</template>

<script>
import * as Panolens from "panolens";

export default {
  name: "FullViewItem",
  data() {
    return {
      viewer: null,
      panorama: null,
    };
  },
  props: {
    sceneGroup: {
      type: Array,
      default() {
        return [];
      },
    },
    itemIndex: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    sceneGroup: {
      handler() {
        this.createView();
      },
      deep: true,
    },
    itemIndex() {
      // this.unmount();
      this.createView();
    },
  },
  methods: {
    createView() {
      this.viewer = new Panolens.Viewer({
        container: this.$refs.FullView, //指定容器
        autoRotate: true, //自动旋转
        controlButtons: [],
      });
      const url = this.sceneGroup[this.itemIndex].texPath;
      //立方体   分别指定六个面的贴图    右  左 上  下 前 后
      this.panorama = new Panolens.CubePanorama([
        url + "mobile_r.jpg",
        url + "mobile_l.jpg",
        url + "mobile_u.jpg",
        url + "mobile_d.jpg",
        url + "mobile_f.jpg",
        url + "mobile_b.jpg",
      ]);

      // 添加到视图中
      this.viewer.add(this.panorama);
    },
    unmount() {
      this.panorama.dispose();
      this.viewer.remove(this.panorama);
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.FullViewItem {
  width: 100%;
  height: 100vh;
  // background: pink;
}
</style>