<template>
  <div class="detailPicture" v-if="list.length">
    <VideoNav></VideoNav>
    <div class="author">
      <section>
        <img :src="author.img" alt="" />
        <div class="name">{{ author.name }}</div>
      </section>
      <div class="label">关注</div>
    </div>

    <van-swipe
      class="my-swipe"
      :show-indicators="false"
      @change="(index) => (num = index)"
    >
      <van-swipe-item v-for="(item, index) in list">
        <img :src="item.resImage" alt="" />
      </van-swipe-item>
    </van-swipe>

    <div class="text_info">
      <div class="title">
        <span :class="{ tex: true, snh: flag1 }">{{ detailObj.title }}</span>
        <p @click="flag1 = !flag1">{{ flag1 ? "展开" : "折叠" }}</p>
      </div>
      <div class="info">
        <span class="num">{{ num + 1 }}/{{ list.length }}</span>
        <span :class="{ tex: true, snh: flag2 }">{{ list[num].desc }}</span>
        <p @click="flag2 = !flag2">{{ flag2 ? "展开" : "折叠" }}</p>
      </div>
    </div>

    <div class="bottom">
      <div class="text_box">
        <p class="text">这套装修到我家需要多少钱</p>
        <p class="btn">同款装修报价</p>
      </div>
    </div>
  </div>
</template>

<script>
import VideoNav from "../video/videoChild/VideoNav.vue";

import { getData } from "common/utils";
export default {
  name: "Picture",
  data() {
    return {
      detailObj: {},
      author: {},
      list: [],
      num: 0,
      flag1: true,
      flag2: true,
    };
  },
  components: {
    VideoNav,
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
        this.detailObj = res.data.showPicturedetail;
        this.author = res.data.showPicturedetail.author;
        this.list = this.detailObj.list;
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
.detailPicture {
  .author {
    width: 100vw;
    padding: 0 0.2rem;
    position: absolute;
    z-index: 999;
    height: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 0.15rem;
    section {
      display: flex;
      align-items: center;
      img {
        width: 0.36rem;
        border-radius: 50%;
        margin-right: 0.05rem;
      }
    }
    .label {
      padding: 0 0.14rem;
      font-size: 0.12rem;
      line-height: 0.25rem;
      text-align: center;
      border-radius: 0.15rem;
      border: 1px solid rgba(255, 255, 255, 0.356);
    }
  }
  .my-swipe {
    height: calc(100vh - 0.44rem - 0.53rem);
    .van-swipe-item {
      display: flex;
      align-items: center;
      background-color: #000;
      img {
        width: 100%;
      }
    }
  }
  .text_info {
    color: #fff;
    width: 100vw;
    min-height: 0.86rem;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0.53rem;
    left: 0;
    right: 0;
    padding: 0.15rem;
    font-size: 0.18rem;
    line-height: 0.26rem;
    .info {
      font-size: 0.16rem;
    }
    .title,
    .info {
      position: relative;
      .num {
        vertical-align: top;
        margin-right: .1rem;
      }
      .tex {
        display: inline-block;
        width: 2.8rem;
        -webkit-line-clamp: 1;
      }
    }
    p {
      position: absolute;
      right: 0;
      top: 0;
      color: #8e8e8e;
    }
  }
  .bottom {
    height: 0.53rem;
    display: flex;
    background: #000;
    justify-content: center;
    .text_box {
      height: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 3.4rem;
      padding: 0 0.05rem 0 0.15rem;
      border-radius: 0.15rem;
      background-color: hsla(0, 0%, 97.6%, 0.15);
      color: #fff;
      .text {
        font-size: 0.14rem;
      }
      .btn {
        background-image: linear-gradient(90deg, #ff47a5, #ff3673);
        border-radius: 0.14rem;
        padding: 0 0.07rem;
        height: 0.28rem;
        line-height: 0.28rem;
        color: #fff;
        font-size: 0.12rem;
      }
    }
  }
}
</style>