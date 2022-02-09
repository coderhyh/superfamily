<template>
  <div class="MainGoods">
    <div v-for="item in goods" :key="item.nid">
      <component
        :is="isComponent(item)"
        :goodItem="item"
        @click="goFullView(item)"
      ></component>
    </div>

    <Loading></Loading>
  </div>
</template>

<script>
import Case from "./Case";
import Picture from "./Picture";
import Walkthrough from "./Walkthrough.vue";
import Loading from "components/common/loading/Loading.vue";

export default {
  name: "MainGoods",
  components: {
    Case,
    Picture,
    Walkthrough,
    Loading,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    goFullView(item) {
      const { path, params } = item.itemUrl;
      let p = encodeURIComponent(path + "?" + params);
      let type = item.resourceType;
      if (type == "case" && item.caseType == "2") {
        type = "case3d";
      } else if (type == "case" && item.caseType == "") {
        type = "case";
      }
      this.$router.push("/detail/" + p + "/" + type);
    },
    isComponent(item) {
      const type = item.resourceType;
      if (type == "case" || type == "xrResource" || type == "video") {
        return "Case";
      } else if (type == "walkthrough" || type == "recommendation") {
        return "Walkthrough";
      } else if (type == "picture") {
        return "Picture";
      }
    },
  },
  updated() {},
};
</script>

<style lang="less" scoped>
.MainGoods {
  width: 100%;
  padding: 0 0.17rem;
  overflow: hidden;
}
</style>