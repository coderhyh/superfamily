<template>
  <div class="StrategyContent">
    <div class="article" v-if="learnarticle.length">
      <div class="title">精选文章</div>
      <div class="article_item" v-for="item in learnarticle">
        <img :src="item.coverImage.url" alt="" />
        <section>
          <div class="title">{{ item.title }}</div>
          <div class="author">
            <img :src="item.authorInfo.img" alt="" />
            <p class="name snh">{{ item.authorInfo.name }}</p>
            <p class="date">{{ item.datePublished }}</p>
            <div class="look_num">{{ item.asweight }}阅读</div>
          </div>
        </section>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "StrategyContent",
  data() {
    return {};
  },
  props: {
    learnarticle: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.StrategyContent {
  min-height: 100vh;
  margin-top: 0.13rem;
  padding: 0 0.15rem;
  background-color: #ffffff;
  background-image: linear-gradient(180deg, #ffffff 0%, #f7f7f7 50%);
  .article {
    padding: 0.12rem;
    box-shadow: 0 0.02rem 0.2rem 0 rgb(245, 245, 245);
    border-radius: 0.08rem;
    background: #fff;
    > .title {
      font-size: 0.15rem;
      line-height: 0.25rem;
      font-weight: 700;
      color: #333333;
    }
    .article_item {
      display: flex;
      align-items: center;
      height: 0.99rem;
      margin-top: 0.1rem;
      > img {
        border-radius: 0.1rem;
        object-fit: cover;
        width: 0.89rem;
        height: 0.89rem;
        margin-right: 0.1rem;
      }
      section {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.08rem 0;
        .title {
          font-weight: 700;
          font-size: 0.15rem;
          color: #555;
        }
        .author {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #999999;
          img {
            width: 0.18rem;
            height: 0.18rem;
            object-fit: cover;
            border-radius: 50%;
          }
          .name {
            width: 0.86rem;
          }
        }
      }
    }
  }
}
</style>