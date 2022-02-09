<template>
  <div id="detail">
    <component :is='selectComponent()' :paramsProp="params"></component>
  </div>
</template>

<script>
import XrResource from "./xrResource/XrResource.vue";
import Case from './case/Case.vue';
import Video from './video/Video.vue';
import Picture from './picture/Picture.vue';

export default {
  name: "Detail",
  data() {
    return {
      params: "",
      type: "",
      list: [
        {
          type: ["picture"],
          component: "Picture",
        },
        {
          type: ["case", "case3d", "walkthrough", "recommendation"],
          component: "Case",
        },
        {
          type: ["xrResource"],
          component: "XrResource",
        },
        {
          type: ["video"],
          component: "Video",
        },
      ],
    };
  },
  props: {},
  components: {
    XrResource,
    Case,
    Video,
    Picture
  },
  methods: {
    selectComponent() {
      let res = this.list.find((item) =>
        item.type.find((item) => item == this.type)
      );
      return res.component
    },
  },
  created() {
    this.type = this.$route.params.type;
    this.params = decodeURIComponent(this.$route.params.path);
  },
};
</script>

<style lang="less" scoped>
</style>