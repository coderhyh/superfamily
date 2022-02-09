<template>
  <div class="searchWrap">
    <Search class="search">
      <template #center>
        <div class="center">
          <input
            type="text"
            :placeholder="modelValue"
            v-model="val"
            @focus="switchover"
            @change="$emit('update:modelValue', val)"
          />
          <i
            v-show="val"
            class="iconfont icon-chacha"
            @click="
              val = '';
              $emit('empty');
              switchover()
            "
          ></i>
        </div>
      </template>
      <template #right>
        <div class="right" @click="$emit('startSearch')">搜索</div>
      </template>
    </Search>
  </div>
</template>

<script>
import Search from "components/common/search/Search.vue";
export default {
  name: "SearchControl",
  data() {
    return {
      val: "",
    };
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  components: {
    Search,
  },
  methods: {
    switchover() {
      this.$parent.isSearch = true;
      this.$parent.searchInfo = {};
    }
  },
};
</script>

<style lang="less" scoped>
.searchWrap {
  width: 3.44rem;
  height: 0.35rem;
  margin: 0.05rem auto 0;
  .search {
    color: #333333;
    font-size: 0.13rem;
    background: #f5f5f5;
    .center {
      display: flex;
      input {
        width: 100%;
        height: 0.35rem;
        border: none;
        outline: none;
        background: #f5f5f5;
        color: #333333;
      }
      i {
        color: #939393;
        font-size: 0.12rem;
        line-height: 0.35rem;
      }
    }
    .right {
      width: 100%;
      height: 100%;
      background: #f5f5f5;
    }
  }
}
</style>