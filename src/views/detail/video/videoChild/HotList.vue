<template>
  <div class="hot_list">
    <p class="title">其他人还在看</p>
    <ul>
      <li v-for="item in hotlist.slice(0, 6)" :key="item">{{item.word}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HotList",
  props: {
    hotlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.hot_list {
  padding: 0 0.18rem;
  overflow: hidden;
  .title {
    margin-bottom: 0.07rem;
    margin-top: 0.1rem;
    font-weight: 700;
    font-size: 0.17rem;
    color: #000;
    line-height: 0.27rem;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49%;
      line-height: .38rem;
      color: #333333;
      font-size: .14rem;
      text-align: center;
      background: #F5F5F5;
      margin: .05rem 0;
      border-radius: .5rem;
    }
  }
}
</style>