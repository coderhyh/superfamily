<template>
  <div class="SearchText">
    <div class="title">
      <p>{{ name }}</p>
      <i
        v-if="isHistory"
        @click="delHistory"
        class="iconfont icon-lajitong"
      ></i>
    </div>
    <ul>
      <li v-for="item in list" :key="item" @click="$emit('textSearch', isHistory ? item : item.word)">
        <i v-if="item.type == 'hot'"></i>{{ isHistory ? item : item.word }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchText",
  components: {},
  props: {
    name: String,
    isHistory: Boolean,
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    delHistoryUrl: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    delHistory() {
      this.$emit("delSucceed");
    },
  },
};
</script>

<style lang="less" scoped>
.SearchText {
  width: 3.4rem;
  margin: 0.15rem auto;
  .title {
    display: flex;
    line-height: 0.16rem;
    justify-content: space-between;
    font-size: 0.14rem;
    color: #333;
    font-weight: 700;
    i {
      font-size: 0.25rem;
      font-weight: normal;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.05rem;
    li {
      padding: 0.07rem 0.12rem;
      background: #f5f5f5;
      margin: 0.05rem;
      border-radius: 0.15rem;
      color: #333333;
      i {
        margin-right: 0.05rem;
        display: inline-block;
        width: 0.11rem;
        height: 0.11rem;
        background: url("~assets/imgs/common/hot.png") no-repeat center / 100%;
      }
    }
  }
}
</style>