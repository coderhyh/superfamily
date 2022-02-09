<template>
  <div class="SearchContent">
    <SearchDateil :searchInfo="searchInfo" v-if="Object.keys(searchInfo).length"></SearchDateil>
    <slot></slot>
  </div>
</template>

<script>
import SearchDateil from "./SearchDateil.vue";

export default {
  name: "SearchContent",
  components: {
    SearchDateil,
  },
  props: {
    searchInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.SearchContent {
  width: 3.4rem;
  margin: 0.2rem auto 0;
}
</style>