<template>
  <div class="ItemView">
    <p class="title">相似推荐</p>
    <ul>
      <li v-for="item in list.slice(0, 6)" :key="item" @click="click(item.itemUrl)">
        <img :src="item.coverImage.url" alt="" />
        <p>{{item.titleLabel}}</p>
      </li>
    </ul>
    <div>查看更多 &gt;</div>
  </div>
</template>

<script>
import { getData } from "common/utils";
export default {
  name: "ItemView",
  data() {
    return {
      list: []
    };
  },
  props: {
    recommendUrl: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    recommendUrl: {
      handler() {
        this.getData();
      },
      deep: true,
    },
  },
  methods: {
    getData() {
      const url = this.recommendUrl.path + "?" + this.recommendUrl.params;
      getData(url, (res) => {
        this.list = res.data.showPanorecommend.list;
      });
    },
    click(path) {
      this.$emit("moreClick", path);
    }
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.ItemView {
  height: 80vh;
  background: #fff;
  padding: 0.15rem;
  overflow: hidden;
  > p {
    font-size: 0.19rem;
    line-height: 0.3rem;
  }
  > div {
    margin-top: 0.1rem;
    font-size: 0.17rem;
    text-align: center;
  }
  ul {
    margin-top: 0.1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      margin-bottom: 0.1rem;
      width: 1.68rem;
      height: 1.22rem;
      overflow: hidden;
      border-radius: 0.1rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      p {
        position: absolute;
        bottom: 0.05rem;
        right: 0.05rem;
        font-size: 0.14rem;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        padding: 0.03rem 0.05rem;
        border-radius: 0.7rem;
      }
    }
  }
}
</style>