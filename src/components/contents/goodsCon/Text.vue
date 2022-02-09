<template>
  <div>
    <div class="text">
      <h3>{{ itemText.title }}</h3>
      <span v-for="item in labelList" :key="item">{{ item }}</span>
    </div>
    <div class="stylist">
      <img :src="info.img" alt="" />
      <p class="name">{{ info.name }}</p>
      <p v-if="info.designerLabel" class="label">{{ info.designerLabel }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsText",
  data() {
    return {
      info: {},
      labelList: [],
    };
  },
  props: {
    itemText: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  updated() {
    this.info = this.itemText.authorInfo;
    this.labelList = this.itemText.showTagsSimple;
  },
};
</script>

<style lang="less" scoped>
@import url("~assets/less/themeConfig.less");
.text {
  max-height: 0.51rem;
  font-size: 0.15rem;
  margin-top: 0.1rem;
  h3:extend(.snh) {
    width: 3rem;
    height: 0.28rem;
    line-height: 0.28rem;
  }
  span {
    line-height: 0.23rem;
    color: #999;
    font-size: 0.13rem;
    margin-right: 0.1rem;
  }
}
.stylist {
  height: 0.31rem;
  display: flex;
  align-items: center;
  img {
    width: 0.21rem;
    border-radius: 50%;
  }
  .name:extend(.snh) {
    font-size: 12px;
    color: #999;
    margin: 0 0.1rem;
  }
  .label {
    border: 1px solid #b3d4f3;
    color: #2b99ff;
    line-height: 0.17rem;
    padding: 0 0.05rem;
    border-radius: 0.05rem;
  }
}
</style>