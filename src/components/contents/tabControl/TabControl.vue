<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ cur: index == curIndex }"
      @click="curClick(item, index)"
    >
      <span>{{ item.tabText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  data() {
    return {
      curIndex: 0,
    };
  },
  methods: {
    curClick(item, index) {
      if (this.curIndex != index) {
        this.curIndex = index;
        this.$emit("tabClick", item.tabUrl, index);
      }
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.tab-control {
  background: white;
  display: flex;
  font-size: 16px;
  text-align: center;
  line-height: 0.4rem;

  .tab-control-item {
    flex: 1;
  }
  span {
    padding: 5px;
    // font-size: 0.12rem;
  }
  .cur span {
    color: #333333;
    font-weight: 900;
    border-bottom: 0.03rem solid #ff3f88;
  }
}
</style>