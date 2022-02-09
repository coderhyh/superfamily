<template>
  <div class="CaseContent">
    <div v-for="item in article" :key="item">
      <p v-if="item.type == 'title'" class="title">{{ item.content }}</p>
      <p v-if="item.type == 'text'" class="text">{{ item.content }}</p>
      <div v-if="item.type == 'image'" class="pic">
        <img :src="item.content" alt="" />
        <div v-if="item.type == '3dImage'" class="icon">
          <img src="~assets/imgs/goods/3D.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseContent",
  data() {
    return {};
  },
  props: {
    article: {
      type: Object,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.CaseContent {
  padding: 0 0.18rem;
  margin-top: 0.25rem;
  div {
    width: 100%;
    .title {
      display: block;
      margin-bottom: 0.07rem;
      font-weight: 700;
      font-size: 0.17rem;
      color: #000;
      line-height: 0.27rem;
    }
    .text {
      display: block;
      margin-bottom: 0.19rem;
      font-size: 0.17rem;
      letter-spacing: 0.01rem;
      line-height: 0.29rem;
    }
    .pic {
      width: 100%;
      position: relative;
      img {
        width: 100%;
      }
      .icon {
        position: absolute;
        box-sizing: content-box;
        border-radius: 50%;
        padding: 0.05rem;
        background: rgba(0, 0, 0, 0.3);
        width: 0.35rem;
        height: 0.35rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>