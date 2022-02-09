<template>
  <div class="MainTab">
    <div class="stylist">
      <div class="left">
        <img :src="author.img" alt="" />
        <p>{{ author.name }}</p>
      </div>
      <div class="right">
        <p>同款装修报价</p>
      </div>
    </div>

    <WrapControl class="WrapControl">
      <MainTabItem
        :sceneGroup="sceneGroup"
        @itemClick="itemClick"
        ref="wrapper"
      ></MainTabItem>
      <div class="slideUp"></div>
    </WrapControl>
  </div>
</template>

<script>
import WrapControl from "components/common/wrapControl/WrapControl.vue";
import MainTabItem from "components/contents/fullViewTab/FullTabItem.vue";
// import Iscroll from "iscroll";

export default {
  name: "MainTab",
  components: {
    WrapControl,
    MainTabItem,
  },
  data() {
    return {
      author: {},
      sceneGroup: [],
      iScroll: null,
    };
  },
  methods: {
    itemClick(index) {
      this.$emit("itemClick", index);
    },
  },
  mounted() {
    // this.iScroll = new Iscroll(this.$refs.wrapper, {});
  },
  props: {
    showPanodetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    showPanodetail: {
      handler() {
        this.sceneGroup = this.showPanodetail.sceneGroup;
        this.author = this.showPanodetail.author;
      },
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~assets/less/themeConfig.less");
.MainTab {
  width: 100%;
  height: 1.95rem;
  position: absolute;
  left: 0;
  bottom: 0;
  .stylist {
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    .left {
      width: 70%;
      display: flex;
      align-items: center;
      padding-left: 0.1rem;
      img {
        width: 0.33rem;
        border-radius: 50%;
        margin-right: 0.1rem;
      }
      p:extend(.snh) {
        width: 1.5rem;
        font-size: 0.16rem;
        font-weight: 600;
        color: #fff;
      }
    }
    .right {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        background: #ff4280;
        line-height: 0.2rem;
        border-radius: 0.1rem;
        padding: 0.02rem 0.1rem;
        font-weight: 900;
        color: #fff;
      }
    }
  }
  .WrapControl {
    height: 1.35rem;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.15rem;
    .slideUp {
      height: 0.3rem;
      background: url('~assets/imgs/common/slideUp.svg') no-repeat center bottom / .15rem;
      animation: slideUp 1s infinite;
    }
    @keyframes slideUp {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-.1rem);
      }
    }
  }
}
</style>