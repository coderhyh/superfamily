<template>
  <div class="guess">
    <div class="title">
      <p>{{ guess.title }}</p>
      <p class="city">郑州市 <i class="iconfont icon-fanhui"></i></p>
    </div>
    <div class="labels">
      擅长<span v-for="(item, index) in tags" :key="index"
        >{{ item }}{{ index < tags.length - 1 ? "/" : "" }}</span
      >的装修公司
    </div>
    <div class="supplier_list">
      <img v-if="!list.length" src="~assets/imgs/common/empty.png" alt="">
      <div class="supplier" v-for="item in list" :key="item.shopId">
        <div class="info">
          <div class="left">
            <img :src="item.logo" alt="" />
            <section>
              <div class="name">
                {{item.name}}
                <img src="~assets/imgs/common/guarantee.png" alt="" />
              </div>
              <p>{{item.price}} {{item.orderCnt}}人已预约</p>
            </section>
          </div>

          <div class="right">
            <i class="iconfont icon-dianhua"></i>
          </div>
        </div>
        <div class="picture">
          <img v-for="img in item.imageList" :src="img.src.url" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuessList",
  data() {
    return {
      tags: [],
      list: []
    };
  },
  props: {
    guess: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    guess: {
      handler() {
        this.tags = this.guess.tags;
        this.list = this.guess.list;
      },
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.guess {
  padding: 0 0.18rem;
  overflow: hidden;
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.07rem;
    margin-top: 0.25rem;
    font-weight: 700;
    font-size: 0.17rem;
    color: #000;
    line-height: 0.27rem;
    .city {
      font-weight: normal;
      font-size: 0.14rem;
      i {
        display: inline-block;
        transform: rotate(-90deg);
      }
    }
  }
  .labels {
    font-size: 0.13rem;
    color: #999;
    span {
      color: #333333;
    }
  }
  .supplier_list {
    margin: 0.1rem 0;
    overflow: hidden;
    img {
      width: 1rem;
      display: block;
      margin: 0 auto;
    }
    .supplier {
      margin: .1rem 0;
      .info {
        height: 0.53rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;
          > img {
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            margin-right: 0.1rem;
          }
          section {
            font-size: 0.13rem;
            line-height: 0.2rem;
            .name {
              img {
                width: 0.45rem;
                height: 0.16rem;
                vertical-align: middle;
                margin-left: 0.05rem;
              }
            }
            p {
              color: #999999;
              font-size: 0.12rem;
            }
          }
        }
        .right {
          background: #f5f5f5;
          line-height: 0.3rem;
          text-align: center;
          border-radius: 50%;
          width: 0.3rem;
          height: 0.3rem;
          font-size: 0.2rem;
        }
      }
      .picture {
        margin-top: .05rem;
        display: flex;
        justify-content: space-between;
        img {
          width: 1.08rem;
          height: 0.72rem;
          object-fit: cover;
          border-radius: 0.1rem;
        }
      }
    }
  }
}
</style>