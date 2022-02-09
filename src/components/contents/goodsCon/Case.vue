<template>
  <div class="Case">
    <div class="pic" v-if="goodItem">
      <img :src="getImg" alt="" />
      <div class="picItem_icon" v-if="isShowIcon">
        <img :src="getIcon" alt="" />
      </div>
      <div class="picItem_tex">
        {{ getText }}
        {{ goodItem.time || "" }}
      </div>
    </div>
    <Text :itemText="itemText"></Text>
  </div>
</template>

<script>
import Text from "./Text";

export default {
  name: "Case",
  components: {
    Text,
  },
  data() {
    return {
      itemText: {},
    };
  },
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
  computed: {
    getImg() {
      const type = this.goodItem.resourceType;
      let url = "";
      if (type == "video" || type == "xrResource") {
        url = this.goodItem.coverImage.url;
      } else {
        url = this.goodItem.img;
      }
      return url;
    },
    getIcon() {
      const type = this.goodItem.resourceType;
      return type == "xrResource"
        ? require("assets/imgs/goods/360.svg")
        : type == "video"
        ? require("assets/imgs/goods/play.svg")
        : type == "case"
        ? require("assets/imgs/goods/3D.svg")
        : "";
    },
    getText() {
      const type = this.goodItem.resourceType;
      return type == "case" && this.goodItem.caseType == ""
        ? this.goodItem.imgText
        : "";
    },
    isShowIcon() {
      const type = this.goodItem.resourceType;
      if (type == "case" && this.goodItem.caseType == "2") {
        return true;
      } else if (type == "xrResource" || type == "video") {
        return true;
      }
      return false;
    },
  },
  mounted() {
    this.itemText = {
      title: this.goodItem.title,
      showTagsSimple: this.goodItem.showTagsSimple,
      authorInfo: this.goodItem.authorInfo,
    };
  },
};
</script>

<style lang="less" scoped>
.Case {
  margin-top: 0.25rem;
  .pic {
    height: 1.92rem;
    border-radius: 0.1rem;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
    }
    .picItem_tex,
    .picItem_icon {
      width: 0.4rem;
      height: 0.4rem;
      position: absolute;
      right: 50%;
      bottom: 50%;
      transform: translate(50%, 50%);
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      img {
        width: 0.3rem;
      }
    }

    .picItem_tex {
      width: auto;
      height: auto;
      right: 0.1rem;
      bottom: 0.05rem;
      transform: none;
      border-radius: 0.08rem;
      color: #fff;
      line-height: 0.18rem;
      padding: 0 0.07rem;
    }
  }
}
</style>