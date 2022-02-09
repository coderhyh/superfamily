<template>
  <div class="MainView" :style="{ marginTop: marT + 'px', transition: tra }">
    <NavBar class="nav_bar">
      <template #left>
        <div class="left" @click="$router.back()"></div>
      </template>
      <template #right>
        <div class="right">
          <p></p>
        </div>
      </template>
    </NavBar>

    <XrResourceItem
      :sceneGroup="showPanodetail.sceneGroup || []"
      :itemIndex="itemIndex"
    ></XrResourceItem>

    <MainTab
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      :showPanodetail="showPanodetail"
      @itemClick="itemClick"
      :class="{ MainTab: true, opacity: opacity }"
    ></MainTab>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import XrResourceItem from "./XrResourceItem.vue";
import MainTab from "components/contents/fullViewTab/MainTab.vue";

export default {
  name: "MainView",
  components: {
    NavBar,
    XrResourceItem,
    MainTab,
  },
  props: {
    showPanodetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      marT: 0,
      oldMarT: 0,
      winH: -(window.innerHeight * 0.8),
      tra: "none",
      startY: 0,
      moveY: 0,
      opacity: false,
      itemIndex: 0,
    };
  },
  methods: {
    // tab 小图点击
    itemClick(index) {
      this.itemIndex = index;
      this.resetMarT();
    },
    resetMarT() {
      this.tra = "all .5s ease";
      this.$nextTick(() => {
        this.opacity = false;
        this.marT = 0;
        this.oldMarT = 0;
      });
    },
    touchstart(e) {
      this.tra = "none";
      this.startY = e.changedTouches[0].clientY;
    },
    touchmove(e) {
      this.moveY = e.changedTouches[0].clientY;
      let cha = this.moveY - this.startY;
      if (this.oldMarT == 0) {
        this.marT = cha >= 0 ? 0 : cha;
      } else {
        this.marT = cha >= 0 ? cha + this.winH : this.winH;
      }
    },
    touchend(e) {
      let endY = e.changedTouches[0].clientY;
      let cha = this.moveY == 0 ? endY - this.startY : this.moveY - this.startY;
      this.tra = "all .5s ease";
      this.$nextTick(() => {
        if (this.oldMarT == 0) {
          this.marT = -cha > 100 ? this.winH : 0;
          this.oldMarT = this.marT;
        } else {
          this.marT = cha < 100 ? this.winH : 0;
          this.oldMarT = this.marT;
        }
        this.moveY = 0;
        this.opacity = this.marT != 0;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.MainView {
  height: 100vh;
  position: relative;
  // margin-top: -80vh;
  overflow: hidden;
  .nav_bar {
    padding: 0.1rem;
    box-shadow: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    .left,
    p {
      width: 0.35rem;
      height: 0.35rem;
      border-radius: 50%;
      background: url("~assets/imgs/common/back.svg") no-repeat center / 0.25rem
        rgba(0, 0, 0, 0.3);
    }
    .right {
      width: 100%;
      overflow: hidden;
      p {
        float: right;
        background: url("~assets/imgs/common/collect.svg") no-repeat center /
          0.25rem rgba(0, 0, 0, 0.3);
      }
    }
  }
  .MainTab {
    transition: all 0.5s;
  }
  .opacity {
    opacity: 0;
  }
}
</style>