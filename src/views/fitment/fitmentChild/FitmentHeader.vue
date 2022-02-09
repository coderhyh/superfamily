<template>
  <div class="fitment_header">
    <WrapControl class="wrap_list">
      <div class="list_item" v-for="item in headerList" :key="item">
        <img :src="item.imgUrl" alt="" />
        <p>{{ item.text }}</p>
      </div>
    </WrapControl>

    <div class="category_plate" v-if="headerPlate.length">
      <div class="ranking" :style="getBgc(0)">
        <p class="title">{{ headerPlate[0].text }}</p>
        <span>{{ headerPlate[0].desc }}</span>
      </div>
      <section>
        <div
          v-for="(item, index) in headerPlate.slice(1)"
          :key="item"
          class="top"
          :style="getBgc(index + 1)"
        >
          <p class="title">{{ item.text }}</p>
          <span>{{ item.desc }}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import WrapControl from "components/common/wrapControl/WrapControl.vue";

export default {
  name: "FitmentHeader",
  components: {
    WrapControl,
  },
  data() {
    return {};
  },
  props: {
    headerList: {
      type: Array,
      default() {
        return [];
      },
    },
    headerPlate: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getBgc(index) {
      return {
        background: `url(${this.headerPlate[index].bigImgUrl}) center / cover`,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.fitment_header {
  width: 100%;
  padding: 0 0.15rem;
  overflow: hidden;
  .wrap_list {
    display: flex;
    margin-top: 0.15rem;
    .list_item {
      flex: 1;
      text-align: center;
      color: #555555;
      font-size: 0.13rem;
      img {
        width: 0.36rem;
        margin-bottom: 0.02rem;
      }
    }
  }
  .category_plate {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1.34rem;
    margin-top: 0.1rem;
    .title {
      font-size: 0.15rem;
      font-weight: 700;
      color: #333;
      margin-bottom: 0.05rem;
    }
    .ranking {
      width: 49%;
      border-radius: 0.1rem;
      padding: 0.15rem;
      span {
        color: #ff4196;
      }
    }
    section {
      width: 49%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        height: 48%;
        background: pink;
        border-radius: 0.1rem;
        padding: 0.05rem;
        span {
          color: #999999;
        }
      }
    }
  }
}
</style>