<template>
  <div class="homeHander">
    <Search class="search" @click="goSearch">
      <template #center>
        <p>卧室</p>
      </template>
    </Search>

    <WrapControl class="homeHandList">
      <HandListItem class="handListItem" v-for="item in list" :key="item.text">
        <img :src="item.imgUrl" alt="" />
        <p>{{ item.text }}</p>
      </HandListItem>
    </WrapControl>

    <Swiper class="hand_banner">
      <img v-for="item in banner" :key="item.adId" :src="item.banner" alt="" />
    </Swiper>
  </div>
</template>

<script>
import Search from "components/common/search/Search.vue";
import WrapControl from "components/common/wrapControl/WrapControl.vue";
import HandListItem from "components/contents/homeHandList/HandListItem.vue";
import Swiper from "components/common/swiper/Swiper.vue";

export default {
  name: "HomeHander",
  components: {
    Search,
    WrapControl,
    HandListItem,
    Swiper,
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    goSearch() {
      this.$parent.$parent.goSearch();
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.homeHander {
  width: 100vw;
  height: 3.07rem;
  background: #f3f5fb;
  padding: 0 0.17rem 0;
  overflow: hidden;

  .search {
    margin-top: 0.1rem;
    p {
      line-height: 0.35rem;
    }
  }

  p {
    text-align: left;
    font-size: 0.14rem;
  }

  .homeHandList {
    margin-top: 0.12rem;
    width: 100%;
    height: 1.21rem;
    display: flex;
    flex-wrap: wrap;
    .handListItem {
      margin-top: 0.06rem;
      width: 25%;
      line-height: 0.14rem;
      color: #333;
      text-align: center;

      img {
        width: 0.4rem;
      }
      p {
        text-align: center;
        font-size: 0.13rem;
      }
    }
  }

  .hand_banner {
    width: 100%;
    height: 0.87rem;
    margin-top: 0.18rem;
    border-radius: 0.1rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
}
</style>