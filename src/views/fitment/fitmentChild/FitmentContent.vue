<template>
  <div class="fitment_content">
    <slot name="filterControl"></slot>
    <WrapControl class="goods_wrap" v-if="goodsList">
      <GoodsItem v-for="item in goodsList" :key="item" :goodItem="item"></GoodsItem>
      <Loading class="loading" :loadText="loadText"></Loading>
    </WrapControl>
  </div>
</template>

<script>
import WrapControl from "components/common/wrapControl/WrapControl.vue";
import GoodsItem from "./GoodsItem.vue";
import Loading from "components/common/loading/Loading.vue";

export default {
  name: "FitmentContent",
  components: {
    WrapControl,
    GoodsItem,
    Loading,
  },
  data() {
    return {
      loadText: ''
    };
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.fitment_content {
  width: 100%;
  margin-top: 0.2rem;
  padding: 0 0.15rem;
  border-radius: 0.16rem 0.16rem 0 0;
  overflow: hidden;
  box-shadow: 0 -0.05rem 0.15rem rgb(246, 246, 246);
  .goods_wrap {
    margin-top: 0.1rem;
  }
  .loading {
    margin: .1rem 0;
  }
}
</style>