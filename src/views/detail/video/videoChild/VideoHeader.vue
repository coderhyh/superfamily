<template>
  <div class="VideoHeader" v-if="Object.keys(detailObj).length">
    <div class="video">
      <video controls autoplay :src="detailObj.videoUrl"></video>
    </div>
    <div class="content">
      <div class="title">{{ detailObj.title }}</div>
      <div class="author">
        <section>
          <div class="top">
            <img :src="detailObj.authorInfo.img" alt="" />
            <p class="name">{{ detailObj.authorInfo.name }}</p>
            丨
            <p>装馨家</p>
          </div>
          <div class="down">
            <div class="date">发布时间: {{ detailObj.publishedTime }}</div>
            <div class="info">简介：{{ detailObj.description }}</div>
          </div>
        </section>
        <div class="collect">
          <i class="iconfont icon-shoucang"></i>
          收藏
        </div>
      </div>
      <div class="offer">
        <section>
          <p class="label">{{ referData.tag }}</p>
          <p class="title">{{ referData.text }}?</p>
        </section>
        <p class="labelBtn">{{ referData.button }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoHeader",
  data() {
    return {
      referData: {},
    };
  },
  props: {
    detailObj: {
      type: Object,
      default() {
        return {};
      },
    },
    embedquote: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    embedquote: {
      handler() {
        this.referData = this.embedquote[0].referData;
      },
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.VideoHeader {
  .video {
    video {
      width: 100vw;
    }
  }
  .content {
    padding: 0.15rem;
    > .title {
      color: #000;
      font-weight: 700;
      font-size: 0.18rem;
    }
    .author {
      display: flex;
      justify-content: space-between;
      margin: 0.1rem 0 0;
      font-size: 0.13rem;
      border-bottom: 1px solid #f5f5f5;
      padding-bottom: 0.1rem;
      section {
        color: #999;
        width: 2.86rem;
        .top {
          display: flex;
          align-items: center;
          img {
            width: 0.16rem;
            height: 0.16rem;
            border-radius: 50%;
            margin-right: 0.05rem;
          }
        }
        .down {
          .date {
            margin: 0.1rem 0;
          }
          .info {
            color: #333;
          }
        }
      }
      .collect {
        img {
          width: 0.35rem;
          height: 0.35rem;
        }
      }
    }
    .offer {
      height: 0.55rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      section {
        display: flex;
        align-items: center;
        .label {
          padding: 0 0.04rem;
          margin-bottom: 0.02rem;
          border-radius: 0.21rem;
          line-height: 1.5;
          border: 1px solid #efb9b9;
          color: #f13f40;
          margin-right: 0.05rem;
        }
        .title {
          color: #555;
        }
      }
      .labelBtn {
        border-radius: 0.14rem;
        padding: 0 0.1rem;
        height: 0.28rem;
        line-height: 0.28rem;
        background: #ff3673;
        color: #fff;
      }
    }
  }
}
</style>