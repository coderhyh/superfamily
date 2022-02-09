<template>
  <div class="goods_item" v-if="Object.keys(goodItem).length && goodItem.type =='shop'">
    <div class="left">
      <img :src="goodItem.logo" alt="" />
    </div>
    <div class="right">
      <div class="title">{{ goodItem.name }} <img v-if="goodItem.insureShop" src="~assets/imgs/common/guarantee.png" alt=""></div>
      <div class="evaluate">
        <div class="xing">
          <img v-for="index in 5" :key="index" :src="getXing(index)" alt="" />
        </div>
        <div class="text">{{ goodItem.aggregateRating.text }}</div>
      </div>
      <div class="intro">
        <span v-if="goodItem.capacityTag">{{ goodItem.capacityTag[0] }}</span>
        <span v-if="goodItem.recentSubmit">{{ goodItem.recentSubmit }}</span>
      </div>
      <div class="labels" v-if="goodItem.serviceTag">
        <p v-for="item in goodItem.serviceTag" :key="item">{{ item }}</p>
      </div>
      <div class="picture" v-if="goodItem.imageList.length">
        <img
          v-for="item in goodItem.imageList"
          :key="item"
          :src="item.src.url"
          alt=""
        />
      </div>
      <div class="bottom_text">
        <p>免费量房<i class="iconfont icon-fanhui"></i></p>
        <p>户型设计<i class="iconfont icon-fanhui"></i></p>
        <p>免费报价<i class="iconfont icon-fanhui"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    getXing(index) {
      return index <= this.goodItem.aggregateRating.score
        ? require("assets/imgs/common/xing_active.png")
        : require("assets/imgs/common/xing.png");
    },
  },
};
</script>

<style lang="less" scoped>
.goods_item {
  max-height: 2.1rem;
  margin-bottom: 0.15rem;
  display: flex;
  .left {
    margin-right: 0.1rem;
    img {
      width: 0.36rem;
      height: 0.36rem;
      border-radius: 50%;
    }
  }
  .right {
    flex: 1;
    .title {
      font-size: 0.14rem;
      font-weight: 700;
      color: #333;
      img {
        width: 0.45rem;
        height: 0.16rem;
        vertical-align: middle;
      }
    }
    .evaluate {
      margin-top: 0.05rem;
      display: flex;
      color: #b3a6c4;
      .xing {
        margin-right: 0.1rem;
        img {
          width: 0.12rem;
          height: 0.12rem;
        }
      }
    }
    .intro {
      margin-top: 0.05rem;
      color: #b3a6c4;
      span {
        margin-right: 0.1rem;
      }
    }
    .labels {
      display: flex;
      margin-top: 0.05rem;
      p {
        height: 0.19rem;
        line-height: 0.19rem;
        padding: 0 0.06rem;
        border-radius: 0.1rem;
        text-align: center;
        margin-right: 0.05rem;
        color: rgb(43, 153, 255);
        background-color: rgb(236, 247, 255);
      }
    }
    .picture {
      width: 100%;
      margin-top: 0.05rem;
      display: flex;
      justify-content: space-between;
      img {
        width: 0.95rem;
        height: 0.95rem;
        object-fit: cover;
        border-radius: 0.1rem;
      }
    }
    .bottom_text {
      margin-top: 0.05rem;
      display: flex;
      background: #f7f7f7;
      line-height: 0.27rem;
      border-radius: 0.1rem;
      p {
        flex: 1;
        text-align: center;
        i {
          display: inline-block;
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>