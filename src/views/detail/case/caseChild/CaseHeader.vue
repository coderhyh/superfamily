<template>
  <div :class="{ CaseHeader: true, padT: type == 'walkthrough' }">
    <div class="hand_pic" v-if="type != 'walkthrough'">
      <img
        :src="
          type == 'recommendation' ? caseDetail.headImgs[0].url : caseDetail.img
        "
        alt=""
      />
      <div class="icon" v-if="type == 'case3d'">
        <img src="~assets/imgs/goods/3D.svg" alt="" />
      </div>
    </div>

    <div class="content">
      <div class="title">{{ caseDetail.title }}</div>
      <div class="authorInfo">
        <div class="top">
          <section>
            <img :src="authorInfo.img" alt="" />
            <div class="name">{{ authorInfo.name }}</div>
          </section>
          <section v-if="type == 'case3d' || type == 'case'">
            <p>关注</p>
            <p>咨询</p>
          </section>
        </div>
      </div>
      <div class="labels" v-if="type == 'case3d' || type == 'case'">
        <div class="label_item">
          <p class="title">户型</p>
          <p class="tex">{{ showTags.houseLayout }}</p>
        </div>
        <div class="label_item">
          <p class="title">面积</p>
          <p class="tex">{{ showTags.area }}</p>
        </div>
        <div class="label_item">
          <p class="title">风格</p>
          <p class="tex">{{ showTags.style }}</p>
        </div>
        <div class="label_item">
          <p class="title">费用</p>
          <p class="tex">{{ showTags.price }}</p>
        </div>
        <div class="label_item">
          <p class="title">类型</p>
          <p class="tex">{{ showTags.mode || "--" }}</p>
        </div>
      </div>
      <div class="down" v-if="type == 'case3d' || type == 'case'">
        <p class="name">
          {{ shop.title }} <span>{{ shop.name }}</span>
        </p>
        <p>
          <i class="iconfont icon-fanhui"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseHeader",
  data() {
    return {
      authorInfo: {},
      showTags: {},
      shop: {},
    };
  },
  components: {},
  props: {
    caseDetail: {
      type: Object,
      default() {
        return {};
      },
    },
    type: String,
  },
  watch: {
    caseDetail: {
      handler() {
        this.authorInfo =
          this.caseDetail.authorInfo || this.caseDetail.list[0].author;
        this.showTags = this.caseDetail.showTags;
        this.shop = this.caseDetail.shop;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
@import url("~assets/less/themeConfig.less");
.padT {
  padding-top: 0.6rem;
}
.CaseHeader {
  width: 100vw;
  color: #333;
  overflow: hidden;
  img {
    width: 100%;
  }
  .hand_pic {
    width: 100%;
    height: 2.25rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
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
  .content {
    padding: 0 0.18rem;
    margin-top: 0.1rem;
    > .title:extend(.snh) {
      font-weight: 700;
      font-size: 0.2rem;
      line-height: 0.3rem;
    }
    .authorInfo {
      margin-top: 0.1rem;
      .top {
        display: flex;
        justify-content: space-between;
        section {
          display: flex;
          align-items: center;
          img {
            width: 0.33rem;
            height: 0.33rem;
            border-radius: 50%;
            margin-right: 0.07rem;
          }
          .name {
            display: inline-block;
            font-size: 0.17rem;
          }
          p {
            width: 0.51rem;
            line-height: 0.25rem;
            border: 1px solid #cccccc;
            text-align: center;
            border-radius: 0.15rem;
            margin: 0 0.03rem;
          }
        }
      }
    }
    .labels {
      width: 100%;
      height: 0.72rem;
      box-shadow: 1px 1px 0.1rem rgb(226, 226, 226);
      border-radius: 0.1rem;
      margin-top: 0.15rem;
      padding: 0.12rem 0.17rem;
      display: flex;
      .label_item {
        flex: 1;
        text-align: center;
        .title {
          color: #999;
          font-size: 0.14rem;
          line-height: 0.24rem;
        }
        .tex:extend(.snh) {
          font-size: 0.14rem;
          line-height: 0.24rem;
          width: 100%;
          height: 0.24rem;
        }
      }
    }
    .down {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 0.15rem;
      font-size: 0.14rem;
      .name {
        color: #999;
        span {
          color: #333;
          margin-left: 0.05rem;
        }
      }
      i {
        display: inline-block;
        transform: rotate(180deg);
      }
    }
  }
}
</style>